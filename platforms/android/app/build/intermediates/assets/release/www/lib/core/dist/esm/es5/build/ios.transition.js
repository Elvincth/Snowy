var DURATION = 500;
var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
var OPACITY = 'opacity';
var TRANSFORM = 'transform';
var TRANSLATEX = 'translateX';
var CENTER = '0%';
var OFF_OPACITY = 0.8;
function shadow(el) {
    return el.shadowRoot || el;
}
function iosTransitionAnimation(AnimationC, navEl, opts) {
    var isRTL = document.dir === 'rtl';
    var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    var OFF_LEFT = isRTL ? '33%' : '-33%';
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var rootTransition = new AnimationC();
    rootTransition
        .addElement(enteringEl)
        .duration(opts.duration || DURATION)
        .easing(opts.easing || EASING)
        .beforeRemoveClass('ion-page-invisible');
    if (leavingEl && navEl) {
        var navDecor = new AnimationC();
        navDecor
            .addElement(navEl)
            .beforeAddClass('show-decor')
            .afterRemoveClass('show-decor');
        rootTransition.add(navDecor);
    }
    var backDirection = (opts.direction === 'back');
    var contentEl = enteringEl.querySelector(':scope > ion-content');
    var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
    var enteringToolBarEle = enteringEl.querySelector(':scope > ion-header > ion-toolbar');
    var enteringContent = new AnimationC();
    if (!contentEl && !enteringToolBarEle && headerEls.length === 0) {
        enteringContent.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'));
    }
    else {
        enteringContent.addElement(contentEl);
        enteringContent.addElement(headerEls);
    }
    rootTransition.add(enteringContent);
    if (backDirection) {
        enteringContent
            .beforeClearStyles([OPACITY])
            .fromTo(TRANSLATEX, OFF_LEFT, CENTER, true)
            .fromTo(OPACITY, OFF_OPACITY, 1, true);
    }
    else {
        enteringContent
            .beforeClearStyles([OPACITY])
            .fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
    }
    if (enteringToolBarEle) {
        var enteringToolBar = new AnimationC();
        enteringToolBar.addElement(enteringToolBarEle);
        rootTransition.add(enteringToolBar);
        var enteringTitle = new AnimationC();
        enteringTitle.addElement(enteringToolBarEle.querySelector('ion-title'));
        var enteringToolBarItems = new AnimationC();
        enteringToolBarItems.addElement(enteringToolBarEle.querySelectorAll('ion-buttons,[menuToggle]'));
        var enteringToolBarBg = new AnimationC();
        enteringToolBarBg.addElement(shadow(enteringToolBarEle).querySelector('.toolbar-background'));
        var enteringBackButton = new AnimationC();
        var backButtonEl = enteringToolBarEle.querySelector('ion-back-button');
        enteringBackButton.addElement(backButtonEl);
        enteringToolBar
            .add(enteringTitle)
            .add(enteringToolBarItems)
            .add(enteringToolBarBg)
            .add(enteringBackButton);
        enteringTitle.fromTo(OPACITY, 0.01, 1, true);
        enteringToolBarItems.fromTo(OPACITY, 0.01, 1, true);
        if (backDirection) {
            enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true);
            enteringBackButton.fromTo(OPACITY, 0.01, 1, true);
        }
        else {
            enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
            enteringToolBarBg
                .beforeClearStyles([OPACITY])
                .fromTo(OPACITY, 0.01, 1, true);
            enteringBackButton.fromTo(OPACITY, 0.01, 1, true);
            if (backButtonEl) {
                var enteringBackBtnText = new AnimationC();
                enteringBackBtnText
                    .addElement(shadow(backButtonEl).querySelector('.button-text'))
                    .fromTo(TRANSLATEX, (isRTL ? '-100px' : '100px'), '0px');
                enteringToolBar.add(enteringBackBtnText);
            }
        }
    }
    if (leavingEl) {
        var leavingContent = new AnimationC();
        leavingContent.addElement(leavingEl.querySelector(':scope > ion-content'));
        leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
        rootTransition.add(leavingContent);
        if (backDirection) {
            leavingContent
                .beforeClearStyles([OPACITY])
                .fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
        }
        else {
            leavingContent
                .fromTo(TRANSLATEX, CENTER, OFF_LEFT, true)
                .fromTo(OPACITY, 1, OFF_OPACITY, true);
        }
        var leavingToolBarEle = leavingEl.querySelector(':scope > ion-header > ion-toolbar');
        if (leavingToolBarEle) {
            var leavingToolBar = new AnimationC();
            leavingToolBar.addElement(leavingToolBarEle);
            var leavingTitle = new AnimationC();
            leavingTitle.addElement(leavingToolBarEle.querySelector('ion-title'));
            var leavingToolBarItems = new AnimationC();
            leavingToolBarItems.addElement(leavingToolBarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            var leavingToolBarBg = new AnimationC();
            leavingToolBarBg.addElement(shadow(leavingToolBarEle).querySelector('.toolbar-background'));
            var leavingBackButton = new AnimationC();
            var backButtonEl = leavingToolBarEle.querySelector('ion-back-button');
            leavingBackButton.addElement(backButtonEl);
            leavingToolBar
                .add(leavingTitle)
                .add(leavingToolBarItems)
                .add(leavingBackButton)
                .add(leavingToolBarBg);
            rootTransition.add(leavingToolBar);
            leavingBackButton.fromTo(OPACITY, 0.99, 0, true);
            leavingTitle.fromTo(OPACITY, 0.99, 0, true);
            leavingToolBarItems.fromTo(OPACITY, 0.99, 0, true);
            if (backDirection) {
                leavingTitle.fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
                leavingToolBarBg
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 1, 0.01, true);
                if (backButtonEl) {
                    var leavingBackBtnText = new AnimationC();
                    leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text'));
                    leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (isRTL ? -124 : 124) + 'px');
                    leavingToolBar.add(leavingBackBtnText);
                }
            }
            else {
                leavingTitle
                    .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                    .afterClearStyles([TRANSFORM]);
                leavingBackButton.afterClearStyles([OPACITY]);
                leavingTitle.afterClearStyles([OPACITY]);
                leavingToolBarItems.afterClearStyles([OPACITY]);
            }
        }
    }
    return Promise.resolve(rootTransition);
}
export { shadow, iosTransitionAnimation };
