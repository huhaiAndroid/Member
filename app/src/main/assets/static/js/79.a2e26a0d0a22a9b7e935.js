webpackJsonp([79],{I8yP:function(e,t,n){"use strict";function r(e){n("h1v1")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("8pLc"),i=n("pKZN"),o=(a.a,i.a,{components:{noData:a.a,back:i.a},data:function(){return{haveMore:!0,list:[],user:this.$store.state.userInfo,page:1,pageShow:!1}},created:function(){this.pull()},mounted:function(){this.getMore()},beforeDestroy:function(){window.onscroll=null},beforeRouteLeave:function(e,t,n){window.onscroll=null,t.meta.keepAlive&&(t.meta.scollTopPosition=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop),n()},beforeRouteEnter:function(e,t,n){var r=!1;n(function(n){(t.path!=n.$store.state.prevUrl&&null!=n.$store.state.prevUrl||n.$store.state.isFresh)&&(r=!0),n.getMore(),r?(n.page=1,n.haveMore=!0,n.pageShow=!1,n.pull()):(console.log(e.meta.scollTopPosition),setTimeout(function(){document.documentElement.scrollTop=document.body.scrollTop=e.meta.scollTopPosition},1)),n.$store.dispatch("pushIsFresh",!0)})},methods:{pull:function(e){var t=this;this.$post("PlatFormAPI/DoctorPatient/QueryPatientAttentDrByPage",{DrId:-1,AccountId:this.user.User.AccountId,PageIndex:this.page,PageSize:15}).then(function(n){!n.ReturnData||n.ReturnData.length<15?t.haveMore=!1:t.haveMore=!0,e?n.ReturnData.forEach(function(e){t.list.push(e)}):t.list=n.ReturnData,t.pageShow=!0})},toIndex:function(e){1==e.DrType?this.$router.push("/doctor-index?DrId="+e.DrId):2==e.DrType&&this.$router.push("/nurse-index?DrId="+e.DrId)},getMore:function(){var e=this,t=this.$refs.el,n=null;window.onscroll=function(){clearTimeout(n),n=setTimeout(function(){var n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;t.scrollHeight-n-window.innerHeight<100&&e.haveMore&&(e.page+=1,e.pull(!0))},100)}}}}),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"el",staticClass:"pb pdt",attrs:{id:"myAttenDr"}},[r("div",{staticClass:"title"},[r("back"),e._v(" "),r("span",{staticClass:"name"},[e._v("我的关注")]),e._v(" "),r("a")],1),e._v(" "),e._l(e.list,function(t,a){return e.list[0]?r("div",{key:a,staticClass:"list-item"},[r("div",{staticClass:"flex",staticStyle:{border:"none"},on:{click:function(n){return e.toIndex(t)}}},[r("div",{staticClass:"left"},[t.DrPicturePath?r("img",{staticClass:"doctor-icon",attrs:{src:t.DrPicturePath,alt:""}}):2==t.DrType?r("img",{staticClass:"doctor-icon",attrs:{src:n("O+V+")}}):r("img",{staticClass:"doctor-icon",attrs:{src:n("2XyM"),alt:""}})]),e._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"t"},[e._v("\n\t\t\t\t\t\t"+e._s(t.DrName)+"\n\t\t\t\t\t")]),e._v(" "),r("div",{staticClass:"c"},[t.PositionName?r("span",{staticClass:"c-n"},[e._v(e._s(t.PositionName))]):e._e(),e._v(" "),t.DepartmentName?r("span",{staticClass:"c-d"},[e._v(e._s(t.DepartmentName)+" | "+e._s(t.HospitalName))]):e._e()])])])]):e._e()}),e._v(" "),!e.list[0]&&e.pageShow?r("no-data",{attrs:{txt:"暂无关注的医护"}}):e._e()],2)},l=[],s={render:c,staticRenderFns:l},d=s,m=n("C7Lr"),f=r,p=m(o,d,!1,f,"data-v-7e49582c",null);t.default=p.exports},IrN7:function(e,t,n){var r=n("L4zZ");t=e.exports=n("UTlt")(!1),t.push([e.i,"\n#myAttenDr .noData[data-v-7e49582c], #myDr .noData[data-v-7e49582c] {\n  margin-top: 0.13333rem;\n  font-size: 0.37333rem;\n}\n#myAttenDr .patient[data-v-7e49582c], #myDr .patient[data-v-7e49582c] {\n  height: 1.06667rem;\n  background: #fff;\n  font-size: 0.37333rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 0.4rem;\n  margin: 0rem 0 0.26667rem;\n}\n#myAttenDr .patient .name[data-v-7e49582c], #myDr .patient .name[data-v-7e49582c] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    margin-left: 0.21333rem;\n}\n#myAttenDr .patient > img[data-v-7e49582c], #myDr .patient > img[data-v-7e49582c] {\n    width: 0.4rem;\n}\n#myAttenDr .patient .choose[data-v-7e49582c], #myDr .patient .choose[data-v-7e49582c] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    color: #999;\n}\n#myAttenDr .patient .choose i[data-v-7e49582c], #myDr .patient .choose i[data-v-7e49582c] {\n      display: block;\n      height: 0.34667rem;\n      width: 0.21333rem;\n      background: url("+r(n("i9Xb"))+") no-repeat center;\n      background-size: cover;\n      margin-left: 0.13333rem;\n}\n#myAttenDr .patient i[data-v-7e49582c], #myDr .patient i[data-v-7e49582c] {\n    width: 0.4rem;\n    height: 0.66667rem;\n    display: block;\n    background: url("+r(n("i9Xb"))+") no-repeat center;\n    background-size: contain;\n    margin-left: 0.13333rem;\n}\n#myAttenDr .patient span[data-v-7e49582c], #myDr .patient span[data-v-7e49582c] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n#myAttenDr .list-item[data-v-7e49582c], #myDr .list-item[data-v-7e49582c] {\n  background: #fff;\n  margin: 0 0.26667rem 0.13333rem 0.26667rem;\n  border-radius: 0.21333rem;\n}\n#myAttenDr .flex[data-v-7e49582c], #myDr .flex[data-v-7e49582c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0.33333rem 0.21333rem 0.13333rem 0.21333rem;\n  border-bottom: 1px solid #f3f3f3;\n}\n#myAttenDr .flex .left[data-v-7e49582c], #myDr .flex .left[data-v-7e49582c] {\n    width: 1.68rem;\n    overflow: hidden;\n}\n#myAttenDr .flex .left .doctor-icon[data-v-7e49582c], #myDr .flex .left .doctor-icon[data-v-7e49582c] {\n      min-width: 1.33333rem;\n      max-width: 1.33333rem;\n      min-height: 1.33333rem;\n      max-height: 1.33333rem;\n      object-fit: cover;\n      border-radius: 0.45333rem;\n      /* For Firefox3.6+ */\n      /* For Chrome5+, Safari5+ */\n      box-shadow: 0 0 5px #ccc;\n      /* For Latest Opera */\n}\n#myAttenDr .flex .right[data-v-7e49582c], #myDr .flex .right[data-v-7e49582c] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    color: #666;\n    font-size: 0.37333rem;\n}\n#myAttenDr .flex .right .t[data-v-7e49582c], #myDr .flex .right .t[data-v-7e49582c] {\n      font-size: 0.42667rem;\n      color: #000;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n}\n#myAttenDr .flex .right .t > h4[data-v-7e49582c], #myDr .flex .right .t > h4[data-v-7e49582c] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n}\n#myAttenDr .flex .right .t .sn[data-v-7e49582c], #myDr .flex .right .t .sn[data-v-7e49582c] {\n        margin-right: -0.21333rem;\n        background: #FFA416;\n        font-size: 0.26667rem;\n        color: #fff;\n        padding: 0.05333rem 0.13333rem 0.05333rem 0.26667rem;\n        border-top-left-radius: 0.21333rem;\n        border-bottom-left-radius: 0.21333rem;\n}\n#myAttenDr .flex .right .c[data-v-7e49582c], #myDr .flex .right .c[data-v-7e49582c] {\n      padding: 0.13333rem 0;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n}\n#myAttenDr .flex .right .c .c-l[data-v-7e49582c], #myDr .flex .right .c .c-l[data-v-7e49582c] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        width: 5.6rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n#myAttenDr .flex .right .c .c-n[data-v-7e49582c], #myDr .flex .right .c .c-n[data-v-7e49582c] {\n        margin-right: 0.53333rem;\n        font-size: 0.32rem;\n        color: #333;\n}\n#myAttenDr .flex .right .c .c-d[data-v-7e49582c], #myDr .flex .right .c .c-d[data-v-7e49582c] {\n        margin-right: 0.13333rem;\n        font-size: 0.32rem;\n        color: #333;\n}\n#myAttenDr .flex .right .c .c-r[data-v-7e49582c], #myDr .flex .right .c .c-r[data-v-7e49582c] {\n        text-align: right;\n        width: 1.33333rem;\n        color: #999;\n        font-size: 0.32rem;\n}\n#myAttenDr .footer[data-v-7e49582c], #myDr .footer[data-v-7e49582c] {\n  text-align: center;\n  padding: 0.26667rem 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n#myAttenDr .footer .btn[data-v-7e49582c], #myDr .footer .btn[data-v-7e49582c] {\n    width: 1.49333rem;\n    border: 1px solid #3069CF;\n    text-align: center;\n    color: #3069CF;\n    font-size: 0.32rem;\n    border-radius: 0.4rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    margin: 0 auto;\n}\n#myAttenDr .flex .right .c[data-v-7e49582c] {\n  width: 7.06667rem;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#myAttenDr .flex .right .c .c-d[data-v-7e49582c] {\n  margin-right: 0;\n}\n#myAttenDr .list-item[data-v-7e49582c] {\n  margin-top: 0.13333rem;\n  margin-bottom: 0;\n}\n",""])},h1v1:function(e,t,n){var r=n("IrN7");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("FIqI")("a3e3db68",r,!0,{})}});