import { hasShadowDom } from '../../utils/helpers';
import { createColorClasses, openURL } from '../../utils/theme';
export class Button {
    constructor() {
        this.keyFocus = false;
        this.buttonType = 'button';
        this.disabled = false;
        this.strong = false;
        this.type = 'button';
    }
    componentWillLoad() {
        if (this.fill === undefined) {
            this.fill = this.el.closest('ion-buttons') ? 'clear' : 'solid';
        }
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    onClick(ev) {
        if (this.type === 'button') {
            return openURL(this.win, this.href, ev, this.routerDirection);
        }
        else if (hasShadowDom(this.el)) {
            const form = this.el.closest('form');
            if (form) {
                ev.preventDefault();
                ev.stopPropagation();
                const fakeButton = document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
        return Promise.resolve(false);
    }
    hostData() {
        const { buttonType, color, expand, fill, mode, shape, size, strong } = this;
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(color), getButtonClassMap(buttonType, mode), getButtonTypeClassMap(buttonType, expand, mode), getButtonTypeClassMap(buttonType, size, mode), getButtonTypeClassMap(buttonType, shape, mode), getButtonTypeClassMap(buttonType, strong ? 'strong' : undefined, mode), getButtonTypeClassMap(buttonType, fill, mode), { 'focused': this.keyFocus })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), onClick: this.onClick.bind(this) }),
            h("span", { class: "button-inner" },
                h("slot", { name: "icon-only" }),
                h("slot", { name: "start" }),
                h("slot", null),
                h("slot", { name: "end" })),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "buttonType": {
            "type": String,
            "attr": "button-type",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "el": {
            "elementRef": true
        },
        "expand": {
            "type": String,
            "attr": "expand",
            "reflectToAttr": true
        },
        "fill": {
            "type": String,
            "attr": "fill",
            "reflectToAttr": true,
            "mutable": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "shape": {
            "type": String,
            "attr": "shape",
            "reflectToAttr": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "strong": {
            "type": Boolean,
            "attr": "strong"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-button:**/"; }
}
function getButtonClassMap(buttonType, mode) {
    if (buttonType === undefined) {
        return {};
    }
    return {
        [buttonType]: true,
        [`${buttonType}-${mode}`]: true
    };
}
function getButtonTypeClassMap(buttonType, type, mode) {
    if (type === undefined) {
        return {};
    }
    return {
        [`${buttonType}-${type}`]: true,
        [`${buttonType}-${type}-${mode}`]: true
    };
}
