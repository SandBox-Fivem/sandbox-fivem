"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[7018],{87018:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(86706),l=n(94659),o=n(15725),i=n(94235),u=n(68174),c=n(17130);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=(0,i.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},search:{height:"10%"},searchInput:{width:"100%",height:"100%"},content:{maxHeight:"90%",overflowY:"auto"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const d=function(e){var t=p(),n=(0,u.J7)(),i=(0,a.v9)((function(e){var t,n;return null===(t=e.data.data.player)||void 0===t||null===(n=t.Apps)||void 0===n?void 0:n.installed})),f=s((0,r.useState)(""),2),d=f[0],h=f[1],m=s((0,r.useState)(Array()),2),y=m[0],v=m[1];return(0,r.useEffect)((function(){v(Object.keys(n).filter((function(e){return!n[e].hidden&&(n[e].label.toUpperCase().includes(d.toUpperCase())||""===d)&&!i.includes(e)})).map((function(e){return n[e]})))}),[d]),r.createElement("div",{className:t.wrapper},r.createElement("div",{className:t.search},r.createElement(l.Z,{variant:"standard",className:t.searchInput,label:"Search For App",value:d,onChange:function(e){h(e.target.value)}})),r.createElement(o.ZP,{container:!0,justify:"flex-start",className:t.content},y.length>0?y.map((function(e,t){return r.createElement(c.default,{key:e.name,app:e})})):r.createElement(o.ZP,{item:!0,xs:12,className:t.emptyMsg},"No Apps Available To Download")))}}}]);