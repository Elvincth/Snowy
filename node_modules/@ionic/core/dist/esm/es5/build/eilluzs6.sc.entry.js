/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { a as matchBreakpoint } from './chunk-e7816c0b.js';
var SUPPORTS_VARS = !!(CSS && CSS.supports && CSS.supports('--a: 0'));
var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
var Col = /** @class */ (function () {
    function Col() {
    }
    Col.prototype.onResize = function () {
        this.el.forceUpdate();
    };
    Col.prototype.getColumns = function (property) {
        var matched;
        for (var _i = 0, BREAKPOINTS_1 = BREAKPOINTS; _i < BREAKPOINTS_1.length; _i++) {
            var breakpoint = BREAKPOINTS_1[_i];
            var matches = matchBreakpoint(this.win, breakpoint);
            var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    };
    Col.prototype.calculateSize = function () {
        var columns = this.getColumns('size');
        if (!columns || columns === '') {
            return;
        }
        var colSize = (columns === 'auto')
            ? 'auto'
            : SUPPORTS_VARS ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
                : ((columns / 12) * 100) + '%';
        return {
            'flex': "0 0 " + colSize,
            'width': "" + colSize,
            'max-width': "" + colSize
        };
    };
    Col.prototype.calculatePosition = function (property, modifier) {
        var _a;
        var columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        var amount = SUPPORTS_VARS
            ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
        return _a = {},
            _a[modifier] = amount,
            _a;
    };
    Col.prototype.calculateOffset = function () {
        return this.calculatePosition('offset', 'margin-left');
    };
    Col.prototype.calculatePull = function () {
        return this.calculatePosition('pull', 'right');
    };
    Col.prototype.calculatePush = function () {
        return this.calculatePosition('push', 'left');
    };
    Col.prototype.hostData = function () {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    };
    Col.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Col, "is", {
        get: function () { return "ion-col"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                },
                "offset": {
                    "type": String,
                    "attr": "offset"
                },
                "offsetLg": {
                    "type": String,
                    "attr": "offset-lg"
                },
                "offsetMd": {
                    "type": String,
                    "attr": "offset-md"
                },
                "offsetSm": {
                    "type": String,
                    "attr": "offset-sm"
                },
                "offsetXl": {
                    "type": String,
                    "attr": "offset-xl"
                },
                "offsetXs": {
                    "type": String,
                    "attr": "offset-xs"
                },
                "pull": {
                    "type": String,
                    "attr": "pull"
                },
                "pullLg": {
                    "type": String,
                    "attr": "pull-lg"
                },
                "pullMd": {
                    "type": String,
                    "attr": "pull-md"
                },
                "pullSm": {
                    "type": String,
                    "attr": "pull-sm"
                },
                "pullXl": {
                    "type": String,
                    "attr": "pull-xl"
                },
                "pullXs": {
                    "type": String,
                    "attr": "pull-xs"
                },
                "push": {
                    "type": String,
                    "attr": "push"
                },
                "pushLg": {
                    "type": String,
                    "attr": "push-lg"
                },
                "pushMd": {
                    "type": String,
                    "attr": "push-md"
                },
                "pushSm": {
                    "type": String,
                    "attr": "push-sm"
                },
                "pushXl": {
                    "type": String,
                    "attr": "push-xl"
                },
                "pushXs": {
                    "type": String,
                    "attr": "push-xs"
                },
                "size": {
                    "type": String,
                    "attr": "size"
                },
                "sizeLg": {
                    "type": String,
                    "attr": "size-lg"
                },
                "sizeMd": {
                    "type": String,
                    "attr": "size-md"
                },
                "sizeSm": {
                    "type": String,
                    "attr": "size-sm"
                },
                "sizeXl": {
                    "type": String,
                    "attr": "size-xl"
                },
                "sizeXs": {
                    "type": String,
                    "attr": "size-xs"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col, "listeners", {
        get: function () {
            return [{
                    "name": "window:resize",
                    "method": "onResize",
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Col, "style", {
        get: function () { return ".sc-ion-col-h{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@media (min-width:576px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}\@media (min-width:768px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}\@media (min-width:992px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}\@media (min-width:1200px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"; },
        enumerable: true,
        configurable: true
    });
    return Col;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this.fixed = false;
    }
    Grid.prototype.hostData = function () {
        return {
            class: {
                'grid-fixed': this.fixed
            }
        };
    };
    Grid.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Grid, "is", {
        get: function () { return "ion-grid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid, "properties", {
        get: function () {
            return {
                "fixed": {
                    "type": Boolean,
                    "attr": "fixed"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid, "style", {
        get: function () { return ".sc-ion-grid-h{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){.sc-ion-grid-h{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){.sc-ion-grid-h{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){.sc-ion-grid-h{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){.sc-ion-grid-h{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding].sc-ion-grid-h{padding:0}.sc-ion-grid-h[no-padding] .sc-ion-grid-s > ion-col{padding:0}"; },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
var Row = /** @class */ (function () {
    function Row() {
    }
    Row.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Row, "is", {
        get: function () { return "ion-row"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Row, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Row, "style", {
        get: function () { return ".sc-ion-row-h{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; },
        enumerable: true,
        configurable: true
    });
    return Row;
}());
export { Col as IonCol, Grid as IonGrid, Row as IonRow };
