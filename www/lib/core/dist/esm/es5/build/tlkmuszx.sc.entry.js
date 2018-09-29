/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var Chip = /** @class */ (function () {
    function Chip() {
    }
    Chip.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color),
        };
    };
    Object.defineProperty(Chip, "is", {
        get: function () { return "ion-chip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "properties", {
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
    Object.defineProperty(Chip, "style", {
        get: function () { return ".sc-ion-chip-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--color:var(--ion-text-color-step-150, #262626);--label-margin-top:0;--label-margin-end:10px;--label-margin-bottom:0;--label-margin-start:10px;--avatar-width:24px;--avatar-height:24px;--avatar-margin-top:0;--avatar-margin-end:4px;--avatar-margin-bottom:0;--avatar-margin-start:4px;border-radius:16px;margin:2px 0;height:32px;font-size:13px}.ion-color.sc-ion-chip-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-button , .sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-icon {--color:currentColor}.sc-ion-chip-ios-s  ion-label {margin:var(--label-margin-top) var(--label-margin-end) var(--label-margin-bottom) var(--label-margin-start)}.sc-ion-chip-ios-s  ion-avatar {margin:var(--avatar-margin-top) var(--avatar-margin-end) var(--avatar-margin-bottom) var(--avatar-margin-start);width:var(--avatar-width);height:var(--avatar-height)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chip, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Chip;
}());
var ChipButton = /** @class */ (function () {
    function ChipButton() {
        this.disabled = false;
        this.fill = 'clear';
    }
    ChipButton.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["chip-button-" + this.fill] = true, _a))
        };
    };
    ChipButton.prototype.render = function () {
        var TagType = this.href === undefined ? 'button' : 'a';
        return (h(TagType, { type: "button", class: "chip-button-native", disabled: this.disabled, href: this.href }, h("span", { class: "chip-button-inner" }, h("slot", null)), this.mode === 'md' && h("ion-ripple-effect", null)));
    };
    Object.defineProperty(ChipButton, "is", {
        get: function () { return "ion-chip-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipButton, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "fill": {
                    "type": String,
                    "attr": "fill"
                },
                "href": {
                    "type": String,
                    "attr": "href"
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
    Object.defineProperty(ChipButton, "style", {
        get: function () { return ".sc-ion-chip-button-h{--border-radius:50%;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--width:32px;--height:100%;width:var(--width);height:var(--height);font-size:32px}.chip-button-clear.sc-ion-chip-button-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-button-solid.sc-ion-chip-button-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-button-solid.ion-color.sc-ion-chip-button-h   .chip-button-native.sc-ion-chip-button{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-button-clear.ion-color.sc-ion-chip-button-h   .chip-button-native.sc-ion-chip-button{background:0 0;color:var(--ion-color-base)}.chip-button-native.sc-ion-chip-button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);position:relative;width:var(--width);height:var(--height);border:0;outline:0;background:var(--background);color:var(--color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.chip-button-inner.sc-ion-chip-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return ChipButton;
}());
var ChipIcon = /** @class */ (function () {
    function ChipIcon() {
        this.fill = 'clear';
    }
    ChipIcon.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["chip-icon-" + this.fill] = true, _a))
        };
    };
    ChipIcon.prototype.render = function () {
        return h("ion-icon", { name: this.name, src: this.src, mode: this.mode });
    };
    Object.defineProperty(ChipIcon, "is", {
        get: function () { return "ion-chip-icon"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "fill": {
                    "type": String,
                    "attr": "fill"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "src": {
                    "type": String,
                    "attr": "src"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipIcon, "style", {
        get: function () { return ".sc-ion-chip-icon-h{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width,32px);height:var(--height,32px);background:var(--background);color:var(--color);font-size:18px}.chip-icon-clear.sc-ion-chip-icon-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-icon-solid.sc-ion-chip-icon-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-icon-solid.ion-color.sc-ion-chip-icon-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-icon-clear.ion-color.sc-ion-chip-icon-h{background:0 0;color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return ChipIcon;
}());
export { Chip as IonChip, ChipButton as IonChipButton, ChipIcon as IonChipIcon };
