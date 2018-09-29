import { ComponentInterface } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class List implements ComponentInterface {
    el: HTMLElement;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * How the bottom border should be displayed on all items.
     * Available options: `"full"`, `"inset"`, `"none"`.
     */
    lines?: 'full' | 'inset' | 'none';
    /**
     * If true, the list will have margin around it and rounded corners. Defaults to `false`.
     */
    inset: boolean;
    closeSlidingItems(): Promise<boolean>;
    hostData(): {
        class: {
            [x: string]: boolean;
            'list-inset': boolean;
        };
    };
}
