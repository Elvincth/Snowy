/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { g as debounceEvent, e as deferEvent, f as renderHiddenInput } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext } from './chunk-50fe9317.js';
var Input = /** @class */ (function () {
    function Input() {
        this.inputId = "ion-input-" + inputIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = 'none';
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.autofocus = false;
        this.clearInput = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.type = 'text';
        this.value = '';
    }
    Input.prototype.debounceChanged = function () {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    };
    Input.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Input.prototype.valueChanged = function () {
        var inputEl = this.nativeInput;
        var value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.emitStyle();
        this.ionChange.emit({ value: value });
    };
    Input.prototype.componentWillLoad = function () {
        if (this.clearOnEdit === undefined && this.type === 'password') {
            this.clearOnEdit = true;
        }
    };
    Input.prototype.componentDidLoad = function () {
        this.ionStyle = deferEvent(this.ionStyle);
        this.debounceChanged();
        this.emitStyle();
        this.ionInputDidLoad.emit();
    };
    Input.prototype.componentDidUnload = function () {
        this.nativeInput = undefined;
        this.ionInputDidUnload.emit();
    };
    Input.prototype.focus = function () {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    };
    Input.prototype.getValue = function () {
        return this.value || '';
    };
    Input.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    };
    Input.prototype.onInput = function (ev) {
        var input = ev.target;
        if (input) {
            this.value = input.value || '';
        }
        this.ionInput.emit(ev);
    };
    Input.prototype.onBlur = function () {
        this.hasFocus = false;
        this.focusChanged();
        this.emitStyle();
        this.ionBlur.emit();
    };
    Input.prototype.onFocus = function () {
        this.hasFocus = true;
        this.focusChanged();
        this.emitStyle();
        this.ionFocus.emit();
    };
    Input.prototype.focusChanged = function () {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    };
    Input.prototype.onKeydown = function () {
        if (this.clearOnEdit) {
            if (this.didBlurAfterEdit && this.hasValue()) {
                this.clearTextInput();
            }
            this.didBlurAfterEdit = false;
        }
    };
    Input.prototype.clearTextInput = function () {
        this.value = '';
    };
    Input.prototype.hasValue = function () {
        return this.getValue().length > 0;
    };
    Input.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'has-value': this.hasValue(), 'has-focus': this.hasFocus })
        };
    };
    Input.prototype.render = function () {
        var _this = this;
        renderHiddenInput(this.el, this.name, this.getValue(), this.disabled);
        return [
            h("input", { ref: function (input) { return _this.nativeInput = input; }, "aria-disabled": this.disabled ? 'true' : null, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, class: "native-input", disabled: this.disabled, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder, results: this.results, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: this.getValue(), onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.onKeydown.bind(this) }),
            h("slot", null),
            (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput.bind(this), onMouseDown: this.clearTextInput.bind(this) })
        ];
    };
    Object.defineProperty(Input, "is", {
        get: function () { return "ion-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "properties", {
        get: function () {
            return {
                "accept": {
                    "type": String,
                    "attr": "accept"
                },
                "autocapitalize": {
                    "type": String,
                    "attr": "autocapitalize"
                },
                "autocomplete": {
                    "type": String,
                    "attr": "autocomplete"
                },
                "autocorrect": {
                    "type": String,
                    "attr": "autocorrect"
                },
                "autofocus": {
                    "type": Boolean,
                    "attr": "autofocus"
                },
                "clearInput": {
                    "type": Boolean,
                    "attr": "clear-input"
                },
                "clearOnEdit": {
                    "type": Boolean,
                    "attr": "clear-on-edit",
                    "mutable": true
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "debounce": {
                    "type": Number,
                    "attr": "debounce",
                    "watchCallbacks": ["debounceChanged"]
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "focus": {
                    "method": true
                },
                "hasFocus": {
                    "state": true
                },
                "inputmode": {
                    "type": String,
                    "attr": "inputmode"
                },
                "max": {
                    "type": String,
                    "attr": "max"
                },
                "maxlength": {
                    "type": Number,
                    "attr": "maxlength"
                },
                "min": {
                    "type": String,
                    "attr": "min"
                },
                "minlength": {
                    "type": Number,
                    "attr": "minlength"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "multiple": {
                    "type": Boolean,
                    "attr": "multiple"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "pattern": {
                    "type": String,
                    "attr": "pattern"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "readonly": {
                    "type": Boolean,
                    "attr": "readonly"
                },
                "required": {
                    "type": Boolean,
                    "attr": "required"
                },
                "results": {
                    "type": Number,
                    "attr": "results"
                },
                "size": {
                    "type": Number,
                    "attr": "size"
                },
                "spellcheck": {
                    "type": Boolean,
                    "attr": "spellcheck"
                },
                "step": {
                    "type": String,
                    "attr": "step"
                },
                "type": {
                    "type": String,
                    "attr": "type"
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
    Object.defineProperty(Input, "events", {
        get: function () {
            return [{
                    "name": "ionInput",
                    "method": "ionInput",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionChange",
                    "method": "ionChange",
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
                    "name": "ionBlur",
                    "method": "ionBlur",
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
                    "name": "ionInputDidLoad",
                    "method": "ionInputDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionInputDidUnload",
                    "method": "ionInputDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "style", {
        get: function () { return ".sc-ion-input-md-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;font-family:var(--ion-font-family,inherit);--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:8px;font-size:inherit}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input[disabled].sc-ion-input-md{opacity:.4}.input-cover.sc-ion-input-md{left:0;top:0;position:absolute;width:100%;height:100%}[disabled].sc-ion-input-md-h   .input-cover.sc-ion-input-md{pointer-events:none}.input-clear-icon.sc-ion-input-md{margin:0;padding:0;background-position:center;border:0;outline:0;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-color-step-400,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}.has-focus.has-value.sc-ion-input-md-h   .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h   .input-cover.sc-ion-input-md{display:none}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h   a.sc-ion-input-md, .has-focus.sc-ion-input-md-h   button.sc-ion-input-md, .has-focus.sc-ion-input-md-h   input.sc-ion-input-md{pointer-events:auto}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Input;
}());
var inputIds = 0;
export { Input as IonInput };
