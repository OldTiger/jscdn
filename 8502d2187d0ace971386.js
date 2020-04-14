(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,n){"use strict";var r={data:function(){return{menuKey:0,menuList:[{title:"Curl解析",router:"Curl"},{title:"JSON格式化",router:"JsonFormat"}]}},methods:{menuClick:function(t){this.menuKey=t,this.$router.push({name:this.menuList[t].router})}}},o=n(43),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("nav",{staticClass:"navbar navbar-expand navbar-light bg-light",staticStyle:{width:"100%"}},[n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.menuList,(function(e,r){return n("li",{key:r,staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return t.menuClick(r)}}},[t._v(t._s(e.title))])])})),0)])])])}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("c88309d0",content,!0,{sourceMap:!1})},216:function(t,e,n){t.exports=n.p+"img/dcf768a.png"},228:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=228},275:function(t,e,n){"use strict";var r=n(203);n.n(r).a},276:function(t,e,n){(e=n(44)(!1)).push([t.i,"h1[data-v-bd15a12a]{text-align:left;font-size:32px}textarea[data-v-bd15a12a]{min-height:250px!important}.languages[data-v-bd15a12a]{display:flex;align-items:baseline;justify-content:center}.languages label[data-v-bd15a12a]{white-space:nowrap}.languages select[data-v-bd15a12a]{width:200px}",""]),t.exports=e},279:function(t,e,n){"use strict";n.r(e);var r=n(197),o=n(217),c=n.n(o),l={head:function(){return{title:"将curl命令转换为Python requests, Ansible URI, MATLAB, Node.js, R, PHP, Go, Dart, 和JSON",meta:[{hid:"description",name:"description",content:"将curl命令转换为代码的实用工具"}]}},components:{MyHeader:r.a},data:function(){return{curl:null,code:null,currentLanguage:"Python",languages:["Python","Php","Go","R","Dart","Node.js","Ansible","JSON","MATLAB"]}},watch:{curl:function(t){this.code=t?this.converter(t):null},currentLanguage:function(t){this.curl&&(this.code=this.converter(this.curl))}},methods:{converter:function(t){try{switch(this.currentLanguage){case"Python":return c.a.toPython(t);case"Php":return c.a.toPhp(t);case"GO":return c.a.toGo(t);case"R":return c.a.toR(t);case"Dart":return c.a.toDart(t);case"Node.js":return c.a.toNode(t);case"Ansible":return c.a.toAnsible(t);case"JSON":return c.a.toJsonString(t);case"MATLAB":return c.a.toMATLAB(t)}}catch(t){}}}},v=(n(275),n(43)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("my-header"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 col-xs-12"},[r("h2",[t._v("curl 命令")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.curl,expression:"curl"}],staticClass:"form-control",attrs:{placeholder:"请输入curl命令"},domProps:{value:t.curl},on:{input:function(e){e.target.composing||(t.curl=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-sm-6 col-xs-12"},[r("h2",[t._v("Python 请求")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{placeholder:"不能解析curl命令"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col languages"},[r("label",{staticClass:"pr-3"},[t._v("语言")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentLanguage,expression:"currentLanguage"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentLanguage=e.target.multiple?n:n[0]}}},t._l(t.languages,(function(e,n){return r("option",{key:n},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])]),t._v(" "),r("div",{staticClass:"row mt-4 pb-5"},[t._m(1),t._v(" "),r("div",{staticClass:"col-sm-6 col-xs-12"},[r("img",{attrs:{src:n(216)}})])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-4"},[e("h1",[this._v("将curl语法转换为Python, Ansible URI, MATLAB, Node.js, R, PHP, Go, Dart, JSON")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 col-xs-12"},[e("h2",[this._v("从谷歌浏览器复制Curl")]),this._v(" "),e("p",[this._v("1、从开发者工具打开network标签")]),this._v(" "),e("p",[this._v('2、ctrl + 点击请求,选择"Copy as cURL"')]),this._v(" "),e("p",[this._v("3、请把它复制到curl文本框里")])])}],!1,null,"bd15a12a",null);e.default=component.exports}}]);