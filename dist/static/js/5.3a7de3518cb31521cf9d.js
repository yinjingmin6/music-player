webpackJsonp([5],{542:function(t,e,i){function n(t){i(587)}var o=i(8)(i(592),i(577),n,"data-v-93af812e",null);t.exports=o.exports},554:function(t,e,i){"use strict";function n(){var t=A()({},l.b,{platform:"h5",needNewCode:1});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function o(t){var e=A()({},l.b,{topid:t,page:"detail",type:"top",tpl:3,platform:"h5",needNewCode:1});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,l.c)}e.b=n,e.a=o;var a=i(82),A=i.n(a),s=i(186),l=i(62)},565:function(t,e,i){e=t.exports=i(539)(!0),e.push([t.i,".rank[data-v-93af812e]{position:fixed;top:88px;bottom:0;width:100%}.rank .top-list[data-v-93af812e]{width:100%;height:100%;overflow:hidden}.rank .top-list .item[data-v-93af812e]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .top-list .item[data-v-93af812e]:last-child{padding-bottom:20px}.rank .top-list .item .icon[data-v-93af812e]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .top-list .item .song-list[data-v-93af812e]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .top-list .item .song-list .song[data-v-93af812e]{line-height:26px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}","",{version:3,sources:["D:/workspace/music-player/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb,AACD,iCACE,WAAY,AACZ,YAAa,AACb,eAAiB,CAClB,AACD,uCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,kDACE,mBAAqB,CACtB,AACD,6CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,kDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,iBAAkB,AAClB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB",file:"rank.vue",sourcesContent:["\n.rank[data-v-93af812e] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n.rank .top-list[data-v-93af812e] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.rank .top-list .item[data-v-93af812e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .top-list .item[data-v-93af812e]:last-child {\n  padding-bottom: 20px;\n}\n.rank .top-list .item .icon[data-v-93af812e] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .top-list .item .song-list[data-v-93af812e] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .top-list .item .song-list .song[data-v-93af812e] {\n  line-height: 26px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}"],sourceRoot:""}])},577:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"rank",staticClass:"rank"},[i("scroll",{ref:"topList",staticClass:"top-list",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(e){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{alt:"",width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"song-list"},t._l(e.songList,function(e,n){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(n+1))]),t._v(" "),i("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}))])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList,expression:"!topList"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}},587:function(t,e,i){var n=i(565);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("7f9d5029",n,!0)},592:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(54),o=i.n(n),a=i(554),A=i(62),s=i(63),l=i.n(s),r=i(185),p=i.n(r),c=i(81),d=i(45);e.default={mixins:[c.c],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:o()({handlePlayList:function(t){var e=t.length?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.topList.refresh()},_getTopList:function(){var t=this;i.i(a.b)().then(function(e){e.code===A.a&&(t.topList=e.data.topList)})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}},i.i(d.b)({setTopList:"SET_TOP_LIST"})),components:{Scroll:l.a,Loading:p.a}}}});
//# sourceMappingURL=5.3a7de3518cb31521cf9d.js.map