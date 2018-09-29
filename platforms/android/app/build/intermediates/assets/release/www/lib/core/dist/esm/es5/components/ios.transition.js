var DURATION = 500, EASING = "cubic-bezier(0.36,0.66,0.04,1)", OPACITY = "opacity", TRANSFORM = "transform", TRANSLATEX = "translateX", CENTER = "0%", OFF_OPACITY = .8;
function shadow(e) { return e.shadowRoot || e; }
function iosTransitionAnimation(e, o, t) { var n = "rtl" === document.dir, r = n ? "-99.5%" : "99.5%", a = n ? "33%" : "-33%", d = t.enteringEl, l = t.leavingEl, T = new e; if (T.addElement(d).duration(t.duration || DURATION).easing(t.easing || EASING).beforeRemoveClass("ion-page-invisible"), l && o) {
    var t_1 = new e;
    t_1.addElement(o).beforeAddClass("show-decor").afterRemoveClass("show-decor"), T.add(t_1);
} var s = "back" === t.direction, c = d.querySelector(":scope > ion-content"), i = d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), A = d.querySelector(":scope > ion-header > ion-toolbar"), E = new e; if (c || A || 0 !== i.length ? (E.addElement(c), E.addElement(i)) : E.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), T.add(E), s ? E.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, a, CENTER, !0).fromTo(OPACITY, OFF_OPACITY, 1, !0) : E.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, r, CENTER, !0), A) {
    var o_1 = new e;
    o_1.addElement(A), T.add(o_1);
    var t_2 = new e;
    t_2.addElement(A.querySelector("ion-title"));
    var d_1 = new e;
    d_1.addElement(A.querySelectorAll("ion-buttons,[menuToggle]"));
    var l_1 = new e;
    l_1.addElement(shadow(A).querySelector(".toolbar-background"));
    var c_1 = new e, i_1 = A.querySelector("ion-back-button");
    if (c_1.addElement(i_1), o_1.add(t_2).add(d_1).add(l_1).add(c_1), t_2.fromTo(OPACITY, .01, 1, !0), d_1.fromTo(OPACITY, .01, 1, !0), s)
        t_2.fromTo(TRANSLATEX, a, CENTER, !0), c_1.fromTo(OPACITY, .01, 1, !0);
    else if (t_2.fromTo(TRANSLATEX, r, CENTER, !0), l_1.beforeClearStyles([OPACITY]).fromTo(OPACITY, .01, 1, !0), c_1.fromTo(OPACITY, .01, 1, !0), i_1) {
        var t_3 = new e;
        t_3.addElement(shadow(i_1).querySelector(".button-text")).fromTo(TRANSLATEX, n ? "-100px" : "100px", "0px"), o_1.add(t_3);
    }
} if (l) {
    var o_2 = new e;
    o_2.addElement(l.querySelector(":scope > ion-content")), o_2.addElement(l.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")), T.add(o_2), s ? o_2.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, CENTER, n ? "-100%" : "100%") : o_2.fromTo(TRANSLATEX, CENTER, a, !0).fromTo(OPACITY, 1, OFF_OPACITY, !0);
    var t_4 = l.querySelector(":scope > ion-header > ion-toolbar");
    if (t_4) {
        var o_3 = new e;
        o_3.addElement(t_4);
        var r_1 = new e;
        r_1.addElement(t_4.querySelector("ion-title"));
        var d_2 = new e;
        d_2.addElement(t_4.querySelectorAll("ion-buttons,[menuToggle]"));
        var l_2 = new e;
        l_2.addElement(shadow(t_4).querySelector(".toolbar-background"));
        var c_2 = new e, i_2 = t_4.querySelector("ion-back-button");
        if (c_2.addElement(i_2), o_3.add(r_1).add(d_2).add(c_2).add(l_2), T.add(o_3), c_2.fromTo(OPACITY, .99, 0, !0), r_1.fromTo(OPACITY, .99, 0, !0), d_2.fromTo(OPACITY, .99, 0, !0), s) {
            if (r_1.fromTo(TRANSLATEX, CENTER, n ? "-100%" : "100%"), l_2.beforeClearStyles([OPACITY]).fromTo(OPACITY, 1, .01, !0), i_2) {
                var t_5 = new e;
                t_5.addElement(shadow(i_2).querySelector(".button-text")), t_5.fromTo(TRANSLATEX, CENTER, (n ? -124 : 124) + "px"), o_3.add(t_5);
            }
        }
        else
            r_1.fromTo(TRANSLATEX, CENTER, a).afterClearStyles([TRANSFORM]), c_2.afterClearStyles([OPACITY]), r_1.afterClearStyles([OPACITY]), d_2.afterClearStyles([OPACITY]);
    }
} return Promise.resolve(T); }
export { shadow, iosTransitionAnimation };
