var SIZE_TO_MEDIA = { xs: "(min-width: 0px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)" };
function matchBreakpoint(i, t) { if (void 0 === t)
    return !0; var n = SIZE_TO_MEDIA[t]; return i.matchMedia(n).matches; }
export { matchBreakpoint as a };
