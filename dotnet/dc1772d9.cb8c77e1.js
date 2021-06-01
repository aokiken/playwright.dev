(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(163)),l=(a(166),a(167),{id:"assertions",title:"Assertions"}),s={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",slug:"/assertions",permalink:"/dotnet/docs/assertions",version:"current",sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/dotnet/docs/actionability"},next:{title:"Authentication",permalink:"/dotnet/docs/auth"}},i=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],o={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#text-content"}),"Text content")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-text"}),"Inner text")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#js-expression"}),"JS expression")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#visibility"}),"Visibility")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(c.b)("h2",{id:"text-content"},"Text content"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var content = await page.TextContentAsync("nav:first-child");\nAssert.Equals("home", content);\n')),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagetextcontentasyncselector-options"}),"Page.TextContentAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandletextcontentasync"}),"ElementHandle.TextContentAsync()"))),Object(c.b)("h2",{id:"inner-text"},"Inner text"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var content = await page.InnerTextAsync(".selected");\nAssert.Equals("value", content);\n')),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageinnertextasyncselector-options"}),"Page.InnerTextAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleinnertextasync"}),"ElementHandle.InnerTextAsync()"))),Object(c.b)("h2",{id:"attribute-value"},"Attribute value"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var value = await page.GetAttributeAsync("input", "alt");\nAssert.Equals("Text", value);\n')),Object(c.b)("h2",{id:"checkbox-state"},"Checkbox state"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var checked = await page.IsCheckedAsync("input");\nAssert.True(checked);\n')),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageischeckedasyncselector-options"}),"Page.IsCheckedAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleischeckedasync"}),"ElementHandle.IsCheckedAsync()"))),Object(c.b)("h2",{id:"js-expression"},"JS expression"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var content = await page.EvalOnSelectorAsync("nav:first-child", "e => e.textContent");\nAssert.Equals("home", content);\n')),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageevalonselectorasyncselector-expression-arg"}),"Page.EvalOnSelectorAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandleevaluateasyncexpression-arg"}),"JsHandle.EvaluateAsync(expression, arg)"))),Object(c.b)("h2",{id:"inner-html"},"Inner HTML"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var html = await page.InnerHTMLAsync("div.result");\nAssert.Equals(html, "<p>Result</p>");\n')),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageinnerhtmlasyncselector-options"}),"Page.InnerHTMLAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleinnerhtmlasync"}),"ElementHandle.InnerHTMLAsync()"))),Object(c.b)("h2",{id:"visibility"},"Visibility"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var visibility = await page.IsVisibleAsync("input");\nAssert.True(visibility);\n')),Object(c.b)("h3",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageisvisibleasyncselector-options"}),"Page.IsVisibleAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleisvisibleasync"}),"ElementHandle.IsVisibleAsync()"))),Object(c.b)("h2",{id:"enabled-state"},"Enabled state"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var enabled = await page.IsEnabledAsync("input");\nAssert.True(enabled);\n')),Object(c.b)("h3",{id:"api-reference-6"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageisenabledasyncselector-options"}),"Page.IsEnabledAsync(selector, options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleisenabledasync"}),"ElementHandle.IsEnabledAsync()"))),Object(c.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(c.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'// Assert local storage value\nvar userId = await page.EvaluateAsync<string>("() => window.localStorage.getItem(\'userId\')");\nAssert.NotNull(userId);\n\n// Assert value for input element\nawait page.WaitForSelectorAsync("#search");\nvar value = await page.EvalOnSelectorAsync("#search", "el => el.value");\nAssert.Equals("query", value);\n\n// Assert computed style\nvar fontSize = await page.EvalOnSelectorAsync<string>("div", "el => window.getComputedStyle(el).fontSize");\nAssert.Equals("16px", fontSize);\n\n// Assert list length\nvar length = await page.EvalOnSelectorAllAsync<int>("li.selected", "items => items.length");\nAssert.Equals(3, length);\n')),Object(c.b)("h3",{id:"api-reference-7"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageevaluateasyncexpression-arg"}),"Page.EvaluateAsync(expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageevalonselectorasyncselector-expression-arg"}),"Page.EvalOnSelectorAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageevalonselectorallasyncselector-expression-arg"}),"Page.EvalOnSelectorAllAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-frame#frameevaluateasyncexpression-arg"}),"Frame.EvaluateAsync(expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-frame#frameevalonselectorasyncselector-expression-arg"}),"Frame.EvalOnSelectorAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-frame#frameevalonselectorallasyncselector-expression-arg"}),"Frame.EvalOnSelectorAllAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleevalonselectorasyncselector-expression-arg"}),"ElementHandle.EvalOnSelectorAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleevalonselectorallasyncselector-expression-arg"}),"ElementHandle.EvalOnSelectorAllAsync(selector, expression, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"))))}b.isMDXComponent=!0},162:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(O,s(s({ref:t},o),{},{components:a})):r.a.createElement(O,s({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},164:function(e,t,a){"use strict";var n=a(0),r=a(165);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},165:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},166:function(e,t,a){"use strict";a(0),a(164),a(162),a(53)},167:function(e,t,a){"use strict";a(3),a(0)}}]);