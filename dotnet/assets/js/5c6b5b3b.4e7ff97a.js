"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[137],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},1823:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"class-filechooser",title:"FileChooser"}),l=void 0,s={unversionedId:"api/class-filechooser",id:"version-1.12.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/versioned_docs/version-1.12.0/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/dotnet/docs/1.12.0/api/class-filechooser",version:"1.12.0",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.12.0/api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/1.12.0/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/1.12.0/api/class-frame"}},c=[{value:"FileChooser.Element",id:"file-chooser-element",children:[]},{value:"FileChooser.IsMultiple",id:"file-chooser-is-multiple",children:[]},{value:"FileChooser.Page",id:"file-chooser-page",children:[]},{value:"FileChooser.SetFilesAsync(files, options)",id:"file-chooser-set-files",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/api/class-page#page-event-file-chooser"},"event Page.FileChooser")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var fileChooser = await page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("temp.txt");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-filechooser#file-chooser-element"},"FileChooser.Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.IsMultiple")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-filechooser#file-chooser-page"},"FileChooser.Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-filechooser#file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"))),(0,a.kt)("h2",{id:"file-chooser-element"},"FileChooser.Element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,a.kt)("p",null,"Returns input element associated with this file chooser."),(0,a.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.IsMultiple"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,a.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,a.kt)("h2",{id:"file-chooser-page"},"FileChooser.Page"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-page",title:"Page"},"Page"),">")),(0,a.kt)("p",null,"Returns page this file chooser belongs to."),(0,a.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=net-5.0",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=net-5.0",title:"IEnumerable"},"IEnumerable"),"<",(0,a.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MimeType")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Buffer")," ","<","[byte","[","]]",">"," File content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"FileChooserSetFilesOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NoWaitAfter")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout")," ","<","[double]","?",">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.SetDefaultTimeout(timeout)")," or ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-page#page-set-default-timeout"},"Page.SetDefaultTimeout(timeout)")," methods."))),(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,a.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}u.isMDXComponent=!0}}]);