/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { e as deferEvent } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext } from './chunk-50fe9317.js';
var Radio = /** @class */ (function () {
    function Radio() {
        this.inputId = "ion-rb-" + radioButtonIds++;
        this.keyFocus = false;
        this.name = this.inputId;
        this.disabled = false;
        this.checked = false;
    }
    Radio.prototype.componentWillLoad = function () {
        this.ionSelect = deferEvent(this.ionSelect);
        this.ionStyle = deferEvent(this.ionStyle);
        if (this.value == null) {
            this.value = this.inputId;
        }
        this.emitStyle();
    };
    Radio.prototype.componentDidLoad = function () {
        this.ionRadioDidLoad.emit();
        this.nativeInput.checked = this.checked;
        var parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            var itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
    };
    Radio.prototype.componentDidUnload = function () {
        this.ionRadioDidUnload.emit();
    };
    Radio.prototype.colorChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.checkedChanged = function (isChecked) {
        if (this.nativeInput.checked !== isChecked) {
            this.nativeInput.checked = isChecked;
        }
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    };
    Radio.prototype.disabledChanged = function (isDisabled) {
        this.nativeInput.disabled = isDisabled;
        this.emitStyle();
    };
    Radio.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Radio.prototype.onClick = function () {
        this.checkedChanged(true);
    };
    Radio.prototype.onChange = function () {
        this.checked = true;
        this.nativeInput.focus();
    };
    Radio.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Radio.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Radio.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Radio.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'interactive': true, 'radio-checked': this.checked, 'radio-disabled': this.disabled, 'radio-key': this.keyFocus })
        };
    };
    Radio.prototype.render = function () {
        var _this = this;
        return [
            h("div", { class: "radio-icon" }, h("div", { class: "radio-inner" })),
            h("input", { type: "radio", onClick: this.onClick.bind(this), onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: function (r) { return _this.nativeInput = r; } })
        ];
    };
    Object.defineProperty(Radio, "is", {
        get: function () { return "ion-radio"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "properties", {
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
                    "attr": "color",
                    "watchCallbacks": ["colorChanged"]
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
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
                    "type": "Any",
                    "attr": "value",
                    "mutable": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "events", {
        get: function () {
            return [{
                    "name": "ionRadioDidLoad",
                    "method": "ionRadioDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionRadioDidUnload",
                    "method": "ionRadioDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionStyle",
                    "method": "ionStyle",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSelect",
                    "method": "ionSelect",
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "style", {
        get: function () { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--color:var(--ion-text-color-step-600, #999999);--color-checked:var(--ion-color-primary, #3880ff);--width:16px;--height:16px}:host(.radio-disabled){pointer-events:none;opacity:.3}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{display:block;position:relative;width:var(--width);height:var(--height);contain:layout size style;left:0;top:0;margin:0;border-radius:50%;border-width:2px;border-style:solid;border-color:var(--color)}.radio-inner{left:2px;top:2px;border-radius:50%;position:absolute;width:8px;height:8px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}:host(.radio-key) .radio-icon::after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host(.in-item){margin:9px 10px 9px 0;display:block;position:static}:host(.in-item[slot=start]){margin:11px 36px 10px 4px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
var radioButtonIds = 0;
var RadioGroup = /** @class */ (function () {
    function RadioGroup() {
        this.inputId = "ion-rg-" + radioGroupIds++;
        this.labelId = this.inputId + "-lbl";
        this.radios = [];
        this.allowEmptySelection = false;
        this.name = this.inputId;
        this.disabled = false;
    }
    RadioGroup.prototype.disabledChanged = function () {
        for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
            var radio = _a[_i];
            radio.disabled = this.disabled;
        }
    };
    RadioGroup.prototype.valueChanged = function (value) {
        this.updateRadios();
        this.ionChange.emit({ value: value });
    };
    RadioGroup.prototype.onRadioDidLoad = function (ev) {
        var radio = ev.target;
        radio.name = this.name;
        this.radios.push(radio);
        if (this.value == null && radio.checked) {
            this.value = radio.value;
        }
        else {
            this.updateRadios();
        }
    };
    RadioGroup.prototype.onRadioDidUnload = function (ev) {
        var index = this.radios.indexOf(ev.target);
        if (index > -1) {
            this.radios.splice(index, 1);
        }
    };
    RadioGroup.prototype.onRadioSelect = function (ev) {
        var selectedRadio = ev.target;
        if (selectedRadio) {
            this.value = selectedRadio.value;
        }
    };
    RadioGroup.prototype.componentDidLoad = function () {
        var header = this.el.querySelector('ion-list-header');
        if (!header) {
            header = this.el.querySelector('ion-item-divider');
        }
        if (header) {
            var label = header.querySelector('ion-label');
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
        this.disabledChanged();
        this.updateRadios();
    };
    RadioGroup.prototype.updateRadios = function () {
        var value = this.value;
        var hasChecked = false;
        for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
            var radio = _a[_i];
            if (!hasChecked && radio.value === value) {
                hasChecked = true;
                radio.checked = true;
            }
            else {
                radio.checked = false;
            }
        }
    };
    RadioGroup.prototype.hostData = function () {
        return {
            'role': 'radiogroup',
            'aria-labelledby': this.labelId
        };
    };
    Object.defineProperty(RadioGroup, "is", {
        get: function () { return "ion-radio-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup, "properties", {
        get: function () {
            return {
                "allowEmptySelection": {
                    "type": Boolean,
                    "attr": "allow-empty-selection"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "value": {
                    "type": "Any",
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup, "events", {
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
    Object.defineProperty(RadioGroup, "listeners", {
        get: function () {
            return [{
                    "name": "ionRadioDidLoad",
                    "method": "onRadioDidLoad"
                }, {
                    "name": "ionRadioDidUnload",
                    "method": "onRadioDidUnload"
                }, {
                    "name": "ionSelect",
                    "method": "onRadioSelect"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return RadioGroup;
}());
var radioGroupIds = 0;
export { Radio as IonRadio, RadioGroup as IonRadioGroup };
