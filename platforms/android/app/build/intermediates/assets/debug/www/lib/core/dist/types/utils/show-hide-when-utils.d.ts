import { Config } from '../interface';
export interface DisplayWhen {
    config: Config;
    win: Window;
    mediaQuery?: string;
    modes?: string;
    or: boolean;
    orientation?: string;
    platform?: string;
    size?: string;
}
export declare function getTestResult(displayWhen: DisplayWhen): boolean;
