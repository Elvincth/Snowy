/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function a(t){try{l(n.next(t))}catch(t){o(t)}}function s(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,s)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("cvpumfnt",["require","exports","./chunk-d80d899f.js","./chunk-7e353637.js","./chunk-571bd14e.js","./chunk-25856bb5.js"],function(t,e,i,n,r,o){var a=window.Ionic.h;function s(t,e,i,n){if(t!==D&&t!==w){if(t===_)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===F)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===g||t===M||t===S||t===P||t===I||t===Y)return y(e);if(t===b)return v(e);if(t===k)return(n.monthNames?n.monthNames:T)[e-1];if(t===x)return(n.monthShortNames?n.monthShortNames:E)[e-1];if(t===C||t===O){if(0===e)return"12";if(e>12&&(e-=12),t===C&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===D?(n.dayNames?n.dayNames:j)[e]:(n.dayShortNames?n.dayShortNames:A)[e]}catch(t){}}function l(t,e,i,n,r){return void 0===n&&(n=0),void 0===r&&(r=0),parseInt("1"+v(t)+y(e)+y(i)+y(n)+y(r),10)}function u(t){return l(t.year,t.month,t.day,t.hour,t.minute)}var c=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,h=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function d(t){var e=null;if(null!=t&&((e=h.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=c.exec(t)),null!==e){for(var i=1;i<8;i++)e[i]=void 0!==e[i]?parseInt(e[i],10):void 0;var n=0;return e[9]&&e[10]&&(n=60*parseInt(e[10],10),e[11]&&(n+=parseInt(e[11],10)),"-"===e[9]&&(n*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:n}}}function p(t){for(var e in N)if(N[e].f===t)return N[e].k}function m(t,e){var i;if(null!=t)return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(function(t){return t.toString().trim()})),void 0!==i&&0!==i.length||console.warn('Invalid "'+e+'Names". Must be an array of strings, or a comma separated string.'),i}function f(t,e){var i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(t)?t.map(function(t){return parseInt(t,10)}).filter(isFinite):[t]).length&&console.warn('Invalid "'+e+'Values". Must be an array of numbers, or a comma separated string of numbers.'),i}function y(t){return("0"+(void 0!==t?Math.abs(t):"0")).slice(-2)}function v(t){return("000"+(void 0!==t?Math.abs(t):"0")).slice(-4)}var b="YYYY",g="YY",k="MMMM",x="MMM",M="MM",D="DDDD",w="DDD",S="DD",P="HH",C="hh",O="h",I="mm",Y="ss",_="A",F="a",N=[{f:b,k:"year"},{f:k,k:"month"},{f:D,k:"day"},{f:x,k:"month"},{f:w,k:"day"},{f:g,k:"year"},{f:M,k:"month"},{f:S,k:"day"},{f:P,k:"hour"},{f:C,k:"hour"},{f:I,k:"minute"},{f:Y,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:O,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:_,k:"ampm"},{f:F,k:"ampm"}],j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],T=["January","February","March","April","May","June","July","August","September","October","November","December"],E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=[C,O,I,"m",Y,"s"],W=function(){function t(){this.inputId="ion-dt-"+H++,this.labelId=this.inputId+"-lbl",this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.disabled=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done"}return t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.updateValue(),this.emitStyle(),this.ionChange.emit({value:this.value})},t.prototype.componentWillLoad=function(){this.ionStyle=i.d(this.ionStyle),this.locale={monthNames:m(this.monthNames,"monthNames"),monthShortNames:m(this.monthShortNames,"monthShortNames"),dayNames:m(this.dayNames,"dayNames"),dayShortNames:m(this.dayShortNames,"dayShortNames")},this.updateValue()},t.prototype.componentDidLoad=function(){this.emitStyle()},t.prototype.open=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return this.disabled?[2]:(t=this.generatePickerOptions(),e=this,[4,this.pickerCtrl.create(t)]);case 1:return e.picker=i.sent(),[4,this.validate()];case 2:return i.sent(),[4,this.picker.present()];case 3:return i.sent(),[2]}})})},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled})},t.prototype.updateValue=function(){!function(t,e){if(e&&""!==e){if("string"==typeof e){if(e=d(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(var i=0,n=Object.keys(e);i<n.length;i++){var r=n[i];t[r]=e[r].value}return!0}console.warn('Error parsing date: "'+e+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else for(var o in t)t.hasOwnProperty(o)&&delete t[o]}(this.datetimeValue,this.value),this.updateText()},t.prototype.generatePickerOptions=function(){var t=this,e=Object.assign({},this.pickerOptions,{columns:this.generateColumns()}),i=e.buttons;return i&&0!==i.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:function(){return t.ionCancel.emit()}},{text:this.doneText,handler:function(e){t.value=e}}]),e},t.prototype.generateColumns=function(){var t=this,e=this.pickerFormat||this.displayFormat||B;if(0===e.length)return[];this.calcMinMax(),-1===(e=e.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(e=e.replace("{~}","D"));var i=function(t){var e=[];t=t.replace(/[^\w\s]/gi," "),N.forEach(function(e){e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});var i=t.split(" ").filter(function(t){return t.length>0});return i.forEach(function(t,n){N.forEach(function(r){if(t===r.f){if((t===_||t===F)&&(e.indexOf(O)<0&&e.indexOf(C)<0||-1===V.indexOf(i[n-1])))return;e.push(t)}})}),e}(e=e.replace(/{~}/g,"")).map(function(e){var i=p(e),n=t,r=(n[i+"Values"]?f(n[i+"Values"],i):function(t,e,i){var n=[];if(t===b||t===g){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(var r=i.year;r>=e.year;r--)n.push(r)}else if(t===k||t===x||t===M||"M"===t||t===C||t===O)for(r=1;r<13;r++)n.push(r);else if(t===D||t===w||t===S||"D"===t)for(r=1;r<32;r++)n.push(r);else if(t===P||"H"===t)for(r=0;r<24;r++)n.push(r);else if(t===I||"m"===t)for(r=0;r<60;r++)n.push(r);else if(t===Y||"s"===t)for(r=0;r<60;r++)n.push(r);else t!==_&&t!==F||n.push("am","pm");return n}(e,t.datetimeMin,t.datetimeMax)).map(function(i){return{value:i,text:s(e,i,void 0,t.locale)}}),o=function(t,e){return e===_||e===F?t.hour<12?"am":"pm":e===C||e===O?t.hour>12?t.hour-12:t.hour:t[p(e)]}(t.datetimeValue,e),a=r.findIndex(function(t){return t.value===o});return{name:i,selectedIndex:a>=0?a:0,options:r}}),n=this.datetimeMin,r=this.datetimeMax;return["month","day","hour","minute"].filter(function(t){return!i.find(function(e){return e.name===t})}).forEach(function(t){n[t]=0,r[t]=0}),function(t){for(var e,i,n=[],r=0;r<t.length;r++){e=t[r],n.push(0);for(var o=0,a=e.options;o<a.length;o++){(i=a[o].text.length)>n[r]&&(n[r]=i)}}return 2===n.length?(i=Math.max(n[0],n[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*i+"px"):3===n.length&&(i=Math.max(n[0],n[2]),t[0].align="right",t[1].columnWidth=17*n[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*i+"px",t[2].align="left"),t}(i)},t.prototype.validate=function(){return __awaiter(this,void 0,void 0,function(){var t,e,i,n,r,o,a,s,l,c,h;return __generator(this,function(d){switch(d.label){case 0:return t=new Date,e=u(this.datetimeMin),i=u(this.datetimeMax),[4,this.picker.getColumn("year")];case 1:return n=d.sent(),r=t.getFullYear(),n&&(n.options.find(function(e){return e.value===t.getFullYear()})||(r=n.options[0].value),void 0!==(o=n.selectedIndex)&&(a=n.options[o])&&(r=a.value)),[4,this.validateColumn("month",1,e,i,[r,0,0,0,0],[r,12,31,23,59])];case 2:return s=d.sent(),l=4===(p=s)||6===p||9===p||11===p?30:2===p?function(t){return t%4==0&&t%100!=0||t%400==0}(r)?29:28:31,[4,this.validateColumn("day",2,e,i,[r,s,0,0,0],[r,s,l,23,59])];case 3:return c=d.sent(),[4,this.validateColumn("hour",3,e,i,[r,s,c,0,0],[r,s,c,23,59])];case 4:return h=d.sent(),[4,this.validateColumn("minute",4,e,i,[r,s,c,h,0],[r,s,c,h,59])];case 5:return d.sent(),[2]}var p})})},t.prototype.calcMinMax=function(t){var e=(t||new Date).getFullYear();if(void 0!==this.yearValues){var i=f(this.yearValues,"year");void 0===this.min&&(this.min=Math.min.apply(Math,i)),void 0===this.max&&(this.max=Math.max.apply(Math,i))}else void 0===this.min&&(this.min=(e-100).toString()),void 0===this.max&&(this.max=e.toString());var n=this.datetimeMin=d(this.min),r=this.datetimeMax=d(this.max);n.year=n.year||e,r.year=r.year||e,n.month=n.month||1,r.month=r.month||12,n.day=n.day||1,r.day=r.day||31,n.hour=n.hour||0,r.hour=r.hour||23,n.minute=n.minute||0,r.minute=r.minute||59,n.second=n.second||0,r.second=r.second||59,n.year>r.year&&(console.error("min.year > max.year"),n.year=r.year-100),n.year===r.year&&(n.month>r.month?(console.error("min.month > max.month"),n.month=1):n.month===r.month&&n.day>r.day&&(console.error("min.day > max.day"),n.day=1))},t.prototype.validateColumn=function(t,e,n,r,o,a){return __awaiter(this,void 0,void 0,function(){var s,u,c,h,d,p,m,f,y,v,b;return __generator(this,function(g){switch(g.label){case 0:return[4,this.picker.getColumn(t)];case 1:if(!(s=g.sent()))return[2,0];for(u=o.slice(),c=a.slice(),h=s.options,d=h.length-1,p=0,m=0;m<h.length;m++)f=h[m],y=f.value,u[e]=f.value,c[e]=f.value,(f.disabled=y<o[e]||y>a[e]||l(c[0],c[1],c[2],c[3],c[4])<n||l(u[0],u[1],u[2],u[3],u[4])>r)||(d=Math.min(d,m),p=Math.max(p,m));return v=s.selectedIndex=i.i(d,s.selectedIndex,p),(b=s.options[v])?[2,b.value]:[2,0]}})})},t.prototype.updateText=function(){var t=this.displayFormat||this.pickerFormat||B;this.text=function(t,e,i){if(void 0!==e){var n=[],r=!1;if(N.forEach(function(o,a){if(t.indexOf(o.f)>-1){var l="{"+a+"}",u=s(o.f,e[o.k],e,i);r||void 0===u||null==e[o.k]||(r=!0),n.push(l,u||""),t=t.replace(o.f,l)}}),r){for(var o=0;o<n.length;o+=2)t=t.replace(n[o],n[o+1]);return t}}}(t,this.datetimeValue,this.locale)},t.prototype.hasValue=function(){var t=this.datetimeValue;return Object.keys(t).length>0},t.prototype.hostData=function(){return{class:Object.assign({},n.m(this.mode,"datetime"),{"datetime-disabled":this.disabled})}},t.prototype.render=function(){var t=!1,e=this.text;return void 0===e&&(void 0!==this.placeholder?(e=this.placeholder,t=!0):e=""),[a("div",{class:{"datetime-text":!0,"datetime-placeholder":t}},e),a("button",{type:"button","aria-haspopup":"true","aria-labelledby":this.labelId,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),class:"datetime-cover"},"md"===this.mode&&a("ion-ripple-effect",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-datetime"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},hourValues:{type:"Any",attr:"hour-values"},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-datetime{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden}.datetime-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.datetime-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;min-height:1.2em;font-size:inherit;line-height:1.2;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.datetime-disabled,.item-datetime-disabled ion-label{opacity:.4;pointer-events:none}.item-label-floating ion-datetime,.item-label-stacked ion-datetime{padding-left:0;width:100%}.item .datetime{position:static}.datetime-ios{padding:10px 8px 10px 16px}.datetime-ios .datetime-placeholder{color:var(--ion-text-color-step-600,#999)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),H=0,B="MMM D, YYYY";function L(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}function q(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.26,.01),r.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}var J=function(){function t(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionPickerDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionPickerDidUnload.emit()},t.prototype.onBackdropTap=function(){var t=this.buttons.find(function(t){return"cancel"===t.role});return t?this.buttonClick(t):this.dismiss()},t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return[4,r.e(this,"pickerEnter",L,L,void 0)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),r.b(this,t,e,"pickerLeave",q,q)},t.prototype.onDidDismiss=function(){return r.c(this.el,"ionPickerDidDismiss")},t.prototype.onWillDismiss=function(){return r.c(this.el,"ionPickerWillDismiss")},t.prototype.getColumn=function(t){return Promise.resolve(this.columns.find(function(e){return e.name===t}))},t.prototype.buttonClick=function(t){var e=!0;return t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e?this.dismiss():Promise.resolve(!1)},t.prototype.getSelected=function(){var t={};return this.columns.forEach(function(e,i){var n=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:n?n.text:void 0,value:n?n.value:void 0,columnIndex:i}}),t},t.prototype.hostData=function(){return{class:Object.assign({},n.m(this.mode,"picker"),n.j(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},t.prototype.render=function(){var t=this;return[a("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"picker-wrapper",role:"dialog"},a("div",{class:"picker-toolbar"},this.buttons.map(function(e){return a("div",{class:(i=e,(r={})["picker-toolbar-"+i.role]=void 0!==i.role,r["picker-toolbar-button"]=!0,r)},a("button",{type:"button","ion-activable":!0,onClick:function(){return t.buttonClick(e)},class:function(t){return Object.assign({"picker-button":!0},n.j(t.cssClass))}(e)},e.text));var i,r})),a("div",{class:"picker-columns"},a("div",{class:"picker-above-highlight"}),this.columns.map(function(t){return a("ion-picker-column",{col:t})}),a("div",{class:"picker-below-highlight"})))]},Object.defineProperty(t,"is",{get:function(){return"ion-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionPickerDidLoad",method:"ionPickerDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidUnload",method:"ionPickerDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;contain:strict;overflow:hidden;z-index:10}.picker-columns{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;overflow:hidden}.picker-col{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:start;white-space:nowrap}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:0}.picker-ios .picker-wrapper{height:260px;border-top:1px solid var(--ion-item-border-color,#c8c7cc);background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--ion-item-border-color,#c8c7cc);background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar-button{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:end}.picker-ios .picker-toolbar-button:last-child .picker-button{font-weight:600}.picker-ios .picker-toolbar-button:first-child{font-weight:400;text-align:start}.picker-ios .picker-button,.picker-ios .picker-button.activated{margin:0;padding:0 1em;height:44px;background:0 0;color:var(--ion-color-primary,#3880ff);font-size:16px}.picker-columns{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-ios .picker-col{padding:0 4px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:20px;line-height:42px;pointer-events:none}.picker-ios .picker-opt{padding:0;margin:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:0 0;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-ios .picker-above-highlight{left:0;top:0;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,#c8c7cc);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to bottom,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:10}.picker-ios .picker-below-highlight{left:0;top:115px;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,#c8c7cc);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to top,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:11}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),U=function(){function e(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0}return e.prototype.componentWillLoad=function(){var t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,i,n=this;return __generator(this,function(r){switch(r.label){case 0:return e=this.optsEl,this.optHeight=e.firstElementChild?e.firstElementChild.clientHeight:0,this.refresh(),i=this,[4,new Promise(function(e,i){t(["./gesture.js"],e,i)})];case 1:return i.gesture=r.sent().createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.gesture.setDisabled(!1),[2]}})})},e.prototype.setSelected=function(t,e){var i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0)},e.prototype.update=function(t,e,i){for(var r=0,o=0,a=this.col,s=this.rotateFactor,l=a.selectedIndex=this.indexForY(-t),u=0===e?null:e+"ms",c="scale("+this.scaleFactor+")",h=this.optsEl.children,d=0;d<h.length;d++){var p=h[d],m=a.options[d],f=d*this.optHeight+t,y=!0,v="";if(0!==s){var b=f*s;Math.abs(b)>90?y=!1:(r=0,o=90,v="rotateX("+b+"deg) ")}else o=0,r=f,Math.abs(r)>170&&(y=!1);var g=l===d;y?(v+="translate3d(0px,"+r+"px,"+o+"px) ",1===this.scaleFactor||g||(v+=c)):v="translate3d(-9999px,0px,0px)",e!==m.duration&&(m.duration=e,p.style.transitionDuration=u),v!==m.transform&&(m.transform=v,p.style.transform=v),g!==m.selected&&(m.selected=g,g?p.classList.add(z):p.classList.remove(z))}this.col.prevSelected=l,i&&(this.y=t),this.lastIndex!==l&&(n.c(),this.lastIndex=l)},e.prototype.decelerate=function(){var t=this;if(0!==this.velocity){this.velocity*=R,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);var e=this.y+this.velocity;e>this.minY?(e=this.minY,this.velocity=0):e<this.maxY&&(e=this.maxY,this.velocity=0),this.update(e,0,!0),(Math.round(e)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(function(){return t.decelerate()}))}else if(this.y%this.optHeight!=0){var i=Math.abs(this.y%this.optHeight);this.velocity=i>this.optHeight/2?1:-1,this.decelerate()}},e.prototype.indexForY=function(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)},e.prototype.onStart=function(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);for(var e=this.col.options,i=e.length-1,n=0,r=0;r<e.length;r++)e[r].disabled||(i=Math.min(i,r),n=Math.max(n,r));this.minY=-i*this.optHeight,this.maxY=-n*this.optHeight},e.prototype.onMove=function(t){t.event.preventDefault(),t.event.stopPropagation();var e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)},e.prototype.onEnd=function(t){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=i.i(-G,23*t.velocityY,G),0===this.velocity&&0===t.deltaY){var e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),150)}else this.y+=t.deltaY,this.decelerate()},e.prototype.refresh=function(){for(var t=this.col.options.length-1,e=0,n=this.col.options,r=0;r<n.length;r++)n[r].disabled||(t=Math.min(t,r),e=Math.max(e,r));var o=i.i(t,this.col.selectedIndex,e);if(this.col.prevSelected!==o){var a=o*this.optHeight*-1;this.velocity=0,this.update(a,150,!0)}},e.prototype.hostData=function(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}},e.prototype.render=function(){var t=this,e=this.col;return[e.prefix&&a("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix),a("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth},ref:function(e){return t.optsEl=e}},e.options.map(function(t,e){return a("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":e},t.text)})),e.suffix&&a("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)]},Object.defineProperty(e,"is",{get:function(){return"ion-picker-column"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),e}(),z="picker-opt-selected",R=.97,G=90,Z=function(){function t(){}return t.prototype.create=function(t){return r.f(this.doc.createElement("ion-picker"),t)},t.prototype.dismiss=function(t,e,i){return r.g(this.doc,t,e,"ion-picker",i)},t.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,r.h(this.doc,"ion-picker")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-picker-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();e.IonDatetime=W,e.IonPicker=J,e.IonPickerColumn=U,e.IonPickerController=Z,Object.defineProperty(e,"__esModule",{value:!0})});