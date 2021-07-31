(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[1086],{6378:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,"\n.btn-container[data-v-46a712db] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.block[data-v-46a712db] {\n  background: #ff9f00;\n  color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.colon[data-v-46a712db] {\n  margin: 0 5px;\n  font-size: 18px;\n  font-weight: 500;\n}\n",""]);const r=o},389:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]);const r=o},1086:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>O});var a=t(7875),o=t(349),r=(0,a.HX)("data-v-46a712db");(0,a.dD)("data-v-46a712db");var i={class:"block"},u=(0,a.Wm)("span",{class:"colon"},":",-1),l={class:"block"},s=(0,a.Wm)("span",{class:"colon"},":",-1),c={class:"block"},m={class:"btn-container"};(0,a.Cn)();var d=r((function(n,e,t,d,f,p){var v=(0,a.up)("app-type"),b=(0,a.up)("var-countdown"),w=(0,a.up)("var-button");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.basicUsage),1)]})),_:1}),(0,a.Wm)(b,{time:"108000000"})]),(0,a.Wm)("div",null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.customFormat),1)]})),_:1}),(0,a.Wm)(b,{time:"108000000",format:d.pack.format},null,8,["format"])]),(0,a.Wm)("div",null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.showMillisecond),1)]})),_:1}),(0,a.Wm)(b,{time:"108000000",format:"HH : mm : ss : SS"})]),(0,a.Wm)("div",null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.customStyle),1)]})),_:1}),(0,a.Wm)(b,{time:"108000000"},{default:r((function(n){return[(0,a.Wm)("span",i,(0,o.zw)(n.hours),1),u,(0,a.Wm)("span",l,(0,o.zw)(n.minutes),1),s,(0,a.Wm)("span",c,(0,o.zw)(n.seconds),1)]})),_:1})]),(0,a.Wm)("div",null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.manualControl),1)]})),_:1}),(0,a.Wm)(b,{time:d.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:d.end,onChange:d.change},null,8,["time","onEnd","onChange"]),(0,a.Wm)("div",m,[(0,a.Wm)(w,{type:"primary",onClick:e[1]||(e[1]=function(e){return n.$refs.countdown.start()})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.startText),1)]})),_:1}),(0,a.Wm)(w,{onClick:e[2]||(e[2]=function(e){return n.$refs.countdown.pause()})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.pauseText),1)]})),_:1}),(0,a.Wm)(w,{onClick:e[3]||(e[3]=function(e){return n.$refs.countdown.reset()})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(d.pack.resetText),1)]})),_:1})])])],64)})),f=t(9800),p={class:"var-countdown"},v=t(641),b={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}},w=t(4268),k=t(8442),h=36e5,x=24*h;const g=(0,a.aZ)({name:"VarCountdown",props:b,setup:function(n){var e=(0,v.iH)(0),t=(0,v.iH)(!1),o=(0,v.iH)(""),r=(0,v.iH)(0),i=(0,v.iH)(0),u=(0,v.iH)({}),l=function a(){var l=n.time,s=n.onEnd,c=n.autoStart,m=Date.now();e.value||(e.value=m+(0,k.He)(l));var d=e.value-m;d<0&&(d=0),i.value=d,function(e){var t,a={days:Math.floor(e/x),hours:Math.floor(e%x/h),minutes:Math.floor(e%h/6e4),seconds:Math.floor(e%6e4/1e3),milliseconds:Math.floor(e%1e3)};u.value=a,null===(t=n.onChange)||void 0===t||t.call(n,u.value),o.value=(0,k.Ou)(n.format,a)}(d),0!==d?(c||t.value)&&(r.value=(0,w.U7)(a)):null==s||s()},s=function(){e.value=0,t.value=!1,(0,w.Wx)(r.value),l()};return(0,a.YP)((function(){return n.time}),(function(){return s()}),{immediate:!0}),{showTime:o,timeData:u,start:function(){t.value||(t.value=!0,e.value=Date.now()+(i.value||(0,k.He)(n.time)),l())},pause:function(){t.value=!1},reset:s}}});var y=t(6062),z=t.n(y),W=t(389);z()(W.Z,{insert:"head",singleton:!1}),W.Z.locals,g.render=function(n,e,t,r,i,u){return(0,a.wg)(),(0,a.j4)("div",p,[(0,a.WI)(n.$slots,"default",n.timeData,(function(){return[(0,a.Uk)((0,o.zw)(n.showTime),1)]}))])};const H=g;H.install=function(n){n.component(H.name,H)};const C=H;var S=t(9878),U=t(9521),_=t(8732),Z=t(7245),T=t(9486),D=(0,T.bU)(),M=D.add,j=D.use,F=D.pack,E=(D.packs,D.merge,function(n){(0,T.D$)(n),j(n)});(0,T.IH)("zh-CN",_.Z),(0,T.IH)("en-US",Z.Z),M("zh-CN",{basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"}),M("en-US",{basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"});var $,I=t(6125);function P(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const N={name:"CountdownExample",components:($={},P($,C.name,C),P($,U.Z.name,U.Z),P($,"AppType",f.Z),$),setup:function(){var n=(0,v.iH)(null),e=(0,v.iH)(3e3);return(0,I.jS)(E),{time:e,pack:F,end:function(){S.ZP.info("end!")},countdown:n,change:function(){}}}};var B=t(6378);z()(B.Z,{insert:"head",singleton:!1}),B.Z.locals,N.render=d,N.__scopeId="data-v-46a712db";const O=N}}]);