/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { i as assert, h as isEndSide } from './chunk-e7816c0b.js';

class Menu {
    constructor() {
        this.lastOnEnd = 0;
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        this.disabled = false;
        this.side = 'start';
        this.swipeGesture = true;
        this.maxEdgeStart = 50;
    }
    typeChanged(type, oldType) {
        const contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove(`menu-content-${oldType}`);
            }
            contentEl.classList.add(`menu-content-${type}`);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    }
    disabledChanged() {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    }
    sideChanged() {
        this.isEndSide = isEndSide(this.win, this.side);
    }
    swipeGestureChanged() {
        this.updateState();
    }
    async componentWillLoad() {
        this.type = this.type || this.config.get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
        if (this.isServer) {
            this.disabled = true;
        }
        else {
            this.menuCtrl = await this.lazyMenuCtrl.componentOnReady().then(p => p._getInstance());
        }
    }
    async componentDidLoad() {
        if (this.isServer) {
            return;
        }
        const el = this.el;
        const parent = el.parentNode;
        const content = this.contentId !== undefined
            ? document.getElementById(this.contentId)
            : parent && parent.querySelector && parent.querySelector('[main]');
        if (!content || !content.tagName) {
            console.error('Menu: must have a "content" element to listen for drag events on.');
            return;
        }
        this.contentEl = content;
        content.classList.add('menu-content');
        this.typeChanged(this.type, undefined);
        this.sideChanged();
        let isEnabled = !this.disabled;
        if (isEnabled) {
            const menus = this.menuCtrl.getMenusSync();
            isEnabled = !menus.some((m) => {
                return m.side === this.side && !m.disabled;
            });
        }
        this.menuCtrl._register(this);
        this.ionMenuChange.emit({ disabled: !isEnabled, open: this._isOpen });
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.doc,
            queue: this.queue,
            gestureName: 'menu-swipe',
            gesturePriority: 40,
            threshold: 10,
            canStart: ev => this.canStart(ev),
            onWillStart: () => this.onWillStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabled = !isEnabled;
        this.updateState();
    }
    componentDidUnload() {
        this.menuCtrl._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    }
    onSplitPaneChanged(ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    }
    onBackdropClick(ev) {
        if (this.lastOnEnd < ev.timeStamp - 100) {
            const shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    }
    isOpen() {
        return Promise.resolve(this._isOpen);
    }
    isActive() {
        return Promise.resolve(this._isActive());
    }
    open(animated = true) {
        return this.setOpen(true, animated);
    }
    close(animated = true) {
        return this.setOpen(false, animated);
    }
    toggle(animated = true) {
        return this.setOpen(!this._isOpen, animated);
    }
    setOpen(shouldOpen, animated = true) {
        return this.menuCtrl._setOpen(this, shouldOpen, animated);
    }
    async _setOpen(shouldOpen, animated = true) {
        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
            return this._isOpen;
        }
        this.beforeAnimation();
        await this.loadAnimation();
        await this.startAnimation(shouldOpen, animated);
        this.afterAnimation(shouldOpen);
        return shouldOpen;
    }
    async loadAnimation() {
        const width = this.menuInnerEl.offsetWidth;
        if (width === this.width && this.animation !== undefined) {
            return;
        }
        this.width = width;
        if (this.animation) {
            this.animation.destroy();
            this.animation = undefined;
        }
        this.animation = await this.menuCtrl._createAnimation(this.type, this);
    }
    async startAnimation(shouldOpen, animated) {
        const ani = this.animation.reverse(!shouldOpen);
        if (animated) {
            await ani.playAsync();
        }
        else {
            ani.playSync();
        }
    }
    _isActive() {
        return !this.disabled && !this.isPaneVisible;
    }
    canSwipe() {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    }
    canStart(detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
        }
        else if (this.menuCtrl.getOpenSync()) {
            return false;
        }
        return checkEdgeSide(this.win, detail.currentX, this.isEndSide, this.maxEdgeStart);
    }
    onWillStart() {
        this.beforeAnimation();
        return this.loadAnimation();
    }
    onStart() {
        if (!this.isAnimating || !this.animation) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        this.animation.reverse(this._isOpen).progressStart();
    }
    onMove(detail) {
        if (!this.isAnimating || !this.animation) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        const stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    }
    onEnd(detail) {
        if (!this.isAnimating || !this.animation) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        const isOpen = this._isOpen;
        const isEndSide$$1 = this.isEndSide;
        const delta = computeDelta(detail.deltaX, isOpen, isEndSide$$1);
        const width = this.width;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        const shouldComplete = isOpen
            ? isEndSide$$1 ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide$$1 ? shouldCompleteLeft : shouldCompleteRight;
        let shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 300);
        }
        this.lastOnEnd = detail.timeStamp;
        this.animation
            .onFinish(() => this.afterAnimation(shouldOpen), {
            clearExistingCallbacks: true
        })
            .progressEnd(shouldComplete, stepValue, realDur);
    }
    beforeAnimation() {
        assert(!this.isAnimating, '_before() should not be called while animating');
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.isAnimating = true;
    }
    afterAnimation(isOpen) {
        assert(this.isAnimating, '_before() should be called while animating');
        this._isOpen = isOpen;
        this.isAnimating = false;
        this.enableListener(this, 'body:click', isOpen);
        if (isOpen) {
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            this.ionOpen.emit();
        }
        else {
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            this.ionClose.emit();
        }
    }
    updateState() {
        const isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        if (!isActive && this._isOpen) {
            this.forceClosing();
        }
        if (!this.disabled && this.menuCtrl) {
            this.menuCtrl._setActiveMenu(this);
        }
        assert(!this.isAnimating, 'can not be animating');
    }
    forceClosing() {
        assert(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        const ani = this.animation.reverse(true);
        ani.playSync();
        this.afterAnimation(false);
    }
    hostData() {
        const { isEndSide: isEndSide$$1, type, disabled, isPaneVisible } = this;
        return {
            role: 'complementary',
            class: {
                [`menu-type-${type}`]: true,
                'menu-enabled': !disabled,
                'menu-side-end': isEndSide$$1,
                'menu-side-start': !isEndSide$$1,
                'menu-pane-visible': isPaneVisible
            }
        };
    }
    render() {
        return [
            h("div", { class: "menu-inner", ref: el => this.menuInnerEl = el },
                h("slot", null)),
            h("ion-backdrop", { ref: el => this.backdropEl = el, class: "menu-backdrop", tappable: false, stopPropagation: false })
        ];
    }
    static get is() { return "ion-menu"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "config": {
            "context": "config"
        },
        "contentId": {
            "type": String,
            "attr": "content-id"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "mutable": true,
            "watchCallbacks": ["disabledChanged"]
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "isActive": {
            "method": true
        },
        "isEndSide": {
            "state": true
        },
        "isOpen": {
            "method": true
        },
        "isPaneVisible": {
            "state": true
        },
        "isServer": {
            "context": "isServer"
        },
        "lazyMenuCtrl": {
            "connect": "ion-menu-controller"
        },
        "maxEdgeStart": {
            "type": Number,
            "attr": "max-edge-start"
        },
        "menuId": {
            "type": String,
            "attr": "menu-id"
        },
        "open": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "setOpen": {
            "method": true
        },
        "side": {
            "type": String,
            "attr": "side",
            "reflectToAttr": true,
            "watchCallbacks": ["sideChanged"]
        },
        "swipeGesture": {
            "type": Boolean,
            "attr": "swipe-gesture",
            "watchCallbacks": ["swipeGestureChanged"]
        },
        "toggle": {
            "method": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "mutable": true,
            "watchCallbacks": ["typeChanged"]
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionOpen",
            "method": "ionOpen",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionClose",
            "method": "ionClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionMenuChange",
            "method": "ionMenuChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:ionSplitPaneVisible",
            "method": "onSplitPaneChanged"
        }, {
            "name": "body:click",
            "method": "onBackdropClick",
            "capture": true,
            "disabled": true
        }]; }
    static get style() { return ":host{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{right:auto;left:0}:host(.menu-side-end) .menu-inner{right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}\@media (max-width:340px){.menu-inner{width:var(--width-small)}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"; }
    static get styleMode() { return "md"; }
}
function computeDelta(deltaX, isOpen, isEndSide$$1) {
    return Math.max(0, isOpen !== isEndSide$$1 ? -deltaX : deltaX);
}
function checkEdgeSide(win, posX, isEndSide$$1, maxEdgeStart) {
    if (isEndSide$$1) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
}
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';

