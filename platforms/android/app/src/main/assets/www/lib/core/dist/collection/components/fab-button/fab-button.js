import { createColorClasses, hostContext, openURL } from '../../utils/theme';
export class FabButton {
    constructor() {
        this.activated = false;
        this.disabled = false;
        this.translucent = false;
        this.show = false;
    }
    hostData() {
        const inList = hostContext('ion-fab-list', this.el);
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(this.color), { 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && this.translucent, 'fab-button-close-active': this.activated, 'fab-button-show': this.show, 'fab-button-disabled': this.disabled, 'fab-button-translucent': this.translucent })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        return (h(TagType, { class: "fab-button-native", disabled: this.disabled, href: this.href, onClick: ev => openURL(this.win, this.href, ev, this.routerDirection) },
            h("span", { class: "fab-button-close-icon" },
                h("ion-icon", { name: "close", lazy: false })),
            h("span", { class: "fab-button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-fab-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "type": Boolean,
            "attr": "activated"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "show": {
            "type": Boolean,
            "attr": "show"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-fab-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-fab-button:**/"; }
}
