import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Color, Mode, RouterDirection } from '../../interface';
export declare class FabButton implements ComponentInterface {
    win: Window;
    el: HTMLElement;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * If true, the fab button will be show a close icon. Defaults to `false`.
     */
    activated: boolean;
    /**
     * If true, the user cannot interact with the fab button. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    routerDirection?: RouterDirection;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href?: string;
    /**
     * If true, the fab button will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the fab button will show when in a fab-list.
     */
    show: boolean;
    hostData(): {
        'ion-activatable': boolean;
        class: {
            'fab-button-in-list': boolean;
            'fab-button-translucent-in-list': boolean;
            'fab-button-close-active': boolean;
            'fab-button-show': boolean;
            'fab-button-disabled': boolean;
            'fab-button-translucent': boolean;
        } | {
            'fab-button-in-list': boolean;
            'fab-button-translucent-in-list': boolean;
            'fab-button-close-active': boolean;
            'fab-button-show': boolean;
            'fab-button-disabled': boolean;
            'fab-button-translucent': boolean;
        };
    };
    render(): JSX.Element;
}
