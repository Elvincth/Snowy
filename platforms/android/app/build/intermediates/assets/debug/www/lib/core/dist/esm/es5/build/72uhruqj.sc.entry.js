import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as attachComponent, d as createColorClasses } from './chunk-50fe9317.js';
var Tab = /** @class */ (function () {
    function Tab() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    Tab.prototype.selectedChanged = function (selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    };
    Tab.prototype.componentWillLoad = function () {
        if (this.name === undefined && typeof this.component === 'string') {
            this.name = this.component;
        }
    };
    Tab.prototype.onPropChanged = function () {
        this.ionTabMutated.emit();
    };
    Tab.prototype.setActive = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareLazyLoaded()];
                    case 1:
                        _a.sent();
                        this.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab.prototype.prepareLazyLoaded = function () {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    };
    Tab.prototype.hostData = function () {
        var _a = this, btnId = _a.btnId, active = _a.active, component = _a.component;
        return {
            'aria-labelledby': btnId,
            'aria-hidden': !active ? 'true' : null,
            'role': 'tabpanel',
            'class': {
                'ion-page': component === undefined,
                'tab-hidden': !active
            }
        };
    };
    Tab.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Tab, "is", {
        get: function () { return "ion-tab"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "style", {
        get: function () { return ".tab-hidden.sc-ion-tab-h{display:none!important}"; },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
var Tabbar = /** @class */ (function () {
    function Tabbar() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = 'icon-top';
        this.placement = 'bottom';
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    Tabbar.prototype.onKeyboardWillHide = function () {
        var _this = this;
        setTimeout(function () { return _this.keyboardVisible = false; }, 50);
    };
    Tabbar.prototype.onKeyboardWillShow = function () {
        if (this.placement === 'bottom') {
            this.keyboardVisible = true;
        }
    };
    Tabbar.prototype.componentDidLoad = function () {
        this.updateHighlight();
    };
    Tabbar.prototype.getSelectedButton = function () {
        return this.el.shadowRoot.querySelector('.tab-btn-selected');
    };
    Tabbar.prototype.updateHighlight = function () {
        var _this = this;
        if (!this.highlight) {
            return;
        }
        this.queue.read(function () {
            var btn = _this.getSelectedButton();
            var highlight = _this.el.shadowRoot.querySelector('.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = "translate3d(" + btn.offsetLeft + "px,0,0) scaleX(" + btn.offsetWidth + ")";
            }
        });
    };
    Tabbar.prototype.hostData = function () {
        var _a;
        var _b = this, color = _b.color, translucent = _b.translucent, layout = _b.layout, placement = _b.placement, keyboardVisible = _b.keyboardVisible;
        return {
            role: 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), (_a = { 'tabbar-translucent': translucent }, _a["layout-" + layout] = true, _a["placement-" + placement] = true, _a['tabbar-hidden'] = keyboardVisible, _a))
        };
    };
    Tabbar.prototype.renderTabButton = function (tab) {
        var _this = this;
        var icon = tab.icon, label = tab.label, disabled = tab.disabled, badge = tab.badge, badgeColor = tab.badgeColor, href = tab.href;
        var selected = tab === this.selectedTab;
        var hasLabel = label !== undefined;
        var hasIcon = icon !== undefined;
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
            }, onClick: function (ev) {
                if (!tab.disabled) {
                    _this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } }, icon && h("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }), label && h("span", { class: "tab-btn-text" }, label), badge && h("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge), this.mode === 'md' && h("ion-ripple-effect", null)));
    };
    Tabbar.prototype.render = function () {
        var _this = this;
        return [
            this.tabs.map(function (tab) { return _this.renderTabButton(tab); }),
            this.highlight && h("div", { class: "animated tabbar-highlight" })
        ];
    };
    Object.defineProperty(Tabbar, "is", {
        get: function () { return "ion-tabbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "events", {
        get: function () {
            return [{
                    "name": "ionTabbarClick",
                    "method": "ionTabbarClick",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "listeners", {
        get: function () {
            return [{
                    "name": "body:keyboardWillHide",
                    "method": "onKeyboardWillHide"
                }, {
                    "name": "body:keyboardWillShow",
                    "method": "onKeyboardWillShow"
                }, {
                    "name": "window:resize",
                    "method": "updateHighlight",
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "style", {
        get: function () { return ".sc-ion-tabbar-ios-h{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.ion-color.sc-ion-tabbar-ios-h{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden.sc-ion-tabbar-ios-h{display:none!important}.placement-top.sc-ion-tabbar-ios-h{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.placement-bottom.sc-ion-tabbar-ios-h{padding-bottom:var(--ion-safe-area-bottom,0)}.tabbar-highlight.sc-ion-tabbar-ios{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated.sc-ion-tabbar-ios{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top.sc-ion-tabbar-ios-h   .tabbar-highlight.sc-ion-tabbar-ios{bottom:0}.placement-bottom.sc-ion-tabbar-ios-h   .tabbar-highlight.sc-ion-tabbar-ios{top:0}.layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--flex-direction:row}.layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--flex-direction:row-reverse}.layout-icon-bottom.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--flex-direction:column-reverse}.layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-label-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--justify-content:center}.layout-icon-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--icon-display:none}.layout-label-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--label-display:none;--icon-margin:0}.layout-icon-bottom.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-top.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--badge-end:calc(50% - 30px)}.layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--badge-end:calc(50% - 50px);--label-margin-top:2px;--label-margin-bottom:2px;--label-font-size:14px;--label-line-height:1.1}.tab-btn.sc-ion-tabbar-ios{font-family:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:var(--flex-direction,column);flex-direction:var(--flex-direction,column);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:var(--justify-content,flex-start);-ms-flex-pack:var(--justify-content,flex-start);justify-content:var(--justify-content,flex-start);width:100%;height:100%;border:0;outline:0;background:0 0;text-decoration:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.tab-btn.sc-ion-tabbar-ios:focus-visible{background:var(--background-focused)}.tab-btn-selected.sc-ion-tabbar-ios, .tab-btn.sc-ion-tabbar-ios:hover{color:var(--color-selected)}.tab-btn-hidden.sc-ion-tabbar-ios{display:none!important}.tab-btn-disabled.sc-ion-tabbar-ios{pointer-events:none;opacity:.4}.tab-btn-text.sc-ion-tabbar-ios{margin-top:var(--label-margin-top);margin-bottom:var(--label-margin-bottom);display:var(--label-display,block);font-size:var(--label-font-size);line-height:var(--label-line-height)}.tab-btn-icon.sc-ion-tabbar-ios{margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:var(--icon-display,block);min-width:var(--icon-min-width);height:var(--icon-height,1em);font-size:var(--icon-font-size)}.tab-btn-icon.sc-ion-tabbar-ios, .tab-btn-text.sc-ion-tabbar-ios{-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-btn-has-label-only.sc-ion-tabbar-ios   .tab-btn-text.sc-ion-tabbar-ios{white-space:normal;margin:2px 0;font-size:14px;line-height:1.1}.tab-btn-has-icon-only.sc-ion-tabbar-ios, .tab-btn-has-label-only.sc-ion-tabbar-ios{--justify-content:center}.tab-btn-badge.sc-ion-tabbar-ios{right:4%;top:6%;right:var(--badge-end,calc(50% - 30px));padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-btn-has-label-only.sc-ion-tabbar-ios   .tab-btn-badge.sc-ion-tabbar-ios{--badge-end:calc(50% - 50px)}.tab-btn-has-icon-only.sc-ion-tabbar-ios   .tab-btn-badge.sc-ion-tabbar-ios{--badge-end:calc(50% - 30px)}.tab-btn-selected.sc-ion-tabbar-ios   .tab-btn-icon.sc-ion-tabbar-ios{-webkit-transform:var(--icon-transform-selected);transform:var(--icon-transform-selected)}.tab-btn.sc-ion-tabbar-ios{padding:0 2px;max-width:240px;font-size:10px}.tab-btn-text.sc-ion-tabbar-ios{margin-top:0;margin-bottom:1px;min-height:11px}.tab-btn-icon.sc-ion-tabbar-ios{margin-top:4px;font-size:30px}.tab-btn-icon.sc-ion-tabbar-ios::before{vertical-align:top}.sc-ion-tabbar-ios-h{--background:var(--ion-tabbar-background-color, #f8f8f8);--background-rgb:var(--ion-tabbar-translucent-background-color-rgb, 248, 248, 248);--color:var(--ion-tabbar-text-color, #8c8c8c);--color-selected:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:50px;border-top:.55px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.2);contain:strict}.placement-top.sc-ion-tabbar-ios-h{border-top:0;border-bottom:.55px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.2)}.tabbar-translucent.sc-ion-tabbar-ios-h{background-color:rgba(var(--ion-color-base-rgb),.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}.layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios{--icon-margin-top:2px;--icon-margin-bottom:1px;--icon-min-width:24px;--icon-height:26px;--icon-font-size:24px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Tabbar;
}());
var Tabs = /** @class */ (function () {
    function Tabs() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        this.tabbarHidden = false;
        this.translucent = false;
        this.useRouter = false;
    }
    Tabs.prototype.componentWillLoad = function () {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        this.loadConfig('tabbarPlacement', 'bottom');
        this.loadConfig('tabbarLayout', 'icon-top');
        this.loadConfig('tabbarHighlight', false);
        this.initTabs();
        this.ionNavWillLoad.emit();
    };
    Tabs.prototype.componentDidLoad = function () {
        return this.initSelect();
    };
    Tabs.prototype.componentDidUnload = function () {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    };
    Tabs.prototype.onTabMutated = function () {
        this.el.forceUpdate();
    };
    Tabs.prototype.onTabClicked = function (ev) {
        var selectedTab = ev.detail;
        var href = selectedTab.href;
        if (this.useRouter && href !== undefined) {
            var router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(href);
            }
        }
        else {
            this.select(selectedTab);
        }
    };
    Tabs.prototype.select = function (tabOrIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var selectedTab;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTab(tabOrIndex)];
                    case 1:
                        selectedTab = _a.sent();
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.notifyRouter()];
                    case 3:
                        _a.sent();
                        this.tabSwitch();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Tabs.prototype.setRouteId = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var selectedTab;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTab(id)];
                    case 1:
                        selectedTab = _a.sent();
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, { changed: false, element: this.selectedTab }];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                changed: true,
                                element: this.selectedTab,
                                markVisible: function () { return _this.tabSwitch(); },
                            }];
                }
            });
        });
    };
    Tabs.prototype.getRouteId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                id = this.selectedTab && this.selectedTab.name;
                return [2 /*return*/, id !== undefined ? { id: id, element: this.selectedTab } : undefined];
            });
        });
    };
    Tabs.prototype.getTab = function (tabOrIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (typeof tabOrIndex === 'string') {
                    return [2 /*return*/, this.tabs.find(function (tab) { return tab.name === tabOrIndex; })];
                }
                if (typeof tabOrIndex === 'number') {
                    return [2 /*return*/, this.tabs[tabOrIndex]];
                }
                return [2 /*return*/, tabOrIndex];
            });
        });
    };
    Tabs.prototype.getSelected = function () {
        return Promise.resolve(this.selectedTab);
    };
    Tabs.prototype.initTabs = function () {
        var _this = this;
        var tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        tabs.forEach(function (tab) {
            var id = "t-" + _this.tabsId + "-" + ++_this.ids;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
        });
    };
    Tabs.prototype.initSelect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tabs, selectedTab, _i, tabs_1, tab;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabs = this.tabs;
                        if (this.useRouter) {
                            return [2 /*return*/];
                        }
                        selectedTab = tabs.find(function (t) { return t.selected; }) ||
                            tabs.find(function (t) { return t.show && !t.disabled; });
                        for (_i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                            tab = tabs_1[_i];
                            if (tab !== selectedTab) {
                                tab.selected = false;
                            }
                        }
                        if (!selectedTab) return [3 /*break*/, 2];
                        return [4 /*yield*/, selectedTab.setActive()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.selectedTab = selectedTab;
                        if (selectedTab) {
                            selectedTab.selected = true;
                            selectedTab.active = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tabs.prototype.loadConfig = function (attrKey, fallback) {
        var val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    };
    Tabs.prototype.setActive = function (selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    };
    Tabs.prototype.tabSwitch = function () {
        var selectedTab = this.selectedTab;
        var leavingTab = this.leavingTab;
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
    };
    Tabs.prototype.notifyRouter = function () {
        if (this.useRouter) {
            var router = this.doc.querySelector('ion-router');
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    };
    Tabs.prototype.shouldSwitch = function (selectedTab) {
        var leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    };
    Tabs.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Tabs.prototype.render = function () {
        return [
            h("div", { class: "tabs-inner" }, h("slot", null)),
            !this.tabbarHidden && (h("ion-tabbar", { tabs: this.tabs.slice(), color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent }))
        ];
    };
    Object.defineProperty(Tabs, "is", {
        get: function () { return "ion-tabs"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "listeners", {
        get: function () {
            return [{
                    "name": "ionTabMutated",
                    "method": "onTabMutated"
                }, {
                    "name": "ionTabbarClick",
                    "method": "onTabClicked"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "style", {
        get: function () { return ".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner.sc-ion-tabs{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"; },
        enumerable: true,
        configurable: true
    });
    return Tabs;
}());
var tabIds = -1;
export { Tab as IonTab, Tabbar as IonTabbar, Tabs as IonTabs };
