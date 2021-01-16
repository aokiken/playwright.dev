(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{341:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(0),a(600)),b=(a(604),a(605),{id:"actionability",title:"Actionability"}),i={unversionedId:"actionability",id:"actionability",isDocsHomePage:!1,title:"Actionability",description:"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button.",source:"@site/docs/actionability.mdx",slug:"/actionability",permalink:"/docs/next/actionability",version:"current",sidebar:"docs",previous:{title:"Supported languages",permalink:"/docs/next/languages"},next:{title:"Assertions",permalink:"/docs/next/assertions"}},l=[{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receiving events",id:"receiving-events",children:[]},{value:"Attached",id:"attached",children:[]}],O={toc:l};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button."),Object(r.b)("p",null,"Playwright waits until all the relevant actionability checks pass before performing an action. This means that action will fail with the ",Object(r.b)("inlineCode",{parentName:"p"},"TimeoutError")," if checks do not pass within the specified ",Object(r.b)("inlineCode",{parentName:"p"},"timeout"),"."),Object(r.b)("p",null,"Some actions like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," support ",Object(r.b)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",Object(r.b)("inlineCode",{parentName:"p"},"force")," to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," method will not check that the target element actually receives click events."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#attached",title:"Attached"}),"Attached")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#visible",title:"Visible"}),"Visible")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#stable",title:"Stable"}),"Stable")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#enabled",title:"Enabled"}),"Enabled")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"#editable",title:"Editable"}),"Editable")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"check"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"click"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dblclick"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tap"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uncheck"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hover"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scrollIntoViewIfNeeded"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenshot"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fill"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectText"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dispatchEvent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"focus"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getAttribute"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerText"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerHTML"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"press"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setInputFiles"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectOption"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"textContent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(r.b)("p",null,"You can check the actionability state of the element using one of the following methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleischecked"}),"elementHandle.isChecked()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisdisabled"}),"elementHandle.isDisabled()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleiseditable"}),"elementHandle.isEditable()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisenabled"}),"elementHandle.isEnabled()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleishidden"}),"elementHandle.isHidden()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisvisible"}),"elementHandle.isVisible()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageischeckedselector-options"}),"page.isChecked(selector[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisdisabledselector-options"}),"page.isDisabled(selector[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageiseditableselector-options"}),"page.isEditable(selector[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisenabledselector-options"}),"page.isEnabled(selector[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageishiddenselector-options"}),"page.isHidden(selector[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisvisibleselector-options"}),"page.isVisible(selector[, options])"))),Object(r.b)("h3",{id:"visible"},"Visible"),Object(r.b)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(r.b)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(r.b)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(r.b)("h3",{id:"stable"},"Stable"),Object(r.b)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(r.b)("h3",{id:"enabled"},"Enabled"),Object(r.b)("p",null,"Element is considered enabled when it is not a ",Object(r.b)("inlineCode",{parentName:"p"},"<button>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"<select>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"<input>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<textarea>")," with a ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(r.b)("h3",{id:"editable"},"Editable"),Object(r.b)("p",null,"Element is considered editable when it is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#enabled",title:"Enabled"}),"enabled")," and does not have ",Object(r.b)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(r.b)("h3",{id:"receiving-events"},"Receiving events"),Object(r.b)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(r.b)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(r.b)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(r.b)("h3",{id:"attached"},"Attached"),Object(r.b)("p",null,"Element is considered attached when it is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(r.b)("p",null,"Attached check differs between selector-based and handle-based actions, like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," as opposite to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-elementhandle#elementhandleclickoptions"}),"elementHandle.click([options])"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For selector-based actions, Playwright first waits for an element matching ",Object(r.b)("inlineCode",{parentName:"li"},"selector")," to be attached to the DOM, and then checks that element is still attached before performing the action. If element was detached, the action is retried from the start."),Object(r.b)("li",{parentName:"ul"},"For handle-based actions, Playwright throws if the element is not attached.")),Object(r.b)("p",null,"For example, consider a scenario where Playwright will click ",Object(r.b)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," call was made:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(r.b)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(r.b)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(r.b)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}p.isMDXComponent=!0},600:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=c.a.createContext({}),p=function(e){var t=c.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=p(e.components);return c.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),j=p(a),o=n,s=j["".concat(b,".").concat(o)]||j[o]||d[o]||r;return a?c.a.createElement(s,i(i({ref:t},O),{},{components:a})):c.a.createElement(s,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=o;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var O=2;O<r;O++)b[O]=a[O];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},601:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},602:function(e,t,a){"use strict";var n=a(0),c=a(603);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},603:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},604:function(e,t,a){"use strict";a(0),a(602),a(601),a(55)},605:function(e,t,a){"use strict";a(3),a(0)}}]);