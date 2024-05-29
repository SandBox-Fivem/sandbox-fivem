"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[5014,1347],{31347:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(67294),o=r(86706),a=r(89250),i=r(52141),l=r(6867),c=r(94235),u=r(67814),s=r(68174),f=r(69042);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=(0,c.Z)((function(t){return{add:{position:"absolute",bottom:"12%",right:"10%",backgroundColor:"#f9a825",fontSize:22,opacity:.3,"&:hover":{backgroundColor:"#f9a825",opacity:1,transition:"opacity ease-in 0.3s"}},delete:{position:"absolute",bottom:"19%",right:"10%",backgroundColor:t.palette.error.main,fontSize:22,opacity:.3,"&:hover":{backgroundColor:t.palette.error.main,opacity:1,transition:"opacity ease-in 0.3s"}},bump:{position:"absolute",bottom:"26%",right:"10%",backgroundColor:t.palette.error.light,fontSize:22,opacity:.3,"&:hover":{backgroundColor:t.palette.error.light,opacity:1,transition:"opacity ease-in 0.3s"}}}}));const g=function(t){var e=(0,s.VY)(),r=(h(),(0,a.s0)()),c=(0,o.v9)((function(t){return t.data.data.player.Source})),d=(0,o.v9)((function(t){return t.data.data.adverts}))[c],p=y((0,n.useState)(!1),2),m=p[0],v=p[1];return n.createElement(n.Fragment,null,null==d||m?n.createElement(i.Z,{title:"Delete Ad"},n.createElement(l.Z,{onClick:function(){return r("/apps/adverts/add")}},n.createElement(u.G,{icon:["fas","plus"]}))):n.createElement(n.Fragment,null,d.time<Date.now()-18e5?n.createElement(i.Z,{title:"Bump Ad"},n.createElement(l.Z,{onClick:function(){f.Z.send("UpdateAdvert",b(b({},d),{},{time:Date.now()})).then((function(t){e("Advertisement Bumped")})).catch((function(t){e("Failed Bumping Advertisement")}))},disabled:m},n.createElement(u.G,{icon:["fas","upload"]}))):void 0,n.createElement(i.Z,{title:"Edit Ad"},n.createElement(l.Z,{onClick:function(){return r("/apps/adverts/edit")}},n.createElement(u.G,{icon:["fas","pen-to-square"]}))),n.createElement(i.Z,{title:"Delete Ad"},n.createElement(l.Z,{onClick:function(){v(!0),setTimeout((function(){f.Z.send("DeleteAdvert").then((function(t){e("Advertisement Deleted")})).catch((function(t){}))}),500)},disabled:m},n.createElement(u.G,{icon:["fas","trash"]})))))}},5014:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(67294),o=r(86706),a=r(94235),i=r(45525),l=r(31347),c=r(68174),u=r(94659),s=r(90978);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=(0,a.Z)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},content:{height:"91.8%",overflow:"hidden"},tabPanel:{height:"100%"},add:{position:"absolute",bottom:"12%",right:"10%",backgroundColor:"#f9a825",opacity:.3,"&:hover":{backgroundColor:"#f9a825",opacity:1,transition:"opacity ease-in 0.3s"}},delete:{position:"absolute",bottom:"19%",right:"10%",backgroundColor:t.palette.error.main,opacity:.3,"&:hover":{backgroundColor:t.palette.error.main,opacity:1,transition:"opacity ease-in 0.3s"}},bump:{position:"absolute",bottom:"26%",right:"10%",backgroundColor:t.palette.error.light,opacity:.3,"&:hover":{backgroundColor:t.palette.error.light,opacity:1,transition:"opacity ease-in 0.3s"}},searchBar:{padding:10,background:function(t){return null==t?void 0:t.color},textAlign:"center"},ads:{maxHeight:"88%",overflow:"auto"}}}));const b=function(t){var e=(0,c.Ov)("adverts"),r=p(e),a=(0,o.v9)((function(t){return t.data.data.adverts})),d=f((0,n.useState)(Object.keys(a).filter((function(t){return"0"!==t}))),2),b=d[0],m=d[1],y=f((0,n.useState)(""),2),v=y[0],h=y[1];(0,n.useEffect)((function(){m(Object.keys(a).filter((function(t){return"0"!==t&&a[t].title.includes(v)})))}),[v,a]);return n.createElement(i.zj,{appId:"adverts",actions:n.createElement(l.default,null)},n.createElement("div",{className:r.searchBar},n.createElement(u.Z,{fullWidth:!0,label:"Search Adverts",color:"secondary",onChange:function(t){h(t.target.value)}})),n.createElement("div",{className:r.ads},b.sort((function(t,e){var r=a[t];return a[e].time-r.time})).map((function(t,e){return n.createElement(s.default,{key:"advert-".concat(e),advert:a[t]})}))))}}}]);