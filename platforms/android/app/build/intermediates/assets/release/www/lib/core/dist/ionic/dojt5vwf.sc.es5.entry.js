/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new i(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("dojt5vwf",["require","exports","./chunk-7e46fca4.js","./chunk-5aecd090.js","./chunk-3f37bb51.js","./chunk-80b321f6.js"],function(i,n,r,o,a,s){var l=window.Ionic.h;function u(e,t,i,n){if(e!==w&&e!==P){if(e===N)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":t?t.toUpperCase():"";if(e===A)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":t||"";if(null==t)return"";if(e===x||e===S||e===C||e===O||e===F||e===T)return b(t);if(e===k)return g(t);if(e===M)return(n.monthNames?n.monthNames:W)[t-1];if(e===D)return(n.monthShortNames?n.monthShortNames:H)[t-1];if(e===I||e===Y){if(0===t)return"12";if(t>12&&(t-=12),e===I&&t<10)return"0"+t}return t.toString()}try{return t=new Date(i.year,i.month-1,i.day).getDay(),e===w?(n.dayNames?n.dayNames:E)[t]:(n.dayShortNames?n.dayShortNames:V)[t]}catch(e){}}function c(e,t,i,n,r){return void 0===n&&(n=0),void 0===r&&(r=0),parseInt("1"+g(e)+b(t)+b(i)+b(n)+b(r),10)}function h(e){return c(e.year,e.month,e.day,e.hour,e.minute)}var d=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,p=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function m(e){var t=null;if(null!=e&&((t=p.exec(e))?(t.unshift(void 0,void 0),t[2]=t[3]=void 0):t=d.exec(e)),null!==t){for(var i=1;i<8;i++)t[i]=void 0!==t[i]?parseInt(t[i],10):void 0;var n=0;return t[9]&&t[10]&&(n=60*parseInt(t[10],10),t[11]&&(n+=parseInt(t[11],10)),"-"===t[9]&&(n*=-1)),{year:t[1],month:t[2],day:t[3],hour:t[4],minute:t[5],second:t[6],millisecond:t[7],tzOffset:n}}}function f(e){for(var t in j)if(j[t].f===e)return j[t].k}function y(e,t){var i;if(null!=e)return"string"==typeof e&&(e=e.replace(/\[|\]/g,"").split(",")),Array.isArray(e)&&(i=e.map(function(e){return e.toString().trim()})),void 0!==i&&0!==i.length||console.warn('Invalid "'+t+'Names". Must be an array of strings, or a comma separated string.'),i}function v(e,t){var i;return"string"==typeof e&&(e=e.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(e)?e.map(function(e){return parseInt(e,10)}).filter(isFinite):[e]).length&&console.warn('Invalid "'+t+'Values". Must be an array of numbers, or a comma separated string of numbers.'),i}function b(e){return("0"+(void 0!==e?Math.abs(e):"0")).slice(-2)}function g(e){return("000"+(void 0!==e?Math.abs(e):"0")).slice(-4)}var k="YYYY",x="YY",M="MMMM",D="MMM",S="MM",w="DDDD",P="DDD",C="DD",O="HH",I="hh",Y="h",F="mm",T="ss",N="A",A="a",j=[{f:k,k:"year"},{f:M,k:"month"},{f:w,k:"day"},{f:D,k:"month"},{f:P,k:"day"},{f:x,k:"year"},{f:S,k:"month"},{f:C,k:"day"},{f:O,k:"hour"},{f:I,k:"hour"},{f:F,k:"minute"},{f:T,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:Y,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:N,k:"ampm"},{f:A,k:"ampm"}],E=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],V=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],W=["January","February","March","April","May","June","July","August","September","October","November","December"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B=[I,Y,F,"m",T,"s"],L=function(){function i(){this.inputId="ion-dt-"+q++,this.labelId=this.inputId+"-lbl",this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.disabled=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done"}return i.prototype.disabledChanged=function(){this.emitStyle()},i.prototype.valueChanged=function(){this.updateValue(),this.emitStyle(),this.ionChange.emit({value:this.value})},i.prototype.componentWillLoad=function(){this.ionStyle=r.deferEvent(this.ionStyle),this.locale={monthNames:y(this.monthNames,"monthNames"),monthShortNames:y(this.monthShortNames,"monthShortNames"),dayNames:y(this.dayNames,"dayNames"),dayShortNames:y(this.dayShortNames,"dayShortNames")},this.updateValue()},i.prototype.componentDidLoad=function(){this.emitStyle()},i.prototype.open=function(){return e(this,void 0,void 0,function(){var e,i;return t(this,function(t){switch(t.label){case 0:return this.disabled?[2]:(e=this.generatePickerOptions(),i=this,[4,this.pickerCtrl.create(e)]);case 1:return i.picker=t.sent(),[4,this.validate()];case 2:return t.sent(),[4,this.picker.present()];case 3:return t.sent(),[2]}})})},i.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled})},i.prototype.updateValue=function(){!function(e,t){if(t&&""!==t){if("string"==typeof t){if(t=m(t))return Object.assign(e,t),!0}else if(t.year||t.hour||t.month||t.day||t.minute||t.second){t.ampm&&t.hour&&(t.hour.value="pm"===t.ampm.value?12===t.hour.value?12:t.hour.value+12:12===t.hour.value?0:t.hour.value);for(var i=0,n=Object.keys(t);i<n.length;i++){var r=n[i];e[r]=t[r].value}return!0}console.warn('Error parsing date: "'+t+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else for(var o in e)e.hasOwnProperty(o)&&delete e[o]}(this.datetimeValue,this.value),this.updateText()},i.prototype.generatePickerOptions=function(){var e=this,t=Object.assign({},this.pickerOptions,{columns:this.generateColumns()}),i=t.buttons;return i&&0!==i.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:function(){return e.ionCancel.emit()}},{text:this.doneText,handler:function(t){e.value=t}}]),t},i.prototype.generateColumns=function(){var e=this,t=this.pickerFormat||this.displayFormat||J;if(0===t.length)return[];this.calcMinMax(),-1===(t=t.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(t=t.replace("{~}","D"));var i=function(e){var t=[];e=e.replace(/[^\w\s]/gi," "),j.forEach(function(t){t.f.length>1&&e.indexOf(t.f)>-1&&e.indexOf(t.f+t.f.charAt(0))<0&&(e=e.replace(t.f," "+t.f+" "))});var i=e.split(" ").filter(function(e){return e.length>0});return i.forEach(function(e,n){j.forEach(function(r){if(e===r.f){if((e===N||e===A)&&(t.indexOf(Y)<0&&t.indexOf(I)<0||-1===B.indexOf(i[n-1])))return;t.push(e)}})}),t}(t=t.replace(/{~}/g,"")).map(function(t){var i=f(t),n=(e[i+"Values"]?v(e[i+"Values"],i):function(e,t,i){var n=[];if(e===k||e===x){if(void 0===i.year||void 0===t.year)throw new Error("min and max year is undefined");for(var r=i.year;r>=t.year;r--)n.push(r)}else if(e===M||e===D||e===S||"M"===e||e===I||e===Y)for(r=1;r<13;r++)n.push(r);else if(e===w||e===P||e===C||"D"===e)for(r=1;r<32;r++)n.push(r);else if(e===O||"H"===e)for(r=0;r<24;r++)n.push(r);else if(e===F||"m"===e)for(r=0;r<60;r++)n.push(r);else if(e===T||"s"===e)for(r=0;r<60;r++)n.push(r);else e!==N&&e!==A||n.push("am","pm");return n}(t,e.datetimeMin,e.datetimeMax)).map(function(i){return{value:i,text:u(t,i,void 0,e.locale)}}),r=function(e,t){return t===N||t===A?e.hour<12?"am":"pm":t===I||t===Y?e.hour>12?e.hour-12:e.hour:e[f(t)]}(e.datetimeValue,t),o=n.findIndex(function(e){return e.value===r});return{name:i,selectedIndex:o>=0?o:0,options:n}}),n=this.datetimeMin,r=this.datetimeMax;return["month","day","hour","minute"].filter(function(e){return!i.find(function(t){return t.name===e})}).forEach(function(e){n[e]=0,r[e]=0}),function(e){for(var t,i,n=[],r=0;r<e.length;r++){t=e[r],n.push(0);for(var o=0,a=t.options;o<a.length;o++){(i=a[o].text.length)>n[r]&&(n[r]=i)}}return 2===n.length?(i=Math.max(n[0],n[1]),e[0].align="right",e[1].align="left",e[0].optionsWidth=e[1].optionsWidth=17*i+"px"):3===n.length&&(i=Math.max(n[0],n[2]),e[0].align="right",e[1].columnWidth=17*n[1]+"px",e[0].optionsWidth=e[2].optionsWidth=17*i+"px",e[2].align="left"),e}(i)},i.prototype.validate=function(){return e(this,void 0,void 0,function(){var e,i,n,r,o,a,s,l,u,c,d;return t(this,function(t){switch(t.label){case 0:return e=new Date,i=h(this.datetimeMin),n=h(this.datetimeMax),[4,this.picker.getColumn("year")];case 1:return r=t.sent(),o=e.getFullYear(),r&&(r.options.find(function(t){return t.value===e.getFullYear()})||(o=r.options[0].value),void 0!==(a=r.selectedIndex)&&(s=r.options[a])&&(o=s.value)),[4,this.validateColumn("month",1,i,n,[o,0,0,0,0],[o,12,31,23,59])];case 2:return l=t.sent(),u=4===(p=l)||6===p||9===p||11===p?30:2===p?function(e){return e%4==0&&e%100!=0||e%400==0}(o)?29:28:31,[4,this.validateColumn("day",2,i,n,[o,l,0,0,0],[o,l,u,23,59])];case 3:return c=t.sent(),[4,this.validateColumn("hour",3,i,n,[o,l,c,0,0],[o,l,c,23,59])];case 4:return d=t.sent(),[4,this.validateColumn("minute",4,i,n,[o,l,c,d,0],[o,l,c,d,59])];case 5:return t.sent(),[2]}var p})})},i.prototype.calcMinMax=function(e){var t=(e||new Date).getFullYear();if(void 0!==this.yearValues){var i=v(this.yearValues,"year");void 0===this.min&&(this.min=Math.min.apply(Math,i)),void 0===this.max&&(this.max=Math.max.apply(Math,i))}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());var n=this.datetimeMin=m(this.min),r=this.datetimeMax=m(this.max);n.year=n.year||t,r.year=r.year||t,n.month=n.month||1,r.month=r.month||12,n.day=n.day||1,r.day=r.day||31,n.hour=n.hour||0,r.hour=r.hour||23,n.minute=n.minute||0,r.minute=r.minute||59,n.second=n.second||0,r.second=r.second||59,n.year>r.year&&(console.error("min.year > max.year"),n.year=r.year-100),n.year===r.year&&(n.month>r.month?(console.error("min.month > max.month"),n.month=1):n.month===r.month&&n.day>r.day&&(console.error("min.day > max.day"),n.day=1))},i.prototype.validateColumn=function(i,n,o,a,s,l){return e(this,void 0,void 0,function(){var e,u,h,d,p,m,f,y,v,b,g;return t(this,function(t){switch(t.label){case 0:return[4,this.picker.getColumn(i)];case 1:if(!(e=t.sent()))return[2,0];for(u=s.slice(),h=l.slice(),p=(d=e.options).length-1,m=0,f=0;f<d.length;f++)v=(y=d[f]).value,u[n]=y.value,h[n]=y.value,(y.disabled=v<s[n]||v>l[n]||c(h[0],h[1],h[2],h[3],h[4])<o||c(u[0],u[1],u[2],u[3],u[4])>a)||(p=Math.min(p,f),m=Math.max(m,f));return b=e.selectedIndex=r.clamp(p,e.selectedIndex,m),(g=e.options[b])?[2,g.value]:[2,0]}})})},i.prototype.updateText=function(){this.text=function(e,t,i){if(void 0!==t){var n=[],r=!1;if(j.forEach(function(o,a){if(e.indexOf(o.f)>-1){var s="{"+a+"}",l=u(o.f,t[o.k],t,i);r||void 0===l||null==t[o.k]||(r=!0),n.push(s,l||""),e=e.replace(o.f,s)}}),r){for(var o=0;o<n.length;o+=2)e=e.replace(n[o],n[o+1]);return e}}}(this.displayFormat||this.pickerFormat||J,this.datetimeValue,this.locale)},i.prototype.hasValue=function(){return Object.keys(this.datetimeValue).length>0},i.prototype.hostData=function(){return{class:Object.assign({},o.createThemedClasses(this.mode,"datetime"),{"datetime-disabled":this.disabled})}},i.prototype.render=function(){var e=!1,t=this.text;return void 0===t&&(void 0!==this.placeholder?(t=this.placeholder,e=!0):t=""),[l("div",{class:{"datetime-text":!0,"datetime-placeholder":e}},t),l("button",{type:"button","aria-haspopup":"true","aria-labelledby":this.labelId,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),class:"datetime-cover"},"md"===this.mode&&l("ion-ripple-effect",null))]},Object.defineProperty(i,"is",{get:function(){return"ion-datetime"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},hourValues:{type:"Any",attr:"hour-values"},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"events",{get:function(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-datetime{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden}.datetime-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.datetime-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;min-height:1.2em;font-size:inherit;line-height:1.2;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.datetime-disabled,.item-datetime-disabled ion-label{opacity:.4;pointer-events:none}.item-label-floating ion-datetime,.item-label-stacked ion-datetime{padding-left:0;width:100%}.item .datetime{position:static}.datetime-md{padding:11px 8px 11px 16px}.datetime-md .datetime-placeholder{color:var(--ion-placeholder-text-color,#999)}"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),i}(),q=0,J="MMM D, YYYY";function _(e,t){var i=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".picker-wrapper")),n.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}function U(e,t){var i=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".picker-wrapper")),n.fromTo("opacity",.26,.01),r.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}var z=function(){function i(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}return i.prototype.componentDidLoad=function(){this.ionPickerDidLoad.emit()},i.prototype.componentDidUnload=function(){this.ionPickerDidUnload.emit()},i.prototype.onBackdropTap=function(){var e=this.buttons.find(function(e){return"cancel"===e.role});e?this.buttonClick(e):this.dismiss()},i.prototype.present=function(){return e(this,void 0,void 0,function(){var e=this;return t(this,function(t){switch(t.label){case 0:return[4,a.present(this,"pickerEnter",_,_,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration)),[2]}})})},i.prototype.dismiss=function(e,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),a.dismiss(this,e,t,"pickerLeave",U,U)},i.prototype.onDidDismiss=function(){return a.eventMethod(this.el,"ionPickerDidDismiss")},i.prototype.onWillDismiss=function(){return a.eventMethod(this.el,"ionPickerWillDismiss")},i.prototype.getColumn=function(e){return Promise.resolve(this.columns.find(function(t){return t.name===e}))},i.prototype.buttonClick=function(e){var t=!0;return e.handler&&!1===e.handler(this.getSelected())&&(t=!1),t?this.dismiss():Promise.resolve(!1)},i.prototype.getSelected=function(){var e={};return this.columns.forEach(function(t,i){var n=void 0!==t.selectedIndex?t.options[t.selectedIndex]:void 0;e[t.name]={text:n?n.text:void 0,value:n?n.value:void 0,columnIndex:i}}),e},i.prototype.hostData=function(){return{class:Object.assign({},o.createThemedClasses(this.mode,"picker"),o.getClassMap(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},i.prototype.render=function(){var e=this;return[l("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),l("div",{class:"picker-wrapper",role:"dialog"},l("div",{class:"picker-toolbar"},this.buttons.map(function(t){return l("div",{class:(i=t,(n={})["picker-toolbar-"+i.role]=void 0!==i.role,n["picker-toolbar-button"]=!0,n)},l("button",{type:"button","ion-activatable":!0,onClick:function(){return e.buttonClick(t)},class:Object.assign({"picker-button":!0},o.getClassMap(t.cssClass))},t.text));var i,n})),l("div",{class:"picker-columns"},l("div",{class:"picker-above-highlight"}),this.columns.map(function(e){return l("ion-picker-column",{col:e})}),l("div",{class:"picker-below-highlight"})))]},Object.defineProperty(i,"is",{get:function(){return"ion-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"events",{get:function(){return[{name:"ionPickerDidLoad",method:"ionPickerDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidUnload",method:"ionPickerDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;contain:strict;overflow:hidden;z-index:10}.picker-columns{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;overflow:hidden}.picker-col{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:start;white-space:nowrap}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:0}.picker-md .picker-wrapper{height:260px;border-top:.55px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:var(--ion-background-color,#fff)}.picker-md .picker-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:44px;background:var(--ion-background-color,#fff)}.picker-md .picker-button,.picker-md .picker-button.activated{margin:0;padding:0 1.1em;height:44px;background:0 0;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-md .picker-columns{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-md .picker-col{padding:0 8px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-md .picker-opts,.picker-md .picker-prefix,.picker-md .picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:22px;line-height:42px;pointer-events:none}.picker-md .picker-opt{margin:0;padding:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:0 0;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-md .picker-opt.picker-opt-selected,.picker-md .picker-prefix,.picker-md .picker-suffix{color:var(--ion-color-primary,#3880ff)}.picker-md .picker-above-highlight{left:0;top:0;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;width:100%;height:81px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to bottom,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:10}.picker-md .picker-below-highlight{left:0;top:115px;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);position:absolute;width:100%;height:119px;border-top:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to top,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:11}"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),i}(),R=function(){function n(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0}return n.prototype.componentWillLoad=function(){var e=0,t=.81;"ios"===this.mode&&(e=-.46,t=1),this.rotateFactor=e,this.scaleFactor=t},n.prototype.componentDidLoad=function(){return e(this,void 0,void 0,function(){var e,n,r=this;return t(this,function(t){switch(t.label){case 0:return this.optHeight=(e=this.optsEl).firstElementChild?e.firstElementChild.clientHeight:0,this.refresh(),n=this,[4,new Promise(function(e,t){i(["./gesture.js"],e,t)})];case 1:return n.gesture=t.sent().createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:function(e){return r.onStart(e)},onMove:function(e){return r.onMove(e)},onEnd:function(e){return r.onEnd(e)}}),this.gesture.setDisabled(!1),[2]}})})},n.prototype.setSelected=function(e,t){var i=e>-1?-e*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,t,!0)},n.prototype.update=function(e,t,i){for(var n=0,r=0,o=this.col,s=this.rotateFactor,l=o.selectedIndex=this.indexForY(-e),u=0===t?null:t+"ms",c="scale("+this.scaleFactor+")",h=this.optsEl.children,d=0;d<h.length;d++){var p=h[d],m=o.options[d],f=d*this.optHeight+e,y=!0,v="";if(0!==s){var b=f*s;Math.abs(b)>90?y=!1:(n=0,r=90,v="rotateX("+b+"deg) ")}else r=0,n=f,Math.abs(n)>170&&(y=!1);var g=l===d;y?(v+="translate3d(0px,"+n+"px,"+r+"px) ",1===this.scaleFactor||g||(v+=c)):v="translate3d(-9999px,0px,0px)",t!==m.duration&&(m.duration=t,p.style.transitionDuration=u),v!==m.transform&&(m.transform=v,p.style.transform=v),g!==m.selected&&(m.selected=g,g?p.classList.add(G):p.classList.remove(G))}this.col.prevSelected=l,i&&(this.y=e),this.lastIndex!==l&&(a.hapticSelectionChanged(),this.lastIndex=l)},n.prototype.decelerate=function(){var e=this;if(0!==this.velocity){this.velocity*=Z,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);var t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),(Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(function(){return e.decelerate()}))}else if(this.y%this.optHeight!=0){var i=Math.abs(this.y%this.optHeight);this.velocity=i>this.optHeight/2?1:-1,this.decelerate()}},n.prototype.indexForY=function(e){return Math.min(Math.max(Math.abs(Math.round(e/this.optHeight)),0),this.col.options.length-1)},n.prototype.onStart=function(e){e.event.preventDefault(),e.event.stopPropagation(),cancelAnimationFrame(this.rafId);for(var t=this.col.options,i=t.length-1,n=0,r=0;r<t.length;r++)t[r].disabled||(i=Math.min(i,r),n=Math.max(n,r));this.minY=-i*this.optHeight,this.maxY=-n*this.optHeight},n.prototype.onMove=function(e){e.event.preventDefault(),e.event.stopPropagation();var t=this.y+e.deltaY;t>this.minY?(t=Math.pow(t,.8),this.bounceFrom=t):t<this.maxY?(t+=Math.pow(this.maxY-t,.9),this.bounceFrom=t):this.bounceFrom=0,this.update(t,0,!1)},n.prototype.onEnd=function(e){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=r.clamp(-$,23*e.velocityY,$),0===this.velocity&&0===e.deltaY){var t=e.event.target.closest(".picker-opt");t&&t.hasAttribute("opt-index")&&this.setSelected(parseInt(t.getAttribute("opt-index"),10),150)}else this.y+=e.deltaY,this.decelerate()},n.prototype.refresh=function(){for(var e=this.col.options.length-1,t=0,i=this.col.options,n=0;n<i.length;n++)i[n].disabled||(e=Math.min(e,n),t=Math.max(t,n));var o=r.clamp(e,this.col.selectedIndex,t);if(this.col.prevSelected!==o){var a=o*this.optHeight*-1;this.velocity=0,this.update(a,150,!0)}},n.prototype.hostData=function(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}},n.prototype.render=function(){var e=this,t=this.col;return[t.prefix&&l("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),l("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:function(t){return e.optsEl=t}},t.options.map(function(e,t){return l("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"opt-index":t},e.text)})),t.suffix&&l("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix)]},Object.defineProperty(n,"is",{get:function(){return"ion-picker-column"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),n}(),G="picker-opt-selected",Z=.97,$=90,X=function(){function i(){}return i.prototype.create=function(e){return a.createOverlay(this.doc.createElement("ion-picker"),e)},i.prototype.dismiss=function(e,t,i){return a.dismissOverlay(this.doc,e,t,"ion-picker",i)},i.prototype.getTop=function(){return e(this,void 0,void 0,function(){return t(this,function(e){return[2,a.getOverlay(this.doc,"ion-picker")]})})},Object.defineProperty(i,"is",{get:function(){return"ion-picker-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),i}();n.IonDatetime=L,n.IonPicker=z,n.IonPickerColumn=R,n.IonPickerController=X,Object.defineProperty(n,"__esModule",{value:!0})});