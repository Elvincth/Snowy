/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { c as now } from './chunk-e7816c0b.js';

class Backdrop {
    constructor() {
        this.lastClick = -10000;
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
    }
    componentDidLoad() {
        registerBackdrop(this.doc, this);
    }
    componentDidUnload() {
        unregisterBackdrop(this.doc, this);
    }
    onTouchStart(ev) {
        this.lastClick = now(ev);
        this.emitTap(ev);
    }
    onMouseDown(ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap(ev);
        }
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    hostData() {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    }
    static get is() { return "ion-backdrop"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get events() { return [{
            "name": "ionBackdropTap",
            "method": "ionBackdropTap",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "touchstart",
            "method": "onTouchStart",
            "capture": true
        }, {
            "name": "mousedown",
            "method": "onMouseDown",
            "capture": true
        }]; }
    static get style() { return ".sc-ion-backdrop-ios-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}.backdrop-hide.sc-ion-backdrop-ios-h{background:0 0}.backdrop-no-tappable.sc-ion-backdrop-ios-h{cursor:auto}.sc-ion-backdrop-ios-h{background-color:var(--ion-backdrop-color,#000)}"; }
    static get styleMode() { return "ios"; }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const activeBackdrops = new Set();
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
