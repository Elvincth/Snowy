/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { a as BACKDROP, b as dismiss, c as eventMethod, d as isCancel, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { c as getClassMap } from './chunk-50fe9317.js';

function iosEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function iosLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function mdEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function mdLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

class ActionSheet {
    constructor() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.translucent = false;
        this.animated = true;
    }
    componentDidLoad() {
        this.ionActionSheetDidLoad.emit();
    }
    componentDidUnload() {
        this.ionActionSheetDidUnload.emit();
    }
    onBackdropTap() {
        this.dismiss(undefined, BACKDROP);
    }
    dispatchCancelHandler(ev) {
        const role = ev.detail.role;
        if (isCancel(role)) {
            const cancelButton = this.getButtons().find(b => b.role === 'cancel');
            this.callButtonHandler(cancelButton);
        }
    }
    present() {
        return present(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    }
    dismiss(data, role) {
        return dismiss(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    onDidDismiss() {
        return eventMethod(this.el, 'ionActionSheetDidDismiss');
    }
    onWillDismiss() {
        return eventMethod(this.el, 'ionActionSheetWillDismiss');
    }
    buttonClick(button) {
        const role = button.role;
        if (isCancel(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, button.role);
        }
        return Promise.resolve();
    }
    callButtonHandler(button) {
        if (button && button.handler) {
            try {
                if (button.handler() === false) {
                    return false;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    getButtons() {
        return this.buttons.map(b => {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    }
    hostData() {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            class: Object.assign({}, getClassMap(this.cssClass), { 'action-sheet-translucent': this.translucent })
        };
    }
    render() {
        const allButtons = this.getButtons();
        const cancelButton = allButtons.find(b => b.role === 'cancel');
        const buttons = allButtons.filter(b => b.role !== 'cancel');
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "action-sheet-wrapper", role: "dialog" },
                h("div", { class: "action-sheet-container" },
                    h("div", { class: "action-sheet-group" },
                        this.header !== undefined &&
                            h("div", { class: "action-sheet-title" },
                                this.header,
                                this.subHeader && h("div", { class: "action-sheet-sub-title" }, this.subHeader)),
                        buttons.map(b => h("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: () => this.buttonClick(b) },
                            h("span", { class: "action-sheet-button-inner" },
                                b.icon && h("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }),
                                b.text)))),
                    cancelButton &&
                        h("div", { class: "action-sheet-group action-sheet-group-cancel" },
                            h("button", { "ion-activatable": true, type: "button", class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) },
                                h("span", { class: "action-sheet-button-inner" },
                                    cancelButton.icon &&
                                        h("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }),
                                    cancelButton.text)))))
        ];
    }
    static get is() { return "ion-action-sheet"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
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
            "attr": "buttons"
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
        "keyboardClose": {
            "type": Boolean,
            "attr": "keyboard-close"
        },
        "leaveAnimation": {
            "type": "Any",
            "attr": "leave-animation"
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
    }; }
    static get events() { return [{
            "name": "ionActionSheetDidLoad",
            "method": "ionActionSheetDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionActionSheetDidUnload",
            "method": "ionActionSheetDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionActionSheetDidPresent",
            "method": "didPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionActionSheetWillPresent",
            "method": "willPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionActionSheetWillDismiss",
            "method": "willDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionActionSheetDidDismiss",
            "method": "didDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionBackdropTap",
            "method": "onBackdropTap"
        }, {
            "name": "ionActionSheetWillDismiss",
            "method": "dispatchCancelHandler"
        }]; }
    static get style() { return ".sc-ion-action-sheet-ios-h{--width:100%;--max-width:500px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);max-width:var(--max-width);z-index:10;pointer-events:none;margin:var(--ion-safe-area-top,0) auto var(--ion-safe-area-bottom,0)}.action-sheet-button.sc-ion-action-sheet-ios{width:var(--width);border:0;outline:0;font-family:inherit}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%;padding:0 10px}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;border-radius:13px;margin-bottom:8px;background:var(--ion-overlay-background-color,#f9f9f9)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-group.sc-ion-action-sheet-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.action-sheet-title.sc-ion-action-sheet-ios{padding:14px 14px 13px;border-bottom:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);color:var(--ion-text-color-step-600,#999);font-size:13px;font-weight:400;text-align:center}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding:15px 0 0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{margin:0;padding:18px;height:56px;border-bottom:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background:0 0;color:var(--ion-color-primary,#3880ff);font-size:20px;contain:strict}.action-sheet-button.sc-ion-action-sheet-ios   .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}.action-sheet-button.sc-ion-action-sheet-ios:last-child{border-bottom-color:transparent}.action-sheet-button.activated.sc-ion-action-sheet-ios{margin-top:-.55px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.1);border-bottom-color:rgba(var(--ion-text-color-rgb,0,0,0),.1);background:rgba(var(--ion-text-color-rgb,0,0,0),.1)}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--ion-background-color,#fff);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--ion-background-color,#fff);font-weight:600}"; }
    static get styleMode() { return "ios"; }
}
function buttonClass(button) {
    return Object.assign({ 'action-sheet-button': true, [`action-sheet-${button.role}`]: button.role !== undefined }, getClassMap(button.cssClass));
}

class ActionSheetController {
    create(opts) {
        return createOverlay(this.doc.createElement('ion-action-sheet'), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-action-sheet', id);
    }
    async getTop() {
        return getOverlay(this.doc, 'ion-action-sheet');
    }
    static get is() { return "ion-action-sheet-controller"; }
    static get properties() { return {
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
    }; }
}

export { ActionSheet as IonActionSheet, ActionSheetController as IonActionSheetController };
