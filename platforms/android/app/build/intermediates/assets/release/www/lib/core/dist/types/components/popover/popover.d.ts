import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, ComponentProps, ComponentRef, Config, FrameworkDelegate, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class Popover implements ComponentInterface, OverlayInterface {
    private usersElement?;
    presented: boolean;
    animation?: Animation;
    el: HTMLElement;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    delegate?: FrameworkDelegate;
    overlayIndex: number;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * Animation to use when the popover is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the popover is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * The component to display inside of the popover.
     */
    component: ComponentRef;
    /**
     * The data to pass to the popover component.
     */
    componentProps?: ComponentProps;
    /**
     * If true, the keyboard will be automatically dismissed when the overlay is presented.
     */
    keyboardClose: boolean;
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * If true, the popover will be dismissed when the backdrop is clicked. Defaults to `true`.
     */
    backdropDismiss: boolean;
    /**
     * The event to pass to the popover animation.
     */
    event: any;
    /**
     * If true, a backdrop will be displayed behind the popover. Defaults to `true`.
     */
    showBackdrop: boolean;
    /**
     * If true, the popover will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the popover will animate. Defaults to `true`.
     */
    animated: boolean;
    /**
     * Emitted after the popover has loaded.
     */
    ionPopoverDidLoad: EventEmitter<void>;
    /**
     * Emitted after the popover has unloaded.
     */
    ionPopoverDidUnload: EventEmitter<void>;
    /**
     * Emitted after the popover has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the popover has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the popover has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the popover has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    protected onBackdropTap(): void;
    protected lifecycle(modalEvent: CustomEvent): void;
    /**
     * Present the popover overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the popover overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the popover did dismiss.
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the popover will dismiss.
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    hostData(): {
        style: {
            zIndex: number;
        };
        'no-router': boolean;
        class: {
            'popover-translucent': boolean;
        };
    };
    render(): JSX.Element[];
}
