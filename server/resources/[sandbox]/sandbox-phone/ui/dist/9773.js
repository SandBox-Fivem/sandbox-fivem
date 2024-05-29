"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[9773],{52288:(e,o,t)=>{t.d(o,{Z:()=>I});var l=t(63366),r=t(87462),n=t(67294),a=t(86010),s=t(94780),i=t(41796),c=t(29602),d=t(16122),p=t(98216),u=t(64680),v=t(1588),h=t(28562);function m(e){return(0,h.Z)("MuiAlert",e)}const g=(0,v.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var f=t(6867),x=t(82066),Z=t(48521);const C=(0,x.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),A=(0,x.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),M=(0,x.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=(0,x.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var j=t(34484);const $=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],y=(0,c.ZP)(u.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,p.Z)(t.color||t.severity)}`]]}})((({theme:e,ownerState:o})=>{const t="light"===e.palette.mode?i._j:i.$n,l="light"===e.palette.mode?i.$n:i._j,n=o.color||o.severity;return(0,r.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&"standard"===o.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:l(e.palette[n].light,.9),[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&"outlined"===o.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&"filled"===o.variant&&(0,r.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}))})),z=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),L=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),b=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),w={success:(0,Z.jsx)(C,{fontSize:"inherit"}),warning:(0,Z.jsx)(A,{fontSize:"inherit"}),error:(0,Z.jsx)(M,{fontSize:"inherit"}),info:(0,Z.jsx)(S,{fontSize:"inherit"})},I=n.forwardRef((function(e,o){var t,n,i,c,u,v;const h=(0,d.Z)({props:e,name:"MuiAlert"}),{action:g,children:x,className:C,closeText:A="Close",color:M,components:S={},componentsProps:I={},icon:k,iconMapping:P=w,onClose:R,role:N="alert",severity:B="success",slotProps:W={},slots:H={},variant:E="standard"}=h,O=(0,l.Z)(h,$),_=(0,r.Z)({},h,{color:M,severity:B,variant:E}),T=(e=>{const{variant:o,color:t,severity:l,classes:r}=e,n={root:["root",`${o}${(0,p.Z)(t||l)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(n,m,r)})(_),V=null!=(t=null!=(n=H.closeButton)?n:S.CloseButton)?t:f.Z,F=null!=(i=null!=(c=H.closeIcon)?c:S.CloseIcon)?i:j.Z,q=null!=(u=W.closeButton)?u:I.closeButton,D=null!=(v=W.closeIcon)?v:I.closeIcon;return(0,Z.jsxs)(y,(0,r.Z)({role:N,elevation:0,ownerState:_,className:(0,a.default)(T.root,C),ref:o},O,{children:[!1!==k?(0,Z.jsx)(z,{ownerState:_,className:T.icon,children:k||P[B]||w[B]}):null,(0,Z.jsx)(L,{ownerState:_,className:T.message,children:x}),null!=g?(0,Z.jsx)(b,{ownerState:_,className:T.action,children:g}):null,null==g&&R?(0,Z.jsx)(b,{ownerState:_,className:T.action,children:(0,Z.jsx)(V,(0,r.Z)({size:"small","aria-label":A,title:A,color:"inherit",onClick:R},q,{children:(0,Z.jsx)(F,(0,r.Z)({fontSize:"small"},D))}))}):null]}))}))},34484:(e,o,t)=>{t.d(o,{Z:()=>n});t(67294);var l=t(82066),r=t(48521);const n=(0,l.Z)((0,r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);