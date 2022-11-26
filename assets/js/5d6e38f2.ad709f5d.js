"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8830],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(a),g=r,N=u["".concat(d,".").concat(g)]||u[g]||k[g]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7352:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"Printing Text",sidebar_position:3},i=void 0,p={unversionedId:"graphics/printing-text",id:"graphics/printing-text",title:"Printing Text",description:"For writing text on the screen.",source:"@site/docs/graphics/printing-text.md",sourceDirName:"graphics",slug:"/graphics/printing-text",permalink:"/docs/graphics/printing-text",draft:!1,editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/graphics/printing-text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Printing Text",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Drawing Sprites",permalink:"/docs/graphics/drawing-sprites"},next:{title:"Transformations",permalink:"/docs/graphics/transformations"}},d={},m=[{value:"<code>print</code>",id:"print",level:2},{value:"At a specific position on the screen with overflow wrapping",id:"at-a-specific-position-on-the-screen-with-overflow-wrapping",level:3},{value:"At a specific position on the screen without overflow wrapping",id:"at-a-specific-position-on-the-screen-without-overflow-wrapping",level:3},{value:"In a terminal fashion",id:"in-a-terminal-fashion",level:3},{value:"In a terminal fashion with a new line",id:"in-a-terminal-fashion-with-a-new-line",level:3},{value:"In a terminal fashion without wrapping nor new line",id:"in-a-terminal-fashion-without-wrapping-nor-new-line",level:3},{value:"<code>printBackspace</code>",id:"printbackspace",level:2},{value:"Delete the last character",id:"delete-the-last-character",level:3},{value:"Delete the last character without doing a carriage return",id:"delete-the-last-character-without-doing-a-carriage-return",level:3},{value:"<code>printCursor</code>",id:"printcursor",level:2},{value:"Set cursor position",id:"set-cursor-position",level:3},{value:"Get cursor position",id:"get-cursor-position",level:3},{value:"<code>wrapText</code>",id:"wraptext",level:2}],o={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For writing text on the screen."),(0,r.kt)("h2",{id:"print"},(0,r.kt)("inlineCode",{parentName:"h2"},"print")),(0,r.kt)("p",null,"Prints text to the screen."),(0,r.kt)("h3",{id:"at-a-specific-position-on-the-screen-with-overflow-wrapping"},"At a specific position on the screen with overflow wrapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"print(text, x, y, limit, align, rotation, scaleX, scaleY, originX, originY, shearX, shearY)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null},"wrap the line after this many horizontal pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"align"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'left'")),(0,r.kt)("td",{parentName:"tr",align:null},"enum:  ",(0,r.kt)("inlineCode",{parentName:"td"},"'left'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'center'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'right'"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"in radians.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"scaleX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"scaleY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"originX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"originY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"shearX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"shearY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"at-a-specific-position-on-the-screen-without-overflow-wrapping"},"At a specific position on the screen without overflow wrapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"print(text, x, y, false, false, rotation, scaleX, scaleY, originX, originY, scaleX, scaleY)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"in radians.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"scaleX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"scaleY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"originX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"originY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"shearX"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"shearY"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"in-a-terminal-fashion"},"In a terminal fashion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"print(text)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"in-a-terminal-fashion-with-a-new-line"},"In a terminal fashion with a new line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"print(text, false)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"in-a-terminal-fashion-without-wrapping-nor-new-line"},"In a terminal fashion without wrapping nor new line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"print(text, false, true)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"printbackspace"},(0,r.kt)("inlineCode",{parentName:"h2"},"printBackspace")),(0,r.kt)("p",null,"Deletes the last printed character via the 3rd and 4th variants of ",(0,r.kt)("inlineCode",{parentName:"p"},"print()"),", and it updates the cursor position."),(0,r.kt)("h3",{id:"delete-the-last-character"},"Delete the last character"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"printBackspace(colorId)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"active color"),(0,r.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,r.kt)("inlineCode",{parentName:"td"},"[-1, 15]")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," would indicate transparent background.")))),(0,r.kt)("h3",{id:"delete-the-last-character-without-doing-a-carriage-return"},"Delete the last character without doing a carriage return"),(0,r.kt)("p",null,"By default, a carriage return is done when the start of line is reached.\nThis disables that behaviour."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"printBackspace(colorId, true)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"active color"),(0,r.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,r.kt)("inlineCode",{parentName:"td"},"[-1, 15]")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," would indicate transparent background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2139\ufe0f literal"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"printcursor"},(0,r.kt)("inlineCode",{parentName:"h2"},"printCursor")),(0,r.kt)("p",null,"Change the print cursor position used by ",(0,r.kt)("inlineCode",{parentName:"p"},"print()")," when in terminal fashion."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The positions are on a characters grid, the size of the grid can be requested from ",(0,r.kt)("inlineCode",{parentName:"p"},"termSize()"),".")),(0,r.kt)("h3",{id:"set-cursor-position"},"Set cursor position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"printCursor(x, y, backgroundColorId)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"current postition"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"current position"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"backgroundColorId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"current background color"),(0,r.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,r.kt)("inlineCode",{parentName:"td"},"[-1, 15]")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," would indicate transparent background.")))),(0,r.kt)("h3",{id:"get-cursor-position"},"Get cursor position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"x, y, backgroundColorId = printCursor()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"backgroundColorId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,r.kt)("inlineCode",{parentName:"td"},"[-1, 15]")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," would indicate transparent background.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wraptext"},(0,r.kt)("inlineCode",{parentName:"h2"},"wrapText")),(0,r.kt)("p",null,"Get formatting information for text, given a wrap limit."),(0,r.kt)("p",null,"This function accounts for newlines correctly (i.e. '\\n')."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"width, wrappedText = wrapText(text, wrapLimit)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"wrapLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"the maximum width of the wrapped text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"wrappedText"),(0,r.kt)("td",{parentName:"tr",align:null},"table ",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"list of text lines.")))))}k.isMDXComponent=!0}}]);