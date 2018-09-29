import { rIC } from '../../utils/helpers';
import { isPlatform } from '../../utils/platform';
export class App {
    componentDidLoad() {
        rIC(() => {
            importTapClick(this.win);
            importInputShims(this.win, this.config);
            importStatusTap(this.win, this.queue);
            importHardwareBackButton(this.win);
        });
    }
    hostData() {
        return {
            class: {
                'ion-page': true,
            }
        };
    }
    static get is() { return "ion-app"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-app:**/"; }
}
function importHardwareBackButton(win) {
    if (isPlatform(win, 'hybrid')) {
        import('../../utils/hardware-back-button').then(module => module.startHardwareBackButton(win));
    }
}
function importStatusTap(win, queue) {
    if (isPlatform(win, 'hybrid')) {
        import('../../utils/status-tap').then(module => module.startStatusTap(win, queue));
    }
}
function importTapClick(win) {
    import('../../utils/tap-click').then(module => module.startTapClick(win.document));
}
function importInputShims(win, config) {
    const inputShims = config.getBoolean('inputShims', needInputShims(win));
    if (inputShims) {
        import('../../utils/input-shims/input-shims').then(module => module.startInputShims(win.document, config));
    }
}
function needInputShims(win) {
    return isPlatform(win, 'ios') && isPlatform(win, 'mobile');
}
