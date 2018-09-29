import { a as matchBreakpoint, m as isPlatform } from './chunk-e7816c0b.js';
function isPlatformMatch(win, multiPlatformString) {
    var platforms = split(multiPlatformString);
    return platforms.some(function (p) { return isPlatform(win, p); });
}
function isModeMatch(config, multiModeString) {
    var modes = split(multiModeString);
    var currentMode = config.get('mode');
    return modes.includes(currentMode);
}
function isSizeMatch(win, multiSizeString) {
    var sizes = split(multiSizeString);
    return sizes.some(function (s) { return matchBreakpoint(win, s); });
}
function split(multiOptions) {
    return multiOptions.replace(/\s/g, '').split(',');
}
function getTestResult(displayWhen) {
    var results = [];
    if (displayWhen.mediaQuery !== undefined) {
        results.push(matchMedia(displayWhen.win, displayWhen.mediaQuery));
    }
    if (displayWhen.size !== undefined) {
        results.push(isSizeMatch(displayWhen.win, displayWhen.size));
    }
    if (displayWhen.modes !== undefined) {
        results.push(isModeMatch(displayWhen.config, displayWhen.modes));
    }
    if (displayWhen.platform !== undefined) {
        results.push(isPlatformMatch(displayWhen.win, displayWhen.platform));
    }
    if (displayWhen.orientation !== undefined) {
        results.push(isOrientationMatch(displayWhen.win, displayWhen.orientation));
    }
    if (displayWhen.or) {
        return results.some(function (r) { return r; });
    }
    else {
        return results.every(function (r) { return r; });
    }
}
function isOrientationMatch(win, orientation) {
    if (orientation === 'portrait') {
        return isPortrait(win);
    }
    else if (orientation === 'landscape') {
        return !isPortrait(win);
    }
    return false;
}
function isPortrait(win) {
    return matchMedia(win, '(orientation: portrait)');
}
function matchMedia(win, query) {
    return win.matchMedia(query).matches;
}
var HideWhen = /** @class */ (function () {
    function HideWhen() {
        this.or = false;
        this.passesTest = false;
    }
    HideWhen.prototype.componentWillLoad = function () {
        this.onResize();
    };
    HideWhen.prototype.onResize = function () {
        this.passesTest = getTestResult(this);
    };
    HideWhen.prototype.hostData = function () {
        return {
            class: {
                'show-content': !this.passesTest,
                'hide-content': this.passesTest
            }
        };
    };
    Object.defineProperty(HideWhen, "is", {
        get: function () { return "ion-hide-when"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideWhen, "properties", {
        get: function () {
            return {
                "config": {
                    "context": "config"
                },
                "element": {
                    "elementRef": true
                },
                "mediaQuery": {
                    "type": String,
                    "attr": "media-query"
                },
                "modes": {
                    "type": String,
                    "attr": "modes"
                },
                "or": {
                    "type": Boolean,
                    "attr": "or"
                },
                "orientation": {
                    "type": String,
                    "attr": "orientation"
                },
                "passesTest": {
                    "state": true
                },
                "platform": {
                    "type": String,
                    "attr": "platform"
                },
                "size": {
                    "type": String,
                    "attr": "size"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideWhen, "listeners", {
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
    Object.defineProperty(HideWhen, "style", {
        get: function () { return "ion-hide-when.show-content{display:block}ion-hide-when.hide-content{display:none!important}"; },
        enumerable: true,
        configurable: true
    });
    return HideWhen;
}());
var ShowWhen = /** @class */ (function () {
    function ShowWhen() {
        this.or = false;
        this.passesTest = false;
    }
    ShowWhen.prototype.componentWillLoad = function () {
        this.onResize();
    };
    ShowWhen.prototype.onResize = function () {
        this.passesTest = getTestResult(this);
    };
    ShowWhen.prototype.hostData = function () {
        return {
            class: {
                'show-content': this.passesTest,
                'hide-content': !this.passesTest
            }
        };
    };
    Object.defineProperty(ShowWhen, "is", {
        get: function () { return "ion-show-when"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowWhen, "properties", {
        get: function () {
            return {
                "config": {
                    "context": "config"
                },
                "element": {
                    "elementRef": true
                },
                "mediaQuery": {
                    "type": String,
                    "attr": "media-query"
                },
                "modes": {
                    "type": String,
                    "attr": "modes"
                },
                "or": {
                    "type": Boolean,
                    "attr": "or"
                },
                "orientation": {
                    "type": String,
                    "attr": "orientation"
                },
                "passesTest": {
                    "state": true
                },
                "platform": {
                    "type": String,
                    "attr": "platform"
                },
                "size": {
                    "type": String,
                    "attr": "size"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowWhen, "listeners", {
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
    Object.defineProperty(ShowWhen, "style", {
        get: function () { return "ion-show-when.show-content{display:block}ion-show-when.hide-content{display:none!important}"; },
        enumerable: true,
        configurable: true
    });
    return ShowWhen;
}());
export { HideWhen as IonHideWhen, ShowWhen as IonShowWhen };
