import { c as now, l as pointerCoord } from './chunk-e7816c0b.js';
function startTapClick(doc) {
    var lastTouch = -MOUSE_WAIT * 10;
    var lastActivated = 0;
    var cancelled = false;
    var activatableEle;
    var activeDefer;
    var clearDefers = new WeakMap();
    function onBodyClick(ev) {
        if (cancelled) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    function onTouchStart(ev) {
        lastTouch = now(ev);
        pointerDown(ev);
    }
    function onTouchEnd(ev) {
        lastTouch = now(ev);
        pointerUp(ev);
    }
    function onMouseDown(ev) {
        var t = now(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    }
    function onMouseUp(ev) {
        var t = now(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    }
    function cancelActive() {
        clearTimeout(activeDefer);
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
        cancelled = true;
    }
    function pointerDown(ev) {
        if (activatableEle) {
            return;
        }
        cancelled = false;
        setActivatedElement(getActivatableTarget(ev), ev);
    }
    function pointerUp(ev) {
        setActivatedElement(undefined, ev);
        if (cancelled && ev.cancelable) {
            ev.preventDefault();
        }
    }
    function setActivatedElement(el, ev) {
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        var _a = pointerCoord(ev), x = _a.x, y = _a.y;
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        if (el) {
            var deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(function () {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, ADD_ACTIVATED_DEFERS);
        }
        activatableEle = el;
    }
    function addActivated(el, x, y) {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        var rippleEffect = getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            rippleEffect.addRipple(x, y);
        }
    }
    function removeActivated(smooth) {
        var active = activatableEle;
        if (!active) {
            return;
        }
        var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0) {
            var deferId = setTimeout(function () {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    }
    doc.body.addEventListener('click', onBodyClick, true);
    doc.body.addEventListener('ionScrollStart', cancelActive);
    doc.body.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
}
function getActivatableTarget(ev) {
    if (ev.composedPath) {
        var path = ev.composedPath();
        for (var i = 0; i < path.length - 2; i++) {
            var el = path[i];
            if (el.hasAttribute && el.hasAttribute('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('[ion-activatable]');
    }
}
function getRippleEffect(el) {
    if (el.shadowRoot) {
        var ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
}
var ACTIVATED = 'activated';
var ADD_ACTIVATED_DEFERS = 200;
var CLEAR_STATE_DEFERS = 200;
var MOUSE_WAIT = 2500;
export { startTapClick };
