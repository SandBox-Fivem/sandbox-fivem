"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[8133],{78133:(t,n,r)=>{r.r(n),r.d(n,{default:()=>_});var o=r(67294),a=r(86706),i=r(89250),c=r(52141),l=r(6867),u=r(67109),s=r(94659),f=r(23709),p=r(50542),h=r(89149),m=r(94235),v=r(67814),d=r(76627),y=r.n(d),g=r(96486),b=r.n(g),E=r(68174),w=r(45525),x=r(69042);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new j(o||[]);return r(i,"_invoke",{value:w(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function m(){}var v={};l(v,a,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(k([])));y&&y!==e&&n.call(y,a)&&(v=y);var g=m.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(r,a,i,c){var l=s(t[r],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==C(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function S(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function L(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){S(a,r,o,i,c,"next",t)}function c(t){S(a,r,o,i,c,"throw",t)}i(void 0)}))}}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===C(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=(0,m.Z)((function(t){return{topContainer:{padding:"10px 25px",marginTop:50},avatarContainer:{},avatar:{height:125,width:125,margin:"auto",border:"2px solid transparent",transition:"border 0.15s ease-in","&:hover":{filter:"brightness(0.6)",transition:"filter ease-in 0.15s",cursor:"pointer"},"&.favorite":{border:"2px solid gold"}},infoContainer:{marginTop:16,textAlign:"center","& .name":{maxWidth:"85%",margin:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:22,color:function(t){var e;return Boolean(null==t||null===(e=t.contact)||void 0===e?void 0:e.color)?t.contact.color:t.color}},"& .number":{fontSize:16,color:t.palette.text.alt}},editField:{marginBottom:8},actions:{width:"fit-content",display:"flex",gap:16,position:"absolute",left:0,right:0,bottom:"15%",margin:"auto","& .button":{width:64,height:64,transition:"color ease-in 0.15s","& svg":{fontSize:28},"&:hover":{color:function(t){var e;return Boolean(null==t||null===(e=t.contact)||void 0===e?void 0:e.color)?t.contact.color:t.color}}}}}}));const _=function(t){var n=(0,E.Ov)("contacts"),r=(0,E.VY)(),m=(0,i.s0)(),d=(0,i.UO)(),g=(0,a.I0)(),C=d.id,S=(0,a.v9)((function(t){return t.call.call})),j=(0,a.v9)((function(t){return t.data.data})).contacts,P=j.filter((function(t){return t.id==C}))[0],_=A((0,o.useState)((0,a.v9)((function(t){return t.data.data.contacts})).filter((function(t){return t.id==C}))[0]),2),D=_[0],F=_[1],T=Z(k(k({},n),{},{contact:Boolean(D)?D:{}})),B=A((0,o.useState)(!1),2),G=B[0],I=B[1],U=A((0,o.useState)(!1),2),z=U[0],q=U[1],W=A((0,o.useState)(null),2),Y=W[0],M=W[1],R=A((0,o.useState)(!1),2),V=R[0],H=R[1];if(!Boolean(D))return m("/apps/contacts/caller/".concat(C));var $=function(){var t=L(O().mark((function t(){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Boolean(S)){t.next=14;break}return t.prev=1,t.next=4,x.Z.send("CreateCall",{number:D.number,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?m("/apps/phone/call/".concat(D.number)):r("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),r("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),J=function(t){M(k(k({},Y),{},N({},t.target.name,t.target.value)))},K=function(){var t=L(O().mark((function t(){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{x.Z.send("DeleteContact",D.id).then((function(t){t?(g({type:"REMOVE_DATA",payload:{type:"contacts",id:D.id}}),r("Contact Deleted"),m(-1)):r("Failed Deleting Contact")}))}catch(t){console.error(t),r("Error Deleting Contact")}H(!1);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.createElement(w.zj,{appId:"contacts",colorOverride:!!Boolean(null==D?void 0:D.color)&&D.color,actions:o.createElement(o.Fragment,null,o.createElement(c.Z,{title:"Delete Contact"},o.createElement(l.Z,{onClick:function(){H(!0)}},o.createElement(v.G,{icon:["fas","trash"]}))),o.createElement(c.Z,{title:"Edit Color"},o.createElement(l.Z,{onClick:function(){return I({color:D.color})}},o.createElement(v.G,{icon:["fas","palette"]}))),o.createElement(c.Z,{title:"Edit Details"},o.createElement(l.Z,{onClick:function(){M({name:D.name,number:D.number,favorite:D.favorite})}},o.createElement(v.G,{icon:["fas","pen-to-square"]}))),!b().isEqual(D,P)&&o.createElement(c.Z,{title:"Save Edits"},o.createElement(l.Z,{onClick:function(){j.filter((function(t){return t.number===D.number&&t.id!=D.id})).length>1&&j.filter((function(t){return t.id===D.id&&t.number!==D.number})).length>0?r("Contact Already Exists For This Number"):function(t){try{F(k({},t)),x.Z.send("UpdateContact",k(k({},t),{},{id:D.id})).then((function(e){e?(g({type:"UPDATE_DATA",payload:{type:"contacts",id:D.id,data:k({},t)}}),r("Contact Updated")):r("Failed Updating Contact")}))}catch(t){console.error(t),r("Error Updating Contact")}}(D)}},o.createElement(v.G,{icon:["fas","floppy-disk"]}))))},o.createElement("div",{className:T.topContainer},o.createElement("div",{className:T.avatarContainer},null!=D.avatar&&""!==D.avatar?o.createElement(u.Z,{className:"".concat(T.avatar).concat(D.favorite?" favorite":""),src:D.avatar,alt:D.name.charAt(0),onClick:function(){return q(k(k({},z),{},{avatar:D.avatar}))}}):o.createElement(u.Z,{className:"".concat(T.avatar).concat(D.favorite?" favorite":""),style:{background:D.color},onClick:function(){return q(k(k({},z),{},{avatar:D.avatar}))}},D.name.charAt(0))),o.createElement("div",{className:T.infoContainer},o.createElement("div",{className:"name"},D.name),o.createElement("div",{className:"number"},D.number)),o.createElement("div",{className:T.actions},o.createElement(l.Z,{className:"button",onClick:$},o.createElement(v.G,{icon:["far","phone"]})),o.createElement(l.Z,{className:"button",onClick:function(){m("/apps/messages/convo/".concat(D.number))}},o.createElement(v.G,{icon:["far","message-sms"]})))),o.createElement(w.u_,{form:!0,open:Boolean(z),title:"Avatar",onAccept:function(t){F(k(k({},D),{},{avatar:z.avatar})),q(!1)},onClose:function(){return q(!1)},onDelete:Boolean(z)?function(){F(k(k({},D),{},{avatar:null})),q(!1)}:null,deleteLang:"Remove Avatar",closeLang:"Done"},Boolean(z)&&o.createElement(s.Z,{fullWidth:!0,className:T.editField,label:"Link",name:"avatar",type:"text",onClick:function(){return q(k(k({},z),{},{avatar:e.target.value}))},value:z.avatar,InputLabelProps:{style:{fontSize:20}}})),o.createElement(w.u_,{hideClose:!0,form:!0,open:Boolean(G),title:"Contact Color",onClose:function(){return I(!1)},onAccept:function(){F(k(k({},D),{},{color:G.color})),I(!1)},acceptLang:"Save"},Boolean(G)&&o.createElement(w.zH,{color:G,onChange:function(t){return I(k(k({},G),{},{color:t.hex}))}})),o.createElement(w.u_,{form:!0,open:Boolean(Y),title:"Avatar",onAccept:function(t){t.preventDefault(),F(k(k({},D),Y)),M(null)},onClose:function(){return M(null)},deleteLang:"Edit Contact"},Boolean(Y)&&o.createElement(o.Fragment,null,o.createElement(s.Z,{fullWidth:!0,className:T.editField,label:"Name",name:"name",type:"text",required:!0,value:Y.name,onChange:J,InputLabelProps:{style:{fontSize:20}}}),o.createElement(y(),{mask:"999-999-9999",value:Y.number,onChange:J},(function(){return o.createElement(s.Z,{fullWidth:!0,className:T.editField,label:"Number",name:"number",type:"text",required:!0,InputLabelProps:{style:{fontSize:20}}})})),o.createElement(f.Z,{row:!0},o.createElement(p.Z,{style:{width:"100%"},control:o.createElement(h.Z,{checked:Y.favorite,onChange:function(t){M(k(k({},Y),{},N({},t.target.name,t.target.checked)))},value:"favorite",name:"favorite",color:"primary"}),label:"Favorite"})))),o.createElement(w.I4,{title:"Delete Contact",open:V,confirm:"Delete",decline:"Cancel",onConfirm:K,onDecline:function(){H(!1)}}))}}}]);