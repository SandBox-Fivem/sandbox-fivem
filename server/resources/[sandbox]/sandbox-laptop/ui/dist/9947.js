"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[9947,9085],{99085:(t,e,r)=>{r.r(e),r.d(e,{propertyCategories:()=>n});var n=[{value:"all",label:"All"},{value:"house",label:"House"},{value:"office",label:"Office"},{value:"warehouse",label:"Warehouse"}]},49947:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(89526),o=r(28756),i=r(50871),a=r(57931),c=r(44605),l=r(82525),u=r(74484),s=r(72619),f=r(89813),p=r(57170),h=(r(59324),r(21447)),d=r(99085);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(Z([])));w&&w!==e&&r.call(w,i)&&(m=w);var b=d.prototype=p.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))}}var w=(0,u.Z)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",borderBottom:"1px solid ".concat(t.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(t.palette.border.divider)}}}}));const b=function(t){var e,r,u,v,m=t.property,b=t.upgradeData,E=t.onClick,x=t.onSecondaryClick,L=t.onViewInfoClick,k=t.onTransfer,P=w(),_=(0,f.Gt)(),S=(0,f.VY)(),Z=null;null!=m&&null!==(e=m.upgrades)&&void 0!==e&&e.interior&&b&&null!==(r=b[m.type])&&void 0!==r&&null!==(r=r.interior)&&void 0!==r&&r.levels&&(Z=b[m.type].interior.levels.find((function(t){return t.id==m.upgrades.interior})));var O=function(){var t=g(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.Z.send("Dyn8MarkProperty",m._id);case 3:return t.next=5,t.sent.json();case 5:e=t.sent,S(e?"Marked Successfully":"Error Marking GPS"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),S("Error Marking GPS");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=g(y().mark((function t(e){var r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),t.prev=1,t.next=4,h.Z.send("Dyn8CopyID",m._id);case 4:return t.next=6,t.sent.json();case 6:r=t.sent,S(r?"Copied Successfully":"Error Copying Property"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),S("Error Copying Property");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return n.createElement(o.ZP,{className:P.wrapper,button:!0,onClick:function(){_("JOB_SELL","realestate")&&(m.sold?k():E())}},n.createElement(i.ZP,{container:!0,spacing:1},n.createElement(i.ZP,{item:!0,xs:2},n.createElement(a.Z,{primary:"Type",secondary:"".concat(null!==(u=null===(v=d.propertyCategories.find((function(t){return t.value==(null==m?void 0:m.type)})))||void 0===v?void 0:v.label)&&void 0!==u?u:"Unknown")})),n.createElement(i.ZP,{item:!0,xs:3},n.createElement(a.Z,{primary:"Property",secondary:null==m?void 0:m.label})),n.createElement(i.ZP,{item:!0,xs:2},n.createElement(a.Z,{primary:"Price",secondary:"".concat(s.A3.format(Math.ceil(null==m?void 0:m.price)))})),n.createElement(i.ZP,{item:!0,xs:2},n.createElement(a.Z,{primary:"Interior",secondary:"".concat(Z?Z.name:"Unknown")})),n.createElement(i.ZP,{item:!0,xs:3},n.createElement(a.Z,{primary:"Owner",secondary:null!=m&&m.owner?"".concat(null==m?void 0:m.owner.First," ").concat(null==m?void 0:m.owner.Last," (").concat(null==m?void 0:m.owner.SID,")"):"Not Owned"}))),n.createElement(c.Z,null,n.createElement(l.Z,{onClick:O},n.createElement(p.G,{icon:["fas","location-crosshairs"]})),n.createElement(l.Z,{onClick:function(t){t.stopPropagation(),_("JOB_SELL","realestate")?x():S("Invalid Permissions")}},n.createElement(p.G,{icon:["fas","hammer"]})),n.createElement(l.Z,{onClick:function(){L()}},n.createElement(p.G,{icon:["fas","circle-info"]})),n.createElement(l.Z,{onClick:C},n.createElement(p.G,{icon:["fas","copy"]}))))}}}]);