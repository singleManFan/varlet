import{A as V}from"./AppType.675b5d2b.js";import{e as O,r as P}from"./elements.0f1b5e0a.js";import{t as A,p as R}from"./shared.5973ad73.js";import{_ as B}from"./IconSfc.001aecae.js";import{q,r as i,y as L,o as D,c as E,O as W,W as X,X as Y,l,t as n,d as k,a as s,h as a,w as r,F as G,S as J,U as K}from"./vendor.bac705d4.js";import{S as Q}from"./index.a2d2d384.js";import{B as N}from"./index.fc52e8be.js";import{u as Z,a as U,_ as ee,b as te,c as oe,w as ae}from"./en-US.96728a3f.js";import"./index.607269ff.js";import"./index.10726e25.js";import"./zIndex.148a12e4.js";import"./index.389a472f.js";import"./components.7d95671e.js";import"./lock.cdd0a0f9.js";const ne={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const x=1e3,F=60*x,b=60*F,M=24*b,se=q({name:"VarCountdown",props:ne,setup(e){const o=i(0),u=i(!1),t=i(""),C=i(0),S=i(0),c=i({}),d=p=>{var j;const v=Math.floor(p/M),y=Math.floor(p%M/b),w=Math.floor(p%b/F),_=Math.floor(p%F/x),z=Math.floor(p%x),T={days:v,hours:y,minutes:w,seconds:_,milliseconds:z};c.value=T,(j=e.onChange)==null||j.call(e,c.value),t.value=R(e.format,T)},f=()=>{const{time:p,onEnd:v,autoStart:y}=e,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),S.value=_,d(_),_===0){v==null||v();return}(y||u.value)&&(C.value=P(f))},m=()=>{u.value||(u.value=!0,o.value=Date.now()+(S.value||A(e.time)),f())},I=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,O(C.value),f()};return L(()=>e.time,()=>g(),{immediate:!0}),{showTime:t,timeData:c,start:m,pause:I,reset:g}}}),ue={class:"var-countdown"};function ce(e,o,u,t,C,S){return D(),E("div",ue,[W(e.$slots,"default",X(Y(e.timeData)),()=>[l(n(e.showTime),1)])])}var h=B(se,[["render",ce]]);h.install=function(e){e.component(h.name,h)};var le={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},re={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:H,use:me,pack:ie,packs:Me,merge:He}=Z(),de=e=>{oe(e),me(e)};U("zh-CN",ee);U("en-US",te);H("zh-CN",le);H("en-US",re);const fe={name:"CountdownExample",components:{[h.name]:h,[N.name]:N,AppType:V},setup(){const e=i(null),o=i(3e3),u=()=>{Q.info("end!")},t=()=>{};return ae(de),{time:o,pack:ie,end:u,countdown:e,change:t}}},$=e=>(J("data-v-caa2d80e"),e=e(),K(),e),pe={class:"block"},_e=$(()=>s("span",{class:"colon"},":",-1)),ve={class:"block"},he=$(()=>s("span",{class:"colon"},":",-1)),Ce={class:"block"},Se={class:"btn-container"};function we(e,o,u,t,C,S){const c=k("app-type"),d=k("var-countdown"),f=k("var-button");return D(),E(G,null,[s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:t.pack.format},null,8,["format"])]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:r(m=>[s("span",pe,n(m.hours),1),_e,s("span",ve,n(m.minutes),1),he,s("span",Ce,n(m.seconds),1)]),_:1})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.manualControl),1)]),_:1}),a(d,{time:t.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:t.end,onChange:t.change},null,8,["time","onEnd","onChange"]),s("div",Se,[a(f,{type:"primary",onClick:o[0]||(o[0]=m=>e.$refs.countdown.start())},{default:r(()=>[l(n(t.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=m=>e.$refs.countdown.pause())},{default:r(()=>[l(n(t.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=m=>e.$refs.countdown.reset())},{default:r(()=>[l(n(t.pack.resetText),1)]),_:1})])])],64)}var $e=B(fe,[["render",we],["__scopeId","data-v-caa2d80e"]]);export{$e as default};