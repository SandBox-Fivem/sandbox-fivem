"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[1980,2539,824],{32539:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(94235),o=n(68174),l=n(67814),i=n(89250),c=(0,a.Z)((function(e){return{race:{display:"flex",fontFamily:"Aclonica",borderBottom:"1px solid ".concat(e.palette.border.divider),padding:"8px 0",background:e.palette.secondary.dark,transition:"background ease-in 0.15s","&:hover":{background:e.palette.secondary.light,cursor:"pointer"}},classIcon:{width:50,textAlign:"center",lineHeight:"50px","& span":{fontFamily:"Lexend Peta",color:function(e){return e.color},fontSize:26}},label:{flexGrow:1,maxWidth:"calc(100% - 100px)",width:"100%"},raceName:{fontSize:14,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",lineHeight:"27px",marginTop:4},trackName:{fontSize:12,lineHeight:"14px","& small":{fontSize:10}},arrow:{width:50,textAlign:"center",lineHeight:"50px"}}}));const u=function(e){var t=e.track,n=e.race,a=(0,o.Ov)("blueline"),u=c(a),s=(0,i.s0)();return r.createElement("div",{className:u.race,onClick:function(){s("/apps/blueline/view/".concat(n.id))}},r.createElement("div",{className:u.classIcon},"All"!=n.class?r.createElement("span",null,n.class):r.createElement("span",null,"-")),r.createElement("div",{className:u.label},r.createElement("div",{className:u.raceName},n.name),r.createElement("div",{className:u.trackName},t.Name," ",r.createElement("small",null,"(",Object.keys(n.racers).length," Racers)"))),r.createElement("div",{className:u.arrow},r.createElement(l.G,{icon:["far","chevron-right"]})))}},40824:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(94235),o=n(68174);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=(0,a.Z)((function(e){var t;return{wrapper:{height:"100%",background:e.palette.secondary.main,textAlign:"center"},content:(t={margin:"auto",position:"absolute",top:0,bottom:0,left:0,right:0,height:"fit-content",width:"fit-content"},i(t,"width","80%"),i(t,"fontSize",28),i(t,"fontWeight","bold"),i(t,"color",(function(e){return e.color})),t)}}));const u=function(e){var t=(0,o.Ov)("blueline"),n=c(t);return r.createElement("div",{className:n.wrapper},r.createElement("div",{className:n.content},"Not Authorized"))}},31980:(e,t,n)=>{n.r(t),n.d(t,{TrackTypes:()=>f,default:()=>b});var r=n(67294),a=n(86706),o=n(6867),l=n(94235),i=n(67814),c=n(89250),u=n(68174),s=n(40824),d=n(45525),m=n(32539),f={laps:"Laps",p2p:"Point to Point"},p=(0,l.Z)((function(e){return{header:{display:"inline-block",fontSize:16,marginLeft:8,"& svg":{marginRight:4}},content:{height:"92%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},user:{width:"100%",padding:10,borderBottom:"1px solid ".concat(e.palette.border.divider),"& span":{color:function(e){return e.color}}},noRaces:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const b=function(e){var t,n=(0,u.Ov)("blueline"),l=p(n),f=(0,u.Gt)(),b=(0,c.s0)(),v=(0,a.v9)((function(e){return e.data.data.onDuty})),h=(0,a.v9)((function(e){var t;return null===(t=e.data.data.player)||void 0===t?void 0:t.Callsign})),g=f("PD_MANAGE_TRIALS","police"),k=null!==(t=(0,a.v9)((function(e){return e.data.data.tracks_pd})))&&void 0!==t?t:Array(),y=(0,a.v9)((function(e){return e.pdRace.races})),w=Object.keys(y).reduce((function(e,t){var n,r;return Boolean(y[t])&&-1!=(null===(n=y[t])||void 0===n?void 0:n.state)&&2!=(null===(r=y[t])||void 0===r?void 0:r.state)&&e.push(y[t]),e}),Array()).sort((function(e,t){return t.time-e.time}));return r.createElement(d.zj,{appId:"blueline",titleOverride:"Trials - Pending Races",actionShow:Boolean(h)&&"police"==v,actions:r.createElement(r.Fragment,null,r.createElement(o.Z,{onClick:function(){return b("/apps/blueline/completed",{replace:!0})}},r.createElement(i.G,{icon:["far","clock-rotate-left"]})),r.createElement(o.Z,{onClick:function(){return b("/apps/blueline/new")}},r.createElement(i.G,{icon:["far","plus"]})),Boolean(g)&&r.createElement(o.Z,{onClick:function(){return b("/apps/blueline/admin")}},r.createElement(i.G,{icon:["fad","shield-halved"]})))},h&&"police"==v?r.createElement(r.Fragment,null,r.createElement("div",{className:l.user},"Welcome Back ",r.createElement("span",null,h)),r.createElement("div",{className:l.content},Boolean(w)&&w.length>0?w.map((function(e,t){var n=k.filter((function(t){return t.id==e.track}))[0];return r.createElement(m.default,{key:"pending-".concat(t),track:n,race:e})})):r.createElement("div",{className:l.noRaces},"No Pending Races"))):r.createElement(s.default,null))}}}]);