"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[2024],{96214:function(e,t,o){var r=o(95318);t.Z=void 0;var n=r(o(64938)),i=o(85893),l=(0,n.default)((0,i.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.Z=l},40044:function(e,t,o){o.d(t,{Z:function(){return g}});var r=o(63366),n=o(87462),i=o(67294),l=o(86010),s=o(94780),a=o(47739),c=o(98216),d=o(71657),u=o(90948),h=o(34867);function f(e){return(0,h.Z)("MuiTab",e)}var p=(0,o(1588).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),b=o(85893);const v=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],m=(0,u.ZP)(a.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.Z)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${p.iconWrapper}`]:(0,n.Z)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${p.selected}`]:{opacity:1},[`&.${p.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${p.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${p.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${p.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${p.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})));var g=i.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:a,disabled:u=!1,disableFocusRipple:h=!1,fullWidth:p,icon:g,iconPosition:w="top",indicator:y,label:x,onChange:C,onClick:S,onFocus:Z,selected:M,selectionFollowsFocus:k,textColor:B="inherit",value:W,wrapped:R=!1}=o,V=(0,r.Z)(o,v),E=(0,n.Z)({},o,{disabled:u,disableFocusRipple:h,selected:M,icon:!!g,iconPosition:w,label:!!x,fullWidth:p,textColor:B,wrapped:R}),N=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:n,icon:i,label:l,selected:a,disabled:d}=e,u={root:["root",i&&l&&"labelIcon",`textColor${(0,c.Z)(o)}`,r&&"fullWidth",n&&"wrapped",a&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,s.Z)(u,f,t)})(E),I=g&&x&&i.isValidElement(g)?i.cloneElement(g,{className:(0,l.Z)(N.iconWrapper,g.props.className)}):g;return(0,b.jsxs)(m,(0,n.Z)({focusRipple:!h,className:(0,l.Z)(N.root,a),ref:t,role:"tab","aria-selected":M,disabled:u,onClick:e=>{!M&&C&&C(e,W),S&&S(e)},onFocus:e=>{k&&!M&&C&&C(e,W),Z&&Z(e)},ownerState:E,tabIndex:M?0:-1},V,{children:["top"===w||"start"===w?(0,b.jsxs)(i.Fragment,{children:[I,x]}):(0,b.jsxs)(i.Fragment,{children:[x,I]}),y]}))}))},11703:function(e,t,o){o.d(t,{Z:function(){return _}});var r=o(63366),n=o(87462),i=o(67294),l=(o(59864),o(86010)),s=o(94780),a=o(90948),c=o(71657),d=o(2734),u=o(57144);let h;function f(){if(h)return h;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),h="reverse",e.scrollLeft>0?h="default":(e.scrollLeft=1,0===e.scrollLeft&&(h="negative")),document.body.removeChild(e),h}function p(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(f()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function b(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var v=o(5340),m=o(85893);const g=["onChange"],w={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var y=o(88169),x=(0,y.Z)((0,m.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),C=(0,y.Z)((0,m.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),S=o(47739),Z=o(34867),M=o(1588);function k(e){return(0,Z.Z)("MuiTabScrollButton",e)}var B,W,R=(0,M.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const V=["className","direction","orientation","disabled"],E=(0,a.ZP)(S.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,n.Z)({width:40,flexShrink:0,opacity:.8,[`&.${R.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var N=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabScrollButton"}),{className:i,direction:a}=o,u=(0,r.Z)(o,V),h="rtl"===(0,d.Z)().direction,f=(0,n.Z)({isRtl:h},o),p=(e=>{const{classes:t,orientation:o,disabled:r}=e,n={root:["root",o,r&&"disabled"]};return(0,s.Z)(n,k,t)})(f);return(0,m.jsx)(E,(0,n.Z)({component:"div",className:(0,l.Z)(p.root,i),ref:t,role:null,ownerState:f,tabIndex:null},u,{children:"left"===a?B||(B=(0,m.jsx)(x,{fontSize:"small"})):W||(W=(0,m.jsx)(C,{fontSize:"small"}))}))})),I=o(2068);function T(e){return(0,Z.Z)("MuiTabs",e)}var P=(0,M.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),z=o(8038);const L=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],j=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,A=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,F=(e,t,o)=>{let r=!1,n=o(e,t);for(;n;){if(n===e.firstChild){if(r)return;r=!0}const t=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!t)return void n.focus();n=o(e,n)}},O=(0,a.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${P.scrollButtons}`]:t.scrollButtons},{[`& .${P.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,n.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${P.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),H=(0,a.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,n.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),X=(0,a.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,n.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),$=(0,a.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,n.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),D=(0,a.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,g),l=i.useRef(),s=i.useRef(null),a=()=>{l.current=s.current.offsetHeight-s.current.clientHeight};return i.useEffect((()=>{const e=(0,u.Z)((()=>{const e=l.current;a(),e!==l.current&&t(l.current)})),o=(0,v.Z)(s.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),i.useEffect((()=>{a(),t(l.current)}),[t]),(0,m.jsx)("div",(0,n.Z)({style:w,ref:s},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Y={};var _=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabs"}),a=(0,d.Z)(),h="rtl"===a.direction,{"aria-label":g,"aria-labelledby":w,action:y,centered:x=!1,children:C,className:S,component:Z="div",allowScrollButtonsMobile:M=!1,indicatorColor:k="primary",onChange:B,orientation:W="horizontal",ScrollButtonComponent:R=N,scrollButtons:V="auto",selectionFollowsFocus:E,TabIndicatorProps:P={},TabScrollButtonProps:_={},textColor:q="primary",value:K,variant:U="standard",visibleScrollbar:G=!1}=o,J=(0,r.Z)(o,L),Q="scrollable"===U,ee="vertical"===W,te=ee?"scrollTop":"scrollLeft",oe=ee?"top":"left",re=ee?"bottom":"right",ne=ee?"clientHeight":"clientWidth",ie=ee?"height":"width",le=(0,n.Z)({},o,{component:Z,allowScrollButtonsMobile:M,indicatorColor:k,orientation:W,vertical:ee,scrollButtons:V,textColor:q,variant:U,visibleScrollbar:G,fixed:!Q,hideScrollbar:Q&&!G,scrollableX:Q&&!ee,scrollableY:Q&&ee,centered:x&&!Q,scrollButtonsHideMobile:!M}),se=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:n,scrollableY:i,centered:l,scrollButtonsHideMobile:a,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,s.Z)(d,T,c)})(le);const[ae,ce]=i.useState(!1),[de,ue]=i.useState(Y),[he,fe]=i.useState({start:!1,end:!1}),[pe,be]=i.useState({overflow:"hidden",scrollbarWidth:0}),ve=new Map,me=i.useRef(null),ge=i.useRef(null),we=()=>{const e=me.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:p(e,a.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==K){const e=ge.current.children;if(e.length>0){const t=e[ve.get(K)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},ye=(0,I.Z)((()=>{const{tabsMeta:e,tabMeta:t}=we();let o,r=0;if(ee)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=h?"right":"left",t&&e){const n=h?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(h?-1:1)*(t[o]-e[o]+n)}const n={[o]:r,[ie]:t?t[ie]:0};if(isNaN(de[o])||isNaN(de[ie]))ue(n);else{const e=Math.abs(de[o]-n[o]),t=Math.abs(de[ie]-n[ie]);(e>=1||t>=1)&&ue(n)}})),xe=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},n=(()=>{})){const{ease:i=b,duration:l=300}=r;let s=null;const a=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void n(new Error("Animation cancelled"));null===s&&(s=r);const d=Math.min(1,(r-s)/l);t[e]=i(d)*(o-a)+a,d>=1?requestAnimationFrame((()=>{n(null)})):requestAnimationFrame(u)};a===o?n(new Error("Element already at target position")):requestAnimationFrame(u)}(te,me.current,e,{duration:a.transitions.duration.standard}):me.current[te]=e},Ce=e=>{let t=me.current[te];ee?t+=e:(t+=e*(h?-1:1),t*=h&&"reverse"===f()?-1:1),xe(t)},Se=()=>{const e=me.current[ne];let t=0;const o=Array.from(ge.current.children);for(let r=0;r<o.length;r+=1){const n=o[r];if(t+n[ne]>e)break;t+=n[ne]}return t},Ze=()=>{Ce(-1*Se())},Me=()=>{Ce(Se())},ke=i.useCallback((e=>{be({overflow:null,scrollbarWidth:e})}),[]),Be=(0,I.Z)((e=>{const{tabsMeta:t,tabMeta:o}=we();if(o&&t)if(o[oe]<t[oe]){const r=t[te]+(o[oe]-t[oe]);xe(r,{animation:e})}else if(o[re]>t[re]){const r=t[te]+(o[re]-t[re]);xe(r,{animation:e})}})),We=(0,I.Z)((()=>{if(Q&&!1!==V){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:r,clientWidth:n}=me.current;let i,l;if(ee)i=e>1,l=e<t-o-1;else{const e=p(me.current,a.direction);i=h?e<r-n-1:e>1,l=h?e>1:e<r-n-1}i===he.start&&l===he.end||fe({start:i,end:l})}}));i.useEffect((()=>{const e=(0,u.Z)((()=>{ye(),We()})),t=(0,v.Z)(me.current);let o;return t.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(o=new ResizeObserver(e),Array.from(ge.current.children).forEach((e=>{o.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[ye,We]);const Re=i.useMemo((()=>(0,u.Z)((()=>{We()}))),[We]);i.useEffect((()=>()=>{Re.clear()}),[Re]),i.useEffect((()=>{ce(!0)}),[]),i.useEffect((()=>{ye(),We()})),i.useEffect((()=>{Be(Y!==de)}),[Be,de]),i.useImperativeHandle(y,(()=>({updateIndicator:ye,updateScrollButtons:We})),[ye,We]);const Ve=(0,m.jsx)($,(0,n.Z)({},P,{className:(0,l.Z)(se.indicator,P.className),ownerState:le,style:(0,n.Z)({},de,P.style)}));let Ee=0;const Ne=i.Children.map(C,(e=>{if(!i.isValidElement(e))return null;const t=void 0===e.props.value?Ee:e.props.value;ve.set(t,Ee);const o=t===K;return Ee+=1,i.cloneElement(e,(0,n.Z)({fullWidth:"fullWidth"===U,indicator:o&&!ae&&Ve,selected:o,selectionFollowsFocus:E,onChange:B,textColor:q,value:t},1!==Ee||!1!==K||e.props.tabIndex?{}:{tabIndex:0}))})),Ie=(()=>{const e={};e.scrollbarSizeListener=Q?(0,m.jsx)(D,{onChange:ke,className:(0,l.Z)(se.scrollableX,se.hideScrollbar)}):null;const t=he.start||he.end,o=Q&&("auto"===V&&t||!0===V);return e.scrollButtonStart=o?(0,m.jsx)(R,(0,n.Z)({orientation:W,direction:h?"right":"left",onClick:Ze,disabled:!he.start},_,{className:(0,l.Z)(se.scrollButtons,_.className)})):null,e.scrollButtonEnd=o?(0,m.jsx)(R,(0,n.Z)({orientation:W,direction:h?"left":"right",onClick:Me,disabled:!he.end},_,{className:(0,l.Z)(se.scrollButtons,_.className)})):null,e})();return(0,m.jsxs)(O,(0,n.Z)({className:(0,l.Z)(se.root,S),ownerState:le,ref:t,as:Z},J,{children:[Ie.scrollButtonStart,Ie.scrollbarSizeListener,(0,m.jsxs)(H,{className:se.scroller,ownerState:le,style:{overflow:pe.overflow,[ee?"margin"+(h?"Left":"Right"):"marginBottom"]:G?void 0:-pe.scrollbarWidth},ref:me,onScroll:Re,children:[(0,m.jsx)(X,{"aria-label":g,"aria-labelledby":w,"aria-orientation":"vertical"===W?"vertical":null,className:se.flexContainer,ownerState:le,onKeyDown:e=>{const t=ge.current,o=(0,z.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===W?"ArrowLeft":"ArrowUp",n="horizontal"===W?"ArrowRight":"ArrowDown";switch("horizontal"===W&&h&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),F(t,o,A);break;case n:e.preventDefault(),F(t,o,j);break;case"Home":e.preventDefault(),F(t,null,j);break;case"End":e.preventDefault(),F(t,null,A)}},ref:ge,role:"tablist",children:Ne}),ae&&Ve]}),Ie.scrollButtonEnd]}))}))},70131:function(e,t,o){o.d(t,{YD:function(){return b}});var r=o(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var l=new Map,s=new WeakMap,a=0,c=void 0;function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(o=e.root)?(s.has(o)||(a+=1,s.set(o,a.toString())),s.get(o)):"0":e[t]);var o})).toString()}function u(e,t,o,r){if(void 0===o&&(o={}),void 0===r&&(r=c),void 0===window.IntersectionObserver&&void 0!==r){var n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof o.threshold?o.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var i=function(e){var t=d(e),o=l.get(t);if(!o){var r,n=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var o,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(o=n.get(t.target))||o.forEach((function(e){e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),o={id:t,observer:i,elements:n},l.set(t,o)}return o}(o),s=i.id,a=i.observer,u=i.elements,h=u.get(e)||[];return u.has(e)||u.set(e,h),h.push(t),a.observe(e),function(){h.splice(h.indexOf(t),1),0===h.length&&(u.delete(e),a.unobserve(e)),0===u.size&&(a.disconnect(),l.delete(s))}}var h=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}var p=function(e){var t,o;function l(t){var o;return(o=e.call(this,t)||this).node=null,o._unobserveCb=null,o.handleNode=function(e){o.node&&(o.unobserve(),e||o.props.triggerOnce||o.props.skip||o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=e||null,o.observeNode()},o.handleChange=function(e,t){e&&o.props.triggerOnce&&o.unobserve(),f(o.props)||o.setState({inView:e,entry:t}),o.props.onChange&&o.props.onChange(e,t)},o.state={inView:!!t.initialInView,entry:void 0},o}o=e,(t=l).prototype=Object.create(o.prototype),t.prototype.constructor=t,i(t,o);var s=l.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,o=e.root,r=e.rootMargin,n=e.trackVisibility,i=e.delay,l=e.fallbackInView;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:o,rootMargin:r,trackVisibility:n,delay:i},l)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,o=e.entry;return this.props.children({inView:t,entry:o,ref:this.handleNode})}var i=this.props,l=i.children,s=i.as,a=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(i,h);return r.createElement(s||"div",n({ref:this.handleNode},a),l)},l}(r.Component);function b(e){var t=void 0===e?{}:e,o=t.threshold,n=t.delay,i=t.trackVisibility,l=t.rootMargin,s=t.root,a=t.triggerOnce,c=t.skip,d=t.initialInView,h=t.fallbackInView,f=r.useRef(),p=r.useState({inView:!!d}),b=p[0],v=p[1],m=r.useCallback((function(e){void 0!==f.current&&(f.current(),f.current=void 0),c||e&&(f.current=u(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&a&&f.current&&(f.current(),f.current=void 0)}),{root:s,rootMargin:l,threshold:o,trackVisibility:i,delay:n},h))}),[Array.isArray(o)?o.toString():o,s,l,a,c,i,h,n]);(0,r.useEffect)((function(){f.current||!b.entry||a||c||v({inView:!!d})}));var g=[m,b.inView,b.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);