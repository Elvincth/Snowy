/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var spinners = {
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;
var Spinner = /** @class */ (function () {
    function Spinner() {
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var name = this.name || this.config.get('spinner');
        if (name) {
            return name;
        }
        return (this.mode === 'ios') ? 'lines' : 'crescent';
    };
    Spinner.prototype.hostData = function () {
        var _a;
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["spinner-" + this.getName()] = true, _a['spinner-paused'] = !!this.paused, _a))
        };
    };
    Spinner.prototype.render = function () {
        var name = this.getName();
        var spinner = SPINNERS[name] || SPINNERS['lines'];
        var duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        var svgs = [];
        if (spinner.circles !== undefined) {
            for (var i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (var i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return svgs;
    };
    Object.defineProperty(Spinner, "is", {
        get: function () { return "ion-spinner"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "duration": {
                    "type": Number,
                    "attr": "duration"
                },
                "name": {
                    "type": "Any",
                    "attr": "name"
                },
                "paused": {
                    "type": Boolean,
                    "attr": "paused"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner, "style", {
        get: function () { return ".sc-ion-spinner-h{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-h{color:var(--ion-color-base)}svg.sc-ion-spinner{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.spinner-lines.sc-ion-spinner-h   line.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   line.sc-ion-spinner{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-h   svg.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}.spinner-bubbles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}.spinner-circles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}.spinner-crescent.sc-ion-spinner-h   circle.sc-ion-spinner{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}.spinner-dots.sc-ion-spinner-h   circle.sc-ion-spinner{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}.spinner-paused.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}\@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
function buildCircle(spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("circle", { transform: "translate(32,32)", r: data.r })));
}
function buildLine(spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
}
export { Spinner as IonSpinner };
