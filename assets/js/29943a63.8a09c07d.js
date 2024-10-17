"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40322],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(67294),a=t(34334);const o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},74866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var r=t(83117),a=t(67294),o=t(34334),i=t(12466),l=t(76775),u=t(91980),s=t(67392),c=t(50012);function d(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function h(e){var n,t,r,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,d=m(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),v=h[0],g=h[1],b=f({queryString:u,groupId:s}),y=b[0],w=b[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),E=k[0],x=k[1],O=function(){var e=null!=y?y:E;return p({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),x(e)}),[w,x,d]),tabValues:d}}var v=t(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){var n=e.className,t=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==l&&(d(n),u(r))},p=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return c.push(e)},onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function w(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function k(e){var n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(w,(0,r.Z)({},e,n)))}function E(e){var n=(0,v.default)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(39960),a=t(86341),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var u=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(u,null),o.createElement(c,null))},m=function(){return o.createElement(l,null,o.createElement(u,null),o.createElement(c,null))};const p=function(){return(0,a.fbContent)({internal:o.createElement(d,null),external:o.createElement(m,null)})}},76740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(68629),t(86341),t(74866),t(85162),["components"]),l={id:"codemods",title:"Codemods",slug:"/guides/codemods/",description:"Relay guide to codemods",keywords:["codemod","codemods"]},u=void 0,s={unversionedId:"guides/codemods",id:"guides/codemods",title:"Codemods",description:"Relay guide to codemods",source:"@site/docs/guides/codemods.md",sourceDirName:"guides",slug:"/guides/codemods/",permalink:"/docs/next/guides/codemods/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/codemods.md",tags:[],version:"current",frontMatter:{id:"codemods",title:"Codemods",slug:"/guides/codemods/",description:"Relay guide to codemods",keywords:["codemod","codemods"]},sidebar:"docs",previous:{title:"Type Emission",permalink:"/docs/next/guides/type-emission/"},next:{title:"RelayEnvironmentProvider",permalink:"/docs/next/api-reference/relay-environment-provider/"}},c={},d=[{value:"Available codemods",id:"available-codemods",level:2},{value:"mark-dangerous-conditional-fragment-spreads",id:"mark-dangerous-conditional-fragment-spreads",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Relay compiler has the ability to make changes across the source files of\nyour projects with the use of codemods. You can see the list of codemods\navailable by running the Relay compiler's ",(0,o.mdx)("inlineCode",{parentName:"p"},"codemod")," command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"> relay codemod --help\nApply codemod (verification with auto-applied fixes)\n\nUsage: relay codemod [OPTIONS] [CONFIG] <COMMAND>\n\nCommands:\n  mark-dangerous-conditional-fragment-spreads  Marks unaliased conditional fragment spreads as @dangerously_unaliased_fixme\n  help                                         Print this message or the help of the given subcommand(s)\n\nArguments:\n  [CONFIG]  Compile using this config file. If not provided, searches for a config in package.json under the `relay` key or `relay.config.json` files among other up from the current working directory\n\nOptions:\n  -p, --project <project>  Compile only this project. You can pass this argument multiple times. to compile multiple projects. If excluded, all projects will be compiled\n  -h, --help               Print help\n")),(0,o.mdx)("h2",{id:"available-codemods"},"Available codemods"),(0,o.mdx)("p",null,"The compiler currently has one available codemod:"),(0,o.mdx)("h3",{id:"mark-dangerous-conditional-fragment-spreads"},"mark-dangerous-conditional-fragment-spreads"),(0,o.mdx)("p",null,"This codemod finds fragment spreads that are ",(0,o.mdx)("em",{parentName:"p"},"dangerously unaliased"),"; that is,\nthe fragment might not be fetched due to a directive such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@skip")," or its\ninclusion on a mismatched type within a union. If such a conditional fragment is\nnot aliased with ",(0,o.mdx)("a",{parentName:"p",href:"../alias-directive/"},(0,o.mdx)("inlineCode",{parentName:"a"},"@alias")),", there is no way for the\nresulting generated Flow or TypeScript types to reflect its nullability. This\ncodemod will add the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@dangerously_unaliased_fixme")," directive to such fragment\nspreads, indicating to developers that there is a problem to be fixed. After\napplying this codemod, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"enforce_fragment_alias_where_ambiguous")," feature flag\ncan be enabled, which will ensure any future ambiguous fragment spreads must be\naliased."),(0,o.mdx)("p",null,"Since this codemod can potentially modify many files, there is an optional\n",(0,o.mdx)("inlineCode",{parentName:"p"},"--rollout")," parameter which, if used alongside the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"enforce_fragment_alias_where_ambiguous")," feature flag in rollout mode, allows\nprogressive codemod and enforcement of this validation."))}p.isMDXComponent=!0}}]);