(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[4855],{20640:(e,t,o)=>{"use strict";var r=o(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,i,l,u,p=!1;t||(t={}),o=t.debug||!1;try{if(c=r(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(r){o&&console.error("unable to copy using execCommand: ",r),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){o&&console.error("unable to copy using clipboardData: ",r),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},74300:(e,t,o)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(o(67294)),a=i(o(20640)),c=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function f(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=b(e);if(t){var a=b(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,o)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,e);var t,o,r,i=y(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return m(d(e=i.call.apply(i,[this].concat(o))),"onClick",(function(t){var o=e.props,r=o.text,c=o.onCopy,i=o.children,l=o.options,u=n.default.Children.only(i),p=(0,a.default)(r,l);c&&c(r,p),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t)})),e}return t=l,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=p(e,c),r=n.default.Children.only(t);return n.default.cloneElement(r,u(u({},o),{},{onClick:this.onClick}))}}])&&f(t.prototype,o),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default.PureComponent);t.CopyToClipboard=v,m(v,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,t,o)=>{"use strict";var r=o(74300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);