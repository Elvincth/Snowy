import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as BACKDROP, b as dismiss, c as eventMethod, d as isCancel, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { c as getClassMap } from './chunk-50fe9317.js';
function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    var ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}
function mdEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.5);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Alert = /** @class */ (function () {
    function Alert() {
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.keyboardClose = true;
        this.buttons = [];
        this.inputs = [];
        this.backdropDismiss = true;
        this.translucent = false;
        this.animated = true;
    }
    Alert.prototype.buttonsChanged = function () {
        var buttons = this.buttons;
        this.processedButtons = buttons.map(function (btn) {
            return (typeof btn === 'string')
                ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
                : btn;
        });
    };
    Alert.prototype.inputsChanged = function () {
        var _this = this;
        var inputs = this.inputs;
        var inputTypes = new Set(inputs.map(function (i) { return i.type; }));
        if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
            console.warn("Alert cannot mix input types: " + (Array.from(inputTypes.values()).join('/')) + ". Please see alert docs for more info.");
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map(function (i, index) { return ({
            type: i.type || 'text',
            name: i.name || "" + index,
            placeholder: i.placeholder || '',
            value: i.value || '',
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id || "alert-input-" + _this.overlayIndex + "-" + index,
            handler: i.handler,
            min: i.min,
            max: i.max
        }); });
    };
    Alert.prototype.componentWillLoad = function () {
        this.inputsChanged();
        this.buttonsChanged();
    };
    Alert.prototype.componentDidLoad = function () {
        this.ionAlertDidLoad.emit();
    };
    Alert.prototype.componentDidUnload = function () {
        this.ionAlertDidUnload.emit();
    };
    Alert.prototype.onBackdropTap = function () {
        this.dismiss(undefined, BACKDROP);
    };
    Alert.prototype.dispatchCancelHandler = function (ev) {
        var role = ev.detail.role;
        if (isCancel(role)) {
            var cancelButton = this.processedButtons.find(function (b) { return b.role === 'cancel'; });
            this.callButtonHandler(cancelButton);
        }
    };
    Alert.prototype.present = function () {
        return present(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
    };
    Alert.prototype.dismiss = function (data, role) {
        return dismiss(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    Alert.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionAlertDidDismiss');
    };
    Alert.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionAlertWillDismiss');
    };
    Alert.prototype.rbClick = function (selectedInput) {
        for (var _i = 0, _a = this.processedInputs; _i < _a.length; _i++) {
            var input = _a[_i];
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    };
    Alert.prototype.cbClick = function (selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    };
    Alert.prototype.buttonClick = function (button) {
        var role = button.role;
        var values = this.getValues();
        if (isCancel(role)) {
            return this.dismiss({ values: values }, role);
        }
        var returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values: values }, returnData), button.role);
        }
        return Promise.resolve(false);
    };
    Alert.prototype.callButtonHandler = function (button, data) {
        if (button && button.handler) {
            var returnData = button.handler(data);
            if (returnData === false) {
                return false;
            }
            if (typeof returnData === 'object') {
                return returnData;
            }
        }
        return {};
    };
    Alert.prototype.getValues = function () {
        if (this.processedInputs.length === 0) {
            return undefined;
        }
        if (this.inputType === 'radio') {
            var checkedInput = this.processedInputs.find(function (i) { return !!i.checked; });
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            return this.processedInputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
        }
        var values = {};
        this.processedInputs.forEach(function (i) {
            values[i.name] = i.value || '';
        });
        return values;
    };
    Alert.prototype.renderAlertInputs = function (labelledBy) {
        switch (this.inputType) {
            case 'checkbox': return this.renderCheckbox(labelledBy);
            case 'radio': return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    };
    Alert.prototype.renderCheckbox = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (h("button", { type: "button", onClick: function () { return _this.cbClick(i); }, "aria-checked": i.checked ? 'true' : null, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: "alert-tappable alert-checkbox alert-checkbox-button" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-checkbox-icon" }, h("div", { class: "alert-checkbox-inner" })), h("div", { class: "alert-checkbox-label" }, i.label)), _this.mode === 'md' && h("ion-ripple-effect", null))); })));
    };
    Alert.prototype.renderRadio = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(function (i) { return (h("button", { type: "button", onClick: function () { return _this.rbClick(i); }, "aria-checked": i.checked ? 'true' : null, disabled: i.disabled, id: i.id, tabIndex: 0, class: "alert-radio-button alert-tappable alert-radio", role: "radio" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-radio-icon" }, h("div", { class: "alert-radio-inner" })), h("div", { class: "alert-radio-label" }, i.label)), _this.mode === 'md' && h("ion-ripple-effect", null))); })));
    };
    Alert.prototype.renderInput = function (labelledby) {
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (h("div", { class: "alert-input-wrapper" }, h("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: function (e) { return i.value = e.target.value; }, id: i.id, disabled: i.disabled, tabIndex: 0, class: "alert-input" }))); })));
    };
    Alert.prototype.hostData = function () {
        return {
            role: 'alertdialog',
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            class: Object.assign({}, getClassMap(this.cssClass), { 'alert-translucent': this.translucent })
        };
    };
    Alert.prototype.renderAlertButtons = function () {
        var _this = this;
        var buttons = this.processedButtons;
        var alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': buttons.length > 2
        };
        return (h("div", { class: alertButtonGroupClass }, buttons.map(function (button) { return h("button", { type: "button", "ion-activatable": true, class: buttonClass(button), tabIndex: 0, onClick: function () { return _this.buttonClick(button); } }, h("span", { class: "alert-button-inner" }, button.text)); })));
    };
    Alert.prototype.render = function () {
        var hdrId = "alert-" + this.overlayIndex + "-hdr";
        var subHdrId = "alert-" + this.overlayIndex + "-sub-hdr";
        var msgId = "alert-" + this.overlayIndex + "-msg";
        var labelledById;
        if (this.header !== undefined) {
            labelledById = hdrId;
        }
        else if (this.subHeader !== undefined) {
            labelledById = subHdrId;
        }
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "alert-wrapper" }, h("div", { class: "alert-head" }, this.header && h("h2", { id: hdrId, class: "alert-title" }, this.header), this.subHeader && h("h2", { id: subHdrId, class: "alert-sub-title" }, this.subHeader)), h("div", { id: msgId, class: "alert-message", innerHTML: this.message }), this.renderAlertInputs(labelledById), this.renderAlertButtons())
        ];
    };
    Object.defineProperty(Alert, "is", {
        get: function () { return "ion-alert"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "backdropDismiss": {
                    "type": Boolean,
                    "attr": "backdrop-dismiss"
                },
                "buttons": {
                    "type": "Any",
                    "attr": "buttons",
                    "watchCallbacks": ["buttonsChanged"]
                },
                "config": {
                    "context": "config"
                },
                "cssClass": {
                    "type": String,
                    "attr": "css-class"
                },
                "dismiss": {
                    "method": true
                },
                "el": {
                    "elementRef": true
                },
                "enterAnimation": {
                    "type": "Any",
                    "attr": "enter-animation"
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "inputs": {
                    "type": "Any",
                    "attr": "inputs",
                    "mutable": true,
                    "watchCallbacks": ["inputsChanged"]
                },
                "keyboardClose": {
                    "type": Boolean,
                    "attr": "keyboard-close"
                },
                "leaveAnimation": {
                    "type": "Any",
                    "attr": "leave-animation"
                },
                "message": {
                    "type": String,
                    "attr": "message"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "onDidDismiss": {
                    "method": true
                },
                "onWillDismiss": {
                    "method": true
                },
                "overlayIndex": {
                    "type": Number,
                    "attr": "overlay-index"
                },
                "present": {
                    "method": true
                },
                "subHeader": {
                    "type": String,
                    "attr": "sub-header"
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
    Object.defineProperty(Alert, "events", {
        get: function () {
            return [{
                    "name": "ionAlertDidLoad",
                    "method": "ionAlertDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionAlertDidUnload",
                    "method": "ionAlertDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionAlertDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionAlertWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionAlertWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionAlertDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "listeners", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionAlertWillDismiss",
                    "method": "dispatchCancelHandler"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "style", {
        get: function () { return ".sc-ion-alert-md-h{--min-width:250px;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.alert-top.sc-ion-alert-md-h{padding-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin:0;padding:0}.alert-sub-title.sc-ion-alert-md{margin:5px 0 0;padding:0;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding:10px 0;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button-inner.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable.sc-ion-alert-md{margin:0;padding:0;width:100%;border:0;background:0 0;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-button.sc-ion-alert-md:active, .alert-button.sc-ion-alert-md:focus, .alert-checkbox.sc-ion-alert-md:active, .alert-checkbox.sc-ion-alert-md:focus, .alert-input.sc-ion-alert-md:active, .alert-input.sc-ion-alert-md:focus, .alert-radio.sc-ion-alert-md:active, .alert-radio.sc-ion-alert-md:focus{outline:0}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, #fafafa);--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:2px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.alert-head.sc-ion-alert-md{padding:20px 23px 15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color,#000);font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding:0 24px 24px;color:var(--ion-text-color-step-450,#737373)}.alert-message.sc-ion-alert-md{max-height:240px;font-size:15px}.alert-message.sc-ion-alert-md:empty{padding:0}.alert-input.sc-ion-alert-md{margin:5px 0;border-bottom:1px solid var(--ion-background-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-background-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-background-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:44px;contain:strict;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding:13px 26px 13px 52px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-text-color-step-450,#737373)}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-radio-label.sc-ion-alert-md{color:var(--ion-text-color-step-150,#262626)}[aria-checked=true].sc-ion-alert-md   .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.alert-checkbox-label.sc-ion-alert-md{padding:13px 26px 13px 53px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-text-color-step-450,#737373);contain:strict}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}.alert-button-group.sc-ion-alert-md{padding:5px 12px 7px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;margin:0 8px 0 0;padding:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button.activated.sc-ion-alert-md{background-color:var(--ion-background-color-step-400,#999)}.alert-button-inner.sc-ion-alert-md{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
function buttonClass(button) {
    return Object.assign({ 'alert-button': true }, getClassMap(button.cssClass));
}
var AlertController = /** @class */ (function () {
    function AlertController() {
    }
    AlertController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-alert'), opts);
    };
    AlertController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-alert', id);
    };
    AlertController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-alert')];
            });
        });
    };
    Object.defineProperty(AlertController, "is", {
        get: function () { return "ion-alert-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertController, "properties", {
        get: function () {
            return {
                "create": {
                    "method": true
                },
                "dismiss": {
                    "method": true
                },
                "doc": {
                    "context": "document"
                },
                "getTop": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return AlertController;
}());
export { Alert as IonAlert, AlertController as IonAlertController };
