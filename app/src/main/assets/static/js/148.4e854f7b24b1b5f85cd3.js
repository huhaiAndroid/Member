webpackJsonp([148],{AEHG:function(e,t,a){"use strict";function n(e){a("bu+S")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("8pLc"),i=a("pKZN"),o=(r.a,i.a,{components:{noData:r.a,back:i.a},data:function(){return{search:"",show3:!1,inputFlag:!1,page:1,list:null,haveMore:!0,temp:!1,sortIdx:null,areaMsg:this.$store.state.area,sortList:["全部医院","科室","综合排序","筛选"],sortList2:[{SortField:null,name:"综合排序",sort:!1,value:0},{SortField:"BuyNum",name:"销量优先",sort:!1,value:1},{SortField:"UpperShelfTime",name:"最新上架",sort:!1,value:2},{SortField:"Price",name:"价格从低到高",sort:!0,value:3},{SortField:"Price",name:"价格从高到低",sort:!1,value:4}],hospital:[],page2:1,haveMore2:!0,Department:[],secDepartment:[],Positions:[],hos:{HospitalId:-1},dep:null,secDep:{DepartmentId:-1},sort:{value:0},HospitalLevel:null,PositionPick:null,scrollTop:null,showChoose:!0}},beforeRouteLeave:function(e,t,a){window.onscroll=null,t.meta.keepAlive&&(t.meta.scollTopPosition=this.scrollTopDistance),a()},beforeRouteEnter:function(e,t,a){a(function(a){a.getMore();var n=!1;e.query.fromGroup&&(a.showChoose=!1),!a.showChoose||a.area&&a.area.AreaId==a.$store.state.area.AreaId||(n=!0),(t.path!=a.$store.state.prevUrl&&null!=a.$store.state.prevUrl||a.$store.state.isFresh)&&(n=!0),n?(a.area=a.$store.state.area,a.sortIdx=null,a.page2=1,a.page=1,a.haveMore2=!0,a.haveMore=!0,e.meta.scollTopPosition=0,a.list=[],a.pageShow=!1,a.temp=!1,a.hos={HospitalId:-1},a.dep=null,a.secDep={DepartmentId:-1},a.sort={value:0},a.HospitalLevel=null,a.PositionPick=null,a.scrollTop=null,e.query.fromGroup?a.showChoose=!1:a.showChoose=!0,a.search="",a.pull(!1),a.showChoose&&(a.pullHospital(!1),a.pullDepartment(0),a.pullElse())):setTimeout(function(){a.$refs.el3.scrollTop=e.meta.scollTopPosition},1)})},created:function(){if(this.$route.query.fromGroup)return this.showChoose=!1,this.pull(!1),!1;this.pull(!1),this.pullHospital(!1),this.pullDepartment(0),this.pullElse()},mounted:function(){this.getMore(),this.reload()},beforeDestroy:function(){window.onscroll=null,this.$refs.el3.style.overflowY="auto"},methods:{searchFor:function(){this.inputFlag||(this.page=1,this.list=[],this.temp=!1,this.pull(!1))},sortDoc:function(e){var t=this.$refs.el3;this.sortIdx===e?(this.sortIdx=null,t.style.overflowY="auto"):(this.sortIdx=e,this.scrollTop=t.scrollTop,t.style.overflowY="hidden")},closeMask:function(){this.sortIdx=null,this.$refs.el3.style.overflowY="auto"},hosPick:function(e){this.hos=e,this.sortList[0]=e.HospitalName,this.sortIdx=null,this.$refs.el3.style.overflowY="auto",this.page=1,this.list=[],this.temp=!1,this.pull(!1)},depPick:function(e){this.dep=e,-1===e.DepartmentId?(this.secDepartment=[],this.secDep=e,this.sortList[1]="全部科室",this.sortIdx=null,this.$refs.el3.style.overflowY="auto",this.page=1,this.list=[],this.temp=!1,this.pull(!1)):this.pullDepartment(e.DepartmentId)},secDepPick:function(e){this.secDep=e,this.sortList[1]=e.DepartmentName,this.sortIdx=null,this.$refs.el3.style.overflowY="auto",this.page=1,this.list=[],this.temp=!1,this.pull(!1)},sortPick:function(e){this.sort=e,this.sortList[2]=e.name,this.sortIdx=null,this.$refs.el3.style.overflowY="auto",this.page=1,this.list=[],this.temp=!1,this.pull(!1)},pullHospital:function(e){var t=this;this.$post("/PlatFormAPI/Doctor/QueryPackHospitalPage",{HospitalName:"",OrgId:this.$route.query.grouporgid||localStorage.getItem(localStorage.appid+"_orgid")||0,AreaId:this.areaMsg&&this.areaMsg.AreaId?this.areaMsg.AreaId:0,PageIndex:this.page2,PageSize:15}).then(function(a){e?(a.ReturnData=a.ReturnData||[],a.ReturnData.forEach(function(e){t.hospital.push(e)})):t.hospital=a.ReturnData||[],!a.ReturnData||a.ReturnData.length<15?t.haveMore2=!1:t.haveMore2=!0})},pullDepartment:function(e){var t=this;this.$post("/PlatFormAPI/Doctor/QueryDepartmentPage",{ParentId:e}).then(function(a){0===e?t.Department=a.ReturnData||[]:(t.$refs.el4.scrollTop=0,t.secDepartment=a.ReturnData||[])})},pullElse:function(){var e=this;this.$post("/PlatFormAPI/Category/QueryCategoryItem",{CategoryIds:[9,10]}).then(function(t){e.Positions=t[0].Items,e.HospitalLevels=t[1].Items})},pull:function(e){var t=this,a="",n=null;this.$route.query.fromGroup?(a="/PlatFormAPI/ServicePackItem/QueryOrgAndDrPackPageAndDetail",n={ServicePackName:this.search,OrgId:this.$route.query.grouporgid||-1,Invalid:0,PackStatus:1,PageIndex:this.page,PageSize:10}):(a="/PlatFormAPI/ServicePackItem/QueryOrgServicePackPage",n={KeyName:this.search,HospitalId:this.hos?this.hos.HospitalId:"",DepartmentId:this.secDep.DepartmentId||-1,Position:this.PositionPick?this.PositionPick.CategoryItemValue:-1,OrgId:this.$route.query.grouporgid||-1,HospitalLevel:this.HospitalLevel?this.HospitalLevel.CategoryItemValue:-1,PageIndex:this.page,PageSize:10,SortField:this.sort?this.sort.SortField:"",SortDirection:!this.sort||this.sort.sort,AreaId:this.areaMsg?this.areaMsg.AreaId:-1,PackType:0,IsDisplayToDr:-1,IsDisplayToOrg:-1}),this.$post(a,n).then(function(a){t.show3=!1,e?(a.ReturnData=a.ReturnData||[],a.ReturnData.forEach(function(e){t.list.push(e)}),t.temp=!0):(t.$refs.el3.scrollTop=0,t.list=a.ReturnData||[],t.temp=!0),!a.ReturnData||a.ReturnData.length<10?t.haveMore=!1:t.haveMore=!0})},reset:function(){this.HospitalLevel=null,this.PositionPick=null},confirm:function(){this.sortIdx=null,this.$refs.el3.style.overflowY="auto",this.page=1,this.list=[],this.temp=!1,this.pull(!1)},getMore:function(){var e=this,t=this.$refs.el2,a=null;t.onscroll=function(){clearTimeout(a),a=setTimeout(function(){var a=t.scrollTop||t.pageYOffset||t.scrollTop;t.scrollHeight-a-t.offsetHeight<100&&e.haveMore2&&(e.page2+=1,e.pullHospital(!0))},100)}},reload:function(){var e=this,t=this.$refs.el3,a=null,n=null;t.addEventListener("touchstart",function(e){try{var t=e.touches[0],r=Number(t.pageX),i=Number(t.pageY);a=r,n=i}catch(e){alert(e)}}),t.addEventListener("touchmove",function(a){var r=a.touches[0],i=t.scrollTop,o=t.scrollHeight,s=t.offsetHeight,l=o-s;0===i?(r.clientY>n&&a.preventDefault(),r.clientY-n>30&&(e.show3=!0)):i===l&&r.clientY<n&&a.preventDefault(),o-i-s<10&&e.haveMore&&e.temp&&r.clientY<n&&(e.temp=!1,e.page+=1,e.pull(!0))}),t.addEventListener("touchend",function(a){var r=a.changedTouches[0],i=t.scrollTop;e.show3&&0==i&&r.clientY>n&&(e.page=1,e.haveMore=!0,e.pull(!1))})},checkDetails:function(e){this.$store.dispatch("pushIsFresh",!0),2==e.FieldType?this.$router.push({path:"/service-detailForPay",query:{serviceId:e.ServicePackId,DrId:e.DrId}}):8==e.ServiceClassId?this.$router.push({path:"/taixin",query:{id:e.ServicePackId,fromOrg:1}}):this.$router.push({path:"/signingPackage/details",query:{id:e.ServicePackId,ServiceType:1,fromOrg:1}})}}}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdt"},[n("div",{staticClass:"title"},[n("back"),e._v(" "),n("span",{staticClass:"name"},[e._v("服务包列表")]),e._v(" "),n("a")],1),e._v(" "),n("div",{ref:"el",attrs:{id:"dr-servebag"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showChoose,expression:"showChoose"}],staticClass:"headBox"},[n("div",{staticClass:"search"},[n("span",{staticClass:"area",on:{click:function(t){return e.$router.push("/area")}}},[e._v("\n            \t\t"+e._s(e.areaMsg?e.areaMsg.AreaName||"选择地区":"选择地区")+"\n            \t\t"),n("i")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"医院、医生、科室、疾病"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchFor],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFor(t)},compositionend:function(t){e.inputFlag=!1},compositionstart:function(t){e.inputFlag=!0}}})]),e._v(" "),n("span",{staticClass:"btn",on:{click:e.searchFor}},[n("i"),e._v("\n                \t搜索\n                ")])]),e._v(" "),n("div",{staticClass:"sort"},e._l(e.sortList,function(t,a){return n("p",{key:a,on:{click:function(t){return e.sortDoc(a)}}},[n("span",[e._v(e._s(t))]),e._v(" "),n("i",{class:{on:e.sortIdx===a}})])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.sortIdx&&e.showChoose,expression:"sortIdx === 0 && showChoose"}],ref:"el2",staticClass:"hospital"},[n("p",{class:{chooseOn:e.hos&&-1==e.hos.HospitalId},on:{click:function(t){return e.hosPick({HospitalId:-1,HospitalName:"全部医院"})}}},[e._v("全部医院")]),e._v(" "),e._l(e.hospital,function(t,a){return n("p",{key:a,class:{chooseOn:e.hos&&e.hos.HospitalId==t.HospitalId},on:{click:function(a){return e.hosPick(t)}}},[e._v("\n\t\t\t\t\t\t"+e._s(t.HospitalName)+"\n\t\t\t\t\t")])})],2),e._v(" "),1===e.sortIdx&&e.showChoose?n("div",{staticClass:"Department"},[n("div",{staticClass:"type"},[n("p",{class:{depOn:e.dep&&-1==e.dep.DepartmentId},on:{click:function(t){return e.depPick({DepartmentId:-1})}}},[e._v("全部科室")]),e._v(" "),e._l(e.Department,function(t,a){return n("p",{key:a,class:{depOn:e.dep&&e.dep.DepartmentId==t.DepartmentId},on:{click:function(a){return e.depPick(t)}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.DepartmentName)+"\n\t\t\t\t\t\t")])})],2),e._v(" "),n("div",{ref:"el4",staticClass:"list"},e._l(e.secDepartment,function(t,a){return n("p",{key:a,class:{chooseOn:e.secDep&&e.secDep.DepartmentId==t.DepartmentId},on:{click:function(a){return e.secDepPick(t)}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.DepartmentName)+"\n\t\t\t\t\t\t")])}),0)]):e._e(),e._v(" "),2===e.sortIdx&&e.showChoose?n("div",{staticClass:"hospital"},e._l(e.sortList2,function(t,a){return n("p",{key:a,class:{chooseOn:e.sort&&e.sort.value==t.value},on:{click:function(a){return e.sortPick(t)}}},[e._v("\n\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t")])}),0):e._e(),e._v(" "),3===e.sortIdx&&e.showChoose?n("div",{staticClass:"else"},[n("div",{staticClass:"card"},[n("p",[e._v("医院等级")]),e._v(" "),e._l(e.HospitalLevels,function(t,a){return n("span",{key:a,class:{sortOn:e.HospitalLevel&&e.HospitalLevel==t},on:{click:function(a){e.HospitalLevel=t}}},[e._v("\n                        "+e._s(t.CategoryItemName)+"\n                    ")])})],2),e._v(" "),n("div",{staticClass:"card"},[n("p",[e._v("医生职称")]),e._v(" "),e._l(e.Positions,function(t,a){return n("span",{key:a,class:{sortOn:e.PositionPick&&e.PositionPick==t},on:{click:function(a){e.PositionPick=t}}},[e._v("\n                        "+e._s(t.CategoryItemName)+"\n                    ")])})],2),e._v(" "),n("div",{staticClass:"btnBox"},[n("p",{on:{click:e.reset}},[e._v("重置")]),e._v(" "),n("p",{on:{click:e.confirm}},[e._v("确定")])])]):e._e()]),e._v(" "),e.showChoose?e._e():n("div",{staticClass:"headBox"},[n("div",{staticClass:"search"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"医院、医生、科室、疾病"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchFor],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFor(t)},compositionend:function(t){e.inputFlag=!1},compositionstart:function(t){e.inputFlag=!0}}})]),e._v(" "),n("span",{staticClass:"btn",on:{click:e.searchFor}},[n("i"),e._v("\n                \t搜索\n                ")])])]),e._v(" "),(e.sortIdx||0===e.sortIdx)&&e.showChoose?n("div",{staticClass:"mask",on:{click:function(t){return e.closeMask()}}}):e._e(),e._v(" "),n("div",{ref:"el3",staticClass:"bag-c",class:{"content-1":!e.showChoose}},[e.show3?n("p",{staticClass:"reload"},[e._v("下拉刷新列表")]):e._e(),e._v(" "),e._l(e.list,function(t){return e.list&&e.list.length?n("div",{staticClass:"content",on:{click:function(a){return e.checkDetails(t)}}},[n("div",{staticClass:"c-a"},[t.MasterPictureThumb?n("img",{attrs:{src:t.MasterPictureThumb}}):n("img",{attrs:{src:a("HYbs")}})]),e._v(" "),n("div",{staticClass:"c-b"},[n("p",{staticClass:"c-b-name"},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.ServicePackName)+"\n\t\t\t\t\t\t")]),e._v(" "),n("div",{staticClass:"c-b-box"},[n("div",{staticClass:"left"},[n("p",{staticClass:"c-b-org"},[1==t.FieldType?n("span",{staticClass:"left"},[e._v(e._s(t.OrgName))]):e._e(),e._v(" "),2==t.FieldType?n("span",{staticClass:"left"},[e._v(e._s(t.DrName)+"  "+e._s(t.HospitalName))]):e._e()]),e._v(" "),t.AgeEnd||0!=t.Sex?n("p",{staticClass:"c-b-peiple1"},[e._v("\n\t\t\t\t\t\t\t\t\t服务人群："),0!=t.Sex?n("span",[e._v(e._s(e._f("toSex")(t.Sex))+"  ")]):e._e(),t.AgeStart==t.AgeEnd&&0==t.AgeEnd?n("span"):n("span",[e._v(e._s(t.AgeStart)+"-"+e._s(t.AgeEnd)+"岁  ")])]):n("p",{staticClass:"c-b-peiple1"},[e._v("\n\t\t\t\t\t\t\t\t\t服务人群：不限\n\t\t\t\t\t\t\t\t")]),e._v(" "),t.DiseaseName?n("p",{staticClass:"c-b-peiple2"},[e._v("\n\t\t\t\t\t\t\t\t\t适应范围："),n("span",[e._v(e._s(t.DiseaseName))])]):e._e()]),e._v(" "),n("div",{staticClass:"right"},[0==t.Price||0==t.Price?n("div",{staticClass:"price"},[e._v("免费")]):n("div",{staticClass:"price"},[n("span",[e._v(e._s(t.Price.replace(".00","")))]),e._v("元")]),e._v(" "),t.Deposit>0?n("div",{staticClass:"price2"},[e._v("(含押金"+e._s(t.Deposit.replace(".00",""))+")")]):e._e()])])])]):e._e()}),e._v(" "),e.list&&0!=e.list.length||!e.temp?e._e():n("no-data",{attrs:{txt:"暂无符合条件的服务包"}}),e._v(" "),!e.haveMore&&e.list&&e.list.length?n("p",{staticClass:"reload"},[e._v("已显示全部内容")]):e._e(),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.page>1&&!e.temp,expression:"(page > 1) && !temp"}],staticClass:"reload"},[e._v("正在加载")])],2)])])},l=[],c={render:s,staticRenderFns:l},b=c,d=a("C7Lr"),f=n,p=d(o,b,!1,f,"data-v-015ebfa8",null);t.default=p.exports},K847:function(e,t,a){var n=a("L4zZ");t=e.exports=a("UTlt")(!1),t.push([e.i,'\n@charset "UTF-8";\n.noData[data-v-015ebfa8] {\n  background: #fff;\n}\n#fetalHeart[data-v-015ebfa8] {\n  font-size: 0.37333rem;\n}\n#fetalHeart .title[data-v-015ebfa8] {\n    padding-top: 0.53333rem;\n    padding-bottom: 0.26667rem;\n    background-color: #f890ea;\n}\n#fetalHeart .title .headimg[data-v-015ebfa8] {\n      text-align: center;\n      padding-top: 0.21333rem;\n}\n#fetalHeart .title .headimg > img[data-v-015ebfa8] {\n        width: 1.2rem;\n        height: 1.2rem;\n        border-radius: 50%;\n}\n#fetalHeart .title > p[data-v-015ebfa8] {\n      text-align: center;\n      font-size: 0.42667rem;\n      color: #fff;\n      padding: 0.06667rem;\n}\n#fetalHeart .content-last[data-v-015ebfa8] {\n    margin-bottom: 0.8rem;\n}\n#fetalHeart .content[data-v-015ebfa8] {\n    background: #fff;\n    margin-bottom: 0.26667rem;\n}\n#fetalHeart .content .c[data-v-015ebfa8] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n      padding: 0 0.4rem;\n      height: 1.06667rem;\n      font-size: 0.37333rem;\n      border-bottom: 1px solid #f3f3f3;\n}\n#fetalHeart .content .c .c-a[data-v-015ebfa8] {\n        width: 0.74667rem;\n}\n#fetalHeart .content .c .c-a > img[data-v-015ebfa8] {\n          width: 0.48rem;\n          position: relative;\n          top: 0.02667rem;\n}\n#fetalHeart .content .c .c-b[data-v-015ebfa8] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n}\n#fetalHeart .content .c .c-c[data-v-015ebfa8] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        text-align: right;\n        color: #999999;\n}\n#fetalHeart .content .c .c-c img[data-v-015ebfa8] {\n          width: 0.18667rem;\n          position: relative;\n          top: 0.02667rem;\n}\n#fetalHeart .content .c-t[data-v-015ebfa8] {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n              justify-content: center;\n      color: #ffa416;\n      font-size: 0.32rem;\n      text-align: center;\n}\n#fetalHeart .content .c-m[data-v-015ebfa8] {\n      padding: 0.32rem 0.4rem;\n      text-align: center;\n}\n#fetalHeart .content .c-m .c-num[data-v-015ebfa8] {\n        text-align: center;\n        font-size: 0.96rem;\n        color: #999999;\n}\n#fetalHeart .content .c-m .c-buy[data-v-015ebfa8] {\n        display: inline-block;\n        margin-top: 0.26667rem;\n        background-color: #3069CF;\n        color: #fff;\n        padding: 0.13333rem 1.14667rem;\n        border-radius: 0.4rem;\n}\n/*服务包选择*/\n#dr-servebag .search[data-v-015ebfa8], #dr-fetelbag .search[data-v-015ebfa8], #basicbag .search[data-v-015ebfa8], #serveBag .search[data-v-015ebfa8] {\n  background: #fff;\n  height: 1.33333rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 0.4rem;\n  font-size: 0.37333rem;\n}\n#dr-servebag .search .area[data-v-015ebfa8], #dr-fetelbag .search .area[data-v-015ebfa8], #basicbag .search .area[data-v-015ebfa8], #serveBag .search .area[data-v-015ebfa8] {\n    display: block;\n    margin-right: 0.13333rem;\n    width: 2.13333rem;\n    color: #333;\n}\n#dr-servebag .search .area i[data-v-015ebfa8], #dr-fetelbag .search .area i[data-v-015ebfa8], #basicbag .search .area i[data-v-015ebfa8], #serveBag .search .area i[data-v-015ebfa8] {\n      display: inline-block;\n      position: relative;\n      top: -0.05333rem;\n      min-width: 0.2rem;\n      min-height: 0.2rem;\n      background: url('+n(a("F2I8"))+") no-repeat center;\n      background-size: contain;\n      margin-left: 0.13333rem;\n}\n#dr-servebag .search > div[data-v-015ebfa8], #dr-fetelbag .search > div[data-v-015ebfa8], #basicbag .search > div[data-v-015ebfa8], #serveBag .search > div[data-v-015ebfa8] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n}\n#dr-servebag .search > div input[data-v-015ebfa8], #dr-fetelbag .search > div input[data-v-015ebfa8], #basicbag .search > div input[data-v-015ebfa8], #serveBag .search > div input[data-v-015ebfa8] {\n      height: 0.8rem;\n      border: 1px solid #ececec;\n      border-radius: 0.4rem;\n      padding: 0 1em;\n      min-width: 4rem;\n      width: 98%;\n      box-sizing: border-box;\n}\n#dr-servebag .search .btn[data-v-015ebfa8], #dr-fetelbag .search .btn[data-v-015ebfa8], #basicbag .search .btn[data-v-015ebfa8], #serveBag .search .btn[data-v-015ebfa8] {\n    display: block;\n    width: 1.33333rem;\n    height: 0.77333rem;\n    line-height: 0.85333rem;\n    margin-left: 0.26667rem;\n    background: #3069CF;\n    text-align: center;\n    border-radius: 0.4rem;\n    color: #fff;\n}\n#dr-servebag .headBox[data-v-015ebfa8], #dr-fetelbag .headBox[data-v-015ebfa8], #basicbag .headBox[data-v-015ebfa8], #serveBag .headBox[data-v-015ebfa8] {\n  position: fixed;\n  z-index: 2;\n  top: 1.2rem;\n  left: 0;\n  right: 0;\n}\n#dr-servebag .headBox .chooseOn[data-v-015ebfa8], #dr-fetelbag .headBox .chooseOn[data-v-015ebfa8], #basicbag .headBox .chooseOn[data-v-015ebfa8], #serveBag .headBox .chooseOn[data-v-015ebfa8] {\n    color: #3069cf;\n}\n#dr-servebag .headBox .depOn[data-v-015ebfa8], #dr-fetelbag .headBox .depOn[data-v-015ebfa8], #basicbag .headBox .depOn[data-v-015ebfa8], #serveBag .headBox .depOn[data-v-015ebfa8] {\n    background: #fff;\n}\n#dr-servebag .headBox .sortOn[data-v-015ebfa8], #dr-fetelbag .headBox .sortOn[data-v-015ebfa8], #basicbag .headBox .sortOn[data-v-015ebfa8], #serveBag .headBox .sortOn[data-v-015ebfa8] {\n    background: #3069cf !important;\n    color: #fff;\n}\n#dr-servebag .sort[data-v-015ebfa8], #dr-fetelbag .sort[data-v-015ebfa8], #basicbag .sort[data-v-015ebfa8], #serveBag .sort[data-v-015ebfa8] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  min-height: 0.8rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background: #fff;\n  font-size: 12px;\n  color: #333;\n  padding: 0 0.4rem;\n  border-bottom: 1px solid #ececec;\n}\n#dr-servebag .sort p[data-v-015ebfa8], #dr-fetelbag .sort p[data-v-015ebfa8], #basicbag .sort p[data-v-015ebfa8], #serveBag .sort p[data-v-015ebfa8] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n#dr-servebag .sort p > span[data-v-015ebfa8], #dr-fetelbag .sort p > span[data-v-015ebfa8], #basicbag .sort p > span[data-v-015ebfa8], #serveBag .sort p > span[data-v-015ebfa8] {\n      display: inline-block;\n      max-width: 1.6rem;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n}\n#dr-servebag .sort p i[data-v-015ebfa8], #dr-fetelbag .sort p i[data-v-015ebfa8], #basicbag .sort p i[data-v-015ebfa8], #serveBag .sort p i[data-v-015ebfa8] {\n      display: block;\n      min-width: 0.2rem;\n      min-height: 0.2rem;\n      background: url("+n(a("F2I8"))+") no-repeat center;\n      background-size: contain;\n      margin-left: 0.13333rem;\n}\n#dr-servebag .sort p .on[data-v-015ebfa8], #dr-fetelbag .sort p .on[data-v-015ebfa8], #basicbag .sort p .on[data-v-015ebfa8], #serveBag .sort p .on[data-v-015ebfa8] {\n      background: url("+n(a("VqDI"))+") no-repeat center;\n      background-size: contain;\n}\n#dr-servebag .hospital[data-v-015ebfa8], #dr-fetelbag .hospital[data-v-015ebfa8], #basicbag .hospital[data-v-015ebfa8], #serveBag .hospital[data-v-015ebfa8] {\n  background: #fff;\n  padding: 0 0.4rem;\n  max-height: 9.33333rem;\n  overflow: scroll;\n}\n#dr-servebag .hospital p[data-v-015ebfa8], #dr-fetelbag .hospital p[data-v-015ebfa8], #basicbag .hospital p[data-v-015ebfa8], #serveBag .hospital p[data-v-015ebfa8] {\n    padding: 0.26667rem 0;\n}\n#dr-servebag .Department[data-v-015ebfa8], #dr-fetelbag .Department[data-v-015ebfa8], #basicbag .Department[data-v-015ebfa8], #serveBag .Department[data-v-015ebfa8] {\n  background: #fff;\n  max-height: 9.33333rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n#dr-servebag .Department .type[data-v-015ebfa8], #dr-fetelbag .Department .type[data-v-015ebfa8], #basicbag .Department .type[data-v-015ebfa8], #serveBag .Department .type[data-v-015ebfa8] {\n    width: 2.66667rem;\n    background: #f3f3f3;\n    overflow: scroll;\n}\n#dr-servebag .Department .type p[data-v-015ebfa8], #dr-fetelbag .Department .type p[data-v-015ebfa8], #basicbag .Department .type p[data-v-015ebfa8], #serveBag .Department .type p[data-v-015ebfa8] {\n      padding-left: 0.26667rem;\n}\n#dr-servebag .Department .list[data-v-015ebfa8], #dr-fetelbag .Department .list[data-v-015ebfa8], #basicbag .Department .list[data-v-015ebfa8], #serveBag .Department .list[data-v-015ebfa8] {\n    overflow: scroll;\n    padding-left: 0.26667rem;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n}\n#dr-servebag .Department p[data-v-015ebfa8], #dr-fetelbag .Department p[data-v-015ebfa8], #basicbag .Department p[data-v-015ebfa8], #serveBag .Department p[data-v-015ebfa8] {\n    padding: 0.26667rem 0;\n}\n#dr-servebag .else[data-v-015ebfa8], #dr-fetelbag .else[data-v-015ebfa8], #basicbag .else[data-v-015ebfa8], #serveBag .else[data-v-015ebfa8] {\n  background: #fff;\n  color: #999;\n  font-size: 12px;\n  font-weight: bold;\n}\n#dr-servebag .else .card[data-v-015ebfa8], #dr-fetelbag .else .card[data-v-015ebfa8], #basicbag .else .card[data-v-015ebfa8], #serveBag .else .card[data-v-015ebfa8] {\n    padding: 0.26667rem 0.4rem;\n    border-bottom: 1px solid #ececec;\n}\n#dr-servebag .else .card p[data-v-015ebfa8], #dr-fetelbag .else .card p[data-v-015ebfa8], #basicbag .else .card p[data-v-015ebfa8], #serveBag .else .card p[data-v-015ebfa8] {\n      padding-bottom: 0.26667rem;\n}\n#dr-servebag .else .card span[data-v-015ebfa8], #dr-fetelbag .else .card span[data-v-015ebfa8], #basicbag .else .card span[data-v-015ebfa8], #serveBag .else .card span[data-v-015ebfa8] {\n      display: inline-block;\n      background: #f3f3f3;\n      padding: 0.06667rem 0.2rem;\n      border-radius: 15px;\n      margin-right: 0.13333rem;\n      margin-bottom: 0.26667rem;\n      font-weight: 500;\n}\n#dr-servebag .else .btnBox[data-v-015ebfa8], #dr-fetelbag .else .btnBox[data-v-015ebfa8], #basicbag .else .btnBox[data-v-015ebfa8], #serveBag .else .btnBox[data-v-015ebfa8] {\n    height: 1.2rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    font-size: 14px;\n}\n#dr-servebag .else .btnBox p[data-v-015ebfa8], #dr-fetelbag .else .btnBox p[data-v-015ebfa8], #basicbag .else .btnBox p[data-v-015ebfa8], #serveBag .else .btnBox p[data-v-015ebfa8] {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n              justify-content: center;\n}\n#dr-servebag .else .btnBox p[data-v-015ebfa8]:last-child, #dr-fetelbag .else .btnBox p[data-v-015ebfa8]:last-child, #basicbag .else .btnBox p[data-v-015ebfa8]:last-child, #serveBag .else .btnBox p[data-v-015ebfa8]:last-child {\n        background: #3069cf;\n        color: #fff;\n}\n#dr-servebag .mask[data-v-015ebfa8], #dr-fetelbag .mask[data-v-015ebfa8], #basicbag .mask[data-v-015ebfa8], #serveBag .mask[data-v-015ebfa8] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5);\n}\n#dr-servebag .bag-c[data-v-015ebfa8], #dr-fetelbag .bag-c[data-v-015ebfa8], #basicbag .bag-c[data-v-015ebfa8], #serveBag .bag-c[data-v-015ebfa8] {\n  padding-top: 3.6rem;\n}\n#dr-servebag .bag-c.content-1[data-v-015ebfa8], #dr-fetelbag .bag-c.content-1[data-v-015ebfa8], #serveBag .bag-c.content-1[data-v-015ebfa8] {\n  top: 2.66667rem;\n}\n#dr-servebag .bag-c[data-v-015ebfa8], #dr-fetelbag .bag-c[data-v-015ebfa8], #serveBag .bag-c[data-v-015ebfa8] {\n  padding-top: 0;\n  position: fixed;\n  width: 100vw;\n  top: 3.6rem;\n  bottom: 0px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform: translateZ(0px);\n  background: #F3F3F3;\n}\n#dr-servebag .hospital[data-v-015ebfa8], #dr-fetelbag .hospital[data-v-015ebfa8], #serveBag .hospital[data-v-015ebfa8] {\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform: translateZ(0px);\n}\n/* 判读报告 */\n#fetalReport .col-1[data-v-015ebfa8] {\n  color: #3069cf;\n}\n#fetalReport .col-2[data-v-015ebfa8] {\n  color: black;\n}\n#fetalReport .col-3[data-v-015ebfa8] {\n  color: #999999;\n}\n#fetalReport .col-4[data-v-015ebfa8] {\n  color: red;\n}\n#fetalReport .main[data-v-015ebfa8], #fetalReport .result[data-v-015ebfa8], #fetalReport .dr-advice[data-v-015ebfa8] {\n  background: #fff;\n  font-size: 0.37333rem;\n  color: #666666;\n  margin-bottom: 0.26667rem;\n}\n#fetalReport .main .flex[data-v-015ebfa8], #fetalReport .result .flex[data-v-015ebfa8], #fetalReport .dr-advice .flex[data-v-015ebfa8] {\n    padding: 0.26667rem 0.4rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    border-bottom: 1px solid #f3f3f3;\n}\n#fetalReport .main .flex .flex-item[data-v-015ebfa8], #fetalReport .result .flex .flex-item[data-v-015ebfa8], #fetalReport .dr-advice .flex .flex-item[data-v-015ebfa8] {\n      width: 50%;\n      text-align: left;\n      vertical-align: middle;\n}\n#fetalReport .main .flex .flex-item > img[data-v-015ebfa8], #fetalReport .result .flex .flex-item > img[data-v-015ebfa8], #fetalReport .dr-advice .flex .flex-item > img[data-v-015ebfa8] {\n        width: 0.34667rem;\n        position: relative;\n        top: 0.08rem;\n}\n#fetalReport .main .flex .flex-item-r[data-v-015ebfa8], #fetalReport .result .flex .flex-item-r[data-v-015ebfa8], #fetalReport .dr-advice .flex .flex-item-r[data-v-015ebfa8] {\n      text-align: right;\n}\n#fetalReport .main .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(1), #fetalReport .main .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(2), #fetalReport .result .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(1), #fetalReport .result .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(2), #fetalReport .dr-advice .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(1), #fetalReport .dr-advice .flex-4 .flex-item[data-v-015ebfa8]:nth-of-type(2) {\n    padding-bottom: 0.10667rem;\n}\n#fetalReport .main .list[data-v-015ebfa8], #fetalReport .result .list[data-v-015ebfa8], #fetalReport .dr-advice .list[data-v-015ebfa8] {\n    padding: 0.21333rem 0.4rem;\n}\n#fetalReport .main .list .list-item[data-v-015ebfa8], #fetalReport .result .list .list-item[data-v-015ebfa8], #fetalReport .dr-advice .list .list-item[data-v-015ebfa8] {\n      padding: 0.05333rem 0rem;\n}\n#fetalReport .result .title[data-v-015ebfa8], #fetalReport .dr-advice .title[data-v-015ebfa8] {\n  padding: 0.26667rem 0.4rem;\n  border-bottom: 1px solid #f3f3f3;\n}\n#fetalReport .result .title > img[data-v-015ebfa8], #fetalReport .dr-advice .title > img[data-v-015ebfa8] {\n    width: 0.34667rem;\n    position: relative;\n    top: 0.08rem;\n}\n#fetalReport .result .title > span[data-v-015ebfa8], #fetalReport .dr-advice .title > span[data-v-015ebfa8] {\n    font-size: 0.42667rem;\n    color: #999999;\n}\n#fetalReport .result .title > span.right[data-v-015ebfa8], #fetalReport .dr-advice .title > span.right[data-v-015ebfa8] {\n    float: right;\n    font-size: 0.37333rem;\n    color: #ffa416;\n}\n#fetalReport .result > p[data-v-015ebfa8], #fetalReport .result > div[data-v-015ebfa8], #fetalReport .dr-advice > p[data-v-015ebfa8], #fetalReport .dr-advice > div[data-v-015ebfa8] {\n  padding: 0.26667rem 0.4rem;\n}\n#fetalReport .result .d-a[data-v-015ebfa8], #fetalReport .dr-advice .d-a[data-v-015ebfa8] {\n  padding-bottom: 0rem;\n  font-size: 0.32rem;\n}\n#fetalReport .dr-advice .title > img[data-v-015ebfa8] {\n  width: 0.4rem;\n}\n#dr-servebag .content .c-b .c-b-box .right[data-v-015ebfa8] {\n  min-width: 1.6rem;\n}\n#dr-servebag .price[data-v-015ebfa8] {\n  width: 1.6rem;\n}\n#dr-servebag .content .c-b .c-b-price > span.left[data-v-015ebfa8] {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 5.33333rem;\n}\n#basicbag .bag-c[data-v-015ebfa8] {\n  padding-top: 1.6rem;\n}\n#basicbag .content[data-v-015ebfa8], #dr-fetelbag .content[data-v-015ebfa8] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.4rem;\n  font-size: 0.37333rem;\n  background-color: #fff;\n  border-bottom: 1px solid #f3f3f3;\n}\n#basicbag .content .c-a[data-v-015ebfa8], #dr-fetelbag .content .c-a[data-v-015ebfa8] {\n    width: 2.4rem;\n    text-align: center;\n}\n#basicbag .content .c-a > img[data-v-015ebfa8], #dr-fetelbag .content .c-a > img[data-v-015ebfa8] {\n      max-width: 2.10667rem;\n      min-width: 2.10667rem;\n      min-height: 1.57333rem;\n      max-height: 1.57333rem;\n      object-fit: cover;\n      overflow: hidden;\n      margin: 0 auto;\n      padding-right: 0.26667rem;\n}\n#basicbag .content .c-b[data-v-015ebfa8], #dr-fetelbag .content .c-b[data-v-015ebfa8] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    margin-top: -0.06667rem;\n}\n#basicbag .content .c-b .c-b-box[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box[data-v-015ebfa8] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n}\n#basicbag .content .c-b .c-b-box .left[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box .left[data-v-015ebfa8] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        line-height: 1.5;\n}\n#basicbag .content .c-b .c-b-box .right[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box .right[data-v-015ebfa8] {\n        margin-left: 0.10667rem;\n        min-width: 2rem;\n}\n#basicbag .content .c-b .c-b-box .right .price[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box .right .price[data-v-015ebfa8] {\n          border: none;\n          font-size: 0.37333rem;\n          color: #ffa417;\n          text-align: right;\n}\n#basicbag .content .c-b .c-b-box .right .price > span[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box .right .price > span[data-v-015ebfa8] {\n            font-size: 0.53333rem;\n}\n#basicbag .content .c-b .c-b-box .right .price2[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-box .right .price2[data-v-015ebfa8] {\n          border: none;\n          font-size: 0.26667rem;\n          color: #ffa417;\n          text-align: right;\n}\n#basicbag .content .c-b .c-b-name[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-name[data-v-015ebfa8] {\n      color: #333;\n      font-size: 0.37333rem;\n      margin-bottom: 0.08rem;\n      -webkit-line-clamp: 2;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-weight: 600;\n}\n#basicbag .content .c-b .c-b-org[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-org[data-v-015ebfa8] {\n      font-size: 0.32rem;\n      color: #666;\n      margin-bottom: 0.08rem;\n}\n#basicbag .content .c-b .c-b-price[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-price[data-v-015ebfa8] {\n      color: #ffa416;\n      font-size: 0.42667rem;\n}\n#basicbag .content .c-b .c-b-price > span.left[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-price > span.left[data-v-015ebfa8] {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        width: 4.66667rem;\n}\n#basicbag .content .c-b .c-b-peiple1[data-v-015ebfa8], #basicbag .content .c-b .c-b-peiple2[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-peiple1[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-peiple2[data-v-015ebfa8] {\n      -webkit-line-clamp: 2;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n}\n#basicbag .content .c-b .c-b-price[data-v-015ebfa8], #basicbag .content .c-b .c-b-peiple1[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-price[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-peiple1[data-v-015ebfa8] {\n      color: #999999;\n      font-size: 0.32rem;\n}\n#basicbag .content .c-b .c-b-peiple2[data-v-015ebfa8], #dr-fetelbag .content .c-b .c-b-peiple2[data-v-015ebfa8] {\n      color: #999999;\n      font-size: 0.32rem;\n}\n#dr-servebag .content[data-v-015ebfa8], #serveBag .content[data-v-015ebfa8] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.4rem;\n  font-size: 0.37333rem;\n  background-color: #fff;\n  border-bottom: 1px solid #f3f3f3;\n}\n#dr-servebag .content .c-a[data-v-015ebfa8], #serveBag .content .c-a[data-v-015ebfa8] {\n    width: 1.73333rem;\n}\n#dr-servebag .content .c-a > img[data-v-015ebfa8], #serveBag .content .c-a > img[data-v-015ebfa8] {\n      max-width: 1.33333rem;\n      min-width: 1.33333rem;\n      min-height: 1.33333rem;\n      max-height: 1.33333rem;\n      border-radius: 0.26667rem;\n      object-fit: cover;\n      overflow: hidden;\n}\n#dr-servebag .content .c-b[data-v-015ebfa8], #serveBag .content .c-b[data-v-015ebfa8] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    margin-top: -0.06667rem;\n}\n#dr-servebag .content .c-b .c-b-box[data-v-015ebfa8], #serveBag .content .c-b .c-b-box[data-v-015ebfa8] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n}\n#dr-servebag .content .c-b .c-b-box .left[data-v-015ebfa8], #serveBag .content .c-b .c-b-box .left[data-v-015ebfa8] {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        line-height: 1.5;\n}\n#dr-servebag .content .c-b .c-b-box .right[data-v-015ebfa8], #serveBag .content .c-b .c-b-box .right[data-v-015ebfa8] {\n        margin-left: 0.10667rem;\n        min-width: 2rem;\n}\n#dr-servebag .content .c-b .c-b-box .right .price[data-v-015ebfa8], #serveBag .content .c-b .c-b-box .right .price[data-v-015ebfa8] {\n          border: none;\n          font-size: 0.37333rem;\n          color: #ffa417;\n          text-align: right;\n          width: 100%;\n}\n#dr-servebag .content .c-b .c-b-box .right .price > span[data-v-015ebfa8], #serveBag .content .c-b .c-b-box .right .price > span[data-v-015ebfa8] {\n            font-size: 0.53333rem;\n}\n#dr-servebag .content .c-b .c-b-box .right .price2[data-v-015ebfa8], #serveBag .content .c-b .c-b-box .right .price2[data-v-015ebfa8] {\n          border: none;\n          font-size: 0.26667rem;\n          color: #ffa417;\n          text-align: right;\n}\n#dr-servebag .content .c-b .c-b-name[data-v-015ebfa8], #serveBag .content .c-b .c-b-name[data-v-015ebfa8] {\n      color: #333;\n      font-size: 0.37333rem;\n      margin-bottom: 0.08rem;\n      -webkit-line-clamp: 2;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-weight: 600;\n}\n#dr-servebag .content .c-b .c-b-org[data-v-015ebfa8], #serveBag .content .c-b .c-b-org[data-v-015ebfa8] {\n      font-size: 0.32rem;\n      color: #666;\n      margin-bottom: 0.08rem;\n}\n#dr-servebag .content .c-b .c-b-price[data-v-015ebfa8], #serveBag .content .c-b .c-b-price[data-v-015ebfa8] {\n      color: #ffa416;\n      font-size: 0.42667rem;\n}\n#dr-servebag .content .c-b .c-b-price > span.left[data-v-015ebfa8], #serveBag .content .c-b .c-b-price > span.left[data-v-015ebfa8] {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        width: 4.66667rem;\n}\n#dr-servebag .content .c-b .c-b-peiple1[data-v-015ebfa8], #dr-servebag .content .c-b .c-b-peiple2[data-v-015ebfa8], #serveBag .content .c-b .c-b-peiple1[data-v-015ebfa8], #serveBag .content .c-b .c-b-peiple2[data-v-015ebfa8] {\n      -webkit-line-clamp: 2;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n}\n#dr-servebag .content .c-b .c-b-price[data-v-015ebfa8], #dr-servebag .content .c-b .c-b-peiple1[data-v-015ebfa8], #serveBag .content .c-b .c-b-price[data-v-015ebfa8], #serveBag .content .c-b .c-b-peiple1[data-v-015ebfa8] {\n      color: #999999;\n      font-size: 0.32rem;\n}\n#dr-servebag .content .c-b .c-b-peiple2[data-v-015ebfa8], #serveBag .content .c-b .c-b-peiple2[data-v-015ebfa8] {\n      color: #999999;\n      font-size: 0.32rem;\n}\n#dr-fetelbag .sort > p span[data-v-015ebfa8] {\n  max-width: 2.66667rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#dr-fetelbag .content-1[data-v-015ebfa8] {\n  top: 2.66667rem;\n}\n",""])},"bu+S":function(e,t,a){var n=a("K847");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("40865987",n,!0,{})}});