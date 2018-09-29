import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as attachComponent, b as detachComponent, g as createThemedClasses, c as getClassMap } from './chunk-50fe9317.js';
import { a as BACKDROP, b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { a as deepReady } from './chunk-5f438245.js';
function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '100%', '0%');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    var wrapperElRect = wrapperEl.getBoundingClientRect();
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '0%', window.innerHeight - wrapperElRect.top + "px");
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation
        .fromTo('opacity', 0.01, 1)
        .fromTo('translateY', '40px', '0px');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    wrapperAnimation
        .fromTo('opacity', 0.99, 0)
        .fromTo('translateY', '0px', '40px');
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Modal = /** @class */ (function () {
    function Modal() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.animated = true;
    }
    Modal.prototype.componentDidLoad = function () {
        this.ionModalDidLoad.emit();
    };
    Modal.prototype.componentDidUnload = function () {
        this.ionModalDidUnload.emit();
    };
    Modal.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Modal.prototype.onBackdropTap = function () {
        this.dismiss(undefined, BACKDROP);
    };
    Modal.prototype.lifecycle = function (modalEvent) {
        var el = this.usersElement;
        var name = LIFECYCLE_MAP[modalEvent.type];
        if (el && name) {
            var ev = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
            });
            el.dispatchEvent(ev);
        }
    };
    Modal.prototype.present = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, componentProps, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector(".modal-wrapper");
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        componentProps = Object.assign({}, this.componentProps, { modal: this.el });
                        _a = this;
                        return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, deepReady(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation)];
                }
            });
        });
    };
    Modal.prototype.dismiss = function (data, role) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dismissed;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation)];
                    case 1:
                        dismissed = _a.sent();
                        if (!dismissed) return [3 /*break*/, 3];
                        return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, dismissed];
                }
            });
        });
    };
    Modal.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionModalDidDismiss');
    };
    Modal.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionModalWillDismiss');
    };
    Modal.prototype.hostData = function () {
        return {
            'no-router': true,
            class: Object.assign({}, createThemedClasses(this.mode, 'modal'), getClassMap(this.cssClass)),
            style: {
                zIndex: 20000 + this.overlayIndex,
            }
        };
    };
    Modal.prototype.render = function () {
        var dialogClasses = createThemedClasses(this.mode, 'modal-wrapper');
        return [
            h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
            h("div", { role: "dialog", class: dialogClasses })
        ];
    };
    Object.defineProperty(Modal, "is", {
        get: function () { return "ion-modal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "properties", {
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
                "component": {
                    "type": String,
                    "attr": "component"
                },
                "componentProps": {
                    "type": "Any",
                    "attr": "component-props"
                },
                "config": {
                    "context": "config"
                },
                "cssClass": {
                    "type": String,
                    "attr": "css-class"
                },
                "delegate": {
                    "type": "Any",
                    "attr": "delegate"
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
                "showBackdrop": {
                    "type": Boolean,
                    "attr": "show-backdrop"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "events", {
        get: function () {
            return [{
                    "name": "ionModalDidLoad",
                    "method": "ionModalDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidUnload",
                    "method": "ionModalDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionModalDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "listeners", {
        get: function () {
            return [{
                    "name": "ionDismiss",
                    "method": "onDismiss"
                }, {
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionModalDidPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalWillPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalWillDismiss",
                    "method": "lifecycle"
                }, {
                    "name": "ionModalDidDismiss",
                    "method": "lifecycle"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "style", {
        get: function () { return "ion-modal{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;contain:strict}ion-modal-controller{display:none}\@media not all and (min-width:768px) and (min-height:600px){ion-modal ion-backdrop{display:none}}.modal-wrapper{width:100%;height:100%;contain:strict;z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{width:600px;height:500px}.modal-wrapper-ios{border-radius:10px;overflow:hidden}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{width:600px;height:600px}}.modal-wrapper-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());
var LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillDismiss',
    'ionModalDidDismiss': 'ionViewDidDismiss',
};
var ModalController = /** @class */ (function () {
    function ModalController() {
    }
    ModalController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-modal'), opts);
    };
    ModalController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-modal', id);
    };
    ModalController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-modal')];
            });
        });
    };
    Object.defineProperty(ModalController, "is", {
        get: function () { return "ion-modal-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalController, "properties", {
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
    return ModalController;
}());
export { Modal as IonModal, ModalController as IonModalController };
