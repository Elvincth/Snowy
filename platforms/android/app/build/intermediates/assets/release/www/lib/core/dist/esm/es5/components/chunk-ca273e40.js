var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 0;
function createOverlay(e, t) { var n = e.ownerDocument; connectListeners(n), Object.assign(e, t), e.classList.add("ion-page-invisible"); var i = lastId++; return e.overlayIndex = i, e.hasAttribute("id") || (e.id = "ion-overlay-" + i), getAppRoot(n).appendChild(e), n.body.addEventListener("ionBackButton", function (e) { e.detail.register(100, function () { return closeTopOverlay(n); }); }), n.body.addEventListener("keyup", function (e) { "Escape" === e.key && closeTopOverlay(n); }), e.componentOnReady(); }
function closeTopOverlay(e) { var t = getOverlay(e); return t && t.backdropDismiss ? t.dismiss(null, BACKDROP) : Promise.resolve(); }
function connectListeners(e) { 0 === lastId && (lastId = 1, e.body.addEventListener("keyup", function (t) { if ("Escape" === t.key) {
    var t_1 = getOverlay(e);
    t_1 && t_1.backdropDismiss && t_1.dismiss("backdrop");
} })); }
function dismissOverlay(e, t, n, i, o) { var s = getOverlay(e, i, o); return s ? s.dismiss(t, n) : Promise.reject("overlay does not exist"); }
function getOverlays(e, t) { var n = Array.from(getAppRoot(e).children); return void 0 === t ? n : (t = t.toUpperCase(), n.filter(function (e) { return e.tagName === t; })); }
function getOverlay(e, t, n) { var i = getOverlays(e, t); return void 0 === n ? i[i.length - 1] : i.find(function (e) { return e.id === n; }); }
function present(e, t, n, i, o) {
    return __awaiter(this, void 0, void 0, function () { var s; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                s = e.enterAnimation ? e.enterAnimation : e.config.get(t, "ios" === e.mode ? n : i);
                return [4 /*yield*/, overlayAnimation(e, s, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, t, n, i, o, s, a) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/, !1];
                e.presented = !1, e.willDismiss.emit({ data: t, role: n });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : s);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, a)];
            case 1: return [2 /*return*/, (_a.sent(), e.didDismiss.emit({ data: t, role: n }), e.el.remove(), !0)];
        }
    }); });
}
function getAppRoot(e) { return e.querySelector("ion-app") || e.body; }
function overlayAnimation(e, t, n, i) {
    return __awaiter(this, void 0, void 0, function () { var o, s, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.animation && (e.animation.destroy(), e.animation = void 0), n.classList.remove("ion-page-invisible");
                o = n.shadowRoot || e.el;
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(t, o, i)];
            case 1:
                s = _a.animation = _b.sent();
                e.animation = s, e.animated || s.duration(0), e.keyboardClose && s.beforeAddWrite(function () { var e = n.ownerDocument.activeElement; e && e.matches("input, ion-input, ion-textarea") && e.blur(); });
                return [4 /*yield*/, s.playAsync()];
            case 2:
                _b.sent(), s.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, t) { var n; var i = new Promise(function (e) { return n = e; }); return onceEvent(e, t, function (e) { n(e.detail); }), i; }
function onceEvent(e, t, n) { var i = function (o) { e.removeEventListener(t, i), n(o); }; e.addEventListener(t, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";
export { BACKDROP as a, dismiss as b, eventMethod as c, isCancel as d, present as e, createOverlay as f, dismissOverlay as g, getOverlay as h };
