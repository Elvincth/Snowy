/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

async function attachComponent(delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
}
function detachComponent(delegate, element) {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
}

function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
function createColorClasses(color) {
    return (color != null) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
}
function createThemedClasses(mode, name) {
    return {
        [name]: true,
        [`${name}-${mode}`]: !!mode
    };
}
function getClassList(classes) {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
}
function getClassMap(classes) {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
}
async function openURL(win, url, ev, direction) {
    if (url != null && url[0] !== '#' && url.indexOf('://') === -1) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return false;
}

export { attachComponent as a, detachComponent as b, getClassMap as c, createColorClasses as d, openURL as e, hostContext as f, createThemedClasses as g };
