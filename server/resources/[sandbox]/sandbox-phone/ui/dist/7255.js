"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[7255],{97255:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(67294),o=r(96486),a=r(94235),i=r(61366),c=r(86706),u=r(94659),l=r(67109),s=r(6867),f=r(67927),p=r(5305),h=r(67814),d=r(89250),m=r(58533),v=r(45525),y=r(68174),g=r(69042),b=r(28670),w=r.n(b),x=r(80412),E=r(57333);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(){j=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f={};function p(){}function h(){}function d(){}var m={};u(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,a)&&(m=y);var g=d.prototype=p.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,a,i,c){var u=s(e[n],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==k(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return o("throw",e,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function T(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function G(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){T(a,n,o,i,c,"next",e)}function c(e){T(a,n,o,i,c,"throw",e)}i(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=(0,a.Z)((function(e){return{messages:{flexGrow:1,overflow:"auto",padding:10,display:"flex",flexDirection:"column-reverse","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:function(e){return w()(e.color).brighten(1)}},"&::-webkit-scrollbar-track":{background:"transparent"}},inputContainer:{display:"flex",padding:15,height:"12%"},input:{flexGrow:1,"& .MuiInputBase-root":{borderRadius:30}},sendBtn:{height:56,width:56,marginLeft:15,transition:"color ease-in 0.15s","&:hover":{color:function(e){return w()(e.color).brighten(1)}}},noMsgs:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},title:{display:"flex",position:"relative","& span":{marginLeft:40}},headerIcon:{width:35,height:35,position:"absolute",top:0,bottom:0,margin:"auto"},inner:{height:"100%",display:"flex",flexDirection:"column"}}})),D=(0,i.Z)((function(e){return{root:{"& label.Mui-focused":{color:function(e){var t=e.app;return w()(t.color).brighten(1)}},"& .MuiInput-underline:after":{borderBottomColor:function(e){var t=e.app;return w()(t.color).brighten(1)}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:function(e){var t=e.app;return w()(t.color).brighten(1)}}}}}}))(u.Z);const P=function(){var e,t=(0,y.Ov)("chatter"),r=_(t),a=(0,c.I0)(),i=(0,d.s0)(),u=(0,y.VY)(),b=(0,d.UO)().channel,w=(0,c.v9)((function(e){return e.data.data.player.SID})),k=(0,c.v9)((function(e){return e.chatter.groups.filter((function(e){return e.id==+b}))[0]})),C=(0,n.useRef)(null),O=N((0,n.useState)(!1),2),T=O[0],I=O[1],M=N((0,n.useState)(!1),2),P=M[0],A=M[1],Z=N((0,n.useState)(!1),2),R=Z[0],B=Z[1],F=N((0,n.useState)(!1),2),W=F[0],z=F[1],H=N((0,n.useState)(!1),2),Y=H[0],U=H[1],V=N((0,n.useState)(0),2),$=V[0],X=V[1],q=N((0,n.useState)([]),2),J=q[0],K=q[1],Q=N((0,n.useState)({left:110,top:0}),2),ee=Q[0],te=Q[1],re=(0,n.useMemo)((function(){return(0,o.throttle)(G(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=2;break}return e.abrupt("return");case 2:return I(!0),e.prev=3,e.next=6,g.Z.send("Chatter:GetMessageCount",+b);case 6:return e.next=8,e.sent.json();case 8:t=e.sent,Boolean(t)&&X(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:I(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])}))),1e3)}),[]);(0,n.useEffect)((function(){re()}),[b]);var ne=function(){var e=G(j().mark((function e(){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,g.Z.send("Chatter:LoadMessages",{channel:+b,offset:null!==(t=null==J?void 0:J.length)&&void 0!==t?t:0});case 5:return e.next=7,e.sent.json();case 7:if(!(r=e.sent)){e.next=12;break}K([].concat(L(J),L(r))),e.next=13;break;case 12:throw r;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:I(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){Boolean(b)&&$>0&&0==J.length&&ne()}),[b,$]);var oe=(0,n.useMemo)((function(){return(0,o.throttle)(function(){var e=G(j().mark((function e(t){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t){e.next=16;break}return e.prev=1,e.next=4,g.Z.send("Chatter:SendMessage",{channel:+b,message:t});case 4:return e.next=6,e.sent.json();case 6:r=e.sent,Boolean(r)&&K([].concat(L(J),[{id:r,message:t,author:w,timestamp:Date.now()/1e3}])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:C.current.reset(),e.next=17;break;case 16:u("Message Must Have Content");case 17:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),3e3)}),[J]),ae=function(){var e=G(j().mark((function e(t){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.Z.send("Chatter:Invite:Send",{channel:+b,sid:t.target.sid.value});case 4:return e.next=6,e.sent.json();case 6:r=e.sent,Boolean(r)?u("Group Invite Sent"):u("Failed Sending Group Invite"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),u("Error Sending Group Invite");case 14:A(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=G(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.send("Chatter:LeaveGroup",+b);case 3:return e.next=5,e.sent.json();case 5:t=e.sent,Boolean(t)&&(a({type:"CHATTER_REMOVE_GROUP",payload:{group:t}}),i("/apps/chatter",{replace:!0})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=G(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!1),e.prev=1,e.next=4,g.Z.send("Chatter:DeleteGroup",+b);case 4:return e.next=6,e.sent.json();case 6:t=e.sent,Boolean(t)&&(a({type:"CHATTER_REMOVE_GROUP",payload:{group:t}}),u("Group Deleted"),i("/apps/chatter",{replace:!0})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),u("Failed Deleting Group");case 14:U(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return n.createElement(v.hX,{event:"CHATTER_CHANNEL_DELETED",onEvent:function(e){a({type:"CHATTER_REMOVE_GROUP",payload:e}),u("Group Was Deleted By The Group Owner"),i("/apps/chatter",{replace:!0})},state:{messages:J,messageCount:$,channel:b}},n.createElement(v.hX,{event:"CHATTER_RECEIVED_MESSAGE",onEvent:function(e){e.group==+b&&K([].concat(L(J),[S(S({},e),{},{timestamp:e.timestamp})]))},state:{messages:J,messageCount:$,channel:b}},n.createElement(v.zj,{appId:"chatter",titleOverride:!!Boolean(k)&&n.createElement("div",{className:r.title},n.createElement(l.Z,{className:r.headerIcon,src:k.icon,alt:k.label}),n.createElement("span",null,k.label)),actions:n.createElement(n.Fragment,null,n.createElement(s.Z,{onClick:function(){return A(!0)}},n.createElement(h.G,{icon:"plus"})),w==(null==k?void 0:k.owner)?n.createElement(s.Z,{onClick:function(e){e.preventDefault(),te({left:e.clientX-2,top:e.clientY-4}),U(!0)}},n.createElement(h.G,{icon:"ellipsis-vertical"})):n.createElement(s.Z,{onClick:function(){return B(!0)}},n.createElement(h.G,{icon:"arrow-right-from-bracket"})))},n.createElement(f.Z,{anchorReference:"anchorPosition",anchorPosition:ee,keepMounted:!0,open:Y,onClose:function(){return U(!1)}},n.createElement(p.Z,{onClick:function(){try{i("/apps/chatter/config/".concat(b))}catch(e){console.error(e)}U(!1)}},"Group Settings"),n.createElement(p.Z,{onClick:function(){U(!1),z(!0)}},"Delete Group")),n.createElement("div",{className:r.inner},n.createElement("div",{className:r.messages,id:"scrollableDiv"},n.createElement(m.Z,{dataLength:J.length,next:ne,style:{display:"flex",flexDirection:"column-reverse"},inverse:!0,hasMore:(null!==(e=null==J?void 0:J.length)&&void 0!==e?e:0)<(null!=$?$:0),loader:n.createElement("h4",null,"Loading..."),scrollableTarget:"scrollableDiv"},Boolean(J)&&(null==J?void 0:J.length)>0?J.sort((function(e,t){return t.timestamp-e.timestamp})).map((function(e){return n.createElement(x.default,{key:e.id,message:e,isMe:e.author==w})})):n.createElement("div",{className:r.noMsgs},"No Message Have Been Sent"))),n.createElement("form",{className:r.inputContainer,onSubmit:function(e){e.preventDefault(),oe(e.target.text.value)},ref:C},n.createElement(D,{app:t,label:"Send Message",color:"secondary",name:"text",className:r.input}),n.createElement(s.Z,{type:"submit",className:r.sendBtn},n.createElement(h.G,{icon:"send"})))),n.createElement(v.I4,{title:"Leave Chatter Group?",open:R,confirm:"Yes",decline:"No",onConfirm:ie,onDecline:function(){return B(!1)}}),n.createElement(v.I4,{title:"Delete Chatter Group?",open:W,confirm:"Yes",decline:"No",onConfirm:ce,onDecline:function(){return z(!1)}}),n.createElement(v.u_,{form:!0,open:P,title:"Send Group Invite",submitLang:"Invite",onAccept:ae,onClose:function(){return A(!1)}},n.createElement(E.h3,{required:!0,fullWidth:!0,app:t,allowNegative:!1,className:r.editField,label:"Target State ID",name:"sid",type:"tel",customInput:D})))))}},80412:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(67294),o=r(64680),a=r(94235),i=r(74855),c=r(22004),u=r(94803),l=r.n(u),s=r(79655),f=r(28670),p=r.n(f),h=r(68174),d=r(75934),m=(0,a.Z)((function(e){return{textWrap:{width:"100%",fontSize:16,margin:"20px 0px",padding:"0 10px",color:e.palette.text.light,position:"relative","&:first-of-type":{marginTop:0}},myMsg:{marginLeft:"auto",width:"fit-content",maxWidth:"75%",padding:15,borderRadius:15,background:function(e){return p()(e.color).darken()},overflowWrap:"break-word",hyphens:"auto"},otherMsg:{marginRight:"auto",width:"fit-content",maxWidth:"75%",padding:15,borderRadius:15,background:function(e){return e.color},overflowWrap:"break-word",hyphens:"auto"},timestamp:{color:e.palette.text.main,fontSize:12,padding:"5px 5px 0px 5px"},messageImg:{display:"block",maxWidth:200},copyableText:{color:e.palette.primary.main,textDecoration:"underline","&:hover":{transition:"color ease-in 0.15s",color:e.palette.text.main,cursor:"pointer"}}}}));const v=function(e){var t=e.message,r=e.isMe,a=void 0!==r&&r,u=(0,h.Ov)("chatter"),f=m(u),p=(0,h.VY)(),v=[{regex:/^https?:\/\/(\w+\.)?imgur.com\/(\w*\d\w*)+(\.[a-zA-Z]{3})?$/gim,fn:function(e,t){return n.createElement(i.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return p("Link Copied To Clipboard")}},n.createElement("img",{key:e,className:f.messageImg,src:t[0]}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,fn:function(e,t){return n.createElement("div",null,n.createElement(c.Z,{key:e,volume:.25,width:"100%",controls:!0,url:"".concat(t[0])}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(i.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return p("Link Copied To Clipboard")}},n.createElement("a",{className:f.copyableText},t.input))}},{regex:/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(i.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return p("Link Copied To Clipboard")}},n.createElement("a",{className:f.copyableText},t.input))}},{regex:/ircinvite=(\d)+/gim,fn:function(e,t){return n.createElement(s.rU,{key:e,className:f.copyableText,to:"/apps/irc/join/".concat(t[0].split("=")[1])},"IRC Invite: ",t[0].split("=")[1])}}];return n.createElement("div",{className:f.textWrap},n.createElement(o.Z,{className:a?f.myMsg:f.otherMsg},d(v)(t.message)),n.createElement("div",{className:f.timestamp,style:{textAlign:a?"right":"left"}},n.createElement(l(),{unix:!0,date:t.timestamp,titleFormat:"L LT",withTitle:!0,fromNow:!0})))}}}]);