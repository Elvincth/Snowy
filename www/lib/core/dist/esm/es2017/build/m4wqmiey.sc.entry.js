/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as createColorClasses, e as openURL } from './chunk-50fe9317.js';

class Anchor {
    hostData() {
        return {
            class: createColorClasses(this.color),
            'ion-activatable': true
        };
    }
    render() {
        return (h("a", { href: this.href, onClick: ev => openURL(this.win, this.href, ev, this.routerDirection) },
            h("slot", null)));
    }
    static get is() { return "ion-anchor"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return ".sc-ion-anchor-h{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}.ion-color.sc-ion-anchor-h{color:var(--ion-color-base)}a.sc-ion-anchor{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; }
}

class BackButton {
    async onClick(ev) {
        const nav = this.el.closest('ion-nav');
        ev.preventDefault();
        if (nav && await nav.canGoBack()) {
            return nav.pop({ skipIfBusy: true });
        }
        return openURL(this.win, this.defaultHref, ev, 'back');
    }
    hostData() {
        const showBackButton = this.defaultHref !== undefined;
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'button': true, 'show-back-button': showBackButton }),
            'ion-activatable': true,
        };
    }
    render() {
        const backButtonIcon = this.icon || this.config.get('backButtonIcon', 'arrow-back');
        const backButtonText = this.text !== undefined ? this.text : this.config.get('backButtonText', 'Back');
        return (h("button", { type: "button", class: "back-button-native", onClick: ev => this.onClick(ev) },
            h("span", { class: "back-button-inner" },
                backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }),
                this.mode === 'ios' && backButtonText && h("span", { class: "button-text" }, backButtonText),
                this.mode === 'md' && h("ion-ripple-effect", null))));
    }
    static get is() { return "ion-back-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "defaultHref": {
            "type": String,
            "attr": "default-href"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return ".sc-ion-back-button-ios-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:var(--ion-color-primary, #3880ff)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header   .sc-ion-back-button-ios-h{display:block}.back-button-native.sc-ion-back-button-ios{font-family:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:0;min-height:32px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background-color:transparent;font-size:17px;line-height:1;overflow:visible;z-index:99}.back-button-inner.sc-ion-back-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.activated.sc-ion-back-button-ios{opacity:.4}ion-icon.sc-ion-back-button-ios{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}"; }
    static get styleMode() { return "ios"; }
}

export { Anchor as IonAnchor, BackButton as IonBackButton };
