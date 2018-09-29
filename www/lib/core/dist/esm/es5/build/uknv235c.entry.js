import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses, f as hostContext, e as openURL, g as createThemedClasses } from './chunk-50fe9317.js';
var Item = /** @class */ (function () {
    function Item() {
        this.itemStyles = new Map();
        this.button = false;
        this.detailIcon = 'ios-arrow-forward';
        this.disabled = false;
        this.type = 'button';
    }
    Item.prototype.itemStyle = function (ev) {
        ev.stopPropagation();
        var tagName = ev.target.tagName;
        var updatedStyles = ev.detail;
        var updatedKeys = Object.keys(ev.detail);
        var newStyles = {};
        var childStyles = this.itemStyles.get(tagName) || {};
        var hasStyleChange = false;
        for (var _i = 0, updatedKeys_1 = updatedKeys; _i < updatedKeys_1.length; _i++) {
            var key = updatedKeys_1[_i];
            var itemKey = "item-" + key;
            var newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            newStyles[itemKey] = newValue;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    };
    Item.prototype.componentDidLoad = function () {
        Array.from(this.el.querySelectorAll('ion-button')).forEach(function (button) {
            if (!button.size) {
                button.size = 'small';
            }
        });
    };
    Item.prototype.isClickable = function () {
        return (this.href !== undefined || this.button);
    };
    Item.prototype.hostData = function () {
        var _a;
        var childStyles = {};
        this.itemStyles.forEach(function (value) {
            Object.assign(childStyles, value);
        });
        return {
            'ion-activatable': this.isClickable(),
            class: Object.assign({}, childStyles, createColorClasses(this.color), (_a = {}, _a["item-lines-" + this.lines] = !!this.lines, _a['item-disabled'] = this.disabled, _a['in-list'] = hostContext('ion-list', this.el), _a['item'] = true, _a))
        };
    };
    Item.prototype.render = function () {
        var _a = this, href = _a.href, detail = _a.detail, mode = _a.mode, win = _a.win, state = _a.state, detailIcon = _a.detailIcon, routerDirection = _a.routerDirection, type = _a.type;
        var clickable = this.isClickable();
        var TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        var attrs = TagType === 'button' ? { type: type } : { href: href };
        var showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
        return (h(TagType, Object.assign({}, attrs, { class: "item-native", onClick: function (ev) { return openURL(win, href, ev, routerDirection); } }), h("slot", { name: "start" }), h("div", { class: "item-inner" }, h("div", { class: "input-wrapper" }, h("slot", null)), h("slot", { name: "end" }), showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" })), state && h("div", { class: "item-state" }), clickable && mode === 'md' && h("ion-ripple-effect", null)));
    };
    Object.defineProperty(Item, "is", {
        get: function () { return "ion-item"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "properties", {
        get: function () {
            return {
                "button": {
                    "type": Boolean,
                    "attr": "button"
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "detail": {
                    "type": Boolean,
                    "attr": "detail"
                },
                "detailIcon": {
                    "type": String,
                    "attr": "detail-icon"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "lines": {
                    "type": String,
                    "attr": "lines"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "state": {
                    "type": String,
                    "attr": "state"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "listeners", {
        get: function () {
            return [{
                    "name": "ionStyle",
                    "method": "itemStyle"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "style", {
        get: function () { return ":host{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.activated){--background:var(--background-active);--transition:none}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-state{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right,0px) + var(--inner-padding-end)) var(--inner-padding-bottom) calc(var(--ion-safe-area-left,0px) + var(--inner-padding-start));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-input),:host([vertical-align-top]){-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--ion-color-base:var(--ion-item-background-color, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #d9d9d9);--ion-color-shade:var(--ion-item-border-color, #c8c7cc);--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0 0 0.55px 0;font-size:17px}:host(.item-lines-full){--border-width:0 0 0.55px 0}:host(.item-lines-inset){--inner-border-width:0 0 0.55px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}::slotted(:not(.interactive)[slot=start]){margin:2px 16px 2px 0}::slotted(:not(.interactive)[slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.5em;--padding-end:.5em;--height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}.item-detail-icon{color:var(--detail-push-color);font-size:20px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
var ItemDivider = /** @class */ (function () {
    function ItemDivider() {
    }
    ItemDivider.prototype.componentDidLoad = function () {
        Array.from(this.el.querySelectorAll('ion-button')).forEach(function (button) {
            if (!button.size) {
                button.size = 'small';
            }
        });
    };
    ItemDivider.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    ItemDivider.prototype.render = function () {
        return [
            h("slot", { name: "start" }),
            h("div", { class: "item-divider-inner" }, h("div", { class: "item-divider-wrapper" }, h("slot", null)), h("slot", { name: "end" }))
        ];
    };
    Object.defineProperty(ItemDivider, "is", {
        get: function () { return "ion-item-divider"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDivider, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDivider, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "el": {
                    "elementRef": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDivider, "style", {
        get: function () { return ":host{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right,0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background-color:var(--ion-color-base);color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}:host([sticky]){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--ion-color-base:var(--ion-background-color-step-50, #f2f2f2);--ion-color-contrast:var(--ion-text-color-step-150, #262626);--padding-start:16px;border-radius:0;position:relative;font-size:17px}\@media screen and (orientation:landscape){.item-divider-inner{padding-right:calc(env(safe-area-inset-right) + 8px)}}:host([slot=start]){margin:2px 16px 2px 0}:host([slot=end]){margin-left:8px;margin-right:8px}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}::slotted(h1){margin:0 0 2px;font-size:24px;font-weight:400}::slotted(h2){margin:0 0 2px;font-size:17px;font-weight:400}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}::slotted(p){margin:0 0 2px;color:var(--ion-text-color-step-600,#999);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDivider, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return ItemDivider;
}());
var ItemGroup = /** @class */ (function () {
    function ItemGroup() {
    }
    ItemGroup.prototype.hostData = function () {
        return {
            class: createThemedClasses(this.mode, 'item-group')
        };
    };
    Object.defineProperty(ItemGroup, "is", {
        get: function () { return "ion-item-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemGroup, "style", {
        get: function () { return "ion-item-group{display:block}.item-group-ios ion-item-sliding:last-child .item,.item-group-ios ion-item:last-child{--border-width:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemGroup, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return ItemGroup;
}());
var Label = /** @class */ (function () {
    function Label() {
    }
    Label.prototype.componentDidLoad = function () {
        this.positionChanged();
    };
    Label.prototype.positionChanged = function () {
        var _a;
        var position = this.position;
        this.ionStyle.emit((_a = {
                'label': true
            },
            _a["label-" + position] = !!position,
            _a));
    };
    Label.prototype.hostData = function () {
        var _a;
        var position = this.position;
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["label-" + position] = !!position, _a))
        };
    };
    Object.defineProperty(Label, "is", {
        get: function () { return "ion-label"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "el": {
                    "elementRef": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "position": {
                    "type": String,
                    "attr": "position",
                    "watchCallbacks": ["positionChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "events", {
        get: function () {
            return [{
                    "name": "ionStyle",
                    "method": "ionStyle",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "style", {
        get: function () { return ".sc-ion-label-ios-h{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-ios-h{white-space:normal;font-size:14px;line-height:1.5}.item-interactive-disabled.sc-ion-label-ios-h, .item-interactive-disabled   .sc-ion-label-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-ios-h, .item-input   .sc-ion-label-ios-h{-webkit-box-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-ios-h{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus   .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value   .label-floating.sc-ion-label-ios-h{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.sc-ion-label-ios-h{margin:10px 8px 10px 0}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:12px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.sc-ion-label-ios-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-ios-s  h2 {margin:0 0 2px;font-size:17px;font-weight:400}.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6 {margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-ios-s  p {margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s > p{color:var(--ion-text-color-step-600,#999)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p{color:inherit}.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child {margin-bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Label;
}());
var List = /** @class */ (function () {
    function List() {
        this.inset = false;
    }
    List.prototype.closeSlidingItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var item;
            return tslib_1.__generator(this, function (_a) {
                item = this.el.querySelector('ion-item-sliding');
                if (item && item.closeOpened) {
                    return [2 /*return*/, item.closeOpened()];
                }
                return [2 /*return*/, false];
            });
        });
    };
    List.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'list'), (_a = {}, _a["list-lines-" + this.lines] = !!this.lines, _a['list-inset'] = this.inset, _a["list-" + this.mode + "-lines-" + this.lines] = !!this.lines, _a))
        };
    };
    Object.defineProperty(List, "is", {
        get: function () { return "ion-list"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List, "properties", {
        get: function () {
            return {
                "closeSlidingItems": {
                    "method": true
                },
                "el": {
                    "elementRef": true
                },
                "inset": {
                    "type": Boolean,
                    "attr": "inset"
                },
                "lines": {
                    "type": String,
                    "attr": "lines"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List, "style", {
        get: function () { return "ion-list{margin:0;padding:0;display:block;background:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{margin:-1px 0 32px}.list-ios:not(.list-inset):not(.list-ios-lines-none) .item:last-child{--inner-border-width:0;--border-width:0 0 0.55px 0}.list-ios.list-inset{margin:16px;border-radius:4px}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios .item-lines-full,.list-ios-lines-full .item{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios .item-lines-inset,.list-ios-lines-inset .item{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return List;
}());
var ListHeader = /** @class */ (function () {
    function ListHeader() {
    }
    ListHeader.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    ListHeader.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(ListHeader, "is", {
        get: function () { return "ion-list-header"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader, "style", {
        get: function () { return ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0 0 0 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden;--background:transparent;--color:var(--ion-text-color-step-150, #262626);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return ListHeader;
}());
var Note = /** @class */ (function () {
    function Note() {
    }
    Note.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Note.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Note, "is", {
        get: function () { return "ion-note"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note, "style", {
        get: function () { return ":host{color:var(--color);font-family:var(--ion-font-family,inherit);--color:var(--ion-text-color-step-650, #a6a6a6)}:host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Note;
}());
var SkeletonText = /** @class */ (function () {
    function SkeletonText() {
        this.width = '100%';
    }
    SkeletonText.prototype.render = function () {
        return h("span", { style: { width: this.width } }, "\u00A0");
    };
    Object.defineProperty(SkeletonText, "is", {
        get: function () { return "ion-skeleton-text"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkeletonText, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkeletonText, "properties", {
        get: function () {
            return {
                "width": {
                    "type": String,
                    "attr": "width"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkeletonText, "style", {
        get: function () { return ":host{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-text-color, #000)}span{display:inline-block;font-size:8px;background:var(--background);opacity:.1}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkeletonText, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return SkeletonText;
}());
export { Item as IonItem, ItemDivider as IonItemDivider, ItemGroup as IonItemGroup, Label as IonLabel, List as IonList, ListHeader as IonListHeader, Note as IonNote, SkeletonText as IonSkeletonText };
