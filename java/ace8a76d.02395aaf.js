(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(152)),c=(n(155),n(156),{id:"class-touchscreen",title:"Touchscreen"}),i={unversionedId:"api/class-touchscreen",id:"api/class-touchscreen",isDocsHomePage:!1,title:"Touchscreen",description:"The Touchscreen class operates in main-frame CSS pixels relative to the top-left corner of the viewport. Methods on the touchscreen can only be used in browser contexts that have been intialized with hasTouch set to true.",source:"@site/docs/api/class-touchscreen.mdx",slug:"/api/class-touchscreen",permalink:"/java/docs/api/class-touchscreen",version:"current",sidebar:"api",previous:{title:"TimeoutError",permalink:"/java/docs/api/class-timeouterror"},next:{title:"Video",permalink:"/java/docs/api/class-video"}},s=[{value:"Touchscreen.tap(x, y)",id:"touchscreentapx-y",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Touchscreen class operates in main-frame CSS pixels relative to the top-left corner of the viewport. Methods on the touchscreen can only be used in browser contexts that have been intialized with ",Object(o.b)("inlineCode",{parentName:"p"},"hasTouch")," set to true."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/api/class-touchscreen#touchscreentapx-y"}),"Touchscreen.tap(x, y)"))),Object(o.b)("h2",{id:"touchscreentapx-y"},"Touchscreen.tap(x, y)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">")),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"touchstart")," and ",Object(o.b)("inlineCode",{parentName:"p"},"touchend")," event with a single touch at the position (",Object(o.b)("inlineCode",{parentName:"p"},"x"),",",Object(o.b)("inlineCode",{parentName:"p"},"y"),")."))}l.isMDXComponent=!0},151:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";var r=n(0),a=n(154);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},155:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(153),c=n(151),i=n(55),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(r.useState)(i),O=v[0],y=v[1],j=r.Children.toArray(e.children);if(null!=b){var w=m[b];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&y(w)}var g=function(e){y(e),null!=b&&h(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},156:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);