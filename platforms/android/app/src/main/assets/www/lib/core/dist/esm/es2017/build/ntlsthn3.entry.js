/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { a as matchBreakpoint, m as isPlatform } from './chunk-e7816c0b.js';

function isPlatformMatch(win, multiPlatformString) {
    const platforms = split(multiPlatformString);
    return platforms.some(p => isPlatform(win, p));
}
function isModeMatch(config, multiModeString) {
    const modes = split(multiModeString);
    const currentMode = config.get('mode');
    return modes.includes(currentMode);
}
function isSizeMatch(win, multiSizeString) {
    const sizes = split(multiSizeString);
    return sizes.some(s => matchBreakpoint(win, s));
}
function split(multiOptions) {
    return multiOptions.replace(/\s/g, '').split(',');
}
function getTestResult(displayWhen) {
    const results = [];
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
        return results.some(r => r);
    }
    else {
        return results.every(r => r);
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

class HideWhen {
    constructor() {
        this.or = false;
        this.passesTest = false;
    }
    componentWillLoad() {
        this.onResize();
    }
    onResize() {
        this.passesTest = getTestResult(this);
    }
    hostData() {
        return {
            class: {
                'show-content': !this.passesTest,
                'hide-content': this.passesTest
            }
        };
    }
    static get is() { return "ion-hide-when"; }
    static get properties() { return {
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
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "ion-hide-when.show-content{display:block}ion-hide-when.hide-content{display:none!important}"; }
}

class ShowWhen {
    constructor() {
        this.or = false;
        this.passesTest = false;
    }
    componentWillLoad() {
        this.onResize();
    }
    onResize() {
        this.passesTest = getTestResult(this);
    }
    hostData() {
        return {
            class: {
                'show-content': this.passesTest,
                'hide-content': !this.passesTest
            }
        };
    }
    static get is() { return "ion-show-when"; }
    static get properties() { return {
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
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "ion-show-when.show-content{display:block}ion-show-when.hide-content{display:none!important}"; }
}

export { HideWhen as IonHideWhen, ShowWhen as IonShowWhen };
