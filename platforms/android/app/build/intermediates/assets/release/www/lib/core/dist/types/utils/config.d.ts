import { Mode } from '../interface';
export interface IonicConfig {
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode?: Mode;
    persistConfig?: boolean;
    inputShims?: boolean;
    backButtonIcon?: string;
    backButtonText?: string;
    spinner?: string;
    loadingSpinner?: string;
    menuIcon?: string;
    animated?: boolean;
    pickerSpinner?: string;
    refreshingIcon?: string;
    refreshingSpinner?: string;
    menuType?: string;
    scrollPadding?: string;
    inputBlurring?: string;
    scrollAssist?: boolean;
    hideCaretOnScroll?: string;
    infiniteLoadingSpinner?: string;
    keyboardHeight?: number;
    swipeBackEnabled?: boolean;
    tabbarPlacement?: string;
    tabbarLayout?: string;
    tabbarHighlight?: boolean;
    actionSheetEnter?: string;
    alertEnter?: string;
    loadingEnter?: string;
    modalEnter?: string;
    popoverEnter?: string;
    toastEnter?: string;
    pickerEnter?: string;
    actionSheetLeave?: string;
    alertLeave?: string;
    loadingLeave?: string;
    modalLeave?: string;
    popoverLeave?: string;
    toastLeave?: string;
    pickerLeave?: string;
}
export declare function setupConfig(config: IonicConfig): any;
