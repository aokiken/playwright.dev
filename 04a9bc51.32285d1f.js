(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},393:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||l;return t?r.a.createElement(m,s(s({ref:a},o),{},{components:t})):r.a.createElement(m,s({ref:a},o))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<l;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},394:function(e,a,t){"use strict";var n=t(0),r=t(395);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},396:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(394),c=t(392),s=t(55),i=t.n(s),o=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,d=e.values,b=e.groupId,u=e.className,m=Object(l.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(s),O=j[0],g=j[1],v=n.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==O&&d.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=b&&f(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case o:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return N(a)},onClick:function(){N(a)}},t)}))),a?Object(n.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},397:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}},76:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(393)),c=(t(396),t(397),{id:"handles",title:"Handles"}),s={unversionedId:"handles",id:"version-1.10.0/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.10.0/handles.mdx",slug:"/handles",permalink:"/docs/1.10.0/handles",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Extensibility",permalink:"/docs/1.10.0/extensibility"},next:{title:"Input",permalink:"/docs/1.10.0/input"}},i=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],o={toc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),Object(l.b)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),Object(l.b)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),Object(l.b)("p",null,"Here is the easiest way to obtain a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const jsHandle = await page.evaluateHandle('window');\n//  Use jsHandle for evaluations.\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const ulElementHandle = await page.waitForSelector('ul');\n//  Use ulElementHandle for actions and evaluation.\n")),Object(l.b)("h2",{id:"element-handles"},"Element Handles"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," rather than using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),Object(l.b)("p",null,"When ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-frame#framewaitforselectorselector-options"}),"frame.waitForSelector(selector[, options])")," methods. These APIs wait for the element to be attached and visible."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nexpect(boundingBox.width).toBe(100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nexpect(classNames.includes('highlighted')).toBeTruthy();\n")),Object(l.b)("h2",{id:"handles-as-parameters"},"Handles as parameters"),Object(l.b)("p",null,"Handles can be passed into the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create new array in page.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get the length of the array.\nconst length = await page.evaluate(a => a.length, myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.evaluate(arg => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),Object(l.b)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),Object(l.b)("p",null,"Handles can be acquired using the page methods such as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageselector"}),"page.$(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageselector-1"}),"page.$$(selector)")," or their frame counterparts ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-frame#frameevaluatehandlepagefunction-arg"}),"frame.evaluateHandle(pageFunction[, arg])"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-frame#frameselector"}),"frame.$(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-frame#frameselector-1"}),"frame.$$(selector)"),". Once created, handles will retain object from ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-jshandle#jshandledispose"}),"jsHandle.dispose()")," method."),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandleboundingbox"}),"elementHandle.boundingBox()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandlegetattributename"}),"elementHandle.getAttribute(name)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnertext"}),"elementHandle.innerText()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnerhtml"}),"elementHandle.innerHTML()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandletextcontent"}),"elementHandle.textContent()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-jshandle#jshandleevaluatepagefunction-arg"}),"jsHandle.evaluate(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageselector"}),"page.$(selector)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageselector-1"}),"page.$$(selector)"))))}p.isMDXComponent=!0}}]);