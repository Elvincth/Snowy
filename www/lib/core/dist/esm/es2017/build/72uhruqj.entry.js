/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { a as attachComponent, d as createColorClasses } from './chunk-50fe9317.js';

class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    componentWillLoad() {
        if (this.name === undefined && typeof this.component === 'string') {
            this.name = this.component;
        }
    }
    onPropChanged() {
        this.ionTabMutated.emit();
    }
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    }
    hostData() {
        const { btnId, active, component } = this;
        return {
            'aria-labelledby': btnId,
            'aria-hidden': !active ? 'true' : null,
            'role': 'tabpanel',
            'class': {
                'ion-page': component === undefined,
                'tab-hidden': !active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "mutable": true
        },
        "badge": {
            "type": String,
            "attr": "badge",
            "watchCallbacks": ["onPropChanged"]
        },
        "badgeColor": {
            "type": String,
            "attr": "badge-color",
            "watchCallbacks": ["onPropChanged"]
        },
        "btnId": {
            "type": String,
            "attr": "btn-id"
        },
        "component": {
            "type": String,
            "attr": "component"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["onPropChanged"]
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "watchCallbacks": ["onPropChanged"]
        },
        "icon": {
            "type": String,
            "attr": "icon",
            "watchCallbacks": ["onPropChanged"]
        },
        "label": {
            "type": String,
            "attr": "label",
            "watchCallbacks": ["onPropChanged"]
        },
        "name": {
            "type": String,
            "attr": "name",
            "mutable": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "watchCallbacks": ["selectedChanged"]
        },
        "setActive": {
            "method": true
        },
        "show": {
            "type": Boolean,
            "attr": "show",
            "watchCallbacks": ["onPropChanged"]
        },
        "tabsHideOnSubPages": {
            "type": Boolean,
            "attr": "tabs-hide-on-sub-pages"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionTabMutated",
            "method": "ionTabMutated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host(.tab-hidden){display:none!important}"; }
}

class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = 'icon-top';
        this.placement = 'bottom';
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.keyboardVisible = true;
        }
    }
    componentDidLoad() {
        this.updateHighlight();
    }
    getSelectedButton() {
        return this.el.shadowRoot.querySelector('.tab-btn-selected');
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.shadowRoot.querySelector('.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const { color, translucent, layout, placement, keyboardVisible } = this;
        return {
            role: 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), { 'tabbar-translucent': translucent, [`layout-${layout}`]: true, [`placement-${placement}`]: true, 'tabbar-hidden': keyboardVisible })
        };
    }
    renderTabButton(tab) {
        const { icon, label, disabled, badge, badgeColor, href } = tab;
        const selected = tab === this.selectedTab;
        const hasLabel = label !== undefined;
        const hasIcon = icon !== undefined;
        return (h("a", { role: "tab", "ion-activatable": true, "aria-selected": selected ? 'true' : null, href: href || '#', class: {
                'tab-btn': true,
                'tab-btn-selected': selected,
                'tab-btn-has-label': hasLabel,
                'tab-btn-has-icon': hasIcon,
                'tab-btn-has-label-only': hasLabel && !hasIcon,
                'tab-btn-has-icon-only': hasIcon && !hasLabel,
                'tab-btn-has-badge': badge !== undefined,
                'tab-btn-disabled': disabled,
                'tab-btn-hidden': !tab.show
            }, onClick: ev => {
                if (!tab.disabled) {
                    this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } },
            icon && h("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }),
            label && h("span", { class: "tab-btn-text" }, label),
            badge && h("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    render() {
        return [
            this.tabs.map(tab => this.renderTabButton(tab)),
            this.highlight && h("div", { class: "animated tabbar-highlight" })
        ];
    }
    static get is() { return "ion-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canScrollLeft": {
            "state": true
        },
        "canScrollRight": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "keyboardVisible": {
            "state": true
        },
        "layout": {
            "type": String,
            "attr": "layout"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "placement": {
            "type": String,
            "attr": "placement"
        },
        "queue": {
            "context": "queue"
        },
        "selectedTab": {
            "type": "Any",
            "attr": "selected-tab",
            "watchCallbacks": ["updateHighlight"]
        },
        "tabs": {
            "type": "Any",
            "attr": "tabs"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get events() { return [{
            "name": "ionTabbarClick",
            "method": "ionTabbarClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:keyboardWillHide",
            "method": "onKeyboardWillHide"
        }, {
            "name": "body:keyboardWillShow",
            "method": "onKeyboardWillShow"
        }, {
            "name": "window:resize",
            "method": "updateHighlight",
            "passive": true
        }]; }
    static get style() { return ":host{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}:host(.ion-color){--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}:host(.tabbar-hidden){display:none!important}:host(.placement-top){-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}:host(.placement-bottom){padding-bottom:var(--ion-safe-area-bottom,0)}.tabbar-highlight{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}:host(.placement-top) .tabbar-highlight{bottom:0}:host(.placement-bottom) .tabbar-highlight{top:0}:host(.layout-icon-start) .tab-btn{--flex-direction:row}:host(.layout-icon-end) .tab-btn{--flex-direction:row-reverse}:host(.layout-icon-bottom) .tab-btn{--flex-direction:column-reverse}:host(.layout-icon-end) .tab-btn,:host(.layout-icon-hide) .tab-btn,:host(.layout-icon-start) .tab-btn,:host(.layout-label-hide) .tab-btn{--justify-content:center}:host(.layout-icon-hide) .tab-btn{--icon-display:none}:host(.layout-label-hide) .tab-btn{--label-display:none;--icon-margin:0}:host(.layout-icon-bottom) .tab-btn,:host(.layout-icon-top) .tab-btn{--badge-end:calc(50% - 30px)}:host(.layout-icon-end) .tab-btn,:host(.layout-icon-hide) .tab-btn,:host(.layout-icon-start) .tab-btn{--badge-end:calc(50% - 50px);--label-margin-top:2px;--label-margin-bottom:2px;--label-font-size:14px;--label-line-height:1.1}.tab-btn{font-family:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:var(--flex-direction,column);flex-direction:var(--flex-direction,column);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:var(--justify-content,flex-start);-ms-flex-pack:var(--justify-content,flex-start);justify-content:var(--justify-content,flex-start);width:100%;height:100%;border:0;outline:0;background:0 0;text-decoration:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.tab-btn:focus-visible{background:var(--background-focused)}.tab-btn-selected,.tab-btn:hover{color:var(--color-selected)}.tab-btn-hidden{display:none!important}.tab-btn-disabled{pointer-events:none;opacity:.4}.tab-btn-text{margin-top:var(--label-margin-top);margin-bottom:var(--label-margin-bottom);display:var(--label-display,block);font-size:var(--label-font-size);line-height:var(--label-line-height)}.tab-btn-icon{margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:var(--icon-display,block);min-width:var(--icon-min-width);height:var(--icon-height,1em);font-size:var(--icon-font-size)}.tab-btn-icon,.tab-btn-text{-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-btn-has-label-only .tab-btn-text{white-space:normal;margin:2px 0;font-size:14px;line-height:1.1}.tab-btn-has-icon-only,.tab-btn-has-label-only{--justify-content:center}.tab-btn-badge{right:4%;top:6%;right:var(--badge-end,calc(50% - 30px));padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-btn-has-label-only .tab-btn-badge{--badge-end:calc(50% - 50px)}.tab-btn-has-icon-only .tab-btn-badge{--badge-end:calc(50% - 30px)}.tab-btn-selected .tab-btn-icon{-webkit-transform:var(--icon-transform-selected);transform:var(--icon-transform-selected)}.tab-btn{padding:0 2px;max-width:240px;font-size:10px}.tab-btn-text{margin-top:0;margin-bottom:1px;min-height:11px}.tab-btn-icon{margin-top:4px;font-size:30px}.tab-btn-icon::before{vertical-align:top}:host{--background:var(--ion-tabbar-background-color, #f8f8f8);--background-rgb:var(--ion-tabbar-translucent-background-color-rgb, 248, 248, 248);--color:var(--ion-tabbar-text-color, #8c8c8c);--color-selected:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:50px;border-top:.55px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.2);contain:strict}:host(.placement-top){border-top:0;border-bottom:.55px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.2)}:host(.tabbar-translucent){background-color:rgba(var(--ion-color-base-rgb),.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.layout-icon-end) .tab-btn,:host(.layout-icon-start) .tab-btn{--icon-margin-top:2px;--icon-margin-bottom:1px;--icon-min-width:24px;--icon-height:26px;--icon-font-size:24px}"; }
    static get styleMode() { return "ios"; }
}

class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        this.tabbarHidden = false;
        this.translucent = false;
        this.useRouter = false;
    }
    componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        this.loadConfig('tabbarPlacement', 'bottom');
        this.loadConfig('tabbarLayout', 'icon-top');
        this.loadConfig('tabbarHighlight', false);
        this.initTabs();
        this.ionNavWillLoad.emit();
    }
    componentDidLoad() {
        return this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    onTabMutated() {
        this.el.forceUpdate();
    }
    onTabClicked(ev) {
        const selectedTab = ev.detail;
        const href = selectedTab.href;
        if (this.useRouter && href !== undefined) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(href);
            }
        }
        else {
            this.select(selectedTab);
        }
    }
    async select(tabOrIndex) {
        const selectedTab = await this.getTab(tabOrIndex);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    async setRouteId(id) {
        const selectedTab = await this.getTab(id);
        if (!this.shouldSwitch(selectedTab)) {
            return { changed: false, element: this.selectedTab };
        }
        await this.setActive(selectedTab);
        return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch(),
        };
    }
    async getRouteId() {
        const id = this.selectedTab && this.selectedTab.name;
        return id !== undefined ? { id, element: this.selectedTab } : undefined;
    }
    async getTab(tabOrIndex) {
        if (typeof tabOrIndex === 'string') {
            return this.tabs.find(tab => tab.name === tabOrIndex);
        }
        if (typeof tabOrIndex === 'number') {
            return this.tabs[tabOrIndex];
        }
        return tabOrIndex;
    }
    getSelected() {
        return Promise.resolve(this.selectedTab);
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        tabs.forEach(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
        });
    }
    async initSelect() {
        const tabs = this.tabs;
        if (this.useRouter) {
            return;
        }
        const selectedTab = tabs.find(t => t.selected) ||
            tabs.find(t => t.show && !t.disabled);
        for (const tab of tabs) {
            if (tab !== selectedTab) {
                tab.selected = false;
            }
        }
        if (selectedTab) {
            await selectedTab.setActive();
        }
        this.selectedTab = selectedTab;
        if (selectedTab) {
            selectedTab.selected = true;
            selectedTab.active = true;
        }
    }
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        for (const tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        selectedTab.selected = true;
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionChange.emit({ tab: selectedTab });
            this.ionNavDidChange.emit();
        }
    }
    notifyRouter() {
        if (this.useRouter) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("div", { class: "tabs-inner" },
                h("slot", null)),
            !this.tabbarHidden && (h("ion-tabbar", { tabs: this.tabs.slice(), color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent }))
        ];
    }
    static get is() { return "ion-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "getRouteId": {
            "method": true
        },
        "getSelected": {
            "method": true
        },
        "getTab": {
            "method": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "select": {
            "method": true
        },
        "selectedTab": {
            "state": true
        },
        "setRouteId": {
            "method": true
        },
        "tabbarHidden": {
            "type": Boolean,
            "attr": "tabbar-hidden"
        },
        "tabbarHighlight": {
            "type": Boolean,
            "attr": "tabbar-highlight",
            "mutable": true
        },
        "tabbarLayout": {
            "type": String,
            "attr": "tabbar-layout",
            "mutable": true
        },
        "tabbarPlacement": {
            "type": String,
            "attr": "tabbar-placement",
            "mutable": true
        },
        "tabs": {
            "state": true
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "useRouter": {
            "type": Boolean,
            "attr": "use-router",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillLoad",
            "method": "ionNavWillLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillChange",
            "method": "ionNavWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavDidChange",
            "method": "ionNavDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionTabMutated",
            "method": "onTabMutated"
        }, {
            "name": "ionTabbarClick",
            "method": "onTabClicked"
        }]; }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"; }
}
let tabIds = -1;

export { Tab as IonTab, Tabbar as IonTabbar, Tabs as IonTabs };
