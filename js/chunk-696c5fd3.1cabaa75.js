(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696c5fd3"],{"7d8f":function(t,n,e){},d6b3:function(t,n,e){"use strict";var o=e("7d8f"),r=e.n(o);r.a},fcde:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VContainer",[e("VRow",{attrs:{dense:""}},[e("VCol",[e("VCard",[e("VCardText",[e("VSearchForm",{attrs:{slot:"search",hint:"请输入UP主名称，或者uid"},on:{getSearchValue:t.getSearchValue},slot:"search"}),e("span",{staticClass:"overline"},[t._v("OB热搜 / HOT SEARCH")]),t.$store.getters.getHotSearchAuthor?e("BiliobSlide",t._l(t.$store.getters.getHotSearchAuthor,(function(n,o){return e("div",{key:o,staticClass:"px-1 py-0",attrs:{cols:"auto"}},[e("VChip",{staticClass:"pl-1",attrs:{outlined:"",color:"primary ",to:"/author/"+n.mid}},[e("VChip",{staticClass:"mr-2 ",attrs:{small:"","text-color":"white font-weight-bold",color:"primary"}},[t._v(" "+t._s(t.$numberFormat(n.count,!1))+" ")]),t._v(t._s(n.name)+" ")],1)],1)})),0):t._e()],1)],1)],1)],1),e("VRow",{attrs:{dense:""}},[e("VCol",[e("VCard",[e("VTabs",{attrs:{"background-color":"transparent","slider-color":"primary"}},[e("VTab",{on:{click:function(n){return t.sortChange(0)}}},[e("VIcon",[t._v(" mdi-account-heart ")]),e("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 粉丝总数 ")])],1),e("VTab",{on:{click:function(n){return t.sortChange(1)}}},[e("VIcon",[t._v(" mdi-play-circle-outline ")]),e("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 播放总量 ")])],1),e("VTab",{on:{click:function(n){return t.sortChange(3)}}},[e("VIcon",[t._v(" mdi-thumb-up-outline ")]),e("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 获赞总量 ")])],1),e("VTab",{on:{click:function(n){return t.sortChange(2)}}},[e("VIcon",[t._v(" mdi-script-text-outline ")]),e("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 专栏阅读 ")])],1)],1)],1)],1),e("VCol",{attrs:{cols:"12"}},[e("VSlideYTransition",{attrs:{group:""}},t._l(t.authorList.content,(function(t){return e("VRow",{key:t.mid,attrs:{dense:""}},[e("VCol",{attrs:{cols:"12"}},[e("BiliobAuthorInfoCard",{attrs:{author:t}})],1)],1)})),1)],1),t.notFound?e("VCol",{attrs:{cols:"12"}},[e("h4",{staticClass:"primary--text"},[e("VIcon",{staticClass:"primary--text"},[t._v(" mdi-ship-wheel ")]),t._v("抱歉！什么都没有找到QwQ ")],1),e("p",[t._v(" 搜索功能可能并不完善，为了精确搜索请在上方输入相关UP主的ID！ ")]),e("p",[t._v(" 如果搜索ID仍然没有结果，可能是因为该UP主并未被本站观测。你可以点击页面右下角的圆形按钮进行添加！ ")])]):e("VCol",{attrs:{cols:"12"}},[e("VBtn",{staticStyle:{"border-width":"1px"},attrs:{block:"",outlined:"",color:"primary",disabled:t.nextBtnDisabled,tile:""},on:{click:function(n){return n.stopPropagation(),t.next(n)}}},[t._v(" "+t._s(t.nextBtnText)+" ")])],1)],1)],1)},r=[],a=(e("99af"),e("4160"),e("159b"),e("438e")),i={name:"AuthorList",components:{VSearchForm:a["default"]},data:function(){return{sort:0,authorList:[],currentApiurl:String(),currentPage:0,text:String(),nextBtnText:"请给我更多...",nextBtnDisabled:!1,requestUrl:String(),notFound:!1}},watch:{text:function(){var t=this;this.currentPage=0,this.axios.get(this.currentApiurl+"?page="+this.currentPage+"&text="+this.text+"&sort="+this.sort).then((function(n){t.authorList.content=n.data.content,0==t.authorList.content.length?t.notFound=!0:t.notFound=!1}))},currentPage:function(t){var n=this;this.axios.get("".concat(this.currentApiurl,"?page=").concat(t,"&text=").concat(this.text,"&sort=").concat(this.sort)).then((function(t){t.data.last&&(n.nextBtnText="没有更多了",n.nextBtnDisabled=!0),t.data.content.forEach((function(t){n.authorList.content.push(t)}))}))}},created:function(){var t=this;this.currentApiurl="/author",this.axios.get(this.currentApiurl).then((function(n){t.refreshList(n)}))},mounted:function(){void 0==this.$store.state.hotSearch&&this.$store.dispatch("getHotSearchAuthor")},methods:{refreshList:function(t){this.authorList=t.data,t.data.last&&(this.nextBtnText="没有更多了",this.nextBtnDisabled=!0)},onScroll:function(){document.documentElement.scrollTop||document.body.scrollTop,document.documentElement.clientHeight||document.body.clientHeight,document.documentElement.scrollHeight||document.body.scrollHeight},next:function(){this.currentPage+=1},getSearchValue:function(t){this.text=t},handleChoosed:function(t,n){this.$router.push({path:"/author/"+n.mid+"/author/"+n.aid})},sortChange:function(t){var n=this;this.sort=t,this.currentPage=0,this.axios.get("".concat(this.currentApiurl,"?page=").concat(this.currentPage,"&text=").concat(this.text,"&sort=").concat(this.sort)).then((function(t){n.refreshList(t)}))}}},s=i,c=(e("d6b3"),e("2877")),u=e("6544"),l=e.n(u),h=e("8336"),d=e("b0af"),p=e("99d9"),f=e("cc20"),g=e("62ad"),m=e("a523"),V=e("132d"),x=e("0fd9"),b=e("0789"),C=e("71a3"),v=e("fe57"),_=Object(c["a"])(s,o,r,!1,null,null,null);n["default"]=_.exports;l()(_,{VBtn:h["a"],VCard:d["a"],VCardText:p["b"],VChip:f["a"],VCol:g["a"],VContainer:m["a"],VIcon:V["a"],VRow:x["a"],VSlideYTransition:b["h"],VTab:C["a"],VTabs:v["a"]})}}]);