"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[5606],{55606:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(67294),o=r(86706),a=r(89250),i=r(94235),c=r(96486),u=r(42440),l=r(7952),s=r(59334),f=r(15725),h=r(2658),p=r(6867),y=r(67814),v=r(69042),d=r(68174),m=r(45525);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:k(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function y(){}var v={};u(v,a,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(A([])));m&&m!==e&&r.call(m,a)&&(v=m);var w=y.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,c){var u=s(t[n],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==b(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function w(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function x(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){w(a,n,o,i,c,"next",t)}function c(t){w(a,n,o,i,c,"throw",t)}i(void 0)}))}}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var j=(0,i.Z)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},content:{height:"93.5%",padding:"0 0px 0 10px",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},summary:{}}}));const S=function(t){j();var e=(0,o.I0)(),r=(0,a.s0)(),i=(0,o.v9)((function(t){return t.call.call})),b=(0,o.v9)((function(t){return t.data.data.services})),w=E((0,n.useState)(!1),2),k=w[0],S=w[1],L=(0,d.VY)(),_=function(){var t=x(g().mark((function t(e,r){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.Z.send("Services:SetGPS",{location:e,jobName:r});case 3:return t.next=5,t.sent.json();case 5:n=t.sent,L(n?"GPS route set!":"Unable to set GPS!"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),L("Unable to set GPS!");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}(),A=function(){var t=x(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Boolean(i)||!e){t.next=14;break}return t.prev=1,t.next=4,v.Z.send("CreateCall",{number:e,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?r("/apps/phone/call/".concat(e)):L("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),L("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),O=(0,n.useMemo)((function(){return(0,c.throttle)(x(g().mark((function t(){var r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k){t.next=2;break}return t.abrupt("return");case 2:return S(!0),t.prev=3,t.next=6,v.Z.send("Services:GetServices");case 6:return t.next=8,t.sent.json();case 8:r=t.sent,e(r?{type:"SET_DATA",payload:{type:"services",data:r}}:{type:"SET_DATA",payload:{type:"services",data:Array()}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),console.error(t.t0),e({type:"SET_DATA",payload:{type:"services",data:Array()}});case 16:S(!1);case 17:case"end":return t.stop()}}),t,null,[[3,12]])}))),1e3)}),[]);return(0,n.useEffect)((function(){O()}),[]),n.createElement(m.zj,{appId:"services"},Boolean(b)&&b.length>0?n.createElement(u.Z,null,b.map((function(t,e){return n.createElement(u.Z,{component:"nav"},n.createElement(l.ZP,{divider:!0,style:{backgroundColor:t.jobColor?t.jobColor:"#f00"}},n.createElement(s.Z,null,n.createElement(f.ZP,{container:!0,justifyContent:"space-around",alignItems:"center"},n.createElement(f.ZP,{xs:6},n.createElement(h.Z,{style:{color:t.jobTextColor?t.jobTextColor:"#fff"}},t.jobIcon?n.createElement(y.G,{icon:["fas",t.jobIcon]}):n.createElement(y.G,{icon:["fas","building"]})," ",t.jobLabel)),n.createElement(f.ZP,{xs:6,style:{textAlign:"right",paddingRight:"10px"}},n.createElement("span",{style:{width:"15px",height:"15px",borderRadius:"50%",backgroundColor:t.players.length>1?"green":"orange",display:"inline-block",marginRight:"10px",verticalAlign:"middle"}}),n.createElement(p.Z,{"aria-label":"map",onClick:function(){return _(t.jobLocation,t.jobName)}},n.createElement(y.G,{icon:["fas","location-crosshairs"]})),t.phoneNumber&&n.createElement(p.Z,{"aria-label":"call",onClick:function(){return A(t.phoneNumber)}},n.createElement(y.G,{icon:["fas","phone"]})))))))}))):n.createElement(u.Z,{sx:{width:"100%"}},n.createElement(l.ZP,null,n.createElement(s.Z,null,"No services are available at this time"))))}}}]);