(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),s=(a(0),a(393)),c=a(396),l=a(397),o={id:"test-intro",title:"Introduction"},i={unversionedId:"test-intro",id:"test-intro",isDocsHomePage:!1,title:"Introduction",description:"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:",source:"@site/docs/test-intro.mdx",slug:"/test-intro",permalink:"/docs/next/test-intro",version:"current",sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/videos"},next:{title:"Annotations",permalink:"/docs/next/test-annotations"}},b=[{value:"Installation",id:"installation",children:[]},{value:"First test",id:"first-test",children:[]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Test and assertion features",id:"test-and-assertion-features",children:[{value:"Focus a test",id:"focus-a-test",children:[]},{value:"Skip a test",id:"skip-a-test",children:[]},{value:"Group tests",id:"group-tests",children:[]},{value:"Use test hooks",id:"use-test-hooks",children:[]},{value:"Write assertions",id:"write-assertions",children:[]}]},{value:"Learn the command line",id:"learn-the-command-line",children:[]},{value:"Create a configuration file",id:"create-a-configuration-file",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Run tests across all browsers."),Object(s.b)("li",{parentName:"ul"},"Execute tests in parallel."),Object(s.b)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),Object(s.b)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),Object(s.b)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),Object(s.b)("br",null),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#first-test"}),"First test")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#test-fixtures"}),"Test fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#test-and-assertion-features"}),"Test and assertion features")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#learn-the-command-line"}),"Learn the command line")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-configuration-file"}),"Create a configuration file"))),Object(s.b)("br",null),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("p",null,"Playwright already includes a test runner for end-to-end tests."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(s.b)("h2",{id:"first-test"},"First test"),Object(s.b)("p",null,"Create ",Object(s.b)("inlineCode",{parentName:"p"},"tests/foo.spec.js")," (or ",Object(s.b)("inlineCode",{parentName:"p"},"tests/foo.spec.ts")," for TypeScript) to define your test."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const name = await page.innerText('.navbar__title');\n  expect(name).toBe('Playwright');\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from 'playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const name = await page.innerText('.navbar__title');\n  expect(name).toBe('Playwright');\n});\n")))),Object(s.b)("p",null,"Now run your tests, assuming that test files are in the ",Object(s.b)("inlineCode",{parentName:"p"},"tests")," directory."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test -c tests\n")),Object(s.b)("p",null,"Playwright Test just ran a test using Chromium browser, in a headless manner. Let's tell it to use headed browser:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test -c tests --headed\n")),Object(s.b)("p",null,"What about other browsers? Let's run the same test using Firefox:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test -c tests --browser=firefox\n")),Object(s.b)("p",null,"And finally, on all three browsers:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test -c tests --browser=all\n")),Object(s.b)("p",null,"Refer to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration")," section for configuring test runs in different modes with different browsers."),Object(s.b)("h2",{id:"test-fixtures"},"Test fixtures"),Object(s.b)("p",null,"You noticed an argument ",Object(s.b)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"test('basic test', async ({ page }) => {\n  ...\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"test('basic test', async ({ page }) => {\n  ...\n")))),Object(s.b)("p",null,"We call these arguments ",Object(s.b)("inlineCode",{parentName:"p"},"fixtures"),". Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test."),Object(s.b)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Fixture"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"page"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/class-page",title:"Page"}),"Page")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Isolated page for this test run.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"context"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Isolated context for this test run. The ",Object(s.b)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/test-configuration"}),"configure context"),".")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"browser"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/class-browser",title:"Browser"}),"Browser")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Browsers are shared across tests to optimize resources. Learn how to ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/test-configuration"}),"configure browser"),".")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"browserName"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the browser currently running the test. Either ",Object(s.b)("inlineCode",{parentName:"td"},"chromium"),", ",Object(s.b)("inlineCode",{parentName:"td"},"firefox")," or ",Object(s.b)("inlineCode",{parentName:"td"},"webkit"),".")))),Object(s.b)("h2",{id:"test-and-assertion-features"},"Test and assertion features"),Object(s.b)("p",null,"If you are familiar with test runners like Jest, Mocha and Ava, you will find the Playwright Test syntax familiar. These are the basic things you can do with the test:"),Object(s.b)("h3",{id:"focus-a-test"},"Focus a test"),Object(s.b)("p",null,"You can focus some tests. When there are focused tests, only they run."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n")))),Object(s.b)("h3",{id:"skip-a-test"},"Skip a test"),Object(s.b)("p",null,"You can skip certain test based on the condition."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n")))),Object(s.b)("h3",{id:"group-tests"},"Group tests"),Object(s.b)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('playwright/test');\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from 'playwright/test';\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n")))),Object(s.b)("h3",{id:"use-test-hooks"},"Use test hooks"),Object(s.b)("p",null,"You can use ",Object(s.b)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",Object(s.b)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",Object(s.b)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",Object(s.b)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('playwright/test');\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://my.start.url/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    expect(page.url()).toBe('https://my.start.url/');\n  });\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from 'playwright/test';\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://my.start.url/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    expect(page.url()).toBe('https://my.start.url/');\n  });\n});\n")))),Object(s.b)("h3",{id:"write-assertions"},"Write assertions"),Object(s.b)("p",null,"Playwright Test uses ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),"expect")," library for test assertions. It provides a lot of matchers like ",Object(s.b)("inlineCode",{parentName:"p"},"toEqual"),", ",Object(s.b)("inlineCode",{parentName:"p"},"toContain"),", ",Object(s.b)("inlineCode",{parentName:"p"},"toMatch"),", ",Object(s.b)("inlineCode",{parentName:"p"},"toMatchSnapshot")," and many more."),Object(s.b)("p",null,"Combine ",Object(s.b)("inlineCode",{parentName:"p"},"expect")," with various Playwright methods to create expectations for your test:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisvisibleselector-options"}),"page.isVisible(selector[, options])")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagetextcontentselector-options"}),"page.textContent(selector[, options])")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagegetattributeselector-name-options"}),"page.getAttribute(selector, name[, options])")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagescreenshotoptions"}),"page.screenshot([options])")),Object(s.b)("li",{parentName:"ul"},"Find out more in the ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/assertions"}),"assertions")," guide")),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('playwright/test');\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  expect(await page.title()).toContain('Playwright');\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  expect(await page.getAttribute('text=Get Started', 'href')).toBe('/docs/intro');\n\n  // Expect an element \"to be visible\".\n  expect(await page.isVisible('[aria-label=\"GitHub repository\"]')).toBe(true);\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  expect(await page.waitForSelector('text=Getting Started')).toBeTruthy();\n\n  // Compare screenshot with a stored reference.\n  expect(await page.screenshot()).toMatchSnapshot('get-started.png');\n});\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from 'playwright/test';\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  expect(await page.title()).toContain('Playwright');\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  expect(await page.getAttribute('text=Get Started', 'href')).toBe('/docs/intro');\n\n  // Expect an element \"to be visible\".\n  expect(await page.isVisible('[aria-label=\"GitHub repository\"]')).toBe(true);\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  expect(await page.waitForSelector('text=Getting Started')).toBeTruthy();\n\n  // Compare screenshot with a stored reference.\n  expect(await page.screenshot()).toMatchSnapshot('get-started.png');\n});\n")))),Object(s.b)("h2",{id:"learn-the-command-line"},"Learn the command line"),Object(s.b)("p",null,"Here are the most common options available in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-cli"}),"command line"),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run tests in headed browsers"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --headed\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run tests in a particular browser"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --browser=webkit\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run tests in all browsers"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --browser=all\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run a single test file"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test tests/todo-page.spec.ts\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run a set of test files"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test tests/todo-page/ tests/landing-page/\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run a test with specific title"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'npx playwright test -g "add a todo item"\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run tests ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-parallel"}),"in parallel")," - that's the default"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Disable ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-parallel"}),"parallelization")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --workers=1\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Choose a ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-reporters"}),"reporter")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --reporter=dot\n")))),Object(s.b)("h2",{id:"create-a-configuration-file"},"Create a configuration file"),Object(s.b)("p",null,"So far, we've looked at the zero-config operation of Playwright Test. For a real world application, it is likely that you would want to use a config."),Object(s.b)("p",null,"Create ",Object(s.b)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",Object(s.b)("inlineCode",{parentName:"p"},"playwright.config.ts"),") to configure your tests. You can specify browser launch options, run tests in multiple browsers and much more with the config. Here is an example configuration that runs every test in Chromium, Firefox and WebKit. Look for more options in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration section"),"."),Object(s.b)(c.a,{groupId:"js-flavor",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // Each test is given 30 seconds.\n  timeout: 30000,\n\n  use: {\n    // Run browsers in the headless mode.\n    headless: true,\n\n    // Specify the viewport size.\n    viewport: { width: 1280, height: 720 },\n  },\n};\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { PlaywrightTestConfig } from 'playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Each test is given 30 seconds.\n  timeout: 30000,\n\n  use: {\n    // Run browsers in the headless mode.\n    headless: true,\n\n    // Specify the viewport size.\n    viewport: { width: 1280, height: 720 },\n  },\n};\nexport default config;\n")))),Object(s.b)("p",null,"Configure NPM script to run tests. Test runner will automatically pick up ",Object(s.b)("inlineCode",{parentName:"p"},"playwright.config.js")," or ",Object(s.b)("inlineCode",{parentName:"p"},"playwright.config.ts"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "npx playwright test"\n  }\n}\n')),Object(s.b)("p",null,"If you put your configuration file in a different place, pass it with ",Object(s.b)("inlineCode",{parentName:"p"},"--config")," option."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "npx playwright test --config=tests/example.config.js"\n  }\n}\n')))}u.isMDXComponent=!0},392:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=b(a),j=n,m=p["".concat(c,".").concat(j)]||p[j]||u[j]||s;return a?r.a.createElement(m,l(l({ref:t},i),{},{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<s;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var n=a(0),r=a(395);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},396:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(394),c=a(392),l=a(55),o=a.n(l),i=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,j=e.className,m=Object(s.a)(),d=m.tabGroupChoices,O=m.setTabGroupChoices,g=Object(n.useState)(l),f=g[0],h=g[1],y=n.Children.toArray(e.children);if(null!=u){var N=d[u];null!=N&&N!==f&&p.some((function(e){return e.value===N}))&&h(N)}var w=function(e){h(e),null!=u&&O(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},j)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},397:function(e,t,a){"use strict";var n=a(3),r=a(0),s=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);