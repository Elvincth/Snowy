import { c as now } from './chunk-e7816c0b.js';
var Backdrop = /** @class */ (function () {
    function Backdrop() {
        this.lastClick = -10000;
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
    }
    Backdrop.prototype.componentDidLoad = function () {
        registerBackdrop(this.doc, this);
    };
    Backdrop.prototype.componentDidUnload = function () {
        unregisterBackdrop(this.doc, this);
    };
    Backdrop.prototype.onTouchStart = function (ev) {
        this.lastClick = now(ev);
        this.emitTap(ev);
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap(ev);
        }
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.hostData = function () {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    };
    Object.defineProperty(Backdrop, "is", {
        get: function () { return "ion-backdrop"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "properties", {
        get: function () {
            return {
                "doc": {
                    "context": "document"
                },
                "stopPropagation": {
                    "type": Boolean,
                    "attr": "stop-propagation"
                },
                "tappable": {
                    "type": Boolean,
                    "attr": "tappable"
                },
                "visible": {
                    "type": Boolean,
                    "attr": "visible"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "events", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "ionBackdropTap",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "listeners", {
        get: function () {
            return [{
                    "name": "touchstart",
                    "method": "onTouchStart",
                    "capture": true
                }, {
                    "name": "mousedown",
                    "method": "onMouseDown",
                    "capture": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ".sc-ion-backdrop-ios-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}.backdrop-hide.sc-ion-backdrop-ios-h{background:0 0}.backdrop-no-tappable.sc-ion-backdrop-ios-h{cursor:auto}.sc-ion-backdrop-ios-h{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Backdrop, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());
var BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
var activeBackdrops = new Set();
function registerBackdrop(doc, backdrop) {
    activeBackdrops.add(backdrop);
    doc.body.classList.add(BACKDROP_NO_SCROLL);
}
function unregisterBackdrop(doc, backdrop) {
    activeBackdrops.delete(backdrop);
    if (activeBackdrops.size === 0) {
        doc.body.classList.remove(BACKDROP_NO_SCROLL);
    }
}
export { Backdrop as IonBackdrop };
