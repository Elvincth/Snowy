import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Mode, StyleEvent, TextInputChangeEvent } from '../../interface';
export declare class Textarea implements ComponentInterface {
    private nativeInput?;
    private inputId;
    private didBlurAfterEdit;
    el: HTMLElement;
    hasFocus: boolean;
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
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
     */
    autocapitalize: string;
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
     */
    autofocus: boolean;
    /**
     * If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
     */
    clearOnEdit: boolean;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. Default `0`.
     */
    debounce: number;
    protected debounceChanged(): void;
    /**
     * If true, the user cannot interact with the textarea. Defaults to `false`.
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength?: number;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength?: number;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder?: string;
    /**
     * If true, the user cannot modify the value. Defaults to `false`.
     */
    readonly: boolean;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * If true, the element will have its spelling and grammar checked. Defaults to `false`.
     */
    spellcheck: boolean;
    /**
     * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
     */
    cols?: number;
    /**
     * The number of visible text lines for the control.
     */
    rows?: number;
    /**
     * Indicates how the control wraps text. Possible values are: `"hard"`, `"soft"`, `"off"`.
     */
    wrap?: string;
    /**
     * The value of the textarea.
     */
    value: string;
    /**
     * Update the native input element when the value changes
     */
    protected valueChanged(): void;
    /**
     * Emitted when the input value has changed.
     */
    ionChange: EventEmitter<TextInputChangeEvent>;
    /**
     * Emitted when a keyboard input ocurred.
     */
    ionInput: EventEmitter<KeyboardEvent>;
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    /**
     * Emitted when the input loses focus.
     */
    ionBlur: EventEmitter<void>;
    /**
     * Emitted when the input has focus.
     */
    ionFocus: EventEmitter<void>;
    componentDidLoad(): void;
    focus(): void;
    private emitStyle;
    private onInput;
    private onFocus;
    private onBlur;
    private onKeyDown;
    /**
     * Check if we need to clear the text input if clearOnEdit is enabled
     */
    private checkClearOnEdit;
    private focusChange;
    private hasValue;
    hostData(): {
        class: {};
    };
    render(): JSX.Element;
}
