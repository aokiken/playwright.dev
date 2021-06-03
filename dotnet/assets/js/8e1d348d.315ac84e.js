(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1279],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,N=m["".concat(c,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(N,l(l({ref:t},o),{},{components:n})):a.createElement(N,l({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2585:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return o}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=(n(1395),n(8215),{id:"actionability",title:"Auto-waiting"}),s={unversionedId:"actionability",id:"actionability",isDocsHomePage:!1,title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/docs/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/dotnet/docs/actionability",version:"current",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"docs",previous:{title:"Release notes",permalink:"/dotnet/docs/release-notes"},next:{title:"Assertions",permalink:"/dotnet/docs/assertions"}},c=[{value:"Forcing actions",id:"forcing-actions",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Attached",id:"attached",children:[]},{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receives Events",id:"receives-events",children:[]}],p={toc:c};function o(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,i.kt)("p",null,"For example, for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"},"Page.ClickAsync(selector, options)"),", Playwright will ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#attached",title:"Attached"},"Attached")," to the DOM"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#stable",title:"Stable"},"Stable"),", as in not animating or completed animation"),(0,i.kt)("li",{parentName:"ul"},"element ",(0,i.kt)("a",{parentName:"li",href:"#receives-events",title:"Receives Events"},"Receives Events"),", as in not obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#enabled",title:"Enabled"},"Enabled"))),(0,i.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#attached",title:"Attached"},"Attached")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#stable",title:"Stable"},"Stable")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#receives-events",title:"Receives Events"},"Receives Events")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#enabled",title:"Enabled"},"Enabled")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#editable",title:"Editable"},"Editable")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"check"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"click"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dblclick"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tap"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"uncheck"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hover"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scrollIntoViewIfNeeded"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"screenshot"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fill"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dispatchEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"getAttribute"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerHTML"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"press"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"setInputFiles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectOption"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"forcing-actions"},"Forcing actions"),(0,i.kt)("p",null,"Some actions like ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"},"Page.ClickAsync(selector, options)")," support ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"},"Page.ClickAsync(selector, options)")," method will not check that the target element actually receives click events."),(0,i.kt)("h2",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleischeckedasync"},"ElementHandle.IsCheckedAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleisdisabledasync"},"ElementHandle.IsDisabledAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleiseditableasync"},"ElementHandle.IsEditableAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleisenabledasync"},"ElementHandle.IsEnabledAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleishiddenasync"},"ElementHandle.IsHiddenAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#elementhandleisvisibleasync"},"ElementHandle.IsVisibleAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageischeckedasyncselector-options"},"Page.IsCheckedAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageisdisabledasyncselector-options"},"Page.IsDisabledAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageiseditableasyncselector-options"},"Page.IsEditableAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageisenabledasyncselector-options"},"Page.IsEnabledAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageishiddenasyncselector-options"},"Page.IsHiddenAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#pageisvisibleasyncselector-options"},"Page.IsVisibleAsync(selector, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"attached"},"Attached"),(0,i.kt)("p",null,"Element is considered attached when it is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"},"connected")," to a Document or a ShadowRoot."),(0,i.kt)("h2",{id:"visible"},"Visible"),(0,i.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,i.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,i.kt)("h2",{id:"stable"},"Stable"),(0,i.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,i.kt)("h2",{id:"enabled"},"Enabled"),(0,i.kt)("p",null,"Element is considered enabled when it is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,i.kt)("h2",{id:"editable"},"Editable"),(0,i.kt)("p",null,"Element is considered editable when it is ",(0,i.kt)("a",{parentName:"p",href:"#enabled",title:"Enabled"},"enabled")," and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,i.kt)("h2",{id:"receives-events"},"Receives Events"),(0,i.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,i.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"},"Page.ClickAsync(selector, options)")," call was made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,i.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}o.isMDXComponent=!0}}]);