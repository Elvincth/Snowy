/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

function startHardwareBackButton(win) {
    let busy = false;
    win.document.addEventListener('backbutton', () => {
        if (busy) {
            return;
        }
        const handlers = [];
        const ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register(priority, handler) {
                    handlers.push({ priority, handler });
                }
            }
        });
        win.document.dispatchEvent(ev);
        if (handlers.length > 0) {
            let selectedPriority = Number.MIN_SAFE_INTEGER;
            let handler;
            handlers.forEach(h => {
                if (h.priority >= selectedPriority) {
                    selectedPriority = h.priority;
                    handler = h.handler;
                }
            });
            busy = true;
            executeAction(handler).then(() => busy = false);
        }
    });
}
async function executeAction(handler) {
    try {
        if (handler) {
            const result = handler();
            if (result != null) {
                await result;
            }
        }
    }
    catch (e) {
        console.error(e);
    }
}

export { startHardwareBackButton };
