"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),g=i,f=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={title:"GIF Recording"},a=void 0,l={unversionedId:"miscellaneous/gif-recording",id:"miscellaneous/gif-recording",title:"GIF Recording",description:"An integrated GIF recorder within LIKO-12.",source:"@site/docs/miscellaneous/gif-recording.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/gif-recording",permalink:"/docs/miscellaneous/gif-recording",draft:!1,editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/miscellaneous/gif-recording.md",tags:[],version:"current",frontMatter:{title:"GIF Recording"},sidebar:"tutorialSidebar",previous:{title:"Events System",permalink:"/docs/miscellaneous/events-system"},next:{title:"Host System",permalink:"/docs/miscellaneous/host-system"}},c={},d=[{value:"Control the GIF recorder with code",id:"control-the-gif-recorder-with-code",level:2},{value:"<code>isGifRecording</code>",id:"isgifrecording",level:3},{value:"<code>startGifRecording</code>",id:"startgifrecording",level:3},{value:"<code>pauseGifRecording</code>",id:"pausegifrecording",level:3},{value:"<code>endGifRecording</code>",id:"endgifrecording",level:3}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An integrated GIF recorder within LIKO-12."),(0,i.kt)("p",null,"Optimized to take some advantage of the low-resolution and limited colors' palette."),(0,i.kt)("h2",{id:"control-the-gif-recorder-with-code"},"Control the GIF recorder with code"),(0,i.kt)("p",null,"Useful for creating perfectly looping recordings."),(0,i.kt)("h3",{id:"isgifrecording"},(0,i.kt)("inlineCode",{parentName:"h3"},"isGifRecording")),(0,i.kt)("p",null,"Check if the screen is being gif recorded or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"isRecording = isGifRecording()\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"isRecording"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startgifrecording"},(0,i.kt)("inlineCode",{parentName:"h3"},"startGifRecording")),(0,i.kt)("p",null,"Start screen gif recording by code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"startGifRecording()\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pausegifrecording"},(0,i.kt)("inlineCode",{parentName:"h3"},"pauseGifRecording")),(0,i.kt)("p",null,"Pause screen gif recording by code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"pauseGifRecording()\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endgifrecording"},(0,i.kt)("inlineCode",{parentName:"h3"},"endGifRecording")),(0,i.kt)("p",null,"End screen gif recording by code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"endGifRecording()\n")))}u.isMDXComponent=!0}}]);