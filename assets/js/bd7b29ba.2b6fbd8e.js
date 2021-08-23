"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[44488],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=l(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(r),v=k[0],b=k[1],N=a.Children.toArray(e.children),y=[];if(null!=d){var x=h[d];null!=x&&x!==v&&u.some((function(e){return e.value===x}))&&b(x)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=u[n].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,l,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},17870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=(n(55064),n(58215),{id:"assertions",title:"Assertions"}),s=void 0,o={unversionedId:"assertions",id:"version-1.10.0/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.10.0/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/docs/1.10.0/assertions",version:"1.10.0",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.10.0/docs",previous:{title:"Auto-waiting",permalink:"/docs/1.10.0/actionability"},next:{title:"Authentication",permalink:"/docs/1.10.0/auth"}},c=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,l.kt)("h2",{id:"text-content"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pagetextcontentselector-options"},"page.textContent(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandletextcontent"},"elementHandle.textContent()"))),(0,l.kt)("h2",{id:"inner-text"},"Inner text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageinnertextselector-options"},"page.innerText(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnertext"},"elementHandle.innerText()"))),(0,l.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),(0,l.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageischeckedselector-options"},"page.isChecked(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleischecked"},"elementHandle.isChecked()"))),(0,l.kt)("h2",{id:"js-expression"},"JS expression"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.$eval('nav:first-child', e => e.textContent);\nexpect(content).toBe('home');\n")),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageevalselector-pagefunction-arg"},"page.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-jshandle#jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction[, arg])"))),(0,l.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageinnerhtmlselector-options"},"page.innerHTML(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnerhtml"},"elementHandle.innerHTML()"))),(0,l.kt)("h2",{id:"visibility"},"Visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageisvisibleselector-options"},"page.isVisible(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleisvisible"},"elementHandle.isVisible()"))),(0,l.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const enabled = await page.isEnabled('input');\nexpect(enabled).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-6"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageisenabledselector-options"},"page.isEnabled(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleisenabled"},"elementHandle.isEnabled()"))),(0,l.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,l.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nexpect(length === 3).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-7"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageevaluatepagefunction-arg"},"page.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageevalselector-pagefunction-arg"},"page.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageevalselector-pagefunction-arg-1"},"page.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-frame#frameevaluatepagefunction-arg"},"frame.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-frame#frameevalselector-pagefunction-arg"},"frame.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-frame#frameevalselector-pagefunction-arg-1"},"frame.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg"},"elementHandle.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg-1"},"elementHandle.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},"[EvaluationArgument]")))}u.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);