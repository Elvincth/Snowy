/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Ionic: Core, es2017
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==C?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=2===r.t||1===r.t&&!t.r.e,u=r.n+i.mode,f=r[u];if(o&&(i["s-sc"]=n(r,i.mode)),f||(f=r[u=r.n+C],o&&(i["s-sc"]=n(r))),f){var c=e.i.head;if(e.e)if(1===r.t)c=i.shadowRoot;else for(var a=i;a=e.o(a);)if(a.host&&a.host.shadowRoot){c=a.host.shadowRoot;break}var s=t.u.get(c);if(s||t.u.set(c,s={}),!s[u]){var l=void 0;if((l=e.f("style")).innerHTML=f,s[u]=!0,l){var v=c.querySelectorAll("[data-styles]");e.c(c,l,v.length&&v[v.length-1].nextSibling||c.firstChild)}}}}function r(n){return{a:n[0],s:n[1],l:!!n[2],v:!!n[3],p:!!n[4]}}function i(n,t){if(_(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function o(n,t,e,r,i,o){if(n.d.delete(t),(i=n.y.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.y.delete(t)),n.m.length&&!n.d.size)for(;o=n.m.shift();)o()}function u(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)W.push(arguments[f]);for(;W.length>0;){var c=W.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)W.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&W.push(f);t.class=W.join(" "),W.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],N):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,b:void 0,w:!1}}function f(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function c(n,t){n.d.add(t),n.g.has(t)||(n.g.set(t,!0),n.M?n.queue.write(function(){return a(n,t)}):n.queue.tick(function(){return a(n,t)}))}function a(n,t,e,r,o,u){if(n.g.delete(t),!n.j.has(t)){if(r=n.k.get(t))try{r.componentWillUpdate&&(u=r.componentWillUpdate())}catch(e){n.A(e,5,t)}else{if((o=n.y.get(t))&&!o["s-rn"])return void(o["s-rc"]=o["s-rc"]||[]).push(function(){a(n,t)});r=function f(n,t,e,r,o,u,c){try{r=new(o=n.O(t).C),function a(n,t,e,r,o){n.S.set(r,e),n._.has(e)||n._.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function c(n,t,e,r,o,u,f,a){if(t.type||t.state){var s=n._.get(e);t.state||(!t.attr||void 0!==s[o]&&""!==s[o]||(f=u&&u.x)&&_(a=f[t.attr])&&(s[o]=i(t.type,a)),e.hasOwnProperty(o)&&(void 0===s[o]&&(s[o]=i(t.type,e[o])),"mode"!==o&&delete e[o])),r.hasOwnProperty(o)&&void 0===s[o]&&(s[o]=r[o]),t.watchCallbacks&&(s[R+o]=t.watchCallbacks.slice()),p(r,o,function d(t){return(t=n._.get(n.S.get(this)))&&t[o]},function h(e,r){(r=n.S.get(this))&&(t.state||t.mutable)&&l(n,r,o,e)})}else if(t.elementRef)v(r,o,e);else if(t.method)v(e,o,r[o].bind(r));else if(t.context){var y=n.P(t.context);void 0!==y&&v(r,o,y.T&&y.T(e)||y)}else t.connect&&v(r,o,n.W(t.connect))})(n,f,e,r,u,o)})}(n,o,t,r,e),function s(n,t,e){if(t){var r=n.S.get(e);t.forEach(function(t){e[t.method]={emit:function(e){n.N(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,r);try{if(u=n.R.get(t)){for(c=0;c<u.length;c+=2)r[u[c]](u[c+1]);n.R.delete(t)}}catch(e){n.A(e,2,t)}}catch(e){r={},n.A(e,7,t,!0)}return n.k.set(t,r),r}(n,t,n.L.get(t));try{r.componentWillLoad&&(u=r.componentWillLoad())}catch(e){n.A(e,3,t)}}u&&u.then?u.then(function(){return s(n,t,r)}).catch(function(e){s(n,t,r)}):s(n,t,r)}}function s(n,e,r){(function i(n,e,r,o){try{var f,c=e.C.host,a=e.C.encapsulation,s="shadow"===a&&n.r.e,l=r;if(f=function v(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(e.C.properties,o),s&&(l=r.shadowRoot),!r["s-rn"]){n.D(n,n.r,e,r);var p=r["s-sc"];p&&(n.r.F(r,t(p,!0)),o.render||n.r.F(r,t(p)))}if(o.render||o.hostData||c||f){n.H=!0;var d=o.render&&o.render(),h=void 0;h=o.hostData&&o.hostData(),f&&(h=h?Object.assign(h,f):f),n.H=!1;var y=n.q.get(r)||{};y.b=l;var m=u(null,h,d);m.w=!0,n.q.set(r,n.render(r,y,m,s,a))}r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.H=!1,n.A(t,8,r,!0)}})(n,n.O(e),e,r);try{e["s-init"]()}catch(t){n.A(t,6,e,!0)}}function l(n,t,e,r,i){var o=n._.get(t);o||n._.set(t,o={});var u=o[e];if(r!==u&&(o[e]=r,i=n.k.get(t))){var f=o[R+e];if(f)for(var a=0;a<f.length;a++)try{i[f[a]].call(i,r,u,e)}catch(n){}!n.H&&t["s-rn"]&&c(n,t)}}function v(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function p(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function d(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(L,x(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(L,x(t),e):n.setAttribute(t,e))}function h(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.U(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.O(t);c&&c.B&&c.B[e]?(m(t,e,i),u&&c.B[e].I&&d(t,c.B[e].Q,i,4===c.B[e].Y)):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||n.r.Z(t,e))}else null!=i&&"key"!==e?d(t,e,i):(o||n.r.z(t,e)&&(null==i||!1===i))&&n.r.Z(t,e);else e=x(e)in t?x(e.substring(2)):x(e[2])+e.substring(3),i?i!==r&&n.r.G(t,e,i):n.r.J(t,e);else if(r!==i){var a=y(r),s=y(i),l=a.filter(function(n){return!s.includes(n)}),v=y(t.className).filter(function(n){return!l.includes(n)}),p=s.filter(function(n){return!a.includes(n)&&!v.includes(n)});v.push.apply(v,p),t.className=v.join(" ")}}function y(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function m(n,t,e){try{n[t]=e}catch(n){}}function b(n,t,e,r,i){var o=11===e.b.nodeType&&e.b.host?e.b.host:e.b,u=t&&t.vattrs||O,f=e.vattrs||O;for(i in u)f&&null!=f[i]||null==u[i]||h(n,o,i,u[i],void 0,r,e.w);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||h(n,o,i,u[i],f[i],r,e.w)}function w(n,t){function e(i,o,u,f,c,l,y,m,w){if(m=o.vchildren[u],a||(v=!0,"slot"===m.vtag&&(s&&t.F(f,s+"-s"),m.vchildren?m.K=!0:m.V=!0)),_(m.vtext))m.b=t.X(m.vtext);else if(m.V)m.b=t.X("");else{if(l=m.b=D||"svg"===m.vtag?t.nn("http://www.w3.org/2000/svg",m.vtag):t.f(m.K?"slot-fb":m.vtag),n.tn(l)&&n.en.delete(h),D="svg"===m.vtag||"foreignObject"!==m.vtag&&D,b(n,null,m,D),_(s)&&l["s-si"]!==s&&t.F(l,l["s-si"]=s),m.vchildren)for(c=0;c<m.vchildren.length;++c)(y=e(i,m,c,l))&&t.rn(l,y);"svg"===m.vtag&&(D=!1)}return m.b["s-hn"]=d,(m.K||m.V)&&(m.b["s-sr"]=!0,m.b["s-cr"]=p,m.b["s-sn"]=m.vname||"",(w=i&&i.vchildren&&i.vchildren[u])&&w.vtag===m.vtag&&i.b&&r(i.b)),m.b}function r(e,i,o,u){n.in=!0;var a=t.on(e);for(o=a.length-1;o>=0;o--)(u=a[o])["s-hn"]!==d&&u["s-ol"]&&(t.un(u),t.c(c(u),u,f(u)),t.un(u["s-ol"]),u["s-ol"]=null,v=!0),i&&r(u,i);n.in=!1}function i(n,r,i,o,u,c,a,s){var l=n["s-cr"];for((a=l&&t.o(l)||n).shadowRoot&&t.fn(a)===d&&(a=a.shadowRoot);u<=c;++u)o[u]&&(s=_(o[u].vtext)?t.X(o[u].vtext):e(null,i,u,n))&&(o[u].b=s,t.c(a,s,f(r)))}function o(n,e,i,o){for(;e<=i;++e)_(n[e])&&(o=n[e].b,l=!0,o["s-ol"]?t.un(o["s-ol"]):r(o,!0),t.un(o))}function u(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function f(n){return n&&n["s-ol"]?n["s-ol"]:n}function c(n){return t.o(n["s-ol"]?n["s-ol"]:n)}var a,s,l,v,p,d,h,y=[];return function m(w,g,M,j,$,k,A,E,C,O,S,x){if(h=w,d=t.fn(h),p=h["s-cr"],a=j,s=h["s-sc"],v=l=!1,function a(s,l,v){var p=l.b=s.b,d=s.vchildren,h=l.vchildren;D=l.b&&_(t.cn(l.b))&&void 0!==l.b.ownerSVGElement,D="svg"===l.vtag||"foreignObject"!==l.vtag&&D,_(l.vtext)?(v=p["s-cr"])?t.an(t.o(v),l.vtext):s.vtext!==l.vtext&&t.an(p,l.vtext):("slot"!==l.vtag&&b(n,s,l,D),_(d)&&_(h)?function y(n,s,l,v,p,d,h,m){for(var b=0,w=0,g=s.length-1,M=s[0],j=s[g],$=v.length-1,k=v[0],A=v[$];b<=g&&w<=$;)if(null==M)M=s[++b];else if(null==j)j=s[--g];else if(null==k)k=v[++w];else if(null==A)A=v[--$];else if(u(M,k))a(M,k),M=s[++b],k=v[++w];else if(u(j,A))a(j,A),j=s[--g],A=v[--$];else if(u(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||r(t.o(M.b)),a(M,A),t.c(n,M.b,t.sn(j.b)),M=s[++b],A=v[--$];else if(u(j,k))"slot"!==M.vtag&&"slot"!==A.vtag||r(t.o(j.b)),a(j,k),t.c(n,j.b,M.b),j=s[--g],k=v[++w];else{for(p=null,d=b;d<=g;++d)if(s[d]&&_(s[d].vkey)&&s[d].vkey===k.vkey){p=d;break}_(p)?((m=s[p]).vtag!==k.vtag?h=e(s&&s[w],l,p,n):(a(m,k),s[p]=void 0,h=m.b),k=v[++w]):(h=e(s&&s[w],l,w,n),k=v[++w]),h&&t.c(c(M.b),h,f(M.b))}b>g?i(n,null==v[$+1]?null:v[$+1].b,l,v,w,$):w>$&&o(s,b,g)}(p,d,l,h):_(h)?(_(s.vtext)&&t.an(p,""),i(p,null,l,h,0,h.length-1)):_(d)&&o(d,0,d.length-1)),D&&"svg"===l.vtag&&(D=!1)}(g,M),v){for(function n(e,r,i,o,u,f,c,a,s,v){for(u=0,f=(r=t.on(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.on(t.o(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(v=t.ln(o))||8===v)&&""===s||1===v&&null===t.vn(o,"slot")&&""===s||1===v&&t.vn(o,"slot")===s)&&(y.some(function(n){return n.pn===o})||(l=!0,o["s-sn"]=s,y.push({dn:i,pn:o})));1===t.ln(i)&&n(i)}}(M.b),A=0;A<y.length;A++)(E=y[A]).pn["s-ol"]||((C=t.X(""))["s-nr"]=E.pn,t.c(t.o(E.pn),E.pn["s-ol"]=C,E.pn));for(n.in=!0,A=0;A<y.length;A++){for(E=y[A],S=t.o(E.dn),x=t.sn(E.dn),C=E.pn["s-ol"];C=t.hn(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.pn["s-sn"]&&S===t.o(O)&&(O=t.sn(O))&&O&&!O["s-nr"]){x=O;break}(!x&&S!==t.o(E.pn)||t.sn(E.pn)!==x)&&E.pn!==x&&(t.un(E.pn),t.c(S,E.pn,x))}n.in=!1}return l&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.on(e)).length;o<u;o++)if(r=i[o],1===t.ln(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.ln(i[f]),""!==c){if(1===a&&c===t.vn(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.yn(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.b),y.length=0,M}}function g(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.b),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))}function M(n,t,e,r){if(e.connectedCallback=function(){(function e(n,t,r){n.mn.has(r)||(n.mn.set(r,!0),function i(n,t){var e=n.O(t);e.bn&&e.bn.forEach(function(e){e.l||n.r.G(t,e.a,function r(n,t,e,i){return function(r){(i=n.k.get(t))?i[e](r):((i=n.R.get(t)||[]).push(e,r),n.R.set(t,i))}}(n,t,e.s),e.p,e.v)})}(n,r)),n.j.delete(r),n.wn.has(r)||(n.d.add(r),n.wn.set(r,!0),r["s-id"]||(r["s-id"]=n.gn()),function o(n,t,e){for(e=t;e=n.r.cn(e);)if(n.tn(e)){n.en.has(t)||(n.y.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.L.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.Mn(r)),r["s-cr"]||n.vn(r,E)||n.e&&1===t.t||(r["s-cr"]=n.X(""),r["s-cr"]["s-cn"]=!0,n.c(r,r["s-cr"],n.on(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),1===t.t&&n.e&&!r.shadowRoot&&n.jn(r,{mode:"open"}),i={$n:r["s-id"],x:{}},t.B&&Object.keys(t.B).forEach(function(e){(o=t.B[e].Q)&&(i.x[o]=n.vn(r,o))}),i}(n.r,t,r)),n.kn(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e){if(!n.in&&function r(n,t){for(;t;){if(!n.o(t))return 9!==n.ln(t);t=n.o(t)}}(n.r,e)){n.j.set(e,!0),o(n,e),g(n.q.get(e),!0),n.r.J(e),n.mn.delete(e);var i=n.k.get(e);i&&i.componentDidUnload&&i.componentDidUnload(),[n.y,n.An,n.L].forEach(function(n){return n.delete(e)})}})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,u,f){if((i=n.k.get(e))&&!n.j.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.en.set(e,!0),(f=n.En.has(e))||(n.En.set(e,!0),e["s-ld"]=void 0,n.r.F(e,r));try{g(n.q.get(e)),(u=n.An.get(e))&&(u.forEach(function(n){return n(e)}),n.An.delete(e)),!f&&i.componentDidLoad?i.componentDidLoad():f&&i.componentDidUpdate&&i.componentDidUpdate()}catch(t){n.A(t,4,e)}o(n,e)}})(n,this,r)},e.forceUpdate=function(){c(n,this)},t.B){var u=Object.entries(t.B),f={};u.forEach(function(n){var t=n[0],e=n[1].Q;e&&(f[e]=t)}),f=Object.assign({},f),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[x(e)];o&&(t[o]=i)})(f,this,n,e)},function a(n,t,e){t.forEach(function(t){var r=t[0],o=t[1],u=o.Cn;3&u?p(e,r,function t(){return(n._.get(this)||{})[r]},function t(e){l(n,this,r,i(o.Y,e))}):32===u&&v(e,r,T)})}(n,u,e)}}function j(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.f(e),n.rn(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function $(n,t,r,i,o,f){var a={html:{}},s={},l=r[n]=r[n]||{},v=function p(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,On:!1,ln:function(n){return n.nodeType},f:function(n){return e.createElement(n)},nn:function(n,t){return e.createElementNS(n,t)},X:function(n){return e.createTextNode(n)},Sn:function(n){return e.createComment(n)},c:function(n,t,e){return n.insertBefore(t,e)},un:function(n){return n.remove()},rn:function(n,t){return n.appendChild(t)},F:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},on:function(n){return n.childNodes},o:function(n){return n.parentNode},sn:function(n){return n.nextSibling},hn:function(n){return n.previousSibling},fn:function(n){return x(n.nodeName)},yn:function(n){return n.textContent},an:function(n,t){return n.textContent=t},vn:function(n,t){return n.getAttribute(t)},_n:function(n,t,e){return n.setAttribute(t,e)},xn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},Z:function(n,t){return n.removeAttribute(t)},z:function(n,t){return n.hasAttribute(t)},Mn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Pn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.cn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},G:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.Pn(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.Pn(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===S[s[1]]&&o(n)}),a=i.On?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},J:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Tn:function(n,e,r){return n&&n.dispatchEvent(new t.CustomEvent(e,r))},cn:function(n,t){return(t=i.o(n))&&11===i.ln(t)?t.host:t},jn:function(n,t){return n.attachShadow(t)}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.On=!0}}))}catch(n){}return i}(l,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.S.get(t),c=n.O(f);if(c&&c.bn)if(r){var a=c.bn.find(function(n){return n.a===e});a&&n.r.G(f,e,function(n){return t[a.s](n)},a.p,void 0===u?a.v:!!u,i)}else n.r.J(f,e)}}(y,n,t,e,r,i)},t.emit=function(n,e,r){return v.Tn(n,t.eventNameFn?t.eventNameFn(e):e,r)},l.h=u,l.Context=t;var d=r["s-defined"]=r["s-defined"]||{},h=0,y={r:v,Wn:function m(n,t){var e=n.n;r.customElements.get(e)||(M(y,a[e]=n,t.prototype,f),t.observedAttributes=Object.values(n.B).map(function(n){return n.Q}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},N:t.emit,O:function(n){return a[v.fn(n)]},P:function(n){return t[n]},isClient:!0,tn:function(n){return!(!d[v.fn(n)]&&!y.O(n))},gn:function(){return n+h++},A:function(n,t,e){},W:function(n){return function t(n,e,r){return{create:j(n,e,r,"create"),componentOnReady:j(n,e,r,"componentOnReady")}}(v,s,n)},queue:t.queue=function b(n,t){function e(t){return function(e){t.push(e),p||(p=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){v++,r(a);var t=u()+7*Math.ceil(v*(1/22));i(s,t),i(l,t),s.length>0&&(l.push.apply(l,s),s.length=0),(p=a.length+s.length+l.length>0)?n.raf(o):v=0}var u=function(){return t.performance.now()},f=Promise.resolve(),c=[],a=[],s=[],l=[],v=0,p=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){c.push(n),1===c.length&&f.then(function(){return r(c)})},read:e(a),write:e(s)}}(l,r),kn:function g(n,t,e){if(n.C)c(y,t);else{var r=!v.e,i={mode:t.mode,scoped:r};n.Nn(i).then(function(e){try{n.C=e,function r(n,t,e,i,o){if(i){var u=t.n+(o||C);t[u]||(t[u]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.C=function i(){}}c(y,t)})}},H:!1,M:!1,in:!1,D:e,y:new WeakMap,u:new WeakMap,wn:new WeakMap,mn:new WeakMap,En:new WeakMap,en:new WeakMap,S:new WeakMap,L:new WeakMap,k:new WeakMap,j:new WeakMap,g:new WeakMap,An:new WeakMap,R:new WeakMap,q:new WeakMap,_:new WeakMap,d:new Set,m:[]};l.onReady=function(){return new Promise(function(n){return y.queue.write(function(){return y.d.size?y.m.push(n):n()})})},y.render=w(y,v);var $=v.i.documentElement;return $["s-ld"]=[],$["s-rn"]=!0,$["s-init"]=function(){y.en.set($,l.loaded=y.M=!0),v.Tn(r,"appload",{detail:{namespace:n}})},function k(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.O(t);if(r)if(n.en.has(t))e(t);else{var i=n.An.get(t)||[];i.push(e),n.An.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(y,l,r,r["s-apps"],r["s-cr"]),l.initialized=!0,y}function k(n,t,e){void 0===e&&(e={});var i=Array.isArray(t)?t:[t],o=n.document,u=e.hydratedCssClass||"hydrated",f=i.filter(function(n){return n[0]}).map(function(n){return n[0]});if(f.length>0){var c=o.createElement("style");c.innerHTML=f.join()+"{visibility:hidden}."+u+"{visibility:inherit}",c.setAttribute("data-styles",""),o.head.insertBefore(c,o.head.firstChild)}var a=e.namespace||"Ionic";return H||(H=!0,function s(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,a,n.HTMLElement.prototype)),new Promise(function(i){applyPolyfills(n,function(){if(!F[a]){var f={},c=e.resourcesUrl||"./";A(a,f,n,o,c,u),F[a]=$(a,f,n,o,c,u)}t.forEach(function(t){var e;!function i(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),F[a].Wn(function o(n){var t=function e(n){var t=n[0],e=n[1],i=n[3],o=n[4],u=n[5],f={color:{Q:"color"}};if(i)for(var c=0;c<i.length;c++){var a=i[c];f[a[0]]={Cn:a[1],I:!!a[2],Q:"string"==typeof a[3]?a[3]:a[3]?a[0]:0,Y:a[4]}}return{n:t,Nn:e,B:Object.assign({},f),t:o,bn:u?u.map(r):void 0}}(n),i=t.Nn,o=P(n[0]);return t.Nn=function(n){var t=n.mode,e=n.scoped;return function r(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof i?i:i[t],e,o)},t}(t),e)}),i()})})}this&&this.Rn||(Object.setPrototypeOf||Array);import A from"./ionic.global.js";function applyPolyfills(n,t){n.Ln=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.Dn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Fn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.Dn===P?s(n,t.Fn):t.Dn===T?l(n,t.Fn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Hn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.qn&&n.qn(n.Fn),p(n)}function s(n,t){n.Dn===x&&(n.Fn=t,n.Dn=P,0!==n.Un.length&&M(p,n))}function l(n,t){n.Dn===x&&(n.Dn=T,n.Fn=t,M(a,n))}function v(n,t,e,r){var i=n.Un,o=i.length;n.qn=null,i[o]=t,i[o+P]=e,i[o+T]=r,0===o&&n.Dn&&M(p,n)}function p(n){var t=n.Un,e=n.Dn;if(0!==t.length){for(var r,i,o=n.Fn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Un.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.Dn===x&&(i&&f?c(t,o):a?l(t,u):n===P?s(t,o):n===T&&l(t,o))}function h(n){n[_]=N++,n.Dn=void 0,n.Fn=void 0,n.Un=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},$=j.Bn||j.In;j="undefined"==typeof self;var k,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=$?(k=0,A=new $(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=k=++k%2}):C?function(){var n=new MessageChannel;return n.Qn.onmessage=e,function(){return n.Yn.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().Zn("vertx");return void 0!==(w=n.zn||n.Gn)?function(){w(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,P=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.Jn=n,this.Kn=new n(o),this.Kn[_]||h(this.Kn),m(t)?(this.Vn=this.length=t.length,this.Fn=Array(this.length),0===this.length?s(this.Kn,this.Fn):(this.length=this.length||0,this.Xn(t),0===this.Vn&&s(this.Kn,this.Fn))):l(this.Kn,Error("Array Methods must be provided an Array"))}return n.prototype.Xn=function(n){for(var t=0;this.Dn===x&&t<n.length;t++)this.nt(n[t],t)},n.prototype.nt=function(n,t){var e=this.Jn,c=e.resolve;c===i?(c=u(n))===r&&n.Dn!==x?this.tt(n.Dn,t,n.Fn):"function"!=typeof c?(this.Vn--,this.Fn[t]=n):e===L?(f(e=new e(o),n,c),this.et(e,t)):this.et(new e(function(t){return t(n)}),t):this.et(c(n),t)},n.prototype.tt=function(n,t,e){var r=this.Kn;r.Dn===x&&(this.Vn--,n===T?l(r,e):this.Fn[t]=e),0===this.Vn&&s(r,this.Fn)},n.prototype.et=function(n,t){var e=this;v(n,void 0,function(n){return e.tt(P,t,n)},function(n){return e.tt(T,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.Fn=this.Dn=void 0,this.Un=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).Kn},L.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.rt=function(n){g=n},L.it=function(n){M=n},L.ot=M,L.ut=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.ft)return}n.Promise=L},L.Promise=L,L.ut(),L}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),function r(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.ct}catch(n){return!1}}||e.push(import("./polyfills/url.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})}var E="ssrv",C="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},_=function(n){return null!=n},x=function(n){return n.toLowerCase()},P=function(n){return x(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},T=function(){},W=[],N={forEach:function(n,t){n.forEach(function(n,e,r){return t(f(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(f(n),e,r))})}},R="wc-",L="http://www.w3.org/1999/xlink",D=!1,F={},H=!1;export{k as defineCustomElement,u as h};