/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

function rIC(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
}
function hasShadowDom(el) {
    return !!el.shadowRoot && !!el.attachShadow;
}
function renderHiddenInput(container, name, value, disabled) {
    if (hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value;
    }
}
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
function assert(actual, reason) {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger;
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
function isEndSide(win, side) {
    const isRTL = win.document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
}
function deferEvent(event) {
    return debounceEvent(event, 0);
}
function debounceEvent(event, wait) {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
}
function debounce(func, wait = 0) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
}

const PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'desktop': isDesktop,
    'hybrid': isHybrid
};
function getPlatforms(win) {
    return setupPlatforms(win);
}
function isPlatform(win, platform) {
    return getPlatforms(win).includes(platform);
}
function setupPlatforms(win) {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        const classList = win.document.documentElement.classList;
        platforms.forEach(p => classList.add(`plt-${p}`));
    }
    return platforms;
}
function detectPlatforms(win) {
    return Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
}
function isIpad(win) {
    return testUserAgent(win, /iPad/i);
}
function isIphone(win) {
    return testUserAgent(win, /iPhone/i);
}
function isIOS(win) {
    return testUserAgent(win, /iPad|iPhone|iPod/i);
}
function isAndroid(win) {
    return testUserAgent(win, /android|sink/i);
}
function isPhablet(win) {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
}
function isTablet(win) {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 460 && smallest < 820) &&
        (largest > 780 && largest < 1400);
}
function isMobile(win) {
    return matchMedia(win, '(any-pointer:coarse)');
}
function isDesktop(win) {
    return !isMobile(win);
}
function isHybrid(win) {
    return isCordova(win) || isCapacitorNative(win);
}
function isCordova(window) {
    const win = window;
    return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
}
function isCapacitorNative(window) {
    const win = window;
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
}
function isElectron(win) {
    return testUserAgent(win, /electron/);
}
function isPWA(win) {
    return win.matchMedia('(display-mode: standalone)').matches;
}
function testUserAgent(win, expr) {
    return expr.test(win.navigator.userAgent);
}
function matchMedia(win, query) {
    return win.matchMedia(query).matches;
}

export { matchBreakpoint as a, rIC as b, now as c, hasShadowDom as d, deferEvent as e, renderHiddenInput as f, debounceEvent as g, isEndSide as h, assert as i, clamp as j, debounce as k, pointerCoord as l, isPlatform as m, PLATFORMS_MAP as n, getPlatforms as o, setupPlatforms as p };
