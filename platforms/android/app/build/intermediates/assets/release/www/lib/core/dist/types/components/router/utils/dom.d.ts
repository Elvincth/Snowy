import { NavOutletElement, RouteChain, RouteID } from '../../../interface';
import { RouterIntent } from './constants';
export declare function writeNavState(root: HTMLElement | undefined, chain: RouteChain, intent: RouterIntent, index: number, changed?: boolean): Promise<boolean>;
export declare function readNavState(root: HTMLElement | undefined): Promise<{
    ids: RouteID[];
    outlet: NavOutletElement | undefined;
}>;
export declare function waitUntilNavNode(win: Window): Promise<void> | Promise<{}>;
