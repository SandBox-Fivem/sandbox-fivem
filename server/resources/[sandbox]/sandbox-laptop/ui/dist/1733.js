"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[1733],{51733:(t,e,r)=>{r.r(e),r.d(e,{default:()=>P});var n=r(89526),o=r(92070),a=r(74484),i=r(50871),c=r(57479),l=r(60514),u=r(23121),s=(r(57170),r(59324)),f=r.n(s),h=r(21447),p=r(89813),d=r(24963);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==e&&r.call(b,a)&&(y=b);var w=d.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,c){var l=s(t[n],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==m(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===m(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function x(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){w(a,n,o,i,c,"next",t)}function c(t){w(a,n,o,i,c,"throw",t)}i(void 0)}))}}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var L=(0,a.Z)((function(t){return{contract:{padding:10,background:t.palette.secondary.dark,border:"1px solid ".concat(t.palette.border.divider),textAlign:"center","&:not(:last-of-type)":{marginBottom:10}},contractClass:{width:80,height:80,margin:"auto",marginBottom:15},vehicleLabel:{fontSize:18,color:t.palette.text.main},contractOwner:{fontSize:14,color:t.palette.text.alt},contractPrice:{fontSize:14,color:t.palette.success.main,"& small":{marginLeft:4,"&::before":{content:'"("',marginRight:2},"&::after":{content:'")"',marginLeft:2}}},contractExpiration:{fontSize:12}}}));const P=function(t){var e=t.contract,r=t.repLevel,a=L(),s=((0,o.I0)(),(0,p.VY)()),m=(0,o.v9)((function(t){return t.data.data.disabledBoostingContracts})),y=E((0,n.useState)(!1),2),b=y[0],w=y[1],O=E((0,n.useState)(!1),2),P=O[0],j=O[1],S=function(){var t=x(v().mark((function t(e,r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),w(!1),t.prev=2,t.next=5,h.Z.send("Boosting:AcceptContract",g(g({},e),{},{scratch:r}));case 5:return t.next=7,t.sent.json();case 7:null!=(n=t.sent)&&n.success?s("Request Sent to Team Leader"):null!=n&&n.message?s(n.message):s("Failed to Accept Contract"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:j(!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,r){return t.apply(this,arguments)}}(),C=E((0,n.useState)(null),2),k=C[0],Z=C[1],T=function(){var t=x(v().mark((function t(r){var n,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),j(!0),t.prev=2,n=g(g({},k),{},{id:e.id}),Z(null),t.next=7,h.Z.send("Boosting:TransferContract",n);case 7:return t.next=9,t.sent.json();case 9:o=t.sent,s(o?"Contract Transferred Successfully":"Failed to Transfer Contract"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0),s("Failed to Transfer Contract");case 17:j(!1);case 18:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=x(v().mark((function t(e){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,h.Z.send("Boosting:DeclineContract",g({},e));case 4:return t.next=6,t.sent.json();case 6:r=t.sent,s(r?"Contract Declined Successfully":"Failed to Decline Contract"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),s("Failed to Decline Contract");case 14:j(!1);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),_=null==m?void 0:m.includes(e.id),A=r<e.vehicle.classLevel&&!e.vehicle.rewarded;return console.log("BC Disabled",e.vehicle.label,_,A),n.createElement(i.ZP,{item:!0,xs:2},n.createElement(i.ZP,{container:!0,className:a.contract},n.createElement(i.ZP,{item:!0,xs:12},n.createElement(c.Z,{className:"".concat(a.contractClass," ").concat(e.vehicle.class)},e.vehicle.class)),n.createElement(i.ZP,{item:!0,xs:12,className:a.vehicleLabel},e.vehicle.label),n.createElement(i.ZP,{item:!0,xs:12,className:a.contractOwner},e.owner.Alias),n.createElement(i.ZP,{item:!0,xs:12,className:a.contractPrice},n.createElement("span",null,e.prices.standard.price," $",e.prices.standard.coin),Boolean(e.prices.scratch)&&n.createElement("small",null,e.prices.scratch.price," $",e.prices.scratch.coin)),n.createElement(i.ZP,{item:!0,xs:12,className:a.contractExpiration},"Expires: ",n.createElement(f(),{fromNow:!0,unix:!0,date:e.expires})),b?n.createElement(n.Fragment,null,n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"info",onClick:function(){return S(e,!1)}},"Standard (",e.prices.standard.price," $",e.prices.standard.coin,")")),Boolean(e.prices.scratch)&&n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"warning",onClick:function(){return S(e,!1)}},"VIN Scratch (",e.prices.scratch.price," ","$",e.prices.scratch.coin,")")),n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"error",onClick:function(){return w(!1)}},"Cancel"))):n.createElement(n.Fragment,null,n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"success",onClick:function(){return w(!0)},disabled:_||P||A},"Accept Contract")),n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"warning",disabled:_||P||Boolean(k),onClick:function(){Z({alias:""})}},"Transfer Contract")),n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"info",disabled:!0},"List On Market")),n.createElement(i.ZP,{item:!0,xs:12,style:{marginTop:15}},n.createElement(l.Z,{fullWidth:!0,variant:"contained",color:"error",disabled:_||P,onClick:function(){return N(e)}},"Decline Contract")))),n.createElement(d.u_,{open:Boolean(k),title:"Transferring Contract",closeLang:"Cancel",closeColor:"error",maxWidth:"md",submitLang:"Transfer",onSubmit:T,onClose:function(){return Z(null)}},k&&n.createElement(u.Z,{fullWidth:!0,required:!0,label:"Target",name:"alias",className:a.editorField,value:k.alias,onChange:function(t){return Z(g(g({},k),{},{alias:t.target.value}))},helperText:"The alias of who you want to transfer the contract to."})))}}}]);