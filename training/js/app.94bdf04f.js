(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"12c60903"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"7c8e17a2"}[e]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/training/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"15ba":function(e,t,a){},"365c":function(e,t,a){"use strict";a.d(t,"j",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"k",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return d})),a.d(t,"i",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"l",(function(){return f})),a.d(t,"d",(function(){return v})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return b}));var n=a("bc3a"),r=a.n(n),s="http://3dcb8fd1658e.ngrok.io/api",i=function(e){return r.a.post("".concat(s,"/user/login"),e)},o=function(){return r.a.get("".concat(s,"/employee"))},c=function(e){return r.a.get("".concat(s,"/employee/").concat(e))},u=function(e){return r.a.put("".concat(s,"/employee/"),e)},l=function(e){return r.a.post("".concat(s,"/employee/"),e)},d=function(){return r.a.get("".concat(s,"/task"))},p=function(e){return r.a.get("".concat(s,"/task/").concat(e))},m=function(e){return r.a.delete("".concat(s,"/task/").concat(e))},f=function(e){return r.a.put("".concat(s,"/task/"),e)},v=function(e){return r.a.post("".concat(s,"/task/"),e)},h=function(e){return r.a.put("".concat(s,"/task/do/"),[e])},b=function(e){return r.a.post("".concat(s,"/check/"),e)}},"3f22":function(e,t,a){"use strict";var n=a("15ba"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background}},[a("task-modal",{model:{value:e.isTaskModalShown,callback:function(t){e.isTaskModalShown=t},expression:"isTaskModalShown"}}),a("user-modal",{model:{value:e.isEmployeeModalShown,callback:function(t){e.isEmployeeModalShown=t},expression:"isEmployeeModalShown"}}),e.visible?a("v-app-bar",{attrs:{extended:"","extension-height":"1","clipped-left":"",app:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[a("v-divider")]},proxy:!0}],null,!1,941174187)},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1):e._e(),e.visible?a("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-2"},[a("v-btn",{staticClass:"text-none",attrs:{text:"",block:""},on:{click:e.logout}},[e._v("Выход")])],1)]},proxy:!0}],null,!1,532135155),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:"",shaped:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",color:"primary",to:t.route}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1):e._e(),a("v-content",{attrs:{app:""}},[a("router-view")],1)],1)},s=[],i=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logger"},[e._v(" "+e._s(e.$store.state)+" ")])},c=[],u={},l=u,d=(a("3f22"),a("2877")),p=Object(d["a"])(l,o,c,!1,null,"5d0d5bfc",null),m=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{value:e.value,persistent:"","max-width":"600px"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Задача")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Название*",required:"","prepend-icon":"mdi-text-short",rules:[e.rules.required,e.rules.title]},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Описание",rows:"2","prepend-icon":"mdi-text"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:[{value:0,label:"Easy"},{value:1,label:"Medium"},{value:2,label:"Strong"}],label:"Сложность*","item-value":"value","item-text":"label","prepend-icon":"mdi-view-list-outline"},model:{value:e.complexity,callback:function(t){e.complexity=t},expression:"complexity"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Стоимость",rules:[e.rules.isNumber],type:"number",min:"0","prepend-icon":"mdi-cash-100"},model:{value:e.payment,callback:function(t){e.payment=t},expression:"payment"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Продолжительность (часов)","prepend-icon":"mdi-clock-outline",rules:[e.rules.isNumber],type:"number",min:"0"},model:{value:e.estimatedDuration,callback:function(t){e.estimatedDuration=t},expression:"estimatedDuration"}})],1),e.taskData.id?a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Дата начала","prepend-icon":"mdi-calendar",readonly:"",disabled:""},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}})],1):e._e(),e.taskData.id?a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Дата окончания","prepend-icon":"mdi-calendar",readonly:"",disabled:""},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}})],1):e._e(),e.taskData.id?a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{"prepend-icon":"mdi-account-outline",items:e.employees,"item-value":"id",label:"Сотрудники",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v(" "+e._s(t.item.firstName)+" "+e._s(t.item.lastName)+"; ")]}},{key:"item",fn:function(t){return[e._v(" "+e._s(t.item.firstName)+" "+e._s(t.item.lastName)+" ")]}}],null,!1,3997758599),model:{value:e.taskEmployees,callback:function(t){e.taskEmployees=t},expression:"taskEmployees"}})],1):e._e()],1)],1)],1),a("small",[e._v("*означает что поле обязательно")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v(" Отмена ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveData}},[e._v(" Сохранить ")])],1)],1)],1)},v=[],h=(a("a4d3"),a("e01a"),a("d81d"),a("a9e3"),a("ac1f"),a("1276"),a("5530")),b=a("9b52"),k={name:"TaskModal",props:{value:[Boolean,Number],default:!1},data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1,rules:{required:b["e"],isNumber:b["c"],title:b["f"]}}},computed:Object(h["a"])(Object(h["a"])({},Object(i["e"])(["taskData","employees"])),{},{title:{get:function(){return this.taskData.title},set:function(e){this.setTaskData({field:"title",value:e})}},description:{get:function(){return this.taskData.description},set:function(e){this.setTaskData({field:"description",value:e})}},estimatedDuration:{get:function(){return this.taskData.estimatedDuration},set:function(e){this.setTaskData({field:"estimatedDuration",value:e})}},complexity:{get:function(){return this.taskData.complexity},set:function(e){this.setTaskData({field:"complexity",value:e})}},payment:{get:function(){return this.taskData.payment},set:function(e){this.setTaskData({field:"payment",value:e})}},start:{get:function(){return"0001-01-01T00:00:00"===this.taskData.start?"-":this.taskData.start.split("T")[0]},set:function(e){this.setTaskData({field:"start",value:e})}},end:{get:function(){return"0001-01-01T00:00:00"===this.taskData.end?"-":this.taskData.end.split("T")[0]},set:function(e){this.setTaskData({field:"end",value:e})}},isFinished:{get:function(){return this.taskData.isFinished},set:function(e){this.setTaskData({field:"isFinished",value:e})}},taskEmployees:{get:function(){return this.taskData.taskEmployees},set:function(e){this.setTaskData({field:"taskEmployees",value:e})}}}),methods:Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(i["d"])(["setTaskData"])),Object(i["b"])(["sendTaskData"])),{},{saveData:function(){if(this.$refs.form.validate()){var e=Object(h["a"])({},this.taskData);e.taskEmployees=e.taskEmployees?e.taskEmployees.map((function(e){return{employeeId:e}})):[],this.sendTaskData(e),this.$emit("input",!1)}else console.log("Incorrect Data")}})},y=k,g=a("6544"),x=a.n(g),D=a("8336"),w=a("b0af"),T=a("99d9"),j=a("62ad"),E=a("a523"),O=a("169a"),_=a("4bd4"),V=a("0fd9"),N=a("b974"),L=a("2fa4"),R=a("8654"),C=a("a844"),S=Object(d["a"])(y,f,v,!1,null,null,null),$=S.exports;x()(S,{VBtn:D["a"],VCard:w["a"],VCardActions:T["a"],VCardText:T["c"],VCardTitle:T["d"],VCol:j["a"],VContainer:E["a"],VDialog:O["a"],VForm:_["a"],VRow:V["a"],VSelect:N["a"],VSpacer:L["a"],VTextField:R["a"],VTextarea:C["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{value:e.value,persistent:"","max-width":"600px"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Сотрудник")])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Имя*",required:"","prepend-icon":"mdi-text-short",type:"text",rules:[e.rules.required,e.rules.title]},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Фамилия*",required:"",type:"text","prepend-icon":"mdi-text-short",rules:[e.rules.required,e.rules.title]},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Возраст*",required:"",type:"number",min:"1",max:"130","prepend-icon":"mdi-text-short",rules:[e.rules.required,e.rules.isNumber,e.rules.isAgeInRange]},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Зарплата*",required:"",type:"number",min:"0","prepend-icon":"mdi-text-short",rules:[e.rules.isNumber]},model:{value:e.salary,callback:function(t){e.salary=t},expression:"salary"}})],1)],1)],1)],1),a("small",[e._v("*означает что поле обязательно")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v(" Отмена ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveData}},[e._v(" Сохранить ")])],1)],1)],1)},I=[],A={name:"UserModal",props:{value:[Boolean,Number],default:!1},data:function(){return{rules:{required:b["e"],title:b["f"],isNumber:b["c"],isAgeInRange:b["b"]}}},computed:Object(h["a"])(Object(h["a"])({},Object(i["e"])(["employeeData","employees"])),{},{firstName:{get:function(){return this.employeeData.firstName},set:function(e){this.setEmployeeData({field:"firstName",value:e})}},lastName:{get:function(){return this.employeeData.lastName},set:function(e){this.setEmployeeData({field:"lastName",value:e})}},age:{get:function(){return this.employeeData.age},set:function(e){this.setEmployeeData({field:"age",value:parseInt(e)})}},salary:{get:function(){return this.employeeData.salary},set:function(e){this.setEmployeeData({field:"salary",value:parseInt(e)})}}}),methods:Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(i["d"])(["setEmployeeData"])),Object(i["b"])(["sendEmployeeData"])),{},{saveData:function(){this.$refs.form.validate()?(this.sendEmployeeData(this.employeeData),this.$emit("input",!1)):console.log("Incorrect Data")}})},q=A,P=Object(d["a"])(q,M,I,!1,null,null,null),B=P.exports;x()(P,{VBtn:D["a"],VCard:w["a"],VCardActions:T["a"],VCardText:T["c"],VCardTitle:T["d"],VCol:j["a"],VContainer:E["a"],VDialog:O["a"],VForm:_["a"],VRow:V["a"],VSpacer:L["a"],VTextField:R["a"]});var F={name:"App",components:{Logger:m,TaskModal:$,UserModal:B},data(){return{drawer:!0,snackbar:!0,timeout:1500,items:[{title:"Дешборд",icon:"mdi-bulletin-board",route:"/home"},{title:"Задания",icon:"mdi-file-outline",route:"/tasks"},{title:"Сотрудники",icon:"mdi-account-multiple-outline",route:"/users"}]}},methods:{logout(){this.$session.destroy(),this.$axios.defaults.headers.common["Authorization"]="",this.$router.push("/")},...Object(i["b"])(["hideTaskModal","hideEmployeeModal"])},computed:{visible(){return"login"!==this.$route.name&&"register"!==this.$route.name},theme(){return this.$vuetify.theme.dark?"dark":"light"},isTaskModalShown:{get(){return this.taskData&&Object.keys(this.taskData).length},set(e){e||this.hideTaskModal()}},isEmployeeModalShown:{get(){return this.employeeData&&Object.keys(this.employeeData).length},set(e){e||this.hideEmployeeModal()}},...Object(i["e"])(["taskData","employeeData"])},mounted(){this.$session.get("jwt")&&(this.$axios.defaults.headers.common["Authorization"]="Bearer "+this.$session.get("jwt")),this.$axios.interceptors.response.use(e=>e,e=>(401==e.response.status&&this.logout(),Promise.reject(e)))}},U=F,z=(a("5c0b"),a("5c64"),a("7496")),J=a("40dc"),Z=a("5bc1"),H=a("a75b"),K=a("ce7e"),G=a("132d"),Q=a("8860"),W=a("da13"),X=a("5d23"),Y=a("34c3"),ee=a("f774"),te=Object(d["a"])(U,r,s,!1,null,null,null),ae=te.exports;x()(te,{VApp:z["a"],VAppBar:J["a"],VAppBarNavIcon:Z["a"],VBtn:D["a"],VContent:H["a"],VDivider:K["a"],VIcon:G["a"],VList:Q["a"],VListItem:W["a"],VListItemContent:X["a"],VListItemIcon:Y["a"],VListItemTitle:X["b"],VNavigationDrawer:ee["a"]});a("d3b7");var ne=a("8c4f");n["a"].use(ne["a"]);var re=[{path:"/",redirect:{name:"login"}},{path:"/home",name:"home",component:function(){return a.e("about").then(a.bind(null,"bb51"))},meta:{title:"Главная"}},{path:"/login",name:"login",component:function(){return a.e("about").then(a.bind(null,"a55b"))},meta:{title:"Вход"}},{path:"/register",name:"register",component:function(){return a.e("about").then(a.bind(null,"73cf"))},meta:{title:"Регистрация"}},{path:"/users",name:"users",component:function(){return a.e("about").then(a.bind(null,"ed81"))},meta:{title:"Сотрудники"}},{path:"/tasks",name:"users",component:function(){return a.e("about").then(a.bind(null,"eb1f"))},meta:{title:"Задачи"}}],se=new ne["a"]({routes:re,mode:"history"});se.beforeEach((function(e,t,a){document.title=e.meta.title+" | Pure",a()}));var ie=se,oe=(a("7db0"),a("07ac"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),ce=a("365c");n["a"].use(i["a"]);var ue=new i["a"].Store({state:{isEployeesLoading:!1,employees:[],isTasksLoading:!1,isTaskEditLoading:!1,tasks:[],taskData:{},employeeData:{},checks:[]},mutations:{set:function(e,t){var a=t.type,n=t.data;e[a]=n},setDefaultTaskData:function(e){e.taskData={title:"",description:"",estimatedDuration:0,complexity:1,payment:0}},setDefaultEmployeeData:function(e){e.employeeData={firstName:"",lastName:"",age:18,salary:0}},resetTaskData:function(e){e.taskData={}},resetEmployeeData:function(e){e.employeeData={}},setTaskData:function(e,t){var a=t.field,n=t.value;e.taskData[a]=n},setEmployeeData:function(e,t){var a=t.field,n=t.value;e.employeeData[a]=n}},actions:{loadEmployees:function(e){return Object(oe["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.dispatch,a("set",{type:"isEployeesLoading",data:!0}),t.next=4,Object(ce["f"])();case 4:n=t.sent,r=n.data,a("set",{type:"employees",data:r}),a("set",{type:"isEployeesLoading",data:!1});case 8:case"end":return t.stop()}}),t)})))()},loadTasks:function(e){return Object(oe["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.dispatch,a("set",{type:"isTasksLoading",data:!0}),t.next=4,Object(ce["g"])();case 4:n=t.sent,r=n.data,a("set",{type:"tasks",data:r}),a("set",{type:"isTasksLoading",data:!1});case 8:case"end":return t.stop()}}),t)})))()},getTask:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,e.dispatch,r=t.id,n("set",{type:"isTasksLoading",data:!0}),a.next=5,Object(ce["i"])(r);case 5:return s=a.sent,i=s.data,i.taskEmployees=i.taskEmployees.length?i.taskEmployees.map((function(e){return e.employeeId})):[],n("set",{type:"isTasksLoading",data:!1}),a.abrupt("return",i);case 10:case"end":return a.stop()}}),a)})))()},getEmployee:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,e.dispatch,r=t.id,n("set",{type:"isEployeesLoading",data:!0}),a.next=5,Object(ce["h"])(r);case 5:return s=a.sent,i=s.data,n("set",{type:"isEployeesLoading",data:!1}),a.abrupt("return",i);case 9:case"end":return a.stop()}}),a)})))()},deleteTask:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.dispatch,n("set",{type:"isTaskEditLoading",data:!0}),a.next=4,Object(ce["e"])(t);case 4:s=a.sent,s.data,n("set",{type:"isTaskEditLoading",data:!1}),r({type:"loadTasks"});case 8:case"end":return a.stop()}}),a)})))()},completeTask:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.dispatch,s=t.id,i=t.status,n("set",{type:"isTaskEditLoading",data:!0}),a.next=5,Object(ce["b"])(s,i);case 5:o=a.sent,o.data,n("set",{type:"isTaskEditLoading",data:!1}),r({type:"loadTasks"});case 9:case"end":return a.stop()}}),a)})))()},showTaskModal:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.commit,r=e.dispatch,s=t.id,!1!==s){a.next=6;break}n("setDefaultTaskData"),a.next=10;break;case 6:return a.next=8,r("getTask",{id:s});case 8:i=a.sent,n("set",{type:"taskData",data:i});case 10:case"end":return a.stop()}}),a)})))()},showEmployeeModal:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.commit,r=e.dispatch,s=t.id,!1!==s){a.next=6;break}n("setDefaultEmployeeData"),a.next=10;break;case 6:return a.next=8,r("getEmployee",{id:s});case 8:i=a.sent,n("set",{type:"employeeData",data:i});case 10:case"end":return a.stop()}}),a)})))()},hideTaskModal:function(e){var t=e.commit;e.dispatch;t("resetTaskData")},hideEmployeeModal:function(e){var t=e.commit;e.dispatch;t("resetEmployeeData")},sendTaskData:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.commit,n=e.dispatch,!t||!t.id){a.next=7;break}return a.next=4,Object(ce["l"])(t);case 4:n("loadTasks"),a.next=10;break;case 7:return a.next=9,Object(ce["d"])(t);case 9:n("loadTasks");case 10:case"end":return a.stop()}}),a)})))()},sendEmployeeData:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.commit,n=e.dispatch,!t||!t.id){a.next=7;break}return a.next=4,Object(ce["k"])(t);case 4:n("loadEmployees"),a.next=10;break;case 7:return a.next=9,Object(ce["c"])(t);case 9:n("loadEmployees");case 10:case"end":return a.stop()}}),a)})))()},check:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,o,c,u,l,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.dispatch,a.next=3,Object(ce["a"])(t);case 3:s=a.sent,i=s.data.payments,n("set",{type:"checks",data:i}),r("loadTasks"),o=["Фио","id Платежа","Сумма","taskId","\n"],c=[o],i.map((function(e){c.push(Object.values(e),"\n")})),u=new File(c,"csvFile",{type:"text/csv"}),l=document.createElement("a"),d=URL.createObjectURL(u),l.href=d,l.download="csvFile",document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(d)}),0);case 17:case"end":return a.stop()}}),a)})))()}},getters:{getEmployeeById:function(e){return function(t){return e.employees.find((function(e){return e.id===t}))}}},modules:{}}),le=a("f309");n["a"].use(le["a"]);var de=new le["a"]({}),pe=a("0628"),me=a.n(pe),fe=(a("d1e78"),a("bc3a")),ve=a.n(fe);n["a"].config.productionTip=!1,n["a"].use(me.a,{persist:!0}),n["a"].prototype.$axios=ve.a,n["a"].prototype.$hostname="http://192.168.0.16:8000",n["a"].directive("blur",{inserted:function(e){e.onfocus=function(e){return e.target.blur()}}}),new n["a"]({router:ie,store:ue,vuetify:de,render:function(e){return e(ae)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("7694"),r=a.n(n);r.a},"5c64":function(e,t,a){"use strict";var n=a("dfa5"),r=a.n(n);r.a},7694:function(e,t,a){},"9b52":function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c}));var n=function(e){return!!e||"Обязательно."},r=function(e){return e.length>=4&&e.length<=20||"Кол-во символом в диапазоне от 4 и до 20"},s=function(e){return e.length>=8||"Мин 8 символов"},i=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Некорректный e-mail."},o=function(e){var t=/^\d+$/;return t.test(e)||"Введите корректное число"},c=function(e){return e>=18&&e<=80||"Возраст должен быть от 18 и до 80"}},dfa5:function(e,t,a){}});
//# sourceMappingURL=app.94bdf04f.js.map