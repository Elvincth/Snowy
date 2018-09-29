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
function attachComponent(t, n, e, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (t)
                    return [2 /*return*/, t.attachViewToDom(n, e, o, i)];
                if ("string" != typeof e && !(e instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                a = "string" == typeof e ? n.ownerDocument.createElement(e) : e;
                i && i.forEach(function (t) { return a.classList.add(t); }), o && Object.assign(a, o), n.appendChild(a);
                _a = a.componentOnReady;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, a.componentOnReady()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2: return [2 /*return*/, (_a, a)];
        }
    }); });
}
function detachComponent(t, n) { if (n) {
    if (t) {
        var e = n.parentElement;
        return t.removeViewFromDom(e, n);
    }
    n.remove();
} return Promise.resolve(); }
function hapticAvailable() { return !!window.TapticEngine; }
function hapticSelection() { var t = window.TapticEngine; t && t.selection(); }
function hapticSelectionStart() { var t = window.TapticEngine; t && t.gestureSelectionStart(); }
function hapticSelectionChanged() { var t = window.TapticEngine; t && t.gestureSelectionChanged(); }
function hapticSelectionEnd() { var t = window.TapticEngine; t && t.gestureSelectionEnd(); }
function hapticNotification(t) { var n = window.TapticEngine; n && n.notification(t); }
function hapticImpact(t) { var n = window.TapticEngine; n && n.impact(t); }
function hostContext(t, n) { return null !== n.closest(t); }
function createColorClasses(t) { var _a; return null != t ? (_a = { "ion-color": !0 }, _a["ion-color-" + t] = !0, _a) : void 0; }
function createThemedClasses(t, n) { var _a; return _a = {}, _a[n] = !0, _a[n + "-" + t] = !!t, _a; }
function getClassList(t) { return void 0 !== t ? (Array.isArray(t) ? t : t.split(" ")).filter(function (t) { return null != t; }).map(function (t) { return t.trim(); }).filter(function (t) { return "" !== t; }) : []; }
function getClassMap(t) { var n = {}; return getClassList(t).forEach(function (t) { return n[t] = !0; }), n; }
function openURL(t, n, e, i) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(null != n && "#" !== n[0] && -1 === n.indexOf("://"))) return [3 /*break*/, 2];
                o = t.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                null != e && e.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(n, i))];
            case 2: return [2 /*return*/, !1];
        }
    }); });
}
export { attachComponent as a, detachComponent as b, hapticSelectionChanged as c, hapticSelectionEnd as d, hapticSelectionStart as e, hapticSelection as f, hapticAvailable as g, hapticNotification as h, hapticImpact as i, getClassMap as j, createColorClasses as k, openURL as l, createThemedClasses as m, hostContext as n };
