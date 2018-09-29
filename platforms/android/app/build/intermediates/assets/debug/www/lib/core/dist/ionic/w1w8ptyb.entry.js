/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{d as e}from"./chunk-e7816c0b.js";import{d as i,e as s}from"./chunk-50fe9317.js";class o{constructor(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.strong=!1,this.type="button"}componentWillLoad(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")}onFocus(){this.ionFocus.emit()}onKeyUp(){this.keyFocus=!0}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}onClick(t){if("button"===this.type)return s(this.win,this.href,t,this.routerDirection);if(e(this.el)){const e=this.el.closest("form");if(e){t.preventDefault(),t.stopPropagation();const i=document.createElement("button");i.type=this.type,i.style.display="none",e.appendChild(i),i.click(),i.remove()}}return Promise.resolve(!1)}hostData(){const{buttonType:t,color:e,expand:s,fill:o,mode:r,shape:l,size:a,strong:c}=this;return{"ion-activatable":!0,class:Object.assign({},i(e),function(t,e){return void 0===t?{}:{[t]:!0,[`${t}-${e}`]:!0}}(t,r),n(t,s,r),n(t,a,r),n(t,l,r),n(t,c?"strong":void 0,r),n(t,o,r),{focused:this.keyFocus})}}render(){const e=void 0===this.href?"button":"a";return t(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onClick:this.onClick.bind(this)}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}}static get events(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--overflow:hidden;--ripple-color:currentColor;display:inline-block;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host([disabled]){pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--color:var(--ion-color-primary-contrast, #fff);--color-activated:var(--ion-color-primary-contrast, #fff);--color-focused:var(--ion-color-primary-contrast, #fff);--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.activated) .button-native,:host(.button-solid.ion-color.focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff);--border-width:1px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary, #3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:0 0;color:var(--ion-color-base)}:host(.button-outline.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff);--opacity:1;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff)}:host(.button-clear.ion-color) .button-native{background:0 0;color:var(--ion-color-base)}:host(.button-clear.focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:0 0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled]{cursor:default;opacity:.5;pointer-events:none}:host(.focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}.button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin:0 .3em 0 -.3em}::slotted(ion-icon[slot=end]){margin:0 -.2em 0 .3em}::slotted(ion-icon[slot=icon-only]){font-size:1.8em;padding:0}ion-ripple-effect{color:var(--ripple-color)}:host{--border-radius:2px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--height:36px;--transition:box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),color 300ms cubic-bezier(0.4, 0, 0.2, 1);font-size:14px;font-weight:500;letter-spacing:0;text-transform:uppercase}:host(.button-solid.activated){--box-shadow:0 3px 5px rgba(0, 0, 0, 0.14),0 3px 5px rgba(0, 0, 0, 0.21)}:host(.button-outline.activated.ion-color) .button-native{background:0 0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}:host(.button-strong){font-weight:700}"}static get styleMode(){return"md"}}function n(t,e,i){return void 0===e?{}:{[`${t}-${e}`]:!0,[`${t}-${e}-${i}`]:!0}}class r{constructor(){this.isVisible=!1,this.lazy=!1}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,i){if(this.lazy&&this.win&&this.win.IntersectionObserver){const s=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(s.disconnect(),this.io=void 0,i())},{rootMargin:e});s.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t&&function(t){let e=l.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(t=>t.ok?t.text():Promise.resolve(null)),l.set(t,e)),e}(t).then(t=>{this.svgContent=function(t,e,i){if(e){const s=t.createDocumentFragment(),o=t.createElement("div");o.innerHTML=e,s.appendChild(o);for(let t=o.childNodes.length-1;t>=0;t--)"svg"!==o.childNodes[t].nodeName.toLowerCase()&&o.removeChild(o.childNodes[t]);const n=o.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&(i&&n.setAttribute("class",i),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(let i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(n)))return o.innerHTML}return""}(this.doc,t,this.el["s-sc"])})}if(!this.ariaLabel){const t=a(this.name,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getUrl(){let t=c(this.src);return t||((t=a(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=c(this.icon))?t:(t=a(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)}getNamedUrl(t){return`${this.resourcesUrl}svg/${t}.svg`}hostData(){return{role:"img",class:Object.assign({},(t=this.color,t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null),{[`icon-${this.size}`]:!!this.size})};var t}render(){return t("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})}static get is(){return"ion-icon"}static get encapsulation(){return"shadow"}static get properties(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:currentColor;stroke:currentColor}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}const l=new Map;function a(t,e,i,s){return e=(e||"md").toLowerCase(),i&&"ios"===e?t=i.toLowerCase():s&&"md"===e?t=s.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${e}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function c(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}export{o as IonButton,r as IonIcon};