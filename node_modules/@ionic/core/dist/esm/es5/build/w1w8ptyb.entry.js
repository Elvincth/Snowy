/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as hasShadowDom } from './chunk-e7816c0b.js';
import { d as createColorClasses, e as openURL } from './chunk-50fe9317.js';
var Button = /** @class */ (function () {
    function Button() {
        this.keyFocus = false;
        this.buttonType = 'button';
        this.disabled = false;
        this.strong = false;
        this.type = 'button';
    }
    Button.prototype.componentWillLoad = function () {
        if (this.fill === undefined) {
            this.fill = this.el.closest('ion-buttons') ? 'clear' : 'solid';
        }
    };
    Button.prototype.onFocus = function () {
        this.ionFocus.emit();
    };
    Button.prototype.onKeyUp = function () {
        this.keyFocus = true;
    };
    Button.prototype.onBlur = function () {
        this.keyFocus = false;
        this.ionBlur.emit();
    };
    Button.prototype.onClick = function (ev) {
        if (this.type === 'button') {
            return openURL(this.win, this.href, ev, this.routerDirection);
        }
        else if (hasShadowDom(this.el)) {
            var form = this.el.closest('form');
            if (form) {
                ev.preventDefault();
                ev.stopPropagation();
                var fakeButton = document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
        return Promise.resolve(false);
    };
    Button.prototype.hostData = function () {
        var _a = this, buttonType = _a.buttonType, color = _a.color, expand = _a.expand, fill = _a.fill, mode = _a.mode, shape = _a.shape, size = _a.size, strong = _a.strong;
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(color), getButtonClassMap(buttonType, mode), getButtonTypeClassMap(buttonType, expand, mode), getButtonTypeClassMap(buttonType, size, mode), getButtonTypeClassMap(buttonType, shape, mode), getButtonTypeClassMap(buttonType, strong ? 'strong' : undefined, mode), getButtonTypeClassMap(buttonType, fill, mode), { 'focused': this.keyFocus })
        };
    };
    Button.prototype.render = function () {
        var TagType = this.href === undefined ? 'button' : 'a';
        var attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), onClick: this.onClick.bind(this) }), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), this.mode === 'md' && h("ion-ripple-effect", null)));
    };
    Object.defineProperty(Button, "is", {
        get: function () { return "ion-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "properties", {
        get: function () {
            return {
                "buttonType": {
                    "type": String,
                    "attr": "button-type",
                    "mutable": true
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "reflectToAttr": true
                },
                "el": {
                    "elementRef": true
                },
                "expand": {
                    "type": String,
                    "attr": "expand",
                    "reflectToAttr": true
                },
                "fill": {
                    "type": String,
                    "attr": "fill",
                    "reflectToAttr": true,
                    "mutable": true
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "keyFocus": {
                    "state": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "shape": {
                    "type": String,
                    "attr": "shape",
                    "reflectToAttr": true
                },
                "size": {
                    "type": String,
                    "attr": "size",
                    "reflectToAttr": true
                },
                "strong": {
                    "type": Boolean,
                    "attr": "strong"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "style", {
        get: function () { return ":host{--overflow:hidden;--ripple-color:currentColor;display:inline-block;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host([disabled]){pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--color:var(--ion-color-primary-contrast, #fff);--color-activated:var(--ion-color-primary-contrast, #fff);--color-focused:var(--ion-color-primary-contrast, #fff);--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.activated) .button-native,:host(.button-solid.ion-color.focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff);--border-width:1px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary, #3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:0 0;color:var(--ion-color-base)}:host(.button-outline.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff);--opacity:1;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff)}:host(.button-clear.ion-color) .button-native{background:0 0;color:var(--ion-color-base)}:host(.button-clear.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:0 0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled]{cursor:default;opacity:.5;pointer-events:none}:host(.focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}.button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin:0 .3em 0 -.3em}::slotted(ion-icon[slot=end]){margin:0 -.2em 0 .3em}::slotted(ion-icon[slot=icon-only]){font-size:1.8em;padding:0}ion-ripple-effect{color:var(--ripple-color)}:host{--border-radius:2px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--height:36px;--transition:box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),color 300ms cubic-bezier(0.4, 0, 0.2, 1);font-size:14px;font-weight:500;letter-spacing:0;text-transform:uppercase}:host(.button-solid.activated){--box-shadow:0 3px 5px rgba(0, 0, 0, 0.14),0 3px 5px rgba(0, 0, 0, 0.21)}:host(.button-outline.activated.ion-color) .button-native{background:0 0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}:host(.button-strong){font-weight:700}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
function getButtonClassMap(buttonType, mode) {
    var _a;
    if (buttonType === undefined) {
        return {};
    }
    return _a = {},
        _a[buttonType] = true,
        _a[buttonType + "-" + mode] = true,
        _a;
}
function getButtonTypeClassMap(buttonType, type, mode) {
    var _a;
    if (type === undefined) {
        return {};
    }
    return _a = {},
        _a[buttonType + "-" + type] = true,
        _a[buttonType + "-" + type + "-" + mode] = true,
        _a;
}
var Icon = /** @class */ (function () {
    function Icon() {
        this.isVisible = false;
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    Icon.prototype.componentWillLoad = function () {
        var _this = this;
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, "50px", function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.componentDidUnload = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && this.win && this.win.IntersectionObserver) {
            var io_1 = this.io = new this.win.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    };
    Icon.prototype.loadIcon = function () {
        var _this = this;
        if (!this.isServer && this.isVisible) {
            var url = this.getUrl();
            if (url) {
                getSvgContent(url).then(function (svgContent) {
                    _this.svgContent = validateContent(_this.doc, svgContent, _this.el["s-sc"]);
                });
            }
        }
        if (!this.ariaLabel) {
            var name = getName(this.name, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (name) {
                this.ariaLabel = name
                    .replace("ios-", "")
                    .replace("md-", "")
                    .replace(/\-/g, " ");
            }
        }
    };
    Icon.prototype.getUrl = function () {
        var url = getSrc(this.src);
        if (url) {
            return url;
        }
        url = getName(this.name, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        url = getSrc(this.icon);
        if (url) {
            return url;
        }
        url = getName(this.icon, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        return null;
    };
    Icon.prototype.getNamedUrl = function (name) {
        return this.resourcesUrl + "svg/" + name + ".svg";
    };
    Icon.prototype.hostData = function () {
        var _a;
        return {
            "role": "img",
            class: Object.assign({}, createColorClasses$1(this.color), (_a = {}, _a["icon-" + this.size] = !!this.size, _a))
        };
    };
    Icon.prototype.render = function () {
        if (!this.isServer && this.svgContent) {
            // we've already loaded up this svg at one point
            // and the svg content we've loaded and assigned checks out
            // render this svg!!
            return h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        // actively requesting the svg
        // or it's an SSR render
        // so let's just render an empty div for now
        return h("div", { class: "icon-inner" });
    };
    Object.defineProperty(Icon, "is", {
        get: function () { return "ion-icon"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "properties", {
        get: function () {
            return {
                "ariaLabel": {
                    "type": String,
                    "attr": "aria-label",
                    "reflectToAttr": true,
                    "mutable": true
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
                "icon": {
                    "type": String,
                    "attr": "icon",
                    "watchCallbacks": ["loadIcon"]
                },
                "ios": {
                    "type": String,
                    "attr": "ios"
                },
                "isServer": {
                    "context": "isServer"
                },
                "isVisible": {
                    "state": true
                },
                "lazy": {
                    "type": Boolean,
                    "attr": "lazy"
                },
                "md": {
                    "type": String,
                    "attr": "md"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "name": {
                    "type": String,
                    "attr": "name",
                    "watchCallbacks": ["loadIcon"]
                },
                "resourcesUrl": {
                    "context": "resourcesUrl"
                },
                "size": {
                    "type": String,
                    "attr": "size"
                },
                "src": {
                    "type": String,
                    "attr": "src",
                    "watchCallbacks": ["loadIcon"]
                },
                "svgContent": {
                    "state": true
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "style", {
        get: function () { return ":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:currentColor;stroke:currentColor}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
var requests = new Map();
function getSvgContent(url) {
    // see if we already have a request for this url
    var req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url, { cache: "force-cache" }).then(function (rsp) {
            if (rsp.ok) {
                return rsp.text();
            }
            return Promise.resolve(null);
        });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
}
function getName(name, mode, ios, md) {
    // default to "md" if somehow the mode wasn't set
    mode = (mode || "md").toLowerCase();
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === "ios") {
        name = ios.toLowerCase();
    }
    else if (md && mode === "md") {
        name = md.toLowerCase();
    }
    else if (name) {
        name = name.toLowerCase();
        if (!/^md-|^ios-|^logo-/.test(name)) {
            // this does not have one of the defaults
            // so lets auto add in the mode prefix for them
            name = mode + "-" + name;
        }
    }
    if (typeof name !== "string" || name.trim() === "") {
        return null;
    }
    // only allow alpha characters and dash
    var invalidChars = name.replace(/[a-z]|-|\d/gi, "");
    if (invalidChars !== "") {
        return null;
    }
    return name;
}
function getSrc(src) {
    if (typeof src === "string") {
        src = src.trim();
        if (src.length > 0 && /(\/|\.)/.test(src)) {
            return src;
        }
    }
    return null;
}
function validateContent(document, svgContent, scopeId) {
    if (svgContent) {
        var frag = document.createDocumentFragment();
        var div = document.createElement("div");
        div.innerHTML = svgContent;
        frag.appendChild(div);
        // setup this way to ensure it works on our buddy IE
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
            if (scopeId) {
                svgElm.setAttribute("class", scopeId);
            }
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return "";
}
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === "script") {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (typeof val === "string" && val.toLowerCase().indexOf("on") === 0) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}
function createColorClasses$1(color) {
    var _a;
    return (color) ? (_a = {
            "ion-color": true
        },
        _a["ion-color-" + color] = true,
        _a) : null;
}
export { Button as IonButton, Icon as IonIcon };
