/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{h as e,g as i}from"./chunk-276e047f.js";class n{constructor(){this.lastOnEnd=0,this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const i=this.contentEl;i&&(void 0!==e&&i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=i(this.win,this.side)}swipeGestureChanged(){this.updateState()}async componentWillLoad(){this.type=this.type||this.config.get("menuType","ios"===this.mode?"reveal":"overlay"),this.isServer?this.disabled=!0:this.menuCtrl=await this.lazyMenuCtrl.componentOnReady().then(t=>t._getInstance())}async componentDidLoad(){if(this.isServer)return;const t=this.el.parentNode,e=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");if(!e||!e.tagName)return void console.error('Menu: must have a "content" element to listen for drag events on.');this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged();let i=!this.disabled;i&&(i=!this.menuCtrl.getMenusSync().some(t=>t.side===this.side&&!t.disabled)),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),this.gesture=(await import("./gesture.js")).createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabled=!i,this.updateState()}componentDidUnload(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){return this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)?(t.preventDefault(),t.stopPropagation(),this.close()):Promise.resolve(!1)}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!this._isActive()||this.isAnimating||t===this._isOpen?this._isOpen:(this.beforeAnimation(),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),t)}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl._createAnimation(this.type,this))}async startAnimation(t,e){const i=this.animation.reverse(!t);e?await i.playAsync():i.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(e=this.win,i=t.currentX,n=this.isEndSide,s=this.maxEdgeStart,n?i>=e.innerWidth-s:i<=s));var e,i,n,s}onWillStart(){return this.beforeAnimation(),this.loadAnimation()}onStart(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()}onMove(t){if(!this.isAnimating||!this.animation)return;const e=s(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}onEnd(t){if(!this.isAnimating||!this.animation)return;const e=this._isOpen,i=this.isEndSide,n=s(t.deltaX,e,i),o=this.width,a=n/o,r=t.velocityX,h=o/2,d=r>=0&&(r>.2||t.deltaX>h),l=r<=0&&(r<-.2||t.deltaX<-h),c=e?i?d:l:i?l:d;let u=!e&&c;e&&!c&&(u=!0);const m=(c?1-a:a)*o;let p=0;if(m>5){const t=m/Math.abs(r);p=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(u),{clearExistingCallbacks:!0}).progressEnd(c,a,p)}beforeAnimation(){this.isAnimating,this.el.classList.add(o),this.backdropEl&&this.backdropEl.classList.add(a),this.isAnimating=!0}afterAnimation(t){this.isAnimating,this._isOpen=t,this.isAnimating=!1,this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(r),this.ionOpen.emit()):(this.el.classList.remove(o),this.contentEl&&this.contentEl.classList.remove(r),this.backdropEl&&this.backdropEl.classList.remove(a),this.ionClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),this.isAnimating}forceClosing(){this._isOpen,this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)}hostData(){const{isEndSide:t,type:e,disabled:i,isPaneVisible:n}=this;return{role:"complementary",class:{[`menu-type-${e}`]:!0,"menu-enabled":!i,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":n}}}render(){return[t("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},t("slot",null)),t("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1})]}static get is(){return"ion-menu"}static get encapsulation(){return"shadow"}static get properties(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]}static get style(){return".sc-ion-menu-ios-h{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-ios-h{display:block}.menu-inner.sc-ion-menu-ios{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}.menu-side-start.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{right:auto;left:0}.menu-side-end.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{right:0;left:auto}ion-backdrop.sc-ion-menu-ios{display:none;opacity:.01;z-index:-1}.menu-content.sc-ion-menu-ios{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open.sc-ion-menu-ios{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}\@media (max-width:340px){.menu-inner.sc-ion-menu-ios{width:var(--width-small)}}.menu-type-reveal.sc-ion-menu-ios-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-type-overlay.sc-ion-menu-ios-h{z-index:80}.menu-type-overlay.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-ios-h   ion-backdrop.sc-ion-menu-ios{display:hidden!important}.menu-type-push.sc-ion-menu-ios-h{z-index:80}.menu-type-push.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block}"}static get styleMode(){return"ios"}}function s(t,e,i){return Math.max(0,e!==i?-t:t)}const o="show-menu",a="show-backdrop",r="menu-content-open";class h{constructor(){this.autoHide=!0}hostData(){return{class:{button:!0}}}render(){const e=this.config.get("menuIcon","menu");return t("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},t("button",{type:"button"},t("slot",null,t("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1}))))}static get is(){return"ion-menu-button"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-menu-button-ios-h{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;color:var(--ion-color-primary,#3880ff)}button.sc-ion-menu-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon.sc-ion-menu-button-ios{margin:0;padding:0;pointer-events:none;font-size:31px}"}static get styleMode(){return"ios"}}function d(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}const l=8;function c(t,e,i){let n,s;const o=i.width+l;i.isEndSide?(n=o+"px",s="0px"):(n=-o+"px",s="0px");const a=(new t).addElement(i.menuInnerEl).fromTo("translateX",n,s),r=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.3);return d(t).then(t=>t.add(a).add(r))}function u(t,e,i){let n,s;const o=i.width;i.isEndSide?(n=-o+"px",s=o+"px"):(n=o+"px",s=-o+"px");const a=(new t).addElement(i.menuInnerEl).fromTo("translateX",s,"0px"),r=(new t).addElement(i.contentEl).fromTo("translateX","0px",n),h=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.2);return d(t).then(t=>t.add(a).add(h).add(r))}function m(t,e,i){const n=i.width*(i.isEndSide?-1:1)+"px",s=(new t).addElement(i.contentEl).fromTo("translateX","0px",n);return d(t).then(t=>t.add(s))}class p{constructor(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",m),this.registerAnimation("push",u),this.registerAnimation("overlay",c)}async open(t){const e=await this.get(t);return!!e&&e.open()}async close(t){const e=await(void 0!==t?this.get(t):this.getOpen());return void 0!==e&&e.close()}async toggle(t){const e=await this.get(t);return!!e&&e.toggle()}async enable(t,e){const i=await this.get(e);return i&&(i.disabled=!t),i}async swipeGesture(t,e){const i=await this.get(e);return i&&(i.swipeGesture=t),i}async isOpen(t){if(null!=t){const e=await this.get(t);return void 0!==e&&e.isOpen()}return void 0!==await this.getOpen()}async isEnabled(t){const e=await this.get(t);return!!e&&!e.disabled}async get(t){if("start"===t||"end"===t){return this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t)}if(null!=t)return this.find(e=>e.menuId===t);return this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:void 0)}getOpen(){return Promise.resolve(this.getOpenSync())}getMenus(){return Promise.resolve(this.getMenusSync())}async isAnimating(){return this.menus.some(t=>t.isAnimating)}_register(t){this.menus.indexOf(t)<0&&this.menus.push(t)}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(i=>i.side===e&&i!==t).forEach(t=>t.disabled=!0)}async _setOpen(t,e,i){if(await this.isAnimating())return!1;if(e){const e=await this.getOpen();if(e&&t.el!==e)return e.setOpen(!1,!1)}return t._setOpen(e,i)}_getInstance(){return Promise.resolve(this)}_createAnimation(t,e){const i=this.menuAnimations.get(t);return i?this.animationCtrl.create(i,null,e):Promise.reject("animation not registered")}getOpenSync(){return this.find(t=>t._isOpen)}getMenusSync(){return this.menus.map(t=>t.el)}registerAnimation(t,e){this.menuAnimations.set(t,e)}find(t){const e=this.menus.find(t);if(void 0!==e)return e.el}static get is(){return"ion-menu-controller"}static get properties(){return{_createAnimation:{method:!0},_getInstance:{method:!0},_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}}static get style(){return".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"}}class g{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){return this.updateVisibility()}async onClick(){const t=await b(this.doc);return!(!t||!await t.get(this.menu))&&t.toggle(this.menu)}async updateVisibility(){const t=await b(this.doc);if(t){const e=await t.get(this.menu);if(e&&await e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){const t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}}render(){return t("slot",null)}static get is(){return"ion-menu-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"}}function b(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}export{n as IonMenu,h as IonMenuButton,p as IonMenuController,g as IonMenuToggle};