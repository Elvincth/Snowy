import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
export declare class ReorderGroup implements ComponentInterface {
    private selectedItemEl?;
    private selectedItemHeight;
    private lastToIndex;
    private cachedHeights;
    private scrollEl?;
    private gesture?;
    private scrollElTop;
    private scrollElBottom;
    private scrollElInitial;
    private containerTop;
    private containerBottom;
    activated: boolean;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    /**
     * If true, the reorder will be hidden. Defaults to `true`.
     */
    disabled: boolean;
    disabledChanged(): void;
    ionItemReorder: EventEmitter;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    private canStart;
    private onStart;
    private onMove;
    private onEnd;
    private itemIndexForTop;
    /********* DOM WRITE ********* */
    private reorderMove;
    private autoscroll;
    hostData(): {
        class: {
            'reorder-enabled': boolean;
            'reorder-list-active': boolean;
        };
    };
}
