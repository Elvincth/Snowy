import { debounceEvent, deferEvent, renderHiddenInput } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';
export class Textarea {
    constructor() {
        this.inputId = `ion-input-${textareaIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = 'none';
        this.autofocus = false;
        this.clearOnEdit = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.value = '';
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        const { nativeInput, value } = this;
        if (nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.ionChange.emit({ value });
    }
    componentDidLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
        this.debounceChanged();
        this.emitStyle();
    }
    focus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'textarea': true,
            'input': true,
            'interactive-disabled': this.disabled,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus
        });
    }
    onInput(ev) {
        this.value = this.nativeInput.value;
        this.emitStyle();
        this.ionInput.emit(ev);
    }
    onFocus() {
        this.hasFocus = true;
        this.focusChange();
        this.ionFocus.emit();
    }
    onBlur() {
        this.hasFocus = false;
        this.focusChange();
        this.ionBlur.emit();
    }
    onKeyDown() {
        this.checkClearOnEdit();
    }
    checkClearOnEdit() {
        if (!this.clearOnEdit) {
            return;
        }
        if (this.didBlurAfterEdit && this.hasValue()) {
            this.value = '';
        }
        this.didBlurAfterEdit = false;
    }
    focusChange() {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
        this.emitStyle();
    }
    hasValue() {
        return this.value !== '';
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color))
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, this.value, this.disabled);
        return (h("textarea", { class: "native-textarea", ref: el => this.nativeInput = el, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.onKeyDown.bind(this) }, this.value));
    }
    static get is() { return "ion-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autocapitalize": {
            "type": String,
            "attr": "autocapitalize"
        },
        "autofocus": {
            "type": Boolean,
            "attr": "autofocus"
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
        "cols": {
            "type": Number,
            "attr": "cols"
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
        "maxlength": {
            "type": Number,
            "attr": "maxlength"
        },
        "minlength": {
            "type": Number,
            "attr": "minlength"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
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
        "rows": {
            "type": Number,
            "attr": "rows"
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        },
        "wrap": {
            "type": String,
            "attr": "wrap"
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionInput",
            "method": "ionInput",
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
        }]; }
    static get style() { return "/**style-placeholder:ion-textarea:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-textarea:**/"; }
}
let textareaIds = 0;
