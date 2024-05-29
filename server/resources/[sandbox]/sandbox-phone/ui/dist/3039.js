"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[3039,1347],{31347:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(67294),o=r(86706),i=r(89250),a=r(52141),c=r(6867),u=r(94235),l=r(67814),f=r(68174),s=r(69042);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=(0,u.Z)((function(t){return{add:{position:"absolute",bottom:"12%",right:"10%",backgroundColor:"#f9a825",fontSize:22,opacity:.3,"&:hover":{backgroundColor:"#f9a825",opacity:1,transition:"opacity ease-in 0.3s"}},delete:{position:"absolute",bottom:"19%",right:"10%",backgroundColor:t.palette.error.main,fontSize:22,opacity:.3,"&:hover":{backgroundColor:t.palette.error.main,opacity:1,transition:"opacity ease-in 0.3s"}},bump:{position:"absolute",bottom:"26%",right:"10%",backgroundColor:t.palette.error.light,fontSize:22,opacity:.3,"&:hover":{backgroundColor:t.palette.error.light,opacity:1,transition:"opacity ease-in 0.3s"}}}}));const g=function(t){var e=(0,f.VY)(),r=(h(),(0,i.s0)()),u=(0,o.v9)((function(t){return t.data.data.player.Source})),d=(0,o.v9)((function(t){return t.data.data.adverts}))[u],p=y((0,n.useState)(!1),2),m=p[0],v=p[1];return n.createElement(n.Fragment,null,null==d||m?n.createElement(a.Z,{title:"Delete Ad"},n.createElement(c.Z,{onClick:function(){return r("/apps/adverts/add")}},n.createElement(l.G,{icon:["fas","plus"]}))):n.createElement(n.Fragment,null,d.time<Date.now()-18e5?n.createElement(a.Z,{title:"Bump Ad"},n.createElement(c.Z,{onClick:function(){s.Z.send("UpdateAdvert",b(b({},d),{},{time:Date.now()})).then((function(t){e("Advertisement Bumped")})).catch((function(t){e("Failed Bumping Advertisement")}))},disabled:m},n.createElement(l.G,{icon:["fas","upload"]}))):void 0,n.createElement(a.Z,{title:"Edit Ad"},n.createElement(c.Z,{onClick:function(){return r("/apps/adverts/edit")}},n.createElement(l.G,{icon:["fas","pen-to-square"]}))),n.createElement(a.Z,{title:"Delete Ad"},n.createElement(c.Z,{onClick:function(){v(!0),setTimeout((function(){s.Z.send("DeleteAdvert").then((function(t){e("Advertisement Deleted")})).catch((function(t){}))}),500)},disabled:m},n.createElement(l.G,{icon:["fas","trash"]})))))}},13039:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(67294),o=r(86706),i=r(94235),a=(r(67814),r(85492)),c=(r(31347),r(90978)),u=r(89250),l=r(45525);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=(0,i.Z)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},adsWrapper:{height:"100%",background:t.palette.secondary.main,overflowY:"auto",overflowX:"hidden"},header:{width:"100%",padding:10,fontSize:20,height:50,borderBottom:"1px solid ".concat(t.palette.text.main)},title:{width:"fit-content",height:"fit-content",position:"absolute",top:0,bottom:0,left:0,margin:"auto"}}}));const p=(0,o.$j)()((function(t){d();var e=(0,u.UO)().category,r=a.Categories.filter((function(t){return t.label===e}))[0],i=(0,o.v9)((function(t){return t.data.data.adverts})),s=f((0,n.useState)(Object()),2),p=s[0],b=s[1];return(0,n.useEffect)((function(){var t=Object();Object.keys(i).filter((function(t){return"0"!==t})).map((function(r){var n=i[r];n.categories.includes(e)&&(t[r]=n)})),b(t)}),[i]),n.createElement(l.zj,{appId:"adverts",titleOverride:r.label,colorOverride:r.color},Object.keys(p).filter((function(t){return"0"!==t})).sort((function(t,e){var r=p[t];return p[e].time-r.time})).map((function(t,e){return n.createElement(c.default,{key:"advert-".concat(e),advert:p[t]})})))}))}}]);