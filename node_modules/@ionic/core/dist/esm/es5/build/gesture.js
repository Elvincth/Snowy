var GestureController = /** @class */ (function () {
    function GestureController(doc) {
        this.doc = doc;
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    GestureController.prototype.createGesture = function (config) {
        return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
    };
    GestureController.prototype.createBlocker = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    };
    GestureController.prototype.start = function (gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    };
    GestureController.prototype.capture = function (gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        var requestedStart = this.requestedStart;
        var maxPriority = -10000;
        requestedStart.forEach(function (value) {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            var event = new CustomEvent('ionGestureCaptured', { detail: gestureName });
            this.doc.body.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    };
    GestureController.prototype.release = function (id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    };
    GestureController.prototype.disableGesture = function (gestureName, id) {
        var set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    };
    GestureController.prototype.enableGesture = function (gestureName, id) {
        var set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    };
    GestureController.prototype.disableScroll = function (id) {
        this.disabledScroll.add(id);
    };
    GestureController.prototype.enableScroll = function (id) {
        this.disabledScroll.delete(id);
    };
    GestureController.prototype.canStart = function (gestureName) {
        if (this.capturedId !== undefined) {
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    };
    GestureController.prototype.isCaptured = function () {
        return this.capturedId !== undefined;
    };
    GestureController.prototype.isScrollDisabled = function () {
        return this.disabledScroll.size > 0;
    };
    GestureController.prototype.isDisabled = function (gestureName) {
        var disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    };
    GestureController.prototype.newID = function () {
        this.gestureId++;
        return this.gestureId;
    };
    return GestureController;
}());
var GestureDelegate = /** @class */ (function () {
    function GestureDelegate(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    GestureDelegate.prototype.canStart = function () {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    };
    GestureDelegate.prototype.start = function () {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    };
    GestureDelegate.prototype.capture = function () {
        if (!this.ctrl) {
            return false;
        }
        var captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    };
    GestureDelegate.prototype.release = function () {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    };
    GestureDelegate.prototype.destroy = function () {
        this.release();
        this.ctrl = undefined;
    };
    return GestureDelegate;
}());
var BlockerDelegate = /** @class */ (function () {
    function BlockerDelegate(id, ctrl, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    BlockerDelegate.prototype.block = function () {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var gesture = _a[_i];
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    };
    BlockerDelegate.prototype.unblock = function () {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var gesture = _a[_i];
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    };
    BlockerDelegate.prototype.destroy = function () {
        this.unblock();
        this.ctrl = undefined;
    };
    return BlockerDelegate;
}());
var gestureController = new GestureController(document);
var _sPassive;
function supportsPassive(node) {
    if (_sPassive === undefined) {
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    _sPassive = true;
                }
            });
            node.addEventListener('optsTest', function () { return; }, opts);
        }
        catch (e) {
            _sPassive = false;
        }
    }
    return !!_sPassive;
}
function addEventListener(el, eventName, callback, opts) {
    var listenerOpts = supportsPassive(el) ? {
        'capture': !!opts.capture,
        'passive': !!opts.passive,
    } : !!opts.capture;
    var add;
    var remove;
    if (el['__zone_symbol__addEventListener']) {
        add = '__zone_symbol__addEventListener';
        remove = '__zone_symbol__removeEventListener';
    }
    else {
        add = 'addEventListener';
        remove = 'removeEventListener';
    }
    el[add](eventName, callback, listenerOpts);
    return function () {
        el[remove](eventName, callback, listenerOpts);
    };
}
var MOUSE_WAIT = 2000;
function createPointerEvents(el, pointerDown, pointerMove, pointerUp, options) {
    var rmTouchStart;
    var rmTouchMove;
    var rmTouchEnd;
    var rmTouchCancel;
    var rmMouseStart;
    var rmMouseMove;
    var rmMouseUp;
    var lastTouchEvent = 0;
    function handleTouchStart(ev) {
        lastTouchEvent = Date.now() + MOUSE_WAIT;
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmTouchMove && pointerMove) {
            rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
        }
        if (!rmTouchEnd) {
            rmTouchEnd = addEventListener(el, 'touchend', handleTouchEnd, options);
        }
        if (!rmTouchCancel) {
            rmTouchCancel = addEventListener(el, 'touchcancel', handleTouchEnd, options);
        }
    }
    function handleMouseDown(ev) {
        if (lastTouchEvent > Date.now()) {
            console.debug('mousedown event dropped because of previous touch');
            return;
        }
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmMouseMove && pointerMove) {
            rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
        }
        if (!rmMouseUp) {
            rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
        }
    }
    function handleTouchEnd(ev) {
        stopTouch();
        if (pointerUp) {
            pointerUp(ev);
        }
    }
    function handleMouseUp(ev) {
        stopMouse();
        if (pointerUp) {
            pointerUp(ev);
        }
    }
    function stopTouch() {
        if (rmTouchMove) {
            rmTouchMove();
        }
        if (rmTouchEnd) {
            rmTouchEnd();
        }
        if (rmTouchCancel) {
            rmTouchCancel();
        }
        rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
    }
    function stopMouse() {
        if (rmMouseMove) {
            rmMouseMove();
        }
        if (rmMouseUp) {
            rmMouseUp();
        }
        rmMouseMove = rmMouseUp = undefined;
    }
    function stop() {
        stopTouch();
        stopMouse();
    }
    function setDisabled(disabled) {
        if (disabled) {
            if (rmTouchStart) {
                rmTouchStart();
            }
            if (rmMouseStart) {
                rmMouseStart();
            }
            rmTouchStart = rmMouseStart = undefined;
            stop();
        }
        else {
            if (!rmTouchStart) {
                rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
            }
            if (!rmMouseStart) {
                rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
            }
        }
    }
    function destroy() {
        setDisabled(true);
        pointerUp = pointerMove = pointerDown = undefined;
    }
    return {
        setDisabled: setDisabled,
        stop: stop,
        destroy: destroy
    };
}
function getDocument(node) {
    return node instanceof Document ? node : node.ownerDocument;
}
function createPanRecognizer(direction, thresh, maxAngle) {
    var radians = maxAngle * (Math.PI / 180);
    var isDirX = direction === 'x';
    var maxCosine = Math.cos(radians);
    var threshold = thresh * thresh;
    var startX = 0;
    var startY = 0;
    var dirty = false;
    var isPan = 0;
    return {
        start: function (x, y) {
            startX = x;
            startY = y;
            isPan = 0;
            dirty = true;
        },
        detect: function (x, y) {
            if (!dirty) {
                return false;
            }
            var deltaX = (x - startX);
            var deltaY = (y - startY);
            var distance = deltaX * deltaX + deltaY * deltaY;
            if (distance < threshold) {
                return false;
            }
            var hypotenuse = Math.sqrt(distance);
            var cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
            if (cosine > maxCosine) {
                isPan = 1;
            }
            else if (cosine < -maxCosine) {
                isPan = -1;
            }
            else {
                isPan = 0;
            }
            dirty = false;
            return true;
        },
        isGesture: function () {
            return isPan !== 0;
        },
        getDirection: function () {
            return isPan;
        }
    };
}
function createGesture(config) {
    var finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
    var canStart = finalConfig.canStart;
    var onWillStart = finalConfig.onWillStart;
    var onStart = finalConfig.onStart;
    var onEnd = finalConfig.onEnd;
    var notCaptured = finalConfig.notCaptured;
    var onMove = finalConfig.onMove;
    var threshold = finalConfig.threshold;
    var queue = finalConfig.queue;
    var detail = {
        type: 'pan',
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
        event: undefined,
        data: undefined
    };
    var pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
        capture: false,
    });
    var pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
    var gesture = gestureController.createGesture({
        name: config.gestureName,
        priority: config.gesturePriority,
        disableScroll: config.disableScroll
    });
    var hasCapturedPan = false;
    var hasStartedPan = false;
    var hasFiredStart = true;
    var isMoveQueued = false;
    function pointerDown(ev) {
        var timeStamp = now(ev);
        if (hasStartedPan || !hasFiredStart) {
            return false;
        }
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        if (canStart && canStart(detail) === false) {
            return false;
        }
        gesture.release();
        if (!gesture.start()) {
            return false;
        }
        hasStartedPan = true;
        if (threshold === 0) {
            return tryToCapturePan();
        }
        pan.start(detail.startX, detail.startY);
        return true;
    }
    function pointerMove(ev) {
        if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
                isMoveQueued = true;
                calcGestureData(detail, ev);
                queue.write(fireOnMove);
            }
            return;
        }
        calcGestureData(detail, ev);
        if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
                abortGesture();
            }
        }
    }
    function fireOnMove() {
        if (!hasCapturedPan) {
            return;
        }
        isMoveQueued = false;
        if (onMove) {
            onMove(detail);
        }
    }
    function tryToCapturePan() {
        if (gesture && !gesture.capture()) {
            return false;
        }
        hasCapturedPan = true;
        hasFiredStart = false;
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp;
        if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
        }
        else {
            fireOnStart();
        }
        return true;
    }
    function fireOnStart() {
        if (onStart) {
            onStart(detail);
        }
        hasFiredStart = true;
    }
    function abortGesture() {
        reset();
        pointerEvents.stop();
        if (notCaptured) {
            notCaptured(detail);
        }
    }
    function reset() {
        hasCapturedPan = false;
        hasStartedPan = false;
        isMoveQueued = false;
        hasFiredStart = true;
        gesture.release();
    }
    function pointerUp(ev) {
        var tmpHasCaptured = hasCapturedPan;
        var tmpHasFiredStart = hasFiredStart;
        reset();
        if (!tmpHasFiredStart) {
            return;
        }
        calcGestureData(detail, ev);
        if (tmpHasCaptured) {
            if (onEnd) {
                onEnd(detail);
            }
            return;
        }
        if (notCaptured) {
            notCaptured(detail);
        }
    }
    return {
        setDisabled: function (disabled) {
            pointerEvents.setDisabled(disabled);
        },
        destroy: function () {
            gesture.destroy();
            pointerEvents.destroy();
        }
    };
}
function calcGestureData(detail, ev) {
    var prevX = detail.currentX;
    var prevY = detail.currentY;
    var prevT = detail.timeStamp;
    updateDetail(ev, detail);
    var currentX = detail.currentX;
    var currentY = detail.currentY;
    var timestamp = detail.timeStamp = now(ev);
    var timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    detail.event = ev;
}
function updateDetail(ev, detail) {
    var x = 0;
    var y = 0;
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
export { createGesture };
