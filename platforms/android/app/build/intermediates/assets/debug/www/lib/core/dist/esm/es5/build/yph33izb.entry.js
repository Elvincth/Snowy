/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var Avatar = /** @class */ (function () {
    function Avatar() {
    }
    Avatar.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Avatar, "is", {
        get: function () { return "ion-avatar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avatar, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avatar, "style", {
        get: function () { return ":host{border-radius:var(--border-radius);display:block;--border-radius:50%;width:48px;height:48px}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avatar, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Avatar;
}());
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Badge.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Badge, "is", {
        get: function () { return "ion-badge"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "style", {
        get: function () { return ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;border-radius:10px}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
var Thumbnail = /** @class */ (function () {
    function Thumbnail() {
    }
    Thumbnail.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Thumbnail, "is", {
        get: function () { return "ion-thumbnail"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thumbnail, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thumbnail, "style", {
        get: function () { return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    return Thumbnail;
}());
export { Avatar as IonAvatar, Badge as IonBadge, Thumbnail as IonThumbnail };
