"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[8106],{34119:(e,t,r)=>{r.d(t,{A3:()=>c,No:()=>l,ok:()=>i});r(97762);var n=r(27856),o=r.n(n),a=r(25935),i=function(e){return(0,a.ZP)(o().sanitize(e))},c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),l=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"".concat(t[1],"-").concat(t[2],"-").concat(t[3]):null}},10761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(67294),o=r(86706),a=r(67109),i=r(52141),c=r(15725),l=r(6867),u=r(94235),s=r(67814),f=r(75934),p=r.n(f),m=r(74855),d=r(22004),h=r(94803),g=r.n(h),v=(r(69042),r(34119),r(45525)),y=r(68174),b=(0,u.Z)((function(e){return{tweet:{borderRadius:8,background:"".concat(e.palette.secondary.dark,"d1"),backdropFilter:"blur(10px)",marginBottom:8,border:"1px solid ".concat(e.palette.border.divider)},header:{display:"flex",padding:10,borderBottom:"1px solid ".concat(e.palette.border.divider)},username:{flexGrow:1,lineHeight:"35px"},verification:{marginLeft:5,color:"#00aced","&.business":{color:"#eac93e"},"&.government":{color:"#829aab"}},avatar:{width:35,height:35,margin:"auto",marginRight:8},timestamp:{fontSize:10,lineHeight:"35px"},content:{marginTop:10,fontSize:14,color:e.palette.text.alt,padding:10},messageImg:{display:"block",maxWidth:200},copyableText:{color:"#1de9b6",textDecoration:"underline",transition:"filter ease-in 0.15s","&:hover":{filter:"brightness(0.7)",cursor:"pointer"}},hashtag:{color:e.palette.primary.light},image:{maxWidth:400,maxHeight:400,height:"100%",width:"100%",border:"1px solid ".concat(e.palette.border.divider),borderRadius:4},rtLink:{color:e.palette.primary.light},btnCount:{marginRight:5,color:e.palette.text.alt},actionBtn:{fontSize:13},actions:{marginTop:10,padding:"3px 0",borderTop:"1px solid ".concat(e.palette.border.divider)}}}));const w=function(e){var t,r,u,f=e.tweet,h=e.rtcount,w=e.onReply,E=e.onRetweet,x=(0,y.Ov)("twitter"),k=b(x),S=((0,o.I0)(),(0,o.v9)((function(e){return e.data.data.player}))),L=[{regex:/((https?:\/\/(www\.)?(i\.)?imgur\.com\/[a-zA-Z\d]+)(\.png|\.jpg|\.jpeg|\.gif)?)/gim,fn:function(e,t){return n.createElement(v.NX,{key:e,className:k.messageImg,src:t[0]})}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,fn:function(e,t){return n.createElement("div",null,n.createElement(d.Z,{key:e,volume:.25,width:"100%",controls:!0,url:"".concat(t[0])}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(m.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return showAlert("Link Copied To Clipboard")}},n.createElement("a",{className:k.copyableText},t.input))}},{regex:/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(m.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return showAlert("Link Copied To Clipboard")}},n.createElement("a",{className:k.copyableText},t.input))}},{regex:/#(\w)+/g,fn:function(e,t){return n.createElement("span",{key:e,className:k.hashtag},t[0])}},{regex:/@(\w)+/g,fn:function(e,t){return n.createElement("span",{key:e,className:k.hashtag},t[0])}}];return n.createElement("div",{className:k.tweet},n.createElement("div",{className:k.header},n.createElement(a.Z,{className:k.avatar,src:f.author.picture}),n.createElement("div",{className:k.username},n.createElement("span",{className:k.author},f.author.name),f.verified&&n.createElement(i.Z,{title:"business"==f.verified?"Verified Business Account":"Verified Government Account"},n.createElement("span",{className:"".concat(k.verification," ").concat(f.verified)},n.createElement(s.G,{icon:["fas","badge-check"]})))),n.createElement("div",{className:k.timestamp},n.createElement(g(),{unix:!0,date:f.time,interval:6e4,fromNow:!0}))),n.createElement("div",{className:k.content},p()(L)(f.content)),Boolean(f.image.using)&&n.createElement(v.NX,{src:f.image.link,className:k.image}),n.createElement("div",{className:k.actions},n.createElement(c.ZP,{container:!0,style:{textAlign:"center"}},n.createElement(c.ZP,{item:!0,xs:6},n.createElement(l.Z,{className:k.actionBtn,onClick:function(){return w(f.author.name)},disabled:!Boolean(null===(t=S.Profiles)||void 0===t||null===(r=t.twitter)||void 0===r?void 0:r.name)},n.createElement(s.G,{icon:["fas","reply"]}))),n.createElement(c.ZP,{item:!0,xs:6},n.createElement(l.Z,{className:k.actionBtn,onClick:function(){return E(f)},disabled:!Boolean(null==S||null===(u=S.Profiles)||void 0===u?void 0:u.twitter)||f.retweet||f.cid==S.ID},n.createElement("span",{className:k.btnCount},h),n.createElement(s.G,{icon:"arrows-rotate"}))))))}},48106:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(67294),o=r(86706),a=r(6867),i=r(94235),c=r(67814),l=r(96486),u=r(58533),s=r(89250),f=r(69042),p=r(45525),m=r(68174),d=r(10761);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===h(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){w=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:k(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function m(){}function d(){}var g={};l(g,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,a)&&(g=y);var b=d.prototype=p.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==h(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function k(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function E(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,c,"next",e)}function c(e){E(a,n,o,i,c,"throw",e)}i(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=(0,i.Z)((function(e){return{editField:{marginBottom:15,"&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:"#1de9b6"},"&::-webkit-scrollbar-track":{background:"transparent"}},inner:{position:"relative",height:"100%"},preview:{maxWidth:250,maxHeight:250,width:"100%",height:"100%",margin:"auto",display:"block",padding:16},header:{background:"#00aced",fontSize:20,padding:15,lineHeight:"45px",height:78},tweetList:{padding:"8px 4px",height:"100%",width:"100%",display:"flex",flexDirection:"column",overflowX:"hidden",overflowY:"auto"}}}));Array(),Array(),Array(),Array(),Array(),Array(),Array();const N=function(e){var t,r,i=(0,m.Ov)("twitter"),h=O(i),v=(0,s.s0)(),E=(0,m.VY)(),S=(0,o.v9)((function(e){return e.data.data.player})),L=k((0,n.useState)(!1),2),N=L[0],j=L[1],C=k((0,n.useState)(Array()),2),A=C[0],P=C[1],T=k((0,n.useState)([]),2),I=T[0],_=T[1],Z=k((0,n.useState)(!1),2),D=Z[0],G=Z[1],R=k((0,n.useState)({tweet:"",usingImg:!1,imgLink:""}),2),B=R[0],F=R[1],z=k((0,n.useState)(null),2),W=z[0],M=z[1],U=(0,n.useMemo)((function(){return(0,l.throttle)(x(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.send("Twitter:GetCount");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,Boolean(t)?P(t):P(0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),1e3)}),[]);(0,n.useEffect)((function(){U(),J()}),[]);var X=function(e){F(y(y({},B),{},b({},e.target.name,e.target.value)))},H=function(e){F(y(y({},B),{},{tweet:"@".concat(e," ")})),G(!0)},V=function(e){M(e)},Y=function(){var e=x(w().mark((function e(){var t,r,n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(y(y({},W),{},{author:null===(t=S.Profiles)||void 0===t||null===(r=t.twitter)||void 0===r?void 0:r.name,content:"RESPAM: @".concat(W.author.name,' "').concat(W.content,'"'),time:Date.now()/1e3,retweet:W.id,likes:Array()}));case 2:n=e.sent,M(null),E(n?"Respammed":"Unable to Respam");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=x(w().mark((function e(t){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.send("SendTweet",t);case 3:return e.next=5,e.sent.json();case 5:if(!e.sent){e.next=12;break}return G(!1),F({tweet:"",usingImg:!1,imgLink:""}),e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=x(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$({time:Date.now()/1e3,content:B.tweet,image:{using:B.usingImg,link:B.imgLink},likes:Array()});case 2:r=e.sent,F({tweet:"",usingImg:!1,imgLink:""}),G(!1),E(r?"Spam Created":"Unable to Create Spam");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=x(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,f.Z.send("Twitter:GetTweets",I.length);case 4:return e.next=6,e.sent.json();case 6:t=e.sent,Boolean(t)&&_([].concat(g(I),g(t))),j(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return n.createElement(p.hX,{event:"REMOVE_ACCOUNT_TWEETS",onEvent:function(e){var t=e.account,r=e.count;_(g(I.filter((function(e){return e.SID!=t&&e.author!=t})))),P(r)},state:{tweets:I,tweetCount:A}},n.createElement(p.hX,{event:"RECEIVED_NEW_TWEET",onEvent:function(e){_([].concat(g(I),[e])),P(A+1)},state:{tweets:I,tweetCount:A}},n.createElement(p.hX,{event:"CLEAR_TWEETS",onEvent:function(){_([])},state:{tweets:I,tweetCount:A}},n.createElement(p.zj,{appId:"twitter",actions:n.createElement(n.Fragment,null,n.createElement(a.Z,{onClick:function(){return v("/apps/twitter/profile")}},n.createElement(c.G,{icon:["far","circle-user"]})),n.createElement(a.Z,{onClick:function(){return G(!0)},disabled:!Boolean(null===(t=S.Profiles)||void 0===t?void 0:t.twitter)},n.createElement(c.G,{icon:["fas","plus"]})))},N&&n.createElement(p.aN,{static:!0,text:"Loading Spam"}),n.createElement("div",{className:h.tweetList,id:"scrollableDiv"},n.createElement(u.Z,{dataLength:I.length,next:J,hasMore:(null!==(r=null==I?void 0:I.length)&&void 0!==r?r:0)<(null!=A?A:0),scrollableTarget:"scrollableDiv",loader:n.createElement("h4",null,"Loading..."),endMessage:n.createElement("p",{style:{textAlign:"center"}},n.createElement("b",null,"You've read all the spam, nice"))},I.sort((function(e,t){return t.time-e.time})).map((function(e){return n.createElement(d.default,{key:e.id,tweet:e,rtcount:I.filter((function(t){return t.retweet==e.id})).length,onReply:H,onRetweet:V})})))),n.createElement(p.u_,{form:!0,open:D,title:"Send New Spam",onClose:function(){return G(!1)},onAccept:q,onDelete:function(){F(y(y({},B),{},{imgLink:"",usingImg:!B.usingImg}))},submitLang:"Send Spam",deleteLang:B.usingImg?"Remove Image":"Attach Image",closeLang:"Cancel"},n.createElement(n.Fragment,null,n.createElement(p.pu,{app:i,className:h.editField,label:"Spam",name:"tweet",type:"text",fullWidth:!0,multiline:!0,required:!0,helperText:"".concat(B.tweet.length," / 180 Characters"),value:B.tweet,onChange:X,inputProps:{maxLength:180},InputLabelProps:{style:{fontSize:20}}}),B.usingImg&&n.createElement(n.Fragment,null,""!=B.imgLink&&n.createElement("img",{src:B.imgLink,className:h.preview}),n.createElement(p.pu,{app:i,className:h.editField,label:"Image",name:"imgLink",helperText:"Imgur Links Only!",type:"text",fullWidth:!0,required:!0,value:B.imgLink,onChange:X,InputLabelProps:{style:{fontSize:20}}})))),n.createElement(p.I4,{title:"Respam?",open:null!=W,confirm:"Respam",decline:"Cancel",onConfirm:Y,onDecline:function(){return M(null)}})))))}}}]);