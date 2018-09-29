import { g as createThemedClasses } from './chunk-50fe9317.js';
var SPLIT_PANE_MAIN = 'split-pane-main';
var SPLIT_PANE_SIDE = 'split-pane-side';
var QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
var SplitPane = /** @class */ (function () {
    function SplitPane() {
        this.visible = false;
        this.disabled = false;
        this.when = QUERY['md'];
    }
    SplitPane.prototype.visibleChanged = function (visible) {
        var detail = { visible: visible, isPane: this.isPane.bind(this) };
        this.ionChange.emit(detail);
        this.ionSplitPaneVisible.emit(detail);
    };
    SplitPane.prototype.componentDidLoad = function () {
        this.styleChildren();
        this.updateState();
    };
    SplitPane.prototype.componentDidUnload = function () {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    };
    SplitPane.prototype.updateState = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        if (this.disabled) {
            this.visible = false;
            return;
        }
        var query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        var mediaQuery = QUERY[query] || query;
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        var callback = function (q) { return _this.visible = q.matches; };
        var mediaList = this.win.matchMedia(mediaQuery);
        mediaList.addListener(callback);
        this.rmL = function () { return mediaList.removeListener(callback); };
        this.visible = mediaList.matches;
    };
    SplitPane.prototype.isPane = function (element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    };
    SplitPane.prototype.styleChildren = function () {
        if (this.isServer) {
            return;
        }
        var children = this.el.children;
        var nu = this.el.childElementCount;
        var foundMain = false;
        for (var i = 0; i < nu; i++) {
            var child = children[i];
            var isMain = child.hasAttribute('main');
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane can not have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane could not found any main node');
        }
    };
    SplitPane.prototype.hostData = function () {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'split-pane'), { 'split-pane-visible': this.visible })
        };
    };
    Object.defineProperty(SplitPane, "is", {
        get: function () { return "ion-split-pane"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "properties", {
        get: function () {
            return {
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["updateState"]
                },
                "el": {
                    "elementRef": true
                },
                "isServer": {
                    "context": "isServer"
                },
                "visible": {
                    "state": true,
                    "watchCallbacks": ["visibleChanged"]
                },
                "when": {
                    "type": "Any",
                    "attr": "when",
                    "watchCallbacks": ["updateState"]
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": false,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionSplitPaneVisible",
                    "method": "ionSplitPaneVisible",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "style", {
        get: function () { return ".split-pane{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13)}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return SplitPane;
}());
function setPaneClass(el, isMain) {
    var toAdd;
    var toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    var classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
}
export { SplitPane as IonSplitPane };
