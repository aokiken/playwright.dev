"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[28],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(7294),n=a(9443);var l=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var h=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,h=e.values,u=e.groupId,m=e.className,d=l(),k=d.tabGroupChoices,g=d.setTabGroupChoices,N=(0,r.useState)(n),w=N[0],f=N[1],y=r.Children.toArray(e.children),b=[];if(null!=u){var v=k[u];null!=v&&v!==w&&h.some((function(e){return e.value===v}))&&f(v)}var _=function(e){var t=e.currentTarget,a=b.indexOf(t),r=h[a].value;f(r),null!=u&&(g(u,r),setTimeout((function(){var e,a,r,n,l,i,o,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,i=window,o=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case p:var n=b.indexOf(e.target)-1;a=b[n]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:_,onClick:_},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},617:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"release-notes",title:"Release notes"}),o=void 0,s={unversionedId:"release-notes",id:"version-1.15/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.15",source:"@site/versioned_docs/version-1.15/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/python/docs/release-notes",version:"1.15",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.15/docs",previous:{title:"Supported languages",permalink:"/python/docs/languages"},next:{title:"Pytest plugin",permalink:"/python/docs/test-runners"}},p=[{value:"Version 1.15",id:"version-115",children:[{value:"\ud83d\uddb1\ufe0f Mouse Wheel",id:"\ufe0f-mouse-wheel",children:[]},{value:"\ud83d\udcdc New Headers API",id:"-new-headers-api",children:[]},{value:"\ud83c\udf08 Forced-Colors emulation",id:"-forced-colors-emulation",children:[]},{value:"New APIs",id:"new-apis",children:[]},{value:"Browser Versions",id:"browser-versions",children:[]}]},{value:"Version 1.14",id:"version-114",children:[{value:"Browser Versions",id:"browser-versions-1",children:[]}]},{value:"Version 1.13",id:"version-113",children:[]},{value:"Version 1.12",id:"version-112",children:[]},{value:"Version 1.11",id:"version-111",children:[]},{value:"Version 1.10",id:"version-110",children:[]},{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],c={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-115"},"Version 1.15")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-114"},"Version 1.14")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-111"},"Version 1.11")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-110"},"Version 1.10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-19"},"Version 1.9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-18"},"Version 1.8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-17"},"Version 1.7"))),(0,l.kt)("h2",{id:"version-115"},"Version 1.15"),(0,l.kt)("h3",{id:"\ufe0f-mouse-wheel"},"\ud83d\uddb1\ufe0f Mouse Wheel"),(0,l.kt)("p",null,"By using ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/api/class-mouse#mouse-wheel"},(0,l.kt)("inlineCode",{parentName:"a"},"Page.mouse.wheel"))," you are now able to scroll vertically or horizontally."),(0,l.kt)("h3",{id:"-new-headers-api"},"\ud83d\udcdc New Headers API"),(0,l.kt)("p",null,"Previously it was not possible to get multiple header values of a response. This is now  possible and additional helper functions are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-request#request-all-headers"},"Request.all_headers()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-request#request-headers-array"},"Request.headers_array()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-request#request-header-value"},"Request.header_value(name: str)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-response#response-all-headers"},"Response.all_headers()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-response#response-headers-array"},"Response.headers_array()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-response#response-header-value"},"Response.header_value(name: str)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-response/#response-header-values"},"Response.header_values(name: str)"))),(0,l.kt)("h3",{id:"-forced-colors-emulation"},"\ud83c\udf08 Forced-Colors emulation"),(0,l.kt)("p",null,"Its now possible to emulate the ",(0,l.kt)("inlineCode",{parentName:"p"},"forced-colors")," CSS media feature by passing it in the ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/api/class-browser#browser-new-context-option-forced-colors"},"context options")," or calling ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/api/class-page#page-emulate-media"},"Page.emulate_media()"),"."),(0,l.kt)("h3",{id:"new-apis"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-page#page-route"},"Page.route()")," accepts new ",(0,l.kt)("inlineCode",{parentName:"li"},"times")," option to specify how many times this route should be matched."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-page#page-set-checked"},"Page.set_checked(selector: str, checked: bool)")," and ",(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-locator#locator-set-checked"},"Locator.set_checked(selector: str, checked: bool)")," was introduced to set the checked state of a checkbox."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-request#request-sizes"},"Request.sizes()")," Returns resource size information for given http request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-tracing#tracing-start-chunk"},"BrowserContext.tracing.start_chunk()")," - Start a new trace chunk."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-tracing#tracing-stop-chunk"},"BrowserContext.tracing.stop_chunk()")," - Stops a new trace chunk.")),(0,l.kt)("h3",{id:"browser-versions"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 96.0.4641.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 92.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,l.kt)("h2",{id:"version-114"},"Version 1.14"),(0,l.kt)("h4",{id:"\ufe0f-new-strict-mode"},'\u26a1\ufe0f New "strict" mode'),(0,l.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,l.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,l.kt)("p",null,"Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"strict=true")," into your action calls to opt in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# This will throw if you have more than one button!\npage.click("button", strict=true)\n')),(0,l.kt)("h4",{id:"-new-locators-api"},"\ud83d\udccd New ",(0,l.kt)("a",{parentName:"h4",href:"./api/class-locator"},(0,l.kt)("strong",{parentName:"a"},"Locators API"))),(0,l.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,l.kt)("p",null,"The difference between the ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," and ",(0,l.kt)("a",{parentName:"p",href:"./api/class-elementhandle"},"ElementHandle")," is that the latter points to a particular element, while ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," captures the logic of how to retrieve that element."),(0,l.kt)("p",null,"Also, locators are ",(0,l.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("button")\nlocator.click()\n')),(0,l.kt)("p",null,"Learn more in the ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"documentation"),"."),(0,l.kt)("h4",{id:"\ud83e\udde9-experimental-react-and-vue-selector-engines"},"\ud83e\udde9 Experimental ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#react-selectors"},(0,l.kt)("strong",{parentName:"a"},"React"))," and ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#vue-selectors"},(0,l.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,l.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selectors")," and supports all attribute selector operators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.click("_react=SubmitButton[enabled=true]");\npage.click("_vue=submit-button[enabled=true]");\n')),(0,l.kt)("p",null,"Learn more in the ",(0,l.kt)("a",{parentName:"p",href:"./selectors#react-selectors"},"react selectors documentation")," and the ",(0,l.kt)("a",{parentName:"p",href:"./selectors#vue-selectors"},"vue selectors documentation"),"."),(0,l.kt)("h4",{id:"-new-nth-and-visible-selector-engines"},"\u2728 New ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#n-th-element-selector"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#selecting-visible-elements"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./selectors#n-th-element-selector"},(0,l.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./selectors#selecting-visible-elements"},(0,l.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# select the first button among all buttons\nbutton.click("button >> nth=0")\n# or if you are using locators, you can use first, nth() and last\npage.locator("button").first.click()\n\n# click a visible button\nbutton.click("button >> visible=true")\n')),(0,l.kt)("h3",{id:"browser-versions-1"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,l.kt)("h2",{id:"version-113"},"Version 1.13"),(0,l.kt)("h4",{id:"playwright"},"Playwright"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-drag-and-drop"},"page.drag_and_drop(source, target, **kwargs)")," API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,l.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),".")),(0,l.kt)("h4",{id:"tools"},"Tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,l.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,l.kt)("h4",{id:"new-and-overhauled-guides"},"New and Overhauled Guides"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/intro"},"Intro")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/auth"},"Authentication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/chrome-extensions"},"Chome Extensions"))),(0,l.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("h4",{id:"new-playwright-apis"},"New Playwright APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-response#response-security-details"},"response.security_details()")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-response#response-server-addr"},"response.server_addr()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-drag-and-drop"},"page.drag_and_drop(source, target, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-drag-and-drop"},"frame.drag_and_drop(source, target, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-cancel"},"download.cancel()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-input-value"},"page.input_value(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-input-value"},"frame.input_value(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-input-value"},"element_handle.input_value(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-fill"},"frame.fill(selector, value, **kwargs)"),", and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-fill"},"element_handle.fill(value, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-select-option"},"page.select_option(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-select-option"},"frame.select_option(selector, **kwargs)"),", and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-select-option"},"element_handle.select_option(**kwargs)"))),(0,l.kt)("h2",{id:"version-112"},"Version 1.12"),(0,l.kt)("h4",{id:"\ud83e\udddf\u2642\ufe0f-introducing-playwright-trace-viewer"},"\ud83e\udddf\u200d\u2642\ufe0f Introducing Playwright Trace Viewer"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/trace-viewer"},"Playwright Trace Viewer")," is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"page DOM before and after each Playwright action"),(0,l.kt)("li",{parentName:"ul"},"page rendering before and after each Playwright action"),(0,l.kt)("li",{parentName:"ul"},"browser network during script execution")),(0,l.kt)("p",null,"Traces are recorded using the new ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True)\n\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n')),(0,l.kt)("p",null,"Traces are examined later with the Playwright CLI:"),(0,l.kt)("p",null,"That will open the following GUI:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png",alt:"image"})),(0,l.kt)("p",null,"\ud83d\udc49 Read more in ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/trace-viewer"},"trace viewer documentation"),"."),(0,l.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,l.kt)("li",{parentName:"ul"},"Microsoft Edge 91")),(0,l.kt)("h4",{id:"new-apis-1"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reducedMotion")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-emulate-media"},"page.emulate_media(**kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-event-request"},'browser_context.on("request")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-event-request-failed"},'browser_context.on("requestfailed")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-event-request-finished"},'browser_context.on("requestfinished")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-event-response"},'browser_context.on("response")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tracesDir")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API namespace"),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-download#download-page"},"download.page")," method")),(0,l.kt)("h2",{id:"version-111"},"Version 1.11"),(0,l.kt)("p",null,"\ud83c\udfa5  New video: ",(0,l.kt)("a",{parentName:"p",href:"https://youtu.be/_Jla6DyuEu4"},"Playwright: A New Test Automation Framework for the Modern Web")," (",(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"},"slides"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We talked about Playwright"),(0,l.kt)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),(0,l.kt)("li",{parentName:"ul"},"Did live demos with new features \u2728"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Special thanks")," to ",(0,l.kt)("a",{parentName:"li",href:"http://applitools.com/"},"applitools")," for hosting the event and inviting us!")),(0,l.kt)("h4",{id:"browser-versions-4"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("h4",{id:"new-apis-2"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"support for ",(0,l.kt)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-wait-for-request"},"page.expect_request(url_or_predicate, **kwargs)")," and others"),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),(0,l.kt)("li",{parentName:"ul"},"new methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-wait-for-url"},"page.wait_for_url(url, **kwargs)")," to await navigations to URL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-video#video-delete"},"video.delete()")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-video#video-save-as"},"video.save_as(path)")," to manage screen recording"))),(0,l.kt)("li",{parentName:"ul"},"new options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"screen")," option in the ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," method to emulate ",(0,l.kt)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"position")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-check"},"page.check(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-uncheck"},"page.uncheck(selector, **kwargs)")," methods"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-check"},"page.check(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-uncheck"},"page.uncheck(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-click"},"page.click(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-dblclick"},"page.dblclick(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-hover"},"page.hover(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-tap"},"page.tap(selector, **kwargs)"))))),(0,l.kt)("h2",{id:"version-110"},"Version 1.10"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java v1.10")," is ",(0,l.kt)("strong",{parentName:"li"},"now stable"),"!"),(0,l.kt)("li",{parentName:"ul"},"Run Playwright against ",(0,l.kt)("strong",{parentName:"li"},"Google Chrome")," and ",(0,l.kt)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",(0,l.kt)("a",{parentName:"li",href:"./browsers"},"new channels API"),"."),(0,l.kt)("li",{parentName:"ul"},"Chromium screenshots are ",(0,l.kt)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),(0,l.kt)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Google Chrome 89"),(0,l.kt)("li",{parentName:"ul"},"Microsoft Edge 89")),(0,l.kt)("h4",{id:"new-apis-3"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./api/class-browsertype#browsertypelaunchoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",(0,l.kt)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",(0,l.kt)("a",{parentName:"li",href:"./browsers"},"our documentation"),".")),(0,l.kt)("h2",{id:"version-19"},"Version 1.9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/inspector"},"Playwright Inspector")," is a ",(0,l.kt)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),(0,l.kt)("li",{parentName:"ul"},"Author new scripts by ",(0,l.kt)("strong",{parentName:"li"},"recording user actions"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Pause script execution")," with ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-pause"},"page.pause()")," in headed mode. Pausing the page launches ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/inspector"},"Playwright Inspector")," for debugging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",(0,l.kt)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",(0,l.kt)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/selectors#text-selector"},"more examples"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",(0,l.kt)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/dialogs"},"Learn more")," about this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Playwright for Python")," is ",(0,l.kt)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/docker"},"Docker image")," to run tests in CI/CD.")),(0,l.kt)("h4",{id:"browser-versions-5"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,l.kt)("h4",{id:"new-apis-4"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-pause"},"page.pause()"),".")),(0,l.kt)("h2",{id:"version-18"},"Version 1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/python/docs/selectors#selecting-elements-based-on-layout"},"Selecting elements based on layout")," with ",(0,l.kt)("inlineCode",{parentName:"p"},":left-of()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":right-of()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":above()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},":below()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Playwright now includes ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/cli"},"command line interface"),", former playwright-cli."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright --help\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-select-option"},"page.select_option(selector, **kwargs)")," now waits for the options to be present.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New methods to ",(0,l.kt)("a",{parentName:"p",href:"./actionability#assertions"},"assert element state")," like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-is-editable"},"page.is_editable(selector, **kwargs)"),"."))),(0,l.kt)("h4",{id:"new-apis-5"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-disabled"},"element_handle.is_disabled()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-editable"},"element_handle.is_editable()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-enabled"},"element_handle.is_enabled()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-hidden"},"element_handle.is_hidden()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-visible"},"element_handle.is_visible()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-disabled"},"page.is_disabled(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-editable"},"page.is_editable(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-enabled"},"page.is_enabled(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-hidden"},"page.is_hidden(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},"New option ",(0,l.kt)("inlineCode",{parentName:"li"},"'editable'")," in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-wait-for-element-state"},"element_handle.wait_for_element_state(state, **kwargs)"),".")),(0,l.kt)("h4",{id:"browser-versions-6"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,l.kt)("h2",{id:"version-17"},"Version 1.7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New Java SDK"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java")," is now on par with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"JavaScript"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python")," and ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},".NET bindings"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/selectors"},"new CSS extensions")," and there's more coming soon."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New website"),": The docs website at ",(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"playwright.dev")," has been updated and is now built with ",(0,l.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/"},"Docusaurus"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),(0,l.kt)("h4",{id:"new-apis-6"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," to get current state for later reuse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"storageState")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")," to setup browser context state.")),(0,l.kt)("h4",{id:"browser-versions-7"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")))}h.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);