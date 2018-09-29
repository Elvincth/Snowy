import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Mode, RouterDirection } from '../../interface';
export declare class Button implements ComponentInterface {
    el: HTMLElement;
    win: Window;
    keyFocus: boolean;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * The type of button.
     * Possible values are: `"button"`, `"bar-button"`.
     */
    buttonType: string;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Set to `"block"` for a full-width button or to `"full"` for a full-width button
     * without left and right borders.
     */
    expand?: 'full' | 'block';
    /**
     * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
     * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
     * a toolbar, where the default is `"clear"`.
     */
    fill?: 'clear' | 'outline' | 'solid' | 'default';
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
     * The button shape.
     * Possible values are: `"round"`.
     */
    shape?: 'round';
    /**
     * The button size.
     * Possible values are: `"small"`, `"default"`, `"large"`.
     */
    size?: 'small' | 'default' | 'large';
    /**
     * If true, activates a button with a heavier font weight.
     */
    strong: boolean;
    /**
     * The type of the button.
     * Possible values are: `"submit"`, `"reset"` and `"button"`.
     * Default value is: `"button"`
     */
    type: 'submit' | 'reset' | 'button';
    /**
     * Emitted when the button has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the button loses focus.
     */
    ionBlur: EventEmitter<void>;
    componentWillLoad(): void;
    private onFocus;
    private onKeyUp;
    private onBlur;
    private onClick;
    hostData(): {
        'ion-activatable': boolean;
        class: {
            'focused': boolean;
        } | {
            'focused': boolean;
        };
    };
    render(): JSX.Element;
}
