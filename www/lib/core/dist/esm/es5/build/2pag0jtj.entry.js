import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as BACKDROP, b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { g as createThemedClasses, c as getClassMap } from './chunk-50fe9317.js';
function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1)
        .fromTo('scale', 1.1, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0)
        .fromTo('scale', 1, 0.9);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
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
    wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Loading = /** @class */ (function () {
    function Loading() {
        this.presented = false;
        this.keyboardClose = true;
        this.duration = 0;
        this.backdropDismiss = false;
        this.showBackdrop = true;
        this.translucent = false;
        this.animated = true;
    }
    Loading.prototype.componentWillLoad = function () {
        if (this.spinner === undefined) {
            this.spinner = this.config.get('loadingSpinner', this.mode === 'ios' ? 'lines' : 'crescent');
        }
    };
    Loading.prototype.componentDidLoad = function () {
        this.ionLoadingDidLoad.emit();
    };
    Loading.prototype.componentDidUnload = function () {
        this.ionLoadingDidUnload.emit();
    };
    Loading.prototype.onBackdropTap = function () {
        this.dismiss(undefined, BACKDROP);
    };
    Loading.prototype.present = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, present(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration + 10);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Loading.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    Loading.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionLoadingDidDismiss');
    };
    Loading.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionLoadingWillDismiss');
    };
    Loading.prototype.hostData = function () {
        var themedClasses = this.translucent
            ? createThemedClasses(this.mode, 'loading-translucent')
            : {};
        return {
            style: {
                zIndex: 40000 + this.overlayIndex
            },
            class: Object.assign({}, createThemedClasses(this.mode, 'loading'), themedClasses, getClassMap(this.cssClass))
        };
    };
    Loading.prototype.render = function () {
        return [
            h("ion-backdrop", { visible: this.showBackdrop, tappable: false }),
            h("div", { class: "loading-wrapper", role: "dialog" }, this.spinner !== 'hide' && (h("div", { class: "loading-spinner" }, h("ion-spinner", { name: this.spinner }))), this.message && h("div", { class: "loading-content" }, this.message))
        ];
    };
    Object.defineProperty(Loading, "is", {
        get: function () { return "ion-loading"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Loading, "properties", {
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
                "present": {
                    "method": true
                },
                "showBackdrop": {
                    "type": Boolean,
                    "attr": "show-backdrop"
                },
                "spinner": {
                    "type": String,
                    "attr": "spinner",
                    "mutable": true
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
    Object.defineProperty(Loading, "events", {
        get: function () {
            return [{
                    "name": "ionLoadingDidUnload",
                    "method": "ionLoadingDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionLoadingDidLoad",
                    "method": "ionLoadingDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionLoadingDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionLoadingWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionLoadingWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionLoadingDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Loading, "listeners", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Loading, "style", {
        get: function () { return "ion-loading{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}ion-loading-controller{display:none}.loading-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;z-index:10}.loading-md{font-size:14px}.loading-md .loading-wrapper{border-radius:2px;padding:24px;max-width:280px;max-height:90%;background:var(--ion-background-color-step-50,#f2f2f2);color:var(--ion-text-color-step-150,#262626);-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.loading-md .loading-spinner+.loading-content{margin-left:16px}.loading-md .spinner-lines-md line,.loading-md .spinner-lines-small-md line{stroke:var(--ion-color-primary,#3880ff)}.loading-md .spinner-bubbles circle,.loading-md .spinner-circles circle{fill:var(--ion-color-primary,#3880ff)}.loading-md .spinner-crescent circle{stroke:var(--ion-color-primary,#3880ff)}.loading-md .spinner-dots circle{fill:var(--ion-color-primary,#3880ff)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Loading, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Loading;
}());
var LoadingController = /** @class */ (function () {
    function LoadingController() {
    }
    LoadingController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-loading'), opts);
    };
    LoadingController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-loading', id);
    };
    LoadingController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-loading')];
            });
        });
    };
    Object.defineProperty(LoadingController, "is", {
        get: function () { return "ion-loading-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingController, "properties", {
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
    return LoadingController;
}());
export { Loading as IonLoading, LoadingController as IonLoadingController };
