<script setup>
//import { loadModules } from 'esri-loader';

/* loadModules(['esri/views/MapView', 'esri/WebMap'])
  .then(([MapView, Map]) => {
    //esriConfig.apiKey = process.env.ESRI_API_KEY;
    const webmap = new Map({
      basemap: 'dark-gray', //dark-gray
    });
    const view = new MapView({
      map: webmap,
      container: 'esriMap',
      zoom: 5,
      center: [-51.531047, -24.695827],
    });
  })
  .catch(err => {
    console.error(err);
  }); */

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel.js";
import Sketch from "@arcgis/core/widgets/Sketch.js";
//import PopupTemplate from "@arcgis/core/PopupTemplate.js";
//import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import { onMounted, onUnmounted } from "vue";

let map = null;
let view = null;
let sketchViewModel = null;
let sketchLayer = null;
let sketchWidget = null;
let graphicsLayer = null;

/* let popupTemplate = new PopupTemplate({
  title: "Atributos",
  content: setGraphicAttributes
});

function setGraphicAttributes(feauture) {
  return `
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${feauture.attributes.attr1}" disabled>

            <label for="population">Population:</label>
            <input type="number" id="population" name="population" value="${feauture.attributes.attr2}">

            <label for="area">Area (sq. miles):</label>
            <input type="number" id="area" name="area" value="${feauture.attributes.attr3}">

            <button type="submit">Save</button>
        </form>
    `;
} */

function createMap() {
  map = new Map({
    basemap: 'streets-navigation-vector', //with api key arcgis-navigation
  })
  view = new MapView({
    map: map,
    container: "esriMap",
    zoom: 5,
    center: [-51.531047, -24.695827],
    constraints: {
      snapToZoom: false
    }
  })
  sketchViewModel = new SketchViewModel({
    view: view,
    layer: sketchLayer
  })
  sketchLayer = new GraphicsLayer();
  graphicsLayer = new GraphicsLayer();
  map.add(sketchLayer);
  map.add(graphicsLayer);
  sketchWidget = new Sketch({
    view: view,
    layer: sketchLayer,
    creationMode: "update"
  })
  view.ui.add(sketchWidget, "top-right");
  sketchWidget.on("create", sketchCreate)
  //view.on("click", onClickView)
  //view.on("pointer-move", onMouseMoveView)
}


function sketchCreate(event) {
  if (event.state === "complete") {
    sendGraphicToLayer(event.graphic)
  }
}

function sendGraphicToLayer(graphic) {
  graphic.attributes = {
    attr1: "ATRIBUTO 1",
    attr2: "ATRIBUTO 2",
    attr3: "ATRIBUTO 3",
  }
  console.log('GRAPHIC', graphic)
  //graphic.popupTemplate = popupTemplate
  //graphicsLayer.add(newGraphic);
}

/* function onClickView(event) {
  console.log(event)
}*/

/* function onMouseMoveView(event) {
  view.hitTest(event).then(function (response) {
    if (response.results.length > 0) {
      let graphic = response.results[0].graphic;
      if (graphic.attributes.isSketched) {
        console.log('GRA', graphic)
        view.openPopup({
          location: graphic.geometry.centroid,
          content: `<div>${graphic.attributes.name}</div>`
        })
      } else {
        view.closePopup();
      }
    } else {
      view.closePopup();
    }
  });
}  */

onMounted(async () => {
  await createMap()
});

onUnmounted(() => {
  map?.destroy();
})

</script>

<template>
  <q-page>
    <div id="esriMap"></div>
  </q-page>
</template>


<style scoped>
#esriMap {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>