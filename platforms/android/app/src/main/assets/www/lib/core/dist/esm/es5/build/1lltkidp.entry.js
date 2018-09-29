import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as attachComponent, b as detachComponent, c as getClassMap } from './chunk-50fe9317.js';
import { a as BACKDROP, b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-12e0f551.js';
import { a as deepReady } from './chunk-5f438245.js';
function iosEnterAnimation(AnimationC, baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    var targetWidth = (targetDim && targetDim.width) || 0;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var arrowEl = baseEl.querySelector('.popover-arrow');
    var arrowDim = arrowEl.getBoundingClientRect();
    var arrowWidth = arrowDim.width;
    var arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    var checkSafeAreaLeft = false;
    var checkSafeAreaRight = false;
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 >
        bodyWidth) {
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    if ((targetTop + targetHeight + contentHeight) > bodyHeight &&
        (targetTop - contentHeight) > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        console.log(arrowCSS);
        console.log(targetTop);
        console.log(contentHeight);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-left, 0px)";
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-right, 0px)";
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var POPOVER_IOS_BODY_PADDING = 5;
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function mdEnterAnimation(AnimationC, baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim
        ? targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        originX = 'right';
    }
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    var contentAnimation = new AnimationC();
    contentAnimation.addElement(baseEl.querySelector('.popover-content'));
    contentAnimation.fromTo('scale', 0.001, 1);
    var viewportAnimation = new AnimationC();
    viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
    viewportAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .add(backdropAnimation)
        .add(wrapperAnimation)
        .add(contentAnimation)
        .add(viewportAnimation));
}
var POPOVER_MD_BODY_PADDING = 12;
function mdLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Popover = /** @class */ (function () {
    function Popover() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.translucent = false;
        this.animated = true;
    }
    Popover.prototype.componentDidLoad = function () {
        this.ionPopoverDidLoad.emit();
    };
    Popover.prototype.componentDidUnload = function () {
        this.ionPopoverDidUnload.emit();
    };
    Popover.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Popover.prototype.onBackdropTap = function () {
        this.dismiss(undefined, BACKDROP);
    };
    Popover.prototype.lifecycle = function (modalEvent) {
        var el = this.usersElement;
        var name = LIFECYCLE_MAP[modalEvent.type];
        if (el && name) {
            var event = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
            });
            el.dispatchEvent(event);
        }
    };
    Popover.prototype.present = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, data, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector('.popover-content');
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        data = Object.assign({}, this.componentProps, { popover: this.el });
                        _a = this;
                        return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['popover-viewport'], data)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, deepReady(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, present(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];
                }
            });
        });
    };
    Popover.prototype.dismiss = function (data, role) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var shouldDismiss;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dismiss(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (!shouldDismiss) return [3 /*break*/, 3];
                        return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, shouldDismiss];
                }
            });
        });
    };
    Popover.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionPopoverDidDismiss');
    };
    Popover.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionPopoverWillDismiss');
    };
    Popover.prototype.hostData = function () {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            'no-router': true,
            class: Object.assign({ 'popover-translucent': this.translucent }, getClassMap(this.cssClass))
        };
    };
    Popover.prototype.render = function () {
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "popover-wrapper" }, h("div", { class: "popover-arrow" }), h("div", { class: "popover-content" }))
        ];
    };
    Object.defineProperty(Popover, "is", {
        get: function () { return "ion-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
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
                "event": {
                    "type": "Any",
                    "attr": "event"
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
    Object.defineProperty(Popover, "events", {
        get: function () {
            return [{
                    "name": "ionPopoverDidLoad",
                    "method": "ionPopoverDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidUnload",
                    "method": "ionPopoverDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPopoverDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "listeners", {
        get: function () {
            return [{
                    "name": "ionDismiss",
                    "method": "onDismiss"
                }, {
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }, {
                    "name": "ionPopoverDidPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverWillPresent",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverWillDismiss",
                    "method": "lifecycle"
                }, {
                    "name": "ionPopoverDidDismiss",
                    "method": "lifecycle"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "style", {
        get: function () { return ".sc-ion-popover-md-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10;border-radius:2px;-webkit-transform-origin:left top;transform-origin:left top;width:250px;min-width:0;min-height:0;max-height:90%;background:var(--ion-background-color,#fff);color:var(--ion-text-color,#000);-webkit-box-shadow:0 3px 12px 2px rgba(0,0,0,.3);box-shadow:0 3px 12px 2px rgba(0,0,0,.3)}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Popover;
}());
var LIFECYCLE_MAP = {
    'ionPopoverDidPresent': 'ionViewDidEnter',
    'ionPopoverWillPresent': 'ionViewWillEnter',
    'ionPopoverWillDismiss': 'ionViewWillDismiss',
    'ionPopoverDidDismiss': 'ionViewDidDismiss',
};
var PopoverController = /** @class */ (function () {
    function PopoverController() {
    }
    PopoverController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-popover'), opts);
    };
    PopoverController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-popover', id);
    };
    PopoverController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-popover')];
            });
        });
    };
    Object.defineProperty(PopoverController, "is", {
        get: function () { return "ion-popover-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverController, "properties", {
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
    return PopoverController;
}());
export { Popover as IonPopover, PopoverController as IonPopoverController };
