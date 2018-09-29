import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { CheckedInputChangeEvent, Color, Mode, StyleEvent } from '../../interface';
export declare class Radio implements ComponentInterface {
    private inputId;
    private nativeInput;
    keyFocus: boolean;
    el: HTMLElement;
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
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    disabled: boolean;
    /**
     * If true, the radio is selected. Defaults to `false`.
     */
    checked: boolean;
    /**
     * the value of the radio.
     */
    value: any | null;
    /**
     * Emitted when the radio loads.
     */
    ionRadioDidLoad: EventEmitter<void>;
    /**
     * Emitted when the radio unloads.
     */
    ionRadioDidUnload: EventEmitter<void>;
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    /**
     * Emitted when the radio button is selected.
     */
    ionSelect: EventEmitter<CheckedInputChangeEvent>;
    /**
     * Emitted when the radio button has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the radio button loses focus.
     */
    ionBlur: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    colorChanged(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(isDisabled: boolean): void;
    emitStyle(): void;
    onClick(): void;
    onChange(): void;
    onKeyUp(): void;
    onFocus(): void;
    onBlur(): void;
    hostData(): {
        class: {
            'in-item': boolean;
            'interactive': boolean;
            'radio-checked': boolean;
            'radio-disabled': boolean;
            'radio-key': boolean;
        } | {
            'in-item': boolean;
            'interactive': boolean;
            'radio-checked': boolean;
            'radio-disabled': boolean;
            'radio-key': boolean;
        };
    };
    render(): JSX.Element[];
}
