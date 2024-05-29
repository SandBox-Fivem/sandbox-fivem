"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[1811,4557],{84557:(e,t,n)=>{n.r(t),n.d(t,{getActualRemainingAmount:()=>o,getLoanIdentifierType:()=>r,getLoanTypeName:()=>a,getNextPaymentAmount:()=>i});var a=function(e){switch(e){case"vehicle":return"Vehicle";case"property":return"Property";default:return"Asset"}},r=function(e){switch(e){case"vehicle":return"Vehicle VIN";case"property":return"Property ID";default:return"Asset ID"}},o=function(e){if(e.Remaining>0){var t=(100+e.InterestRate)/100;return Math.ceil(e.Remaining*t)}return 0},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.Remaining>0){var n=(100+e.InterestRate)/100,a=e.TotalPayments-e.PaidPayments;e.MissedPayments>1&&1===t&&(t=e.MissedPayments),t>a&&(t=a);var r=e.Remaining/a*t*n;return Math.ceil(r)}return 0}},34119:(e,t,n)=>{n.d(t,{A3:()=>c,No:()=>l,ok:()=>i});n(97762);var a=n(27856),r=n.n(a),o=n(25935),i=function(e){return(0,o.ZP)(r().sanitize(e))},c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),l=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"".concat(t[1],"-").concat(t[2],"-").concat(t[3]):null}},41811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(67294),r=(n(86706),n(94235)),o=(n(64680),n(89250)),i=(n(79655),n(67814)),c=n(94803),l=n.n(c),s=n(28670),u=n.n(s),d=n(84557),m=n(68174),p=n(34119),f=(0,r.Z)((function(e){return{loan:{padding:10,borderRadius:14,border:function(e){return"1px solid ".concat(e.color)},position:"relative",marginBottom:8,fontFamily:"Kanit",minHeight:150,height:"100%",transition:"background ease-in 0.15s","&:hover":{background:function(e){return"".concat(u()(e.color).darken(4),"80")},cursor:"pointer"}},branding:{fontSize:22,color:function(e){return u()(e.color).brighten()},"& small":{display:"block",fontSize:12,color:e.palette.text.alt}},status:{width:"fit-content",height:"fit-content",position:"absolute",top:14,right:14,borderRadius:8,"&.paid":{background:function(e){return u()(e.color).brighten()},padding:4,color:e.palette.secondary.dark},"&.default":{background:e.palette.error.main,padding:4}},loanBalance:{width:"fit-content",height:"fit-content",position:"absolute",bottom:14,right:14,textAlign:"right"},balance:{fontSize:22,letterSpacing:4,color:e.palette.success.main},loanDate:{fontSize:12,color:e.palette.text.alt},typeIcon:{width:"fit-content",height:"fit-content",position:"absolute",bottom:14,left:14}}}));const h=function(e){var t=e.loan,n=(0,m.Ov)("loans"),r=f(n),c=(0,o.s0)(),s=(0,d.getActualRemainingAmount)(t);t.TotalPayments,t.PaidPayments;return a.createElement("div",{className:r.loan,onClick:function(){c("/apps/loans/view/".concat(t._id))}},a.createElement("div",{className:r.branding},a.createElement("span",null,"SB Financial"),a.createElement("small",null,function(){switch(t.Type){case"vehicle":return"Auto";case"property":return"Home";default:return"Personal"}}()," Loan")),t.Remaining>0?t.Defaulted||t.MissablePayments>1&&t.MissedPayments>=t.MissablePayments-1?a.createElement("div",{className:"".concat(r.status," default")},"Defaulted"):a.createElement("div",{className:"".concat(r.status," repayment")},"In Repayment"):a.createElement("div",{className:"".concat(r.status," paid")},"Repaid"),a.createElement("div",{className:r.typeIcon},a.createElement(i.G,{icon:function(){switch(t.Type){case"vehicle":return"car";case"property":return"house";default:return"questionmark"}}()})),a.createElement("div",{className:r.loanBalance},a.createElement("div",{className:r.balance},p.A3.format(s)),a.createElement("div",{className:r.loanDate},"Approved On ",a.createElement(l(),{unix:!0,date:t.Creation,format:"L"}))))}}}]);