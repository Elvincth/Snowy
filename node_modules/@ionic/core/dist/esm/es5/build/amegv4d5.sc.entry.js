import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
var MIN_READS = 2;
function updateVDom(dom, heightIndex, cells, range) {
    for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
        var node = dom_1[_i];
        node.change = 0;
        node.d = true;
    }
    var toMutate = [];
    var end = range.offset + range.length;
    var _loop_1 = function (i) {
        var cell = cells[i];
        var node = dom.find(function (n) { return n.d && n.cell === cell; });
        if (node) {
            var top = heightIndex[i];
            if (top !== node.top) {
                node.top = top;
                node.change = 1;
            }
            node.d = false;
        }
        else {
            toMutate.push(cell);
        }
    };
    for (var i = range.offset; i < end; i++) {
        _loop_1(i);
    }
    var pool = dom.filter(function (n) { return n.d; });
    var _loop_2 = function (cell) {
        var node = pool.find(function (n) { return n.d && n.cell.type === cell.type; });
        var index = cell.index;
        if (node) {
            node.d = false;
            node.change = 2;
            node.cell = cell;
            node.top = heightIndex[index];
        }
        else {
            dom.push({
                d: false,
                cell: cell,
                visible: true,
                change: 2,
                top: heightIndex[index],
            });
        }
    };
    for (var _a = 0, toMutate_1 = toMutate; _a < toMutate_1.length; _a++) {
        var cell = toMutate_1[_a];
        _loop_2(cell);
    }
    dom
        .filter(function (n) { return n.d && n.top !== -9999; })
        .forEach(function (n) {
        n.change = 1;
        n.top = -9999;
    });
}
function doRender(el, nodeRender, dom, updateCellHeight) {
    var children = Array.from(el.children).filter(function (n) { return n.tagName !== 'TEMPLATE'; });
    var childrenNu = children.length;
    var child;
    for (var i = 0; i < dom.length; i++) {
        var node = dom[i];
        var cell = node.cell;
        if (node.change === 2) {
            if (i < childrenNu) {
                child = children[i];
                nodeRender(child, cell, i);
            }
            else {
                var newChild = createNode(el, cell.type);
                child = nodeRender(newChild, cell, i) || newChild;
                child.classList.add('virtual-item');
                el.appendChild(child);
            }
            child['$ionCell'] = cell;
        }
        else {
            child = children[i];
        }
        if (node.change !== 0) {
            child.style.transform = "translate3d(0," + node.top + "px,0)";
        }
        var visible = cell.visible;
        if (node.visible !== visible) {
            if (visible) {
                child.classList.remove('virtual-loading');
            }
            else {
                child.classList.add('virtual-loading');
            }
            node.visible = visible;
        }
        if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
        }
    }
}
function createNode(el, type) {
    var template = getTemplate(el, type);
    if (template) {
        return el.ownerDocument.importNode(template.content, true).children[0];
    }
    return null;
}
function getTemplate(el, type) {
    switch (type) {
        case 0: return el.querySelector('template:not([name])');
        case 1: return el.querySelector('template[name=header]');
        case 2: return el.querySelector('template[name=footer]');
    }
}
function getViewport(scrollTop, vierportHeight, margin) {
    return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
    };
}
function getRange(heightIndex, viewport, buffer) {
    var topPos = viewport.top;
    var bottomPos = viewport.bottom;
    var i = 0;
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
            break;
        }
    }
    var offset = Math.max(i - buffer - 1, 0);
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
            break;
        }
    }
    var end = Math.min(i + buffer, heightIndex.length);
    var length = end - offset;
    return { offset: offset, length: length };
}
function getShouldUpdate(dirtyIndex, currentRange, range) {
    var end = range.offset + range.length;
    return (dirtyIndex <= end ||
        currentRange.offset !== range.offset ||
        currentRange.length !== range.length);
}
function findCellIndex(cells, index) {
    if (index === 0) {
        return 0;
    }
    return cells.findIndex(function (c) { return c.index === index; });
}
function inplaceUpdate(dst, src, offset) {
    if (offset === 0 && src.length >= dst.length) {
        return src;
    }
    for (var i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
    }
    return dst;
}
function calcCells(items, itemHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
    var cells = [];
    var end = len + offset;
    for (var i = offset; i < end; i++) {
        var item = items[i];
        if (headerFn) {
            var value = headerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: 1,
                    value: value,
                    index: i,
                    height: approxHeaderHeight,
                    reads: MIN_READS,
                    visible: false,
                });
            }
        }
        cells.push({
            i: j++,
            type: 0,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight,
        });
        if (footerFn) {
            var value = footerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: 2,
                    value: value,
                    index: i,
                    height: approxFooterHeight,
                    reads: 2,
                    visible: false,
                });
            }
        }
    }
    return cells;
}
function calcHeightIndex(buf, cells, index) {
    var acum = buf[index];
    for (var i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
    }
    return acum;
}
function resizeBuffer(buf, len) {
    if (!buf) {
        return new Uint32Array(len);
    }
    if (buf.length === len) {
        return buf;
    }
    else if (len > buf.length) {
        var newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
    }
    else {
        return buf.subarray(0, len);
    }
}
function positionForIndex(index, cells, heightIndex) {
    var cell = cells.find(function (c) { return c.type === 0 && c.index === index; });
    if (cell) {
        return heightIndex[cell.i];
    }
    return -1;
}
var VirtualScroll = /** @class */ (function () {
    function VirtualScroll() {
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        this.approxItemHeight = 45;
        this.approxHeaderHeight = 40;
        this.approxFooterHeight = 40;
    }
    VirtualScroll.prototype.itemsChanged = function () {
        this.calcCells();
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contentEl, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('virtual-scroll must be used inside ion-content');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, contentEl.componentOnReady()];
                    case 1:
                        _b.sent();
                        this.contentEl = contentEl;
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 2:
                        _a.scrollEl = _b.sent();
                        this.calcCells();
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    VirtualScroll.prototype.componentDidUpdate = function () {
        this.updateState();
    };
    VirtualScroll.prototype.componentDidUnload = function () {
        this.scrollEl = undefined;
    };
    VirtualScroll.prototype.onScroll = function () {
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.onResize = function () {
        this.updateVirtualScroll();
    };
    VirtualScroll.prototype.positionForItem = function (index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    };
    VirtualScroll.prototype.markDirty = function (offset, len) {
        if (len === void 0) { len = -1; }
        if (!this.items) {
            return;
        }
        var length = (len === -1)
            ? this.items.length - offset
            : len;
        var max = this.lastItemLen;
        var j = 0;
        if (offset > 0 && offset < max) {
            j = findCellIndex(this.cells, offset);
        }
        else if (offset === 0) {
            j = 0;
        }
        else if (offset === max) {
            j = this.cells.length;
        }
        else {
            console.warn('bad values for markDirty');
            return;
        }
        var cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, j, offset, length);
        console.debug('[virtual] cells recalculated', cells.length);
        this.cells = inplaceUpdate(this.cells, cells, offset);
        this.lastItemLen = this.items.length;
        this.indexDirty = Math.max(offset - 1, 0);
        this.scheduleUpdate();
    };
    VirtualScroll.prototype.markDirtyTail = function () {
        if (this.items) {
            var offset = this.lastItemLen;
            this.markDirty(offset, this.items.length - offset);
        }
    };
    VirtualScroll.prototype.updateVirtualScroll = function () {
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
        }
        this.queue.read(this.readVS.bind(this));
        this.queue.write(this.writeVS.bind(this));
    };
    VirtualScroll.prototype.readVS = function () {
        var _a = this, contentEl = _a.contentEl, scrollEl = _a.scrollEl, el = _a.el;
        var topOffset = 0;
        var node = el;
        while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    };
    VirtualScroll.prototype.writeVS = function () {
        var dirtyIndex = this.indexDirty;
        var scrollTop = this.currentScrollTop - this.viewportOffset;
        var viewport = getViewport(scrollTop, this.viewportHeight, 100);
        var heightIndex = this.getHeightIndex();
        var range = getRange(heightIndex, viewport, 2);
        var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    };
    VirtualScroll.prototype.updateCellHeight = function (cell, node) {
        var _this = this;
        var update = function () {
            if (node['$ionCell'] === cell) {
                var style = _this.win.getComputedStyle(node);
                var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                _this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    };
    VirtualScroll.prototype.setCellHeight = function (cell, height) {
        var index = cell.i;
        if (cell !== this.cells[index]) {
            return;
        }
        cell.visible = true;
        if (cell.height !== height) {
            console.debug("[virtual] cell height changed " + cell.height + "px -> " + height + "px");
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    };
    VirtualScroll.prototype.scheduleUpdate = function () {
        var _this = this;
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(function () { return _this.updateVirtualScroll(); }, 100);
    };
    VirtualScroll.prototype.updateState = function () {
        var shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    };
    VirtualScroll.prototype.calcCells = function () {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        console.debug('[virtual] cells recalculated', this.cells.length);
        this.indexDirty = 0;
    };
    VirtualScroll.prototype.getHeightIndex = function () {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    };
    VirtualScroll.prototype.calcHeightIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        console.debug('[virtual] height index recalculated', this.heightIndex.length - index);
        this.indexDirty = Infinity;
    };
    VirtualScroll.prototype.enableScrollEvents = function (shouldListen) {
        if (this.scrollEl) {
            this.isEnabled = shouldListen;
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    };
    VirtualScroll.prototype.renderVirtualNode = function (node) {
        var _a = node.cell, type = _a.type, value = _a.value, index = _a.index;
        switch (type) {
            case 0: return this.renderItem(value, index);
            case 1: return this.renderHeader(value, index);
            case 2: return this.renderFooter(value, index);
        }
    };
    VirtualScroll.prototype.hostData = function () {
        return {
            style: {
                height: this.totalHeight + "px"
            }
        };
    };
    VirtualScroll.prototype.render = function () {
        var _this = this;
        if (this.renderItem) {
            return (h(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(function (node) { return _this.renderVirtualNode(node); })));
        }
        return undefined;
    };
    Object.defineProperty(VirtualScroll, "is", {
        get: function () { return "ion-virtual-scroll"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "properties", {
        get: function () {
            return {
                "approxFooterHeight": {
                    "type": Number,
                    "attr": "approx-footer-height"
                },
                "approxHeaderHeight": {
                    "type": Number,
                    "attr": "approx-header-height"
                },
                "approxItemHeight": {
                    "type": Number,
                    "attr": "approx-item-height"
                },
                "domRender": {
                    "type": "Any",
                    "attr": "dom-render"
                },
                "el": {
                    "elementRef": true
                },
                "enableListener": {
                    "context": "enableListener"
                },
                "footerFn": {
                    "type": "Any",
                    "attr": "footer-fn"
                },
                "headerFn": {
                    "type": "Any",
                    "attr": "header-fn"
                },
                "itemHeight": {
                    "type": "Any",
                    "attr": "item-height",
                    "watchCallbacks": ["itemsChanged"]
                },
                "items": {
                    "type": "Any",
                    "attr": "items",
                    "watchCallbacks": ["itemsChanged"]
                },
                "markDirty": {
                    "method": true
                },
                "markDirtyTail": {
                    "method": true
                },
                "nodeRender": {
                    "type": "Any",
                    "attr": "node-render"
                },
                "positionForItem": {
                    "method": true
                },
                "queue": {
                    "context": "queue"
                },
                "renderFooter": {
                    "type": "Any",
                    "attr": "render-footer"
                },
                "renderHeader": {
                    "type": "Any",
                    "attr": "render-header"
                },
                "renderItem": {
                    "type": "Any",
                    "attr": "render-item"
                },
                "totalHeight": {
                    "state": true
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "listeners", {
        get: function () {
            return [{
                    "name": "scroll",
                    "method": "onScroll",
                    "disabled": true
                }, {
                    "name": "window:resize",
                    "method": "onResize",
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroll, "style", {
        get: function () { return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"; },
        enumerable: true,
        configurable: true
    });
    return VirtualScroll;
}());
var VirtualProxy = function (_a, children, utils) {
    var dom = _a.dom;
    return utils.map(children, function (child, i) {
        var node = dom[i];
        var vattrs = child.vattrs || {};
        var classes = vattrs.class || '';
        classes += 'virtual-item ';
        if (!node.visible) {
            classes += 'virtual-loading';
        }
        return Object.assign({}, child, { vattrs: Object.assign({}, vattrs, { class: classes, style: Object.assign({}, vattrs.style, { transform: "translate3d(0," + node.top + "px,0)" }) }) });
    });
};
export { VirtualScroll as IonVirtualScroll };
