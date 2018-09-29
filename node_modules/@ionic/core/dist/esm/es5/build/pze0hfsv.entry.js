import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { e as deferEvent, f as renderHiddenInput } from './chunk-e7816c0b.js';
import { f as hostContext, g as createThemedClasses } from './chunk-50fe9317.js';
var Select = /** @class */ (function () {
    function Select() {
        this.childOpts = [];
        this.inputId = "ion-sel-" + selectIds++;
        this.isExpanded = false;
        this.keyFocus = false;
        this.disabled = false;
        this.cancelText = 'Cancel';
        this.okText = 'OK';
        this.name = this.inputId;
        this.multiple = false;
        this.interface = 'alert';
        this.interfaceOptions = {};
    }
    Select.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Select.prototype.valueChanged = function () {
        var _this = this;
        if (this.value === undefined) {
            this.childOpts.filter(function (o) { return o.selected; }).forEach(function (selectOption) {
                selectOption.selected = false;
            });
            this.text = '';
        }
        else {
            var hasChecked_1 = false;
            var texts_1 = [];
            this.childOpts.forEach(function (selectOption) {
                if ((Array.isArray(_this.value) && _this.value.includes(selectOption.value)) || (selectOption.value === _this.value)) {
                    if (!selectOption.selected && (_this.multiple || !hasChecked_1)) {
                        selectOption.selected = true;
                    }
                    else if (!_this.multiple && hasChecked_1 && selectOption.selected) {
                        selectOption.selected = false;
                    }
                    hasChecked_1 = true;
                }
                else if (selectOption.selected) {
                    selectOption.selected = false;
                }
                if (selectOption.selected) {
                    texts_1.push(selectOption.textContent || '');
                }
            });
            this.text = texts_1.join(', ');
        }
        this.ionChange.emit({
            value: this.value,
            text: this.text
        });
        this.emitStyle();
    };
    Select.prototype.optLoad = function (ev) {
        var selectOption = ev.target;
        this.childOpts = Array.from(this.el.querySelectorAll('ion-select-option'));
        if (this.value != null && (Array.isArray(this.value) && this.value.includes(selectOption.value)) || (selectOption.value === this.value)) {
            selectOption.selected = true;
        }
        else if (Array.isArray(this.value) && this.multiple && selectOption.selected) {
            this.value.push(selectOption.value);
        }
        else if (this.value === undefined && selectOption.selected) {
            this.value = selectOption.value;
        }
        else if (selectOption.selected) {
            selectOption.selected = false;
        }
    };
    Select.prototype.optUnload = function (ev) {
        var index = this.childOpts.indexOf(ev.target);
        if (index > -1) {
            this.childOpts.splice(index, 1);
        }
    };
    Select.prototype.onSelect = function (ev) {
        var _this = this;
        this.childOpts.forEach(function (selectOption) {
            if (selectOption === ev.target) {
                _this.value = selectOption.value;
            }
            else {
                selectOption.selected = false;
            }
        });
    };
    Select.prototype.componentWillLoad = function () {
        if (!this.value) {
            this.value = this.multiple ? [] : undefined;
        }
    };
    Select.prototype.componentDidLoad = function () {
        var _this = this;
        this.ionStyle = deferEvent(this.ionStyle);
        var label = this.getLabel();
        if (label) {
            this.labelId = label.id = this.name + '-lbl';
        }
        if (this.multiple) {
            var checked = this.childOpts.filter(function (o) { return o.selected; });
            this.value.length = 0;
            checked.forEach(function (o) {
                _this.value.push(o.value);
            });
            this.text = checked.map(function (o) { return o.textContent; }).join(', ');
        }
        else {
            var checked = this.childOpts.find(function (o) { return o.selected; });
            if (checked) {
                this.value = checked.value;
                this.text = checked.textContent || '';
            }
        }
        this.emitStyle();
    };
    Select.prototype.open = function (ev) {
        var selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    };
    Select.prototype.getLabel = function () {
        var item = this.el.closest('ion-item');
        if (item) {
            return item.querySelector('ion-label');
        }
        return null;
    };
    Select.prototype.openPopover = function (ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var interfaceOptions, popoverOpts, popover, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        interfaceOptions = this.interfaceOptions;
                        popoverOpts = Object.assign({}, interfaceOptions, { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                                header: interfaceOptions.header,
                                subHeader: interfaceOptions.subHeader,
                                message: interfaceOptions.message,
                                value: this.value,
                                options: this.childOpts.map(function (o) {
                                    return {
                                        text: o.textContent,
                                        value: o.value,
                                        checked: o.selected,
                                        disabled: o.disabled,
                                        handler: function () {
                                            _this.value = o.value;
                                            _this.close();
                                        }
                                    };
                                })
                            } });
                        _a = this;
                        return [4 /*yield*/, this.popoverCtrl.create(popoverOpts)];
                    case 1:
                        popover = _a.overlay = _b.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _b.sent();
                        this.isExpanded = true;
                        return [2 /*return*/, popover];
                }
            });
        });
    };
    Select.prototype.openActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheetButtons, interfaceOptions, actionSheetOpts, actionSheet, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        actionSheetButtons = this.childOpts.map(function (option) {
                            return {
                                role: (option.selected ? 'selected' : ''),
                                text: option.textContent,
                                handler: function () {
                                    _this.value = option.value;
                                }
                            };
                        });
                        actionSheetButtons.push({
                            text: this.cancelText,
                            role: 'cancel',
                            handler: function () {
                                _this.ionCancel.emit();
                            }
                        });
                        interfaceOptions = this.interfaceOptions;
                        actionSheetOpts = Object.assign({}, interfaceOptions, { buttons: actionSheetButtons, cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                        _a = this;
                        return [4 /*yield*/, this.actionSheetCtrl.create(actionSheetOpts)];
                    case 1:
                        actionSheet = _a.overlay = _b.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _b.sent();
                        this.isExpanded = true;
                        return [2 /*return*/, actionSheet];
                }
            });
        });
    };
    Select.prototype.openAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var label, labelText, interfaceOptions, inputType, alertOpts, alert, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        label = this.getLabel();
                        labelText = (label) ? label.textContent : null;
                        interfaceOptions = this.interfaceOptions;
                        inputType = (this.multiple ? 'checkbox' : 'radio');
                        alertOpts = Object.assign({}, interfaceOptions, { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.childOpts.map(function (o) {
                                return {
                                    type: inputType,
                                    label: o.textContent,
                                    value: o.value,
                                    checked: o.selected,
                                    disabled: o.disabled
                                };
                            }), buttons: [
                                {
                                    text: this.cancelText,
                                    role: 'cancel',
                                    handler: function () {
                                        _this.ionCancel.emit();
                                    }
                                },
                                {
                                    text: this.okText,
                                    handler: function (selectedValues) {
                                        _this.value = selectedValues;
                                    }
                                }
                            ], cssClass: ['select-alert', interfaceOptions.cssClass,
                                (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                        _a = this;
                        return [4 /*yield*/, this.alertCtrl.create(alertOpts)];
                    case 1:
                        alert = _a.overlay = _b.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _b.sent();
                        this.isExpanded = true;
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    Select.prototype.close = function () {
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        var overlay = this.overlay;
        this.overlay = undefined;
        this.isExpanded = false;
        return overlay.dismiss();
    };
    Select.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Select.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Select.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Select.prototype.hasValue = function () {
        if (Array.isArray(this.value)) {
            return this.value.length > 0;
        }
        return (this.value != null && this.value !== undefined && this.value !== '');
    };
    Select.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    };
    Select.prototype.hostData = function () {
        return {
            class: {
                'in-item': hostContext('ion-item', this.el),
                'select-disabled': this.disabled,
                'select-key': this.keyFocus
            }
        };
    };
    Select.prototype.render = function () {
        renderHiddenInput(this.el, this.name, parseValue(this.value), this.disabled);
        var addPlaceholderClass = false;
        var selectText = this.selectedText || this.text;
        if (selectText === undefined && this.placeholder !== undefined) {
            selectText = this.placeholder;
            addPlaceholderClass = true;
        }
        var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return [
            h("div", { role: "textbox", "aria-multiline": "false", class: selectTextClasses }, selectText),
            h("div", { class: "select-icon", role: "presentation" }, h("div", { class: "select-icon-inner" })),
            h("button", { type: "button", role: "combobox", "aria-haspopup": "dialog", "aria-labelledby": this.labelId, "aria-expanded": this.isExpanded ? 'true' : null, "aria-disabled": this.disabled ? 'true' : null, onClick: this.open.bind(this), onKeyUp: this.onKeyUp.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), class: "select-cover" }, h("slot", null), this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    };
    Object.defineProperty(Select, "is", {
        get: function () { return "ion-select"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "properties", {
        get: function () {
            return {
                "actionSheetCtrl": {
                    "connect": "ion-action-sheet-controller"
                },
                "alertCtrl": {
                    "connect": "ion-alert-controller"
                },
                "cancelText": {
                    "type": String,
                    "attr": "cancel-text"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "interface": {
                    "type": String,
                    "attr": "interface"
                },
                "interfaceOptions": {
                    "type": "Any",
                    "attr": "interface-options"
                },
                "isExpanded": {
                    "state": true
                },
                "keyFocus": {
                    "state": true
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
                "okText": {
                    "type": String,
                    "attr": "ok-text"
                },
                "open": {
                    "method": true
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "popoverCtrl": {
                    "connect": "ion-popover-controller"
                },
                "selectedText": {
                    "type": String,
                    "attr": "selected-text"
                },
                "text": {
                    "state": true
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
    Object.defineProperty(Select, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionCancel",
                    "method": "ionCancel",
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
    Object.defineProperty(Select, "listeners", {
        get: function () {
            return [{
                    "name": "ionSelectOptionDidLoad",
                    "method": "optLoad"
                }, {
                    "name": "ionSelectOptionDidUnload",
                    "method": "optUnload"
                }, {
                    "name": "ionSelect",
                    "method": "onSelect"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "style", {
        get: function () { return ":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;--color:var(--ion-text-color, #000);--icon-color:var(--ion-text-color-step-650, #a6a6a6);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px;--placeholder-color:var(--ion-text-color-step-650, #a6a6a6)}:host(.in-item){max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.select-key) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color)}.select-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.select-icon{position:relative}.select-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--icon-color);pointer-events:none}::slotted(ion-select-option){display:none}button:focus{outline:0}.select-icon{width:12px;height:18px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Select;
}());
function parseValue(value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
}
var selectIds = 0;
var SelectOption = /** @class */ (function () {
    function SelectOption() {
        this.inputId = "ion-selopt-" + selectOptionIds++;
        this.disabled = false;
        this.selected = false;
    }
    SelectOption.prototype.componentWillLoad = function () {
        if (this.value == null) {
            this.value = this.el.textContent || '';
        }
    };
    SelectOption.prototype.componentDidLoad = function () {
        this.ionSelectOptionDidLoad.emit();
    };
    SelectOption.prototype.componentDidUnload = function () {
        this.ionSelectOptionDidUnload.emit();
    };
    SelectOption.prototype.hostData = function () {
        return {
            'role': 'option',
            'id': this.inputId
        };
    };
    Object.defineProperty(SelectOption, "is", {
        get: function () { return "ion-select-option"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectOption, "properties", {
        get: function () {
            return {
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "selected": {
                    "type": Boolean,
                    "attr": "selected"
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
    Object.defineProperty(SelectOption, "events", {
        get: function () {
            return [{
                    "name": "ionSelectOptionDidLoad",
                    "method": "ionSelectOptionDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSelectOptionDidUnload",
                    "method": "ionSelectOptionDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    return SelectOption;
}());
var selectOptionIds = 0;
var SelectPopover = /** @class */ (function () {
    function SelectPopover() {
        this.options = [];
    }
    SelectPopover.prototype.onSelect = function (ev) {
        var option = this.options.find(function (o) { return o.value === ev.target.value; });
        if (option && option.handler) {
            option.handler();
        }
    };
    SelectPopover.prototype.hostData = function () {
        return {
            class: createThemedClasses(this.mode, 'select-popover')
        };
    };
    SelectPopover.prototype.render = function () {
        return (h("ion-list", null, this.header !== undefined && h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            h("ion-item", null, h("ion-label", { "text-wrap": true }, this.subHeader !== undefined && h("h3", null, this.subHeader), this.message !== undefined && h("p", null, this.message))), h("ion-radio-group", null, this.options.map(function (option) { return h("ion-item", null, h("ion-label", null, option.text), h("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })); }))));
    };
    Object.defineProperty(SelectPopover, "is", {
        get: function () { return "ion-select-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectPopover, "properties", {
        get: function () {
            return {
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "message": {
                    "type": String,
                    "attr": "message"
                },
                "options": {
                    "type": "Any",
                    "attr": "options"
                },
                "subHeader": {
                    "type": String,
                    "attr": "sub-header"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectPopover, "listeners", {
        get: function () {
            return [{
                    "name": "ionSelect",
                    "method": "onSelect"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectPopover, "style", {
        get: function () { return ":host ::slotted(ion-list){margin:-1px 0}"; },
        enumerable: true,
        configurable: true
    });
    return SelectPopover;
}());
export { Select as IonSelect, SelectOption as IonSelectOption, SelectPopover as IonSelectPopover };
