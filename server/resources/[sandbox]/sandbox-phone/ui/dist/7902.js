"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[7902],{57902:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(67294),o=r(86706),a=r(89250),i=r(52141),c=r(6867),u=r(94235),l=r(67814),s=r(96486),f=(r(50500),r(45525)),h=r(30381),p=r.n(h),d=r(69042),m=r(68174),y=r(7687);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:k(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(I([])));b&&b!==e&&r.call(b,a)&&(m=b);var w=d.prototype=h.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,c){var u=s(t[n],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function b(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,c,"next",t)}function c(t){b(a,n,o,i,c,"throw",t)}i(void 0)}))}}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k=(0,u.Z)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main,overflow:"hidden"},header:{background:t.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:t.palette.text.main,transition:"color ease-in 0.15s"}},item:{borderBottom:"1px solid ".concat(t.palette.border.divider)}}}));const L=function(t){var e,r=t.jobData,u=(t.playerJob,k(),(0,a.s0)()),h=(0,o.I0)(),v=(0,m.VY)(),b=(0,o.v9)((function(t){return t.com.timeWorked})),x=(0,o.v9)((function(t){return t.com.timeWorkedUpdated})),L=(0,o.v9)((function(t){return t.com.timeWorkedJob})),S=E((0,n.useState)(!1),2),O=(S[0],S[1]),j=(0,n.useMemo)((function(){return(0,s.throttle)(w(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.prev=1,t.next=4,d.Z.send("FetchTimeWorked",r.Id);case 4:return t.next=6,t.sent.json();case 6:if(!(e=t.sent)){t.next=11;break}h({type:"UPDATE_TIMEWORKED",payload:{timeWorked:e,timeWorkedJob:r.Id}}),t.next=12;break;case 11:throw e;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.error(t.t0),v("Unable to Load Time Worked");case 18:O(!1);case 19:case"end":return t.stop()}}),t,null,[[1,14]])}))),5e3)}),[]);(0,n.useEffect)((function(){(!b||Date.now()-x>=12e4||L!=r.Id)&&j()}),[]);var I,_,N=E((0,n.useState)(null),2),D=N[0],T=N[1];return n.createElement(f.zj,{appId:"comanager",titleOverride:r.Workplace?null===(e=r.Workplace)||void 0===e?void 0:e.Name:r.Name,actions:n.createElement(n.Fragment,null,n.createElement(i.Z,{title:"Home"},n.createElement(c.Z,{onClick:function(){u(-1)}},n.createElement(l.G,{icon:["fas","house"]}))))},b&&b.length>0?b.map((function(t){return n.createElement(y.default,{key:t.SID,employee:t,jobData:r,onClick:function(e){return T(t)}})})):n.createElement(f.aN,{static:!0,text:"Loading"}),n.createElement(f.u_,{open:null!=D,title:"View Time Worked",onClose:function(){return T(null)},onAccept:null,onDelete:null},null!=D&&n.createElement(n.Fragment,null,n.createElement("p",null,D.First," ",D.Last," (",D.SID,")"),n.createElement("p",null,"Last Went on Duty:"," ",(I=D.LastClockOn,_=r.Id,I&&I[_]?"".concat(p()(1e3*I[_]).format("LLL")," (").concat(p()(1e3*I[_]).fromNow(),")"):"Never")),n.createElement("p",null,"Has worked"," ",function(t,e){if(t&&t[e]){var r=p()().subtract(7,"days").unix(),n=0;return t[e].forEach((function(t){t.time>=r&&(n+=t.minutes)})),n>0?p().duration(n,"minutes").humanize():"0 minutes"}return"0 minutes"}(D.TimeClockedOn,r.Id)," ","in the last week."))))}},7687:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(67294),o=r(86706),a=r(7952),i=r(70417),c=r(67109),u=r(59334),l=r(52141),s=r(94235),f=r(67814),h=(r(68174),(0,s.Z)((function(t){return{item:{borderBottom:"1px solid ".concat(t.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(t.palette.border.divider)}},avatar:{backgroundColor:t.palette.primary.main},myself:{fontSize:14,color:t.palette.info.main,marginRight:5},owner:{fontSize:14,color:"gold",marginRight:5}}})));const p=function(t){var e=t.jobData,r=(t.playerJob,t.employee),s=t.onClick,p=h(),d=(0,o.v9)((function(t){return t.data.data.player}));return n.createElement(a.ZP,{className:p.item,button:!0,onClick:function(){return s(r)}},n.createElement(i.Z,null,n.createElement(c.Z,{className:p.avatar},n.createElement(f.G,{icon:["fas","user"]}))),n.createElement(u.Z,{primary:n.createElement("span",null,d.SID==r.SID?n.createElement(l.Z,{title:"You"},n.createElement("span",null,n.createElement(f.G,{className:p.myself,icon:["fas","user"]}))):(null==e?void 0:e.Owner)==r.SID?n.createElement(l.Z,{title:"Business Owner"},n.createElement("span",null,n.createElement(f.G,{className:p.owner,icon:["fas","crown"]}))):null,"".concat(r.First," ").concat(r.Last)),secondary:"State ID: ".concat(r.SID)}))}}}]);