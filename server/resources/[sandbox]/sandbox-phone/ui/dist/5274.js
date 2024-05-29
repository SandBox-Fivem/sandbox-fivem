"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[5274,141,1435,5218,5680],{70141:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var n=r(67294),o=(r(86706),r(94235)),i=r(42440),a=r(7952),l=r(59334),c=(r(67814),r(45218)),u=r(45525);r(94803);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=(0,o.Z)((function(t){return p({wrapper:{height:"100%",background:t.palette.secondary.main,overflow:"auto"},header:{background:"#696969",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"},body:{padding:10}},"emptyMsg",{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"})}));const m=function(t){var e=t.chopList,r=d(),o=f((0,n.useState)(null),2),s=o[0],h=o[1];return n.createElement("div",{className:r.wrapper},Boolean(e)?n.createElement(i.Z,{className:r.body},Object.keys(e).map((function(t){var r;return n.createElement(a.ZP,{key:"choplist-".concat(t),button:!0,divider:!0,onClick:function(){return h(t)}},n.createElement(l.Z,{primary:Boolean(null===(r=e[t])||void 0===r?void 0:r.id)?t:"".concat(t," Chop List"),secondary:n.createElement(n.Fragment,null,Boolean(e[t].public)?n.createElement("span",null,"Shared Chop List -"," ",e[t].list.length," ","Remaining",e[t].list.length>1?" Vehicles":" Vehicle"):Boolean(e[t].id)?n.createElement("span",null,"Personal Chop List -"," ",e[t].list.length," ","Remaining",e[t].list.length>1?" Vehicles":" Vehicle"):null)}))}))):n.createElement("div",{className:r.emptyMsg},"You Have No Choplist Available"),Boolean(s)&&n.createElement(u.u_,{open:Boolean(s),title:"".concat(s," Chop List"),closeLang:"Close",maxWidth:"xs",onClose:function(){return h(null)}},e[s].list.sort((function(t,e){return e.hv-t.hv})).map((function(t,e){return n.createElement(c.default,{key:"chopitem-".concat(e),chopRequest:t})}))))}},31435:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n=r(67294),o=(r(86706),r(94235)),i=(r(67814),r(45525)),a=r(65680),l=(0,o.Z)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},header:{background:t.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:t.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const c=function(t){var e=t.myReputations,r=t.loading,o=(t.onRefresh,l());return n.createElement("div",{className:o.wrapper},n.createElement("div",{className:o.body},Boolean(e)?e.length>0?e.map((function(t){return n.createElement(a.default,{key:"lsu-".concat(t.id),rep:t,disabled:r})})):n.createElement("div",{className:o.emptyMsg},"No Reputation Built"):n.createElement(i.aN,{static:!0,text:"Loading"})))}},45218:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(67294),o=(r(86706),r(64680)),i=r(15725),a=r(94235),l=r(67814),c=(0,a.Z)((function(t){return{wrapper:{padding:10,background:t.palette.secondary.dark},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:t.palette.primary.main,fontWeight:"bold","& svg":{marginRight:6,color:"gold"}}}}));const u=function(t){var e=t.chopRequest,r=c();return n.createElement(o.Z,{className:r.wrapper},n.createElement(i.ZP,{container:!0},n.createElement(i.ZP,{item:!0,xs:12,style:{position:"relative",height:38}},n.createElement("div",{className:r.details},n.createElement("div",{className:r.title},e.hv&&n.createElement(l.G,{icon:["fas","diamond-exclamation"]}),e.name)))))}},65680:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(67294),o=r(86706),i=r(64680),a=r(15725),l=r(69041),c=r(94235),u=(r(67814),r(68174)),s=(0,c.Z)((function(t){return{wrapper:{padding:10,background:t.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"100%",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:t.palette.primary.main,fontWeight:"bold",textAlign:"center"},progressLabel:{fontSize:16,textAlign:"center"},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},progressContainer:{padding:10}}}));const f=function(t){var e,r,c,f,h=t.rep,p=(t.myGroup,t.disabled,s());(0,o.I0)(),(0,u.VY)();return n.createElement(i.Z,{className:p.wrapper},n.createElement(a.ZP,{container:!0},n.createElement(a.ZP,{item:!0,xs:12,style:{position:"relative",height:38}},n.createElement("div",{className:p.details},n.createElement("div",{className:p.title},h.label)))),n.createElement(a.ZP,{container:!0},n.createElement(a.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement("div",{className:p.progressLabel},null!==(e=null===(r=h.current)||void 0===r?void 0:r.label)&&void 0!==e?e:"No Rank")),n.createElement(a.ZP,{item:!0,xs:8,style:{position:"relative"}},n.createElement("div",{className:p.progressContainer},n.createElement(l.Z,{variant:"determinate",value:function(){var t,e,r,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,i=null!==(t=null==h||null===(e=h.current)||void 0===e?void 0:e.value)&&void 0!==t?t:0;return 100*(o-i)/((null!==(r=null==h||null===(n=h.next)||void 0===n?void 0:n.value)&&void 0!==r?r:1e3)-i)}(h.value)}))),n.createElement(a.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement("div",{className:p.progressLabel},null!==(c=null===(f=h.next)||void 0===f?void 0:f.label)&&void 0!==c?c:"Unknown"))))}},55274:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(67294),o=r(94235),i=r(67814),a=r(96486),l=r(70141),c=r(31435),u=r(45525),s=r(68174),f=r(69042);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),l=new A(o||[]);return n(a,"_invoke",{value:S(t,r,l)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function d(){}function m(){}function v(){}var y={};c(y,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,i)&&(y=b);var w=v.prototype=d.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,l){var c=s(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,l)}))}l(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=L(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,l,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function d(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,l,"next",t)}function l(t){d(i,n,o,a,l,"throw",t)}a(void 0)}))}}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=(0,o.Z)((function(t){return{inner:{height:"99%",display:"flex",flexDirection:"column"},content:{flexGrow:1,overflow:"hidden"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"},phoneTab:{minWidth:"50%"}}}));const b=function(t){var e=(0,s.Ov)("chopper"),r=g(e),o=v((0,n.useState)(!1),2),h=o[0],d=o[1],y=v((0,n.useState)(0),2),b=y[0],w=y[1],E=v((0,n.useState)(!1),2),x=E[0],S=E[1],L=v((0,n.useState)(Array()),2),k=L[0],N=L[1],A=v((0,n.useState)(Array()),2),j=A[0],O=A[1],P=(0,n.useMemo)((function(){return(0,a.throttle)(m(p().mark((function t(){var e,r,n,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=2;break}return t.abrupt("return");case 2:return d(!0),t.prev=3,t.next=6,f.Z.send("GetChopperDetails");case 6:return t.next=8,t.sent.json();case 8:(e=t.sent)?(S(null!==(r=e.banned)&&void 0!==r&&r),N(null!==(n=e.chopList)&&void 0!==n?n:Array()),O(null!==(o=e.reputations)&&void 0!==o?o:Array())):(N(Array()),O(Array())),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0),N(Array()),O(Array());case 17:d(!1);case 18:case"end":return t.stop()}}),t,null,[[3,12]])}))),1e3)}),[]);(0,n.useEffect)((function(){P()}),[]);return n.createElement(u.zj,{appId:"chopper"},x?n.createElement("div",{className:r.emptyMsg},"Banned"):n.createElement("div",{className:r.inner},n.createElement("div",{className:r.content},n.createElement("div",{className:r.tabPanel,role:"tabpanel",hidden:0!==b,id:"latest"},0===b&&n.createElement(l.default,{chopList:k})),n.createElement("div",{className:r.tabPanel,role:"tabpanel",hidden:1!==b,id:"categories"},1===b&&n.createElement(c.default,{myReputations:j}))),n.createElement("div",{className:r.tabs},n.createElement(u.mQ,{app:e,value:b,onChange:function(t,e){w(e)},scrollButtons:!1,textColor:"inherit",variant:"fullWidth"},n.createElement(u.OK,{app:e,className:r.phoneTab,icon:n.createElement(i.G,{icon:["fas","screwdriver-wrench"]})}),n.createElement(u.OK,{app:e,className:r.phoneTab,icon:n.createElement(i.G,{icon:["fas","list-timeline"]})})))))}}}]);