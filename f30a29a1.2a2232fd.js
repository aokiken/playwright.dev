(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return g}));var a=n(3),r=n(7),o=(n(0),n(393)),i=n(396),c=n(397),s={id:"test-pom",title:"Page Object Model"},l={unversionedId:"test-pom",id:"test-pom",isDocsHomePage:!1,title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/docs/test-pom.mdx",slug:"/test-pom",permalink:"/docs/next/test-pom",version:"current",sidebar:"docs",previous:{title:"Test retry",permalink:"/docs/next/test-retries"},next:{title:"Advanced: fixtures",permalink:"/docs/next/test-fixtures"}},p=[],u={toc:p};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),Object(o.b)("p",null,"We will create a ",Object(o.b)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",Object(o.b)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," object."),Object(o.b)(i.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// playwright-dev-page.js\nexports.PlaywrightDevPage = class PlaywrightDevPage {\n  constructor(page: Page) {\n    this.page = page;\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async toc() {\n    const text = await this.page.innerText('article ul');\n    return text.split('\\n').filter(line => !!line);\n  }\n\n  async getStarted() {\n    await this.page.click('text=Get started');\n    await this.page.waitForSelector(`text=Core concepts`);\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Core concepts');\n    await this.page.waitForSelector(`h1:has-text(\"Core concepts\")`);\n  }\n}\n"))),Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// playwright-dev-page.ts\nimport type { Page } from 'playwright';\n\nexport class PlaywrightDevPage {\n  readonly page: Page;\n\n  constructor(page: Page) {\n    this.page = page;\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async toc() {\n    const text = await this.page.innerText('article ul');\n    return text.split('\\n').filter(line => !!line);\n  }\n\n  async getStarted() {\n    await this.page.click('text=Get started');\n    await this.page.waitForSelector(`text=Core concepts`);\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Core concepts');\n    await this.page.waitForSelector(`h1:has-text(\"Core concepts\")`);\n  }\n}\n")))),Object(o.b)("p",null,"Now we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."),Object(o.b)(i.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('playwright/test');\nconst { PlaywrightDevPage } = require('./playwright-dev-page');\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  expect(await playwrightDev.toc()).toEqual([\n    'Installation',\n    'Usage',\n    'First script',\n    'Record scripts',\n    'TypeScript support',\n    'System requirements',\n    'Release notes'\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  expect(await playwrightDev.toc()).toEqual([\n    'Browser',\n    'Browser contexts',\n    'Pages and frames',\n    'Selectors',\n    'Auto-waiting',\n    'Execution contexts: Playwright and Browser',\n    'Evaluation Argument'\n  ]);\n});\n"))),Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from 'playwright/test';\nimport { PlaywrightDevPage } from './playwright-dev-page';\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  expect(await playwrightDev.toc()).toEqual([\n    'Installation',\n    'Usage',\n    'First script',\n    'Record scripts',\n    'TypeScript support',\n    'System requirements',\n    'Release notes'\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  expect(await playwrightDev.toc()).toEqual([\n    'Browser',\n    'Browser contexts',\n    'Pages and frames',\n    'Selectors',\n    'Auto-waiting',\n    'Execution contexts: Playwright and Browser',\n    'Evaluation Argument'\n  ]);\n});\n")))))}g.isMDXComponent=!0},392:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||g[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var a=n(0),r=n(395);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},396:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(394),i=n(392),c=n(55),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,g=e.groupId,b=e.className,m=Object(o.a)(),y=m.tabGroupChoices,d=m.setTabGroupChoices,f=Object(a.useState)(c),w=f[0],v=f[1],h=a.Children.toArray(e.children);if(null!=g){var j=y[g];null!=j&&j!==w&&u.some((function(e){return e.value===j}))&&v(j)}var O=function(e){v(e),null!=g&&d(g,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return O(t)},onClick:function(){O(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},397:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);