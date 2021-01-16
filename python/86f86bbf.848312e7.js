(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),o=t(7),r=(t(0),t(149)),l=t(152),c=t(153),i={id:"dialogs",title:"Dialogs"},s={unversionedId:"dialogs",id:"dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/docs/dialogs.mdx",slug:"/dialogs",permalink:"/python/docs/dialogs",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/python/docs/auth"},next:{title:"Downloads",permalink:"/python/docs/downloads"}},p=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],b={toc:p};function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright can interact with the web page dialogs such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),Object(r.b)("inlineCode",{parentName:"a"},"alert")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),Object(r.b)("inlineCode",{parentName:"a"},"confirm")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),Object(r.b)("inlineCode",{parentName:"a"},"prompt"))," as well as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),Object(r.b)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),Object(r.b)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),Object(r.b)("p",null,"You can register a dialog handler before the action that triggers the dialog to accept or decline it."),Object(r.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\npage.click("button")\n'))),Object(r.b)(c.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\nawait page.click("button")\n')))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If your action, be it ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluateexpression-options"}),"page.evaluate(expression, **options)")," or any other, results in a dialog, the action will stall until the dialog is handled. That's because dialogs in Web are modal and block further page execution until they are handled."))),Object(r.b)("p",null,"As a result, following snippet will never resolve:"),Object(r.b)("p",null,":::warn\nWRONG!\n:::"),Object(r.b)("p",null,":::warn\nWRONG!\n:::"),Object(r.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.click("button") # Will hang here\npage.on("dialog", lambda dialog: dialog.accept())\n'))),Object(r.b)(c.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.click("button") # Will hang here\npage.on("dialog", lambda dialog: dialog.accept())\n')))),Object(r.b)("h4",{id:"api-reference"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[",Object(r.b)("inlineCode",{parentName:"li"},"Dialog"),"]"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-dialog#dialogacceptoptions"}),"dialog.accept(**options)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-dialog#dialogdismiss"}),"dialog.dismiss()"))),Object(r.b)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),Object(r.b)("p",null,"When ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagecloseoptions"}),"page.close(**options)")," is invoked with the truthy ",Object(r.b)("inlineCode",{parentName:"p"},"run_before_unload")," value, it page runs its unload handlers. This is the only case when ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagecloseoptions"}),"page.close(**options)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),Object(r.b)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),Object(r.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\npage.close(run_before_unload=True)\n"))),Object(r.b)(c.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"async def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    await dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\nawait page.close(run_before_unload=True)\n")))))}d.isMDXComponent=!0},148:function(e,a,t){"use strict";function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.a=function(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}},149:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,c(c({ref:a},s),{},{components:t})):o.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},150:function(e,a,t){"use strict";var n=t(0),o=t(151);a.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,a,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);a.a=o},152:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(150),l=t(148),c=t(55),i=t.n(c),s=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,b=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(n.useState)(c),h=O[0],j=O[1],y=n.Children.toArray(e.children);if(null!=d){var v=g[d];null!=v&&v!==h&&b.some((function(e){return e.value===v}))&&j(v)}var N=function(e){j(e),null!=d&&f(d,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var a=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return N(a)},onClick:function(){N(a)}},t)}))),a?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},153:function(e,a,t){"use strict";var n=t(3),o=t(0),r=t.n(o);a.a=function(e){var a=e.children,t=e.hidden,o=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:o}),a)}}}]);