/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as createColorClasses, f as hostContext, e as openURL, g as createThemedClasses } from './chunk-50fe9317.js';

class Item {
    constructor() {
        this.itemStyles = new Map();
        this.button = false;
        this.detailIcon = 'ios-arrow-forward';
        this.disabled = false;
        this.type = 'button';
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const updatedKeys = Object.keys(ev.detail);
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        for (const key of updatedKeys) {
            const itemKey = `item-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            newStyles[itemKey] = newValue;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        Array.from(this.el.querySelectorAll('ion-button')).forEach(button => {
            if (!button.size) {
                button.size = 'small';
            }
        });
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        const childStyles = {};
        this.itemStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return {
            'ion-activatable': this.isClickable(),
            class: Object.assign({}, childStyles, createColorClasses(this.color), { [`item-lines-${this.lines}`]: !!this.lines, 'item-disabled': this.disabled, 'in-list': hostContext('ion-list', this.el), 'item': true })
        };
    }
    render() {
        const { href, detail, mode, win, state, detailIcon, routerDirection, type } = this;
        const clickable = this.isClickable();
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = TagType === 'button' ? { type } : { href };
        const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
        return (h(TagType, Object.assign({}, attrs, { class: "item-native", onClick: ev => openURL(win, href, ev, routerDirection) }),
            h("slot", { name: "start" }),
            h("div", { class: "item-inner" },
                h("div", { class: "input-wrapper" },
                    h("slot", null)),
                h("slot", { name: "end" }),
                showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" })),
            state && h("div", { class: "item-state" }),
            clickable && mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "button": {
            "type": Boolean,
            "attr": "button"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "detail": {
            "type": Boolean,
            "attr": "detail"
        },
        "detailIcon": {
            "type": String,
            "attr": "detail-icon"
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
        "lines": {
            "type": String,
            "attr": "lines"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "state": {
            "type": String,
            "attr": "state"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "ionStyle",
            "method": "itemStyle"
        }]; }
    static get style() { return ".sc-ion-item-md-h{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.activated.sc-ion-item-md-h{--background:var(--background-active)}.item-disabled.sc-ion-item-md-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-md{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a.sc-ion-item-md, button.sc-ion-item-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-state.sc-ion-item-md{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner.sc-ion-item-md{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right,0px) + var(--inner-padding-end)) var(--inner-padding-bottom) calc(var(--ion-safe-area-left,0px) + var(--inner-padding-start));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper.sc-ion-item-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-input.sc-ion-item-md-h, [vertical-align-top].sc-ion-item-md-h{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.sc-ion-item-md-s > ion-icon{font-size:1.6em}.sc-ion-item-md-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.item-label-floating.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md, .item-label-stacked.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select{--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-select{position:relative}.item-textarea.sc-ion-item-md-h{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-md-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}.sc-ion-item-md-h{--ion-color-base:var(--ion-item-background-color, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #f1f1f1);--ion-color-shade:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--inner-padding-end:8px;--padding-start:16px;font-size:16px;font-weight:400;text-transform:none}.item-interactive.sc-ion-item-md-h{--border-width:0 0 1px 0}.item-lines-full.sc-ion-item-md-h{--border-width:0 0 1px 0}.item-lines-inset.sc-ion-item-md-h{--inner-border-width:0 0 1px 0}.item-lines-inset.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--border-width:0}.item-lines-full.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--inner-border-width:0}.item-detail-icon.sc-ion-item-md{color:var(--detail-push-color);font-size:20px}.sc-ion-item-md-s > :not(.interactive)[slot=end], .sc-ion-item-md-s > :not(.interactive)[slot=start]{margin:2px 8px 2px 0}.sc-ion-item-md-s > ion-icon[slot=end], .sc-ion-item-md-s > ion-icon[slot=start]{margin-left:0;margin-top:3px;margin-bottom:2px}.sc-ion-item-md-s > ion-icon[slot=start]+.item-inner, .sc-ion-item-md-s > ion-icon[slot=start]+.item-interactive{margin-left:24px}.sc-ion-item-md-s > ion-avatar[slot=start], .sc-ion-item-md-s > ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.sc-ion-item-md-s > ion-avatar[slot=end], .sc-ion-item-md-s > ion-thumbnail[slot=end]{margin:8px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-md-s > .button-small-md{--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}.sc-ion-item-md-s > .button-small-md ion-icon[slot=icon-only]{padding:0}.sc-ion-item-md-s > ion-avatar{width:40px;height:40px}.sc-ion-item-md-s > ion-thumbnail{width:80px;height:80px}.sc-ion-item-md-h.item-radio .sc-ion-item-md-s > ion-label, .sc-ion-item-md-h.item-toggle .sc-ion-item-md-s > ion-label{margin-left:0}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-textarea, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-textarea{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-textarea{--padding-start:0}"; }
    static get styleMode() { return "md"; }
}

class ItemDivider {
    componentDidLoad() {
        Array.from(this.el.querySelectorAll('ion-button')).forEach(button => {
            if (!button.size) {
                button.size = 'small';
            }
        });
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("slot", { name: "start" }),
            h("div", { class: "item-divider-inner" },
                h("div", { class: "item-divider-wrapper" },
                    h("slot", null)),
                h("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-item-divider"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ".sc-ion-item-divider-md-h{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right,0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background-color:var(--ion-color-base);color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}[sticky].sc-ion-item-divider-md-h{position:-webkit-sticky;position:sticky;top:0}.item-divider-inner.sc-ion-item-divider-md{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper.sc-ion-item-divider-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}.sc-ion-item-divider-md-h{--ion-color-base:var(--ion-background-color, #fff);--ion-color-contrast:var(--ion-text-color-step-600, #999999);--padding-start:16px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);font-size:14px}[slot=end].sc-ion-item-divider-md-h, [slot=start].sc-ion-item-divider-md-h{margin:2px 8px 2px 0}.sc-ion-item-divider-md-s > ion-icon[slot=end], .sc-ion-item-divider-md-s > ion-icon[slot=start]{margin-left:0;margin-top:3px;margin-bottom:2px}.sc-ion-item-divider-md-s > ion-avatar[slot=start], .sc-ion-item-divider-md-s > ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.sc-ion-item-divider-md-s > ion-avatar[slot=end], .sc-ion-item-divider-md-s > ion-thumbnail[slot=end]{margin:8px}.sc-ion-item-divider-md-s > h1{margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-item-divider-md-s > h2{margin:2px 0;font-size:16px;font-weight:400}.sc-ion-item-divider-md-s > h3, h4.sc-ion-item-divider-md, h5.sc-ion-item-divider-md, h6.sc-ion-item-divider-md{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-item-divider-md-s > p{margin:0 0 2px;color:var(--ion-text-color-step-400,#666);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}"; }
    static get styleMode() { return "md"; }
}

class ItemGroup {
    hostData() {
        return {
            class: createThemedClasses(this.mode, 'item-group')
        };
    }
    static get is() { return "ion-item-group"; }
    static get style() { return "ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}"; }
    static get styleMode() { return "md"; }
}

class Label {
    componentDidLoad() {
        this.positionChanged();
    }
    positionChanged() {
        const position = this.position;
        this.ionStyle.emit({
            'label': true,
            [`label-${position}`]: !!position
        });
    }
    hostData() {
        const position = this.position;
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`label-${position}`]: !!position })
        };
    }
    static get is() { return "ion-label"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "position": {
            "type": String,
            "attr": "position",
            "watchCallbacks": ["positionChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-label-md-h{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;margin:11px 8px 11px 0}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal;font-size:14px;line-height:1.5}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-webkit-box-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-md-h{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;margin-left:0;margin-bottom:0}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.item-interactive.sc-ion-label-md-h, .item-interactive   .sc-ion-label-md-h{--ion-color-base:var(--ion-text-color-step-600, #999999)}.label-stacked.sc-ion-label-md-h{font-size:12px}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus   .label-stacked.sc-ion-label-md-h{color:var(--ion-color-primary,#3880ff)}.sc-ion-label-md-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin:2px 0;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-text-color-step-400,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"; }
    static get styleMode() { return "md"; }
}

class List {
    constructor() {
        this.inset = false;
    }
    async closeSlidingItems() {
        const item = this.el.querySelector('ion-item-sliding');
        if (item && item.closeOpened) {
            return item.closeOpened();
        }
        return false;
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'list'), { [`list-lines-${this.lines}`]: !!this.lines, 'list-inset': this.inset, [`list-${this.mode}-lines-${this.lines}`]: !!this.lines })
        };
    }
    static get is() { return "ion-list"; }
    static get properties() { return {
        "closeSlidingItems": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "inset": {
            "type": Boolean,
            "attr": "inset"
        },
        "lines": {
            "type": String,
            "attr": "lines"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-list{margin:0;padding:0;display:block;background:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin:-1px 0 16px}.list-md>.input:last-child::after{left:0}.list-md.list-inset{margin:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md .item-lines-full,.list-md-lines-full .item{--border-width:0 0 1px 0}.list-md .item-lines-inset,.list-md-lines-inset .item{--inner-border-width:0 0 1px 0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-inset{--border-width:0}"; }
    static get styleMode() { return "md"; }
}

class ListHeader {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-list-header"; }
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
    static get style() { return ".sc-ion-list-header-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0 0 13px;padding:0 0 0 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden;--background:transparent;--color:var(--ion-text-color-step-400, #666666);min-height:45px;font-size:14px}.ion-color.sc-ion-list-header-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}"; }
    static get styleMode() { return "md"; }
}

class Note {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-note"; }
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
    static get style() { return ".sc-ion-note-md-h{color:var(--color);font-family:var(--ion-font-family,inherit);--color:var(--ion-text-color-step-800, #cccccc)}.ion-color.sc-ion-note-md-h{color:var(--ion-color-base)}"; }
    static get styleMode() { return "md"; }
}

class SkeletonText {
    constructor() {
        this.width = '100%';
    }
    render() {
        return h("span", { style: { width: this.width } }, "\u00A0");
    }
    static get is() { return "ion-skeleton-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return ".sc-ion-skeleton-text-md-h{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-text-color, #000)}span.sc-ion-skeleton-text-md{display:inline-block;font-size:8px;background:var(--background);opacity:.1}"; }
    static get styleMode() { return "md"; }
}

export { Item as IonItem, ItemDivider as IonItemDivider, ItemGroup as IonItemGroup, Label as IonLabel, List as IonList, ListHeader as IonListHeader, Note as IonNote, SkeletonText as IonSkeletonText };
