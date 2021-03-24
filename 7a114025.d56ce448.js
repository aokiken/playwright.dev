(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(3),r=a(7),n=(a(0),a(823)),l=(a(827),a(828),{id:"class-accessibility",title:"Accessibility"}),o={unversionedId:"api/class-accessibility",id:"version-1.8.0/api/class-accessibility",isDocsHomePage:!1,title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.8.0/api/class-accessibility.mdx",slug:"/api/class-accessibility",permalink:"/docs/1.8.0/api/class-accessibility",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"Playwright",permalink:"/docs/1.8.0/api/class-playwright"},next:{title:"Browser",permalink:"/docs/1.8.0/api/class-browser"}},c=[{value:"accessibility.snapshot(options)",id:"accessibilitysnapshotoptions",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),Object(n.b)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(n.b)("p",null,'Rendering engines of Chromium, Firefox and Webkit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),Object(n.b)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-accessibility#accessibilitysnapshotoptions"}),"accessibility.snapshot([options])"))),Object(n.b)("h2",{id:"accessibilitysnapshotoptions"},"accessibility.snapshot(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"interestingOnly")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Prune uninteresting nodes from the tree. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"root")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"> The root DOM element for the snapshot. Defaults to the whole page."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"role")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> The ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A human readable name for the node."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"value")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> The current value of the node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"description")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> An additional human readable description of the node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"keyshortcuts")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Keyboard shortcuts associated with this node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"roledescription")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A human readable alternative to the role, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"valuetext")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A description of the current value, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"disabled")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is disabled, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"expanded")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is expanded or collapsed, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"focused")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is focused, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"modal")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"multiline")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node text input supports multiline, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"multiselectable")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether more than one child can be selected, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"readonly")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is read only, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"required")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is required, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"selected")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is selected in its parent node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"checked")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),'|"mixed"> Whether the checkbox is checked, or "mixed", if applicable.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"pressed")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),'|"mixed"> Whether the toggle button is checked, or "mixed", if applicable.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"level")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> The level of a heading, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"valuemin")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> The minimum value in a node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"valuemax")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> The maximum value in a node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"autocomplete")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> What kind of autocomplete is supported by a control, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"haspopup")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> What kind of popup is currently being shown for a node, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"invalid")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Whether and in what way this node's value is invalid, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"orientation")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Whether the node is oriented horizontally or vertically, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"children")," <",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">> Child nodes, if any, if applicable.")))),Object(n.b)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",Object(n.b)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(n.b)("inlineCode",{parentName:"p"},"false"),"."))),Object(n.b)("p",null,"An example of dumping the entire accessibility tree:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),Object(n.b)("p",null,"An example of logging the focused node's name:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}b.isMDXComponent=!0},823:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},824:function(e,t,a){"use strict";function i(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},825:function(e,t,a){"use strict";var i=a(0),r=a(826);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,a){"use strict";var i=a(0),r=Object(i.createContext)(void 0);t.a=r},827:function(e,t,a){"use strict";a(0),a(825),a(824),a(55)},828:function(e,t,a){"use strict";a(3),a(0)}}]);