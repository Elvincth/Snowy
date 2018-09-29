import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, Config, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class Toast implements ComponentInterface, OverlayInterface {
    private durationTimeout;
    presented: boolean;
    el: HTMLElement;
    animation: Animation | undefined;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    overlayIndex: number;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * Animation to use when the toast is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the toast is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * Text to display in the close button.
     */
    closeButtonText?: string;
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * How many milliseconds to wait before hiding the toast. By default, it will show
     * until `dismiss()` is called.
     */
    duration: number;
    /**
     * Message to be shown in the toast.
     */
    message?: string;
    /**
     * If true, the keyboard will be automatically dismissed when the overlay is presented.
     */
    keyboardClose: boolean;
    /**
     * The position of the toast on the screen. Possible values: "top", "middle", "bottom".
     */
    position: 'top' | 'bottom' | 'middle';
    /**
     * If true, the close button will be displayed. Defaults to `false`.
     */
    showCloseButton: boolean;
    /**
     * If true, the toast will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the toast will animate. Defaults to `true`.
     */
    animated: boolean;
    /**
     * Emitted after the toast has loaded.
     */
    ionToastDidLoad: EventEmitter<void>;
    /**
     * Emitted after the toast has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the toast has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the toast has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the toast has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the toast has unloaded.
     */
    ionToastDidUnload: EventEmitter<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    /**
     * Present the toast overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the toast overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    hostData(): {
        style: {
            zIndex: number;
        };
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element;
}
