import { createColorClasses } from '../../utils/theme';
export class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = 'icon-top';
        this.placement = 'bottom';
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.keyboardVisible = true;
        }
    }
    componentDidLoad() {
        this.updateHighlight();
    }
    getSelectedButton() {
        return this.el.shadowRoot.querySelector('.tab-btn-selected');
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.shadowRoot.querySelector('.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const { color, translucent, layout, placement, keyboardVisible } = this;
        return {
            role: 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), { 'tabbar-translucent': translucent, [`layout-${layout}`]: true, [`placement-${placement}`]: true, 'tabbar-hidden': keyboardVisible })
        };
    }
    renderTabButton(tab) {
        const { icon, label, disabled, badge, badgeColor, href } = tab;
        const selected = tab === this.selectedTab;
        const hasLabel = label !== undefined;
        const hasIcon = icon !== undefined;
        return (h("a", { role: "tab", "ion-activatable": true, "aria-selected": selected ? 'true' : null, href: href || '#', class: {
                'tab-btn': true,
                'tab-btn-selected': selected,
                'tab-btn-has-label': hasLabel,
                'tab-btn-has-icon': hasIcon,
                'tab-btn-has-label-only': hasLabel && !hasIcon,
                'tab-btn-has-icon-only': hasIcon && !hasLabel,
                'tab-btn-has-badge': badge !== undefined,
                'tab-btn-disabled': disabled,
                'tab-btn-hidden': !tab.show
            }, onClick: ev => {
                if (!tab.disabled) {
                    this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } },
            icon && h("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }),
            label && h("span", { class: "tab-btn-text" }, label),
            badge && h("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    render() {
        return [
            this.tabs.map(tab => this.renderTabButton(tab)),
            this.highlight && h("div", { class: "animated tabbar-highlight" })
        ];
    }
    static get is() { return "ion-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canScrollLeft": {
            "state": true
        },
        "canScrollRight": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "keyboardVisible": {
            "state": true
        },
        "layout": {
            "type": String,
            "attr": "layout"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "placement": {
            "type": String,
            "attr": "placement"
        },
        "queue": {
            "context": "queue"
        },
        "selectedTab": {
            "type": "Any",
            "attr": "selected-tab",
            "watchCallbacks": ["updateHighlight"]
        },
        "tabs": {
            "type": "Any",
            "attr": "tabs"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get events() { return [{
            "name": "ionTabbarClick",
            "method": "ionTabbarClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:keyboardWillHide",
            "method": "onKeyboardWillHide"
        }, {
            "name": "body:keyboardWillShow",
            "method": "onKeyboardWillShow"
        }, {
            "name": "window:resize",
            "method": "updateHighlight",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-tabbar:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-tabbar:**/"; }
}
