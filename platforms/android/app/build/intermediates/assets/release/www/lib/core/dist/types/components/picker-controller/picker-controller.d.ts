import { ComponentInterface } from '../../stencil.core';
import { OverlayController, PickerOptions } from '../../interface';
/** @hidden */
export declare class PickerController implements ComponentInterface, OverlayController {
    doc: Document;
    create(opts: PickerOptions): Promise<HTMLIonPickerElement>;
    dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
    getTop(): Promise<HTMLIonPickerElement | undefined>;
}
