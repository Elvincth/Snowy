/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { e as deferEvent, f as renderHiddenInput } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext } from './chunk-50fe9317.js';
var Checkbox = /** @class */ (function () {
    function Checkbox() {
        this.inputId = "ion-cb-" + checkboxIds++;
        this.labelId = this.inputId + "-lbl";
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
    }
    Checkbox.prototype.componentWillLoad = function () {
        this.emitStyle();
    };
    Checkbox.prototype.componentDidLoad = function () {
        this.ionStyle = deferEvent(this.ionStyle);
    };
    Checkbox.prototype.checkedChanged = function (isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    };
    Checkbox.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Checkbox.prototype.onChange = function () {
        this.checked = !this.checked;
    };
    Checkbox.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Checkbox.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Checkbox.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Checkbox.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'checkbox-checked': this.checked, 'checkbox-disabled': this.disabled, 'checkbox-key': this.keyFocus, 'interactive': true })
        };
    };
    Checkbox.prototype.render = function () {
        renderHiddenInput(this.el, this.name, this.value, this.disabled);
        return [
            h("div", { class: "checkbox-icon" }, h("div", { class: "checkbox-inner" })),
            h("input", { type: "checkbox", id: this.inputId, "aria-labelledby": this.labelId, onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, name: this.name, value: this.value, disabled: this.disabled })
        ];
    };
    Object.defineProperty(Checkbox, "is", {
        get: function () { return "ion-checkbox"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "properties", {
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
                    "attr": "disabled",
                    "watchCallbacks": ["emitStyle"]
                },
                "el": {
                    "elementRef": true
                },
                "keyFocus": {
                    "state": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name"
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
    Object.defineProperty(Checkbox, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionFocus",
                    "method": "ionFocus",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionBlur",
                    "method": "ionBlur",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
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
    Object.defineProperty(Checkbox, "style", {
        get: function () { return ":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--size:24px;--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color, #c8c7cc);--background:var(--ion-item-background-color, var(--ion-background-color, #fff))}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner{border-color:var(--checkmark-color);opacity:0;left:calc(var(--size)/ 2.5 - 1px);top:calc(var(--size)/ 6);position:absolute;width:calc(var(--size)/ 6 + 1px);height:calc(var(--size)/ 2);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 1px 1px 0;border-style:solid}:host(.checkbox-checked) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-inner{opacity:1}:host(.checkbox-disabled){pointer-events:none;opacity:.3}:host(.checkbox-key) .checkbox-icon::after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host(.in-item){margin:8px 16px 8px 2px;display:block;position:static}:host(.in-item[slot=end]){margin:10px 8px 9px 0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
var checkboxIds = 0;
export { Checkbox as IonCheckbox };
