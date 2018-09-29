import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { CheckedInputChangeEvent, Color, Mode, StyleEvent } from '../../interface';
export declare class Toggle implements ComponentInterface {
    private inputId;
    private nativeInput;
    private pivotX;
    private gesture?;
    el: HTMLElement;
    queue: QueueApi;
    activated: boolean;
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
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * If true, the toggle is selected. Defaults to `false`.
     */
    checked: boolean;
    disabled: boolean;
    /**
     * the value of the toggle.
     */
    value: string;
    /**
     * Emitted when the value property has changed.
     */
    ionChange: EventEmitter<CheckedInputChangeEvent>;
    /**
     * Emitted when the toggle has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the toggle loses focus.
     */
    ionBlur: EventEmitter<void>;
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    private onStart;
    private onMove;
    private onEnd;
    private onChange;
    private onKeyUp;
    private onFocus;
    private onBlur;
    hostData(): {
        class: {
            'in-item': boolean;
            'toggle-activated': boolean;
            'toggle-checked': boolean;
            'toggle-disabled': boolean;
            'toggle-key': boolean;
            'interactive': boolean;
        } | {
            'in-item': boolean;
            'toggle-activated': boolean;
            'toggle-checked': boolean;
            'toggle-disabled': boolean;
            'toggle-key': boolean;
            'interactive': boolean;
        };
    };
    render(): JSX.Element[];
}
