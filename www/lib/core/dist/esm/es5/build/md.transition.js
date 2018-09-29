var TRANSLATEY = 'translateY';
var OFF_BOTTOM = '40px';
var CENTER = '0px';
function mdTransitionAnimation(AnimationC, _, opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var ionPageElement = getIonPageElement(enteringEl);
    var rootTransition = new AnimationC();
    rootTransition
        .addElement(ionPageElement)
        .beforeRemoveClass('ion-page-invisible');
    var backDirection = (opts.direction === 'back');
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER, true)
            .fromTo('opacity', 0.01, 1, true);
    }
    var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    if (enteringToolbarEle) {
        var enteringToolBar = new AnimationC();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.add(enteringToolBar);
    }
    if (leavingEl && backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = new AnimationC();
        leavingPage
            .addElement(getIonPageElement(leavingEl))
            .fromTo(TRANSLATEY, CENTER, OFF_BOTTOM)
            .fromTo('opacity', 1, 0);
        rootTransition.add(leavingPage);
    }
    return Promise.resolve(rootTransition);
}
function getIonPageElement(element) {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    return element;
}
export { mdTransitionAnimation };
