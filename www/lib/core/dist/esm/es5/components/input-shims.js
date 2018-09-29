import { k as pointerCoord } from "./chunk-276e047f.js";
var RELOCATED_KEY = "$ionRelocated";
function relocateInput(t, e, n, o) {
    if (o === void 0) { o = 0; }
    if (t[RELOCATED_KEY] !== n) {
        if (e.value, n) {
            cloneInputComponent(t, e);
            var n_1 = "rtl" === t.ownerDocument.dir ? 9999 : -9999;
            e.style.transform = "translate3d(" + n_1 + "px," + o + "px,0)";
        }
        else
            removeClone(t, e);
        t[RELOCATED_KEY] = n;
    }
}
function isFocused(t) { return t === t.ownerDocument.activeElement; }
function removeClone(t, e) { t && t.parentElement && (Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function (t) { return t.remove(); }), t.style.pointerEvents = ""), e.style.transform = "", e.style.opacity = ""; }
function cloneInputComponent(t, e) { var _a, _b; var n = t.parentElement, o = t.ownerDocument; if (t && n) {
    var r = t.offsetTop, i = t.offsetLeft, s = t.offsetWidth, l = t.offsetHeight, a = o.createElement("div"), c = a.style;
    (_a = a.classList).add.apply(_a, Array.from(t.classList)), a.classList.add("cloned-input"), a.setAttribute("aria-hidden", "true"), c.pointerEvents = "none", c.position = "absolute", c.top = r + "px", c.left = i + "px", c.width = s + "px", c.height = l + "px";
    var u = o.createElement("input");
    (_b = u.classList).add.apply(_b, Array.from(e.classList)), u.value = e.value, u.type = e.type, u.placeholder = e.placeholder, u.tabIndex = -1, a.appendChild(u), n.appendChild(a), t.style.pointerEvents = "none";
} e.style.transform = "scale(0)"; }
function enableHideCaretOnScroll(t, e, n) { if (!n || !e)
    return function () { }; var o = function (n) { isFocused(e) && relocateInput(t, e, n); }, r = function () { return relocateInput(t, e, !1); }, i = function () { return o(!0); }, s = function () { return o(!1); }; return n.addEventListener("ionScrollStart", i), n.addEventListener("ionScrollEnd", s), e.addEventListener("blur", r), function () { n.removeEventListener("ionScrollStart", i), n.removeEventListener("ionScrollEnd", s), e.addEventListener("ionBlur", r); }; }
var SKIP_SELECTOR = "input, textarea, [no-blur]";
function enableInputBlurring(t) { var e = !0, n = !1; function o() { n = !0; } function r() { e = !0; } function i(o) { if (n)
    return void (n = !1); var r = t.activeElement; if (!r)
    return; if (r.matches(SKIP_SELECTOR))
    return; var i = o.target; i !== r && (i.matches(SKIP_SELECTOR) || i.closest(SKIP_SELECTOR) || i.classList.contains("input-cover") || (e = !1, setTimeout(function () { e || r.blur(); }, 50))); } return t.addEventListener("ionScrollStart", o), t.addEventListener("focusin", r, !0), t.addEventListener("touchend", i, !1), function () { t.removeEventListener("ionScrollStart", o, !0), t.removeEventListener("focusin", r, !0), t.removeEventListener("touchend", i, !1); }; }
var SCROLL_ASSIST_SPEED = .3;
function getScrollData(t, e, n) { return calcScrollData((t.closest("ion-item,[ion-item]") || t).getBoundingClientRect(), e.getBoundingClientRect(), n, window.innerHeight); }
function calcScrollData(t, e, n, o) { var r = t.top, i = t.bottom, s = e.top + 10, l = Math.min(e.bottom, o - n) / 2 - i, a = s - r, c = Math.round(l < 0 ? -l : a > 0 ? -a : 0), u = Math.abs(c) / SCROLL_ASSIST_SPEED; return { scrollAmount: c, scrollDuration: Math.min(400, Math.max(150, u)), scrollPadding: n, inputSafeY: 4 - (r - s) }; }
function enableScrollAssist(t, e, n, o) { var r; var i = function (t) { r = pointerCoord(t), t.type; }, s = function (i) { if (i.type, !r)
    return; var s = pointerCoord(i); hasPointerMoved(6, r, s) || isFocused(e) || (i.preventDefault(), i.stopPropagation(), jsSetFocus(t, e, n, o)); }; return t.addEventListener("touchstart", i, !0), t.addEventListener("touchend", s, !0), function () { t.removeEventListener("touchstart", i, !0), t.removeEventListener("touchend", s, !0); }; }
function jsSetFocus(t, e, n, o) { var r = getScrollData(t, n, o); Math.abs(r.scrollAmount) < 4 ? e.focus() : (relocateInput(t, e, !0, r.inputSafeY), e.focus(), n.scrollByPoint(0, r.scrollAmount, r.scrollDuration).then(function () { relocateInput(t, e, !1, r.inputSafeY), e.focus(); })); }
function hasPointerMoved(t, e, n) { if (e && n) {
    var o = e.x - n.x, r = e.y - n.y;
    return o * o + r * r > t * t;
} return !1; }
var PADDING_TIMER_KEY = "$ionPaddingTimer";
function enableScrollPadding(t, e) { function n(t) { setScrollPadding(t.target, e); } function o(t) { setScrollPadding(t.target, 0); } return t.addEventListener("focusin", n), t.addEventListener("focusout", o), function () { t.removeEventListener("focusin", n), t.removeEventListener("focusout", o); }; }
function setScrollPadding(t, e) { if ("INPUT" !== t.tagName)
    return; if (t.parentElement && "ION-INPUT" === t.parentElement.tagName)
    return; var n = t.closest("ion-content"); if (null === n)
    return; var o = n[PADDING_TIMER_KEY]; o && clearTimeout(o), e > 0 ? n.style.setProperty("--keyboard-offset", e + "px") : n[PADDING_TIMER_KEY] = setTimeout(function () { n.style.setProperty("--keyboard-offset", "0px"); }, 120); }
var INPUT_BLURRING = !0, SCROLL_PADDING = !0;
function startInputShims(t, e) { var n = e.getNumber("keyboardHeight", 290), o = e.getBoolean("scrollAssist", !0), r = e.getBoolean("hideCaretOnScroll", !0), i = e.getBoolean("inputBlurring", !0), s = e.getBoolean("scrollPadding", !0), l = new WeakMap, a = new WeakMap; function c(t) { var e = (t.shadowRoot || t).querySelector("input"), i = t.closest("ion-content"); if (e) {
    if (i && r && !l.has(t)) {
        var n_2 = enableHideCaretOnScroll(t, e, i);
        l.set(t, n_2);
    }
    if (i && o && !a.has(t)) {
        var o_1 = enableScrollAssist(t, e, i, n);
        a.set(t, o_1);
    }
} } i && INPUT_BLURRING && enableInputBlurring(t), s && SCROLL_PADDING && enableScrollPadding(t, n); var u = Array.from(t.querySelectorAll("ion-input")); for (var _i = 0, u_1 = u; _i < u_1.length; _i++) {
    var t_1 = u_1[_i];
    c(t_1);
} t.body.addEventListener("ionInputDidLoad", function (t) { c(t.target); }), t.body.addEventListener("ionInputDidUnload", function (t) { !function (t) { if (r) {
    var e_1 = l.get(t);
    e_1 && e_1(), l.delete(t);
} if (o) {
    var e_2 = a.get(t);
    e_2 && e_2(), a.delete(t);
} }(t.target); }); }
export { startInputShims };
