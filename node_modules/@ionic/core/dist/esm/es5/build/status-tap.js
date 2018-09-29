function startStatusTap(win, queue) {
    win.addEventListener('statusTap', function () {
        queue.read(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = win.document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    queue.write(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
}
export { startStatusTap };
