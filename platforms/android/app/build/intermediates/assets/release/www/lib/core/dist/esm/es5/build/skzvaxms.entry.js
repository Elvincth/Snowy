import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses, e as openURL } from './chunk-50fe9317.js';
var Anchor = /** @class */ (function () {
    function Anchor() {
    }
    Anchor.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color),
            'ion-activatable': true
        };
    };
    Anchor.prototype.render = function () {
        var _this = this;
        return (h("a", { href: this.href, onClick: function (ev) { return openURL(_this.win, _this.href, ev, _this.routerDirection); } }, h("slot", null)));
    };
    Object.defineProperty(Anchor, "is", {
        get: function () { return "ion-anchor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Anchor, "style", {
        get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var BackButton = /** @class */ (function () {
    function BackButton() {
    }
    BackButton.prototype.onClick = function (ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nav, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nav = this.el.closest('ion-nav');
                        ev.preventDefault();
                        _a = nav;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, nav.canGoBack()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, nav.pop({ skipIfBusy: true })];
                        }
                        return [2 /*return*/, openURL(this.win, this.defaultHref, ev, 'back')];
                }
            });
        });
    };
    BackButton.prototype.hostData = function () {
        var showBackButton = this.defaultHref !== undefined;
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'button': true, 'show-back-button': showBackButton }),
            'ion-activatable': true,
        };
    };
    BackButton.prototype.render = function () {
        var _this = this;
        var backButtonIcon = this.icon || this.config.get('backButtonIcon', 'arrow-back');
        var backButtonText = this.text !== undefined ? this.text : this.config.get('backButtonText', 'Back');
        return (h("button", { type: "button", class: "back-button-native", onClick: function (ev) { return _this.onClick(ev); } }, h("span", { class: "back-button-inner" }, backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }), this.mode === 'ios' && backButtonText && h("span", { class: "button-text" }, backButtonText), this.mode === 'md' && h("ion-ripple-effect", null))));
    };
    Object.defineProperty(BackButton, "is", {
        get: function () { return "ion-back-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "defaultHref": {
                    "type": String,
                    "attr": "default-href"
                },
                "el": {
                    "elementRef": true
                },
                "icon": {
                    "type": String,
                    "attr": "icon"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "style", {
        get: function () { return ".sc-ion-back-button-md-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:currentColor}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.back-button-native.sc-ion-back-button-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.back-button-inner.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.sc-ion-back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;background-color:transparent;font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.back-button-native.activated.sc-ion-back-button-md{opacity:.4}ion-icon.sc-ion-back-button-md{padding-right:.3em;margin:0 6px;font-size:24px;font-weight:400;line-height:.67;text-align:start;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackButton, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return BackButton;
}());
export { Anchor as IonAnchor, BackButton as IonBackButton };
