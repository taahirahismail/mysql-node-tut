"use strict";(self["webpackChunkvue_3_crud"]=self["webpackChunkvue_3_crud"]||[]).push([[906],{7906:function(t,i,e){e.r(i),e.d(i,{default:function(){return _}});var l=e(6252),o=e(9963);const r={class:"submit-form"},s={key:0},u={class:"form-group"},a=(0,l._)("label",{for:"title"},"Title",-1),n={class:"form-group"},d=(0,l._)("label",{for:"description"},"Description",-1),c={key:1},p=(0,l._)("h4",null,"You have submitted successfully!",-1);function b(t,i,e,b,m,h){return(0,l.wg)(),(0,l.iD)("div",r,[m.submitted?((0,l.wg)(),(0,l.iD)("div",c,[p,(0,l._)("button",{class:"btn btn-success",onClick:i[3]||(i[3]=(...t)=>h.newTutorial&&h.newTutorial(...t))},"Add")])):((0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",u,[a,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",required:"","onUpdate:modelValue":i[0]||(i[0]=t=>m.tutorial.title=t),name:"title"},null,512),[[o.nr,m.tutorial.title]])]),(0,l._)("div",n,[d,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"description",required:"","onUpdate:modelValue":i[1]||(i[1]=t=>m.tutorial.description=t),name:"description"},null,512),[[o.nr,m.tutorial.description]])]),(0,l._)("button",{onClick:i[2]||(i[2]=(...t)=>h.saveTutorial&&h.saveTutorial(...t)),class:"btn btn-success"},"Submit")]))])}var m=e(1455),h={name:"add-tutorial",data(){return{tutorial:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveTutorial(){var t={title:this.tutorial.title,description:this.tutorial.description};m.Z.create(t).then((t=>{this.tutorial.id=t.data.id,console.log(t.data),this.submitted=!0})).catch((t=>{console.log(t)}))},newTutorial(){this.submitted=!1,this.tutorial={}}}},v=e(3744);const f=(0,v.Z)(h,[["render",b]]);var _=f}}]);
//# sourceMappingURL=906.ffb06085.js.map