/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.prototype.hostData = function () {
        return {
            class: createColorClasses(this.color)
        };
    };
    Text.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Text, "is", {
        get: function () { return "ion-text"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text, "properties", {
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
    Object.defineProperty(Text, "style", {
        get: function () { return ":host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
}());
export { Text as IonText };
