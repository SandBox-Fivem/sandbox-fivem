"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[2475,1445,4095,6848,6529,1474,4793],{24793:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(89526),o=r(92070),i=r(23121),a=r(26756),s=r(82525),c=r(81445),u=r(74484),l=r(57170),d=r(21447),f=r(24963),h=r(69139);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),s=new j(o||[]);return n(a,"_invoke",{value:L(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function h(){}function m(){}var y={};c(y,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==e&&r.call(b,i)&&(y=b);var w=m.prototype=f.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,i,a,s){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==p(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function m(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=(0,u.Z)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",height:"100%"},search:{height:"10%"},results:{height:"90%"},items:{maxHeight:"95%",height:"95%",overflowY:"auto",overflowX:"hidden"},empty:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"60%",textAlign:"center"}}}));const w=function(){var t=b(),e=((0,o.v9)((function(t){return t.data.data.onDuty})),y((0,n.useState)(""),2)),r=e[0],u=e[1],p=y((0,n.useState)(!1),2),g=p[0],w=p[1],x=y((0,n.useState)(!1),2),E=x[0],L=x[1],S=y((0,n.useState)(Array()),2),Z=S[0],P=S[1],j=y((0,n.useState)(Array()),2),N=j[0],k=j[1];(0,n.useEffect)((function(){O()}),[]);var O=function(){var t,e=(t=v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,d.Z.send("ViewVehicleFleet",{});case 4:return t.next=6,t.sent.json();case 6:(e=t.sent)?P(e):L(!0),w(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),L(!0),w(!1);case 16:case"end":return t.stop()}}),t,null,[[1,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,s,"next",t)}function s(t){m(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){k(Z.filter((function(t){return t.VIN.toLowerCase().includes(r.toLowerCase())||t.RegisteredPlate.toLowerCase().includes(r.toLowerCase())||"".concat(t.Make," ").concat(t.Model).toLowerCase().includes(r.toLowerCase())})))}),[Z,r]);return n.createElement("div",{className:t.wrapper},n.createElement("div",{className:t.search},n.createElement("form",{onSubmit:function(t){t.preventDefault()}},n.createElement(i.Z,{fullWidth:!0,variant:"outlined",name:"search",value:r,onChange:function(t){return u(t.target.value)},error:E,helperText:E?"Error Performing Search":null,label:"Search By Plate, VIN or Make/Model",InputProps:{endAdornment:n.createElement(a.Z,{position:"end"},""!=r&&n.createElement(s.Z,{type:"button",onClick:function(){u("")}},n.createElement(l.G,{icon:["fas","xmark"]})))}}))),n.createElement("div",{className:t.results},g?n.createElement(f.aN,{text:"Loading"}):n.createElement(n.Fragment,null,n.createElement(c.Z,{className:t.items},0==Z.length&&n.createElement("div",{className:t.empty},n.createElement("h2",null,"This Business Has No Fleet Vehicles")),N.sort((function(t,e){return t.RegistrationDate-e.RegistrationDate})).map((function(t){return n.createElement(h.default,{key:t.VIN,vehicle:t})}))))))}},26756:(t,e,r)=>{r.d(e,{Z:()=>E});var n=r(71972),o=r(17692),i=r(89526),a=r(23060),s=r(13957),c=r(88623),u=r(19855),l=r(88246),d=r(21704),f=r(23318),h=r(67402),p=r(59690);function v(t){return(0,p.Z)("MuiInputAdornment",t)}const m=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var y,g=r(90265),b=r(67557);const w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],x=(0,f.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,c.Z)(r.position)}`],!0===r.disablePointerEvents&&e.disablePointerEvents,e[r.variant]]}})((({theme:t,ownerState:e})=>(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===e.variant&&{[`&.${m.positionStart}&:not(.${m.hiddenLabel})`]:{marginTop:16}},"start"===e.position&&{marginRight:8},"end"===e.position&&{marginLeft:8},!0===e.disablePointerEvents&&{pointerEvents:"none"}))),E=i.forwardRef((function(t,e){const r=(0,g.Z)({props:t,name:"MuiInputAdornment"}),{children:f,className:h,component:p="div",disablePointerEvents:m=!1,disableTypography:E=!1,position:L,variant:S}=r,Z=(0,n.Z)(r,w),P=(0,d.Z)()||{};let j=S;S&&P.variant,P&&!j&&(j=P.variant);const N=(0,o.Z)({},r,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:m,position:L,variant:j}),k=(t=>{const{classes:e,disablePointerEvents:r,hiddenLabel:n,position:o,size:i,variant:a}=t,u={root:["root",r&&"disablePointerEvents",o&&`position${(0,c.Z)(o)}`,a,n&&"hiddenLabel",i&&`size${(0,c.Z)(i)}`]};return(0,s.Z)(u,v,e)})(N);return(0,b.jsx)(l.Z.Provider,{value:null,children:(0,b.jsx)(x,(0,o.Z)({as:p,ownerState:N,className:(0,a.default)(k.root,h),ref:e},Z,{children:"string"!=typeof f||E?(0,b.jsxs)(i.Fragment,{children:["start"===L?y||(y=(0,b.jsx)("span",{className:"notranslate",children:"​"})):null,f]}):(0,b.jsx)(u.Z,{color:"text.secondary",children:f})}))})}))},81445:(t,e,r)=>{r.d(e,{Z:()=>y});var n=r(71972),o=r(17692),i=r(89526),a=r(23060),s=r(13957),c=r(23318),u=r(90265),l=r(27511),d=r(67402),f=r(59690);function h(t){return(0,f.Z)("MuiList",t)}(0,d.Z)("MuiList",["root","padding","dense","subheader"]);var p=r(67557);const v=["children","className","component","dense","disablePadding","subheader"],m=(0,c.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disablePadding&&e.padding,r.dense&&e.dense,r.subheader&&e.subheader]}})((({ownerState:t})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0}))),y=i.forwardRef((function(t,e){const r=(0,u.Z)({props:t,name:"MuiList"}),{children:c,className:d,component:f="ul",dense:y=!1,disablePadding:g=!1,subheader:b}=r,w=(0,n.Z)(r,v),x=i.useMemo((()=>({dense:y})),[y]),E=(0,o.Z)({},r,{component:f,dense:y,disablePadding:g}),L=(t=>{const{classes:e,disablePadding:r,dense:n,subheader:o}=t,i={root:["root",!r&&"padding",n&&"dense",o&&"subheader"]};return(0,s.Z)(i,h,e)})(E);return(0,p.jsx)(l.Z.Provider,{value:x,children:(0,p.jsxs)(m,(0,o.Z)({as:f,className:(0,a.default)(L.root,d),ref:e,ownerState:E},w,{children:[b,c]}))})}))}}]);