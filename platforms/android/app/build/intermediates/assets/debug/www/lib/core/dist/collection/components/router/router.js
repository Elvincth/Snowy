import { debounce } from '../../utils/helpers';
import { printRedirects, printRoutes } from './utils/debug';
import { readNavState, waitUntilNavNode, writeNavState } from './utils/dom';
import { routeRedirect, routerIDsToChain, routerPathToChain } from './utils/matching';
import { readRedirects, readRoutes } from './utils/parser';
import { chainToPath, generatePath, parsePath, readPath, writePath } from './utils/path';
export class Router {
    constructor() {
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        this.root = '/';
        this.useHash = true;
    }
    async componentWillLoad() {
        console.debug('[ion-router] router will load');
        await waitUntilNavNode(this.win);
        console.debug('[ion-router] found nav');
        await this.onRoutesChanged();
    }
    componentDidLoad() {
        this.win.addEventListener('ionRouteRedirectChanged', debounce(this.onRedirectChanged.bind(this), 10));
        this.win.addEventListener('ionRouteDataChanged', debounce(this.onRoutesChanged.bind(this), 100));
    }
    onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    onBackButton(ev) {
        ev.detail.register(0, () => this.goBack());
    }
    push(url, direction = 'forward') {
        if (url.startsWith('.')) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        const path = parsePath(url);
        const intent = DIRECTION_TO_INTENT[direction];
        this.setPath(path, intent);
        return this.writeNavStateRoot(path, intent);
    }
    goBack() {
        this.win.history.back(1);
        return Promise.resolve(this.waitPromise);
    }
    printDebug() {
        console.debug('CURRENT PATH', this.getPath());
        console.debug('PREVIOUS PATH', this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    }
    async navChanged(intent) {
        if (this.busy) {
            console.warn('[ion-router] router is busy, navChanged was cancelled');
            return false;
        }
        const { ids, outlet } = await readNavState(this.win.document.body);
        const routes = readRoutes(this.el);
        const chain = routerIDsToChain(ids, routes);
        if (!chain) {
            console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
            return false;
        }
        const path = chainToPath(chain);
        if (!path) {
            console.warn('[ion-router] router could not match path because some required param is missing');
            return false;
        }
        console.debug('[ion-router] nav changed -> update URL', ids, path);
        this.setPath(path, intent);
        await this.safeWriteNavState(outlet, chain, 0, path, null, ids.length);
        return true;
    }
    onRedirectChanged() {
        const path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, 0);
        }
    }
    onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), 0);
    }
    historyDirection() {
        if (this.win.history.state === null) {
            this.state++;
            this.win.history.replaceState(this.state, this.win.document.title, this.win.document.location.href);
        }
        const state = this.win.history.state;
        const lastState = this.lastState;
        this.lastState = state;
        if (state > lastState) {
            return 1;
        }
        else if (state < lastState) {
            return -1;
        }
        else {
            return 0;
        }
    }
    async writeNavStateRoot(path, intent) {
        if (!path) {
            console.error('[ion-router] URL is not part of the routing set');
            return false;
        }
        const redirects = readRedirects(this.el);
        const redirect = routeRedirect(path, redirects);
        let redirectFrom = null;
        if (redirect) {
            this.setPath(redirect.to, intent);
            redirectFrom = redirect.from;
            path = redirect.to;
        }
        const routes = readRoutes(this.el);
        const chain = routerPathToChain(path, routes);
        if (!chain) {
            console.error('[ion-router] the path does not match any route');
            return false;
        }
        return this.safeWriteNavState(this.win.document.body, chain, intent, path, redirectFrom);
    }
    async safeWriteNavState(node, chain, intent, path, redirectFrom, index = 0) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.writeNavState(node, chain, intent, path, redirectFrom, index);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
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
    async writeNavState(node, chain, intent, path, redirectFrom, index = 0) {
        if (this.busy) {
            console.warn('[ion-router] router is busy, transition was cancelled');
            return false;
        }
        this.busy = true;
        const routeEvent = this.routeChangeEvent(path, redirectFrom);
        if (routeEvent) {
            this.ionRouteWillChange.emit(routeEvent);
        }
        const changed = await writeNavState(node, chain, intent, index);
        this.busy = false;
        if (changed) {
            console.debug('[ion-router] route changed', path);
        }
        if (routeEvent) {
            this.ionRouteDidChange.emit(routeEvent);
        }
        return changed;
    }
    setPath(path, intent) {
        this.state++;
        writePath(this.win.history, this.root, this.useHash, path, intent, this.state);
    }
    getPath() {
        return readPath(this.win.location, this.root, this.useHash);
    }
    routeChangeEvent(path, redirectFromPath) {
        const from = this.previousPath;
        const to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from,
            redirectedFrom,
            to,
        };
    }
    static get is() { return "ion-router"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "goBack": {
            "method": true
        },
        "navChanged": {
            "method": true
        },
        "printDebug": {
            "method": true
        },
        "push": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "root": {
            "type": String,
            "attr": "root"
        },
        "useHash": {
            "type": Boolean,
            "attr": "use-hash"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionRouteWillChange",
            "method": "ionRouteWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionRouteDidChange",
            "method": "ionRouteDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "window:popstate",
            "method": "onPopState"
        }, {
            "name": "document:ionBackButton",
            "method": "onBackButton"
        }]; }
}
const DIRECTION_TO_INTENT = {
    'back': -1,
    'root': 0,
    'forward': 1
};
