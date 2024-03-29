/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as createColorClasses, g as createThemedClasses } from './chunk-50fe9317.js';

class Card {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    static get is() { return "ion-card"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ".sc-ion-card-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;--background:var(--ion-item-background-color, transparent);--color:var(--ion-text-color-step-150, #262626);margin:10px;border-radius:2px;font-size:14px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.ion-color.sc-ion-card-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title {color:currentColor}.sc-ion-card-md-s  img {display:block;width:100%}.sc-ion-card-md-s  ion-list {margin:0}"; }
    static get styleMode() { return "md"; }
}

class CardContent {
    hostData() {
        return {
            class: createThemedClasses(this.mode, 'card-content')
        };
    }
    static get is() { return "ion-card-content"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-card-content{display:block;position:relative}.card-content-md{padding:13px 16px;font-size:14px;line-height:1.5}.card-content-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.card-content-md h2{margin:2px 0;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin:2px 0;font-size:14px;font-weight:400}.card-content-md p{margin:0 0 2px;font-size:14px;font-weight:400;line-height:1.5}"; }
    static get styleMode() { return "md"; }
}

class CardHeader {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'card-header-translucent': this.translucent })
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return ":host{display:block;position:relative;padding:16px}"; }
    static get styleMode() { return "md"; }
}

class CardSubtitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            'role': 'heading',
            'aria-level': '3'
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ":host{display:block;position:relative;color:var(--color);--color:var(--ion-text-color-step-450, #737373);margin:0 0 8px;padding:0;font-size:14px}:host(.ion-color){color:var(--ion-color-base)}"; }
    static get styleMode() { return "md"; }
}

class CardTitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            'role': 'heading',
            'aria-level': '2'
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ":host{display:block;position:relative;color:var(--color);--color:var(--ion-text-color-step-150, #262626);margin:0;padding:0;font-size:24px;line-height:1.2}:host(.ion-color){color:var(--ion-color-base)}"; }
    static get styleMode() { return "md"; }
}

export { Card as IonCard, CardContent as IonCardContent, CardHeader as IonCardHeader, CardSubtitle as IonCardSubtitle, CardTitle as IonCardTitle };
