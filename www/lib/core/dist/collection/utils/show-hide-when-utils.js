import { matchBreakpoint } from './media';
import { isPlatform } from './platform';
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
export function getTestResult(displayWhen) {
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
