import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { b as rIC } from './chunk-e7816c0b.js';
import { g as createThemedClasses } from './chunk-50fe9317.js';
var Slide = /** @class */ (function () {
    function Slide() {
    }
    Slide.prototype.componentDidLoad = function () {
        this.ionSlideChanged.emit();
    };
    Slide.prototype.componentDidUnload = function () {
        this.ionSlideChanged.emit();
    };
    Slide.prototype.hostData = function () {
        return {
            class: {
                'swiper-slide': true
            }
        };
    };
    Object.defineProperty(Slide, "is", {
        get: function () { return "ion-slide"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide, "events", {
        get: function () {
            return [{
                    "name": "ionSlideChanged",
                    "method": "ionSlideChanged",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide, "style", {
        get: function () { return "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Slide;
}());
var Slides = /** @class */ (function () {
    function Slides() {
        var _this = this;
        this.didInit = false;
        this.swiper = new Promise(function (resolve) { _this.readySwiper = resolve; });
        this.options = {};
        this.pager = false;
        this.scrollbar = false;
    }
    Slides.prototype.updateSwiperOptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.params = this.normalizeOptions();
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.componentDidLoad = function () {
        var _this = this;
        rIC(function () { return _this.initSwiper(); });
    };
    Slides.prototype.componentDidUnload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.destroy(true, true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.onSlideChanged = function () {
        if (this.didInit) {
            this.update();
        }
    };
    Slides.prototype.update = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.slideTo = function (index, speed, runCallbacks) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slideTo(index, speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.slideNext = function (speed, runCallbacks) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slideNext(speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.slidePrev = function (speed, runCallbacks) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slidePrev(speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.getActiveIndex = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.activeIndex];
                }
            });
        });
    };
    Slides.prototype.getPreviousIndex = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.previousIndex];
                }
            });
        });
    };
    Slides.prototype.length = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.slides.length];
                }
            });
        });
    };
    Slides.prototype.isEnd = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.isEnd];
                }
            });
        });
    };
    Slides.prototype.isBeginning = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.isBeginning];
                }
            });
        });
    };
    Slides.prototype.startAutoplay = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        if (swiper.autoplay) {
                            swiper.autoplay.start();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.stopAutoplay = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        if (swiper.autoplay) {
                            swiper.autoplay.stop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.lockSwipeToNext = function (shouldLockSwipeToNext) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlideNext = !shouldLockSwipeToNext;
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.lockSwipeToPrev = function (shouldLockSwipeToPrev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlidePrev = !shouldLockSwipeToPrev;
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.lockSwipes = function (shouldLockSwipes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlideNext = !shouldLockSwipes;
                        swiper.allowSlidePrev = !shouldLockSwipes;
                        swiper.allowTouchMove = !shouldLockSwipes;
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.initSwiper = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var finalOptions, Swiper, swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalOptions = this.normalizeOptions();
                        return [4 /*yield*/, import("./swiper.bundle.js")];
                    case 1:
                        Swiper = (_a.sent()).Swiper;
                        swiper = new Swiper(this.el, finalOptions);
                        this.didInit = true;
                        this.readySwiper(swiper);
                        return [2 /*return*/];
                }
            });
        });
    };
    Slides.prototype.getSwiper = function () {
        return this.swiper;
    };
    Slides.prototype.normalizeOptions = function () {
        var _this = this;
        var swiperOptions = {
            effect: 'slide',
            direction: 'horizontal',
            initialSlide: 0,
            loop: false,
            parallax: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplay: {
                disableOnInteraction: true,
                stopOnLastSlide: false,
            },
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
            },
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            },
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fadeEffect: {
                crossfade: false
            },
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide'
            }
        };
        if (this.pager) {
            swiperOptions.pagination = {
                el: this.paginationEl,
                type: 'bullets',
                clickable: false,
                hideOnClick: false,
            };
        }
        if (this.scrollbar) {
            swiperOptions.scrollbar = {
                el: this.scrollbarEl,
                hide: true,
            };
        }
        var eventOptions = {
            on: {
                init: function () {
                    setTimeout(function () {
                        _this.ionSlidesDidLoad.emit();
                    }, 20);
                },
                slideChangeTransitionStart: this.ionSlideWillChange.emit,
                slideChangeTransitionEnd: this.ionSlideDidChange.emit,
                slideNextTransitionStart: this.ionSlideNextStart.emit,
                slidePrevTransitionStart: this.ionSlidePrevStart.emit,
                slideNextTransitionEnd: this.ionSlideNextEnd.emit,
                slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
                transitionStart: this.ionSlideTransitionStart.emit,
                transitionEnd: this.ionSlideTransitionEnd.emit,
                sliderMove: this.ionSlideDrag.emit,
                reachBeginning: this.ionSlideReachStart.emit,
                reachEnd: this.ionSlideReachEnd.emit,
                touchStart: this.ionSlideTouchStart.emit,
                touchEnd: this.ionSlideTouchEnd.emit,
                tap: this.ionSlideTap.emit,
                doubleTap: this.ionSlideDoubleTap.emit
            }
        };
        return Object.assign({}, swiperOptions, this.options, eventOptions);
    };
    Slides.prototype.hostData = function () {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'slides'), { 'swiper-container': true })
        };
    };
    Slides.prototype.render = function () {
        var _this = this;
        return [
            h("div", { class: "swiper-wrapper" }, h("slot", null)),
            this.pager && h("div", { class: "swiper-pagination", ref: function (el) { return _this.paginationEl = el; } }),
            this.scrollbar && h("div", { class: "swiper-scrollbar", ref: function (el) { return _this.scrollbarEl = el; } })
        ];
    };
    Object.defineProperty(Slides, "is", {
        get: function () { return "ion-slides"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slides, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                },
                "getActiveIndex": {
                    "method": true
                },
                "getPreviousIndex": {
                    "method": true
                },
                "isBeginning": {
                    "method": true
                },
                "isEnd": {
                    "method": true
                },
                "length": {
                    "method": true
                },
                "lockSwipes": {
                    "method": true
                },
                "lockSwipeToNext": {
                    "method": true
                },
                "lockSwipeToPrev": {
                    "method": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "options": {
                    "type": "Any",
                    "attr": "options",
                    "watchCallbacks": ["updateSwiperOptions"]
                },
                "pager": {
                    "type": Boolean,
                    "attr": "pager"
                },
                "scrollbar": {
                    "type": Boolean,
                    "attr": "scrollbar"
                },
                "slideNext": {
                    "method": true
                },
                "slidePrev": {
                    "method": true
                },
                "slideTo": {
                    "method": true
                },
                "startAutoplay": {
                    "method": true
                },
                "stopAutoplay": {
                    "method": true
                },
                "update": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slides, "events", {
        get: function () {
            return [{
                    "name": "ionSlidesDidLoad",
                    "method": "ionSlidesDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideTap",
                    "method": "ionSlideTap",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideDoubleTap",
                    "method": "ionSlideDoubleTap",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideWillChange",
                    "method": "ionSlideWillChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideDidChange",
                    "method": "ionSlideDidChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideNextStart",
                    "method": "ionSlideNextStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlidePrevStart",
                    "method": "ionSlidePrevStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideNextEnd",
                    "method": "ionSlideNextEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlidePrevEnd",
                    "method": "ionSlidePrevEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideTransitionStart",
                    "method": "ionSlideTransitionStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideTransitionEnd",
                    "method": "ionSlideTransitionEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideDrag",
                    "method": "ionSlideDrag",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideReachStart",
                    "method": "ionSlideReachStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideReachEnd",
                    "method": "ionSlideReachEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideTouchStart",
                    "method": "ionSlideTouchStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSlideTouchEnd",
                    "method": "ionSlideTouchEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slides, "listeners", {
        get: function () {
            return [{
                    "name": "ionSlideChanged",
                    "method": "onSlideChanged"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slides, "style", {
        get: function () { return ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;-o-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-o-transition:.2s transform,.2s top;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-o-transition:.2s transform,.2s left;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-o-transition:.2s transform,.2s right;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:1s steps(12,end) infinite swiper-preloader-spin;animation:1s steps(12,end) infinite swiper-preloader-spin}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}.slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-text-color-step-800, #cccccc);--bullet-background-active:var(--ion-color-primary, #3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slides, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Slides;
}());
export { Slide as IonSlide, Slides as IonSlides };
