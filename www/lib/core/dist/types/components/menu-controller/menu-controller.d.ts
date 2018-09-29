import { Animation, MenuControllerI, MenuI } from '../../interface';
export declare class MenuController implements MenuControllerI {
    private menus;
    private menuAnimations;
    animationCtrl: HTMLIonAnimationControllerElement;
    constructor();
    /**
     * Open the menu.
     */
    open(menuId?: string | null): Promise<boolean>;
    /**
     * Close the menu. If no menu is specified, then it will close any menu
     * that is open. If a menu is specified, it will close that menu.
     */
    close(menuId?: string | null): Promise<boolean>;
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     */
    toggle(menuId?: string | null): Promise<boolean>;
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     */
    enable(shouldEnable: boolean, menuId?: string | null): Promise<HTMLIonMenuElement | undefined>;
    /**
     * Used to enable or disable the ability to swipe open the menu.
     */
    swipeGesture(shouldEnable: boolean, menuId?: string | null): Promise<HTMLIonMenuElement | undefined>;
    /**
     * Returns true if the specified menu is open. If the menu is not specified, it
     * will return true if any menu is currently open.
     */
    isOpen(menuId?: string | null): Promise<boolean>;
    /**
     * Returns true if the specified menu is enabled.
     */
    isEnabled(menuId?: string | null): Promise<boolean>;
    /**
     * Used to get a menu instance. If a menu is not provided then it will
     * return the first menu found. If the specified menu is `left` or `right`, then
     * it will return the enabled menu on that side. Otherwise, it will try to find
     * the menu using the menu's `id` property. If a menu is not found then it will
     * return `null`.
     */
    get(menuId?: string | null): Promise<HTMLIonMenuElement | undefined>;
    /**
     * Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen(): Promise<HTMLIonMenuElement | undefined>;
    /**
     * Returns an array of all menu instances.
     */
    getMenus(): Promise<HTMLIonMenuElement[]>;
    /**
     * Returns true if any menu is currently animating.
     */
    isAnimating(): Promise<boolean>;
    _register(menu: MenuI): void;
    _unregister(menu: MenuI): void;
    _setActiveMenu(menu: MenuI): void;
    _setOpen(menu: MenuI, shouldOpen: boolean, animated: boolean): Promise<boolean>;
    _getInstance(): Promise<MenuControllerI>;
    _createAnimation(type: string, menuCmp: MenuI): Promise<Animation>;
    getOpenSync(): HTMLIonMenuElement | undefined;
    getMenusSync(): HTMLIonMenuElement[];
    isAnimatingSync(): boolean;
    private registerAnimation;
    private find;
}