class MenuButton {
    constructor() {
        this.autoHide = true;
    }
    hostData() {
        return {
            class: {
                'button': true
            }
        };
    }
    render() {
        const menuIcon = this.config.get('menuIcon', 'menu');
        return (h("ion-menu-toggle", { menu: this.menu, autoHide: this.autoHide },
            h("button", { type: "button" },
                h("slot", null,
                    h("ion-icon", { icon: menuIcon, mode: this.mode, color: this.color, lazy: false })))));
    }
    static get is() { return "ion-menu-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autoHide": {
            "type": Boolean,
            "attr": "auto-hide"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "menu": {
            "type": String,
            "attr": "menu"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ":host{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 8px}ion-icon{margin:0;padding:0;pointer-events:none;font-size:26px}"; }
    static get styleMode() { return "md"; }
}

function baseAnimation(AnimationC) {
    return Promise.resolve(new AnimationC()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)')
        .easingReverse('cubic-bezier(0.4, 0.0, 0.6, 1)')
        .duration(300));
}

const BOX_SHADOW_WIDTH = 8;
function menuOverlayAnimation(AnimationC, _, menu) {
    let closedX;
    let openedX;
    const width = menu.width + BOX_SHADOW_WIDTH;
    if (menu.isEndSide) {
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        closedX = -width + 'px';
        openedX = '0px';
    }
    const menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', closedX, openedX);
    const backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.3);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAni)
            .add(backdropAni);
    });
}

