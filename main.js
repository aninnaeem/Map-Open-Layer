import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import Stamen from "ol/source/Stamen.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
      source: new Stamen({
        layer: "terrain-labels",
      }),
    }),
  ],
  target: "map",
  view: new View({
    center: [10061101.954500303, 2727907.8072309415],
    zoom: 7,
    maxZoom: 10,
    minZoom: 4,
  }),
});

document.getElementById("zoom-out").onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById("zoom-in").onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

map.on("click", function (e) {
  console.log(e.coordinate);
});

// const openStreetMapStandard = new ol.layer.Tile({
//   source: new ol.source.OSM(),
//   visible: false,
//   title: "OSMstandard",
// });

// const openStreetMap = new ol.layer.Tile({
//   source: new ol.source.OSM({
//     url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
//   }),
//   visible: false,
//   title: "OSM",
// });

// const stamenTerrain = new ol.layer.Tile({
//   source: new ol.source.XYZ({
//     url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
//     attributions:
//       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',
//   }),
//   visible: true,
//   title: "StamenTerrain",
// });

// const baseLayer = new ol.layer.Group({
//   layers: [openStreetMapStandard, openStreetMap, stamenTerrain],
// });
// map.addLayer(baseLayer);
