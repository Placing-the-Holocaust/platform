(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{284:function(e,t,l){var content=l(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(48).default)("215e4b68",content,!0,{sourceMap:!1})},287:function(e,t,l){"use strict";l(284)},288:function(e,t,l){var n=l(47)((function(i){return i[1]}));n.push([e.i,".search-form[data-v-ee608a6e]{background-color:#fff;border:1px solid #000;border-radius:8px;margin:0 auto;max-width:700px;padding:20px}.form-section[data-v-ee608a6e]{background-color:#fff;border:1px solid #000;border-radius:6px;margin-bottom:25px;padding:15px}.section-title[data-v-ee608a6e]{font-size:1.3em;font-weight:600;margin:0 0 10px}.section-help[data-v-ee608a6e]{color:#666;font-size:.9em;margin-bottom:10px}.toggle-section[data-v-ee608a6e]{position:relative}.switch-label[data-v-ee608a6e]{align-items:center;cursor:pointer;display:inline-flex;margin-top:10px}.switch-input[data-v-ee608a6e]{margin-right:10px}.switch-text[data-v-ee608a6e]{color:#333;font-size:.95em}.field-group[data-v-ee608a6e]{margin-bottom:10px}.field-label[data-v-ee608a6e]{display:inline-block;font-weight:600;margin-bottom:5px}.field-help[data-v-ee608a6e]{color:#666;font-size:.85em;margin-bottom:5px}.field-input[data-v-ee608a6e],.field-select[data-v-ee608a6e]{border:1px solid #ccc;border-radius:4px;font-size:.95em;padding:8px;width:85%}.multiselect-field[data-v-ee608a6e]{margin-top:5px}.explanation-text[data-v-ee608a6e]{background-color:#fff;border:1px dashed #ccc;border-radius:4px;margin-top:10px;padding:10px}.search-button[data-v-ee608a6e]{background-color:#0056b3;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:.95em;padding:10px 20px;transition:background-color .3s}.search-button[data-v-ee608a6e]:hover{background-color:#003d80}.advanced-panel[data-v-ee608a6e],.places-panel[data-v-ee608a6e],.testimony-panel[data-v-ee608a6e]{background:#f9f9f9;border:1px solid #eee;border-radius:4px;margin-top:15px;padding:10px}",""]),n.locals={},e.exports=n},290:function(e,t,l){"use strict";l.r(t);l(111),l(50),l(49),l(65),l(33),l(21);var n={name:"SearchForm",props:{widgetNames:{type:Object,default:function(){return{query_header:{name:"Query Header",help:""},type_of_search:{name:"Type of Search",help:""},query_text:{name:"Query Text",help:""},places_header:{name:"Places Header",help:""},select_label_matches:{name:"Select Label Matches",help:""},answer_or_question:{name:"Answer or Question",help:""},select_gender:{name:"Select Gender",help:""},select_place_of_birth:{name:"Select Place of Birth",help:""},select_experience_group:{name:"Select Experience Group",help:""},search_full_name:{name:"Search Full Name",help:""},search_rg_number:{name:"Search RG Number",help:""},number_of_results:{name:"Number of Results",help:""},search_button:{name:"Search",help:""}}}},explanation:{type:Object,default:function(){return{name:"Explanation",text:"Some advanced search explanation..."}}},categoryOptions:{type:Array,default:function(){return["question","answer"]}},genderOptions:{type:Array,default:function(){return["M","F","Unknown"]}},countryOptions:{type:Array,default:function(){return["Poland","Germany","Unknown"]}},experienceGroupOptions:{type:Array,default:function(){return["Camp Survivor","Partisan","Ghetto Survivor","Unknown"]}},placeLabelOptions:{type:Array,default:function(){return[{label:"Regions"},{label:"Countries"},{label:"Populated Places"},{label:"Environmental Features"},{label:"Distinct Landscape Features"},{label:"Buildings"},{label:"Interior Spaces"},{label:"Spatial Objects"},{label:"Imaginary Places"}]}}},data:function(){return{togglePlaces:!1,toggleTestimonyFilters:!1,toggleAdvanced:!1,toggleExplanation:!1,queryType:"Vector",queryText:"",labels:[],category:[],gender:[],countries:[],experienceGroups:[],fullName:"",rgNumber:"",numResults:10}},methods:{onSearchClick:function(){var e={queryType:this.queryType,queryText:this.queryText,placesHeader:this.togglePlaces,labels:this.labels.map((function(e){return e.label})),testimonyFilters:this.toggleTestimonyFilters,category:this.category,gender:this.gender,countries:this.countries,experienceGroups:this.experienceGroups,fullName:this.fullName,rgNumber:this.rgNumber,advanced:this.toggleAdvanced,numResults:this.numResults};this.$emit("search-submitted",e)}}},r=(l(287),l(32)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-form"},[t("div",{staticClass:"form-section"},[t("h2",{staticClass:"section-title"},[e._v(e._s(e.widgetNames.query_header.name))]),e._v(" "),e.widgetNames.query_header.help?t("p",{staticClass:"section-help"},[e._v("\n      "+e._s(e.widgetNames.query_header.help)+"\n    ")]):e._e(),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.type_of_search.name))]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.queryType,expression:"queryType"}],staticClass:"field-select",attrs:{title:e.widgetNames.type_of_search.help},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.queryType=t.target.multiple?l:l[0]}}},[t("option",{attrs:{value:"Vector"}},[e._v("Vector")]),e._v(" "),t("option",{attrs:{value:"Keyword"}},[e._v("Keyword")]),e._v(" "),t("option",{attrs:{value:"Hybrid"}},[e._v("Hybrid")])])]),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.query_text.name))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.queryText,expression:"queryText"}],staticClass:"field-input",attrs:{type:"text",placeholder:e.widgetNames.query_text.help},domProps:{value:e.queryText},on:{input:function(t){t.target.composing||(e.queryText=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"form-section toggle-section"},[t("h2",{staticClass:"section-title"},[e._v(e._s(e.widgetNames.places_header.name))]),e._v(" "),e.widgetNames.places_header.help?t("p",{staticClass:"section-help"},[e._v("\n      "+e._s(e.widgetNames.places_header.help)+"\n    ")]):e._e(),e._v(" "),t("label",{staticClass:"switch-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.togglePlaces,expression:"togglePlaces"}],staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.togglePlaces)?e._i(e.togglePlaces,null)>-1:e.togglePlaces},on:{change:function(t){var l=e.togglePlaces,n=t.target,r=!!n.checked;if(Array.isArray(l)){var o=e._i(l,null);n.checked?o<0&&(e.togglePlaces=l.concat([null])):o>-1&&(e.togglePlaces=l.slice(0,o).concat(l.slice(o+1)))}else e.togglePlaces=r}}}),e._v(" "),t("span",{staticClass:"switch-text"},[e._v("Enable Places Filter")])]),e._v(" "),e.togglePlaces?t("div",{staticClass:"places-panel"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.select_label_matches.name))]),e._v(" "),e.widgetNames.select_label_matches.help?t("p",{staticClass:"field-help"},[e._v("\n        "+e._s(e.widgetNames.select_label_matches.help)+"\n      ")]):e._e(),e._v(" "),t("multiselect",{staticClass:"multiselect-field",attrs:{options:e.placeLabelOptions,multiple:!0,"track-by":"label",label:"label",placeholder:"Select place labels..."},model:{value:e.labels,callback:function(t){e.labels=t},expression:"labels"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"form-section toggle-section"},[t("h2",{staticClass:"section-title"},[e._v("Testimony Filters")]),e._v(" "),t("label",{staticClass:"switch-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleTestimonyFilters,expression:"toggleTestimonyFilters"}],staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggleTestimonyFilters)?e._i(e.toggleTestimonyFilters,null)>-1:e.toggleTestimonyFilters},on:{change:function(t){var l=e.toggleTestimonyFilters,n=t.target,r=!!n.checked;if(Array.isArray(l)){var o=e._i(l,null);n.checked?o<0&&(e.toggleTestimonyFilters=l.concat([null])):o>-1&&(e.toggleTestimonyFilters=l.slice(0,o).concat(l.slice(o+1)))}else e.toggleTestimonyFilters=r}}}),e._v(" "),t("span",{staticClass:"switch-text"},[e._v("Enable Additional Filters")])]),e._v(" "),e.toggleTestimonyFilters?t("div",{staticClass:"testimony-panel"},[t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.answer_or_question.name))]),e._v(" "),e.widgetNames.answer_or_question.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.answer_or_question.help)+"\n        ")]):e._e(),e._v(" "),t("multiselect",{staticClass:"multiselect-field",attrs:{options:e.categoryOptions,multiple:!0,"track-by":"option",label:"option",placeholder:"Select Category..."},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.select_gender.name))]),e._v(" "),e.widgetNames.select_gender.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.select_gender.help)+"\n        ")]):e._e(),e._v(" "),t("multiselect",{staticClass:"multiselect-field",attrs:{options:e.genderOptions,multiple:!0,"track-by":"option",label:"option",placeholder:"Select Gender..."},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}})],1),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.select_place_of_birth.name))]),e._v(" "),e.widgetNames.select_place_of_birth.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.select_place_of_birth.help)+"\n        ")]):e._e(),e._v(" "),t("multiselect",{staticClass:"multiselect-field",attrs:{options:e.countryOptions,multiple:!0,"track-by":"option",label:"option",placeholder:"Select Countries..."},model:{value:e.countries,callback:function(t){e.countries=t},expression:"countries"}})],1),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.select_experience_group.name))]),e._v(" "),e.widgetNames.select_experience_group.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.select_experience_group.help)+"\n        ")]):e._e(),e._v(" "),t("multiselect",{staticClass:"multiselect-field",attrs:{options:e.experienceGroupOptions,multiple:!0,"track-by":"option",label:"option",placeholder:"Select Experience Groups..."},model:{value:e.experienceGroups,callback:function(t){e.experienceGroups=t},expression:"experienceGroups"}})],1),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.search_full_name.name))]),e._v(" "),e.widgetNames.search_full_name.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.search_full_name.help)+"\n        ")]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],staticClass:"field-input",attrs:{type:"text",placeholder:e.widgetNames.search_full_name.name},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.search_rg_number.name))]),e._v(" "),e.widgetNames.search_rg_number.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.search_rg_number.help)+"\n        ")]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgNumber,expression:"rgNumber"}],staticClass:"field-input",attrs:{type:"text",placeholder:e.widgetNames.search_rg_number.name},domProps:{value:e.rgNumber},on:{input:function(t){t.target.composing||(e.rgNumber=t.target.value)}}})])]):e._e()]),e._v(" "),t("div",{staticClass:"form-section toggle-section"},[t("h2",{staticClass:"section-title"},[e._v("Advanced Options")]),e._v(" "),t("label",{staticClass:"switch-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleAdvanced,expression:"toggleAdvanced"}],staticClass:"switch-input",attrs:{type:"checkbox",title:e.widgetNames.search_button.help},domProps:{checked:Array.isArray(e.toggleAdvanced)?e._i(e.toggleAdvanced,null)>-1:e.toggleAdvanced},on:{change:function(t){var l=e.toggleAdvanced,n=t.target,r=!!n.checked;if(Array.isArray(l)){var o=e._i(l,null);n.checked?o<0&&(e.toggleAdvanced=l.concat([null])):o>-1&&(e.toggleAdvanced=l.slice(0,o).concat(l.slice(o+1)))}else e.toggleAdvanced=r}}}),e._v(" "),t("span",{staticClass:"switch-text"},[e._v("Show Advanced Settings")])]),e._v(" "),e.toggleAdvanced?t("div",{staticClass:"advanced-panel"},[t("div",{staticClass:"field-group"},[t("label",{staticClass:"field-label"},[e._v(e._s(e.widgetNames.number_of_results.name))]),e._v(" "),e.widgetNames.number_of_results.help?t("p",{staticClass:"field-help"},[e._v("\n          "+e._s(e.widgetNames.number_of_results.help)+"\n        ")]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numResults,expression:"numResults",modifiers:{number:!0}}],staticClass:"field-input",attrs:{type:"number",min:1,max:1e3},domProps:{value:e.numResults},on:{input:function(t){t.target.composing||(e.numResults=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]):e._e()]),e._v(" "),t("div",{staticClass:"form-section explanation-section"},[t("label",{staticClass:"switch-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleExplanation,expression:"toggleExplanation"}],staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggleExplanation)?e._i(e.toggleExplanation,null)>-1:e.toggleExplanation},on:{change:function(t){var l=e.toggleExplanation,n=t.target,r=!!n.checked;if(Array.isArray(l)){var o=e._i(l,null);n.checked?o<0&&(e.toggleExplanation=l.concat([null])):o>-1&&(e.toggleExplanation=l.slice(0,o).concat(l.slice(o+1)))}else e.toggleExplanation=r}}}),e._v(" "),t("span",{staticClass:"switch-text"},[e._v(e._s(e.explanation.name))])]),e._v(" "),e.toggleExplanation?t("p",{staticClass:"explanation-text"},[e._v("\n      "+e._s(e.explanation.text)+"\n    ")]):e._e()]),e._v(" "),t("div",{staticClass:"form-section"},[t("button",{staticClass:"search-button",on:{click:e.onSearchClick}},[e._v(e._s(e.widgetNames.search_button.name))])])])}),[],!1,null,"ee608a6e",null);t.default=component.exports}}]);