(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{284:function(e,t,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("1c28cb17",content,!0,{sourceMap:!1})},287:function(e,t,r){"use strict";r(284)},288:function(e,t,r){var l=r(47)((function(i){return i[1]}));l.push([e.i,".search-form[data-v-21b6fcc0]{background:#f8f8f8;border:1px solid #ddd;border-radius:5px;padding:20px}.field-group[data-v-21b6fcc0]{margin-bottom:10px}.toggle-section[data-v-21b6fcc0]{margin:15px 0}button[data-v-21b6fcc0]{background:#007bff;border:none;color:#fff;cursor:pointer;margin-top:10px;padding:10px}",""]),l.locals={},e.exports=l},290:function(e,t,r){"use strict";r.r(t);r(111),r(50),r(49),r(65),r(21);var l={name:"SearchForm",props:{genders:{type:Array,default:function(){return[]}},countries:{type:Array,default:function(){return[]}},experienceGroups:{type:Array,default:function(){return[]}},birthYears:{type:Array,default:function(){return[]}},placeLabelOptions:{type:Array,default:function(){return[]}}},data:function(){return{queryType:"Vector",queryText:"",togglePlaces:!1,selectedPlaces:[],toggleTestimonyFilters:!1,category:[],selectedGender:"",selectedCountry:"",selectedExperienceGroup:"",selectedBirthYear:"",rgNumber:"",fullName:"",toggleAdvanced:!1,numResults:100}},methods:{submitSearch:function(){var e={queryType:this.queryType,queryText:this.queryText,placesHeader:this.togglePlaces,labels:this.selectedPlaces,testimonyFilters:this.toggleTestimonyFilters,category:this.category,gender:this.selectedGender,country:this.selectedCountry,experienceGroup:this.selectedExperienceGroup,birthYear:this.selectedBirthYear,rgNumber:this.rgNumber,fullName:this.fullName,advanced:this.toggleAdvanced,numResults:this.numResults};this.$emit("search-submitted",e)}}},n=(r(287),r(32)),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-form"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submitSearch.apply(null,arguments)}}},[t("div",{staticClass:"field-group"},[t("label",[e._v("Query Text")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.queryText,expression:"queryText"}],attrs:{type:"text",placeholder:"Enter your search term"},domProps:{value:e.queryText},on:{input:function(t){t.target.composing||(e.queryText=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"field-group"},[t("label",[e._v("Type of Search")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.queryType,expression:"queryType"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.queryType=t.target.multiple?r:r[0]}}},[t("option",[e._v("Vector")]),e._v(" "),t("option",[e._v("Keyword")]),e._v(" "),t("option",[e._v("Hybrid")])])]),e._v(" "),t("div",{staticClass:"toggle-section"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.togglePlaces,expression:"togglePlaces"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.togglePlaces)?e._i(e.togglePlaces,null)>-1:e.togglePlaces},on:{change:function(t){var r=e.togglePlaces,l=t.target,n=!!l.checked;if(Array.isArray(r)){var o=e._i(r,null);l.checked?o<0&&(e.togglePlaces=r.concat([null])):o>-1&&(e.togglePlaces=r.slice(0,o).concat(r.slice(o+1)))}else e.togglePlaces=n}}}),e._v("\n        Places Filter\n      ")])]),e._v(" "),e.togglePlaces?t("div",{staticClass:"places-panel"},[t("label",[e._v("Select Place Labels")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPlaces,expression:"selectedPlaces"}],attrs:{multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedPlaces=t.target.multiple?r:r[0]}}},e._l(e.placeLabelOptions,(function(r,l){return t("option",{key:l,domProps:{value:r.label}},[e._v("\n          "+e._s(r.label)+"\n        ")])})),0)]):e._e(),e._v(" "),t("div",{staticClass:"toggle-section"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleTestimonyFilters,expression:"toggleTestimonyFilters"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggleTestimonyFilters)?e._i(e.toggleTestimonyFilters,null)>-1:e.toggleTestimonyFilters},on:{change:function(t){var r=e.toggleTestimonyFilters,l=t.target,n=!!l.checked;if(Array.isArray(r)){var o=e._i(r,null);l.checked?o<0&&(e.toggleTestimonyFilters=r.concat([null])):o>-1&&(e.toggleTestimonyFilters=r.slice(0,o).concat(r.slice(o+1)))}else e.toggleTestimonyFilters=n}}}),e._v("\n        Testimony Filters\n      ")])]),e._v(" "),e.toggleTestimonyFilters?t("div",{staticClass:"testimony-panel"},[t("div",[t("label",[e._v("Category")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],attrs:{multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.category=t.target.multiple?r:r[0]}}},[t("option",[e._v("question")]),e._v(" "),t("option",[e._v("answer")])])]),e._v(" "),t("div",[t("label",[e._v("Gender")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedGender,expression:"selectedGender"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedGender=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("All")]),e._v(" "),e._l(e.genders,(function(g,i){return t("option",{key:i,domProps:{value:g}},[e._v(e._s(g))])}))],2)]),e._v(" "),t("div",[t("label",[e._v("Country")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCountry,expression:"selectedCountry"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedCountry=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("All")]),e._v(" "),e._l(e.countries,(function(r,i){return t("option",{key:i,domProps:{value:r}},[e._v(e._s(r))])}))],2)]),e._v(" "),t("div",[t("label",[e._v("Experience Group")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedExperienceGroup,expression:"selectedExperienceGroup"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedExperienceGroup=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("All")]),e._v(" "),e._l(e.experienceGroups,(function(r,i){return t("option",{key:i,domProps:{value:r}},[e._v(e._s(r))])}))],2)]),e._v(" "),t("div",[t("label",[e._v("Birth Year")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBirthYear,expression:"selectedBirthYear"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedBirthYear=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("All")]),e._v(" "),e._l(e.birthYears,(function(r,i){return t("option",{key:i,domProps:{value:r}},[e._v(e._s(r))])}))],2)]),e._v(" "),t("div",[t("label",[e._v("RG Number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgNumber,expression:"rgNumber"}],attrs:{type:"text",placeholder:"RG..."},domProps:{value:e.rgNumber},on:{input:function(t){t.target.composing||(e.rgNumber=t.target.value)}}})]),e._v(" "),t("div",[t("label",[e._v("Full Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})])]):e._e(),e._v(" "),t("div",{staticClass:"toggle-section"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleAdvanced,expression:"toggleAdvanced"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggleAdvanced)?e._i(e.toggleAdvanced,null)>-1:e.toggleAdvanced},on:{change:function(t){var r=e.toggleAdvanced,l=t.target,n=!!l.checked;if(Array.isArray(r)){var o=e._i(r,null);l.checked?o<0&&(e.toggleAdvanced=r.concat([null])):o>-1&&(e.toggleAdvanced=r.slice(0,o).concat(r.slice(o+1)))}else e.toggleAdvanced=n}}}),e._v("\n        Advanced Options\n      ")])]),e._v(" "),e.toggleAdvanced?t("div",{staticClass:"advanced-panel"},[t("label",[e._v("Number of Results")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numResults,expression:"numResults",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"1000"},domProps:{value:e.numResults},on:{input:function(t){t.target.composing||(e.numResults=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e(),e._v(" "),t("button",{attrs:{type:"submit"}},[e._v("Search")])])])}),[],!1,null,"21b6fcc0",null);t.default=component.exports}}]);