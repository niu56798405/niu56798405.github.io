(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b361b"],{"27aa":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("游戏行为查询")])]),a("div",[a("el-form",{attrs:{model:e.objSearch,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"角色ID"}},[a("el-input",{attrs:{placeholder:"请输入角色ID"},model:{value:e.objSearch.pid,callback:function(t){e.$set(e.objSearch,"pid",t)},expression:"objSearch.pid"}})],1)],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"服务器ID"}},[a("el-input",{attrs:{placeholder:"请输入服务器ID"},model:{value:e.objSearch.serverId,callback:function(t){e.$set(e.objSearch,"serverId",t)},expression:"objSearch.serverId"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"参数"}},[a("el-input",{attrs:{placeholder:"请输入参数"},model:{value:e.objSearch.param,callback:function(t){e.$set(e.objSearch,"param",t)},expression:"objSearch.param"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"开始"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择开始时间"},model:{value:e.objSearch.start,callback:function(t){e.$set(e.objSearch,"start",t)},expression:"objSearch.start"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"结束"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择结束时间"},model:{value:e.objSearch.end,callback:function(t){e.$set(e.objSearch,"end",t)},expression:"objSearch.end"}})],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"玩家行为"}},[a("el-checkbox-group",{model:{value:e.objSearch.action,callback:function(t){e.$set(e.objSearch,"action",t)},expression:"objSearch.action"}},e._l(e.aActions,(function(t,r){return a("el-checkbox",{key:r,attrs:{label:t.action}},[e._v(e._s(t.name))])})),1)],1)],1)],1)],1)],1),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.aTableData,"tooltip-effect":"dark"}},[e._l(e.aTableColumn,(function(e,t){return[a("el-table-column",{key:t,attrs:{prop:e.field,label:e.tableHead,"min-width":"120","show-overflow-tooltip":""}})]}))],2)],1)])},l=[],o={name:"behavior",components:{},props:{},data:function(){return{objSearch:{action:[]},aTableColumn:[],aTableData:[],aActions:[]}},watch:{},methods:{handleReset:function(){this.objSearch={action:[]}},handleSearch:function(){this.fetchList()},fetchList:function(){var e=this,t=JSON.parse(JSON.stringify(this.objSearch));this.$fetch.post(API.action.select_player_action,t).then((function(t){var a=t.data;if(200==a.status){var r=a.data;e.aTableData=r.fieldList,e.aTableColumn=r.headList}else e.$message.error(a.desc)}))},fetchGames:function(){var e=this;this.$fetch.post(API.action.action_list).then((function(t){var a=t.data;200==a.status?e.aActions=a.data:e.$message.error(a.desc)}))}},mounted:function(){this.fetchGames()}},s=o,c=a("4e82"),n=Object(c["a"])(s,r,l,!1,null,"6a91744b",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0b361b.7c265bee.js.map