/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{j as e,e as i}from"./chunk-e7816c0b.js";import{g as s,c as a}from"./chunk-50fe9317.js";import{b as o,c as n,e as r,f as l,g as h,h as c,i as d}from"./chunk-12e0f551.js";import"./chunk-5f438245.js";function m(t,e,i,s){if(t!==F&&t!==N){if(t===B)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===L)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===S||t===I||t===P||t===T||t===$||t===H)return x(e);if(t===D)return M(e);if(t===w)return(s.monthNames?s.monthNames:z)[e-1];if(t===C)return(s.monthShortNames?s.monthShortNames:R)[e-1];if(t===O||t===V){if(0===e)return"12";if(e>12&&(e-=12),t===O&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===F?(s.dayNames?s.dayNames:J)[e]:(s.dayShortNames?s.dayShortNames:U)[e]}catch(t){}}function u(t,e,i,s=0,a=0){return parseInt(`1${M(t)}${x(e)}${x(i)}${x(s)}${x(a)}`,10)}function p(t){return u(t.year,t.month,t.day,t.hour,t.minute)}const y=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,f=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function b(t){let e=null;if(null!=t&&((e=f.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=y.exec(t)),null===e)return;for(let t=1;t<8;t++)e[t]=void 0!==e[t]?parseInt(e[t],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}}function g(t){for(const e in q)if(q[e].f===t)return q[e].k}function v(t,e){if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i}function k(t,e){let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t]).length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i}function x(t){return("0"+(void 0!==t?Math.abs(t):"0")).slice(-2)}function M(t){return("000"+(void 0!==t?Math.abs(t):"0")).slice(-4)}const D="YYYY",S="YY",w="MMMM",C="MMM",I="MM",Y="M",F="DDDD",N="DDD",P="DD",A="D",T="HH",E="H",O="hh",V="h",$="mm",W="m",H="ss",j="s",B="A",L="a",q=[{f:D,k:"year"},{f:w,k:"month"},{f:F,k:"day"},{f:C,k:"month"},{f:N,k:"day"},{f:S,k:"year"},{f:I,k:"month"},{f:P,k:"day"},{f:T,k:"hour"},{f:O,k:"hour"},{f:$,k:"minute"},{f:H,k:"second"},{f:Y,k:"month"},{f:A,k:"day"},{f:E,k:"hour"},{f:V,k:"hour"},{f:W,k:"minute"},{f:j,k:"second"},{f:B,k:"ampm"},{f:L,k:"ampm"}],J=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],U=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],z=["January","February","March","April","May","June","July","August","September","October","November","December"],R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=[O,V,$,W,H,j];class G{constructor(){this.inputId=`ion-dt-${X++}`,this.labelId=`${this.inputId}-lbl`,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.disabled=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done"}disabledChanged(){this.emitStyle()}valueChanged(){this.updateValue(),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.ionStyle=i(this.ionStyle),this.locale={monthNames:v(this.monthNames,"monthNames"),monthShortNames:v(this.monthShortNames,"monthShortNames"),dayNames:v(this.dayNames,"dayNames"),dayShortNames:v(this.dayShortNames,"dayShortNames")},this.updateValue()}componentDidLoad(){this.emitStyle()}async open(){if(this.disabled)return;const t=this.generatePickerOptions();this.picker=await this.pickerCtrl.create(t),await this.validate(),await this.picker.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateValue(){!function(t,e){if(e&&""!==e){if("string"==typeof e){if(e=b(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const e in t)t.hasOwnProperty(e)&&delete t[e]}(this.datetimeValue,this.value),this.updateText()}generatePickerOptions(){const t=Object.assign({},this.pickerOptions,{columns:this.generateColumns()}),e=t.buttons;return e&&0!==e.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:()=>this.ionCancel.emit()},{text:this.doneText,handler:t=>{this.value=t}}]),t}generateColumns(){let t=this.pickerFormat||this.displayFormat||K;if(0===t.length)return[];this.calcMinMax(),-1===(t=t.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(t=t.replace("{~}","D"));const e=function(t){const e=[];t=t.replace(/[^\w\s]/gi," "),q.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,s)=>{q.forEach(a=>{if(t===a.f){if((t===B||t===L)&&(e.indexOf(V)<0&&e.indexOf(O)<0||-1===Z.indexOf(i[s-1])))return;e.push(t)}})}),e}(t=t.replace(/{~}/g,"")).map(t=>{const e=g(t);let i;const s=(i=this[e+"Values"]?k(this[e+"Values"],e):function(t,e,i){const s=[];if(t===D||t===S){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)s.push(t)}else if(t===w||t===C||t===I||t===Y||t===O||t===V)for(let t=1;t<13;t++)s.push(t);else if(t===F||t===N||t===P||t===A)for(let t=1;t<32;t++)s.push(t);else if(t===T||t===E)for(let t=0;t<24;t++)s.push(t);else if(t===$||t===W)for(let t=0;t<60;t++)s.push(t);else if(t===H||t===j)for(let t=0;t<60;t++)s.push(t);else t!==B&&t!==L||s.push("am","pm");return s}(t,this.datetimeMin,this.datetimeMax)).map(e=>({value:e,text:m(t,e,void 0,this.locale)})),a=function(t,e){return e===B||e===L?t.hour<12?"am":"pm":e===O||e===V?t.hour>12?t.hour-12:t.hour:t[g(e)]}(this.datetimeValue,t),o=s.findIndex(t=>t.value===a);return{name:e,selectedIndex:o>=0?o:0,options:s}}),i=this.datetimeMin,s=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,s[t]=0}),function(t){const e=[];let i,s;for(let a=0;a<t.length;a++){i=t[a],e.push(0);for(const t of i.options)(s=t.text.length)>e[a]&&(e[a]=s)}return 2===e.length?(s=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=`${17*s}px`):3===e.length&&(s=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=`${17*e[1]}px`,t[0].optionsWidth=t[2].optionsWidth=`${17*s}px`,t[2].align="left"),t}(e)}async validate(){const t=new Date,e=p(this.datetimeMin),i=p(this.datetimeMax),s=await this.picker.getColumn("year");let a=t.getFullYear();if(s){s.options.find(e=>e.value===t.getFullYear())||(a=s.options[0].value);const e=s.selectedIndex;if(void 0!==e){const t=s.options[e];t&&(a=t.value)}}const o=await this.validateColumn("month",1,e,i,[a,0,0,0,0],[a,12,31,23,59]),n=4===(r=o)||6===r||9===r||11===r?30:2===r?function(t){return t%4==0&&t%100!=0||t%400==0}(a)?29:28:31;var r;const l=await this.validateColumn("day",2,e,i,[a,o,0,0,0],[a,o,n,23,59]),h=await this.validateColumn("hour",3,e,i,[a,o,l,0,0],[a,o,l,23,59]);await this.validateColumn("minute",4,e,i,[a,o,l,h,0],[a,o,l,h,59])}calcMinMax(t){const e=(t||new Date).getFullYear();if(void 0!==this.yearValues){const t=k(this.yearValues,"year");void 0===this.min&&(this.min=Math.min.apply(Math,t)),void 0===this.max&&(this.max=Math.max.apply(Math,t))}else void 0===this.min&&(this.min=(e-100).toString()),void 0===this.max&&(this.max=e.toString());const i=this.datetimeMin=b(this.min),s=this.datetimeMax=b(this.max);i.year=i.year||e,s.year=s.year||e,i.month=i.month||1,s.month=s.month||12,i.day=i.day||1,s.day=s.day||31,i.hour=i.hour||0,s.hour=s.hour||23,i.minute=i.minute||0,s.minute=s.minute||59,i.second=i.second||0,s.second=s.second||59,i.year>s.year&&(console.error("min.year > max.year"),i.year=s.year-100),i.year===s.year&&(i.month>s.month?(console.error("min.month > max.month"),i.month=1):i.month===s.month&&i.day>s.day&&(console.error("min.day > max.day"),i.day=1))}async validateColumn(t,i,s,a,o,n){const r=await this.picker.getColumn(t);if(!r)return 0;const l=o.slice(),h=n.slice(),c=r.options;let d=c.length-1,m=0;for(let t=0;t<c.length;t++){const e=c[t],r=e.value;l[i]=e.value,h[i]=e.value,(e.disabled=r<o[i]||r>n[i]||u(h[0],h[1],h[2],h[3],h[4])<s||u(l[0],l[1],l[2],l[3],l[4])>a)||(d=Math.min(d,t),m=Math.max(m,t))}const p=r.selectedIndex=e(d,r.selectedIndex,m),y=r.options[p];return y?y.value:0}updateText(){this.text=function(t,e,i){if(void 0===e)return;const s=[];let a=!1;if(q.forEach((o,n)=>{if(t.indexOf(o.f)>-1){const r="{"+n+"}",l=m(o.f,e[o.k],e,i);a||void 0===l||null==e[o.k]||(a=!0),s.push(r,l||""),t=t.replace(o.f,r)}}),a){for(let e=0;e<s.length;e+=2)t=t.replace(s[e],s[e+1]);return t}}(this.displayFormat||this.pickerFormat||K,this.datetimeValue,this.locale)}hasValue(){return Object.keys(this.datetimeValue).length>0}hostData(){return{class:Object.assign({},s(this.mode,"datetime"),{"datetime-disabled":this.disabled})}}render(){let e=!1,i=this.text;return void 0===i&&(void 0!==this.placeholder?(i=this.placeholder,e=!0):i=""),[t("div",{class:{"datetime-text":!0,"datetime-placeholder":e}},i),t("button",{type:"button","aria-haspopup":"true","aria-labelledby":this.labelId,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),class:"datetime-cover"},"md"===this.mode&&t("ion-ripple-effect",null))]}static get is(){return"ion-datetime"}static get properties(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},hourValues:{type:"Any",attr:"hour-values"},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}}static get events(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-datetime{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden}.datetime-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.datetime-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;min-height:1.2em;font-size:inherit;line-height:1.2;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.datetime-disabled,.item-datetime-disabled ion-label{opacity:.4;pointer-events:none}.item-label-floating ion-datetime,.item-label-stacked ion-datetime{padding-left:0;width:100%}.item .datetime{position:static}.datetime-md{padding:11px 8px 11px 16px}.datetime-md .datetime-placeholder{color:var(--ion-placeholder-text-color,#999)}"}static get styleMode(){return"md"}}let X=0;const K="MMM D, YYYY";function Q(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const a=new t;return a.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.01,.26),a.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(a))}function _(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const a=new t;return a.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.26,.01),a.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(a))}class tt{constructor(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}componentDidLoad(){this.ionPickerDidLoad.emit()}componentDidUnload(){this.ionPickerDidUnload.emit()}onBackdropTap(){const t=this.buttons.find(t=>"cancel"===t.role);t?this.buttonClick(t):this.dismiss()}async present(){await r(this,"pickerEnter",Q,Q,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),o(this,t,e,"pickerLeave",_,_)}onDidDismiss(){return n(this.el,"ionPickerDidDismiss")}onWillDismiss(){return n(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}buttonClick(t){let e=!0;return t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e?this.dismiss():Promise.resolve(!1)}getSelected(){const t={};return this.columns.forEach((e,i)=>{const s=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:s?s.text:void 0,value:s?s.value:void 0,columnIndex:i}}),t}hostData(){return{class:Object.assign({},s(this.mode,"picker"),a(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}render(){return[t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t("div",{class:"picker-wrapper",role:"dialog"},t("div",{class:"picker-toolbar"},this.buttons.map(e=>t("div",{class:function(t){return{[`picker-toolbar-${e.role}`]:void 0!==e.role,"picker-toolbar-button":!0}}()},t("button",{type:"button","ion-activatable":!0,onClick:()=>this.buttonClick(e),class:function(t){return Object.assign({"picker-button":!0},a(e.cssClass))}()},e.text)))),t("div",{class:"picker-columns"},t("div",{class:"picker-above-highlight"}),this.columns.map(e=>t("ion-picker-column",{col:e})),t("div",{class:"picker-below-highlight"})))]}static get is(){return"ion-picker"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}}static get events(){return[{name:"ionPickerDidLoad",method:"ionPickerDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidUnload",method:"ionPickerDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]}static get style(){return"ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;contain:strict;overflow:hidden;z-index:10}.picker-columns{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;overflow:hidden}.picker-col{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:start;white-space:nowrap}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:0}.picker-md .picker-wrapper{height:260px;border-top:.55px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:var(--ion-background-color,#fff)}.picker-md .picker-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:44px;background:var(--ion-background-color,#fff)}.picker-md .picker-button,.picker-md .picker-button.activated{margin:0;padding:0 1.1em;height:44px;background:0 0;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-md .picker-columns{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-md .picker-col{padding:0 8px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-md .picker-opts,.picker-md .picker-prefix,.picker-md .picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:22px;line-height:42px;pointer-events:none}.picker-md .picker-opt{margin:0;padding:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:0 0;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-md .picker-opt.picker-opt-selected,.picker-md .picker-prefix,.picker-md .picker-suffix{color:var(--ion-color-primary,#3880ff)}.picker-md .picker-above-highlight{left:0;top:0;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;width:100%;height:81px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to bottom,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:10}.picker-md .picker-below-highlight{left:0;top:115px;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;width:100%;height:119px;border-top:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to top,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:11}"}static get styleMode(){return"md"}}class et{constructor(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0}componentWillLoad(){let t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e}async componentDidLoad(){const t=this.optsEl;this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0,this.refresh(),this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(!1)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0)}update(t,e,i){let s=0,a=0;const{col:o,rotateFactor:n}=this,r=o.selectedIndex=this.indexForY(-t),l=0===e?null:e+"ms",h=`scale(${this.scaleFactor})`,c=this.optsEl.children;for(let i=0;i<c.length;i++){const d=c[i],m=o.options[i],u=i*this.optHeight+t;let p=!0,y="";if(0!==n){const t=u*n;Math.abs(t)>90?p=!1:(s=0,a=90,y=`rotateX(${t}deg) `)}else a=0,s=u,Math.abs(s)>170&&(p=!1);const f=r===i;p?(y+=`translate3d(0px,${s}px,${a}px) `,1===this.scaleFactor||f||(y+=h)):y="translate3d(-9999px,0px,0px)",e!==m.duration&&(m.duration=e,d.style.transitionDuration=l),y!==m.transform&&(m.transform=y,d.style.transform=y),f!==m.selected&&(m.selected=f,f?d.classList.add(it):d.classList.remove(it))}this.col.prevSelected=r,i&&(this.y=t),this.lastIndex!==r&&(d(),this.lastIndex=r)}decelerate(){if(0!==this.velocity){this.velocity*=st,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),(Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(()=>this.decelerate()))}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,s=0;for(let t=0;t<e.length;t++)e[t].disabled||(i=Math.min(i,t),s=Math.max(s,t));this.minY=-i*this.optHeight,this.maxY=-s*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=e(-at,23*t.velocityY,at),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),150)}else this.y+=t.deltaY,this.decelerate()}refresh(){let t=this.col.options.length-1,i=0;const s=this.col.options;for(let e=0;e<s.length;e++)s[e].disabled||(t=Math.min(t,e),i=Math.max(i,e));const a=e(t,this.col.selectedIndex,i);if(this.col.prevSelected!==a){const t=a*this.optHeight*-1;this.velocity=0,this.update(t,150,!0)}}hostData(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}}render(){const e=this.col;return[e.prefix&&t("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix),t("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth},ref:t=>this.optsEl=t},e.options.map((e,i)=>t("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"opt-index":i},e.text))),e.suffix&&t("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)]}static get is(){return"ion-picker-column"}static get properties(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}}}const it="picker-opt-selected",st=.97,at=90;class ot{create(t){return l(this.doc.createElement("ion-picker"),t)}dismiss(t,e,i){return h(this.doc,t,e,"ion-picker",i)}async getTop(){return c(this.doc,"ion-picker")}static get is(){return"ion-picker-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{G as IonDatetime,tt as IonPicker,et as IonPickerColumn,ot as IonPickerController};