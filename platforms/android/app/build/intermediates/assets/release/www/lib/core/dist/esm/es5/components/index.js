export { l as reorderArray, a as rIC, c as hasShadowDom, e as renderHiddenInput, i as clamp, h as assert, b as now, k as pointerCoord, g as isEndSide, d as deferEvent, f as debounceEvent, j as debounce, n as PLATFORMS_MAP, o as getPlatforms, m as isPlatform, p as setupPlatforms } from "./chunk-276e047f.js";
export { g as hapticAvailable, f as hapticSelection, e as hapticSelectionStart, c as hapticSelectionChanged, d as hapticSelectionEnd, h as hapticNotification, i as hapticImpact, a as attachComponent, b as detachComponent } from "./chunk-a4253575.js";
function setupConfig(o) { var n = window, t = n.Ionic; if (!t || !t.config || "Object" === t.config.constructor.name)
    return n.Ionic = n.Ionic || {}, n.Ionic.config = Object.assign({}, n.Ionic.config, o), n.Ionic.config; console.error("ionic config was already initialized"); }
var IONIC_PREFIX = "ionic:", IONIC_SESSION_KEY = "ionic-persist-config";
function configFromSession() { try {
    var o = window.sessionStorage.getItem(IONIC_SESSION_KEY);
    return null !== o ? JSON.parse(o) : {};
}
catch (o) {
    return {};
} }
function saveConfig(o) { try {
    window.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(o));
}
catch (o) {
    return;
} }
function configFromURL() { var o = {}; return window.location.search.slice(1).split("&").map(function (o) { return o.split("="); }).map(function (_a) {
    var o = _a[0], n = _a[1];
    return [decodeURIComponent(o), decodeURIComponent(n)];
}).filter(function (_a) {
    var o = _a[0];
    return startsWith(o, IONIC_PREFIX);
}).map(function (_a) {
    var o = _a[0], n = _a[1];
    return [o.slice(IONIC_PREFIX.length), n];
}).forEach(function (_a) {
    var n = _a[0], t = _a[1];
    o[n] = t;
}), o; }
function startsWith(o, n) { return o.substr(0, n.length) === n; }
export { setupConfig, configFromSession, saveConfig, configFromURL };
