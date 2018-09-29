/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { l as hapticSelection } from './chunk-12e0f551.js';
import { e as deferEvent, f as renderHiddenInput } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext } from './chunk-50fe9317.js';

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    componentWillLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
    }
    async componentDidLoad() {
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: 'toggle',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    onStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    }
    onMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
    }
    onChange() {
        this.checked = !this.checked;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'toggle-activated': this.activated, 'toggle-checked': this.checked, 'toggle-disabled': this.disabled, 'toggle-key': this.keyFocus, 'interactive': true })
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return [
            h("div", { class: "toggle-icon" },
                h("div", { class: "toggle-inner" })),
            h("input", { type: "checkbox", onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "state": true
        },
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true,
            "watchCallbacks": ["checkedChanged"]
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "queue": {
            "context": "queue"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
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
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-item-background-color, var(--ion-background-color, #fff));--background-checked:var(--ion-color-primary, #3880ff);--handle-background:var(--ion-item-background-color, var(--ion-background-color, #fff));--handle-background-checked:var(--ion-item-background-color, var(--ion-background-color, #fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:0}:host(.toggle-disabled){pointer-events:none;opacity:.3}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-contrast)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-background-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:\"\"}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host(.in-item[slot]){margin:0;padding:6px 8px 5px 16px}:host(.in-item[slot=start]){padding:6px 16px 5px 0}"; }
    static get styleMode() { return "ios"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

export { Toggle as IonToggle };
