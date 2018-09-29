function reorderArray(t, e) { var n = t[e.from]; return t.splice(e.from, 1), t.splice(e.to, 0, n), t; }
function rIC(t) { "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t, 32); }
function hasShadowDom(t) { return !!t.shadowRoot && !!t.attachShadow; }
function renderHiddenInput(t, e, n, i) { if (hasShadowDom(t)) {
    var r = t.querySelector("input.aux-input");
    r || ((r = t.ownerDocument.createElement("input")).type = "hidden", r.classList.add("aux-input"), t.appendChild(r)), r.disabled = i, r.name = e, r.value = n;
} }
function clamp(t, e, n) { return Math.max(t, Math.min(e, n)); }
function assert(t, e) { if (!t) {
    var t_1 = "ASSERT: " + e;
    throw console.error(t_1), new Error(t_1);
} }
function now(t) { return t.timeStamp || Date.now(); }
function pointerCoord(t) { if (t) {
    var e = t.changedTouches;
    if (e && e.length > 0) {
        var t_2 = e[0];
        return { x: t_2.clientX, y: t_2.clientY };
    }
    if (void 0 !== t.pageX)
        return { x: t.pageX, y: t.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(t, e) { var n = "rtl" === t.document.dir; switch (e) {
    case "start": return n;
    case "end": return !n;
    default: throw new Error("\"" + e + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(t) { return debounceEvent(t, 0); }
function debounceEvent(t, e) { var n = t._original || t; return { _original: t, emit: debounce(n.emit.bind(n), e) }; }
function debounce(t, e) {
    if (e === void 0) { e = 0; }
    var n;
    return function () {
        var i = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            i[_i] = arguments[_i];
        }
        clearTimeout(n), n = setTimeout.apply(void 0, [t, e].concat(i));
    };
}
var PLATFORMS_MAP = { ipad: isIpad, iphone: isIphone, ios: isIOS, android: isAndroid, phablet: isPhablet, tablet: isTablet, cordova: isCordova, capacitor: isCapacitorNative, electron: isElectron, pwa: isPWA, mobile: isMobile, desktop: isDesktop, hybrid: isHybrid };
function getPlatforms(t) { return setupPlatforms(t); }
function isPlatform(t, e) { return getPlatforms(t).includes(e); }
function setupPlatforms(t) { t.Ionic = t.Ionic || {}; var e = t.Ionic.platforms; if (null == e) {
    e = t.Ionic.platforms = detectPlatforms(t);
    var n_1 = t.document.documentElement.classList;
    e.forEach(function (t) { return n_1.add("plt-" + t); });
} return e; }
function detectPlatforms(t) { return Object.keys(PLATFORMS_MAP).filter(function (e) { return PLATFORMS_MAP[e](t); }); }
function isIpad(t) { return testUserAgent(t, /iPad/i); }
function isIphone(t) { return testUserAgent(t, /iPhone/i); }
function isIOS(t) { return testUserAgent(t, /iPad|iPhone|iPod/i); }
function isAndroid(t) { return testUserAgent(t, /android|sink/i); }
function isPhablet(t) { var e = t.innerWidth, n = t.innerHeight, i = Math.min(e, n), r = Math.max(e, n); return i > 390 && i < 520 && r > 620 && r < 800; }
function isTablet(t) { var e = t.innerWidth, n = t.innerHeight, i = Math.min(e, n), r = Math.max(e, n); return i > 460 && i < 820 && r > 780 && r < 1400; }
function isMobile(t) { return matchMedia(t, "(any-pointer:coarse)"); }
function isDesktop(t) { return !isMobile(t); }
function isHybrid(t) { return isCordova(t) || isCapacitorNative(t); }
function isCordova(t) { var e = t; return !!(e.cordova || e.phonegap || e.PhoneGap); }
function isCapacitorNative(t) { var e = t.Capacitor; return !(!e || !e.isNative); }
function isElectron(t) { return testUserAgent(t, /electron/); }
function isPWA(t) { return t.matchMedia("(display-mode: standalone)").matches; }
function testUserAgent(t, e) { return e.test(t.navigator.userAgent); }
function matchMedia(t, e) { return t.matchMedia(e).matches; }
export { rIC as a, now as b, hasShadowDom as c, deferEvent as d, renderHiddenInput as e, debounceEvent as f, isEndSide as g, assert as h, clamp as i, debounce as j, pointerCoord as k, reorderArray as l, isPlatform as m, PLATFORMS_MAP as n, getPlatforms as o, setupPlatforms as p };
