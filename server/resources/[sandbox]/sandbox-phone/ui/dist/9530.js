"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[9530],{79530:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var n=r(67294),a=r(86706),o=r(89250),i=r(29602),c=r(1820),l=r(47425),u=r(85092),s=r(52141),d=r(6867),f=r(76637),m=r(42440),p=r(7952),h=r(59334),b=r(15725),v=r(94659),y=r(76446),g=r(27666),E=r(56036),w=r(32580),k=r(5305),x=r(14212),N=r(72642),I=r(94235),O=r(67814),S=r(57333),Z=r(69042),P=r(68174),C=r(45525);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===L(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(){A=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new I(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d={};function f(){}function m(){}function p(){}var h={};l(h,o,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(O([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=p.prototype=f.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function a(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==L(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function W(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){W(o,n,a,i,c,"next",e)}function c(e){W(o,n,a,i,c,"throw",e)}i(void 0)}))}}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}var M=(0,I.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},content:{height:"83.6%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},workplaceAction:{fontSize:14},management:{fontSize:14,color:"gold",marginRight:5},item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(e.palette.border.divider)}},editorField:{marginBottom:15},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},ownerBtn:{display:"block","&:not(:last-of-type)":{marginBottom:15}}}})),B=(0,i.ZP)((function(e){return n.createElement(c.Z,U({TransitionProps:{unmountOnExit:!0},disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var t=e.theme;return{background:"transparent",borderBottom:"1px solid ".concat(t.palette.border.divider),"&:before":{display:"none"}}})),J=(0,i.ZP)((function(e){return n.createElement(l.Z,U({expandIcon:n.createElement(O.G,{icon:["fas","caret-down"]})},e))}))((function(e){var t=e.theme;return{width:"100%",background:"transparent",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper":{fontSize:20,color:t.palette.primary.main,transform:"rotate(-90deg)",transition:"0.25s","&.Mui-expanded":{transform:"rotate(0deg)"}},"& .MuiAccordionSummary-content":{margin:0,marginLeft:t.spacing(1)}}})),R=(0,i.ZP)(u.Z)((function(e){return{padding:e.theme.spacing(0),borderTop:"1px solid rgba(0, 0, 0, .125)"}}));const z=function(e){var t,r=e.refreshRoster,i=e.jobData,c=e.playerJob,l=M(),u=(0,P.VY)(),I=(0,o.s0)(),L=(0,P.Gt)(),j=(0,a.v9)((function(e){return e.data.data.player})),D=(0,a.v9)((function(e){return e.data.data.NamedJobPermissions})),W=j.SID==(null==i?void 0:i.Owner),F={Id:"",Name:"",Level:1,Permissions:Object()},U=T((0,n.useState)(!1),2),z=U[0],V=U[1],q=T((0,n.useState)(!1),2),Y=q[0],H=q[1],X=T((0,n.useState)(!1),2),$=X[0],K=X[1],Q=T((0,n.useState)(null),2),ee=Q[0],te=Q[1],re=T((0,n.useState)(!1),2),ne=re[0],ae=re[1],oe=T((0,n.useState)(!1),2),ie=oe[0],ce=oe[1],le=T((0,n.useState)(null),2),ue=le[0],se=le[1],de=T((0,n.useState)(null),2),fe=de[0],me=de[1],pe=T((0,n.useState)(!1),2),he=(pe[0],pe[1],T((0,n.useState)(!1),2)),be=he[0],ve=he[1],ye=T((0,n.useState)(!1),2),ge=ye[0],Ee=ye[1],we=function(){var e=_(A().mark((function e(t){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ce(!0),e.prev=2,e.next=5,Z.Z.send("EditWorkplace",{JobId:ue.JobId,WorkplaceId:ue.Id,NewName:ue.Name});case 5:return e.next=7,e.sent.json();case 7:if(!(n=e.sent).success){e.next=13;break}u("Workplace Updated"),r(),e.next=22;break;case 13:e.t0=n.code,e.next="INVALID_PERMISSIONS"===e.t0?16:"MISSING_JOB"===e.t0?18:(e.t0,20);break;case 16:return u("Not Authorized"),e.abrupt("break",22);case 18:return u("Workplace Doesn't Exist"),e.abrupt("break",22);case 20:return u("Unable to Update Workplace"),e.abrupt("break",22);case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(2),console.error(e.t1),u("Unable to Update Workplace");case 28:ce(!1);case 29:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=_(A().mark((function e(t){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ce(!0),e.prev=2,e.next=5,Z.Z.send(fe.edit?"EditGrade":"CreateGrade",fe);case 5:return e.next=7,e.sent.json();case 7:if(!(n=e.sent).success){e.next=13;break}u("Grade ".concat(fe.edit?"Updated":"Created")),r(),e.next=20;break;case 13:e.t0=n.code,e.next="ERROR"===e.t0?16:"INVALID_PERMISSIONS"===e.t0?18:16;break;case 16:return u("Unable To ".concat(fe.edit?"Update":"Create"," Grade")),e.abrupt("break",20);case 18:return u("Not Authorized"),e.abrupt("break",20);case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(2),console.error(e.t1),u("Unable to ".concat(fe.edit?"Update":"Create"," Grade"));case 26:ce(!1);case 27:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=_(A().mark((function e(){var t;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ve(!1),ce(!0),e.prev=2,e.next=5,Z.Z.send("DeleteGrade",fe);case 5:return e.next=7,e.sent.json();case 7:if(!(t=e.sent).success){e.next=13;break}u("Grade Deleted"),r(),e.next=24;break;case 13:e.t0=t.code,e.next="INVALID_PERMISSIONS"===e.t0?16:"JOB_OCCUPIED"===e.t0?18:"MISSING_JOB"===e.t0?20:(e.t0,22);break;case 16:return u("Not Authorized"),e.abrupt("break",24);case 18:return u("Cannot Delete a Grade With Employees In"),e.abrupt("break",24);case 20:return u("Grade Doesn't Exist"),e.abrupt("break",24);case 22:return u("Unable to Delete Grade"),e.abrupt("break",24);case 24:e.next=30;break;case 26:e.prev=26,e.t1=e.catch(2),console.error(e.t1),u("Unable to Delete Grade");case 30:ce(!1);case 31:case"end":return e.stop()}}),e,null,[[2,26]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=_(A().mark((function e(t){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),W){e.next=3;break}return e.abrupt("return");case 3:return ce(!0),e.prev=4,e.next=7,Z.Z.send("RenameCompany",t.target.name.value);case 7:return e.next=9,e.sent.json();case 9:if(!(n=e.sent).success){e.next=15;break}u("Company Name Updated"),r(),e.next=22;break;case 15:e.t0=n.code,e.next="INVALID_PERMISSIONS"===e.t0?18:(e.t0,20);break;case 18:return u("Not Authorized"),e.abrupt("break",22);case 20:return u("Unable To Edit Company"),e.abrupt("break",22);case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(4),console.error(e.t1),u("Unable to Edit Company");case 28:ce(!1);case 29:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=_(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),W){e.next=3;break}return e.abrupt("return");case 3:return ce(!0),e.prev=4,e.next=7,Z.Z.send("DisbandCompany");case 7:return e.next=9,e.sent.json();case 9:if(!(r=e.sent).success){e.next=15;break}u("Company Has Been Deleted"),I(-1),e.next=22;break;case 15:e.t0=r.code,e.next="INVALID_PERMISSIONS"===e.t0?18:(e.t0,20);break;case 18:return u("Not Authorized"),e.abrupt("break",22);case 20:return u("Unable to Disband Company"),e.abrupt("break",22);case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(4),console.error(e.t1),u("Unable to Disband Company");case 28:K(!1),ce(!1);case 30:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=_(A().mark((function e(t){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),W){e.next=3;break}return e.abrupt("return");case 3:return ce(!0),e.prev=4,e.next=7,Z.Z.send("TransferCompany",{target:ee.target});case 7:return e.next=9,e.sent.json();case 9:if(!(n=e.sent).success){e.next=15;break}u("Company Ownership Has Been Transfered"),r(),e.next=22;break;case 15:e.t0=n.code,e.next="INVALID_PERMISSIONS"===e.t0?18:(e.t0,20);break;case 18:return u("Not Authorized"),e.abrupt("break",22);case 20:return u("Unable to Disband Company"),e.abrupt("break",22);case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(4),console.error(e.t1),u("Unable To Transfer Company Ownership");case 28:ae(!1),te(null),ce(!1);case 31:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}();return n.createElement(C.zj,{appId:"comanager",titleOverride:i.Workplace?null===(t=i.Workplace)||void 0===t?void 0:t.Name:i.Name,actions:n.createElement(n.Fragment,null,W&&n.createElement(s.Z,{title:"Company Owner Menu"},n.createElement(d.Z,{onClick:function(){return V(!0)}},n.createElement(O.G,{icon:["fas","gear"]}))),!i.Workplaces&&n.createElement(s.Z,{title:"Create New Grade"},n.createElement(d.Z,{onClick:function(){return me(G({JobId:i.Id,WorkplaceId:null},F))}},n.createElement(O.G,{icon:["fas","plus"]}))),n.createElement(s.Z,{title:"Force Refresh"},n.createElement(d.Z,{onClick:function(){return r()},disabled:ie},n.createElement(O.G,{className:"fa ".concat(ie?"fa-spin":""),icon:["fas","arrows-rotate"]}))))},i.Workplaces&&i.Workplaces.length>0?i.Workplaces.map((function(e){return n.createElement(B,{key:"wp-".concat(e.Id),expanded:ge==e.Id,onChange:(t=e.Id,function(e,r){Ee(!!r&&t)})},n.createElement(f.Z,{style:{width:"100%"}},n.createElement(J,{expandIcon:n.createElement(O.G,{icon:["fas","caret-down"]})},n.createElement(m.Z,{dense:!0},n.createElement(p.ZP,null,n.createElement(h.Z,{primary:e.Name,secondary:"".concat(e.Grades.length," Grades")}))))),n.createElement(R,null,n.createElement(m.Z,null,n.createElement(p.ZP,null,n.createElement(b.ZP,{container:!0,style:{textAlign:"center"}},n.createElement(b.ZP,{item:!0,xs:6},n.createElement(s.Z,{title:"Create New Grade"},n.createElement(d.Z,{onClick:function(){return me(G(G({},F),{},{JobId:i.Id,WorkplaceId:e.Id}))},className:l.workplaceAction},n.createElement(O.G,{icon:["fas","plus"]})))),n.createElement(b.ZP,{item:!0,xs:6},n.createElement(s.Z,{title:"Edit Workplace"},n.createElement(d.Z,{onClick:function(){return se(G(G({JobId:i.Id},e),{},{edit:!0}))},className:l.workplaceAction},n.createElement(O.G,{icon:["fas","pen-to-square"]})))))),n.createElement(p.ZP,null,n.createElement(h.Z,{primary:"Grades"})),n.createElement(p.ZP,null,n.createElement(m.Z,{style:{width:"100%"}},e.Grades.sort((function(e,t){return e.Level-t.Level})).map((function(t){var r;return n.createElement(p.ZP,{button:t.Level<c.Grade.Level||W,key:"grade-".concat(t.Id),onClick:t.Level<c.Grade.Level||W?function(){return me(G(G({},t),{},{JobId:i.Id,WorkplaceId:e.Id,edit:!0}))}:null,className:l.item},n.createElement(h.Z,{primary:n.createElement("span",null,(null==t||null===(r=t.Permissions)||void 0===r?void 0:r.JOB_MANAGEMENT)&&n.createElement(O.G,{className:l.management,icon:["fas","user-shield"]}),t.Name),secondary:"".concat(Object.keys(t.Permissions).filter((function(e){return t.Permissions[e]})).length," Permissions")}))})))))));var t})):n.createElement(m.Z,null,n.createElement(p.ZP,null,n.createElement(h.Z,{primary:"Grades"})),n.createElement(p.ZP,null,n.createElement(m.Z,{style:{width:"100%"}},i.Grades.map((function(e){var t;return n.createElement(p.ZP,{button:e.Level<c.Grade.Level||W,key:"grade-".concat(e.Id),onClick:e.Level<c.Grade.Level||W?function(){return me(G(G({},e),{},{JobId:i.Id,WorkplaceId:null,edit:!0}))}:null,className:l.item},n.createElement(h.Z,{primary:n.createElement("span",null,(null==e||null===(t=e.Permissions)||void 0===t?void 0:t.JOB_MANAGEMENT)&&n.createElement(O.G,{className:l.management,icon:["fas","user-shield"]}),e.Name),secondary:"".concat(Object.keys(e.Permissions).filter((function(t){return e.Permissions[t]})).length," Permissions")}))}))))),n.createElement(C.I4,{title:"Delete Grade?",open:be,confirm:"Yes",decline:"No",onConfirm:xe,onDecline:function(){return ve(!1)}},n.createElement("p",null,"Deleting this grade will remove all permissions related to it and cannot be undone, are you sure?")),n.createElement(C.u_,{form:!0,formStyle:{position:"relative"},disabled:ie,open:null!=ue,title:"Edit Workplace",onAccept:we,onClose:function(){return se(null)},submitLang:"Edit"},null!=ue&&n.createElement(n.Fragment,null,ie&&n.createElement(C.aN,{static:!0,text:"Submitting"}),n.createElement(v.Z,{fullWidth:!0,required:!0,label:"Workplace Name",name:"Name",disabled:ie,className:l.editorField,value:ue.Name,onChange:function(e){return se(G(G({},ue),{},{Name:e.target.value}))}}))),n.createElement(C.u_,{disabled:ie,form:!0,formStyle:{position:"relative"},open:null!=fe,title:"".concat(null!=fe&&fe.edit?"Edit":"Create"," Grade"),onAccept:ke,onClose:function(){return me(null)},onDelete:null==fe||!fe.edit||null!=fe&&fe.Owner?null:function(){return ve(!0)},submitLang:null!=fe&&fe.edit?"Edit":"Create"},null!=fe&&n.createElement(n.Fragment,null,ie&&n.createElement(C.aN,{static:!0,text:"Submitting"}),n.createElement(v.Z,{fullWidth:!0,required:!0,label:"Grade Name",name:"Name",disabled:ie,className:l.editorField,value:fe.Name,onChange:function(e){return me(G(G({},fe),{},{Name:e.target.value}))}}),n.createElement(S.h3,{fullWidth:!0,required:!0,label:"Grade Level",helperText:"This determines where in the rank heirarchy this grade falls",name:"Level",disabled:fe.Owner||ie,className:l.editorField,value:fe.Level,onChange:function(e){return me(G(G({},fe),{},{Level:e.target.value}))},type:"tel",isNumericString:!0,customInput:v.Z}),n.createElement(y.Z,{fullWidth:!0,className:l.editorField},n.createElement(g.Z,{id:"grade-perms"},"Permissions"),n.createElement(E.Z,{labelId:"grade-perms",multiple:!0,fullWidth:!0,disabled:fe.Owner||ie,value:Object.keys(fe.Permissions),onChange:function(e){var t=Object();e.target.value.map((function(e){t[e]=!0})),me(G(G({},fe),{},{Permissions:t}))},input:n.createElement(w.Z,{fullWidth:!0,label:"Permissions"}),renderValue:function(e){return e.map((function(e){var t,r;return null!==(t=null===(r=D[e])||void 0===r?void 0:r.name)&&void 0!==t?t:e})).join(", ")}},Object.keys(D).filter((function(e){var t,r=D[e];return!r.restricted||(null===(t=r.restricted)||void 0===t?void 0:t.includes(null==i?void 0:i.Id))})).sort().map((function(e){var t,r=D[e];return n.createElement(k.Z,{key:"perm-".concat(e),value:e,disabled:!L(e,null==i?void 0:i.Id)&&!W},n.createElement(x.Z,{checked:Object.keys(fe.Permissions).indexOf(e)>-1}),n.createElement(h.Z,{primary:null!==(t=null==r?void 0:r.name)&&void 0!==t?t:e}))})))))),W&&n.createElement(n.Fragment,null,n.createElement(C.u_,{open:z,title:"Owner Actions",onClose:function(){return V(!1)},hideClose:!0},n.createElement(n.Fragment,null,n.createElement(N.Z,{fullWidth:!0,variant:"contained",className:l.ownerBtn,disabled:!0,onClick:function(){return K(!0)}},"Disband Company"),n.createElement(N.Z,{fullWidth:!0,variant:"contained",className:l.ownerBtn,disabled:!0,onClick:function(){return te({target:""})}},"Transfer Company Ownership"))),n.createElement(C.u_,{form:!0,formStyle:{position:"relative"},disabled:ie,open:Y,title:"Rename ".concat(i.Name),onAccept:Ne,onClose:function(){return H(!1)},submitLang:"Submit"},n.createElement(n.Fragment,null,ie&&n.createElement(C.aN,{static:!0,text:"Submitting"}),n.createElement(v.Z,{fullWidth:!0,required:!0,label:"Company Name",name:"name",disabled:ie,className:l.editorField,defaultValue:i.Name}))),Boolean(ee)&&n.createElement(n.Fragment,null,n.createElement(C.u_,{form:!0,formStyle:{position:"relative"},disabled:ie,open:!0,title:"Transfer ".concat(i.Name," Ownership"),onAccept:function(){return ae(!0)},onClose:function(){return te(null)},submitLang:"Transfer Ownership"},n.createElement(n.Fragment,null,ie&&n.createElement(C.aN,{static:!0,text:"Submitting"}),n.createElement(S.h3,{fullWidth:!0,required:!0,label:"Target State ID",name:"target",className:l.editorField,value:ee.target,disabled:ie,onChange:function(e){return te(G(G({},ee),{},{target:e.target.value}))},type:"tel",isNumericString:!0,customInput:v.Z}))),n.createElement(C.I4,{title:"Transfer Company?",open:ne,confirm:"Yes",decline:"No",onConfirm:Oe,onDecline:function(){return ae(!1)}},n.createElement("p",null,"Transfering company will transfer full ownership of company & associated assets."),n.createElement("p",null,"This is not reversable, if you proceed you will lose all control over the company."))),n.createElement(C.I4,{title:"Disband Company?",open:$,confirm:"Yes",decline:"No",onConfirm:Ie,onDecline:function(){return K(!1)}},n.createElement("p",null,"Disbanding the company will remove everyone employed, grades, upgrades, or any data or assets associated with your company."),n.createElement("p",null,"This is not reversable, if you proceed this company will be lost forever and you"," ",n.createElement("b",null,n.createElement("i",null,"WILL NOT"))," ","get any sort of refund for anything purchased for your company."))))}}}]);