"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,m=e.groupId,g=e.className,f=i(),d=f.tabGroupChoices,y=f.setTabGroupChoices,h=(0,r.useState)(o),b=h[0],v=h[1],k=r.Children.toArray(e.children),w=[];if(null!=m){var N=d[m];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&v(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;v(r),null!=m&&(y(m,r),setTimeout((function(){var e,n,r,o,i,a,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,l=a.innerHeight,c=a.innerWidth,n>=0&&i<=c&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},g)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},12305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=n(55064),l=n(58215),s={id:"extensibility",title:"Extensibility"},c=void 0,u={unversionedId:"extensibility",id:"version-1.9.0/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.9.0/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/python/docs/1.9.0/extensibility",version:"1.9.0",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.9.0/docs",previous:{title:"Emulation",permalink:"/python/docs/1.9.0/emulation"},next:{title:"Input",permalink:"/python/docs/1.9.0/input"}},p=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],m={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,i.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,i.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-selectors#selectorsregistername-kwargs"},"selectors.register(name, **kwargs)"),"."),(0,i.kt)("p",null,"Selector engine should have the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,i.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,i.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,i.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,i.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,i.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,i.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,i.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nplaywright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.query_selector("tag=button")\n\n# we can combine it with other selector engines using `>>` combinator.\npage.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = page.eval_on_selector_all("tag=button", buttons => buttons.length)\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nawait playwright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = await page.query_selector("tag=button")\n\n# we can combine it with other selector engines using `>>` combinator.\nawait page.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = await page.eval_on_selector_all("tag=button", buttons => buttons.length)\n')))))}g.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);