!function(){"use strict";const{registerBlockType:e}=wp.blocks;var t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.compose,o=window.wp.data,r=window.wp.hooks,i=window.wp.htmlEntities,s=window.wp.components;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(null,arguments)}const d=({rootClientId:e,buttonText:n,icon:a,...o})=>(0,t.createElement)(l.Inserter,{isAppender:!0,rootClientId:e,renderToggle:({onToggle:e,disabled:l})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(s.Button,c({onClick:e,disabled:l,icon:a},o),n))});d.defaultProps={buttonText:"",label:"",icon:"plus"};var p=d;function m(e){return({children:t,blockProps:n})=>(0,r.applyFilters)(e,function(e){return Array.isArray(e)?e:[e]}(t),n)}const u=m("tenup.tabsItem.header"),b=m("tenup.tabsItem.footer");var w=(0,a.compose)((0,o.withSelect)(((e,{clientId:t})=>{const{hasSelectedInnerBlock:n,getBlockParents:l,getBlock:a}=e("core/block-editor"),o=l(t),r=a(o[o.length-1]);let i=0;return r.innerBlocks.forEach(((e,n)=>{e.clientId===t&&(i=n)})),{position:i,hasSelectedInnerBlock:n}})))((e=>{const{isSelected:a,hasSelectedInnerBlock:o,setAttributes:s,clientId:c,position:d,name:m,attributes:{header:w}}=e,h=a||o()?"tab-content is-active":"tab-content";return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(u,{blockProps:e}),(0,t.createElement)("div",{className:h},(0,t.createElement)("div",{"data-tab-block":c,className:`tab-header orientation-horizontal position-${d}`},(0,t.createElement)(l.RichText,{tagName:"div",value:w,placeholder:(0,n.__)("Tab Header","publisher-media-kit"),onChange:e=>{s({header:(0,i.decodeEntities)(e).replace(/<\/?[a-z][^>]*?>/gi," ")})},allowedFormats:[]})),(0,t.createElement)(l.InnerBlocks,{templateInsertUpdatesSelection:!0,__experimentalCaptureToolbars:!0,allowedBlocks:(0,r.applyFilters)("tenup.tabs.allowedBlocks",!0,m),renderAppender:()=>(0,t.createElement)(p,{className:"tabs-item-appender",rootClientId:c,isTertiary:!0,showTooltip:!0,label:(0,n.__)("Insert Tab Content","publisher-media-kit")})})),(0,t.createElement)(b,{blockProps:e}))}));var h=()=>(0,t.createElement)(l.InnerBlocks.Content,null),f=JSON.parse('{"name":"tenup/tabs-item","attributes":{"header":{"type":"string"}},"supports":{"reusable":false,"html":false},"parent":["tenup/tabs"]}');const{name:v}=f,k={title:(0,n.__)("Tabs Item","publisher-media-kit"),description:(0,n.__)("Add a new tab.","publisher-media-kit")};var E={name:v,settings:{...f,...k,icon:(0,t.createElement)("svg",{width:"125",height:"118",viewBox:"0 0 125 118",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M0 28.0992H39V40.0992H0V28.0992Z",fill:"#404040"}),(0,t.createElement)("path",{d:"M0 0H39.0127V30.9508H0V0Z",fill:"#404040"}),(0,t.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.0127 6H6V24.9508H33.0127V6ZM0 0V30.9508H39.0127V0H0Z",fill:"#404040"}),(0,t.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M76.0064 6H48.9937V24.9508H76.0064V6ZM42.9937 0V30.9508H82.0064V0H42.9937Z",fill:"#404040"}),(0,t.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119 6H91.9872V24.9508H119V6ZM85.9872 0V30.9508H125V0H85.9872Z",fill:"#404040"}),(0,t.createElement)("path",{d:"M0 34.0992H125V117.099H0V34.0992Z",fill:"#404040"}),(0,t.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119 40.0992H6V111.099H119V40.0992ZM0 34.0992V117.099H125V34.0992H0Z",fill:"#404040"})),edit:w,save:h}};wp.domReady((function(){(t=>{if(!t)return;const{name:n,settings:l}=t;e(n,l)})(E)}))}();