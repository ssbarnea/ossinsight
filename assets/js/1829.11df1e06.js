"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1829],{59943:function(e,t,n){n.d(t,{qz:function(){return R},zU:function(){return l},rj:function(){return N},If:function(){return g},De:function(){return O},wW:function(){return H},eh:function(){return C},xF:function(){return m},V1:function(){return U},NC:function(){return q},Dx:function(){return W},vb:function(){return E},u:function(){return Z}});var r=n(85893),i=n(30454),o=n(38252),a=n.n(o),s=n(67294);const c=(0,s.createContext)({setOption(){},set(){},markNoMerge(){},remove(){}});function u(e,t){e&&("function"==typeof e?e(t):e.current=t)}c.displayName="EChartsxContext";var l=(0,s.forwardRef)((function({children:e,theme:t,init:n={},defaults:o={},debug:l=!1,...d},m){const p=(0,s.useMemo)((()=>({})),[]),f=(0,s.useRef)(null),g=(0,s.useRef)(),[x,v]=(0,s.useState)(0),h=(0,s.useRef)(!0),b=(0,s.useRef)({}),y=(0,s.useRef)(!1),w=(0,s.useRef)(!1),S=(0,s.useRef)([]),$=(0,s.useCallback)(((e,t)=>{a()(p[e],t)||(p[e]=t,b.current[e]=!0,v((e=>e+1)))}),[]),j=(0,s.useCallback)((e=>{e in p&&(delete p[e],h.current=!0,b.current[e]=!0,v((e=>e+1)))}),[]),C=(0,s.useCallback)((()=>{h.current=!0}),[]);(0,s.useLayoutEffect)((()=>{const e=()=>{g.current?.resize()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useLayoutEffect)((()=>{const e=()=>{g.current&&(g.current.dispose(),g.current=void 0,u(m,void 0))};if(f.current){g.current=(0,i.S1)(f.current,t,{devicePixelRatio:"undefined"!=typeof window?window.devicePixelRatio:2,...n});return y.current=!1,e}e()}),[]),(0,s.useEffect)((()=>{const e=h.current?{...o}:{};if((h.current?Object.values(p):Object.keys(b.current).map((e=>p[e]))).forEach((t=>function(e,t){if(!t.mainType)throw new Error("option.mainType must be specified");if(e[t.mainType]){const n=e[t.mainType];if(n instanceof Array)if(1===n.length)if(n[0].id===t.id&&void 0!==t.id)n[0]=t;else{if(void 0===n[0].id||void 0===t.id)throw new Error("option.id must be set with multiple items");n.push(t)}else if(n.length>1){if(void 0===t.id)throw new Error("option.id must be set with multiple items");const e=n.findIndex((e=>e.id===t.id));e>=0?n.splice(e,1,t):n.push(t)}else n[0]=t;else if(n.id===t.id&&void 0!==t.id)e[t.mainType]=t;else{if(void 0===t.id||void 0===n.id)throw new Error("option.id must be set with multiple items");e[t.mainType]=[n,t]}}else e[t.mainType]=t}(e,t))),Object.keys(e).length){l&&console.debug("echartsx.set",e);const t=g.current;t&&(t.setOption(e,h.current),w.current=!0,S.current.length>0&&(S.current.forEach((e=>t.setOption(e))),S.current=[])),y.current||(u(m,g.current),y.current=!0)}h.current=!1,b.current={}}),[o,x]);const z=(0,s.useCallback)((e=>{const t=g.current;t&&w.current?t.setOption(e):S.current.push(e)}),[]);return(0,r.jsxs)(c.Provider,{value:{set:$,markNoMerge:C,remove:j,setOption:z},children:[(0,r.jsx)("div",{ref:f,...d}),e]})}));const d=function({dependencies:e,children:t}){return(0,s.useMemo)((()=>(0,r.jsx)(r.Fragment,{children:t})),e??[])};d.displayName="Once";var m=d;function p(e){return e?"function"==typeof e?e():e:null}const f=function({once:e=!1,cond:t,then:n,else:i}){let o;return o=p(t?n:i),e?(0,r.jsx)(m,{children:o},t?"then":"else"):(0,r.jsx)(r.Fragment,{children:o})};f.displayName="If";var g=f;let x=0;function v(){return(0,s.useMemo)((()=>":"+ ++x),[])}function h(e,{...t}={},n){const i=n=>{const{set:i,remove:o}=(0,s.useContext)(c),u=v(),l=(0,s.useRef)(void 0);return(0,s.useEffect)((()=>{l.current&&a()(l.current,n)||(i(u,{id:u,...t,...n,mainType:e}),l.current=n)}),[n]),(0,s.useEffect)((()=>()=>{l.current=void 0,o(u)}),[]),(0,r.jsx)(r.Fragment,{})};return i.displayName=n??"echarts:"+e,i}var b;!function(e){let t,n,r,i;!function(e){e.X=h("xAxis",{type:"value"},"XValueAxis"),e.Y=h("yAxis",{type:"value"},"YValueAxis"),e.Angle=h("angleAxis",{type:"value"},"AngleValueAxis"),e.Radius=h("radiusAxis",{type:"value"},"RadiusValueAxis")}(t=e.Value||(e.Value={})),function(e){e.X=h("xAxis",{type:"time"},"XTimeAxis"),e.Y=h("yAxis",{type:"time"},"YTimeAxis"),e.Angle=h("angleAxis",{type:"time"},"AngleTimeAxis"),e.Radius=h("radiusAxis",{type:"time"},"RadiusTimeAxis")}(n=e.Time||(e.Time={})),function(e){e.X=h("xAxis",{type:"log"},"XLogAxis"),e.Y=h("yAxis",{type:"log"},"YLogAxis"),e.Angle=h("angleAxis",{type:"log"},"AngleLogAxis"),e.Radius=h("radiusAxis",{type:"log"},"RadiusLogAxis")}(r=e.Log||(e.Log={})),function(e){e.X=h("xAxis",{type:"category"},"XCategoryAxis"),e.Y=h("yAxis",{type:"category"},"YCategoryAxis"),e.Angle=h("angleAxis",{type:"category"},"AngleCategoryAxis"),e.Radius=h("radiusAxis",{type:"category"},"RadiusCategoryAxis")}(i=e.Category||(e.Category={}))}(b||(b={}));var y=b,w=n(38180),S=n(68023);(0,S.D)(w.N);const $=h("series",{type:"bar"},"BarSeries");var j=n(92854);(0,S.D)(j.N);const C=h("series",{type:"line"},"LineSeries");var z=n(76010);(0,S.D)(z.N);const M=h("series",{type:"scatter"},"Scatter");var k=n(27240);(0,S.D)(k.N);const R=h("dataset",{},"Dataset");var A=n(76395);(0,S.D)(A.N);var O=h("legend",{},"Legend"),L=n(82739);(0,S.D)(L.N);var Z=h("tooltip",{},"Tooltip"),T=n(31281);(0,S.D)(T.N);const N=h("grid",void 0,"Grid");var D=n(83520);(0,S.D)(D.N);const I=h("singleAxis",{},"SingleAxis");var P=n(20878);(0,S.D)(P.N);const E=h("toolbox",{},"Toolbox");var V=n(8690);(0,S.D)(V.N);const W=h("title",{},"Title");var F=n(82811),B=n(6378),G=n(72127);(0,S.D)([F.N,B.T,G.z]);var U=(0,s.forwardRef)((function({data:e,fields:t,children:n,theme:i,...o},a){const c=(0,s.useMemo)((()=>{const n=new Set;return e.forEach((e=>{n.add(e[t.name])})),[...n]}),[e,t.name]);return(0,r.jsxs)(l,{theme:i,init:{renderer:"canvas",...o},ref:a,defaults:{animationDuration:3e3,animationDurationUpdate:3e3},children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(N,{containLabel:!0,top:72,left:24,right:108}),(0,r.jsx)(y.Value.Y,{interval:1,min:1,inverse:!0,offset:16,axisPointer:{show:!0,type:"shadow",snap:!0,label:{precision:0},triggerTooltip:!1}}),(0,r.jsx)(y.Time.X,{axisLabel:{formatter:e=>String(e),showMaxLabel:!0},minInterval:1,maxInterval:1,position:"top",splitLine:{show:!0},offset:28,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{show:!0,type:"line",snap:!0,label:{formatter:({value:e})=>String(e)},triggerTooltip:!1}}),(0,r.jsx)(Z,{trigger:"item"})]}),(0,r.jsx)(m,{dependencies:c,children:c.map((e=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(R,{id:e,fromDatasetId:"original",transform:[{type:"filter",config:{value:e,dimension:t.name}},{type:"sort",config:{dimension:t.time,order:"asc"}}]}),(0,r.jsx)(C,{name:e,datasetId:e,encode:{x:t.time,y:t.rank},smooth:!0,lineStyle:{width:3},symbolSize:8,symbol:"circle",endLabel:{show:!0,offset:[12,0],width:96,fontSize:14,overflow:"truncate",formatter:e=>{const t=e.seriesName,[n,r]=t.split("/");return n===r?r:`{owner|${n}/}\n${r}`},rich:{owner:{fontSize:12,color:"gray"}}},emphasis:{focus:"series",label:{fontSize:10}},tooltip:{formatter:"{a}"}})]},e)))}),(0,r.jsx)(R,{id:"original",source:e}),n]})}));function Y(){const e=(0,s.useRef)(),[t,n]=(0,s.useState)(null),[r,i]=(0,s.useState)(!1),o=(0,s.useRef)(!1),a=(0,s.useCallback)((t=>{e.current=t??void 0,n(t),t&&(u.current=t.captureStream(24),console.log("Started stream capture from canvas element: ",u.current),o.current&&m())}),[]),c=(0,s.useRef)(),u=(0,s.useRef)(),l=(0,s.useRef)(),d=(0,s.useMemo)((()=>{if("undefined"==typeof MediaRecorder)return;const e=["video/mp4","video/webm;codecs=h264","video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/mpeg"];for(let t in e)if(MediaRecorder.isTypeSupported(e[t]))return e[t]}),[]);if(!d)throw new Error("Not support recorder");const m=(0,s.useCallback)((()=>{o.current=!0;const t=e.current,n=u.current;if(!t||c.current||!n)return;let r={mimeType:d,videoBitsPerSecond:4e7};l.current=[];let a=c.current=new MediaRecorder(u.current,r);a.onstop=e=>{console.log("Recorder stopped: ",e),i(!1)},a.onstart=()=>{i(!0)},a.ondataavailable=e=>{e.data&&e.data.size>0&&l.current.push(e.data)},a.start(5e3),console.log("MediaRecorder started",a)}),[]),p=(0,s.useCallback)((()=>{o.current=!1;e.current&&c.current&&(console.log("MediaRecorder stopped",c.current),"inactive"!==c.current?.state&&c.current?.stop())}),[]),f=(0,s.useCallback)((()=>{if(!e.current||!l.current)return;const t=new Blob(l.current,{type:d}),n=window.URL.createObjectURL(t),r=document.createElement("a");r.style.display="none",r.href=n,r.download="test."+/\w+\/(\w+)/.exec(d||"")?.[1],document.body.appendChild(r),r.click(),setTimeout((()=>{document.body.removeChild(r),window.URL.revokeObjectURL(n)}),100)}),[]);return(0,s.useLayoutEffect)((()=>{if(t)return()=>{console.log("clear canvas"),p(),e.current=void 0,c.current=void 0,u.current=void 0,l.current=void 0}}),[t]),{ref:a,download:f,start:m,stop:p,recording:r}}function X({data:e,interval:t,fields:n,onStart:i,onStop:o,max:a}){const{setOption:u}=(0,s.useContext)(c),{sortedNames:l}=function({data:e,fields:{time:t,name:n},interval:r,onStart:i,onStop:o},a){const c=(0,s.useRef)(),u=(0,s.useRef)(0),l=(0,s.useMemo)((()=>[...e.reduce(((e,t)=>(e.add(t[n]),e)),new Set)].sort()),[e,n]),d=(0,s.useMemo)((()=>[...e.reduce(((e,n)=>(e.add(n[t]),e)),new Set)].sort()),[e,t]),m=(0,s.useMemo)((()=>e.reduce(((e,n)=>{const r=n[t];let i=e.get(r);return i||(i={time:r,data:[]},e.set(r,i)),i.data.push(n),e}),new Map)),[e]),p=(0,s.useCallback)((()=>{if(u.current>=d.length)return!1;const e=d[u.current];c.current=e;const t=m.get(e)?.data.reduce(((e,t)=>(e[t[n]]=t,e)),{});return u.current+=1,a(t||{},c.current,l),u.current<d.length}),[m,d]);return(0,s.useEffect)((()=>{u.current=0,p(),i?.();const e=setInterval((()=>{p()||(o?.(),clearInterval(e))}),r);return()=>{o?.(),clearInterval(e)}}),[e,l,d,r]),{sortedNames:l,sortedTimes:d}}({fields:n,data:e,interval:t,onStart:i,onStop:o},((e,t,r)=>{u({series:[{id:"time",type:"scatter",data:[{id:"time",value:t}]},{id:"bars",type:"bar",data:r.map((t=>e[t]?.[n.value]??0))}]})}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m,{dependencies:l,children:(0,r.jsx)(y.Category.Y,{animationDurationUpdate:t,animationDuration:t,animationEasing:"exponentialIn",animationEasingUpdate:"exponentialOut",data:l,inverse:!0,max:Math.min(a,l.length)-1,axisLabel:{fontSize:14,formatter:e=>{const[t,n]=e.split("/");return t===n?n:`{owner|${t}/}\n${n}`},rich:{owner:{fontSize:12,opacity:.618}}}})})})}(0,S.D)([F.N,B.T,G.z]);var q=(0,s.forwardRef)((function({formatTime:e,fields:t,data:n,interval:i,children:o,theme:a,max:c=10,...u},d){const{ref:p,recording:f,download:x,start:v,stop:h}=function(e){const{start:t,stop:n,recording:r,download:i,ref:o}=Y();return{ref:(0,s.useCallback)((t=>{o(t?.getDom().querySelector("canvas")??null),e&&("function"==typeof e?e(t):e.current=t)}),[]),start:t,stop:n,recording:r,download:i}}(d),{max:b,min:w}=(0,s.useMemo)((()=>n.reduce(((e,n)=>(n[t.time]>e.max&&(e.max=n[t.time]),n[t.time]<e.min&&(e.min=n[t.time]),e)),{max:"",min:"zzzzzzzzzzzzzzzzzzzzzzz"})),[n]),S=(0,s.useCallback)((t=>e?.(t.value)??String(t.value)),[e]);return(0,r.jsxs)(l,{theme:a,init:{renderer:"canvas",...u},defaults:{animationDuration:0,animationDurationUpdate:i,animationEasing:"linear",animationEasingUpdate:"linear"},ref:p,children:[(0,r.jsxs)(m,{dependencies:[w,b],children:[(0,r.jsx)(N,{containLabel:!1,left:96,top:48,bottom:48,right:48}),(0,r.jsx)(O,{type:"scroll",orient:"horizontal"}),(0,r.jsx)(y.Value.X,{max:"dataMax",axisLabel:{showMaxLabel:!1},position:"top"}),(0,r.jsx)(Z,{trigger:"item",renderMode:"html"})]}),(0,r.jsxs)(m,{dependencies:[w,b],children:[(0,r.jsx)(I,{type:"time",min:w,max:b,bottom:"24",axisLabel:{show:!1},axisTick:{show:!1},height:"0",tooltip:{show:!1},left:80,right:80}),(0,r.jsx)(W,{id:"min",text:e?.(w),textStyle:{fontSize:12,fontWeight:"bold"},left:8,bottom:12}),(0,r.jsx)(W,{id:"max",text:e?.(b),textStyle:{fontSize:12,fontWeight:"bold"},right:8,bottom:12})]}),(0,r.jsxs)(m,{dependencies:[S,t.name,t.value],children:[(0,r.jsx)(M,{id:"time",coordinateSystem:"singleAxis",symbolSize:6,symbolOffset:3,symbolRotate:180,symbol:"path://M,90,0,H,0,l,45,90,L,90,0,z",label:{show:!0,position:"bottom",formatter:S},emphasis:{disabled:!0}}),(0,r.jsx)($,{id:"bars",encode:{x:t.value,y:t.name},realtimeSort:!0,seriesLayoutBy:"column",colorBy:"data",barMaxWidth:45,label:{show:!0,position:"right",valueAnimation:!0}})]}),(0,r.jsx)(g,{cond:!f,once:!0,then:()=>{return(0,r.jsx)(E,{feature:{myDownload:(e=x,{show:!0,onclick:e,iconStyle:{borderColor:"lightgray"},icon:"path://M995.84,1024,28.16,1024C12.8,1024,0,1011.2,0,995.84l0,0c0-15.36,12.8-28.16,28.16-28.16l967.68,0c15.36,0,28.16,12.8,28.16,28.16l0,0C1024,1011.2,1011.2,1024,995.84,1024zM926.72,376.32,926.72,376.32c-10.24-10.24-30.72-10.24-40.96,0L537.6,721.92,537.6,28.16C537.6,12.8,527.36,0,512,0s-25.6,12.8-25.6,28.16l0,693.76L138.24,376.32c-10.24-10.24-30.72-10.24-40.96,0-10.24,10.24-10.24,28.16,0,40.96l394.24,394.24c2.56,2.56,2.56,2.56,5.12,2.56,0,0,2.56,2.56,2.56,2.56,7.68,2.56,15.36,2.56,23.04,0,2.56,0,2.56-2.56,2.56-2.56,2.56,0,5.12-2.56,5.12-2.56l394.24-394.24C936.96,404.48,936.96,386.56,926.72,376.32z"})}});var e}}),(0,r.jsx)(X,{interval:i,fields:t,data:n,onStart:v,onStop:h,max:c}),o]})}));var H=(0,s.forwardRef)((function({data:e,fields:t,children:n,theme:i,formatTime:o,...a},c){const u=function(e,t){return(0,s.useMemo)((()=>{const n=new Set;return e.forEach((e=>n.add(e[t]))),[...n].sort()}),[e,t])}(e,t.name),d=(0,s.useCallback)((e=>o?.(e.value)??String(e.value)),[o]);return(0,r.jsxs)(l,{ref:c,init:a,theme:i,children:[(0,r.jsxs)(m,{dependencies:u,children:[(0,r.jsx)(N,{containLabel:!0,left:8,right:8,top:48,bottom:8}),(0,r.jsx)(y.Time.X,{axisPointer:{label:{formatter:d}}}),(0,r.jsx)(y.Value.Y,{}),(0,r.jsx)(Z,{trigger:"axis",axisPointer:{type:"cross"},renderMode:"html",confine:!0,formatter:e=>`<b>${e[0].axisValueLabel}</b><br/>`+e.sort(((e,n)=>n.value[t.value]-e.value[t.value])).map((e=>`${e.marker}${e.value[t.name]} <span style="float: right; margin-left: 16px;">${e.value[t.value]}</span>`)).join("<br>")}),u.map((e=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(R,{id:e,fromDatasetId:"original",transform:{type:"filter",config:{value:e,dimension:t.name}}}),(0,r.jsx)(C,{datasetId:e,name:e,encode:{x:t.time,y:t.value},showSymbol:!1,smooth:!0,emphasis:{focus:"series"}})]},e)))]}),(0,r.jsx)(R,{id:"original",source:e}),n]})}))},35097:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(34867);function i(e){return(0,r.Z)("MuiDivider",e)}const o=(0,n(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},86886:function(e,t,n){n.d(t,{ZP:function(){return S}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),s=n(95408),c=n(39707),u=n(94780),l=n(90948),d=n(71657);var m=o.createContext(),p=n(34867);function f(e){return(0,p.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),v=n(85893);const h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function y(e,t,n={}){if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:r,sm:i,md:o,lg:a,xl:s}=e;return[Number(r)>0&&(n[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(i)>0&&(n[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(n[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(n[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(n[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const w=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:l,xs:d,zeroMinWidth:m}=e.ownerState;return[t.root,n&&t.container,i&&t.item,m&&t.zeroMinWidth,...y(c,n,t),"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==u&&t[`wrap-xs-${String(u)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==l&&t[`grid-xl-${String(l)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${x.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${b(n)}`,[`& > .${x.item}`]:{paddingTop:b(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${b(n)})`,marginLeft:`-${b(n)}`,[`& > .${x.item}`]:{paddingLeft:b(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,o)=>{let a={};if(t[o]&&(n=t[o]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"==typeof c?c[o]:c;if(null==u)return r;const l=Math.round(n/u*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${l} + ${b(n)})`;d={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}return 0===e.breakpoints.values[o]?Object.assign(r,a):r[e.breakpoints.up(o)]=a,r}),{})}));var S=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(n),{className:l,columns:p,columnSpacing:g,component:x="div",container:b=!1,direction:S="row",item:$=!1,lg:j=!1,md:C=!1,rowSpacing:z,sm:M=!1,spacing:k=0,wrap:R="wrap",xl:A=!1,xs:O=!1,zeroMinWidth:L=!1}=s,Z=(0,r.Z)(s,h),T=z||k,N=g||k,D=o.useContext(m),I=b?p||12:D,P=(0,i.Z)({},s,{columns:I,container:b,direction:S,item:$,lg:j,md:C,sm:M,rowSpacing:T,columnSpacing:N,wrap:R,xl:A,xs:O,zeroMinWidth:L}),E=(e=>{const{classes:t,container:n,direction:r,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:d,xs:m,zeroMinWidth:p}=e,g={root:["root",n&&"container",i&&"item",p&&"zeroMinWidth",...y(c,n),"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,u.Z)(g,f,t)})(P);return(0,v.jsx)(m.Provider,{value:I,children:(0,v.jsx)(w,(0,i.Z)({ownerState:P,className:(0,a.Z)(E.root,l),as:x,ref:t},Z))})}))},23599:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),s=n(94780),c=n(41796),u=n(90948),l=n(71657),d=n(59773),m=n(47739),p=n(58974),f=n(51705),g=n(35097),x=n(1588);var v=(0,x.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var h=(0,x.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),b=n(34867);function y(e){return(0,b.Z)("MuiMenuItem",e)}var w=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=n(85893);const $=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],j=(0,u.ZP)(m.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${h.root}`]:{marginTop:0,marginBottom:0},[`& .${h.inset}`]:{paddingLeft:36},[`& .${v.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.root} svg`]:{fontSize:"1.25rem"}}))));var C=o.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:u="li",dense:m=!1,divider:g=!1,disableGutters:x=!1,focusVisibleClassName:v,role:h="menuitem",tabIndex:b}=n,w=(0,r.Z)(n,$),C=o.useContext(d.Z),z={dense:m||C.dense||!1,disableGutters:x},M=o.useRef(null);(0,p.Z)((()=>{c&&M.current&&M.current.focus()}),[c]);const k=(0,i.Z)({},n,{dense:z.dense,divider:g,disableGutters:x}),R=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:a,classes:c}=e,u={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",a&&"selected"]},l=(0,s.Z)(u,y,c);return(0,i.Z)({},c,l)})(n),A=(0,f.Z)(M,t);let O;return n.disabled||(O=void 0!==b?b:-1),(0,S.jsx)(d.Z.Provider,{value:z,children:(0,S.jsx)(j,(0,i.Z)({ref:A,role:h,tabIndex:O,component:u,focusVisibleClassName:(0,a.Z)(R.focusVisible,v)},w,{ownerState:k,classes:R}))})}))},91262:function(e,t,n){var r=n(67294),i=n(72389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,i.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},7488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),i=n(67294),o=n(86010),a=n(53810),s="details_h+cY";function c(e){var t=Object.assign({},e);return i.createElement(a.PO,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",s,t.className)}))}},29359:function(e,t,n){n.r(t),n.d(t,{Axis:function(){return r.RD},ChartView:function(){return r.TA},ComponentModel:function(){return r.tF},ComponentView:function(){return r.Ir},List:function(){return r.aV},Model:function(){return r.Hn},PRIORITY:function(){return r.Hr},SeriesModel:function(){return r.wJ},color:function(){return r.$_},connect:function(){return r.$j},dataTool:function(){return r.Ok},dependencies:function(){return r.HO},disConnect:function(){return r.eU},disconnect:function(){return r.zP},dispose:function(){return r.B9},env:function(){return r.OB},extendChartView:function(){return r.Zy},extendComponentModel:function(){return r.tv},extendComponentView:function(){return r.Sp},extendSeriesModel:function(){return r.Zr},format:function(){return r.WU},getCoordinateSystemDimensions:function(){return r.wL},getInstanceByDom:function(){return r.JE},getInstanceById:function(){return r.rp},getMap:function(){return r.FU},graphic:function(){return r.Q},helper:function(){return r._y},init:function(){return r.S1},innerDrawElementOnCanvas:function(){return r.z$},matrix:function(){return r.pI},number:function(){return r.Rx},parseGeoJSON:function(){return r.Nu},parseGeoJson:function(){return r.pQ},registerAction:function(){return r.zl},registerCoordinateSystem:function(){return r.RS},registerLayout:function(){return r.qR},registerLoading:function(){return r.yn},registerLocale:function(){return r.I2},registerMap:function(){return r.je},registerPostInit:function(){return r.sq},registerPostUpdate:function(){return r.Br},registerPreprocessor:function(){return r.ds},registerProcessor:function(){return r.Pu},registerTheme:function(){return r.aW},registerTransform:function(){return r.rV},registerUpdateLifecycle:function(){return r.YK},registerVisual:function(){return r.Og},setCanvasCreator:function(){return r.jQ},setPlatformAPI:function(){return r.g2},throttle:function(){return r.P2},time:function(){return r.XV},use:function(){return r.D$},util:function(){return r.D5},vector:function(){return r.xr},version:function(){return r.i8},zrUtil:function(){return r.gf},zrender:function(){return r.x_}});var r=n(15333)},38252:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var a=o[i];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}}}]);