"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[1538,466,4730,4756],{466:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(89526),a=r(92070),o=r(50871),l=r(77290),i=r(57479),c=r(74484),s=r(57170),u=r(24963);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,c.Z)((function(e){return{div:{width:"100%",textDecoration:"none",whiteSpace:"nowrap",verticalAlign:"middle",userSelect:"none","-webkit-user-select":"none",textAlign:"left"},rowWrapper:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:e.palette.text.dark,height:55,width:55,fontSize:35,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarIcon:{fontSize:35,color:e.palette.text.light},sectionHeader:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"35px"},arrow:{fontSize:35,position:"absolute",top:0,bottom:0,right:0,margin:"auto"},selectedItem:{color:e.palette.text.main,fontWeight:"bold"}}}));const f=function(e){var t=d(),r=((0,a.v9)((function(e){return e.data.data.player.PhoneSettings})),p((0,n.useState)(!1),2)),c=r[0],m=r[1],f=p((0,n.useState)(e.color),2),b=f[0],g=f[1],h=function(){m(!c)},y=e.disabled?"".concat(t.div," disabled"):t.div,v=e.disabled?{opacity:.5}:{};return n.createElement("div",{className:y,style:v},n.createElement(o.ZP,{container:!0},n.createElement(l.Z,{className:t.rowWrapper,onClick:h},n.createElement(o.ZP,{item:!0,xs:12},n.createElement(o.ZP,{container:!0},n.createElement(o.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement(i.Z,{className:t.avatar,style:{backgroundColor:e.color}},n.createElement(s.G,{icon:["fas","eye-dropper-half"],className:t.avatarIcon}))),n.createElement(o.ZP,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},n.createElement("span",{className:t.sectionHeader},e.label),n.createElement("span",{className:t.selectedItem,style:{color:e.color}},e.color)),n.createElement(o.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement(s.G,{icon:["fas","chevron-right"],className:t.arrow})))))),c?n.createElement(u.u_,{open:c,title:"Select ".concat(e.label),onClose:function(){return h()},onAccept:function(t){h(),e.onSave(b)},acceptLang:"Save"},n.createElement(u.zH,{color:b,onChange:function(e){g(e.hex)}})):null)}},54730:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(89526),a=r(10010),o=(0,r(74484).Z)((function(e){return{phoneVers:{height:40,lineHeight:"40px",textAlign:"center",fontFamily:"Aclonica",width:"100%",userSelect:"none","-webkit-user-select":"none"}}}));const l=function(e){var t=o(),r=(0,a.k6)();(0,n.useEffect)((function(){return function(){clearTimeout(l)}}),[]);var l=null,i=function(){clearTimeout(l)};return n.createElement("div",{className:t.phoneVers,onMouseDown:function(){l=setTimeout((function(){r.push("/apps/settings/software")}),2e3)},onMouseUp:i,onMouseLeave:i},"Depression OS ",n.createElement("small",null,"v","1.0.0"))}},85566:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(89526),a=r(92070),o=r(77290),l=r(74484),i=r(70595),c=r(89813),s=(0,l.Z)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",border:"2px solid ".concat(e.palette.secondary.dark),padding:10,textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",padding:10,textAlign:"left",border:"2px solid ".concat(e.palette.primary.main),"-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"}}}));const u=(0,a.$j)(null,{UpdateSetting:i.UpdateSetting})((function(e){var t=(0,c.VY)(),r=s(),l=(0,a.v9)((function(e){return e.data.data.player.LaptopSettings}));return(0,n.useEffect)((function(){if(l.wallpaper===e.item){var t=document.querySelector("#".concat(l.wallpaper));t&&t.scrollIntoView({block:"end",behavior:"smooth"})}}),[l.wallpaper]),n.createElement(o.Z,{className:l.wallpaper===e.item?r.wrapperActive:r.wrapper,onClick:function(r){r.preventDefault(),e.UpdateSetting("wallpaper",e.item),t("Wallpaper Updated")},id:e.item},n.createElement("img",{className:r.img,src:e.wallpaper.file,alt:e.wallpaper.label}),e.wallpaper.label)}))},31538:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(89526),a=r(92070),o=r(74484),l=r(50871),i=r(77290),c=r(57479),s=r(9817),u=r(87805),p=r(57170),m=(r(53059),r(54730)),d=r(34756),f=r(21674);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=(0,o.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},rowWrapper:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},rowWrapperNoHov:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none"},rowHeader:{background:e.palette.secondary.dark,fontSize:18,padding:15,color:e.palette.text.main,fontWeight:"bold",fontFamily:"Aclonica"},settingsList:{maxHeight:"95%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},avatar:{color:e.palette.text.light,background:e.palette.primary.main,height:55,width:55,fontSize:35,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarIcon:{fontSize:25},sectionHeader:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"35px"},arrow:{fontSize:20,position:"absolute",top:0,bottom:0,right:0,margin:"auto"},rowWrapper2:{background:e.palette.secondary.main,padding:"5px 10px",width:"95%",margin:"0 2.5% 0 2.5%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},sectionHeader2:{display:"block",fontSize:16,lineHeight:"30px"},arrow2:{fontSize:20,position:"absolute",top:0,bottom:0,left:0,margin:"auto"},mute:{color:e.palette.error.main},unmute:{color:e.palette.error.main},versionWrapper:{position:"fixed",bottom:10,width:"100%"}}}));const y=function(){var e=h(),t=((0,a.I0)(),b((0,n.useState)(!1),2)),r=(t[0],t[1],b((0,n.useState)(null),2)),o=r[0],g=r[1];(0,a.v9)((function(e){var t;return null===(t=e.data.data.player)||void 0===t?void 0:t.LaptopSettings}));return null!=o?n.createElement("div",{className:e.wrapper},"wallpaper"==o&&n.createElement(d.default,null),"colors"==o&&n.createElement(f.default,null),n.createElement(l.ZP,{container:!0,spacing:2},n.createElement(l.ZP,{item:!0,xs:4},n.createElement(i.Z,{className:e.rowWrapper2,onClick:function(e){e.preventDefault(),g(null)}},n.createElement(l.ZP,{item:!0,xs:12},n.createElement(l.ZP,{container:!0},n.createElement(l.ZP,{item:!0,xs:1,style:{position:"relative"}},n.createElement(p.G,{className:e.arrow2,icon:["fas","chevron-left"]})),n.createElement(l.ZP,{item:!0,xs:11,style:{position:"relative"}},n.createElement("span",{className:e.sectionHeader2},"Go Back")))))),n.createElement(l.ZP,{item:!0,xs:8},n.createElement(m.default,null)))):n.createElement("div",{className:e.wrapper},n.createElement(l.ZP,{className:e.settingsList,container:!0,justify:"flex-start"},n.createElement(l.ZP,{item:!0,xs:12,className:e.rowHeader,style:{fontSize:20}},"Settings"),n.createElement(l.ZP,{item:!0,xs:12,className:e.rowHeader},"Personalization"),n.createElement(i.Z,{className:e.rowWrapper,onClick:function(){g("wallpaper")}},n.createElement(l.ZP,{item:!0,xs:12},n.createElement(l.ZP,{container:!0},n.createElement(l.ZP,{item:!0,xs:1,style:{position:"relative"}},n.createElement(c.Z,{className:e.avatar,style:{background:s.Z[500]}},n.createElement(p.G,{className:e.avatarIcon,icon:["fas","image-polaroid"]}))),n.createElement(l.ZP,{item:!0,xs:9,style:{paddingLeft:5,position:"relative"}},n.createElement("span",{className:e.sectionHeader},"Wallpaper")),n.createElement(l.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement(p.G,{className:e.arrow,icon:["fas","chevron-right"]}))))),n.createElement(i.Z,{className:e.rowWrapper,onClick:function(){g("colors")}},n.createElement(l.ZP,{item:!0,xs:12},n.createElement(l.ZP,{container:!0},n.createElement(l.ZP,{item:!0,xs:1,style:{position:"relative"}},n.createElement(c.Z,{className:e.avatar,style:{background:u.Z[500]}},n.createElement(p.G,{className:e.avatarIcon,icon:["fas","swatchbook"]}))),n.createElement(l.ZP,{item:!0,xs:9,style:{paddingLeft:5,position:"relative"}},n.createElement("span",{className:e.sectionHeader},"Colors")),n.createElement(l.ZP,{item:!0,xs:2,style:{position:"relative"}},n.createElement(p.G,{className:e.arrow,icon:["fas","chevron-right"]})))))),n.createElement("div",{className:e.versionWrapper},n.createElement(m.default,null)))}},21674:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(89526),a=r(92070),o=r(50871),l=r(74484),i=r(466),c=r(70595);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=(0,l.Z)((function(e){return{wrapper:{height:"94%",background:e.palette.secondary.main,textAlign:"center",padding:"0 2px"},colorsList:{height:"100%",overflowY:"auto",overflowX:"hidden",margin:"0 !important","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const f=(0,a.$j)(null,{UpdateSetting:c.UpdateSetting})((function(e){var t=d(),r=(0,a.v9)((function(e){return e.data.data.player.PhoneSettings}));return n.createElement("div",{className:t.wrapper},n.createElement(o.ZP,{container:!0,className:t.colorsList},n.createElement(o.ZP,{item:!0,xs:12},n.createElement(i.default,{label:"Accent Color",color:Boolean(null==r?void 0:r.colors)?r.colors.accent:"#dd1e36",onSave:function(t){e.UpdateSetting("colors",p(p({},r.colors),{},{accent:t}))}}))))}))},34756:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(89526),a=r(50871),o=r(74484),l=r(85566),i=r(24006),c=r(8607),s=(0,o.Z)((function(e){return{wrapper:{height:"94%",background:e.palette.secondary.main,textAlign:"center",padding:"0 2px"},wallpaperList:{maxHeight:"95%",overflowY:"auto",overflowX:"hidden",margin:"0 !important","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const u=function(e){var t=s();return n.createElement("div",{className:t.wrapper},n.createElement(a.ZP,{container:!0,spacing:1,className:t.wallpaperList},n.createElement(a.ZP,{item:!0,xs:3},n.createElement(i.default,null)),Object.keys(c.M).map((function(e,t){return n.createElement(a.ZP,{key:"wallpaper-".concat(t),item:!0,xs:3},n.createElement(l.default,{item:e,wallpaper:c.M[e]}))}))))}}}]);