function menuPushAnimation(AnimationC, _, menu) {
    let contentOpenedX;
    let menuClosedX;
    const width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', menuClosedX, '0px');
    const contentAni = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', contentOpenedX);
    const backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.2);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAni)
            .add(backdropAni)
            .add(contentAni);
    });
}

function menuRevealAnimation(AnimationC, _, menu) {
    const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    const contentOpen = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', openedX);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(contentOpen);
    });
}

class MenuController {
    constructor() {
        this.menus = [];
        this.menuAnimations = new Map();
        this.registerAnimation('reveal', menuRevealAnimation);
        this.registerAnimation('push', menuPushAnimation);
        this.registerAnimation('overlay', menuOverlayAnimation);
    }
    async open(menuId) {
        const menu = await this.get(menuId);
        if (menu) {
            return menu.open();
        }
        return false;
    }
    async close(menuId) {
        const menu = await (menuId !== undefined ? this.get(menuId) : this.getOpen());
        if (menu !== undefined) {
            return menu.close();
        }
        return false;
    }
    async toggle(menuId) {
        const menu = await this.get(menuId);
        if (menu) {
            return menu.toggle();
        }
        return false;
    }
    async enable(shouldEnable, menuId) {
        const menu = await this.get(menuId);
        if (menu) {
            menu.disabled = !shouldEnable;
        }
        return menu;
    }
    async swipeGesture(shouldEnable, menuId) {
        const menu = await this.get(menuId);
        if (menu) {
            menu.swipeGesture = shouldEnable;
        }
        return menu;
    }
    async isOpen(menuId) {
        if (menuId != null) {
            const menu = await this.get(menuId);
            return (menu !== undefined && menu.isOpen());
        }
        else {
            const menu = await this.getOpen();
            return menu !== undefined;
        }
    }
    async isEnabled(menuId) {
        const menu = await this.get(menuId);
        if (menu) {
            return !menu.disabled;
        }
        return false;
    }
    async get(menuId) {
        if (menuId === 'start' || menuId === 'end') {
            const menuRef = this.find(m => m.side === menuId && !m.disabled);
            if (menuRef) {
                return menuRef;
            }
            return this.find(m => m.side === menuId);
        }
        else if (menuId != null) {
            return this.find(m => m.menuId === menuId);
        }
        const menu = this.find(m => !m.disabled);
        if (menu) {
            return menu;
        }
        return this.menus.length > 0 ? this.menus[0].el : undefined;
    }
    getOpen() {
        return Promise.resolve(this.getOpenSync());
    }
    getMenus() {
        return Promise.resolve(this.getMenusSync());
    }
    isAnimating() {
        return Promise.resolve(this.isAnimatingSync());
    }
    _register(menu) {
        if (this.menus.indexOf(menu) < 0) {
            this.menus.push(menu);
        }
    }
    _unregister(menu) {
        const index = this.menus.indexOf(menu);
        if (index > -1) {
            this.menus.splice(index, 1);
        }
    }
    _setActiveMenu(menu) {
        const side = menu.side;
        this.menus
            .filter(m => m.side === side && m !== menu)
            .forEach(m => (m.disabled = true));
    }
    async _setOpen(menu, shouldOpen, animated) {
        if (this.isAnimatingSync()) {
            return false;
        }
        if (shouldOpen) {
            const openedMenu = await this.getOpen();
            if (openedMenu && menu.el !== openedMenu) {
                return openedMenu.setOpen(false, false);
            }
        }
        return menu._setOpen(shouldOpen, animated);
    }
    _getInstance() {
        return Promise.resolve(this);
    }
    _createAnimation(type, menuCmp) {
        const animationBuilder = this.menuAnimations.get(type);
        if (!animationBuilder) {
            return Promise.reject('animation not registered');
        }
        return this.animationCtrl.create(animationBuilder, null, menuCmp);
    }
    getOpenSync() {
        return this.find(m => m._isOpen);
    }
    getMenusSync() {
        return this.menus.map(menu => menu.el);
    }
    isAnimatingSync() {
        return this.menus.some(menu => menu.isAnimating);
    }
    registerAnimation(name, animation) {
        this.menuAnimations.set(name, animation);
    }
    find(predicate) {
        const instance = this.menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    }
    static get is() { return "ion-menu-controller"; }
    static get properties() { return {
        "_createAnimation": {
            "method": true
        },
        "_getInstance": {
            "method": true
        },
        "_register": {
            "method": true
        },
        "_setActiveMenu": {
            "method": true
        },
        "_setOpen": {
            "method": true
        },
        "_unregister": {
            "method": true
        },
        "animationCtrl": {
            "connect": "ion-animation-controller"
        },
        "close": {
            "method": true
        },
        "enable": {
            "method": true
        },
        "get": {
            "method": true
        },
        "getMenus": {
            "method": true
        },
        "getOpen": {
            "method": true
        },
        "isAnimating": {
            "method": true
        },
        "isEnabled": {
            "method": true
        },
        "isOpen": {
            "method": true
        },
        "open": {
            "method": true
        },
        "swipeGesture": {
            "method": true
        },
        "toggle": {
            "method": true
        }
    }; }
    static get style() { return ".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"; }
}

