import { hapticSelectionChanged, hapticSelectionEnd, hapticSelectionStart } from '../../utils/haptic';
export class ReorderGroup {
    constructor() {
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.activated = false;
        this.disabled = true;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
        const a = { a: 2 };
        delete a.a;
    }
    async componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            this.scrollEl = await contentEl.getScrollElement();
        }
        this.gesture = (await import('../../utils/gesture/gesture')).createGesture({
            el: this.doc.body,
            queue: this.queue,
            gestureName: 'reorder',
            gesturePriority: 90,
            disableScroll: true,
            threshold: 0,
            direction: 'y',
            passive: false,
            canStart: detail => this.canStart(detail),
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        this.onEnd();
    }
    canStart(ev) {
        if (this.selectedItemEl) {
            return false;
        }
        const target = ev.event.target;
        const reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        const item = findReorderItem(reorderEl, this.el);
        if (!item) {
            console.error('reorder node not found');
            return false;
        }
        ev.data = item;
        return true;
    }
    onStart(ev) {
        ev.event.preventDefault();
        const item = this.selectedItemEl = ev.data;
        const heights = this.cachedHeights;
        heights.length = 0;
        const el = this.el;
        const children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        let sum = 0;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        const box = this.el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            const scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this.activated = true;
        item.classList.add(ITEM_REORDER_SELECTED);
        hapticSelectionStart();
    }
    onMove(ev) {
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        const scroll = this.autoscroll(ev.currentY);
        const top = this.containerTop - scroll;
        const bottom = this.containerBottom - scroll;
        const currentY = Math.max(top, Math.min(ev.currentY, bottom));
        const deltaY = scroll + currentY - ev.startY;
        const normalizedY = currentY - top;
        const toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            const fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            hapticSelectionChanged();
            this.reorderMove(fromIndex, toIndex);
        }
        selectedItem.style.transform = `translateY(${deltaY}px)`;
    }
    onEnd() {
        this.activated = false;
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        const children = this.el.children;
        const toIndex = this.lastToIndex;
        const fromIndex = indexForItem(selectedItem);
        const ref = (fromIndex < toIndex)
            ? children[toIndex + 1]
            : children[toIndex];
        this.el.insertBefore(selectedItem, ref);
        const len = children.length;
        for (let i = 0; i < len; i++) {
            children[i].style['transform'] = '';
        }
        const reorderInactive = () => {
            if (this.selectedItemEl) {
                this.selectedItemEl.style.transition = '';
                this.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
                this.selectedItemEl = undefined;
            }
        };
        if (toIndex === fromIndex) {
            selectedItem.style.transition = 'transform 200ms ease-in-out';
            setTimeout(reorderInactive, 200);
        }
        else {
            reorderInactive();
            this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex
            });
        }
        hapticSelectionEnd();
    }
    itemIndexForTop(deltaY) {
        const heights = this.cachedHeights;
        let i = 0;
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    }
    reorderMove(fromIndex, toIndex) {
        const itemHeight = this.selectedItemHeight;
        const children = this.el.children;
        for (let i = 0; i < children.length; i++) {
            const style = children[i].style;
            let value = '';
            if (i > fromIndex && i <= toIndex) {
                value = `translateY(${-itemHeight}px)`;
            }
            else if (i < fromIndex && i >= toIndex) {
                value = `translateY(${itemHeight}px)`;
            }
            style['transform'] = value;
        }
    }
    autoscroll(posY) {
        if (!this.scrollEl) {
            return 0;
        }
        let amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    }
    hostData() {
        return {
            class: {
                'reorder-enabled': !this.disabled,
                'reorder-list-active': this.activated,
            }
        };
    }
    static get is() { return "ion-reorder-group"; }
    static get properties() { return {
        "activated": {
            "state": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        }
    }; }
    static get events() { return [{
            "name": "ionItemReorder",
            "method": "ionItemReorder",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-reorder-group:**/"; }
}
function indexForItem(element) {
    return element['$ionIndex'];
}
function findReorderItem(node, container) {
    let nested = 0;
    let parent;
    while (node && nested < 6) {
        parent = node.parentNode;
        if (parent === container) {
            return node;
        }
        node = parent;
        nested++;
    }
    return undefined;
}
const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';
