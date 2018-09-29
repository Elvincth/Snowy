import * as tslib_1 from '../polyfills/tslib.js';
var lastId = 0;
function createOverlay(element, opts) {
    var doc = element.ownerDocument;
    connectListeners(doc);
    Object.assign(element, opts);
    element.classList.add('ion-page-invisible');
    var overlayIndex = lastId++;
    element.overlayIndex = overlayIndex;
    if (!element.hasAttribute('id')) {
        element.id = "ion-overlay-" + overlayIndex;
    }
    getAppRoot(doc).appendChild(element);
    return element.componentOnReady();
}
function closeTopOverlay(doc) {
    var lastOverlay = getOverlay(doc);
    if (lastOverlay && lastOverlay.backdropDismiss) {
        return lastOverlay.dismiss(undefined, BACKDROP);
    }
    return Promise.resolve();
}
function connectListeners(doc) {
    if (lastId === 0) {
        lastId = 1;
        doc.addEventListener('ionBackButton', function (ev) {
            ev.detail.register(100, function () { return closeTopOverlay(doc); });
        });
        doc.addEventListener('keyup', function (ev) {
            if (ev.key === 'Escape') {
                closeTopOverlay(doc);
            }
        });
    }
}
function dismissOverlay(doc, data, role, overlayTag, id) {
    var overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
}
function getOverlays(doc, overlayTag) {
    var overlays = Array.from(getAppRoot(doc).children);
    if (overlayTag === undefined) {
        return overlays;
    }
    overlayTag = overlayTag.toUpperCase();
    return overlays.filter(function (c) { return c.tagName === overlayTag; });
}
function getOverlay(doc, overlayTag, id) {
    var overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(function (o) { return o.id === id; });
}
function present(overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var animationBuilder, completed;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (overlay.presented) {
                        return [2 /*return*/];
                    }
                    overlay.presented = true;
                    overlay.willPresent.emit();
                    animationBuilder = (overlay.enterAnimation)
                        ? overlay.enterAnimation
                        : overlay.config.get(name, overlay.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
                    return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                case 1:
                    completed = _a.sent();
                    if (completed) {
                        overlay.didPresent.emit();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function dismiss(overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var animationBuilder, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!overlay.presented) {
                        return [2 /*return*/, false];
                    }
                    overlay.presented = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    overlay.willDismiss.emit({ data: data, role: role });
                    animationBuilder = (overlay.leaveAnimation)
                        ? overlay.leaveAnimation
                        : overlay.config.get(name, overlay.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
                    return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                case 2:
                    _a.sent();
                    overlay.didDismiss.emit({ data: data, role: role });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    overlay.el.remove();
                    return [2 /*return*/, true];
            }
        });
    });
}
function getAppRoot(doc) {
    return doc.querySelector('ion-app') || doc.body;
}
function overlayAnimation(overlay, animationBuilder, baseEl, opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var aniRoot, animation, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!overlay.animation) return [3 /*break*/, 1];
                    overlay.animation.destroy();
                    overlay.animation = undefined;
                    return [2 /*return*/, false];
                case 1:
                    baseEl.classList.remove('ion-page-invisible');
                    aniRoot = baseEl.shadowRoot || overlay.el;
                    _a = overlay;
                    return [4 /*yield*/, overlay.animationCtrl.create(animationBuilder, aniRoot, opts)];
                case 2:
                    animation = _a.animation = _b.sent();
                    overlay.animation = animation;
                    if (!overlay.animated) {
                        animation.duration(0);
                    }
                    if (overlay.keyboardClose) {
                        animation.beforeAddWrite(function () {
                            var activeElement = baseEl.ownerDocument.activeElement;
                            if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                                activeElement.blur();
                            }
                        });
                    }
                    return [4 /*yield*/, animation.playAsync()];
                case 3:
                    _b.sent();
                    animation.destroy();
                    overlay.animation = undefined;
                    return [2 /*return*/, animation.hasCompleted];
            }
        });
    });
}
function eventMethod(element, eventName) {
    var resolve;
    var promise = new Promise(function (r) { return resolve = r; });
    onceEvent(element, eventName, function (event) {
        resolve(event.detail);
    });
    return promise;
}
function onceEvent(element, eventName, callback) {
    var handler = function (ev) {
        element.removeEventListener(eventName, handler);
        callback(ev);
    };
    element.addEventListener(eventName, handler);
}
function isCancel(role) {
    return role === 'cancel' || role === BACKDROP;
}
var BACKDROP = 'backdrop';
function hapticSelection() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}
function hapticSelectionStart() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
}
function hapticSelectionChanged() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
}
function hapticSelectionEnd() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
}
export { BACKDROP as a, dismiss as b, eventMethod as c, isCancel as d, present as e, createOverlay as f, dismissOverlay as g, getOverlay as h, hapticSelectionChanged as i, hapticSelectionEnd as j, hapticSelectionStart as k, hapticSelection as l };
