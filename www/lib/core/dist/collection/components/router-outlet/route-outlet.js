import { transition } from '../../utils';
import { attachComponent, detachComponent } from '../../utils/framework-delegate';
export class RouterOutlet {
    constructor() {
        this.animated = true;
    }
    componentWillLoad() {
        this.ionNavWillLoad.emit();
    }
    componentDidUnload() {
        this.activeEl = this.activeComponent = undefined;
    }
    async setRoot(component, params, opts) {
        if (this.activeComponent === component) {
            return false;
        }
        const leavingEl = this.activeEl;
        const enteringEl = await attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
        this.activeComponent = component;
        this.activeEl = enteringEl;
        await this.commit(enteringEl, leavingEl, opts);
        await detachComponent(this.delegate, leavingEl);
        return true;
    }
    async commit(enteringEl, leavingEl, opts) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.transition(enteringEl, leavingEl, opts);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    async setRouteId(id, params, direction) {
        const changed = await this.setRoot(id, params, {
            duration: direction === 0 ? 0 : undefined,
            direction: direction === -1 ? 'back' : 'forward',
        });
        return {
            changed,
            element: this.activeEl
        };
    }
    async getRouteId() {
        const active = this.activeEl;
        return active ? {
            id: active.tagName,
            element: active,
        } : undefined;
    }
    async lock() {
        const p = this.waitPromise;
        let resolve;
        this.waitPromise = new Promise(r => resolve = r);
        if (p !== undefined) {
            await p;
        }
        return resolve;
    }
    async transition(enteringEl, leavingEl, opts) {
        if (leavingEl === enteringEl) {
            return false;
        }
        this.ionNavWillChange.emit();
        opts = opts || {};
        const { mode, queue, animationCtrl, win, el } = this;
        const animated = this.animated && this.config.getBoolean('animated', true);
        await transition(Object.assign({ mode,
            queue,
            animated,
            animationCtrl, window: win, enteringEl,
            leavingEl, baseEl: el }, opts));
        this.ionNavDidChange.emit();
        return true;
    }
    render() {
        return [
            this.mode === 'ios' && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-router-outlet"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "animationBuilder": {
            "type": "Any",
            "attr": "animation-builder"
        },
        "animationCtrl": {
            "connect": "ion-animation-controller"
        },
        "commit": {
            "method": true
        },
        "config": {
            "context": "config"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "el": {
            "elementRef": true
        },
        "getRouteId": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "setRoot": {
            "method": true
        },
        "setRouteId": {
            "method": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionNavWillLoad",
            "method": "ionNavWillLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillChange",
            "method": "ionNavWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavDidChange",
            "method": "ionNavDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-router-outlet:**/"; }
}
