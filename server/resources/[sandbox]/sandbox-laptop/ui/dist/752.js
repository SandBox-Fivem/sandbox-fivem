"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[752,2018,7005],{17005:(e,l,a)=>{a.r(l),a.d(l,{vehicleCategories:()=>n});var n=[{value:"all",label:"All"},{value:"import",label:"Imports"},{value:"compact",label:"Compacts"},{value:"suv",label:"SUVs"},{value:"sedans",label:"Sedan"},{value:"muscle",label:"Muscle"},{value:"sport",label:"Sports"},{value:"sportclassic",label:"Sports Classic"},{value:"super",label:"Super"},{value:"motorcycles",label:"Motorcycles"},{value:"offroad",label:"Off-road"},{value:"rally",label:"Rally"},{value:"van",label:"Vans"},{value:"utility",label:"Utility"},{value:"misc",label:"Miscellaneous"}]},62018:(e,l,a)=>{a.r(l),a.d(l,{default:()=>b});var n=a(89526),t=a(28756),o=a(50871),r=a(57931),c=a(44605),i=a(82525),u=a(74484),s=a(72619),d=a(57170),v=a(59324),m=a.n(v),p=a(17005),y=(0,u.Z)((function(e){return{wrapper:{padding:"20px 10px 20px 20px",borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(e.palette.border.divider)}}}}));const b=function(e){var l,a,u,v,b,f,E,Z,x,h,P,C=e.vehicle,g=e.onClick,S=e.onSecondary,k=y();return n.createElement(t.ZP,{className:k.wrapper,button:!0,onClick:function(){g()}},n.createElement(o.ZP,{container:!0,spacing:1},n.createElement(o.ZP,{item:!0,xs:1},n.createElement(r.Z,{primary:"Type",secondary:"loan"==(null==C?void 0:C.type)?"Loan":"Cash"})),n.createElement(o.ZP,{item:!0,xs:2},n.createElement(r.Z,{primary:"Vehicle",secondary:"".concat(null==C||null===(l=C.vehicle)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.make," ").concat(null==C||null===(a=C.vehicle)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.model," (").concat(null==C||null===(u=C.vehicle)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.class,")")})),n.createElement(o.ZP,{item:!0,xs:1},n.createElement(r.Z,{primary:"Category",secondary:"".concat(null!==(v=null===(b=p.vehicleCategories.find((function(e){var l;return e.value==(null==C||null===(l=C.vehicle)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.category)})))||void 0===b?void 0:b.label)&&void 0!==v?v:"Unknown")})),n.createElement(o.ZP,{item:!0,xs:2},n.createElement(r.Z,{primary:"Sale Price",secondary:"".concat(s.A3.format(null==C?void 0:C.salePrice)," (").concat(s.A3.format(null==C?void 0:C.commission),")")})),n.createElement(o.ZP,{item:!0,xs:2},n.createElement(r.Z,{primary:"Seller",secondary:"".concat(null==C||null===(f=C.seller)||void 0===f?void 0:f.First," ").concat(null==C||null===(E=C.seller)||void 0===E?void 0:E.Last," (").concat(null==C||null===(Z=C.seller)||void 0===Z?void 0:Z.SID,")")})),n.createElement(o.ZP,{item:!0,xs:2},n.createElement(r.Z,{primary:"Buyer",secondary:"".concat(null==C||null===(x=C.buyer)||void 0===x?void 0:x.First," ").concat(null==C||null===(h=C.buyer)||void 0===h?void 0:h.Last," (").concat(null==C||null===(P=C.buyer)||void 0===P?void 0:P.SID,")")})),n.createElement(o.ZP,{item:!0,xs:2},n.createElement(r.Z,{primary:"Time",secondary:n.createElement(m(),{unix:!0,date:null==C?void 0:C.time,fromNow:!0})}),n.createElement(c.Z,{onClick:function(e){var l;e.stopPropagation(),S(null==C||null===(l=C.vehicle)||void 0===l?void 0:l.VIN)}},n.createElement(i.Z,null,n.createElement(d.G,{icon:["fas","magnifying-glass"]}))))))}}}]);