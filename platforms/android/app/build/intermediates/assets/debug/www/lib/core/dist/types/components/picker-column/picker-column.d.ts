import '../../stencil.core';
import { ComponentInterface, QueueApi } from '../../stencil.core';
import { Mode, PickerColumn } from '../../interface';
/** @hidden */
export declare class PickerColumnCmp implements ComponentInterface {
    mode: Mode;
    private bounceFrom;
    private lastIndex?;
    private minY;
    private maxY;
    private optHeight;
    private rotateFactor;
    private scaleFactor;
    private velocity;
    private y;
    private optsEl?;
    private gesture?;
    private rafId;
    el: HTMLElement;
    queue: QueueApi;
    col: PickerColumn;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    private setSelected;
    private update;
    private decelerate;
    private indexForY;
    private onStart;
    private onMove;
    private onEnd;
    private refresh;
    hostData(): {
        class: {
            'picker-col': boolean;
            'picker-opts-left': boolean;
            'picker-opts-right': boolean;
        };
        style: {
            'max-width': string | undefined;
        };
    };
    render(): (JSX.Element | undefined)[];
}
