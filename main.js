
var myview = new ol.View({
  center: [10061101.954500303, 2727907.8072309415],
  zoom:4
})

var myLayer= new ol.layer.Tile({
 source:new ol.source.OSM()
})

var layer = [myLayer]

var map = new ol.Map({
   target: 'map',
   layers: layer,
   view: myview
 });

 var mygeojson = new ol.layer.Vector({
   source:new ol.source.Vector({
     format:new ol.format.GeoJSON(),
     url:'bangladesh.json'
   })
 })
 map.addLayer(mygeojson)