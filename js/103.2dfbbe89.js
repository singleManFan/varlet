(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[103],{4960:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var o=t(2609),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,".image-preview-demo .var-button[data-v-0ca6f976] {\n  margin-top: 10px;\n}\n",""]);const a=i},103:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var o=t(7875),i=t(349),a=(0,o.HX)("data-v-0ca6f976");(0,o.dD)("data-v-0ca6f976");var l={class:"image-preview-demo"},c={class:"image-preview-demo"};(0,o.Cn)();var r=a((function(e,n,t,r,s,u){var p=(0,o.up)("app-type"),w=(0,o.up)("var-button"),v=(0,o.up)("var-image-preview");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",l,[(0,o.Wm)(p,null,{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.functionCall),1)]})),_:1}),(0,o.Wm)(w,{type:"primary",block:"",onClick:e.preview},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.preview),1)]})),_:1},8,["onClick"]),(0,o.Wm)(w,{type:"primary",block:"",onClick:e.previewCallback},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.callBack),1)]})),_:1},8,["onClick"])]),(0,o.Wm)("div",c,[(0,o.Wm)(p,null,{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.componentCall),1)]})),_:1}),(0,o.Wm)(w,{type:"warning",block:"",onClick:n[1]||(n[1]=function(n){return e.show=!0})},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.basicUse),1)]})),_:1}),(0,o.Wm)(v,{images:e.image,show:e.show,"onUpdate:show":n[2]||(n[2]=function(n){return e.show=n})},null,8,["images","show"]),(0,o.Wm)(w,{type:"warning",block:"",onClick:n[3]||(n[3]=function(n){return e.currentShow=!0})},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.specifyInitialPosition),1)]})),_:1}),(0,o.Wm)(v,{images:e.images,show:e.currentShow,"onUpdate:show":n[4]||(n[4]=function(n){return e.currentShow=n}),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),(0,o.Wm)(w,{type:"warning",block:"",onClick:n[5]||(n[5]=function(n){return e.closeShow=!0})},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.displayCloseButton),1)]})),_:1}),(0,o.Wm)(v,{images:e.images,show:e.closeShow,"onUpdate:show":n[6]||(n[6]=function(n){return e.closeShow=n}),closeable:!0},null,8,["images","show"]),(0,o.Wm)(w,{type:"warning",block:"",onClick:n[7]||(n[7]=function(n){return e.closeEventShow=!0})},{default:a((function(){return[(0,o.Uk)((0,i.zw)(e.pack.listenCloseEvents),1)]})),_:1}),(0,o.Wm)(v,{images:e.images,show:e.closeEventShow,"onUpdate:show":n[8]||(n[8]=function(n){return e.closeEventShow=n}),onClose:e.handleCloseEvent},null,8,["images","show","onClose"])])],64)})),s=t(9162),u=t(9521),p=t(9800),w=t(9878),v=t(641),m=t(8732),f=t(7245),h=t(9486),d=(0,h.bU)(),k=d.add,g=d.use,C=d.pack,b=(d.packs,d.merge,function(e){(0,h.D$)(e),g(e)});(0,h.IH)("zh-CN",m.Z),(0,h.IH)("en-US",f.Z),k("zh-CN",{functionCall:"函数调用",componentCall:"组件调用",preview:"基本使用",callBack:"处理回调函数",basicUse:"基本使用",specifyInitialPosition:"指定初始位置",displayCloseButton:"展示关闭按钮",listenCloseEvents:"监听关闭事件",shutdownEvent:"触发了关闭事件。"}),k("en-US",{functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered."});var y,U=t(6125),Z=t(9947);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const W=(0,o.aZ)({name:"ImagePreviewExample",components:(y={},S(y,s.Z.Component.name,s.Z.Component),S(y,u.Z.name,u.Z),S(y,p.Z.name,p.Z),y),setup:function(){var e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],n=["https://varlet.gitee.io/varlet-ui/cat.jpg"];(0,U.jS)(b);var t=Z.Z.touchmoveForbid;return(0,U.Id)((function(e){"pc"===e&&(Z.Z.touchmoveForbid=!1)})),(0,o.Ah)((function(){Z.Z.touchmoveForbid=t})),{preview:function(){(0,s.Z)(n)},previewCallback:function(){(0,s.Z)({images:e,onChange:function(e){console.log("index",e)}})},pack:C,show:(0,v.iH)(!1),currentShow:(0,v.iH)(!1),closeShow:(0,v.iH)(!1),closeEventShow:(0,v.iH)(!1),images:(0,v.iH)(e),image:(0,v.iH)(n),handleCloseEvent:function(){(0,w.ZP)({content:C.value.shutdownEvent,duration:1e3})}}}});var _=t(6062),E=t.n(_),H=t(4960);E()(H.Z,{insert:"head",singleton:!1}),H.Z.locals,W.render=r,W.__scopeId="data-v-0ca6f976";const z=W}}]);