import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { i as hapticSelectionChanged, j as hapticSelectionEnd, k as hapticSelectionStart } from './chunk-12e0f551.js';
var Reorder = /** @class */ (function () {
    function Reorder() {
    }
    Reorder.prototype.render = function () {
        return (h("slot", null, h("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" })));
    };
    Object.defineProperty(Reorder, "is", {
        get: function () { return "ion-reorder"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reorder, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reorder, "style", {
        get: function () { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:34px;opacity:.4}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reorder, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Reorder;
}());
var ReorderGroup = /** @class */ (function () {
    function ReorderGroup() {
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
    ReorderGroup.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    ReorderGroup.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contentEl, _a, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) return [3 /*break*/, 3];
                        return [4 /*yield*/, contentEl.componentOnReady()];
                    case 1:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 2:
                        _a.scrollEl = _c.sent();
                        _c.label = 3;
                    case 3:
                        _b = this;
                        return [4 /*yield*/, import("./gesture.js")];
                    case 4:
                        _b.gesture = (_c.sent()).createGesture({
                            el: this.doc.body,
                            queue: this.queue,
                            gestureName: 'reorder',
                            gesturePriority: 90,
                            disableScroll: true,
                            threshold: 0,
                            direction: 'y',
                            passive: false,
                            canStart: function (detail) { return _this.canStart(detail); },
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function () { return _this.onEnd(); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReorderGroup.prototype.componentDidUnload = function () {
        this.onEnd();
    };
    ReorderGroup.prototype.canStart = function (ev) {
        if (this.selectedItemEl) {
            return false;
        }
        var target = ev.event.target;
        var reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        var item = findReorderItem(reorderEl, this.el);
        if (!item) {
            console.error('reorder node not found');
            return false;
        }
        ev.data = item;
        return true;
    };
    ReorderGroup.prototype.onStart = function (ev) {
        ev.event.preventDefault();
        var item = this.selectedItemEl = ev.data;
        var heights = this.cachedHeights;
        heights.length = 0;
        var el = this.el;
        var children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        var sum = 0;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        var box = this.el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            var scrollBox = this.scrollEl.getBoundingClientRect();
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
    };
    ReorderGroup.prototype.onMove = function (ev) {
        var selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        var scroll = this.autoscroll(ev.currentY);
        var top = this.containerTop - scroll;
        var bottom = this.containerBottom - scroll;
        var currentY = Math.max(top, Math.min(ev.currentY, bottom));
        var deltaY = scroll + currentY - ev.startY;
        var normalizedY = currentY - top;
        var toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            var fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            hapticSelectionChanged();
            this.reorderMove(fromIndex, toIndex);
        }
        selectedItem.style.transform = "translateY(" + deltaY + "px)";
    };
    ReorderGroup.prototype.onEnd = function () {
        var _this = this;
        this.activated = false;
        var selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        var children = this.el.children;
        var toIndex = this.lastToIndex;
        var fromIndex = indexForItem(selectedItem);
        var ref = (fromIndex < toIndex)
            ? children[toIndex + 1]
            : children[toIndex];
        this.el.insertBefore(selectedItem, ref);
        var len = children.length;
        for (var i = 0; i < len; i++) {
            children[i].style['transform'] = '';
        }
        var reorderInactive = function () {
            if (_this.selectedItemEl) {
                _this.selectedItemEl.style.transition = '';
                _this.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
                _this.selectedItemEl = undefined;
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
    };
    ReorderGroup.prototype.itemIndexForTop = function (deltaY) {
        var heights = this.cachedHeights;
        var i = 0;
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    };
    ReorderGroup.prototype.reorderMove = function (fromIndex, toIndex) {
        var itemHeight = this.selectedItemHeight;
        var children = this.el.children;
        for (var i = 0; i < children.length; i++) {
            var style = children[i].style;
            var value = '';
            if (i > fromIndex && i <= toIndex) {
                value = "translateY(" + -itemHeight + "px)";
            }
            else if (i < fromIndex && i >= toIndex) {
                value = "translateY(" + itemHeight + "px)";
            }
            style['transform'] = value;
        }
    };
    ReorderGroup.prototype.autoscroll = function (posY) {
        if (!this.scrollEl) {
            return 0;
        }
        var amount = 0;
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
    };
    ReorderGroup.prototype.hostData = function () {
        return {
            class: {
                'reorder-enabled': !this.disabled,
                'reorder-list-active': this.activated,
            }
        };
    };
    Object.defineProperty(ReorderGroup, "is", {
        get: function () { return "ion-reorder-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReorderGroup, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReorderGroup, "events", {
        get: function () {
            return [{
                    "name": "ionItemReorder",
                    "method": "ionItemReorder",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReorderGroup, "style", {
        get: function () { return ".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"; },
        enumerable: true,
        configurable: true
    });
    return ReorderGroup;
}());
function indexForItem(element) {
    return element['$ionIndex'];
}
function findReorderItem(node, container) {
    var nested = 0;
    var parent;
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
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = 'reorder-selected';
export { Reorder as IonReorder, ReorderGroup as IonReorderGroup };
