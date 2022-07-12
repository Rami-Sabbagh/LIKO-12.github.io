"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2701],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),g=i,f=p["".concat(l,".").concat(g)]||p[g]||s[g]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={title:"GIF Recording"},l=void 0,d={unversionedId:"miscellaneous/gif-recording",id:"miscellaneous/gif-recording",title:"GIF Recording",description:"An integrated GIF recorder within LIKO-12.",source:"@site/docs/miscellaneous/gif-recording.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/gif-recording",permalink:"/docs/miscellaneous/gif-recording",editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/miscellaneous/gif-recording.md",tags:[],version:"current",frontMatter:{title:"GIF Recording"},sidebar:"tutorialSidebar",previous:{title:"Events System",permalink:"/docs/miscellaneous/events-system"},next:{title:"Host System",permalink:"/docs/miscellaneous/host-system"}},u={},s=[{value:"Control the GIF recorder with code",id:"control-the-gif-recorder-with-code",level:2},{value:"<code>isGifRecording</code>",id:"isgifrecording",level:3},{value:"<code>startGifRecording</code>",id:"startgifrecording",level:3},{value:"<code>pauseGifRecording</code>",id:"pausegifrecording",level:3},{value:"<code>endGifRecording</code>",id:"endgifrecording",level:3}],p={toc:s};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An integrated GIF recorder within LIKO-12."),(0,o.kt)("p",null,"Optimized to take some advantage of the low-resolution and limited colors' palette."),(0,o.kt)("h2",{id:"control-the-gif-recorder-with-code"},"Control the GIF recorder with code"),(0,o.kt)("p",null,"Useful for creating perfectly looping recordings."),(0,o.kt)("h3",{id:"isgifrecording"},(0,o.kt)("inlineCode",{parentName:"h3"},"isGifRecording")),(0,o.kt)("p",null,"Check if the screen is being gif recorded or not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"isRecording = isGifRecording()\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"isRecording"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"startgifrecording"},(0,o.kt)("inlineCode",{parentName:"h3"},"startGifRecording")),(0,o.kt)("p",null,"Start screen gif recording by code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"startGifRecording()\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pausegifrecording"},(0,o.kt)("inlineCode",{parentName:"h3"},"pauseGifRecording")),(0,o.kt)("p",null,"Pause screen gif recording by code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"pauseGifRecording()\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"endgifrecording"},(0,o.kt)("inlineCode",{parentName:"h3"},"endGifRecording")),(0,o.kt)("p",null,"End screen gif recording by code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"endGifRecording()\n")))}g.isMDXComponent=!0}}]);