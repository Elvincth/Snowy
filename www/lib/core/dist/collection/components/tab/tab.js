import { attachComponent } from '../../utils/framework-delegate';
export class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    componentWillLoad() {
        if (this.name === undefined && typeof this.component === 'string') {
            this.name = this.component;
        }
        if (Build.isDev) {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
    }
    onPropChanged() {
        this.ionTabMutated.emit();
    }
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    }
    hostData() {
        const { btnId, active, component } = this;
        return {
            'aria-labelledby': btnId,
            'aria-hidden': !active ? 'true' : null,
            'role': 'tabpanel',
            'class': {
                'ion-page': component === undefined,
                'tab-hidden': !active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "mutable": true
        },
        "badge": {
            "type": String,
            "attr": "badge",
            "watchCallbacks": ["onPropChanged"]
        },
        "badgeColor": {
            "type": String,
            "attr": "badge-color",
            "watchCallbacks": ["onPropChanged"]
        },
        "btnId": {
            "type": String,
            "attr": "btn-id"
        },
        "component": {
            "type": String,
            "attr": "component"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["onPropChanged"]
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "watchCallbacks": ["onPropChanged"]
        },
        "icon": {
            "type": String,
            "attr": "icon",
            "watchCallbacks": ["onPropChanged"]
        },
        "label": {
            "type": String,
            "attr": "label",
            "watchCallbacks": ["onPropChanged"]
        },
        "name": {
            "type": String,
            "attr": "name",
            "mutable": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "watchCallbacks": ["selectedChanged"]
        },
        "setActive": {
            "method": true
        },
        "show": {
            "type": Boolean,
            "attr": "show",
            "watchCallbacks": ["onPropChanged"]
        },
        "tabsHideOnSubPages": {
            "type": Boolean,
            "attr": "tabs-hide-on-sub-pages"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionTabMutated",
            "method": "ionTabMutated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-tab:**/"; }
}
