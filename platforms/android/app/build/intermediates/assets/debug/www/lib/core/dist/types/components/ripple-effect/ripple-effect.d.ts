import { ComponentInterface, QueueApi } from '../../stencil.core';
export declare class RippleEffect implements ComponentInterface {
    el: HTMLElement;
    queue: QueueApi;
    win: Window;
    /**
     * Adds the ripple effect to the parent element
     */
    addRipple(pageX: number, pageY: number): void;
    private prepareRipple;
}
