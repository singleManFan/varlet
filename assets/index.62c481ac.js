var h=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(e,l,i)=>l in e?h(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i,V=(e,l)=>{for(var i in l||(l={}))y.call(l,i)&&c(e,i,l[i]);if(g)for(var i of g(l))k.call(l,i)&&c(e,i,l[i]);return e},j=(e,l)=>A(e,B(l));import{U as E}from"./index.3db753d0.js";import{B as w}from"./index.7548764b.js";import{S as b}from"./index.83b93620.js";import{D as z}from"./index.ff285607.js";import{A as C}from"./AppType.eb8ea594.js";import{u as S,a as R,_ as x,b as N,c as _,w as T}from"./en-US.64d12132.js";import{_ as D}from"./elevation.7f6c0241.js";import{p as I,Z as M,d as m,o as O,c as L,h as t,w as r,F as P,V as W,W as Z,l as u,t as n,a as q}from"./vendor.ea41cd30.js";import"./provide.719f686d.js";import"./components.654cdc86.js";import"./shared.af52c411.js";import"./index.9d72b942.js";import"./elements.98f973b7.js";import"./index.6b77ffa4.js";import"./lock.67e58c2a.js";import"./index.510439cf.js";import"./zIndex.c624737f.js";import"./index.05bed42d.js";import"./index.9b25299a.js";import"./provide.e310c363.js";import"./index.6c4e179b.js";import"./index.931337ba.js";import"./index.b8b0c6dd.js";var G={basicUsage:"\u57FA\u672C\u4F7F\u7528",preview:"\u6587\u4EF6\u9884\u89C8",state:"\u4E0A\u4F20\u72B6\u6001",maxlength:"\u6587\u4EF6\u6570\u91CF\u9650\u5236",maxsize:"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",beforeRead:"\u4E0A\u4F20\u9884\u5904\u7406",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",style:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",upload:"\u4E0A\u4F20",onRemove:"\u5220\u9664\u4E8B\u4EF6"},H={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",onRemove:"remove action"};const{add:U,use:J,pack:K,packs:Be,merge:ye}=S(),Q=e=>{_(e),J(e)};R("zh-CN",x);R("en-US",N);U("zh-CN",G);U("en-US",H);const X={name:"UploaderExample",components:{VarUploader:E,VarButton:w,AppType:C},setup(){const e=I({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files11:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}]}),l=a=>console.log(a),i=a=>{a.state="loading",setTimeout(()=>{a.state="success"},1e3)},s=a=>console.log(a),f=a=>a.file.size<=1024*10,v=()=>new Promise(a=>{z({title:"\u662F\u5426\u5220\u9664",message:"\u786E\u5B9A\u5220\u9664\uFF1F\u4E0D\u80FD\u53CD\u6094\u6EF4\u963F\u3002",onBeforeClose(d,p){d==="confirm"?(b.loading("\u6B63\u5728\u6267\u884C\u5220\u9664"),setTimeout(()=>{b.success("\u5220\u9664\u5B8C\u6BD5"),a(),p()},1e3)):(a(!0),p())}})});return T(Q),j(V({pack:K},M(e)),{handleAfterRead:l,handleAfterRead2:i,handleOversize:s,handleBeforeRead:f,handleRemoveFile:v})}},Y=e=>(W("data-v-a9167c92"),e=e(),Z(),e),$=Y(()=>q("div",{class:"space"},null,-1));function ee(e,l,i,s,f,v){const a=m("app-type"),d=m("var-uploader"),p=m("var-button");return O(),L(P,null,[t(a,null,{default:r(()=>[u(n(s.pack.basicUsage),1)]),_:1}),t(d,{modelValue:e.files,"onUpdate:modelValue":l[0]||(l[0]=o=>e.files=o),onAfterRead:s.handleAfterRead},null,8,["modelValue","onAfterRead"]),t(a,null,{default:r(()=>[u(n(s.pack.preview),1)]),_:1}),t(d,{modelValue:e.files2,"onUpdate:modelValue":l[1]||(l[1]=o=>e.files2=o),onRemove:s.handleRemoveFile},null,8,["modelValue","onRemove"]),t(a,null,{default:r(()=>[u(n(s.pack.state),1)]),_:1}),t(d,{modelValue:e.files3,"onUpdate:modelValue":l[2]||(l[2]=o=>e.files3=o),onAfterRead:s.handleAfterRead2},null,8,["modelValue","onAfterRead"]),t(a,null,{default:r(()=>[u(n(s.pack.maxlength),1)]),_:1}),t(d,{modelValue:e.files4,"onUpdate:modelValue":l[3]||(l[3]=o=>e.files4=o),maxlength:1},null,8,["modelValue"]),t(a,null,{default:r(()=>[u(n(s.pack.maxsize),1)]),_:1}),t(d,{modelValue:e.files5,"onUpdate:modelValue":l[4]||(l[4]=o=>e.files5=o),maxsize:1024,onOversize:s.handleOversize},null,8,["modelValue","onOversize"]),t(a,null,{default:r(()=>[u(n(s.pack.beforeRead),1)]),_:1}),t(d,{modelValue:e.files7,"onUpdate:modelValue":l[5]||(l[5]=o=>e.files7=o),onBeforeRead:s.handleBeforeRead},null,8,["modelValue","onBeforeRead"]),t(a,null,{default:r(()=>[u(n(s.pack.disabled),1)]),_:1}),t(d,{disabled:"",modelValue:e.files8,"onUpdate:modelValue":l[6]||(l[6]=o=>e.files8=o)},null,8,["modelValue"]),t(a,null,{default:r(()=>[u(n(s.pack.readonly),1)]),_:1}),t(d,{readonly:"",modelValue:e.files9,"onUpdate:modelValue":l[7]||(l[7]=o=>e.files9=o)},null,8,["modelValue"]),t(a,null,{default:r(()=>[u(n(s.pack.validate),1)]),_:1}),t(d,{rules:[(o,F)=>F.getError(o).length===0||s.pack.validateMessage],modelValue:e.files10,"onUpdate:modelValue":l[8]||(l[8]=o=>e.files10=o)},null,8,["rules","modelValue"]),t(a,null,{default:r(()=>[u(n(s.pack.onRemove),1)]),_:1}),t(d,{modelValue:e.files11,"onUpdate:modelValue":l[9]||(l[9]=o=>e.files11=o),onRemove:s.handleRemoveFile},null,8,["modelValue","onRemove"]),t(a,null,{default:r(()=>[u(n(s.pack.style),1)]),_:1}),t(d,{modelValue:e.files6,"onUpdate:modelValue":l[10]||(l[10]=o=>e.files6=o)},{default:r(()=>[t(p,{type:"primary"},{default:r(()=>[u(n(s.pack.upload),1)]),_:1})]),_:1},8,["modelValue"]),$],64)}var ke=D(X,[["render",ee],["__scopeId","data-v-a9167c92"]]);export{ke as default};