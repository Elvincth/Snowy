import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as attachComponent } from './chunk-50fe9317.js';
import { i as assert } from './chunk-e7816c0b.js';
import { b as lifecycle, c as setPageHidden, d as transition } from './chunk-5f438245.js';
var ViewController = /** @class */ (function () {
    function ViewController(component, params) {
        this.component = component;
        this.params = params;
        this.state = 1;
    }
    ViewController.prototype.init = function (container) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var component, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.state = 2;
                        if (!!this.element) return [3 /*break*/, 2];
                        component = this.component;
                        _a = this;
                        return [4 /*yield*/, attachComponent(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params)];
                    case 1:
                        _a.element = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ViewController.prototype._destroy = function () {
        assert(this.state !== 3, 'view state must be ATTACHED');
        var element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = 3;
    };
    return ViewController;
}());
function matches(view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    var currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    var keysA = Object.keys(currentParams);
    var keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
}
function convertToView(page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
}
function convertToViews(pages) {
    return pages.map(function (page) {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(function (v) { return v !== null; });
}
var Nav = /** @class */ (function () {
    function Nav() {
        this.transInstr = [];
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        this.animated = true;
    }
    Nav.prototype.swipeGestureChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    };
    Nav.prototype.rootChanged = function () {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    };
    Nav.prototype.componentWillLoad = function () {
        this.useRouter =
            !!this.win.document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            this.swipeGesture = this.config.getBoolean('swipeBackEnabled', this.mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    };
    Nav.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.rootChanged();
                        _a = this;
                        return [4 /*yield*/, import("./gesture.js")];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.win.document.body,
                            queue: this.queue,
                            gestureName: 'goback-swipe',
                            gesturePriority: 30,
                            threshold: 10,
                            canStart: function () { return _this.canStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.swipeGestureChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.componentDidUnload = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            lifecycle(this.win, view.element, "ionViewWillUnload");
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
        if (this.sbTrns) {
            this.sbTrns.destroy();
        }
        this.transInstr.length = this.views.length = 0;
        this.sbTrns = undefined;
        this.destroyed = true;
    };
    Nav.prototype.push = function (component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    Nav.prototype.insert = function (insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    Nav.prototype.insertPages = function (insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts
        }, done);
    };
    Nav.prototype.pop = function (opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
        }, done);
    };
    Nav.prototype.popTo = function (indexOrViewCtrl, opts, done) {
        var config = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(config, done);
    };
    Nav.prototype.popToRoot = function (opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts
        }, done);
    };
    Nav.prototype.removeIndex = function (startIndex, removeCount, opts, done) {
        if (removeCount === void 0) { removeCount = 1; }
        return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts
        }, done);
    };
    Nav.prototype.setRoot = function (component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    };
    Nav.prototype.setPages = function (views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    };
    Nav.prototype.setRouteId = function (id, params, direction) {
        var _this = this;
        var active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        var resolve;
        var promise = new Promise(function (r) { return (resolve = r); });
        var finish;
        var commonOpts = {
            updateURL: false,
            viewIsReady: function (enteringEl) {
                var mark;
                var p = new Promise(function (r) { return (mark = r); });
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    mark();
                                    return [4 /*yield*/, finish];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                return p;
            }
        };
        if (direction === 0) {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            var viewController = this.views.find(function (v) { return matches(v, id, params); });
            if (viewController) {
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: 'back' }));
            }
            else if (direction === 1) {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === -1) {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: 'back', animated: true }));
            }
        }
        return promise;
    };
    Nav.prototype.getRouteId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var active;
            return tslib_1.__generator(this, function (_a) {
                active = this.getActiveSync();
                return [2 /*return*/, active
                        ? {
                            id: active.element.tagName,
                            params: active.params,
                            element: active.element
                        }
                        : undefined];
            });
        });
    };
    Nav.prototype.getActive = function () {
        return Promise.resolve(this.getActiveSync());
    };
    Nav.prototype.getByIndex = function (index) {
        return Promise.resolve(this.views[index]);
    };
    Nav.prototype.canGoBack = function (view) {
        return Promise.resolve(this.canGoBackSync(view));
    };
    Nav.prototype.getPrevious = function (view) {
        return Promise.resolve(this.getPreviousSync(view));
    };
    Nav.prototype.getLength = function () {
        return this.views.length;
    };
    Nav.prototype.getActiveSync = function () {
        return this.views[this.views.length - 1];
    };
    Nav.prototype.canGoBackSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        return !!(view && this.getPreviousSync(view));
    };
    Nav.prototype.getPreviousSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        if (!view) {
            return undefined;
        }
        var views = this.views;
        var index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    };
    Nav.prototype.queueTrns = function (ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        var promise = new Promise(function (resolve, reject) {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        this.transInstr.push(ti);
        this.nextTrns();
        return promise;
    };
    Nav.prototype.success = function (result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            var router = this.win.document.querySelector('ion-router');
            if (router) {
                var direction = result.direction === 'back' ? -1 : 1;
                router.navChanged(direction);
            }
        }
    };
    Nav.prototype.failed = function (rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    };
    Nav.prototype.fireError = function (rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    };
    Nav.prototype.nextTrns = function () {
        if (this.isTransitioning) {
            return false;
        }
        var ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    };
    Nav.prototype.runTransition = function (ti) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var leavingView, enteringView, requiresTransition, result, _a, rejectReason_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        this.ionNavWillChange.emit();
                        this.isTransitioning = true;
                        this.prepareTI(ti);
                        leavingView = this.getActiveSync();
                        enteringView = this.getEnteringView(ti, leavingView);
                        if (!leavingView && !enteringView) {
                            throw new Error('no views in the stack to be removed');
                        }
                        if (!(enteringView && enteringView.state === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, enteringView.init(this.el)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.postViewInit(enteringView, leavingView, ti);
                        requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                            enteringView !== leavingView;
                        if (!requiresTransition) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.transition(enteringView, leavingView, ti)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = {
                            hasCompleted: true,
                            requiresTransition: false
                        };
                        _b.label = 5;
                    case 5:
                        result = _a;
                        this.success(result, ti);
                        this.ionNavDidChange.emit();
                        return [3 /*break*/, 7];
                    case 6:
                        rejectReason_1 = _b.sent();
                        this.failed(rejectReason_1, ti);
                        return [3 /*break*/, 7];
                    case 7:
                        this.isTransitioning = false;
                        this.nextTrns();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.prepareTI = function (ti) {
        var viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            assert(ti.removeStart !== undefined, 'removeView needs removeStart');
            assert(ti.removeCount !== undefined, 'removeView needs removeCount');
            var index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        var insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        assert(insertViews.length > 0, 'length can not be zero');
        var viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        for (var _i = 0, viewControllers_1 = viewControllers; _i < viewControllers_1.length; _i++) {
            var view = viewControllers_1[_i];
            view.delegate = ti.opts.delegate;
            var nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === 3) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    };
    Nav.prototype.getEnteringView = function (ti, leavingView) {
        var insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            return insertViews[insertViews.length - 1];
        }
        var removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            var views = this.views;
            var removeEnd = removeStart + ti.removeCount;
            for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    };
    Nav.prototype.postViewInit = function (enteringView, leavingView, ti) {
        assert(leavingView || enteringView, 'Both leavingView and enteringView are null');
        assert(ti.resolve, 'resolve must be valid');
        assert(ti.reject, 'reject must be valid');
        var opts = ti.opts;
        var insertViews = ti.insertViews;
        var removeStart = ti.removeStart;
        var removeCount = ti.removeCount;
        var destroyQueue;
        if (removeStart !== undefined && removeCount !== undefined) {
            assert(removeStart >= 0, 'removeStart can not be negative');
            assert(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            opts.direction = opts.direction || 'back';
        }
        var finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        assert(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        if (insertViews) {
            var insertIndex = ti.insertStart;
            for (var _i = 0, insertViews_1 = insertViews; _i < insertViews_1.length; _i++) {
                var view = insertViews_1[_i];
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                opts.direction = opts.direction || 'forward';
            }
        }
        if (destroyQueue && destroyQueue.length > 0) {
            for (var _a = 0, destroyQueue_1 = destroyQueue; _a < destroyQueue_1.length; _a++) {
                var view = destroyQueue_1[_a];
                lifecycle(this.win, view.element, "ionViewWillLeave");
                lifecycle(this.win, view.element, "ionViewDidLeave");
                lifecycle(this.win, view.element, "ionViewWillUnload");
            }
            for (var _b = 0, destroyQueue_2 = destroyQueue; _b < destroyQueue_2.length; _b++) {
                var view = destroyQueue_2[_b];
                this.destroyView(view);
            }
        }
    };
    Nav.prototype.transition = function (enteringView, leavingView, ti) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opts, progressCallback, enteringEl, leavingEl, animated, animationOpts, hasCompleted;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.sbTrns) {
                            this.sbTrns.destroy();
                            this.sbTrns = undefined;
                        }
                        opts = ti.opts;
                        progressCallback = opts.progressAnimation
                            ? function (animation) {
                                _this.sbTrns = animation;
                            }
                            : undefined;
                        enteringEl = enteringView.element;
                        leavingEl = leavingView && leavingView.element;
                        animated = this.animated && this.config.getBoolean('animated', true);
                        animationOpts = Object.assign({ mode: this.mode, showGoBack: this.canGoBackSync(enteringView), animationCtrl: this.animationCtrl, queue: this.queue, window: this.win, baseEl: this.el, progressCallback: progressCallback,
                            animated: animated,
                            enteringEl: enteringEl,
                            leavingEl: leavingEl }, opts);
                        return [4 /*yield*/, transition(animationOpts)];
                    case 1:
                        hasCompleted = (_a.sent()).hasCompleted;
                        return [2 /*return*/, this.transitionFinish(hasCompleted, enteringView, leavingView, opts)];
                }
            });
        });
    };
    Nav.prototype.transitionFinish = function (hasCompleted, enteringView, leavingView, opts) {
        var cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted: hasCompleted,
            requiresTransition: true,
            enteringView: enteringView,
            leavingView: leavingView,
            direction: opts.direction
        };
    };
    Nav.prototype.insertViewAt = function (view, index) {
        var views = this.views;
        var existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            assert(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            assert(!view.nav, 'nav is used');
            view.nav = this;
            views.splice(index, 0, view);
        }
    };
    Nav.prototype.removeView = function (view) {
        assert(view.state === 2 || view.state === 3, 'view state should be loaded or destroyed');
        var views = this.views;
        var index = views.indexOf(view);
        assert(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    };
    Nav.prototype.destroyView = function (view) {
        view._destroy();
        this.removeView(view);
    };
    Nav.prototype.cleanup = function (activeView) {
        if (this.destroyed) {
            return;
        }
        var views = this.views;
        var activeViewIndex = views.indexOf(activeView);
        for (var i = views.length - 1; i >= 0; i--) {
            var view = views[i];
            var element = view.element;
            if (i > activeViewIndex) {
                lifecycle(this.win, element, "ionViewWillUnload");
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                setPageHidden(element, true);
            }
        }
    };
    Nav.prototype.canStart = function () {
        return !!this.swipeGesture &&
            !this.isTransitioning &&
            this.canGoBackSync();
    };
    Nav.prototype.onStart = function () {
        if (this.isTransitioning || this.transInstr.length > 0) {
            return;
        }
        var opts = {
            direction: 'back',
            progressAnimation: true
        };
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
        }, undefined);
    };
    Nav.prototype.onMove = function (detail) {
        if (this.sbTrns) {
            this.isTransitioning = true;
            var delta = detail.deltaX;
            var stepValue = delta / this.win.innerWidth;
            this.sbTrns.progressStep(stepValue);
        }
    };
    Nav.prototype.onEnd = function (detail) {
        if (this.sbTrns) {
            var delta = detail.deltaX;
            var width = this.win.innerWidth;
            var stepValue = delta / width;
            var velocity = detail.velocityX;
            var z = width / 2.0;
            var shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            var missing = shouldComplete ? 1 - stepValue : stepValue;
            var missingDistance = missing * width;
            var realDur = 0;
            if (missingDistance > 5) {
                var dur = missingDistance / Math.abs(velocity);
                realDur = Math.min(dur, 300);
            }
            this.sbTrns.progressEnd(shouldComplete, stepValue, realDur);
        }
    };
    Nav.prototype.render = function () {
        return [
            this.mode === 'ios' && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    };
    Object.defineProperty(Nav, "is", {
        get: function () { return "ion-nav"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "canGoBack": {
                    "method": true
                },
                "config": {
                    "context": "config"
                },
                "delegate": {
                    "type": "Any",
                    "attr": "delegate"
                },
                "el": {
                    "elementRef": true
                },
                "getActive": {
                    "method": true
                },
                "getByIndex": {
                    "method": true
                },
                "getPrevious": {
                    "method": true
                },
                "getRouteId": {
                    "method": true
                },
                "insert": {
                    "method": true
                },
                "insertPages": {
                    "method": true
                },
                "pop": {
                    "method": true
                },
                "popTo": {
                    "method": true
                },
                "popToRoot": {
                    "method": true
                },
                "push": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "removeIndex": {
                    "method": true
                },
                "root": {
                    "type": String,
                    "attr": "root",
                    "watchCallbacks": ["rootChanged"]
                },
                "rootParams": {
                    "type": "Any",
                    "attr": "root-params"
                },
                "setPages": {
                    "method": true
                },
                "setRoot": {
                    "method": true
                },
                "setRouteId": {
                    "method": true
                },
                "swipeGesture": {
                    "type": Boolean,
                    "attr": "swipe-gesture",
                    "mutable": true,
                    "watchCallbacks": ["swipeGestureChanged"]
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "events", {
        get: function () {
            return [{
                    "name": "ionNavWillLoad",
                    "method": "ionNavWillLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionNavWillChange",
                    "method": "ionNavWillChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionNavDidChange",
                    "method": "ionNavDidChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "style", {
        get: function () { return ".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-nav{display:none}.show-decor.sc-ion-nav-h   .nav-decor.sc-ion-nav{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return Nav;
}());
var NavPop = /** @class */ (function () {
    function NavPop() {
    }
    NavPop.prototype.pop = function () {
        var nav = this.el.closest('ion-nav');
        if (nav) {
            nav.pop({ skipIfBusy: true });
        }
    };
    Object.defineProperty(NavPop, "is", {
        get: function () { return "ion-nav-pop"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavPop, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavPop, "listeners", {
        get: function () {
            return [{
                    "name": "child:click",
                    "method": "pop"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return NavPop;
}());
var NavPush = /** @class */ (function () {
    function NavPush() {
    }
    NavPush.prototype.push = function () {
        var nav = this.el.closest('ion-nav');
        var toPush = this.component;
        if (nav && toPush !== undefined) {
            nav.push(toPush, this.componentProps, { skipIfBusy: true });
        }
    };
    Object.defineProperty(NavPush, "is", {
        get: function () { return "ion-nav-push"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavPush, "properties", {
        get: function () {
            return {
                "component": {
                    "type": String,
                    "attr": "component"
                },
                "componentProps": {
                    "type": "Any",
                    "attr": "component-props"
                },
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavPush, "listeners", {
        get: function () {
            return [{
                    "name": "child:click",
                    "method": "push"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return NavPush;
}());
var NavSetRoot = /** @class */ (function () {
    function NavSetRoot() {
    }
    NavSetRoot.prototype.push = function () {
        var nav = this.el.closest('ion-nav');
        var toPush = this.component;
        if (nav && toPush !== undefined) {
            nav.setRoot(toPush, this.componentProps, { skipIfBusy: true });
        }
    };
    Object.defineProperty(NavSetRoot, "is", {
        get: function () { return "ion-nav-set-root"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavSetRoot, "properties", {
        get: function () {
            return {
                "component": {
                    "type": String,
                    "attr": "component"
                },
                "componentProps": {
                    "type": "Any",
                    "attr": "component-props"
                },
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavSetRoot, "listeners", {
        get: function () {
            return [{
                    "name": "child:click",
                    "method": "push"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return NavSetRoot;
}());
export { Nav as IonNav, NavPop as IonNavPop, NavPush as IonNavPush, NavSetRoot as IonNavSetRoot };
