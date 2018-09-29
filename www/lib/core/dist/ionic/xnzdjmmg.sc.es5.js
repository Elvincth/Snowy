/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function l(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,l)}a((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,r,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Ionic.loadBundle("xnzdjmmg",["exports"],function(t){var e=window.Ionic.h,i=2;function r(t,e){var i=function(t,e){switch(e){case 0:return t.querySelector("template:not([name])");case 1:return t.querySelector("template[name=header]");case 2:return t.querySelector("template[name=footer]")}}(t,e);return i?t.ownerDocument.importNode(i.content,!0).children[0]:null}function n(t,e,r,n,o,s,l,a,h,u){for(var c=[],p=u+h,d=h;d<p;d++){var f,g=t[d];r&&null!=(f=r(g,d,t))&&c.push({i:a++,type:1,value:f,index:d,height:o,reads:i,visible:!1}),c.push({i:a++,type:0,value:g,index:d,height:e?e(g,d):l,reads:e?0:i,visible:!!e}),n&&null!=(f=n(g,d,t))&&c.push({i:a++,type:2,value:f,index:d,height:s,reads:2,visible:!1})}return c}var o=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return i.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=i.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var r=e.find(function(e){return 0===e.type&&e.index===t});return r?i[r.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.markDirty=function(t,e){if(void 0===e&&(e=-1),this.items){var i=-1===e?this.items.length-t:e,r=this.lastItemLen,o=0;if(t>0&&t<r)o=function(t,e){return 0===e?0:t.findIndex(function(t){return t.index===e})}(this.cells,t);else if(0===t)o=0;else{if(t!==r)return void console.warn("bad values for markDirty");o=this.cells.length}var s=n(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,o,t,i);s.length,this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}(this.cells,s,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.markDirtyTail=function(){if(this.items){var t=this.lastItemLen;this.markDirty(t,this.items.length-t)}},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,r=this.el;r&&r!==t;)i+=r.offsetTop,r=r.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),n=function(t,e,i){for(var r=e.top,n=e.bottom,o=0;o<t.length&&!(t[o]>r);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=n);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(i,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,n)&&(this.range=n,function(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var s=o[n];s.change=0,s.d=!0}for(var l=[],a=r.offset+r.length,h=function(r){var n=i[r],o=t.find(function(t){return t.d&&t.cell===n});if(o){var s=e[r];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(n)},u=r.offset;u<a;u++)h(u);for(var c=t.filter(function(t){return t.d}),p=function(i){var r=c.find(function(t){return t.d&&t.cell.type===i.type}),n=i.index;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},d=0,f=l;d<f.length;d++)p(f[d]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,n),this.nodeRender?function(t,e,i,n){for(var o,s=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),l=s.length,a=0;a<i.length;a++){var h=i[a],u=h.cell;if(2===h.change){if(a<l)e(o=s[a],u,a);else{var c=r(t,u.type);(o=e(c,u,a)||c).classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=u}else o=s[a];0!==h.change&&(o.style.transform="translate3d(0,"+h.top+"px,0)");var p=u.visible;h.visible!==p&&(p?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),h.visible=p),u.reads>0&&(n(u,o),u.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,r=function(){if(e.$ionCell===t){var r=i.win.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};e&&e.componentOnReady?e.componentOnReady().then(r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(t.height,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=n(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.cells.length,this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var r=t[i],n=i;n<t.length;n++)t[n]=r,r+=e[n].height;return r}(this.heightIndex,this.cells,t),this.heightIndex.length,this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,r=e.value,n=e.index;switch(i){case 0:return this.renderItem(r,n);case 1:return this.renderHeader(r,n);case 2:return this.renderFooter(r,n)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return e(s,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),s=function(t,e,i){var r=t.dom;return i.map(e,function(t,e){var i=r[e],n=t.vattrs||{},o=n.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},n,{class:o,style:Object.assign({},n.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})};t.IonVirtualScroll=o,Object.defineProperty(t,"__esModule",{value:!0})});