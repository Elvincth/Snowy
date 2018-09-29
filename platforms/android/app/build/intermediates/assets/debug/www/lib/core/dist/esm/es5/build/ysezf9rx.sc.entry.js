import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { b as rIC, m as isPlatform } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext, g as createThemedClasses } from './chunk-50fe9317.js';
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.componentDidLoad = function () {
        var _this = this;
        rIC(function () {
            importTapClick(_this.win);
            importInputShims(_this.win, _this.config);
            importStatusTap(_this.win, _this.queue);
            importHardwareBackButton(_this.win);
        });
    };
    App.prototype.hostData = function () {
        return {
            class: {
                'ion-page': true,
            }
        };
    };
    Object.defineProperty(App, "is", {
        get: function () { return "ion-app"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "properties", {
        get: function () {
            return {
                "config": {
                    "context": "config"
                },
                "el": {
                    "elementRef": true
                },
                "queue": {
                    "context": "queue"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "style", {
        get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"; },
        enumerable: true,
        configurable: true
    });
    return App;
}());
function importHardwareBackButton(win) {
    if (isPlatform(win, 'hybrid')) {
        import("./hardware-back-button.js").then(function (module) { return module.startHardwareBackButton(win); });
    }
}
function importStatusTap(win, queue) {
    if (isPlatform(win, 'hybrid')) {
        import("./status-tap.js").then(function (module) { return module.startStatusTap(win, queue); });
    }
}
function importTapClick(win) {
    import("./tap-click.js").then(function (module) { return module.startTapClick(win.document); });
}
function importInputShims(win, config) {
    var inputShims = config.getBoolean('inputShims', needInputShims(win));
    if (inputShims) {
        import("./input-shims.js").then(function (module) { return module.startInputShims(win.document, config); });
    }
}
function needInputShims(win) {
    return isPlatform(win, 'ios') && isPlatform(win, 'mobile');
}
var Buttons = /** @class */ (function () {
    function Buttons() {
    }
    Object.defineProperty(Buttons, "is", {
        get: function () { return "ion-buttons"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Buttons, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Buttons, "style", {
        get: function () { return ".sc-ion-buttons-ios-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}.sc-ion-buttons-ios-s  .button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;pointer-events:auto;--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  .button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:currentColor;--color-activated:currentColor}.sc-ion-buttons-ios-s  .button-clear.activated {color:var(--ion-color-primary,#3880ff)}.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin:0 .3em 0 0;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin:0 0 0 .4em;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:31px;line-height:.67;pointer-events:none}[slot=start].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[slot=primary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Buttons, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Buttons;
}());
var Content = /** @class */ (function () {
    function Content() {
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        this.fullscreen = false;
        this.scrollX = false;
        this.scrollY = true;
        this.scrollEvents = false;
    }
    Content.prototype.onNavChanged = function () {
        this.resize();
    };
    Content.prototype.componentWillLoad = function () {
        if (this.forceOverscroll === undefined) {
            this.forceOverscroll = this.mode === 'ios' && ('ontouchstart' in this.win);
        }
    };
    Content.prototype.componentDidLoad = function () {
        this.resize();
    };
    Content.prototype.componentDidUnload = function () {
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
    };
    Content.prototype.resize = function () {
        if (this.fullscreen) {
            this.queue.read(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    };
    Content.prototype.readDimensions = function () {
        var page = getPageElement(this.el);
        var top = Math.max(this.el.offsetTop, 0);
        var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        var dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    };
    Content.prototype.onScroll = function (ev) {
        var _this = this;
        var timeStamp = Date.now();
        var shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            this.queue.read(function (ts) {
                _this.queued = false;
                _this.detail.event = ev;
                updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                _this.ionScroll.emit(_this.detail);
            });
        }
    };
    Content.prototype.getScrollElement = function () {
        return Promise.resolve(this.scrollEl);
    };
    Content.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 0; }
        return this.scrollToPoint(undefined, 0, duration);
    };
    Content.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 0; }
        var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    };
    Content.prototype.scrollByPoint = function (x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    };
    Content.prototype.scrollToPoint = function (x, y, duration) {
        if (duration === void 0) { duration = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
            return tslib_1.__generator(this, function (_a) {
                el = this.scrollEl;
                if (duration < 32) {
                    if (y != null) {
                        el.scrollTop = y;
                    }
                    if (x != null) {
                        el.scrollLeft = x;
                    }
                    return [2 /*return*/];
                }
                startTime = 0;
                promise = new Promise(function (r) { return resolve = r; });
                fromY = el.scrollTop;
                fromX = el.scrollLeft;
                deltaY = y != null ? y - fromY : 0;
                deltaX = x != null ? x - fromX : 0;
                step = function (timeStamp) {
                    var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                    var easedT = Math.pow(linearTime, 3) + 1;
                    if (deltaY !== 0) {
                        el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                    }
                    if (deltaX !== 0) {
                        el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                    }
                    if (easedT < 1) {
                        requestAnimationFrame(step);
                    }
                    else {
                        resolve();
                    }
                };
                requestAnimationFrame(function (ts) {
                    startTime = ts;
                    step(ts);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    Content.prototype.onScrollStart = function () {
        var _this = this;
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        this.watchDog = setInterval(function () {
            if (_this.lastScroll < Date.now() - 120) {
                _this.onScrollEnd();
            }
        }, 100);
    };
    Content.prototype.onScrollEnd = function () {
        clearInterval(this.watchDog);
        this.watchDog = null;
        this.isScrolling = false;
        this.ionScrollEnd.emit({
            isScrolling: false
        });
    };
    Content.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'content-sizing': hostContext('ion-popover', this.el), 'overscroll': !!this.forceOverscroll }),
            style: {
                '--offset-top': this.cTop + "px",
                '--offset-bottom': this.cBottom + "px",
            }
        };
    };
    Content.prototype.render = function () {
        var _this = this;
        var _a = this, scrollX = _a.scrollX, scrollY = _a.scrollY, forceOverscroll = _a.forceOverscroll;
        this.resize();
        return [
            h("div", { class: {
                    'inner-scroll': true,
                    'scroll-x': scrollX,
                    'scroll-y': scrollY,
                    'overscroll': (scrollX || scrollY) && !!forceOverscroll
                }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, h("slot", null)),
            h("slot", { name: "fixed" })
        ];
    };
    Object.defineProperty(Content, "is", {
        get: function () { return "ion-content"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "el": {
                    "elementRef": true
                },
                "forceOverscroll": {
                    "type": Boolean,
                    "attr": "force-overscroll",
                    "mutable": true
                },
                "fullscreen": {
                    "type": Boolean,
                    "attr": "fullscreen"
                },
                "getScrollElement": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "scrollByPoint": {
                    "method": true
                },
                "scrollEvents": {
                    "type": Boolean,
                    "attr": "scroll-events"
                },
                "scrollToBottom": {
                    "method": true
                },
                "scrollToPoint": {
                    "method": true
                },
                "scrollToTop": {
                    "method": true
                },
                "scrollX": {
                    "type": Boolean,
                    "attr": "scroll-x"
                },
                "scrollY": {
                    "type": Boolean,
                    "attr": "scroll-y"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "events", {
        get: function () {
            return [{
                    "name": "ionScrollStart",
                    "method": "ionScrollStart",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionScroll",
                    "method": "ionScroll",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionScrollEnd",
                    "method": "ionScrollEnd",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "listeners", {
        get: function () {
            return [{
                    "name": "body:ionNavDidChange",
                    "method": "onNavChanged"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "style", {
        get: function () { return ".sc-ion-content-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0!important;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:auto}.scroll-x.sc-ion-content{overflow-x:auto}.overscroll.sc-ion-content::after, .overscroll.sc-ion-content::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content::before{bottom:-1px}.overscroll.sc-ion-content::after{top:-1px}.content-sizing.sc-ion-content-h{contain:none}.content-sizing.sc-ion-content-h   .inner-scroll.sc-ion-content{position:relative}"; },
        enumerable: true,
        configurable: true
    });
    return Content;
}());
function getParentElement(el) {
    if (el.parentElement) {
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        return el.parentNode.host;
    }
    return null;
}
function getPageElement(el) {
    var tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
}
function updateScrollDetail(detail, el, timestamp, shouldStart) {
    var prevX = detail.currentX;
    var prevY = detail.currentY;
    var prevT = detail.timeStamp;
    var currentX = el.scrollLeft;
    var currentY = el.scrollTop;
    if (shouldStart) {
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    var timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
}
var Footer = /** @class */ (function () {
    function Footer() {
        this.translucent = false;
    }
    Footer.prototype.hostData = function () {
        var themedClasses = createThemedClasses(this.mode, 'footer');
        var translucentClasses = this.translucent ? createThemedClasses(this.mode, 'footer-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    };
    Object.defineProperty(Footer, "is", {
        get: function () { return "ion-footer"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Footer, "properties", {
        get: function () {
            return {
                "mode": {
                    "type": String,
                    "attr": "mode"
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
    Object.defineProperty(Footer, "style", {
        get: function () { return "ion-footer{display:block;position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Footer, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Footer;
}());
var Header = /** @class */ (function () {
    function Header() {
        this.translucent = false;
    }
    Header.prototype.hostData = function () {
        var themedClasses = createThemedClasses(this.mode, 'header');
        var translucentClasses = this.translucent ? createThemedClasses(this.mode, 'header-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    };
    Object.defineProperty(Header, "is", {
        get: function () { return "ion-header"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Header, "properties", {
        get: function () {
            return {
                "mode": {
                    "type": String,
                    "attr": "mode"
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
    Object.defineProperty(Header, "style", {
        get: function () { return "ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Header, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Header;
}());
var ToolbarTitle = /** @class */ (function () {
    function ToolbarTitle() {
    }
    ToolbarTitle.prototype.getMode = function () {
        var toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || this.mode;
    };
    ToolbarTitle.prototype.hostData = function () {
        var _a;
        var mode = this.getMode();
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["title-" + mode] = true, _a))
        };
    };
    ToolbarTitle.prototype.render = function () {
        return [
            h("div", { class: "toolbar-title" }, h("slot", null))
        ];
    };
    Object.defineProperty(ToolbarTitle, "is", {
        get: function () { return "ion-title"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "style", {
        get: function () { return ".sc-ion-title-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"; },
        enumerable: true,
        configurable: true
    });
    return ToolbarTitle;
}());
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Toolbar.prototype.render = function () {
        return [
            h("div", { class: "toolbar-background" }),
            h("div", { class: "toolbar-container" }, h("slot", { name: "start" }), h("slot", { name: "secondary" }), h("div", { class: "toolbar-content" }, h("slot", null)), h("slot", { name: "primary" }), h("slot", { name: "end" }))
        ];
    };
    Object.defineProperty(Toolbar, "is", {
        get: function () { return "ion-toolbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
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
    Object.defineProperty(Toolbar, "style", {
        get: function () { return ".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.ion-color.sc-ion-toolbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-ios-h   .toolbar-background.sc-ion-toolbar-ios{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-ios{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-ios{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;min-width:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
export { App as IonApp, Buttons as IonButtons, Content as IonContent, Footer as IonFooter, Header as IonHeader, ToolbarTitle as IonTitle, Toolbar as IonToolbar };
