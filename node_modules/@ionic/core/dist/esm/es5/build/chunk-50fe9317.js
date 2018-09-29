import * as tslib_1 from '../polyfills/tslib.js';
function attachComponent(delegate, container, component, cssClasses, componentProps) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var el;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (delegate) {
                        return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                    }
                    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                        throw new Error('framework delegate is missing');
                    }
                    el = (typeof component === 'string')
                        ? container.ownerDocument.createElement(component)
                        : component;
                    if (cssClasses) {
                        cssClasses.forEach(function (c) { return el.classList.add(c); });
                    }
                    if (componentProps) {
                        Object.assign(el, componentProps);
                    }
                    container.appendChild(el);
                    if (!el.componentOnReady) return [3 /*break*/, 2];
                    return [4 /*yield*/, el.componentOnReady()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, el];
            }
        });
    });
}
function detachComponent(delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
}
function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
function createColorClasses(color) {
    var _a;
    return (color != null) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
}
function createThemedClasses(mode, name) {
    var _a;
    return _a = {},
        _a[name] = true,
        _a[name + "-" + mode] = !!mode,
        _a;
}
function getClassList(classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
}
function getClassMap(classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
}
function openURL(win, url, ev, direction) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var router;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(url != null && url[0] !== '#' && url.indexOf('://') === -1)) return [3 /*break*/, 2];
                    router = win.document.querySelector('ion-router');
                    if (!router) return [3 /*break*/, 2];
                    if (ev != null) {
                        ev.preventDefault();
                    }
                    return [4 /*yield*/, router.componentOnReady()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, router.push(url, direction)];
                case 2: return [2 /*return*/, false];
            }
        });
    });
}
export { attachComponent as a, detachComponent as b, getClassMap as c, createColorClasses as d, openURL as e, hostContext as f, createThemedClasses as g };
