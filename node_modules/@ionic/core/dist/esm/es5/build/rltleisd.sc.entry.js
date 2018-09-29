import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { g as createThemedClasses } from './chunk-50fe9317.js';
var InfiniteScroll = /** @class */ (function () {
    function InfiniteScroll() {
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        this.threshold = '15%';
        this.disabled = false;
        this.position = 'bottom';
    }
    InfiniteScroll.prototype.thresholdChanged = function (val) {
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    };
    InfiniteScroll.prototype.disabledChanged = function (val) {
        this.enableScrollEvents(!val);
    };
    InfiniteScroll.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contentEl, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) return [3 /*break*/, 3];
                        return [4 /*yield*/, contentEl.componentOnReady()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 2:
                        _a.scrollEl = _b.sent();
                        _b.label = 3;
                    case 3:
                        this.thresholdChanged(this.threshold);
                        this.enableScrollEvents(!this.disabled);
                        return [2 /*return*/];
                }
            });
        });
    };
    InfiniteScroll.prototype.componentDidUnload = function () {
        this.scrollEl = undefined;
    };
    InfiniteScroll.prototype.onScroll = function () {
        var scrollEl = this.scrollEl;
        if (!scrollEl || !this.canStart()) {
            return 1;
        }
        var infiniteHeight = this.el.offsetHeight;
        if (infiniteHeight === 0) {
            return 2;
        }
        var scrollTop = scrollEl.scrollTop;
        var scrollHeight = scrollEl.scrollHeight;
        var height = scrollEl.offsetHeight;
        var threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;
        var distanceFromInfinite = (this.position === 'bottom')
            ? scrollHeight - infiniteHeight - scrollTop - threshold - height
            : scrollTop - infiniteHeight - threshold;
        if (distanceFromInfinite < 0) {
            if (!this.didFire) {
                this.isLoading = true;
                this.didFire = true;
                this.ionInfinite.emit();
                return 3;
            }
        }
        else {
            this.didFire = false;
        }
        return 4;
    };
    InfiniteScroll.prototype.complete = function () {
        var scrollEl = this.scrollEl;
        if (!this.isLoading || !scrollEl) {
            return;
        }
        this.isLoading = false;
    };
    InfiniteScroll.prototype.canStart = function () {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    };
    InfiniteScroll.prototype.enableScrollEvents = function (shouldListen) {
        if (this.scrollEl) {
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    };
    InfiniteScroll.prototype.hostData = function () {
        return {
            class: {
                'infinite-scroll-loading': this.isLoading,
                'infinite-scroll-enabled': !this.disabled
            }
        };
    };
    Object.defineProperty(InfiniteScroll, "is", {
        get: function () { return "ion-infinite-scroll"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScroll, "properties", {
        get: function () {
            return {
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
                "enableListener": {
                    "context": "enableListener"
                },
                "isLoading": {
                    "state": true
                },
                "position": {
                    "type": String,
                    "attr": "position"
                },
                "queue": {
                    "context": "queue"
                },
                "threshold": {
                    "type": String,
                    "attr": "threshold",
                    "watchCallbacks": ["thresholdChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScroll, "events", {
        get: function () {
            return [{
                    "name": "ionInfinite",
                    "method": "ionInfinite",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScroll, "listeners", {
        get: function () {
            return [{
                    "name": "scroll",
                    "method": "onScroll",
                    "disabled": true,
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScroll, "style", {
        get: function () { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return InfiniteScroll;
}());
var InfiniteScrollContent = /** @class */ (function () {
    function InfiniteScrollContent() {
    }
    InfiniteScrollContent.prototype.componentDidLoad = function () {
        if (this.loadingSpinner === undefined) {
            this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', 'lines'));
        }
    };
    InfiniteScrollContent.prototype.hostData = function () {
        return {
            class: createThemedClasses(this.mode, 'infinite-scroll-content')
        };
    };
    InfiniteScrollContent.prototype.render = function () {
        return (h("div", { class: "infinite-loading" }, this.loadingSpinner && (h("div", { class: "infinite-loading-spinner" }, h("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (h("div", { class: "infinite-loading-text", innerHTML: this.loadingText }))));
    };
    Object.defineProperty(InfiniteScrollContent, "is", {
        get: function () { return "ion-infinite-scroll-content"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScrollContent, "properties", {
        get: function () {
            return {
                "config": {
                    "context": "config"
                },
                "loadingSpinner": {
                    "type": String,
                    "attr": "loading-spinner",
                    "mutable": true
                },
                "loadingText": {
                    "type": String,
                    "attr": "loading-text"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScrollContent, "style", {
        get: function () { return "ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScrollContent, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return InfiniteScrollContent;
}());
export { InfiniteScroll as IonInfiniteScroll, InfiniteScrollContent as IonInfiniteScrollContent };
