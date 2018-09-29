import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { g as createThemedClasses, c as getClassMap } from './chunk-50fe9317.js';
function iosEnterAnimation(AnimationC, baseEl, position) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    var wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
    var top = "calc(10px + var(--ion-safe-area-top, 0px))";
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', top);
            break;
        case 'middle':
            var topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', bottom);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation));
}
function iosLeaveAnimation(AnimationC, baseEl, position) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    var wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
    var top = "calc(10px + var(--ion-safe-area-top, 0px))";
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', top, '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', bottom, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl, position) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    var wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', '0%');
            break;
        case 'middle':
            var topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', '0%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation));
}
function mdLeaveAnimation(AnimationC, baseEl, position) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    var wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '0px', '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', "0px", '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}
var Toast = /** @class */ (function () {
    function Toast() {
        this.presented = false;
        this.duration = 0;
        this.keyboardClose = false;
        this.position = 'bottom';
        this.showCloseButton = false;
        this.translucent = false;
        this.animated = true;
    }
    Toast.prototype.componentDidLoad = function () {
        this.ionToastDidLoad.emit();
    };
    Toast.prototype.componentDidUnload = function () {
        this.ionToastDidUnload.emit();
    };
    Toast.prototype.present = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(undefined, 'timeout'); }, this.duration);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Toast.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    };
    Toast.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionToastDidDismiss');
    };
    Toast.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionToastWillDismiss');
    };
    Toast.prototype.hostData = function () {
        var themedClasses = this.translucent ? createThemedClasses(this.mode, 'toast-translucent') : {};
        return {
            style: {
                zIndex: 60000 + this.overlayIndex,
            },
            class: Object.assign({}, themedClasses, createThemedClasses(this.mode, 'toast'), getClassMap(this.cssClass))
        };
    };
    Toast.prototype.render = function () {
        var _this = this;
        var _a;
        var wrapperClass = (_a = {
                'toast-wrapper': true
            },
            _a["toast-" + this.position] = true,
            _a);
        return (h("div", { class: wrapperClass }, h("div", { class: "toast-container" }, this.message !== undefined &&
            h("div", { class: "toast-message" }, this.message), this.showCloseButton &&
            h("ion-button", { fill: "clear", color: "light", "ion-activatable": true, class: "toast-button", onClick: function () { return _this.dismiss(undefined, 'cancel'); } }, this.closeButtonText || 'Close'))));
    };
    Object.defineProperty(Toast, "is", {
        get: function () { return "ion-toast"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "closeButtonText": {
                    "type": String,
                    "attr": "close-button-text"
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
                "duration": {
                    "type": Number,
                    "attr": "duration"
                },
                "el": {
                    "elementRef": true
                },
                "enterAnimation": {
                    "type": "Any",
                    "attr": "enter-animation"
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
                "position": {
                    "type": String,
                    "attr": "position"
                },
                "present": {
                    "method": true
                },
                "showCloseButton": {
                    "type": Boolean,
                    "attr": "show-close-button"
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
    Object.defineProperty(Toast, "events", {
        get: function () {
            return [{
                    "name": "ionToastDidLoad",
                    "method": "ionToastDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionToastDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionToastWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionToastWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionToastDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionToastDidUnload",
                    "method": "ionToastDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "style", {
        get: function () { return "ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios{--background:var(--ion-background-color-step-50, #f2f2f2);--button-color:var(--ion-text-color-step-400, #666666);--color:var(--ion-text-color-step-150, #262626);font-size:14px}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;z-index:10}.toast-translucent-ios .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px}.toast-ios .toast-button{color:var(--button-color)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Toast;
}());
var ToastController = /** @class */ (function () {
    function ToastController() {
    }
    ToastController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-toast'), opts);
    };
    ToastController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-toast', id);
    };
    ToastController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-toast')];
            });
        });
    };
    Object.defineProperty(ToastController, "is", {
        get: function () { return "ion-toast-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastController, "properties", {
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
    return ToastController;
}());
export { Toast as IonToast, ToastController as IonToastController };
