(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c0e3c1"],{"0141":function(t,e,a){"use strict";var n=a("af61"),i=a.n(n);i.a},"0ec7":function(t,e,a){},"41f7":function(t,e,a){"use strict";var n=a("0ec7"),i=a.n(n);i.a},4662:function(t,e,a){},"587e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t.mobile?t._e():a("top-header"),t.mobile?a("nav-mobile"):t._e(),a("div",{staticClass:"center"},[a("router-view")],1)],1)},i=[],s=(a("9e76"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-header"}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"left"},[n("div",{staticClass:"logo",on:{click:t.goToIndex}},[n("Logo")],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],attrs:{type:"",name:"",placeholder:"关键字"},domProps:{value:t.form.search},on:{keyup:t.keyBtn,input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),n("span",{staticClass:"search",on:{click:t.searchBtn}},[t._v("搜索")]),n("span",{staticClass:"search",on:{click:t.resetBtn}},[t._v("重置")]),n("span",{staticClass:"search",on:{click:t.nextBtn}},[t._v("换一批")]),n("span",{on:{click:function(e){return t.$router.push({name:"Tank"})}}},[t._v("坦克大战")]),n("span",{on:{click:function(e){return t.$router.push({name:"keyGame"})}}},[t._v("字母游戏")]),n("span",{on:{click:function(e){return t.$router.push({name:"Calendar"})}}},[t._v("日历测试")])]),n("div",{staticClass:"right"},[t.token?t._e():n("div",{staticClass:"sign-in",on:{click:t.goToLogin}},[t._v("登陆")]),t.token?t._e():n("div",{staticClass:"sign-up",on:{click:t.goToRegister}},[t._v("注册")]),t.token?n("div",{staticClass:"user-data"},[t.avater?t._e():n("img",{staticClass:"user-photo",attrs:{src:a("f0fc"),alt:""},on:{click:t.info}}),t.avater?n("img",{staticClass:"user-photo",attrs:{src:t.avater,alt:""},on:{click:t.info}}):t._e(),n("ul",{staticClass:"user-list"},[n("li",{on:{click:t.writeArticle}},[n("i",{staticClass:"el-icon-edit"}),n("span",[t._v("写文章")])]),n("li",{on:{click:t.articleList}},[n("i",{staticClass:"el-icon-s-operation"}),n("span",[t._v("文章列表")])]),n("li",{on:{click:function(e){return t.$router.push({name:"Tank"})}}},[n("i",{staticClass:"el-icon-burger"}),n("span",[t._v("游戏列表")])]),n("li",{on:{click:function(e){return t.$router.push({name:"Echarts"})}}},[n("i",{staticClass:"el-icon-tableware"}),n("span",[t._v("统计列表")])]),n("li",{on:{click:t.exit}},[n("i",{staticClass:"el-icon-setting"}),n("span",[t._v("退出")])])])]):t._e()])])])}),r=[],o=a("d8ad"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Vertical-Alignment"},[a("div",{staticClass:"Middle"},[a("div",{staticClass:"Background"}),a("div",{staticClass:"Foreground"},[a("div",{staticClass:"Water"},[a("div",{staticClass:"Coast"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"}),a("div",{staticClass:"Wave Deep"}),a("div",{staticClass:"Wave Surf"})])])])])}],u=(a("f317"),a("9ca4")),f={},v=Object(u["a"])(f,c,l,!1,null,null,null),h=v.exports,d={components:{Logo:h},name:"top-header",data:function(){return{active:0,token:"",avater:"",form:{search:""}}},mounted:function(){this.token=localStorage.token,this.avater=localStorage.avater},methods:{goToIndex:function(){this.$router.push({name:"Index"})},goToLogin:function(){this.$router.push({name:"Login"})},goToRegister:function(){this.$router.push({name:"Register"})},goToPage:function(t,e){this.active=e,this.$router.push({name:t.uri})},keyBtn:function(t){o["a"].$emit("search",this.form)},searchBtn:function(){o["a"].$emit("search",this.form)},resetBtn:function(){this.form.search="",this.searchBtn()},nextBtn:function(){o["a"].$emit("search",{next:!0})},info:function(){this.$router.push({name:"Info"})},writeArticle:function(){this.$router.push({name:"articleWrite"})},articleList:function(){this.$router.push({name:"articleList"})},exit:function(){localStorage.clear(),window.location.href="/"}}},m=d,p=(a("0141"),Object(u["a"])(m,s,r,!1,null,null,null)),g=p.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-mobile"},[a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),a("div",{staticClass:"btn",on:{click:t.searchBtn}},[t._v("搜索")])]),a("div",{staticClass:"set-box"},[a("span",{on:{click:t.resetBtn}},[t._v("重置")]),a("span",{on:{click:t.nextBtn}},[t._v("换一批")])])])},k=[],_={components:{Logo:h},name:"top-header",data:function(){return{active:0,token:"",avater:"",form:{search:""}}},mounted:function(){this.token=localStorage.token,this.avater=localStorage.avater},methods:{goToIndex:function(){this.$router.push({name:"Index"})},goToLogin:function(){this.$router.push({name:"Login"})},goToRegister:function(){this.$router.push({name:"Register"})},goToPage:function(t,e){this.active=e,this.$router.push({name:t.uri})},keyBtn:function(t){o["a"].$emit("search",this.form)},searchBtn:function(){o["a"].$emit("search",this.form)},resetBtn:function(){this.form.search="",this.searchBtn()},nextBtn:function(){o["a"].$emit("search",{next:!0})},info:function(){this.$router.push({name:"Info"})},writeArticle:function(){this.$router.push({name:"articleWrite"})},articleList:function(){this.$router.push({name:"articleList"})},exit:function(){localStorage.clear(),window.location.href="/"}}},$=_,x=(a("41f7"),Object(u["a"])($,C,k,!1,null,null,null)),b=x.exports,w={components:{TopHeader:g,NavMobile:b},name:"HelloWorld",data:function(){return{mobile:!1}},props:{msg:String},mounted:function(){var t=navigator.userAgent,e=t.match(/(iPad).*OS\s([\d_]+)/),a=!e&&t.match(/(iPhone\sOS)\s([\d_]+)/),n=t.match(/(Android)\s+([\d.]+)/),i=a||n;this.mobile=!!i}},B=w,S=(a("ff47"),Object(u["a"])(B,n,i,!1,null,"5aa80e12",null));e["default"]=S.exports},"8b7f":function(t,e,a){},"9e76":function(t,e,a){"use strict";var n=a("69b3"),i=a("eafa"),s=a("e754"),r=a("7108");a("0aed")("match",1,(function(t,e,a,o){return[function(a){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=o(a,t,this);if(e.done)return e.value;var c=n(t),l=String(this);if(!c.global)return r(c,l);var u=c.unicode;c.lastIndex=0;var f,v=[],h=0;while(null!==(f=r(c,l))){var d=String(f[0]);v[h]=d,""===d&&(c.lastIndex=s(l,i(c.lastIndex),u)),h++}return 0===h?null:v}]}))},af61:function(t,e,a){},d8ad:function(t,e,a){"use strict";var n=a("0261");e["a"]=new n["default"]},f0fc:function(t,e,a){t.exports=a.p+"img/icon.a160f24b.png"},f317:function(t,e,a){"use strict";var n=a("4662"),i=a.n(n);i.a},ff47:function(t,e,a){"use strict";var n=a("8b7f"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-74c0e3c1.679c0415.js.map