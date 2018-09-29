import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { Color, Mode, TabbarLayout, TabbarPlacement } from '../../interface';
export declare class Tabbar implements ComponentInterface {
    mode: Mode;
    color?: Color;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    keyboardVisible: boolean;
    /**
     * Set the layout of the text and icon in the tabbar. Available options: `"icon-top"`, `"icon-start"`, `"icon-end"`, `"icon-bottom"`, `"icon-hide"`, `"label-hide"`.
     */
    layout: TabbarLayout;
    /**
     * Set the position of the tabbar, relative to the content. Available options: `"top"`, `"bottom"`.
     */
    placement: TabbarPlacement;
    /** The selected tab component */
    selectedTab?: HTMLIonTabElement;
    /** The tabs to render */
    tabs: HTMLIonTabElement[];
    /**
     * If true, show the tab highlight bar under the selected tab.
     */
    highlight: boolean;
    /**
     * If true, the tabbar will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /** Emitted when the tab bar is clicked  */
    ionTabbarClick: EventEmitter<HTMLIonTabElement>;
    protected onKeyboardWillHide(): void;
    protected onKeyboardWillShow(): void;
    componentDidLoad(): void;
    private getSelectedButton;
    private updateHighlight;
    hostData(): {
        role: string;
        'aria-hidden': string | null;
        class: {
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
        } | {
            [x: string]: boolean;
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
        };
    };
    renderTabButton(tab: HTMLIonTabElement): JSX.Element;
    render(): JSX.Element[];
}
