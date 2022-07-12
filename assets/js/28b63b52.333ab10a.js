"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4498],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),g=m(a),o=r,N=g["".concat(d,".").concat(o)]||g[o]||k[o]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2974:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return o},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={title:"Drawing Shapes",sidebar_position:1},d=void 0,m={unversionedId:"graphics/drawing-shapes",id:"graphics/drawing-shapes",title:"Drawing Shapes",description:"For drawing shapes into the screen using code.",source:"@site/docs/graphics/drawing-shapes.md",sourceDirName:"graphics",slug:"/graphics/drawing-shapes",permalink:"/docs/graphics/drawing-shapes",editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/graphics/drawing-shapes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Drawing Shapes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Graphics",permalink:"/docs/category/graphics"},next:{title:"Text Mode (Printing)",permalink:"/docs/graphics/text-mode"}},u={},k=[{value:"<code>color</code>",id:"color",level:2},{value:"Set the active color",id:"set-the-active-color",level:3},{value:"Get the active color",id:"get-the-active-color",level:3},{value:"<code>clear</code>",id:"clear",level:2},{value:"<code>point</code>",id:"point",level:2},{value:"<code>line</code>",id:"line",level:2},{value:"<code>circle</code>",id:"circle",level:2},{value:"<code>ellipse</code>",id:"ellipse",level:2},{value:"<code>triangle</code>",id:"triangle",level:2},{value:"<code>rect</code>",id:"rect",level:2},{value:"<code>polygon</code>",id:"polygon",level:2}],g={toc:k};function o(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For drawing shapes into the screen using code."),(0,l.kt)("h2",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h2"},"color")),(0,l.kt)("h3",{id:"set-the-active-color"},"Set the active color"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"color(colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("h3",{id:"get-the-active-color"},"Get the active color"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"id = color()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"clear"},(0,l.kt)("inlineCode",{parentName:"h2"},"clear")),(0,l.kt)("p",null,"Clears the screen and fills it with a specific color, useful when clearing the screen for a new frame."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"clear(colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"point"},(0,l.kt)("inlineCode",{parentName:"h2"},"point")),(0,l.kt)("p",null,"Draws point(s) on the screen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"point(x, y, ..., colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"varargs")),(0,l.kt)("td",{parentName:"tr",align:null},"pairs of numbers which are coordinates for other points to draw in the same call.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"line"},(0,l.kt)("inlineCode",{parentName:"h2"},"line")),(0,l.kt)("p",null,"Draws line(s) on the screen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"line(x1, y1, x2, y2, ..., colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"varargs")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"circle"},(0,l.kt)("inlineCode",{parentName:"h2"},"circle")),(0,l.kt)("p",null,"Draws a circle on the screen."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The arguments can be passed in a table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"circle(centerX, centerY, radius, isOutlineOnly, colorId, segmentsCount)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"centerX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"centerY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"radius"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"isOutlineOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"segmentsCount"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"determined by system"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"ellipse"},(0,l.kt)("inlineCode",{parentName:"h2"},"ellipse")),(0,l.kt)("p",null,"Draws an ellipse on the screen."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The arguments can be passed in a table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"ellipse(centerX, centerY, radiusX, radiusY, isOutlineOnly, colorId, segmentsCount)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"centerX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"centerY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"radiusX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"radiusY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"isOutlineOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"segmentsCount"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"determined by system"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"triangle"},(0,l.kt)("inlineCode",{parentName:"h2"},"triangle")),(0,l.kt)("p",null,"Draws a triangle on the screen."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The arguments can be passed in a table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"triangle(x1, y1, x2, y2, x3, y3, l, c)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"first vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"first vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"second vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"second vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x3"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"third vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y3"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"third vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"isOutlineOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"rect"},(0,l.kt)("inlineCode",{parentName:"h2"},"rect")),(0,l.kt)("p",null,"Draws a rectangle on the screen."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The arguments can be passed in a table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"rect(x, y, width, height, isOutlineOnly, colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"isOutlineOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"polygon"},(0,l.kt)("inlineCode",{parentName:"h2"},"polygon")),(0,l.kt)("p",null,"Draws a polygon on the screen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"polygon(x1, y1, x2, y2, x3, y3, ..., colorId)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"first vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"first vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"second vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y2"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"second vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x3"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"third vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y3"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"third vertex.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"varargs")),(0,l.kt)("td",{parentName:"tr",align:null},"pairs of coordinates for other vertices of the polygon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"colorId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"active color"),(0,l.kt)("td",{parentName:"tr",align:null},"integer in range ",(0,l.kt)("inlineCode",{parentName:"td"},"[0, 15]"),".")))))}o.isMDXComponent=!0}}]);