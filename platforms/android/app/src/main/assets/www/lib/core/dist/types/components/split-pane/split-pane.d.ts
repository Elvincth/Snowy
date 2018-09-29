import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class SplitPane implements ComponentInterface {
    private rmL;
    mode: Mode;
    el: HTMLElement;
    visible: boolean;
    isServer: boolean;
    win: Window;
    /**
     * If true, the split pane will be hidden. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */
    when: string | boolean;
    /**
     * Emitted when the split pane is visible.
     */
    ionChange: EventEmitter<{
        visible: boolean;
    }>;
    /**
     * Expression to be called when the split-pane visibility has changed
     */
    ionSplitPaneVisible: EventEmitter;
    visibleChanged(visible: boolean): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected updateState(): void;
    private isPane;
    private styleChildren;
    hostData(): {
        class: {
            'split-pane-visible': boolean;
        };
    };
}
