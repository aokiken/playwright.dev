(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(213)),i=(a(216),a(217),{id:"class-keyboard",title:"Keyboard"}),b={unversionedId:"api/class-keyboard",id:"api/class-keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(text[, options]), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/docs/api/class-keyboard.mdx",slug:"/api/class-keyboard",permalink:"/java/docs/next/api/class-keyboard",version:"current",sidebar:"api",previous:{title:"JSHandle",permalink:"/java/docs/next/api/class-jshandle"},next:{title:"Mouse",permalink:"/java/docs/next/api/class-mouse"}},p=[{value:"Keyboard.down(key)",id:"keyboarddownkey",children:[]},{value:"Keyboard.insertText(text)",id:"keyboardinserttexttext",children:[]},{value:"Keyboard.press(key, options)",id:"keyboardpresskey-options",children:[]},{value:"Keyboard.type(text, options)",id:"keyboardtypetext-options",children:[]},{value:"Keyboard.up(key)",id:"keyboardupkey",children:[]}],c={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardtypetext-options"}),"Keyboard.type(text[, options])"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),Object(o.b)("p",null,"For finer control, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboarddownkey"}),"Keyboard.down(key)"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardupkey"}),"Keyboard.up(key)"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardinserttexttext"}),"Keyboard.insertText(text)")," to manually fire events as if they were generated from a real keyboard."),Object(o.b)("p",null,"An example of holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.keyboard().type("Hello World!");\npage.keyboard().press("ArrowLeft");\npage.keyboard().down("Shift");\nfor (int i = 0; i < " World".length(); i++)\n  page.keyboard().press("ArrowLeft");\npage.keyboard().up("Shift");\npage.keyboard().press("Backspace");\n// Result text will end up saying "Hello!"\n')),Object(o.b)("p",null,"An example of pressing uppercase ",Object(o.b)("inlineCode",{parentName:"p"},"A")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.keyboard().press("Shift+KeyA");\n// or\npage.keyboard().press("Shift+A");\n')),Object(o.b)("p",null,"An example to trigger select-all with the keyboard"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// on Windows and Linux\npage.keyboard().press("Control+A");\n// on macOS\npage.keyboard().press("Meta+A");\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-keyboard#keyboarddownkey"}),"Keyboard.down(key)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-keyboard#keyboardinserttexttext"}),"Keyboard.insertText(text)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-keyboard#keyboardpresskey-options"}),"Keyboard.press(key[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-keyboard#keyboardtypetext-options"}),"Keyboard.type(text[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-keyboard#keyboardupkey"}),"Keyboard.up(key)"))),Object(o.b)("h2",{id:"keyboarddownkey"},"Keyboard.down(key)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),".")),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"keydown")," event."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(o.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(o.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"End"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(o.b)("p",null,"Following modification shortcuts are also supported: ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(o.b)("p",null,"Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardupkey"}),"Keyboard.up(key)"),"."),Object(o.b)("p",null,"After the key is pressed once, subsequent calls to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboarddownkey"}),"Keyboard.down(key)")," will have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardupkey"}),"Keyboard.up(key)"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO influence ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),Object(o.b)("h2",{id:"keyboardinserttexttext"},"Keyboard.insertText(text)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> Sets input to the specified text value.")),Object(o.b)("p",null,"Dispatches only ",Object(o.b)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",Object(o.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," or ",Object(o.b)("inlineCode",{parentName:"p"},"keypress")," events."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.keyboard().insertText("\u55e8");\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(o.b)("h2",{id:"keyboardpresskey-options"},"Keyboard.press(key","[, options]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," <",Object(o.b)("inlineCode",{parentName:"li"},"Keyboard.PressOptions"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setDelay")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),"> Time to wait between ",Object(o.b)("inlineCode",{parentName:"li"},"keydown")," and ",Object(o.b)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(o.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(o.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"End"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(o.b)("p",null,"Following modification shortcuts are also supported: ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(o.b)("p",null,"Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(o.b)("p",null,"Shortcuts such as ",Object(o.b)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Page page = browser.newPage();\npage.navigate("https://keycode.info");\npage.keyboard().press("A");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("A.png"));\npage.keyboard().press("ArrowLeft");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("ArrowLeft.png")));\npage.keyboard().press("Shift+O");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("O.png")));\nbrowser.close();\n')),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboarddownkey"}),"Keyboard.down(key)")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardupkey"}),"Keyboard.up(key)"),"."),Object(o.b)("h2",{id:"keyboardtypetext-options"},"Keyboard.type(text","[, options]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> A text to type into a focused element."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," <",Object(o.b)("inlineCode",{parentName:"li"},"Keyboard.TypeOptions"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setDelay")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),"> Time to wait between key presses in milliseconds. Defaults to 0.")))),Object(o.b)("p",null,"Sends a ",Object(o.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(o.b)("inlineCode",{parentName:"p"},"input"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(o.b)("p",null,"To press a special key, like ",Object(o.b)("inlineCode",{parentName:"p"},"Control")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-keyboard#keyboardpresskey-options"}),"Keyboard.press(key[, options])"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Types instantly\npage.keyboard().type("Hello");\n// Types slower, like a user\npage.keyboard().type("World", new Keyboard.TypeOptions().setDelay(100));\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(o.b)("h2",{id:"keyboardupkey"},"Keyboard.up(key)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),".")),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," event."))}l.isMDXComponent=!0},212:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(a),j=n,m=s["".concat(i,".").concat(j)]||s[j]||d[j]||o;return a?r.a.createElement(m,b(b({ref:t},c),{},{components:a})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},214:function(e,t,a){"use strict";var n=a(0),r=a(215);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},215:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},216:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(214),i=a(212),b=a(55),p=a.n(b),c=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,b=e.defaultValue,s=e.values,d=e.groupId,j=e.className,m=Object(o.a)(),O=m.tabGroupChoices,u=m.setTabGroupChoices,y=Object(n.useState)(b),h=y[0],N=y[1],f=n.Children.toArray(e.children);if(null!=d){var k=O[d];null!=k&&k!==h&&s.some((function(e){return e.value===k}))&&N(k)}var v=function(e){N(e),null!=d&&u(d,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},j)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},217:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);