function startStatusTap(t, n) { t.addEventListener("statusTap", function () { n.read(function () { var e = t.innerWidth, o = t.innerHeight, r = t.document.elementFromPoint(e / 2, o / 2); if (!r)
    return; var i = r.closest("ion-content"); i && i.componentOnReady().then(function () { n.write(function () { return i.scrollToTop(300); }); }); }); }); }
export { startStatusTap };
