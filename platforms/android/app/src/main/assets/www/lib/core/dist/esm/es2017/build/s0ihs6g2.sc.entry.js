/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { j as clamp, g as debounceEvent, e as deferEvent } from './chunk-e7816c0b.js';
import { d as createColorClasses, f as hostContext } from './chunk-50fe9317.js';

class Range {
    constructor() {
        this.noUpdate = false;
        this.hasFocus = false;
        this.ratioA = 0;
        this.ratioB = 0;
        this.debounce = 0;
        this.name = '';
        this.dualKnobs = false;
        this.min = 0;
        this.max = 100;
        this.pin = false;
        this.snaps = false;
        this.step = 1;
        this.disabled = false;
        this.value = 0;
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    minChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    maxChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
        this.emitStyle();
    }
    valueChanged(value) {
        if (!this.noUpdate) {
            this.updateRatio();
        }
        this.ionChange.emit({ value });
    }
    componentWillLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
        this.updateRatio();
        this.debounceChanged();
        this.emitStyle();
    }
    async componentDidLoad() {
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.rangeSlider,
            queue: this.queue,
            gestureName: 'range',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.gesture.setDisabled(this.disabled);
    }
    keyChng(ev) {
        let step = this.step;
        step = step > 0 ? step : 1;
        step = step / (this.max - this.min);
        if (!ev.detail.isIncrease) {
            step *= -1;
        }
        if (ev.detail.knob === 'A') {
            this.ratioA += step;
        }
        else {
            this.ratioB += step;
        }
        this.updateValue();
    }
    handleKeyboard(knob, isIncrease) {
        let step = this.step;
        step = step > 0 ? step : 1;
        step = step / (this.max - this.min);
        if (!isIncrease) {
            step *= -1;
        }
        if (knob === 'A') {
            this.ratioA += step;
        }
        else {
            this.ratioB += step;
        }
        this.updateValue();
    }
    getValue() {
        const value = this.value || 0;
        if (this.dualKnobs) {
            if (typeof value === 'object') {
                return value;
            }
            return {
                lower: 0,
                upper: value
            };
        }
        else {
            if (typeof value === 'object') {
                return value.upper;
            }
            return value;
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled
        });
    }
    fireBlur() {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.ionBlur.emit();
            this.emitStyle();
        }
    }
    fireFocus() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.ionFocus.emit();
            this.emitStyle();
        }
    }
    onStart(detail) {
        this.fireFocus();
        const rect = this.rect = this.rangeSlider.getBoundingClientRect();
        const currentX = detail.currentX;
        const ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
        this.pressedKnob =
            !this.dualKnobs ||
                Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                ? 'A'
                : 'B';
        this.update(currentX);
    }
    onMove(detail) {
        this.update(detail.currentX);
    }
    onEnd(detail) {
        this.update(detail.currentX);
        this.pressedKnob = undefined;
        this.fireBlur();
    }
    update(currentX) {
        const rect = this.rect;
        let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
        if (this.snaps) {
            const value = ratioToValue(ratio, this.min, this.max, this.step);
            ratio = valueToRatio(value, this.min, this.max);
        }
        if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
        }
        else {
            this.ratioB = ratio;
        }
        this.updateValue();
    }
    get valA() {
        return ratioToValue(this.ratioA, this.min, this.max, this.step);
    }
    get valB() {
        return ratioToValue(this.ratioB, this.min, this.max, this.step);
    }
    get ratioLower() {
        if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
        }
        return 0;
    }
    get ratioUpper() {
        if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
        }
        return this.ratioA;
    }
    updateRatio() {
        const value = this.getValue();
        const { min, max } = this;
        if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
        }
        else {
            this.ratioA = valueToRatio(value, min, max);
        }
    }
    updateValue() {
        this.noUpdate = true;
        const { valA, valB } = this;
        this.value = !this.dualKnobs
            ? valA
            : {
                lower: Math.min(valA, valB),
                upper: Math.max(valA, valB)
            };
        this.noUpdate = false;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'range-disabled': this.disabled, 'range-pressed': this.pressedKnob !== undefined, 'range-has-pin': this.pin })
        };
    }
    render() {
        const { min, max, step, ratioLower, ratioUpper } = this;
        const barL = `${ratioLower * 100}%`;
        const barR = `${100 - ratioUpper * 100}%`;
        const ticks = [];
        if (this.snaps) {
            for (let value = min; value <= max; value += step) {
                const ratio = valueToRatio(value, min, max);
                ticks.push({
                    ratio,
                    active: ratio >= ratioLower && ratio <= ratioUpper,
                    left: `${ratio * 100}%`
                });
            }
        }
        return [
            h("slot", { name: "start" }),
            h("div", { class: "range-slider", ref: el => this.rangeSlider = el },
                ticks.map(t => (h("div", { style: { left: t.left }, role: "presentation", class: {
                        'range-tick': true,
                        'range-tick-active': t.active
                    } }))),
                h("div", { class: "range-bar", role: "presentation" }),
                h("div", { class: "range-bar range-bar-active", role: "presentation", style: {
                        left: barL,
                        right: barR
                    } }),
                renderKnob({
                    knob: 'A',
                    pressed: this.pressedKnob === 'A',
                    value: this.valA,
                    ratio: this.ratioA,
                    pin: this.pin,
                    disabled: this.disabled,
                    handleKeyboard: this.handleKeyboard.bind(this),
                    min,
                    max
                }),
                this.dualKnobs && renderKnob({
                    knob: 'B',
                    pressed: this.pressedKnob === 'B',
                    value: this.valB,
                    ratio: this.ratioB,
                    pin: this.pin,
                    disabled: this.disabled,
                    handleKeyboard: this.handleKeyboard.bind(this),
                    min,
                    max
                })),
            h("slot", { name: "end" })
        ];
    }
    static get is() { return "ion-range"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "dualKnobs": {
            "type": Boolean,
            "attr": "dual-knobs"
        },
        "el": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max",
            "watchCallbacks": ["maxChanged"]
        },
        "min": {
            "type": Number,
            "attr": "min",
            "watchCallbacks": ["minChanged"]
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "pin": {
            "type": Boolean,
            "attr": "pin"
        },
        "pressedKnob": {
            "state": true
        },
        "queue": {
            "context": "queue"
        },
        "ratioA": {
            "state": true
        },
        "ratioB": {
            "state": true
        },
        "snaps": {
            "type": Boolean,
            "attr": "snaps"
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
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
        }]; }
    static get listeners() { return [{
            "name": "ionIncrease",
            "method": "keyChng"
        }, {
            "name": "ionDecrease",
            "method": "keyChng"
        }]; }
    static get style() { return ".sc-ion-range-md-h{--knob-handle-size:calc(var(--knob-size) * 2);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:var(--ion-background-color-step-250, #bfbfbf);--bar-background-active:var(--ion-color-primary, #3880ff);--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding:8px;font-size:12px}.sc-ion-range-md-s > ion-label{-webkit-box-flex:initial;-ms-flex:initial;flex:initial}.sc-ion-range-md-s > ion-icon[slot]{font-size:24px}.range-slider.sc-ion-range-md{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab}.range-pressed.sc-ion-range-md-h   .range-slider.sc-ion-range-md{cursor:-webkit-grabbing;cursor:grabbing}.range-pin.sc-ion-range-md{background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle.sc-ion-range-md{left:0;top:calc((var(--height) - var(--knob-handle-size))/ 2);margin-left:calc(0px - var(--knob-handle-size)/ 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle.sc-ion-range-md:active, .range-knob-handle.sc-ion-range-md:focus{outline:0}.range-bar.sc-ion-range-md{left:0;top:calc((var(--height) - var(--bar-height))/ 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob.sc-ion-range-md{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size)/ 2);top:calc(50% - var(--knob-size)/ 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none;-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-pressed.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md{will-change:left,right}.range-pressed.sc-ion-range-md-h   .range-knob-handle.sc-ion-range-md{will-change:left}.in-item.sc-ion-range-md-h{width:100%}.sc-ion-range-md-h.in-item .sc-ion-range-md-s > ion-label{-ms-flex-item-align:center;align-self:center}.ion-color.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-knob.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-pin.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-pin.sc-ion-range-md::before{background:var(--ion-color-base);color:var(--ion-color-contrast)}.range-has-pin.sc-ion-range-md-h{padding-top:28px}.range-bar-active.sc-ion-range-md{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick.sc-ion-range-md{margin-left:-1px;border-radius:50%;position:absolute;top:21px;width:2px;height:2px;background:var(--ion-background-color,#fff);z-index:1;pointer-events:none}.range-tick-active.sc-ion-range-md{background:var(--ion-background-color,#fff)}.range-pin.sc-ion-range-md{padding:8px 0;border-radius:50%;-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);display:inline-block;position:relative;top:-20px;min-width:28px;height:28px;-webkit-transition:background 120ms ease,-webkit-transform 120ms ease;transition:background 120ms ease,-webkit-transform 120ms ease;transition:transform 120ms ease,background 120ms ease;transition:transform 120ms ease,background 120ms ease,-webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin.sc-ion-range-md::before{left:50%;top:3px;margin-left:-13px;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:\"\";z-index:-1;border-radius:50% 50% 50% 0}.range-knob-pressed.sc-ion-range-md   .range-pin.sc-ion-range-md{-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.sc-ion-range-md-h:not(.range-has-pin)   .range-knob-pressed.sc-ion-range-md   .range-knob.sc-ion-range-md{-webkit-transform:scale(1);transform:scale(1)}.range-knob-min.range-knob-min.sc-ion-range-md   .range-knob.sc-ion-range-md{border:2px solid var(--ion-background-color-step-250,#bfbfbf);background:var(--ion-background-color,#fff)}.range-knob-min.range-knob-min.sc-ion-range-md   .range-pin.sc-ion-range-md, .range-knob-min.range-knob-min.sc-ion-range-md   .range-pin.sc-ion-range-md::before{background:var(--ion-background-color-step-250,#bfbfbf);color:var(--ion-color-primary-contrast,#fff)}.range-disabled.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md{background-color:var(--ion-background-color-step-250,#bfbfbf)}.range-disabled.sc-ion-range-md-h   .range-knob.sc-ion-range-md{-webkit-transform:scale(.55);transform:scale(.55);outline:#fff solid 5px;background-color:var(--ion-background-color-step-250,#bfbfbf)}"; }
    static get styleMode() { return "md"; }
}
function renderKnob({ knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }) {
    return (h("div", { onKeyDown: (ev) => {
            const key = ev.key;
            if (key === 'ArrowLeft' || key === 'ArrowDown') {
                handleKeyboard(knob, false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (key === 'ArrowRight' || key === 'ArrowUp') {
                handleKeyboard(knob, true);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }, class: {
            'range-knob-handle': true,
            'range-knob-pressed': pressed,
            'range-knob-min': value === min,
            'range-knob-max': value === max
        }, style: {
            'left': `${ratio * 100}%`
        }, role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value },
        pin && h("div", { class: "range-pin", role: "presentation" }, Math.round(value)),
        h("div", { class: "range-knob", role: "presentation" })));
}
function ratioToValue(ratio, min, max, step) {
    let value = (max - min) * ratio;
    if (step > 0) {
        value = Math.round(value / step) * step + min;
    }
    return clamp(min, value, max);
}
function valueToRatio(value, min, max) {
    return clamp(0, (value - min) / (max - min), 1);
}

export { Range as IonRange };
