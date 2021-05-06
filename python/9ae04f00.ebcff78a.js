(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{227:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),i=(t(0),t(331)),l=t(334),o=t(335),c={id:"class-dialog",title:"Dialog"},s={unversionedId:"api/class-dialog",id:"version-1.9.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:'Dialog] objects are dispatched by page via the [page.on("dialog") event.',source:"@site/versioned_docs/version-1.9.0/api/class-dialog.mdx",slug:"/api/class-dialog",permalink:"/python/docs/1.9.0/api/class-dialog",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"ConsoleMessage",permalink:"/python/docs/1.9.0/api/class-consolemessage"},next:{title:"Download",permalink:"/python/docs/1.9.0/api/class-download"}},p=[{value:"dialog.accept(**kwargs)",id:"dialogacceptkwargs",children:[]},{value:"dialog.default_value",id:"dialogdefault_value",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message",id:"dialogmessage",children:[]},{value:"dialog.type",id:"dialogtype",children:[]}],d={toc:p};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page#pageondialog"}),'page.on("dialog")')," event."),Object(i.b)("p",null,"An example of using ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(i.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef handle_dialog(dialog):\n    print(dialog.message)\n    dialog.dismiss()\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),Object(i.b)(o.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def handle_dialog(dialog):\n    print(dialog.message)\n    await dialog.dismiss()\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page#pageondialog"}),'page.on("dialog")')," listener. When listener is present, it ",Object(i.b)("strong",{parentName:"p"},"must")," either ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-dialog#dialogacceptkwargs"}),"dialog.accept(**kwargs)")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")," the dialog - otherwise the page will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-dialog#dialogacceptkwargs"}),"dialog.accept(**kwargs)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-dialog#dialogdefault_value"}),"dialog.default_value")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-dialog#dialogmessage"}),"dialog.message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-dialog#dialogtype"}),"dialog.type"))),Object(i.b)("h2",{id:"dialogacceptkwargs"},"dialog.accept(**kwargs)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prompt_text")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(i.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.")),Object(i.b)("p",null,"Returns when the dialog has been accepted."),Object(i.b)("h2",{id:"dialogdefault_value"},"dialog.default_value"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(i.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(i.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(i.b)("p",null,"Returns when the dialog has been dismissed."),Object(i.b)("h2",{id:"dialogmessage"},"dialog.message"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(i.b)("p",null,"A message displayed in the dialog."),Object(i.b)("h2",{id:"dialogtype"},"dialog.type"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(i.b)("p",null,"Returns dialog's type, can be one of ",Object(i.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(i.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(i.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"prompt"),"."))}b.isMDXComponent=!0},330:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},331:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return g}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,g=d["".concat(l,".").concat(u)]||d[u]||b[u]||i;return t?r.a.createElement(g,o(o({ref:a},s),{},{components:t})):r.a.createElement(g,o({ref:a},s))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},332:function(e,a,t){"use strict";var n=t(0),r=t(333);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},333:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},334:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(332),l=t(330),o=t(53),c=t.n(o),s=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,d=e.values,b=e.groupId,u=e.className,g=Object(i.a)(),m=g.tabGroupChoices,f=g.setTabGroupChoices,h=Object(n.useState)(o),y=h[0],O=h[1],j=n.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==y&&d.some((function(e){return e.value===v}))&&O(v)}var w=function(e){O(e),null!=b&&f(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===a,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},t)}))),a?Object(n.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},335:function(e,a,t){"use strict";var n=t(3),r=t(0),i=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);