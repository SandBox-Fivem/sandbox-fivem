"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[3779],{33779:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=(n(86706),n(15725)),o=n(64680),i=n(67109),l=n(16628),c=n(72642),s=n(94235),p=n(67814);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=(0,s.Z)((function(e){return{div:{width:"100%",textDecoration:"none",whiteSpace:"nowrap",verticalAlign:"middle",userSelect:"none","-webkit-user-select":"none",position:"relative"},rowWrapper:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},rowWrapperActive:{background:e.palette.secondary.light,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:e.palette.text.light,height:55,width:55,fontSize:35,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarIcon:{fontSize:35},sectionHeader:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"35px"},popup:{opacity:1,transition:"opacity 0.15s",position:"absolute",left:0,right:0,top:"90%",zIndex:"2",margin:0},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:-1},itemsList:{width:"100%",background:e.palette.secondary.light,minHeight:84,zIndex:999},arrow:{fontSize:25,position:"absolute",top:0,bottom:0,right:0,left:0,margin:"auto"},selectOption:{padding:10,background:e.palette.secondary.light,lineHeight:"50px",fontSize:20,fontWeight:"bold","&:hover":{filter:"brightness(0.7)",transition:"filter ease-in 0.15s",cursor:"pointer"}},selectedOption:{padding:10,background:e.palette.secondary.light,lineHeight:"50px",fontSize:20,fontWeight:"bold",border:"1px solid ".concat(e.palette.primary.main),"&:hover":{filter:"brightness(0.7)",transition:"filter ease-in 0.15s",cursor:"pointer"}},playBtn:{textAlign:"center",fontSize:20,lineHeight:"50px",fontWeight:"bold",position:"relative"},selectedItem:{color:e.palette.text.main,fontWeight:"bold"}}}));const f=function(e){var t=m(),n=u((0,r.useState)(!1),2),s=n[0],d=n[1],f=u((0,r.useState)(e.selected),2),h=f[0],g=f[1],b=function(){e.disabled||d(!s)},v=function(t){b(),g(t),e.onChange(t)},y=e.disabled?"".concat(t.div," disabled"):t.div,x=e.disabled?{opacity:.5}:{};return r.createElement("div",{className:y,style:x},r.createElement(a.ZP,{container:!0},r.createElement(o.Z,{className:s?t.rowWrapperActive:t.rowWrapper,onClick:b},r.createElement(a.ZP,{item:!0,xs:12},r.createElement(a.ZP,{container:!0},r.createElement(a.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement(i.Z,{className:t.avatar,style:{backgroundColor:e.color}},r.createElement(p.G,{icon:["fas","music-note"],className:t.avatarIcon}))),r.createElement(a.ZP,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},r.createElement("span",{className:t.sectionHeader},e.label),r.createElement("span",{className:t.selectedItem},e.options.filter((function(e){return e.value===h}))[0].label)),r.createElement(a.ZP,{item:!0,xs:2,style:{position:"relative"}},s?r.createElement(p.G,{icon:["fas","chevron-up"],className:t.arrow}):r.createElement(p.G,{icon:["fas","chevron-down"],className:t.arrow})))))),s&&r.createElement(l.Z,{in:!0},r.createElement(o.Z,{className:t.popup},r.createElement("div",{className:t.cover,onClick:b}),r.createElement("div",{className:t.itemsList},e.options.map((function(n,i){return r.createElement(o.Z,{key:"".concat(e.label,"-").concat(i),className:i===h?t.selectedOption:t.selectOption},r.createElement(a.ZP,{container:!0,style:{padding:"0 10px"}},r.createElement(a.ZP,{item:!0,xs:10,onClick:function(){v(n.value)}},n.label),r.createElement(a.ZP,{item:!0,xs:2,className:t.playBtn,onClick:function(){e.playSound(n.value)}},r.createElement(c.Z,{className:t.arrow,variant:"outlined"},r.createElement(p.G,{icon:["fas","play"],className:t.arrow})))))}))))))}}}]);