import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { g as createThemedClasses } from './chunk-50fe9317.js';
var Refresher = /** @class */ (function () {
    function Refresher() {
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.state = 1;
        this.pullMin = 60;
        this.pullMax = this.pullMin + 60;
        this.closeDuration = '280ms';
        this.snapbackDuration = '280ms';
        this.disabled = false;
    }
    Refresher.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    Refresher.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contentEl, _a, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.el.getAttribute('slot') !== 'fixed') {
                            console.error('Make sure you use: <ion-refresher slot="fixed">');
                            return [2 /*return*/];
                        }
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) return [3 /*break*/, 3];
                        return [4 /*yield*/, contentEl.componentOnReady()];
                    case 1:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 2:
                        _a.scrollEl = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        console.error('ion-refresher did not attach, make sure the parent is an ion-content.');
                        _c.label = 4;
                    case 4:
                        _b = this;
                        return [4 /*yield*/, import("./gesture.js")];
                    case 5:
                        _b.gesture = (_c.sent()).createGesture({
                            el: this.el.closest('ion-content'),
                            queue: this.queue,
                            gestureName: 'refresher',
                            gesturePriority: 10,
                            direction: 'y',
                            threshold: 20,
                            passive: false,
                            canStart: function () { return _this.canStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function () { return _this.onEnd(); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    Refresher.prototype.componentDidUnload = function () {
        this.scrollEl = undefined;
    };
    Refresher.prototype.complete = function () {
        this.close(32, '120ms');
    };
    Refresher.prototype.cancel = function () {
        this.close(16, '');
    };
    Refresher.prototype.getProgress = function () {
        return Promise.resolve(this.progress);
    };
    Refresher.prototype.canStart = function () {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1) {
            return false;
        }
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    };
    Refresher.prototype.onStart = function () {
        console.log('start');
        this.progress = 0;
        this.state = 1;
    };
    Refresher.prototype.onMove = function (detail) {
        if (!this.scrollEl) {
            return;
        }
        var ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        if ((this.state & 56) !== 0) {
            return;
        }
        var deltaY = detail.deltaY;
        if (deltaY <= 0) {
            this.progress = 0;
            this.state = 1;
            if (this.appliedStyles) {
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1) {
            var scrollHostScrollTop = this.scrollEl.scrollTop;
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            this.state = 2;
        }
        ev.preventDefault();
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            this.progress = 0;
            return;
        }
        var pullMin = this.pullMin;
        this.progress = deltaY / pullMin;
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        this.ionPull.emit();
        if (deltaY < pullMin) {
            this.state = 2;
            return;
        }
        if (deltaY > this.pullMax) {
            this.beginRefresh();
            return;
        }
        this.state = 4;
        return;
    };
    Refresher.prototype.onEnd = function () {
        if (this.state === 4) {
            this.beginRefresh();
        }
        else if (this.state === 2) {
            this.cancel();
        }
    };
    Refresher.prototype.beginRefresh = function () {
        this.state = 8;
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        this.ionRefresh.emit();
    };
    Refresher.prototype.close = function (state, delay) {
        var _this = this;
        setTimeout(function () {
            _this.state = 1;
            _this.progress = 0;
            _this.didStart = false;
            _this.setCss(0, '0ms', false, '');
        }, 600);
        this.state = state;
        this.setCss(0, '', true, delay);
    };
    Refresher.prototype.setCss = function (y, duration, overflowVisible, delay) {
        var _this = this;
        this.appliedStyles = (y > 0);
        this.queue.write(function () {
            if (_this.scrollEl) {
                var style = _this.scrollEl.style;
                style.transform = ((y > 0) ? "translateY(" + y + "px) translateZ(0px)" : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    };
    Refresher.prototype.hostData = function () {
        return {
            slot: 'fixed',
            class: Object.assign({}, createThemedClasses(this.mode, 'refresher'), { 'refresher-active': this.state !== 1, 'refresher-pulling': this.state === 2, 'refresher-ready': this.state === 4, 'refresher-refreshing': this.state === 8, 'refresher-cancelling': this.state === 16, 'refresher-completing': this.state === 32 })
        };
    };
    Object.defineProperty(Refresher, "is", {
        get: function () { return "ion-refresher"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Refresher, "properties", {
        get: function () {
            return {
                "cancel": {
                    "method": true
                },
                "closeDuration": {
                    "type": String,
                    "attr": "close-duration"
                },
                "complete": {
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
                "getProgress": {
                    "method": true
                },
                "pullMax": {
                    "type": Number,
                    "attr": "pull-max"
                },
                "pullMin": {
                    "type": Number,
                    "attr": "pull-min"
                },
                "queue": {
                    "context": "queue"
                },
                "snapbackDuration": {
                    "type": String,
                    "attr": "snapback-duration"
                },
                "state": {
                    "state": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Refresher, "events", {
        get: function () {
            return [{
                    "name": "ionRefresh",
                    "method": "ionRefresh",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPull",
                    "method": "ionPull",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionStart",
                    "method": "ionStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Refresher, "style", {
        get: function () { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Refresher, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Refresher;
}());
var RefresherContent = /** @class */ (function () {
    function RefresherContent() {
    }
    RefresherContent.prototype.componentDidLoad = function () {
        if (this.pullingIcon === undefined) {
            this.pullingIcon = this.config.get('refreshingIcon', 'arrow-down');
        }
        if (this.refreshingSpinner === undefined) {
            this.refreshingSpinner = this.config.get('refreshingSpinner', this.config.get('spinner', 'lines'));
        }
    };
    RefresherContent.prototype.render = function () {
        return [
            h("div", { class: "refresher-pulling" }, this.pullingIcon &&
                h("div", { class: "refresher-pulling-icon" }, h("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
                h("div", { class: "refresher-pulling-text", innerHTML: this.pullingText })),
            h("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
                h("div", { class: "refresher-refreshing-icon" }, h("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
                h("div", { class: "refresher-refreshing-text", innerHTML: this.refreshingText }))
        ];
    };
    Object.defineProperty(RefresherContent, "is", {
        get: function () { return "ion-refresher-content"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RefresherContent, "properties", {
        get: function () {
            return {
                "config": {
                    "context": "config"
                },
                "pullingIcon": {
                    "type": String,
                    "attr": "pulling-icon",
                    "mutable": true
                },
                "pullingText": {
                    "type": String,
                    "attr": "pulling-text"
                },
                "refreshingSpinner": {
                    "type": String,
                    "attr": "refreshing-spinner",
                    "mutable": true
                },
                "refreshingText": {
                    "type": String,
                    "attr": "refreshing-text"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return RefresherContent;
}());
export { Refresher as IonRefresher, RefresherContent as IonRefresherContent };
