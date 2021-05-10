(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(152)),o=(a(155),a(156),{id:"class-dialog",title:"Dialog"}),l={unversionedId:"api/class-dialog",id:"api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [event Page.Dialog event.",source:"@site/docs/api/class-dialog.mdx",slug:"/api/class-dialog",permalink:"/csharp/docs/api/class-dialog",version:"current",sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/csharp/docs/api/class-consolemessage"},next:{title:"Download",permalink:"/csharp/docs/api/class-download"}},c=[{value:"Dialog.Accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"Dialog.DefaultValue()",id:"dialogdefaultvalue",children:[]},{value:"Dialog.Dismiss()",id:"dialogdismiss",children:[]},{value:"Dialog.Message()",id:"dialogmessage",children:[]},{value:"Dialog.Type()",id:"dialogtype",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#eventpagedialog"}),"event Page.Dialog")," event."),Object(i.b)("p",null,"An example of using ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#eventpagedialog"}),"event Page.Dialog")," listener. When listener is present, it ",Object(i.b)("strong",{parentName:"p"},"must")," either ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-dialog#dialogacceptprompttext"}),"Dialog.Accept([promptText])")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-dialog#dialogdismiss"}),"Dialog.Dismiss()")," the dialog - otherwise the page will ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-dialog#dialogacceptprompttext"}),"Dialog.Accept([promptText])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-dialog#dialogdefaultvalue"}),"Dialog.DefaultValue()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-dialog#dialogdismiss"}),"Dialog.Dismiss()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-dialog#dialogmessage"}),"Dialog.Message()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-dialog#dialogtype"}),"Dialog.Type()"))),Object(i.b)("h2",{id:"dialogacceptprompttext"},"Dialog.Accept(","[promptText]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(i.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(i.b)("p",null,"Returns when the dialog has been accepted."),Object(i.b)("h2",{id:"dialogdefaultvalue"},"Dialog.DefaultValue()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(i.b)("h2",{id:"dialogdismiss"},"Dialog.Dismiss()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(i.b)("p",null,"Returns when the dialog has been dismissed."),Object(i.b)("h2",{id:"dialogmessage"},"Dialog.Message()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"A message displayed in the dialog."),Object(i.b)("h2",{id:"dialogtype"},"Dialog.Type()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"Returns dialog's type, can be one of ",Object(i.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(i.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(i.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},151:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,g=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?n.a.createElement(g,l(l({ref:t},s),{},{components:a})):n.a.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var r=a(0),n=a(154);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)}}]);