function transitionEnd(el, callback) {
    var unRegTrans;
    var opts = { passive: true };
    function unregister() {
        if (unRegTrans) {
            unRegTrans();
        }
    }
    function onTransitionEnd(ev) {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    }
    if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        unRegTrans = function () {
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
}
var CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
var DURATION_MIN = 32;
var TRANSITION_END_FALLBACK_PADDING_MS = 400;
var TRANSFORM_PROPS = {
    'translateX': 1,
    'translateY': 1,
    'translateZ': 1,
    'scale': 1,
    'scaleX': 1,
    'scaleY': 1,
    'scaleZ': 1,
    'rotate': 1,
    'rotateX': 1,
    'rotateY': 1,
    'rotateZ': 1,
    'skewX': 1,
    'skewY': 1,
    'perspective': 1
};
var raf = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : function (f) { return f(Date.now()); };
var Animator = /** @class */ (function () {
    function Animator() {
        this._hasDur = false;
        this._hasTweenEffect = false;
        this._isAsync = false;
        this._isReverse = false;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
    }
    Animator.prototype.addElement = function (el) {
        if (el != null) {
            if (el.length > 0) {
                for (var i = 0; i < el.length; i++) {
                    this._addEl(el[i]);
                }
            }
            else {
                this._addEl(el);
            }
        }
        return this;
    };
    Animator.prototype._addEl = function (el) {
        if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
        }
    };
    Animator.prototype.add = function (childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    };
    Animator.prototype.getDuration = function (opts) {
        if (opts && opts.duration !== undefined) {
            return opts.duration;
        }
        else if (this._duration !== undefined) {
            return this._duration;
        }
        else if (this.parent) {
            return this.parent.getDuration();
        }
        return 0;
    };
    Animator.prototype.isRoot = function () {
        return !this.parent;
    };
    Animator.prototype.duration = function (milliseconds) {
        this._duration = milliseconds;
        return this;
    };
    Animator.prototype.getEasing = function () {
        if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
        }
        return this._easingName !== undefined ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    };
    Animator.prototype.easing = function (name) {
        this._easingName = name;
        return this;
    };
    Animator.prototype.easingReverse = function (name) {
        this._reversedEasingName = name;
        return this;
    };
    Animator.prototype.from = function (prop, val) {
        this._addProp('from', prop, val);
        return this;
    };
    Animator.prototype.to = function (prop, val, clearProperyAfterTransition) {
        if (clearProperyAfterTransition === void 0) { clearProperyAfterTransition = false; }
        var fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            this.afterClearStyles([fx.trans ? 'transform' : prop]);
        }
        return this;
    };
    Animator.prototype.fromTo = function (prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    };
    Animator.prototype._getProp = function (name) {
        if (this._fxProperties) {
            return this._fxProperties.find(function (prop) { return prop.effectName === name; });
        }
        return undefined;
    };
    Animator.prototype._addProp = function (state, prop, val) {
        var fxProp = this._getProp(prop);
        if (!fxProp) {
            var shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                wc: (shouldTrans ? 'transform' : prop)
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
        }
        var fxState = {
            val: val,
            num: 0,
            effectUnit: '',
        };
        fxProp[state] = fxState;
        if (typeof val === 'string' && val.indexOf(' ') < 0) {
            var r = val.match(CSS_VALUE_REGEX);
            if (r) {
                var num = parseFloat(r[1]);
                if (!isNaN(num)) {
                    fxState.num = num;
                }
                fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
            }
        }
        else if (typeof val === 'number') {
            fxState.num = val;
        }
        return fxProp;
    };
    Animator.prototype.beforeAddClass = function (className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    };
    Animator.prototype.beforeRemoveClass = function (className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    };
    Animator.prototype.beforeStyles = function (styles) {
        this._beforeStyles = styles;
        return this;
    };
    Animator.prototype.beforeClearStyles = function (propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
            var prop = propertyNames_1[_i];
            this._beforeStyles[prop] = '';
        }
        return this;
    };
    Animator.prototype.beforeAddRead = function (domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    };
    Animator.prototype.beforeAddWrite = function (domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    };
    Animator.prototype.afterAddClass = function (className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    };
    Animator.prototype.afterRemoveClass = function (className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    };
    Animator.prototype.afterStyles = function (styles) {
        this._afterStyles = styles;
        return this;
    };
    Animator.prototype.afterClearStyles = function (propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (var _i = 0, propertyNames_2 = propertyNames; _i < propertyNames_2.length; _i++) {
            var prop = propertyNames_2[_i];
            this._afterStyles[prop] = '';
        }
        return this;
    };
    Animator.prototype.play = function (opts) {
        var _this = this;
        if (this._destroyed) {
            return;
        }
        this._isAsync = this._hasDuration(opts);
        this._clearAsync();
        this._playInit(opts);
        raf(function () {
            raf(function () {
                _this._playDomInspect(opts);
            });
        });
    };
    Animator.prototype.playAsync = function (opts) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallbacks: true });
            _this.play(opts);
            return _this;
        });
    };
    Animator.prototype.playSync = function () {
        if (!this._destroyed) {
            var opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    };
    Animator.prototype._playInit = function (opts) {
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                child._playInit(opts);
            }
        }
        if (this._hasDur) {
            this._progress(0);
            this._willChange(true);
        }
    };
    Animator.prototype._playDomInspect = function (opts) {
        var _this = this;
        this._beforeAnimation();
        var dur = this.getDuration(opts);
        if (this._isAsync) {
            this._asyncEnd(dur, true);
        }
        this._playProgress(opts);
        if (this._isAsync && !this._destroyed) {
            raf(function () {
                _this._playToStep(1);
            });
        }
    };
    Animator.prototype._playProgress = function (opts) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                var child = children_2[_i];
                child._playProgress(opts);
            }
        }
        if (this._hasDur) {
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            this._progress(1);
            this._setAfterStyles();
            this._didFinish(true);
        }
    };
    Animator.prototype._playToStep = function (stepValue) {
        if (!this._destroyed) {
            var children = this._childAnimations;
            if (children) {
                for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
                    var child = children_3[_i];
                    child._playToStep(stepValue);
                }
            }
            if (this._hasDur) {
                this._progress(stepValue);
            }
        }
    };
    Animator.prototype._asyncEnd = function (dur, shouldComplete) {
        var self = this;
        function onTransitionEnd() {
            self._clearAsync();
            self._playEnd();
            self._didFinishAll(shouldComplete, true, false);
        }
        function onTransitionFallback() {
            console.debug('Animation onTransitionFallback, CSS onTransitionEnd did not fire!');
            self._timerId = undefined;
            self._clearAsync();
            self._playEnd(shouldComplete ? 1 : 0);
            self._didFinishAll(shouldComplete, true, false);
        }
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    };
    Animator.prototype._playEnd = function (stepValue) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_4 = children; _i < children_4.length; _i++) {
                var child = children_4[_i];
                child._playEnd(stepValue);
            }
        }
        if (this._hasDur) {
            if (stepValue !== undefined) {
                this._setTrans(0, true);
                this._progress(stepValue);
            }
            this._setAfterStyles();
            this._willChange(false);
        }
    };
    Animator.prototype._hasDuration = function (opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_5 = children; _i < children_5.length; _i++) {
                var child = children_5[_i];
                if (child._hasDuration(opts)) {
                    return true;
                }
            }
        }
        return false;
    };
    Animator.prototype._hasDomReads = function () {
        if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
        }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_6 = children; _i < children_6.length; _i++) {
                var child = children_6[_i];
                if (child._hasDomReads()) {
                    return true;
                }
            }
        }
        return false;
    };
    Animator.prototype.stop = function (stepValue) {
        if (stepValue === void 0) { stepValue = 1; }
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    };
    Animator.prototype._clearAsync = function () {
        if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
        }
        if (this._timerId) {
            clearTimeout(this._timerId);
        }
        this._timerId = this._unregisterTrnsEnd = undefined;
    };
    Animator.prototype._progress = function (stepValue) {
        var val;
        var elements = this._elements;
        var effects = this._fxProperties;
        if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
        }
        if (this._isReverse) {
            stepValue = 1 - stepValue;
        }
        var i = 0;
        var j = 0;
        var finalTransform = '';
        var fx;
        for (i = 0; i < effects.length; i++) {
            fx = effects[i];
            if (fx.from && fx.to) {
                var fromNum = fx.from.num;
                var toNum = fx.to.num;
                var tweenEffect = (fromNum !== toNum);
                if (tweenEffect) {
                    this._hasTweenEffect = true;
                }
                if (stepValue === 0) {
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    var valNum = (((toNum - fromNum) * stepValue) + fromNum);
                    var unit = fx.to.effectUnit;
                    val = valNum + unit;
                }
                if (val !== null) {
                    var prop = fx.effectName;
                    if (fx.trans) {
                        finalTransform += prop + '(' + val + ') ';
                    }
                    else {
                        for (j = 0; j < elements.length; j++) {
                            elements[j].style.setProperty(prop, val);
                        }
                    }
                }
            }
        }
        if (finalTransform.length > 0) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                elements[i].style.setProperty('transform', finalTransform);
            }
        }
    };
    Animator.prototype._setTrans = function (dur, forcedLinearEasing) {
        var elements = this._elements;
        if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
        }
        var easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        var durString = dur + 'ms';
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var style = elements_1[_i].style;
            if (dur > 0) {
                style.transitionDuration = durString;
                if (easing !== null) {
                    style.transitionTimingFunction = easing;
                }
            }
            else {
                style.transitionDuration = '0';
            }
        }
    };
    Animator.prototype._beforeAnimation = function () {
        this._fireBeforeReadFunc();
        this._fireBeforeWriteFunc();
        this._setBeforeStyles();
    };
    Animator.prototype._setBeforeStyles = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_7 = children; _i < children_7.length; _i++) {
                var child = children_7[_i];
                child._setBeforeStyles();
            }
        }
        var elements = this._elements;
        if (!elements || elements.length === 0 || this._isReverse) {
            return;
        }
        var addClasses = this._beforeAddClasses;
        var removeClasses = this._beforeRemoveClasses;
        for (var _a = 0, elements_2 = elements; _a < elements_2.length; _a++) {
            var el = elements_2[_a];
            var elementClassList = el.classList;
            if (addClasses) {
                for (var _b = 0, addClasses_1 = addClasses; _b < addClasses_1.length; _b++) {
                    var c = addClasses_1[_b];
                    elementClassList.add(c);
                }
            }
            if (removeClasses) {
                for (var _c = 0, removeClasses_1 = removeClasses; _c < removeClasses_1.length; _c++) {
                    var c = removeClasses_1[_c];
                    elementClassList.remove(c);
                }
            }
            if (this._beforeStyles) {
                for (var _d = 0, _e = Object.entries(this._beforeStyles); _d < _e.length; _d++) {
                    var _f = _e[_d], key = _f[0], value = _f[1];
                    el.style.setProperty(key, value);
                }
            }
        }
    };
    Animator.prototype._fireBeforeReadFunc = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_8 = children; _i < children_8.length; _i++) {
                var child = children_8[_i];
                child._fireBeforeReadFunc();
            }
        }
        var readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (var _a = 0, readFunctions_1 = readFunctions; _a < readFunctions_1.length; _a++) {
                var callback = readFunctions_1[_a];
                callback();
            }
        }
    };
    Animator.prototype._fireBeforeWriteFunc = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_9 = children; _i < children_9.length; _i++) {
                var child = children_9[_i];
                child._fireBeforeWriteFunc();
            }
        }
        var writeFunctions = this._writeCallbacks;
        if (writeFunctions) {
            for (var _a = 0, writeFunctions_1 = writeFunctions; _a < writeFunctions_1.length; _a++) {
                var callback = writeFunctions_1[_a];
                callback();
            }
        }
    };
    Animator.prototype._setAfterStyles = function () {
        var elements = this._elements;
        if (!elements) {
            return;
        }
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
            var el = elements_3[_i];
            var elementClassList = el.classList;
            el.style.transitionDuration = el.style.transitionTimingFunction = '';
            if (this._isReverse) {
                var beforeAddClasses = this._beforeAddClasses;
                if (beforeAddClasses) {
                    for (var _a = 0, beforeAddClasses_1 = beforeAddClasses; _a < beforeAddClasses_1.length; _a++) {
                        var c = beforeAddClasses_1[_a];
                        elementClassList.remove(c);
                    }
                }
                var beforeRemoveClasses = this._beforeRemoveClasses;
                if (beforeRemoveClasses) {
                    for (var _b = 0, beforeRemoveClasses_1 = beforeRemoveClasses; _b < beforeRemoveClasses_1.length; _b++) {
                        var c = beforeRemoveClasses_1[_b];
                        elementClassList.add(c);
                    }
                }
                var beforeStyles = this._beforeStyles;
                if (beforeStyles) {
                    for (var _c = 0, _d = Object.keys(beforeStyles); _c < _d.length; _c++) {
                        var propName = _d[_c];
                        el.style.removeProperty(propName);
                    }
                }
            }
            else {
                var afterAddClasses = this._afterAddClasses;
                if (afterAddClasses) {
                    for (var _e = 0, afterAddClasses_1 = afterAddClasses; _e < afterAddClasses_1.length; _e++) {
                        var c = afterAddClasses_1[_e];
                        elementClassList.add(c);
                    }
                }
                var afterRemoveClasses = this._afterRemoveClasses;
                if (afterRemoveClasses) {
                    for (var _f = 0, afterRemoveClasses_1 = afterRemoveClasses; _f < afterRemoveClasses_1.length; _f++) {
                        var c = afterRemoveClasses_1[_f];
                        elementClassList.remove(c);
                    }
                }
                var afterStyles = this._afterStyles;
                if (afterStyles) {
                    for (var _g = 0, _h = Object.entries(afterStyles); _g < _h.length; _g++) {
                        var _j = _h[_g], key = _j[0], value = _j[1];
                        el.style.setProperty(key, value);
                    }
                }
            }
        }
    };
    Animator.prototype._willChange = function (addWillChange) {
        var wc;
        var effects = this._fxProperties;
        var willChange;
        if (addWillChange && effects) {
            wc = [];
            for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                var effect = effects_1[_i];
                var propWC = effect.wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else if (propWC !== undefined) {
                    wc.push(propWC);
                }
            }
            willChange = wc.join(',');
        }
        else {
            willChange = '';
        }
        var elements = this._elements;
        if (elements) {
            for (var _a = 0, elements_4 = elements; _a < elements_4.length; _a++) {
                var el = elements_4[_a];
                el.style.setProperty('will-change', willChange);
            }
        }
    };
    Animator.prototype.progressStart = function () {
        this._clearAsync();
        this._beforeAnimation();
        this._progressStart();
    };
    Animator.prototype._progressStart = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_10 = children; _i < children_10.length; _i++) {
                var child = children_10[_i];
                child._progressStart();
            }
        }
        this._setTrans(0, true);
        this._willChange(true);
    };
    Animator.prototype.progressStep = function (stepValue) {
        stepValue = Math.min(1, Math.max(0, stepValue));
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_11 = children; _i < children_11.length; _i++) {
                var child = children_11[_i];
                child.progressStep(stepValue);
            }
        }
        this._progress(stepValue);
    };
    Animator.prototype.progressEnd = function (shouldComplete, currentStepValue, dur) {
        var _this = this;
        if (dur === void 0) { dur = -1; }
        if (this._isReverse) {
            currentStepValue = 1 - currentStepValue;
        }
        var stepValue = shouldComplete ? 1 : 0;
        var diff = Math.abs(currentStepValue - stepValue);
        if (dur < 0) {
            dur = this._duration || 0;
        }
        else if (diff < 0.05) {
            dur = 0;
        }
        this._isAsync = (dur > 30);
        this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
        if (this._isAsync) {
            this._asyncEnd(dur, shouldComplete);
            if (!this._destroyed) {
                raf(function () {
                    _this._playToStep(stepValue);
                });
            }
        }
    };
    Animator.prototype._progressEnd = function (shouldComplete, stepValue, dur, isAsync) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_12 = children; _i < children_12.length; _i++) {
                var child = children_12[_i];
                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
            }
        }
        if (!isAsync) {
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            this._willChange(true);
            this._setTrans(dur, false);
        }
    };
    Animator.prototype.onFinish = function (callback, opts) {
        if (opts && opts.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
        }
        if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(callback);
        }
        else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(callback);
        }
        return this;
    };
    Animator.prototype._didFinishAll = function (hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_13 = children; _i < children_13.length; _i++) {
                var child = children_13[_i];
                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
            }
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    };
    Animator.prototype._didFinish = function (hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        if (this._onFinishCallbacks) {
            for (var _i = 0, _a = this._onFinishCallbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback(this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            for (var _b = 0, _c = this._onFinishOneTimeCallbacks; _b < _c.length; _b++) {
                var callback = _c[_b];
                callback(this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    Animator.prototype.reverse = function (shouldReverse) {
        if (shouldReverse === void 0) { shouldReverse = true; }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_14 = children; _i < children_14.length; _i++) {
                var child = children_14[_i];
                child.reverse(shouldReverse);
            }
        }
        this._isReverse = !!shouldReverse;
        return this;
    };
    Animator.prototype.destroy = function () {
        this._didFinish(false);
        this._destroyed = true;
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_15 = children; _i < children_15.length; _i++) {
                var child = children_15[_i];
                child.destroy();
            }
        }
        this._clearAsync();
        if (this._elements) {
            this._elements.length = 0;
        }
        if (this._readCallbacks) {
            this._readCallbacks.length = 0;
        }
        if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
        }
        this.parent = undefined;
        if (this._childAnimations) {
            this._childAnimations.length = 0;
        }
        if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
        }
        if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    Animator.prototype._transEl = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_16 = children; _i < children_16.length; _i++) {
                var child = children_16[_i];
                var targetEl = child._transEl();
                if (targetEl) {
                    return targetEl;
                }
            }
        }
        return (this._hasTweenEffect &&
            this._hasDur &&
            this._elements !== undefined &&
            this._elements.length > 0 ?
            this._elements[0] : null);
    };
    return Animator;
}());
var AnimationControllerImpl = /** @class */ (function () {
    function AnimationControllerImpl() {
    }
    AnimationControllerImpl.prototype.create = function (animationBuilder, baseEl, opts) {
        if (animationBuilder) {
            return animationBuilder(Animator, baseEl, opts);
        }
        return Promise.resolve(new Animator());
    };
    Object.defineProperty(AnimationControllerImpl, "is", {
        get: function () { return "ion-animation-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationControllerImpl, "properties", {
        get: function () {
            return {
                "create": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return AnimationControllerImpl;
}());
export { AnimationControllerImpl as IonAnimationController };
