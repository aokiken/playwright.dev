(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),s=(n(0),n(393)),o=n(396),l=n(397),i={id:"test-fixtures",title:"Advanced: fixtures"},c={unversionedId:"test-fixtures",id:"test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/docs/test-fixtures.mdx",slug:"/test-fixtures",permalink:"/docs/next/test-fixtures",version:"current",sidebar:"docs",previous:{title:"Page Object Model",permalink:"/docs/next/test-pom"},next:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"}},u=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#introduction-to-fixtures"}),"Introduction to fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#test-fixtures"}),"Test fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#worker-fixtures"}),"Worker fixtures"))),Object(s.b)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),Object(s.b)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),Object(s.b)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),Object(s.b)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),Object(s.b)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",Object(s.b)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),Object(s.b)("h3",{id:"without-fixtures"},"Without fixtures"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// todo.spec.js\nconst { test } = require('playwright/test');\nconst { TodoPage } = require('./todo-page');\n\ndescribe('todo tests', () => {\n  let todoPage;\n\n  beforeEach(async ({ page }) => {\n    todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n  });\n\n  afterEach(async () => {\n    await todoPage.removeAll();\n  });\n\n  test('should add an item', async () => {\n    await todoPage.addToDo('my item');\n    // ...\n  });\n\n  test('should remove an item', async () => {\n    await todoPage.remove('item1');\n    // ...\n  });\n});\n")),Object(s.b)("h3",{id:"with-fixtures"},"With fixtures"),Object(s.b)(o.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// todo.spec.js\nconst base = require('playwright/test');\nconst { TodoPage } = require('./todo-page');\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test as base } from 'playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Extend basic test by providing a \"table\" fixture.\nconst test = base.extend<{ todoPage: TodoPage }>({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n")))),Object(s.b)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",Object(s.b)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),Object(s.b)("p",null,"There are two types of fixtures: ",Object(s.b)("inlineCode",{parentName:"p"},"test")," and ",Object(s.b)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),Object(s.b)("h2",{id:"test-fixtures"},"Test fixtures"),Object(s.b)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),Object(s.b)(o.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// hello.spec.js\nconst test = require('./hello');\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// hello.spec.ts\nimport test from './hello';\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n")))),Object(s.b)("p",null,"It uses fixtures ",Object(s.b)("inlineCode",{parentName:"p"},"hello")," and ",Object(s.b)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),Object(s.b)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",Object(s.b)("inlineCode",{parentName:"p"},"helloWorld")," uses ",Object(s.b)("inlineCode",{parentName:"p"},"hello"),"."),Object(s.b)(o.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// hello.js\nconst base = require('playwright/test');\n\n// Extend base test with fixtures \"hello\" and \"helloWorld\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nmodule.exports = base.test.extend({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// hello.ts\nimport base from 'playwright/test';\n\n// Define test fixtures \"hello\" and \"helloWorld\".\ntype TestFixtures = {\n  hello: string;\n  helloWorld: string;\n};\n\n// Extend base test with our fixtures.\nconst test = base.extend<TestFixtures>({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n\n// Now, this \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexport default test;\n")))),Object(s.b)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),Object(s.b)("h2",{id:"worker-fixtures"},"Worker fixtures"),Object(s.b)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",Object(s.b)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),Object(s.b)("p",null,"Here is how the test looks:"),Object(s.b)(o.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// express.spec.js\nconst test = require('./express-test');\nconst fetch = require('node-fetch');\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// express.spec.ts\nimport test from './express-test';\nimport fetch from 'node-fetch';\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n")))),Object(s.b)("p",null,"And here is how fixtures are declared and defined:"),Object(s.b)(o.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// express-test.js\nconst base = require('playwright/test');\nconst express = require('express');\n\n// Define \"port\" and \"express\" worker fixtures.\nmodule.exports = base.test.extend({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// express-test.ts\nimport { test as base } from 'playwright/test';\nimport express from 'express';\nimport type { Express } from 'express';\n\n// Declare worker fixtures.\ntype ExpressWorkerFixtures = {\n  port: number;\n  express: Express;\n};\n\n// Note that we did not provide an test-scoped fixtures, so we pass {}.\nconst test = base.extend<{}, ExpressWorkerFixtures>({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n\nexport default test;\n")))))}d.isMDXComponent=!0},392:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var r=n(0),a=n(395);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},396:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(394),o=n(392),l=n(55),i=n.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,f=Object(s.a)(),h=f.tabGroupChoices,m=f.setTabGroupChoices,x=Object(r.useState)(l),g=x[0],v=x[1],w=r.Children.toArray(e.children);if(null!=d){var j=h[d];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&v(j)}var y=function(e){v(e),null!=d&&m(d,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},397:function(e,t,n){"use strict";var r=n(3),a=n(0),s=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);