import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { k as debounce } from './chunk-e7816c0b.js';
import { a as attachComponent, b as detachComponent } from './chunk-50fe9317.js';
import './chunk-12e0f551.js';
import { d as transition } from './chunk-5f438245.js';
var Route = /** @class */ (function () {
    function Route() {
        this.url = '';
    }
    Route.prototype.onUpdate = function (newValue) {
        this.ionRouteDataChanged.emit(newValue);
    };
    Route.prototype.onComponentProps = function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        var keys1 = newValue ? Object.keys(newValue) : [];
        var keys2 = oldValue ? Object.keys(oldValue) : [];
        if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
        }
        for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
            var key = keys1_1[_i];
            if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
            }
        }
    };
    Route.prototype.componentDidLoad = function () {
        this.ionRouteDataChanged.emit();
    };
    Route.prototype.componentDidUnload = function () {
        this.ionRouteDataChanged.emit();
    };
    Object.defineProperty(Route, "is", {
        get: function () { return "ion-route"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route, "properties", {
        get: function () {
            return {
                "component": {
                    "type": String,
                    "attr": "component",
                    "watchCallbacks": ["onUpdate"]
                },
                "componentProps": {
                    "type": "Any",
                    "attr": "component-props",
                    "watchCallbacks": ["onComponentProps"]
                },
                "url": {
                    "type": String,
                    "attr": "url",
                    "watchCallbacks": ["onUpdate"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route, "events", {
        get: function () {
            return [{
                    "name": "ionRouteDataChanged",
                    "method": "ionRouteDataChanged",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    return Route;
}());
var RouteRedirect = /** @class */ (function () {
    function RouteRedirect() {
        this.from = '';
    }
    RouteRedirect.prototype.propDidChange = function () {
        this.ionRouteRedirectChanged.emit();
    };
    RouteRedirect.prototype.componentDidLoad = function () {
        this.ionRouteRedirectChanged.emit();
    };
    RouteRedirect.prototype.componentDidUnload = function () {
        this.ionRouteRedirectChanged.emit();
    };
    Object.defineProperty(RouteRedirect, "is", {
        get: function () { return "ion-route-redirect"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteRedirect, "properties", {
        get: function () {
            return {
                "from": {
                    "type": String,
                    "attr": "from",
                    "watchCallbacks": ["propDidChange"]
                },
                "to": {
                    "type": String,
                    "attr": "to",
                    "watchCallbacks": ["propDidChange"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteRedirect, "events", {
        get: function () {
            return [{
                    "name": "ionRouteRedirectChanged",
                    "method": "ionRouteRedirectChanged",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    return RouteRedirect;
}());
function generatePath(segments) {
    var path = segments
        .filter(function (s) { return s.length > 0; })
        .join('/');
    return '/' + path;
}
function chainToPath(chain) {
    var path = [];
    for (var _i = 0, chain_1 = chain; _i < chain_1.length; _i++) {
        var route = chain_1[_i];
        for (var _a = 0, _b = route.path; _a < _b.length; _a++) {
            var segment = _b[_a];
            if (segment[0] === ':') {
                var param = route.params && route.params[segment.slice(1)];
                if (!param) {
                    return null;
                }
                path.push(param);
            }
            else if (segment !== '') {
                path.push(segment);
            }
        }
    }
    return path;
}
function writePath(history, root, useHash, path, intent, state) {
    var url = generatePath(parsePath(root).concat(path));
    if (useHash) {
        url = '#' + url;
    }
    if (intent === 1) {
        history.pushState(state, '', url);
    }
    else {
        history.replaceState(state, '', url);
    }
}
function removePrefix(prefix, path) {
    if (prefix.length > path.length) {
        return null;
    }
    if (prefix.length <= 1 && prefix[0] === '') {
        return path;
    }
    for (var i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
            return null;
        }
    }
    if (path.length === prefix.length) {
        return [''];
    }
    return path.slice(prefix.length);
}
function readPath(loc, root, useHash) {
    var pathname = loc.pathname;
    if (useHash) {
        var hash = loc.hash;
        pathname = (hash[0] === '#')
            ? hash.slice(1)
            : '';
    }
    var prefix = parsePath(root);
    var path = parsePath(pathname);
    return removePrefix(prefix, path);
}
function parsePath(path) {
    if (path == null) {
        return [''];
    }
    var segments = path.split('/')
        .map(function (s) { return s.trim(); })
        .filter(function (s) { return s.length > 0; });
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
}
function printRoutes(routes) {
    console.group("[ion-core] ROUTES[" + routes.length + "]");
    var _loop_1 = function (chain) {
        var path = [];
        chain.forEach(function (r) { return path.push.apply(path, r.path); });
        var ids = chain.map(function (r) { return r.id; });
        console.debug("%c " + generatePath(path), 'font-weight: bold; padding-left: 20px', '=>\t', "(" + ids.join(', ') + ")");
    };
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var chain = routes_1[_i];
        _loop_1(chain);
    }
    console.groupEnd();
}
function printRedirects(redirects) {
    console.group("[ion-core] REDIRECTS[" + redirects.length + "]");
    for (var _i = 0, redirects_1 = redirects; _i < redirects_1.length; _i++) {
        var redirect = redirects_1[_i];
        if (redirect.to) {
            console.debug('FROM: ', "$c " + generatePath(redirect.from), 'font-weight: bold', ' TO: ', "$c " + generatePath(redirect.to), 'font-weight: bold');
        }
    }
    console.groupEnd();
}
function writeNavState(root, chain, intent, index, changed) {
    if (changed === void 0) { changed = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var outlet, route, result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    outlet = searchNavNode(root);
                    if (index >= chain.length || !outlet) {
                        return [2 /*return*/, changed];
                    }
                    return [4 /*yield*/, outlet.componentOnReady()];
                case 1:
                    _a.sent();
                    route = chain[index];
                    return [4 /*yield*/, outlet.setRouteId(route.id, route.params, intent)];
                case 2:
                    result = _a.sent();
                    if (result.changed) {
                        intent = 0;
                        changed = true;
                    }
                    return [4 /*yield*/, writeNavState(result.element, chain, intent, index + 1, changed)];
                case 3:
                    changed = _a.sent();
                    if (!result.markVisible) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.markVisible()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, changed];
                case 6:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [2 /*return*/, false];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function readNavState(root) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ids, outlet, node, id;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ids = [];
                    node = root;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 5];
                    outlet = searchNavNode(node);
                    if (!outlet) return [3 /*break*/, 3];
                    return [4 /*yield*/, outlet.getRouteId()];
                case 2:
                    id = _a.sent();
                    if (id) {
                        node = id.element;
                        id.element = undefined;
                        ids.push(id);
                    }
                    else {
                        return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 4];
                case 3: return [3 /*break*/, 5];
                case 4: return [3 /*break*/, 1];
                case 5: return [2 /*return*/, { ids: ids, outlet: outlet }];
            }
        });
    });
}
function waitUntilNavNode(win) {
    if (searchNavNode(win.document.body)) {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        win.addEventListener('ionNavWillLoad', resolve, { once: true });
    });
}
var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
function searchNavNode(root) {
    if (!root) {
        return undefined;
    }
    if (root.matches(QUERY)) {
        return root;
    }
    var outlet = root.querySelector(QUERY);
    return outlet ? outlet : undefined;
}
function matchesRedirect(input, route) {
    var from = route.from, to = route.to;
    if (to === undefined) {
        return false;
    }
    if (from.length > input.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        var expected = from[i];
        if (expected === '*') {
            return true;
        }
        if (expected !== input[i]) {
            return false;
        }
    }
    return from.length === input.length;
}
function routeRedirect(path, routes) {
    return routes.find(function (route) { return matchesRedirect(path, route); });
}
function matchesIDs(ids, chain) {
    var len = Math.min(ids.length, chain.length);
    var i = 0;
    for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
            break;
        }
    }
    return i;
}
function matchesPath(inputPath, chain) {
    var segments = new RouterSegments(inputPath);
    var matchesDefault = false;
    var allparams;
    for (var i = 0; i < chain.length; i++) {
        var path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var segment = path_1[_i];
                var data = segments.next();
                if (segment[0] === ':') {
                    if (data === '') {
                        return null;
                    }
                    allparams = allparams || [];
                    var params = allparams[i] || (allparams[i] = {});
                    params[segment.slice(1)] = data;
                }
                else if (data !== segment) {
                    return null;
                }
            }
            matchesDefault = false;
        }
    }
    var matches = (matchesDefault)
        ? matchesDefault === (segments.next() === '')
        : true;
    if (!matches) {
        return null;
    }
    if (allparams) {
        return chain.map(function (route, i) { return ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i])
        }); });
    }
    return chain;
}
function mergeParams(a, b) {
    if (!a && b) {
        return b;
    }
    else if (a && !b) {
        return a;
    }
    else if (a && b) {
        return Object.assign({}, a, b);
    }
    return undefined;
}
function routerIDsToChain(ids, chains) {
    var match = null;
    var maxMatches = 0;
    var plainIDs = ids.map(function (i) { return i.id; });
    for (var _i = 0, chains_1 = chains; _i < chains_1.length; _i++) {
        var chain = chains_1[_i];
        var score = matchesIDs(plainIDs, chain);
        if (score > maxMatches) {
            match = chain;
            maxMatches = score;
        }
    }
    if (match) {
        return match.map(function (route, i) { return ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
        }); });
    }
    return null;
}
function routerPathToChain(path, chains) {
    var match = null;
    var matches = 0;
    for (var _i = 0, chains_2 = chains; _i < chains_2.length; _i++) {
        var chain = chains_2[_i];
        var matchedChain = matchesPath(path, chain);
        if (matchedChain !== null) {
            var score = computePriority(matchedChain);
            if (score > matches) {
                matches = score;
                match = matchedChain;
            }
        }
    }
    return match;
}
function computePriority(chain) {
    var score = 1;
    var level = 1;
    for (var _i = 0, chain_2 = chain; _i < chain_2.length; _i++) {
        var route = chain_2[_i];
        for (var _a = 0, _b = route.path; _a < _b.length; _a++) {
            var path = _b[_a];
            if (path[0] === ':') {
                score += Math.pow(1, level);
            }
            else if (path !== '') {
                score += Math.pow(2, level);
            }
            level++;
        }
    }
    return score;
}
var RouterSegments = /** @class */ (function () {
    function RouterSegments(path) {
        this.path = path.slice();
    }
    RouterSegments.prototype.next = function () {
        if (this.path.length > 0) {
            return this.path.shift();
        }
        return '';
    };
    return RouterSegments;
}());
function readRedirects(root) {
    return Array.from(root.children)
        .filter(function (el) { return el.tagName === 'ION-ROUTE-REDIRECT'; })
        .map(function (el) {
        var to = readProp(el, 'to');
        return {
            from: parsePath(readProp(el, 'from')),
            to: to == null ? undefined : parsePath(to),
        };
    });
}
function readRoutes(root) {
    return flattenRouterTree(readRouteNodes(root));
}
function readRouteNodes(root, node) {
    if (node === void 0) { node = root; }
    return Array.from(node.children)
        .filter(function (el) { return el.tagName === 'ION-ROUTE' && el.component; })
        .map(function (el) {
        var component = readProp(el, 'component');
        if (component == null) {
            throw new Error('component missing in ion-route');
        }
        return {
            path: parsePath(readProp(el, 'url')),
            id: component.toLowerCase(),
            params: el.componentProps,
            children: readRouteNodes(root, el)
        };
    });
}
function readProp(el, prop) {
    if (prop in el) {
        return el[prop];
    }
    if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
    }
    return null;
}
function flattenRouterTree(nodes) {
    var routes = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        flattenNode([], routes, node);
    }
    return routes;
}
function flattenNode(chain, routes, node) {
    var s = chain.slice();
    s.push({
        id: node.id,
        path: node.path,
        params: node.params
    });
    if (node.children.length === 0) {
        routes.push(s);
        return;
    }
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var sub = _a[_i];
        flattenNode(s, routes, sub);
    }
}
var Router = /** @class */ (function () {
    function Router() {
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        this.root = '/';
        this.useHash = true;
    }
    Router.prototype.componentWillLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug('[ion-router] router will load');
                        return [4 /*yield*/, waitUntilNavNode(this.win)];
                    case 1:
                        _a.sent();
                        console.debug('[ion-router] found nav');
                        return [4 /*yield*/, this.onRoutesChanged()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.componentDidLoad = function () {
        this.win.addEventListener('ionRouteRedirectChanged', debounce(this.onRedirectChanged.bind(this), 10));
        this.win.addEventListener('ionRouteDataChanged', debounce(this.onRoutesChanged.bind(this), 100));
    };
    Router.prototype.onPopState = function () {
        var direction = this.historyDirection();
        var path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
    };
    Router.prototype.onBackButton = function (ev) {
        var _this = this;
        ev.detail.register(0, function () { return _this.goBack(); });
    };
    Router.prototype.push = function (url, direction) {
        if (direction === void 0) { direction = 'forward'; }
        if (url.startsWith('.')) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        var path = parsePath(url);
        var intent = DIRECTION_TO_INTENT[direction];
        this.setPath(path, intent);
        return this.writeNavStateRoot(path, intent);
    };
    Router.prototype.goBack = function () {
        this.win.history.back(1);
        return Promise.resolve(this.waitPromise);
    };
    Router.prototype.printDebug = function () {
        console.debug('CURRENT PATH', this.getPath());
        console.debug('PREVIOUS PATH', this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    };
    Router.prototype.navChanged = function (intent) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, ids, outlet, routes, chain, path;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.busy) {
                            console.warn('[ion-router] router is busy, navChanged was cancelled');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, readNavState(this.win.document.body)];
                    case 1:
                        _a = _b.sent(), ids = _a.ids, outlet = _a.outlet;
                        routes = readRoutes(this.el);
                        chain = routerIDsToChain(ids, routes);
                        if (!chain) {
                            console.warn('[ion-router] no matching URL for ', ids.map(function (i) { return i.id; }));
                            return [2 /*return*/, false];
                        }
                        path = chainToPath(chain);
                        if (!path) {
                            console.warn('[ion-router] router could not match path because some required param is missing');
                            return [2 /*return*/, false];
                        }
                        console.debug('[ion-router] nav changed -> update URL', ids, path);
                        this.setPath(path, intent);
                        return [4 /*yield*/, this.safeWriteNavState(outlet, chain, 0, path, null, ids.length)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Router.prototype.onRedirectChanged = function () {
        var path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, 0);
        }
    };
    Router.prototype.onRoutesChanged = function () {
        return this.writeNavStateRoot(this.getPath(), 0);
    };
    Router.prototype.historyDirection = function () {
        if (this.win.history.state === null) {
            this.state++;
            this.win.history.replaceState(this.state, this.win.document.title, this.win.document.location.href);
        }
        var state = this.win.history.state;
        var lastState = this.lastState;
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
    };
    Router.prototype.writeNavStateRoot = function (path, intent) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var redirects, redirect, redirectFrom, routes, chain;
            return tslib_1.__generator(this, function (_a) {
                if (!path) {
                    console.error('[ion-router] URL is not part of the routing set');
                    return [2 /*return*/, false];
                }
                redirects = readRedirects(this.el);
                redirect = routeRedirect(path, redirects);
                redirectFrom = null;
                if (redirect) {
                    this.setPath(redirect.to, intent);
                    redirectFrom = redirect.from;
                    path = redirect.to;
                }
                routes = readRoutes(this.el);
                chain = routerPathToChain(path, routes);
                if (!chain) {
                    console.error('[ion-router] the path does not match any route');
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, this.safeWriteNavState(this.win.document.body, chain, intent, path, redirectFrom)];
            });
        });
    };
    Router.prototype.safeWriteNavState = function (node, chain, intent, path, redirectFrom, index) {
        if (index === void 0) { index = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var unlock, changed, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.writeNavState(node, chain, intent, path, redirectFrom, index)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    Router.prototype.lock = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var p, resolve;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    Router.prototype.writeNavState = function (node, chain, intent, path, redirectFrom, index) {
        if (index === void 0) { index = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var routeEvent, changed;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.busy) {
                            console.warn('[ion-router] router is busy, transition was cancelled');
                            return [2 /*return*/, false];
                        }
                        this.busy = true;
                        routeEvent = this.routeChangeEvent(path, redirectFrom);
                        if (routeEvent) {
                            this.ionRouteWillChange.emit(routeEvent);
                        }
                        return [4 /*yield*/, writeNavState(node, chain, intent, index)];
                    case 1:
                        changed = _a.sent();
                        this.busy = false;
                        if (changed) {
                            console.debug('[ion-router] route changed', path);
                        }
                        if (routeEvent) {
                            this.ionRouteDidChange.emit(routeEvent);
                        }
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    Router.prototype.setPath = function (path, intent) {
        this.state++;
        writePath(this.win.history, this.root, this.useHash, path, intent, this.state);
    };
    Router.prototype.getPath = function () {
        return readPath(this.win.location, this.root, this.useHash);
    };
    Router.prototype.routeChangeEvent = function (path, redirectFromPath) {
        var from = this.previousPath;
        var to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from: from,
            redirectedFrom: redirectedFrom,
            to: to,
        };
    };
    Object.defineProperty(Router, "is", {
        get: function () { return "ion-router"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router, "listeners", {
        get: function () {
            return [{
                    "name": "window:popstate",
                    "method": "onPopState"
                }, {
                    "name": "document:ionBackButton",
                    "method": "onBackButton"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return Router;
}());
var DIRECTION_TO_INTENT = {
    'back': -1,
    'root': 0,
    'forward': 1
};
var RouterOutlet = /** @class */ (function () {
    function RouterOutlet() {
        this.animated = true;
    }
    RouterOutlet.prototype.componentWillLoad = function () {
        this.ionNavWillLoad.emit();
    };
    RouterOutlet.prototype.componentDidUnload = function () {
        this.activeEl = this.activeComponent = undefined;
    };
    RouterOutlet.prototype.setRoot = function (component, params, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var leavingEl, enteringEl;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activeComponent === component) {
                            return [2 /*return*/, false];
                        }
                        leavingEl = this.activeEl;
                        return [4 /*yield*/, attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params)];
                    case 1:
                        enteringEl = _a.sent();
                        this.activeComponent = component;
                        this.activeEl = enteringEl;
                        return [4 /*yield*/, this.commit(enteringEl, leavingEl, opts)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, detachComponent(this.delegate, leavingEl)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RouterOutlet.prototype.commit = function (enteringEl, leavingEl, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var unlock, changed, e_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transition(enteringEl, leavingEl, opts)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    RouterOutlet.prototype.setRouteId = function (id, params, direction) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var changed;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRoot(id, params, {
                            duration: direction === 0 ? 0 : undefined,
                            direction: direction === -1 ? 'back' : 'forward',
                        })];
                    case 1:
                        changed = _a.sent();
                        return [2 /*return*/, {
                                changed: changed,
                                element: this.activeEl
                            }];
                }
            });
        });
    };
    RouterOutlet.prototype.getRouteId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var active;
            return tslib_1.__generator(this, function (_a) {
                active = this.activeEl;
                return [2 /*return*/, active ? {
                        id: active.tagName,
                        element: active,
                    } : undefined];
            });
        });
    };
    RouterOutlet.prototype.lock = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var p, resolve;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    RouterOutlet.prototype.transition = function (enteringEl, leavingEl, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, mode, queue, animationCtrl, win, el, animated;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (leavingEl === enteringEl) {
                            return [2 /*return*/, false];
                        }
                        this.ionNavWillChange.emit();
                        opts = opts || {};
                        _a = this, mode = _a.mode, queue = _a.queue, animationCtrl = _a.animationCtrl, win = _a.win, el = _a.el;
                        animated = this.animated && this.config.getBoolean('animated', true);
                        return [4 /*yield*/, transition(Object.assign({ mode: mode,
                                queue: queue,
                                animated: animated,
                                animationCtrl: animationCtrl, window: win, enteringEl: enteringEl,
                                leavingEl: leavingEl, baseEl: el }, opts))];
                    case 1:
                        _b.sent();
                        this.ionNavDidChange.emit();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RouterOutlet.prototype.render = function () {
        return [
            this.mode === 'ios' && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    };
    Object.defineProperty(RouterOutlet, "is", {
        get: function () { return "ion-router-outlet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet, "style", {
        get: function () { return ".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-router-outlet{display:none}.show-decor.sc-ion-router-outlet-h   .nav-decor.sc-ion-router-outlet{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return RouterOutlet;
}());
export { Route as IonRoute, RouteRedirect as IonRouteRedirect, Router as IonRouter, RouterOutlet as IonRouterOutlet };
