/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var Segment = /** @class */ (function () {
    function Segment() {
        this.disabled = false;
    }
    Segment.prototype.valueChanged = function (value) {
        this.updateButtons();
        this.ionChange.emit({ value: value });
    };
    Segment.prototype.segmentClick = function (ev) {
        var selectedButton = ev.target;
        this.value = selectedButton.value;
    };
    Segment.prototype.componentDidLoad = function () {
        if (this.value == null) {
            var checked = this.getButtons().find(function (b) { return b.checked; });
            if (checked) {
                this.value = checked.value;
            }
        }
        this.updateButtons();
    };
    Segment.prototype.updateButtons = function () {
        var value = this.value;
        for (var _i = 0, _a = this.getButtons(); _i < _a.length; _i++) {
            var button = _a[_i];
            button.checked = (button.value === value);
        }
    };
    Segment.prototype.getButtons = function () {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    };
    Segment.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'segment-disabled': this.disabled })
        };
    };
    Object.defineProperty(Segment, "is", {
        get: function () { return "ion-segment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "properties", {
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
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "value": {
                    "type": String,
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "listeners", {
        get: function () {
            return [{
                    "name": "ionSelect",
                    "method": "segmentClick"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "style", {
        get: function () { return ".sc-ion-segment-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center;--background:transparent;--background-checked:var(--ion-color-primary, #3880ff);--border-color:currentColor;--border-color-checked:var(--ion-color-primary, #3880ff);--border-color-disabled:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary, #3880ff);--color-checked:var(--ion-color-primary-contrast, #fff);--color-disabled:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3)}.sc-ion-segment-ios-s > ion-segment-button{--btn-background:var(--background);--btn-border-color:var(--border-color);color:var(--color);--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;--icon-size:26px;height:32px;font-size:13px;line-height:37px}.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--background-checked);--btn-border-color:var(--border-color-checked);color:var(--color-checked)}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.segment-disabled.sc-ion-segment-ios-h{opacity:.4}.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--border-color-disabled);color:var(--color-disabled)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--ion-color-base);--btn-border-color:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--ion-color-base);color:rgba(var(--ion-color-base-rgb),.5)}ion-toolbar.sc-ion-segment-ios-h, ion-toolbar   .sc-ion-segment-ios-h{left:0;right:0;top:0;bottom:0;margin:0;position:absolute}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;height:30px;font-size:12px;line-height:22px}ion-toolbar.ion-color.sc-ion-segment-ios-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-segment-ios-h:not(.ion-color){--color:var(--ion-color-contrast);--color-checked:var(--ion-color-base);--color-disabled:rgba(var(--ion-color-contrast-rgb), 0.3);--background-checked:var(--ion-color-contrast);--border-color-checked:var(--ion-color-contrast);--border-color-disabled:var(--ion-color-contrast)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Segment;
}());
var ids = 0;
var SegmentButton = /** @class */ (function () {
    function SegmentButton() {
        this.checked = false;
        this.disabled = false;
        this.value = 'ion-sb-' + (ids++);
    }
    SegmentButton.prototype.checkedChanged = function (checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    };
    SegmentButton.prototype.hostData = function () {
        var _a = this, disabled = _a.disabled, checked = _a.checked, color = _a.color;
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(color), { 'segment-button-disabled': disabled, 'segment-button-checked': checked })
        };
    };
    SegmentButton.prototype.render = function () {
        var _this = this;
        return [
            h("button", { type: "button", "aria-pressed": this.checked ? 'true' : null, class: "segment-button-native", disabled: this.disabled, onClick: function () { return _this.checked = true; } }, h("slot", null), this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    };
    Object.defineProperty(SegmentButton, "is", {
        get: function () { return "ion-segment-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "properties", {
        get: function () {
            return {
                "checked": {
                    "type": Boolean,
                    "attr": "checked",
                    "mutable": true,
                    "watchCallbacks": ["checkedChanged"]
                },
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
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "events", {
        get: function () {
            return [{
                    "name": "ionSelect",
                    "method": "ionSelect",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "style", {
        get: function () { return ":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;--btn-background:inherit;--btn-border-color:inherit;-webkit-box-flex:1;-ms-flex:1;flex:1;color:inherit;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type) .segment-button-native{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host(:not(:first-of-type)) .segment-button-native{border-left-width:0}:host(:last-of-type) .segment-button-native{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.segment-button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--btn-border-color);background:var(--btn-background);contain:content;cursor:pointer;overflow:hidden}.segment-button-native:active,.segment-button-native:focus{outline:0}::slotted(ion-icon){font-size:var(--icon-size)}"; },
        enumerable: true,
        configurable: true
    });
    return SegmentButton;
}());
export { Segment as IonSegment, SegmentButton as IonSegmentButton };
