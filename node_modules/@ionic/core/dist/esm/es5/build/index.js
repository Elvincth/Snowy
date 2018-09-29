export { n as PLATFORMS_MAP, o as getPlatforms, m as isPlatform, p as setupPlatforms } from './chunk-e7816c0b.js';
function setupConfig(config) {
    var win = window;
    var Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign({}, win.Ionic.config, config);
    return win.Ionic.config;
}
export { setupConfig };
