/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{l(n.next(t))}catch(t){r(t)}}function s(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(a,s)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};Ionic.loadBundle("pfyzszvb",["exports","./chunk-571bd14e.js","./chunk-7e353637.js"],function(t,e,o){var n=window.Ionic.h;function i(t,e,o){var n=new t,i=new t,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(e.clientHeight/2-r.clientHeight/2);r.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function r(t,e,o){var n=new t,i=new t,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function a(t,e,o){var n=new t,i=new t,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":var a=Math.floor(e.clientHeight/2-r.clientHeight/2);r.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function s(t,e,o){var n=new t,i=new t,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}var l=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){return t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(o){switch(o.label){case 0:return[4,e.e(this,"toastEnter",i,a,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),e.b(this,t,o,"toastLeave",r,s,this.position)},t.prototype.onDidDismiss=function(){return e.c(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return e.c(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){var t=this.translucent?o.m(this.mode,"toast-translucent"):{};return{class:Object.assign({},t,o.m(this.mode,"toast"),o.j(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return n("div",{class:o},n("div",{class:"toast-container"},void 0!==this.message&&n("div",{class:"toast-message"},this.message),this.showCloseButton&&n("ion-button",{fill:"clear",color:"light","ion-activable":!0,class:"toast-button",onClick:function(){return e.dismiss()}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios{--background:var(--ion-background-color-step-50, #f2f2f2);--button-color:var(--ion-text-color-step-400, #666666);--color:var(--ion-text-color-step-150, #262626);font-size:14px}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;z-index:10}.toast-translucent-ios .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px}.toast-ios .toast-button{color:var(--button-color)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){}return t.prototype.create=function(t){return e.f(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,o,n){return e.g(this.doc,t,o,"ion-toast",n)},t.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,e.h(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();t.IonToast=l,t.IonToastController=c,Object.defineProperty(t,"__esModule",{value:!0})});