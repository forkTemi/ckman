(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31473221"],{"1d60":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.formModel.length>0?a("div",{staticClass:"list-struct ml-10"},[e.isCascade?a("div",{staticClass:"pt-15 pb-10 list-struct-list-struct",staticStyle:{"line-height":"30px","background-color":"rgba(0, 0, 0, 0.05)"}},e._l(e.formModel,(function(t,i){return a("div",{key:t.$$id,staticClass:"pl-30 pr-40 relative",attrs:{name:t.$$id}},[e._l(e.schema.struct,(function(t,o){return a("div",{key:o},[a("DFormItem",{attrs:{schema:t,"origin-name":o,"prop-name":e.PropName+"."+i+"."+o,"is-cascade":e.isCascade},model:{value:e.formModel[i],callback:function(t){e.$set(e.formModel,i,t)},expression:"formModel[index]"}})],1)})),a("i",{staticClass:"fa fa-trash pointer fs-16 fc-red ml-10 absolute",staticStyle:{right:"15px",top:"10px"},on:{click:function(t){return t.stopPropagation(),e.deleteItem(i)}}})],2)})),0):a("el-collapse",{staticClass:"mb-20",attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.formModel,(function(t,i){return a("el-collapse-item",{key:t.$$id,attrs:{name:t.$$id,size:"medium"}},[a("template",{staticClass:"flex flex-vcenter pl-10",slot:"title"},[a("span",{staticClass:"flex-1 pl-10"},[e._v(e._s((e.formModel[i].Name||e.originName)+"["+i+"]"))]),a("i",{staticClass:"fa fa-trash pointer fs-16 fc-red ml-10",staticStyle:{margin:"8px 10px 8px auto"},on:{click:function(t){return t.stopPropagation(),e.deleteItem(i)}}})]),e._l(e.schema.struct,(function(t,o){return a("div",{key:o,staticStyle:{"line-height":"40px"}},[a("DFormItem",{attrs:{schema:t,"origin-name":o,"prop-name":e.PropName+"."+i+"."+o},model:{value:e.formModel[i],callback:function(t){e.$set(e.formModel,i,t)},expression:"formModel[index]"}})],1)}))],2)})),1)],1):e._e()},o=[],n=a("641c"),r={name:"DForm",components:{DFormItem:function(){return Promise.resolve().then(a.bind(null,"0b0b"))}},model:{prop:"formModel",event:"change"},props:{schema:{type:Object,default:function(){return{}}},PropName:{type:String,default:""},originName:{type:String,default:""},formModel:{type:Array,default:function(){return[]}}},computed:{isCascade:function(){var e=this.originName;return"Shards"===e||"Replicas"===e}},data:function(){return{activeName:""}},created:function(){this.formModel.forEach((function(e){e.$$id=+new Date})),this.formModel.length>0&&(this.activeName=this.formModel[0].$$id)},methods:{addItem:function(){var e=this.schema,t={$$id:+new Date};Object.assign(t,Object(n["b"])(t,e.struct)),this.formModel.push(t),this.activeName=t.$$id},deleteItem:function(e){this.formModel.splice(e,1)}}},s=r,c=(a("62e9"),a("2877")),l=Object(c["a"])(s,i,o,!1,null,"2c3de7b2",null);t["default"]=l.exports},"62e9":function(e,t,a){"use strict";var i=a("f9ce"),o=a.n(i);o.a},f9ce:function(e,t,a){}}]);