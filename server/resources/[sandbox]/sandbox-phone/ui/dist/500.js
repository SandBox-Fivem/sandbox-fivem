"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[500],{50500:(e,t,n)=>{var i=n(67294),r=n(45697),o=n.n(r),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var l=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.state={},o.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},o.elements={},o.onResize=o.onResize.bind(o),o.onTruncate=o.onTruncate.bind(o),o.calcTargetWidth=o.calcTargetWidth.bind(o),o.measureWidth=o.measureWidth.bind(o),o.getLines=o.getLines.bind(o),o.renderLine=o.renderLine.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,i=document.createElement("canvas");this.canvasContext=i.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var i=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=t[n]),i}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,i=this.canvasContext,r=this.props.width;if(t){var o=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!o)return window.requestAnimationFrame((function(){return n(e)}));var s=window.getComputedStyle(t),a=[s["font-weight"],s["font-style"],s["font-size"],s["font-family"]].join(" ");i.font=a,this.setState({targetWidth:o},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,r=t.ellipsis,o=t.trimWhitespace,s=this.state.targetWidth,a=this.innerText,l=this.measureWidth,c=this.onTruncate,u=this.trimRight,h=[],p=a(e.text).split("\n").map((function(e){return e.split(" ")})),f=!0,d=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var v=p[0];if(0!==v.length){var y=v.join(" ");if(l(y)<=s&&1===p.length){f=!1,h.push(y);break}if(m===n){for(var g=v.join(" "),b=0,w=g.length-1;b<=w;){var T=Math.floor((b+w)/2);l(g.slice(0,T+1))+d<=s?b=T+1:w=T-1}var k=g.slice(0,b);if(o)for(k=u(k);!k.length&&h.length;){k=u(h.pop())}y=i.createElement("span",null,k,r)}else{for(var W=0,x=v.length-1;W<=x;){var E=Math.floor((W+x)/2);l(v.slice(0,E+1).join(" "))<=s?W=E+1:x=E-1}if(0===W){m=n-1;continue}y=v.slice(0,W).join(" "),p[0].splice(0,W)}h.push(y)}else h.push(),p.shift(),m--}return c(f),h}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return i.createElement("span",{key:t},e);var r=i.createElement("br",{key:t+"br"});return e?[i.createElement("span",{key:t},e),r]:r}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,r=n.children,o=n.ellipsis,a=n.lines,l=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,u=this.getLines,h=this.renderLine,p=this.onTruncate,f=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(a>0?f=u().map(h):(f=r,p(!1))),delete l.onTruncate,delete l.trimWhitespace,i.createElement("span",s({},l,{ref:function(t){e.elements.target=t}}),i.createElement("span",null,f),i.createElement("span",{ref:function(t){e.elements.text=t}},r),i.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},o))}}]),t}(i.Component);l.propTypes={children:o().node,ellipsis:o().node,lines:o().oneOfType([o().oneOf([!1]),o().number]),trimWhitespace:o().bool,width:o().number,onTruncate:o().func},l.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0}}}]);