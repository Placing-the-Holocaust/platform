(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(e,t,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(48).default)("706962fe",content,!0,{sourceMap:!1})},285:function(e,t,o){"use strict";o(283)},286:function(e,t,o){var n=o(47)((function(i){return i[1]}));n.push([e.i,".map-container[data-v-5fecc5b4]{height:100%;width:100%}",""]),n.locals={},e.exports=n},289:function(e,t,o){"use strict";o.r(t);o(37),o(66),o(111),o(49),o(65),o(33),o(200);var n=o(294),r=o.n(n),l=o(301),c={name:"Map",props:{mapStyle:{type:String,default:"https://demotiles.maplibre.org/style.json"},center:{type:Array,default:function(){return[15.2551,52.52]}},zoom:{type:Number,default:4},dataUrl:{type:String,default:"/data/sample-points.geojson"}},mounted:function(){var e=this,t=new l.a;r.a.addProtocol("pmtiles",t.tile),this.map=new r.a.Map({container:this.$refs.mapContainer,style:this.mapStyle,center:this.center,zoom:this.zoom}),this.map.addControl(new r.a.NavigationControl),this.map.on("load",(function(){console.log("Map loaded successfully!"),e.map.addSource("sample-points",{type:"geojson",data:e.dataUrl}),e.map.addLayer({id:"sample-points-layer",type:"circle",source:"sample-points",paint:{"circle-radius":6,"circle-color":"#FF0000","circle-stroke-color":"#FFFFFF","circle-stroke-width":2}}),e.map.on("click","sample-points-layer",(function(t){for(var o=t.features[0].geometry.coordinates.slice(),n=t.features[0].properties,l=n.name,c=n.description;Math.abs(t.lngLat.lng-o[0])>180;)o[0]+=t.lngLat.lng>o[0]?360:-360;(new r.a.Popup).setLngLat(o).setHTML("<h3>".concat(l,"</h3><p>").concat(c,"</p>")).addTo(e.map)})),e.map.on("mouseenter","sample-points-layer",(function(){e.map.getCanvas().style.cursor="pointer"})),e.map.on("mouseleave","sample-points-layer",(function(){e.map.getCanvas().style.cursor=""}))}))},beforeDestroy:function(){this.map&&this.map.remove()}},m=(o(285),o(32)),component=Object(m.a)(c,(function(){return(0,this._self._c)("div",{ref:"mapContainer",staticClass:"map-container"})}),[],!1,null,"5fecc5b4",null);t.default=component.exports}}]);