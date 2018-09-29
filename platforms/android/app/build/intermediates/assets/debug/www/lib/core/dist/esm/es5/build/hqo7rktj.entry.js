/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses, g as createThemedClasses } from './chunk-50fe9317.js';
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Object.defineProperty(Card, "is", {
        get: function () { return "ion-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
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
    Object.defineProperty(Card, "style", {
        get: function () { return ".sc-ion-card-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;--background:var(--ion-item-background-color, transparent);--color:var(--ion-text-color-step-400, #666666);margin:30px 20px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:currentColor}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin:0}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
var CardContent = /** @class */ (function () {
    function CardContent() {
    }
    CardContent.prototype.hostData = function () {
        return {
            class: createThemedClasses(this.mode, 'card-content')
        };
    };
    Object.defineProperty(CardContent, "is", {
        get: function () { return "ion-card-content"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardContent, "properties", {
        get: function () {
            return {
                "mode": {
                    "type": String,
                    "attr": "mode"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardContent, "style", {
        get: function () { return "ion-card-content{display:block;position:relative}.card-content-ios{padding:20px;font-size:16px;line-height:1.4}.card-content-ios h1{margin:0 0 2px;font-size:24px;font-weight:400}.card-content-ios h2{margin:2px 0;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin:2px 0;font-size:14px;font-weight:400}.card-content-ios p{margin:0 0 2px;font-size:14px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardContent, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return CardContent;
}());
var CardHeader = /** @class */ (function () {
    function CardHeader() {
        this.translucent = false;
    }
    CardHeader.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'card-header-translucent': this.translucent })
        };
    };
    CardHeader.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(CardHeader, "is", {
        get: function () { return "ion-card-header"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardHeader, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardHeader, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "translucent": {
                    "type": Boolean,
                    "attr": "translucent"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardHeader, "style", {
        get: function () { return ":host{display:block;position:relative;padding:20px 20px 16px}:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardHeader, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return CardHeader;
}());
var CardSubtitle = /** @class */ (function () {
    function CardSubtitle() {
    }
    CardSubtitle.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color),
            'role': 'heading',
            'aria-level': '3'
        };
    };
    CardSubtitle.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(CardSubtitle, "is", {
        get: function () { return "ion-card-subtitle"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardSubtitle, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardSubtitle, "properties", {
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
    Object.defineProperty(CardSubtitle, "style", {
        get: function () { return ":host{display:block;position:relative;color:var(--color);--color:var(--ion-text-color-step-400, #666666);margin:0 0 4px;padding:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}:host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardSubtitle, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return CardSubtitle;
}());
var CardTitle = /** @class */ (function () {
    function CardTitle() {
    }
    CardTitle.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color),
            'role': 'heading',
            'aria-level': '2'
        };
    };
    CardTitle.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(CardTitle, "is", {
        get: function () { return "ion-card-title"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardTitle, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardTitle, "properties", {
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
    Object.defineProperty(CardTitle, "style", {
        get: function () { return ":host{display:block;position:relative;color:var(--color);--color:var(--ion-text-color, #000);margin:0;padding:0;font-size:28px;font-weight:700;line-height:1.2}:host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardTitle, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return CardTitle;
}());
export { Card as IonCard, CardContent as IonCardContent, CardHeader as IonCardHeader, CardSubtitle as IonCardSubtitle, CardTitle as IonCardTitle };
