import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
import { h as isEndSide } from './chunk-e7816c0b.js';
var ItemOption = /** @class */ (function () {
    function ItemOption() {
        this.disabled = false;
        this.expandable = false;
    }
    ItemOption.prototype.clickedOptionButton = function (ev) {
        var el = ev.target.closest('ion-item-option');
        return !!el;
    };
    ItemOption.prototype.hostData = function () {
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(this.color), { 'item-option-expandable': this.expandable })
        };
    };
    ItemOption.prototype.render = function () {
        var TagType = this.href === undefined ? 'button' : 'a';
        return (h(TagType, { type: "button", class: "item-option-native", disabled: this.disabled, href: this.href, onClick: this.clickedOptionButton.bind(this) }, h("span", { class: "item-option-button-inner" }, h("slot", { name: "start" }), h("slot", { name: "top" }), h("slot", { name: "icon-only" }), h("slot", null), h("slot", { name: "bottom" }), h("slot", { name: "end" })), this.mode === 'md' && h("ion-ripple-effect", null)));
    };
    Object.defineProperty(ItemOption, "is", {
        get: function () { return "ion-item-option"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOption, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOption, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "expandable": {
                    "type": Boolean,
                    "attr": "expandable"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOption, "style", {
        get: function () { return ":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);background:var(--ion-color-base);color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit)}.item-option-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding:0 .7em;position:relative;width:100%;height:100%;border:0;outline:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.item-option-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit}::slotted([slot=icon-only]){padding:0;margin:0 10px;min-width:.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host{font-size:16px}:host(.in-list.item-options-end:last-child){padding-right:calc(env(safe-area-inset-right) + .7em)}:host(.in-list.item-options-start:first-child){padding-left:calc(env(safe-area-inset-left) + .7em)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOption, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return ItemOption;
}());
var ItemOptions = /** @class */ (function () {
    function ItemOptions() {
        this.side = 'end';
    }
    ItemOptions.prototype.fireSwipeEvent = function () {
        this.ionSwipe.emit({
            side: this.side
        });
    };
    ItemOptions.prototype.hostData = function () {
        var isEnd = isEndSide(this.win, this.side);
        return {
            class: {
                'item-options-start': !isEnd,
                'item-options-end': isEnd
            }
        };
    };
    Object.defineProperty(ItemOptions, "is", {
        get: function () { return "ion-item-options"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOptions, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                },
                "fireSwipeEvent": {
                    "method": true
                },
                "side": {
                    "type": String,
                    "attr": "side"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOptions, "events", {
        get: function () {
            return [{
                    "name": "ionSwipe",
                    "method": "ionSwipe",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOptions, "style", {
        get: function () { return "ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,#c8c7cc)}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOptions, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return ItemOptions;
}());
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;
var ItemSliding = /** @class */ (function () {
    function ItemSliding() {
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0;
        this.optsDirty = true;
        this.state = 2;
        this.disabled = false;
    }
    ItemSliding.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    ItemSliding.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.item = this.el.querySelector('ion-item');
                        return [4 /*yield*/, this.updateOptions()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, import("./gesture.js")];
                    case 2:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            queue: this.queue,
                            gestureName: 'item-swipe',
                            gesturePriority: 20,
                            threshold: 5,
                            canStart: function () { return _this.canStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemSliding.prototype.componentDidUnload = function () {
        if (this.gesture) {
            this.gesture.destroy();
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
    };
    ItemSliding.prototype.getOpenAmount = function () {
        return Promise.resolve(this.openAmount);
    };
    ItemSliding.prototype.getSlidingRatio = function () {
        return Promise.resolve(this.getSlidingRatioSync());
    };
    ItemSliding.prototype.close = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.setOpenAmount(0, true);
                return [2 /*return*/];
            });
        });
    };
    ItemSliding.prototype.closeOpened = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (openSlidingItem !== undefined) {
                    openSlidingItem.close();
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
            });
        });
    };
    ItemSliding.prototype.updateOptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, sides, i, option;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.el.querySelectorAll('ion-item-options');
                        sides = 0;
                        this.leftOptions = this.rightOptions = undefined;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < options.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, options.item(i).componentOnReady()];
                    case 2:
                        option = _a.sent();
                        if (option.side === 'start') {
                            this.leftOptions = option;
                            sides |= 1;
                        }
                        else {
                            this.rightOptions = option;
                            sides |= 2;
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.optsDirty = true;
                        this.sides = sides;
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemSliding.prototype.canStart = function () {
        var selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    };
    ItemSliding.prototype.onStart = function () {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    };
    ItemSliding.prototype.onMove = function (gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        var openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2:
                openAmount = Math.max(0, openAmount);
                break;
            case 1:
                openAmount = Math.min(0, openAmount);
                break;
            case 3: break;
            case 0: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        var optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    };
    ItemSliding.prototype.onEnd = function (gesture) {
        var velocity = gesture.velocityX;
        var restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        var isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        var isMovingFast = Math.abs(velocity) > 0.3;
        var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        var state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    };
    ItemSliding.prototype.calculateOptsWidth = function () {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
        }
        this.optsDirty = false;
    };
    ItemSliding.prototype.setOpenAmount = function (openAmount, isFinal) {
        var _this = this;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        var style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 | 32
                : 8;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 | 64
                : 16;
        }
        else {
            this.tmr = window.setTimeout(function () {
                _this.state = 2;
                _this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = "translate3d(" + -openAmount + "px,0,0)";
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    };
    ItemSliding.prototype.getSlidingRatioSync = function () {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    };
    ItemSliding.prototype.hostData = function () {
        return {
            class: {
                'item-sliding-active-slide': (this.state !== 2),
                'item-sliding-active-options-end': (this.state & 8) !== 0,
                'item-sliding-active-options-start': (this.state & 16) !== 0,
                'item-sliding-active-swipe-end': (this.state & 32) !== 0,
                'item-sliding-active-swipe-start': (this.state & 64) !== 0
            }
        };
    };
    Object.defineProperty(ItemSliding, "is", {
        get: function () { return "ion-item-sliding"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemSliding, "properties", {
        get: function () {
            return {
                "close": {
                    "method": true
                },
                "closeOpened": {
                    "method": true
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "getOpenAmount": {
                    "method": true
                },
                "getSlidingRatio": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "state": {
                    "state": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemSliding, "events", {
        get: function () {
            return [{
                    "name": "ionDrag",
                    "method": "ionDrag",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemSliding, "style", {
        get: function () { return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"; },
        enumerable: true,
        configurable: true
    });
    return ItemSliding;
}());
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}
export { ItemOption as IonItemOption, ItemOptions as IonItemOptions, ItemSliding as IonItemSliding };
