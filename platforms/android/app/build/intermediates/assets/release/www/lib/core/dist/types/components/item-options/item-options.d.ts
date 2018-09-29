import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Side } from '../../interface';
export declare class ItemOptions implements ComponentInterface {
    el: HTMLElement;
    win: Window;
    /**
     * The side the option button should be on. Possible values: `"start"` and `"end"`. Defaults to `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
     *
     */
    side: Side;
    /**
     * Emitted when the item has been fully swiped.
     */
    ionSwipe: EventEmitter<any>;
    fireSwipeEvent(): void;
    hostData(): {
        class: {
            'item-options-start': boolean;
            'item-options-end': boolean;
        };
    };
}
