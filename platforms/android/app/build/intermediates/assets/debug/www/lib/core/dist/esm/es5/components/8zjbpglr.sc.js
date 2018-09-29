/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,l){function i(e){try{a(n.next(e))}catch(e){l(e)}}function c(e){try{a(n.throw(e))}catch(e){l(e)}}function a(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(i,c)}a((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var o,n,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{o=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};import{h}from"../ionic.core.js";import{a as rIC,m as isPlatform}from"./chunk-276e047f.js";import{k as createColorClasses,m as createThemedClasses}from"./chunk-a4253575.js";var App=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this;rIC(function(){importTapClick(e.win),importInputShims(e.win,e.config),importStatusTap(e.win,e.queue),importHardwareBackButton(e.win)})},e.prototype.hostData=function(){return{class:{"ion-page":!0}}},Object.defineProperty(e,"is",{get:function(){return"ion-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"},enumerable:!0,configurable:!0}),e}();function importHardwareBackButton(e){isPlatform(e,"hybrid")&&import("./hardware-back-button.js").then(function(t){return t.startHardwareBackButton(e)})}function importStatusTap(e,t){isPlatform(e,"hybrid")&&import("./status-tap.js").then(function(o){return o.startStatusTap(e,t)})}function importTapClick(e){import("./tap-click.js").then(function(t){return t.startTapClick(e.document)})}function importInputShims(e,t){t.getBoolean("inputShims",needInputShims(e))&&import("./input-shims.js").then(function(o){return o.startInputShims(e.document,t)})}function needInputShims(e){return isPlatform(e,"ios")&&isPlatform(e,"mobile")}var Buttons=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-buttons-ios-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}.sc-ion-buttons-ios-s  .button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;pointer-events:auto;--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  .button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:currentColor;--color-activated:currentColor}.sc-ion-buttons-ios-s  .button-clear.activated {color:var(--ion-color-primary,#3880ff)}.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin:0 .3em 0 0;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin:0 0 0 .4em;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:31px;line-height:.67;pointer-events:none}[slot=start].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[slot=primary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Content=function(){function e(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}return e.prototype.onNavChanged=function(){this.resize()},e.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)},e.prototype.componentDidLoad=function(){this.resize()},e.prototype.componentDidUnload=function(){this.watchDog&&clearInterval(this.watchDog)},e.prototype.resize=function(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},e.prototype.readDimensions=function(){var e=getPageElement(this.el),t=Math.max(this.el.offsetTop,0),o=Math.max(e.offsetHeight-t-this.el.offsetHeight,0);(t!==this.cTop||o!==this.cBottom)&&(this.cTop=t,this.cBottom=o,this.el.forceUpdate())},e.prototype.onScroll=function(e){var t=this,o=Date.now(),n=!this.isScrolling;this.lastScroll=o,n&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(o){t.queued=!1,t.detail.event=e,updateScrollDetail(t.detail,t.scrollEl,o,n),t.ionScroll.emit(t.detail)}))},e.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},e.prototype.scrollToTop=function(e){return void 0===e&&(e=0),this.scrollToPoint(void 0,0,e)},e.prototype.scrollToBottom=function(e){void 0===e&&(e=0);var t=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(void 0,t,e)},e.prototype.scrollByPoint=function(e,t,o){return this.scrollToPoint(e+this.scrollEl.scrollLeft,t+this.scrollEl.scrollTop,o)},e.prototype.scrollToPoint=function(e,t,o){return void 0===o&&(o=0),__awaiter(this,void 0,void 0,function(){var n,r,l,i,c,a,s,u,f;return __generator(this,function(p){return n=this.scrollEl,o<32?(null!=t&&(n.scrollTop=t),null!=e&&(n.scrollLeft=e),[2]):(l=0,i=new Promise(function(e){return r=e}),c=n.scrollTop,a=n.scrollLeft,s=null!=t?t-c:0,u=null!=e?e-a:0,f=function(e){var t=Math.min(1,(e-l)/o)-1,i=Math.pow(t,3)+1;0!==s&&(n.scrollTop=Math.floor(i*s+c)),0!==u&&(n.scrollLeft=Math.floor(i*u+a)),i<1?requestAnimationFrame(f):r()},requestAnimationFrame(function(e){l=e,f(e)}),[2,i])})})},e.prototype.onScrollStart=function(){var e=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){e.lastScroll<Date.now()-120&&e.onScrollEnd()},100)},e.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})},e.prototype.hostData=function(){return{class:Object.assign({},createColorClasses(this.color),{overscroll:this.forceOverscroll}),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}}},e.prototype.render=function(){var e=this,t=this.scrollX,o=this.scrollY,n=this.forceOverscroll;return this.resize(),[h("div",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o,overscroll:(t||o)&&!!n},ref:function(t){return e.scrollEl=t},onScroll:function(t){return e.onScroll(t)}},h("slot",null)),h("slot",{name:"fixed"})]},Object.defineProperty(e,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-content-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0!important;margin:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:auto}.scroll-x.sc-ion-content{overflow-x:auto}.overscroll.sc-ion-content::after, .overscroll.sc-ion-content::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content::before{bottom:-1px}.overscroll.sc-ion-content::after{top:-1px}"},enumerable:!0,configurable:!0}),e}();function getParentElement(e){return e.parentElement?e.parentElement:e.parentNode&&e.parentNode.host?e.parentNode.host:null}function getPageElement(e){var t=e.closest("ion-tabs");return t||(e.closest("ion-app,ion-page,.ion-page,page-inner")||getParentElement(e))}function updateScrollDetail(e,t,o,n){var r=e.currentX,l=e.currentY,i=e.timeStamp,c=t.scrollLeft,a=t.scrollTop;n&&(e.startTimeStamp=o,e.startX=c,e.startY=a,e.velocityX=e.velocityY=0),e.timeStamp=o,e.currentX=e.scrollLeft=c,e.currentY=e.scrollTop=a,e.deltaX=c-e.startX,e.deltaY=a-e.startY;var s=o-i;if(s>0&&s<100){var u=(c-r)/s,f=(a-l)/s;e.velocityX=.7*u+.3*e.velocityX,e.velocityY=.7*f+.3*e.velocityY}}var Footer=function(){function e(){this.translucent=!1}return e.prototype.hostData=function(){var e=createThemedClasses(this.mode,"footer"),t=this.translucent?createThemedClasses(this.mode,"footer-translucent"):null;return{class:Object.assign({},e,t)}},Object.defineProperty(e,"is",{get:function(){return"ion-footer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-footer{display:block;position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Header=function(){function e(){this.translucent=!1}return e.prototype.hostData=function(){var e=createThemedClasses(this.mode,"header"),t=this.translucent?createThemedClasses(this.mode,"header-translucent"):null;return{class:Object.assign({},e,t)}},Object.defineProperty(e,"is",{get:function(){return"ion-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),ToolbarTitle=function(){function e(){}return e.prototype.getMode=function(){var e=this.el.closest("ion-toolbar");return e&&e.mode||this.mode},e.prototype.hostData=function(){var e,t=this.getMode();return{class:Object.assign({},createColorClasses(this.color),(e={},e["title-"+t]=!0,e))}},e.prototype.render=function(){return[h("div",{class:"toolbar-title"},h("slot",null))]},Object.defineProperty(e,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-title-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),e}(),Toolbar=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},e.prototype.render=function(){return[h("div",{class:"toolbar-background"}),h("div",{class:"toolbar-container"},h("slot",{name:"start"}),h("slot",{name:"secondary"}),h("div",{class:"toolbar-content"},h("slot",null)),h("slot",{name:"primary"}),h("slot",{name:"end"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.ion-color.sc-ion-toolbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-ios-h   .toolbar-background.sc-ion-toolbar-ios{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-ios{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-ios{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;min-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();export{App as IonApp,Buttons as IonButtons,Content as IonContent,Footer as IonFooter,Header as IonHeader,ToolbarTitle as IonTitle,Toolbar as IonToolbar};