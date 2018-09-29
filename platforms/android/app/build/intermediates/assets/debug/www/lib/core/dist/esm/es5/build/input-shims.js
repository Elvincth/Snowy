import { l as pointerCoord } from './chunk-e7816c0b.js';
var RELOCATED_KEY = '$ionRelocated';
function relocateInput(componentEl, inputEl, shouldRelocate, inputRelativeY) {
    if (inputRelativeY === void 0) { inputRelativeY = 0; }
    if (componentEl[RELOCATED_KEY] === shouldRelocate) {
        return;
    }
    console.debug("native-input, hideCaret, shouldHideCaret: " + shouldRelocate + ", input value: " + inputEl.value);
    if (shouldRelocate) {
        cloneInputComponent(componentEl, inputEl);
        var doc = componentEl.ownerDocument;
        var tx = doc.dir === 'rtl' ? 9999 : -9999;
        inputEl.style.transform = "translate3d(" + tx + "px," + inputRelativeY + "px,0)";
    }
    else {
        removeClone(componentEl, inputEl);
    }
    componentEl[RELOCATED_KEY] = shouldRelocate;
}
function isFocused(input) {
    return input === input.ownerDocument.activeElement;
}
function removeClone(componentEl, inputEl) {
    if (componentEl && componentEl.parentElement) {
        Array.from(componentEl.parentElement.querySelectorAll('.cloned-input'))
            .forEach(function (clon) { return clon.remove(); });
        componentEl.style.pointerEvents = '';
    }
    inputEl.style['transform'] = '';
    inputEl.style.opacity = '';
}
function cloneInputComponent(componentEl, inputEl) {
    var _a, _b;
    var parentElement = componentEl.parentElement;
    var doc = componentEl.ownerDocument;
    if (componentEl && parentElement) {
        var srcTop = componentEl.offsetTop;
        var srcLeft = componentEl.offsetLeft;
        var srcWidth = componentEl.offsetWidth;
        var srcHeight = componentEl.offsetHeight;
        var clonedComponentEle = doc.createElement('div');
        var clonedStyle = clonedComponentEle.style;
        (_a = clonedComponentEle.classList).add.apply(_a, Array.from(componentEl.classList));
        clonedComponentEle.classList.add('cloned-input');
        clonedComponentEle.setAttribute('aria-hidden', 'true');
        clonedStyle.pointerEvents = 'none';
        clonedStyle.position = 'absolute';
        clonedStyle.top = srcTop + 'px';
        clonedStyle.left = srcLeft + 'px';
        clonedStyle.width = srcWidth + 'px';
        clonedStyle.height = srcHeight + 'px';
        var clonedInputEl = doc.createElement('input');
        (_b = clonedInputEl.classList).add.apply(_b, Array.from(inputEl.classList));
        clonedInputEl.value = inputEl.value;
        clonedInputEl.type = inputEl.type;
        clonedInputEl.placeholder = inputEl.placeholder;
        clonedInputEl.tabIndex = -1;
        clonedComponentEle.appendChild(clonedInputEl);
        parentElement.appendChild(clonedComponentEle);
        componentEl.style.pointerEvents = 'none';
    }
    inputEl.style.transform = 'scale(0)';
}
function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
    if (!scrollEl || !inputEl) {
        return function () { return; };
    }
    console.debug('Input: enableHideCaretOnScroll');
    var scrollHideCaret = function (shouldHideCaret) {
        if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
        }
    };
    var onBlur = function () { return relocateInput(componentEl, inputEl, false); };
    var hideCaret = function () { return scrollHideCaret(true); };
    var showCaret = function () { return scrollHideCaret(false); };
    scrollEl.addEventListener('ionScrollStart', hideCaret);
    scrollEl.addEventListener('ionScrollEnd', showCaret);
    inputEl.addEventListener('blur', onBlur);
    return function () {
        scrollEl.removeEventListener('ionScrollStart', hideCaret);
        scrollEl.removeEventListener('ionScrollEnd', showCaret);
        inputEl.addEventListener('ionBlur', onBlur);
    };
}
var SKIP_SELECTOR = 'input, textarea, [no-blur]';
function enableInputBlurring(doc) {
    console.debug('Input: enableInputBlurring');
    var focused = true;
    var didScroll = false;
    function onScroll() {
        didScroll = true;
    }
    function onFocusin() {
        focused = true;
    }
    function onTouchend(ev) {
        if (didScroll) {
            didScroll = false;
            return;
        }
        var active = doc.activeElement;
        if (!active) {
            return;
        }
        if (active.matches(SKIP_SELECTOR)) {
            return;
        }
        var tapped = ev.target;
        if (tapped === active) {
            return;
        }
        if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
        }
        if (tapped.classList.contains('input-cover')) {
            return;
        }
        focused = false;
        setTimeout(function () {
            if (!focused) {
                active.blur();
            }
        }, 50);
    }
    doc.addEventListener('ionScrollStart', onScroll);
    doc.addEventListener('focusin', onFocusin, true);
    doc.addEventListener('touchend', onTouchend, false);
    return function () {
        doc.removeEventListener('ionScrollStart', onScroll, true);
        doc.removeEventListener('focusin', onFocusin, true);
        doc.removeEventListener('touchend', onTouchend, false);
    };
}
var SCROLL_ASSIST_SPEED = 0.3;
function getScrollData(componentEl, contentEl, keyboardHeight) {
    var itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, window.innerHeight);
}
function calcScrollData(inputRect, contentRect, keyboardHeight, plaformHeight) {
    var inputTop = inputRect.top;
    var inputBottom = inputRect.bottom;
    var visibleAreaTop = contentRect.top;
    var visibleAreaBottom = Math.min(contentRect.bottom, plaformHeight - keyboardHeight);
    var safeAreaTop = visibleAreaTop + 10;
    var safeAreaBottom = visibleAreaBottom / 2.0;
    var distanceToBottom = safeAreaBottom - inputBottom;
    var distanceToTop = safeAreaTop - inputTop;
    var scrollAmount = Math.round((distanceToBottom < 0)
        ? -distanceToBottom
        : (distanceToTop > 0)
            ? -distanceToTop
            : 0);
    var distance = Math.abs(scrollAmount);
    var duration = distance / SCROLL_ASSIST_SPEED;
    var scrollDuration = Math.min(400, Math.max(150, duration));
    return {
        scrollAmount: scrollAmount,
        scrollDuration: scrollDuration,
        scrollPadding: keyboardHeight,
        inputSafeY: -(inputTop - safeAreaTop) + 4
    };
}
function enableScrollAssist(componentEl, inputEl, contentEl, keyboardHeight) {
    var coord;
    var touchStart = function (ev) {
        coord = pointerCoord(ev);
        console.debug("input-base, pointerStart, type: " + ev.type);
    };
    var touchEnd = function (ev) {
        console.debug("input-base, pointerEnd, type: " + ev.type);
        if (!coord) {
            return;
        }
        var endCoord = pointerCoord(ev);
        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.preventDefault();
            ev.stopPropagation();
            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);
        }
    };
    componentEl.addEventListener('touchstart', touchStart, true);
    componentEl.addEventListener('touchend', touchEnd, true);
    return function () {
        componentEl.removeEventListener('touchstart', touchStart, true);
        componentEl.removeEventListener('touchend', touchEnd, true);
    };
}
function jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight) {
    var scrollData = getScrollData(componentEl, contentEl, keyboardHeight);
    if (Math.abs(scrollData.scrollAmount) < 4) {
        inputEl.focus();
        return;
    }
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
    inputEl.focus();
    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration).then(function () {
        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
        inputEl.focus();
    });
}
function hasPointerMoved(threshold, startCoord, endCoord) {
    if (startCoord && endCoord) {
        var deltaX = (startCoord.x - endCoord.x);
        var deltaY = (startCoord.y - endCoord.y);
        var distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
}
var PADDING_TIMER_KEY = '$ionPaddingTimer';
function enableScrollPadding(doc, keyboardHeight) {
    console.debug('Input: enableScrollPadding');
    function onFocusin(ev) {
        setScrollPadding(ev.target, keyboardHeight);
    }
    function onFocusout(ev) {
        setScrollPadding(ev.target, 0);
    }
    doc.addEventListener('focusin', onFocusin);
    doc.addEventListener('focusout', onFocusout);
    return function () {
        doc.removeEventListener('focusin', onFocusin);
        doc.removeEventListener('focusout', onFocusout);
    };
}
function setScrollPadding(input, keyboardHeight) {
    if (input.tagName !== 'INPUT') {
        return;
    }
    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
        return;
    }
    var el = input.closest('ion-content');
    if (el === null) {
        return;
    }
    var timer = el[PADDING_TIMER_KEY];
    if (timer) {
        clearTimeout(timer);
    }
    if (keyboardHeight > 0) {
        el.style.setProperty('--keyboard-offset', keyboardHeight + "px");
    }
    else {
        el[PADDING_TIMER_KEY] = setTimeout(function () {
            el.style.setProperty('--keyboard-offset', '0px');
        }, 120);
    }
}
var INPUT_BLURRING = true;
var SCROLL_PADDING = true;
function startInputShims(doc, config) {
    var keyboardHeight = config.getNumber('keyboardHeight', 290);
    var scrollAssist = config.getBoolean('scrollAssist', true);
    var hideCaret = config.getBoolean('hideCaretOnScroll', true);
    var inputBlurring = config.getBoolean('inputBlurring', true);
    var scrollPadding = config.getBoolean('scrollPadding', true);
    var hideCaretMap = new WeakMap();
    var scrollAssistMap = new WeakMap();
    function registerInput(componentEl) {
        var inputEl = (componentEl.shadowRoot || componentEl).querySelector('input');
        var scrollEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            var rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if (!!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            var rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    }
    function unregisterInput(componentEl) {
        if (hideCaret) {
            var fn = hideCaretMap.get(componentEl);
            if (fn) {
                fn();
            }
            hideCaretMap.delete(componentEl);
        }
        if (scrollAssist) {
            var fn = scrollAssistMap.get(componentEl);
            if (fn) {
                fn();
            }
            scrollAssistMap.delete(componentEl);
        }
    }
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring(doc);
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(doc, keyboardHeight);
    }
    var inputs = Array.from(doc.querySelectorAll('ion-input'));
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var input = inputs_1[_i];
        registerInput(input);
    }
    doc.body.addEventListener('ionInputDidLoad', function (event) {
        registerInput(event.target);
    });
    doc.body.addEventListener('ionInputDidUnload', function (event) {
        unregisterInput(event.target);
    });
}
export { startInputShims };