class MenuToggle {
    constructor() {
        this.visible = false;
        this.autoHide = true;
    }
    componentDidLoad() {
        return this.updateVisibility();
    }
    async onClick() {
        const menuCtrl = await getMenuController(this.doc);
        if (menuCtrl) {
            const menu = await menuCtrl.get(this.menu);
            if (menu) {
                menuCtrl.toggle(this.menu);
            }
        }
    }
    async updateVisibility() {
        const menuCtrl = await getMenuController(this.doc);
        if (menuCtrl) {
            const menu = await menuCtrl.get(this.menu);
            if (menu && await menu.isActive()) {
                this.visible = true;
                return;
            }
        }
        this.visible = false;
    }
    hostData() {
        const hidden = this.autoHide && !this.visible;
        return {
            'aria-hidden': hidden ? 'true' : null,
            class: {
                'menu-toggle-hidden': hidden,
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-menu-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autoHide": {
            "type": Boolean,
            "attr": "auto-hide"
        },
        "doc": {
            "context": "document"
        },
        "menu": {
            "type": String,
            "attr": "menu"
        },
        "visible": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick"
        }, {
            "name": "body:ionMenuChange",
            "method": "updateVisibility"
        }, {
            "name": "body:ionSplitPaneVisible",
            "method": "updateVisibility"
        }]; }
    static get style() { return ":host(.menu-toggle-hidden){display:none}"; }
}
function getMenuController(doc) {
    const menuControllerElement = doc.querySelector('ion-menu-controller');
    if (!menuControllerElement) {
        return Promise.resolve(undefined);
    }
    return menuControllerElement.componentOnReady();
}

export { Menu as IonMenu, MenuButton as IonMenuButton, MenuController as IonMenuController, MenuToggle as IonMenuToggle };
