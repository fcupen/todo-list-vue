(function(e){function t(t){for(var n,r,a=t[0],s=t[1],l=t[2],d=0,b=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==c[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},c={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},b83b:function(e,t,o){"use strict";o("ea14")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={id:"nav"},i=Object(n["f"])("ToDo List"),r={class:"container"};function a(e,t){var o=Object(n["v"])("router-link"),a=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",c,[Object(n["g"])(o,{to:"/"},{default:Object(n["B"])((function(){return[i]})),_:1})]),Object(n["g"])("div",r,[Object(n["g"])(a)])],64)}o("b83b");const s={};s.render=a;var l=s,u=o("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=o("6c02"),b={class:"row"},O={class:"col s12"},f={class:"row"},p={class:"input-field col s12"},v=Object(n["g"])("label",null,"To do",-1),j={class:"col s12"},h={class:"collection"},g=Object(n["g"])("li",{class:"collection-header"},[Object(n["g"])("h4",null,"ToDo List")],-1),m={key:0},y={class:"flex"},k={class:"secondary-content flex"},T={key:1},w={class:"w100 input-field col s12"};function D(e,t,o,c,i,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",b,[Object(n["g"])("form",O,[Object(n["g"])("div",f,[Object(n["g"])("div",p,[Object(n["C"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.todo=t}),type:"text",disabled:-1!==e.isEdit},null,8,["disabled"]),[[n["z"],e.todo]]),v]),Object(n["g"])("div",j,[Object(n["g"])("button",{class:[{disabled:-1!==e.isEdit},"waves-effect waves-light btn"],onClick:t[2]||(t[2]=function(t){return-1===e.isEdit?e.save():""})}," Add ",2)])])])]),Object(n["g"])("ul",h,[g,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.todos,(function(o,c){return Object(n["p"])(),Object(n["d"])("li",{class:["collection-item",{"teal darken-1 white-text":o.check}],key:c},[e.isEdit!==c?(Object(n["p"])(),Object(n["d"])("div",m,[Object(n["g"])("div",y,[Object(n["g"])("i",{onClick:function(t){return e.move(-1,c)},class:["cursor-pointer material-icons",{"white-text":o.check}]}," arrow_upward ",10,["onClick"]),Object(n["g"])("i",{onClick:function(t){return e.move(1,c)},class:["cursor-pointer material-icons",{"white-text":o.check}]}," arrow_downward ",10,["onClick"]),Object(n["g"])("div",{class:"cursor-pointer w100",onClick:function(t){return e.check(c)}},Object(n["x"])(o.todo),9,["onClick"]),Object(n["g"])("a",k,[Object(n["g"])("i",{onClick:function(t){e.isEdit=c,e.todoToUpdate=o},class:["cursor-pointer material-icons",{"white-text":o.check}]}," edit ",10,["onClick"]),Object(n["g"])("i",{onClick:function(t){return e.deleteTodo(c)},class:["cursor-pointer material-icons",{"white-text":o.check}]}," delete ",10,["onClick"])])])])):Object(n["e"])("",!0),e.isEdit===c?(Object(n["p"])(),Object(n["d"])("div",T,[Object(n["g"])("div",w,[Object(n["C"])(Object(n["g"])("input",{placeholder:e.todoToUpdate.todo,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.todoToUpdate.todo=t}),type:"text",class:"validate"},null,8,["placeholder"]),[[n["z"],e.todoToUpdate.todo]])]),Object(n["g"])("button",{onClick:function(t){return e.updateTodo(c)},class:"waves-effect waves-light btn"}," Update ",8,["onClick"]),Object(n["g"])("button",{style:{"margin-left":"1em"},onClick:t[4]||(t[4]=function(t){return e.isEdit=-1}),class:"waves-effect waves-light btn red lighten-4"}," Close ")])):Object(n["e"])("",!0)],2)})),128))])],64)}var E=o("d4ec"),_=o("bee2"),S=o("262e"),C=o("2caf"),U=(o("a434"),o("9ab4")),x=o("ce1f"),A=o("5502"),P=function(e){Object(S["a"])(o,e);var t=Object(C["a"])(o);function o(){var e;return Object(E["a"])(this,o),e=t.apply(this,arguments),e.todos=[],e.todo="",e.todoToUpdate={},e.isEdit=-1,e.store=Object(A["b"])(),e}return Object(_["a"])(o,[{key:"save",value:function(){this.store.commit("ADD_TODO",[{todo:this.todo,check:!1}]),this.todo="",this.showToast("Created")}},{key:"check",value:function(e){-1===this.isEdit&&(this.store.commit("CHECK_TODO",e),this.showToast("Updated"))}},{key:"deleteTodo",value:function(e){this.store.commit("DELETE_TODO",e),this.showToast("Deleted")}},{key:"updateTodo",value:function(e){this.store.commit("UPDATE_TODO",{todo:this.todoToUpdate,id:e}),this.isEdit=-1,this.showToast("Updated"),this.todoToUpdate={}}},{key:"move",value:function(e,t){var o=this.todos.splice(t,1);this.todos.splice(Math.abs(t+1*e),0,o[0]),this.store.commit("UPDATE_ALL_TODO",this.todos),this.showToast("Item moved")}},{key:"created",value:function(){var e=this;this.todos=Object(n["b"])((function(){return e.store.state.todos})),this.store.dispatch("GET_TODOS")}},{key:"showToast",value:function(e){M.toast({html:e})}}]),o}(x["b"]);P=Object(U["a"])([Object(x["a"])({components:{}})],P);var V=P;V.render=D;var L=V;function N(e,t,o,c,i,r){var a=Object(n["v"])("HelloWorld");return Object(n["p"])(),Object(n["d"])(a,{msg:"Welcome to Your Vue.js + TypeScript App"})}function I(e,t,o,c,i,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("h1",null,Object(n["x"])(e.msg),1),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.updateTitle()})},"Cambiar"),Object(n["f"])(" "+Object(n["x"])(e.$store.state.title)+" "+Object(n["x"])(e.title),1)],64)}var J=function(e){Object(S["a"])(o,e);var t=Object(C["a"])(o);function o(){var e;return Object(E["a"])(this,o),e=t.apply(this,arguments),e.store=Object(A["b"])(),e.title=null,e}return Object(_["a"])(o,[{key:"updateTitle",value:function(){this.store.commit("UPDATE_TITLE",(new Date).getTime()),this.$router.push("/")}},{key:"created",value:function(){var e=this;this.title=Object(n["b"])((function(){return e.store.state.title}))}}]),o}(x["b"]);J=Object(U["a"])([Object(x["a"])({props:{msg:String}})],J);var H=J;H.render=I;var W=H,z=function(e){Object(S["a"])(o,e);var t=Object(C["a"])(o);function o(){var e;return Object(E["a"])(this,o),e=t.apply(this,arguments),e.message=null,e}return Object(_["a"])(o,[{key:"data",value:function(){return{hello:void 0}}},{key:"beforeCreate",value:function(){console.log("beforeCreate")}},{key:"created",value:function(){console.log("created")}},{key:"beforeMounted",value:function(){console.log("beforeMounted")}},{key:"mounted",value:function(){console.log("mounted")}},{key:"beforeUpdate",value:function(){console.log("beforeUpdate")}},{key:"updated",value:function(){console.log("updated")}},{key:"activated",value:function(){console.log("activated")}},{key:"deactivated",value:function(){console.log("deactivated")}},{key:"beforeDestroy",value:function(){console.log("beforeDestroy")}},{key:"destroyed",value:function(){console.log("destroyed")}}]),o}(x["b"]);z=Object(U["a"])([Object(x["a"])({components:{HelloWorld:W}})],z);var B=z;B.render=N;var F=B,G=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:F}],K=Object(d["a"])({history:Object(d["b"])(),routes:G}),$=K,q=o("2909"),X=Object(A["a"])({state:{title:"VUEX",todos:[]},getters:{},mutations:{ADD_TODO:function(e,t){var o;(o=e.todos).unshift.apply(o,Object(q["a"])(t)),localStorage.setItem("TODOS_VUE",JSON.stringify(e.todos))},CHECK_TODO:function(e,t){e.todos[t].check=!e.todos[t].check,localStorage.setItem("TODOS_VUE",JSON.stringify(e.todos))},DELETE_TODO:function(e,t){e.todos.splice(t,1),localStorage.setItem("TODOS_VUE",JSON.stringify(e.todos))},UPDATE_TODO:function(e,t){e.todos[t.id]=t.todo,localStorage.setItem("TODOS_VUE",JSON.stringify(e.todos))},UPDATE_ALL_TODO:function(e,t){e.todos=t,localStorage.setItem("TODOS_VUE",JSON.stringify(e.todos))}},actions:{GET_TODOS:function(e){e.commit;var t=e.state,o=localStorage,n=o.hasOwnProperty("TODOS_VUE")?JSON.parse(o.getItem("TODOS_VUE")):[];t.todos=n}}}),Y=X;o("dc53"),o("4d5c");Object(n["c"])(l).use($).use(Y).mount("#app")},ea14:function(e,t,o){}});
//# sourceMappingURL=app.6ea0d2ac.js.map