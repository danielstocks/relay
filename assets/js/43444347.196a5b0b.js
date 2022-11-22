"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[44828],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){return function(t){var n=u(t.components);return o.createElement(e,a({},t,{components:n}))}},u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(39960),r=n(86341),a=n(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var s=function(){var e=a.useState(!1),t=e[0],n=e[1],o=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},c=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(o.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return a.createElement(i,null,a.createElement(d,null),a.createElement(s,null),a.createElement(c,null))},m=function(){return a.createElement(i,null,a.createElement(s,null),a.createElement(c,null))};const p=function(){return(0,r.fbContent)({internal:a.createElement(u,null),external:a.createElement(m,null)})}},56661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=n(68629),i=n(86341),s=["components"],d={id:"relay-devtools",title:"Relay DevTools",slug:"/debugging/relay-devtools/",description:"Debugging guide for the Relay DevTools",keywords:["debugging","troubleshooting","extension","devtools","browser"]},c=void 0,u={unversionedId:"debugging/relay-devtools",id:"debugging/relay-devtools",title:"Relay DevTools",description:"Debugging guide for the Relay DevTools",source:"@site/docs/debugging/relay-devtools.md",sourceDirName:"debugging",slug:"/debugging/relay-devtools/",permalink:"/docs/next/debugging/relay-devtools/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/debugging/relay-devtools.md",tags:[],version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1669094005,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{id:"relay-devtools",title:"Relay DevTools",slug:"/debugging/relay-devtools/",description:"Debugging guide for the Relay DevTools",keywords:["debugging","troubleshooting","extension","devtools","browser"]},sidebar:"docs",previous:{title:"Relay Hooks and Legacy Container APIs",permalink:"/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/"},next:{title:"Inconsistent Typename Error",permalink:"/docs/next/debugging/inconsistent-typename-error/"}},m={},p=[{value:"Installation",id:"installation",level:2},{value:"Internal version (preferred)",id:"internal-version-preferred",level:3},{value:"Internal Version for Edgium users",id:"internal-version-for-edgium-users",level:3},{value:"External version",id:"external-version",level:3},{value:"How to Navigate the Relay DevTools Extension",id:"how-to-navigate-the-relay-devtools-extension",level:2},{value:"Network Panel",id:"network-panel",level:3},{value:"Store Panel",id:"store-panel",level:3},{value:"Multiple Environments",id:"multiple-environments",level:2},{value:"Give Feedback",id:"give-feedback",level:2}],h={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("h3",{id:"internal-version-preferred"},"Internal version (preferred)"),(0,a.mdx)("p",null,"The internal version of devtools has the latest updates and the process of installation will be much faster."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Before downloading the new Devtools, make sure you've deleted all older versions of the extension."),(0,a.mdx)("li",{parentName:"ol"},"Join ",(0,a.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/655864995271028"},"Relay DevTools Support")," group and you will automatically be added to the cpe_relay_devtools_extension gatekeeper."),(0,a.mdx)("li",{parentName:"ol"},"Wait 20-30 minutes, and it should be downloaded on your Chrome browser"),(0,a.mdx)("li",{parentName:"ol"},"Or run ",(0,a.mdx)("inlineCode",{parentName:"li"},"sudo soloctl -i")," on your machine to get the extension immediately")),(0,a.mdx)("h3",{id:"internal-version-for-edgium-users"},"Internal Version for Edgium users"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"On ",(0,a.mdx)("inlineCode",{parentName:"li"},"C:\\Users\\<User>\\AppData\\Local\\Google\\Chrome\\User Data\\<Work Profile>\\Extensions")," search for files manifest.json with Relay Developer Tools on it"),(0,a.mdx)("li",{parentName:"ol"},"Get the path to this folder e.g ",(0,a.mdx)("inlineCode",{parentName:"li"},"...\\Extensions\\<blob>\\<version>\\")),(0,a.mdx)("li",{parentName:"ol"},"On edge://extensions/ click load upacked (you might need to Allow extensions for other stores).")),(0,a.mdx)("h3",{id:"external-version"},"External version"),(0,a.mdx)("p",null,"The external version of devtools is less prone to bugs but does not always contain the latest updates and you have to download the extension from the chrome store.\nFollow this link and install it from the ",(0,a.mdx)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"},"chrome store"),".")),(0,a.mdx)(i.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"Follow this link and install it from the ",(0,a.mdx)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"},"chrome store"),".")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"how-to-navigate-the-relay-devtools-extension"},"How to Navigate the Relay DevTools Extension"),(0,a.mdx)("p",null,"You should have a new tab called Relay in your Chrome DevTools. In this tab, you will be able to select between 2 panels: the ",(0,a.mdx)("strong",{parentName:"p"},"network panel")," and the ",(0,a.mdx)("strong",{parentName:"p"},"store panel"),"."),(0,a.mdx)("h3",{id:"network-panel"},"Network Panel"),(0,a.mdx)("p",null,"The network panel allows users to view individual requests in an active environment. Users can scroll through these requests, search for the requests and view the details of each request. The details of each request includes the status, the variables, and the responses for the request."),(0,a.mdx)("h3",{id:"store-panel"},"Store Panel"),(0,a.mdx)("p",null,"The store panel allows users to view individual records from the store data in an active environment. Users can scroll through these records, search for the records, and view the details of each request. Users can also copy the the store data in JSON format to the clipboard.The details of each record includes the ID, the typename, and all of the data in the record. If one of the fields in the data is a reference to another record, users can click on the reference, which will take them to that record."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"multiple-environments"},"Multiple Environments"),(0,a.mdx)("p",null,"As you switch through the store and network panels, you'll notice that there is also a dropdown menu on the left side of the developer tools. This dropdown allows users to switch between environments. The requests in the network tab and the store data are grouped by environment, so users can easily shuffle between active environments."),(0,a.mdx)("h2",{id:"give-feedback"},"Give Feedback"),(0,a.mdx)("p",null,"Look in the top-right corner of the extension panel!"),(0,a.mdx)(l.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0}}]);