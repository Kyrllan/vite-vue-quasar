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

let number = 12

/* let popupTemplate = new PopupTemplate({
  title: "Lista",
  content: (() => {
    return "<ul><li>Feature Attribute 1: " + graphic.attributes.name + "</li>" +
      "<li>Feature Attribute 2: " + graphic.attributes.num + "</li></ul>";
  })
}) */

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
  sketchLayer.popupTemplate = popupTemplate
  map.add(sketchLayer);
  sketchWidget = new Sketch({
    view: view,
    layer: sketchLayer,
    creationMode: "update"
  })
  view.ui.add(sketchWidget, "top-right");


  sketchWidget.on("create", sketchCreate)
  view.on("click", onClickView)
  view.on("pointer-move", onMouseMoveView)
}


function sketchCreate(event) {
  if (event.state === "complete") {
    event.graphic.attributes = {
      name: 'TESTE 1',
      num: number,
      isSketched: true
    }
    //event.graphic.popupTemplate = popupTemplate
    number++
  }
}

function onClickView(event) {
  console.log(event)
}

function onMouseMoveView(event) {
  view.hitTest(event).then(function (response) {
    if (response.results.length > 0) {
      let graphic = response.results[0].graphic;
      if (graphic.attributes.isSketched) {
        view.openPopup({
          location: graphic.geometry.centroid,
          //features: [graphic],
          content: `<h1>TESTE</h1>`
        });
      } else {
        view.closePopup();
      }
    } else {
      view.closePopup();
    }



    /*     if (response.results.length > 0) {
          var graphic = response.results[0].graphic;
          if (geometryEngine.contains(graphic.geometry, event.mapPoint)) {
            // Show the popup for the hovered polygon
            view.popup.open({
              features: [graphic],
              location: event.mapPoint
            });
          } else {
            // Close the popup if the mouse is not over a polygon
            view.popup.close();
          }
        } else {
          // Close the popup if the mouse is not over a polygon
          view.popup.close();
        } */



  });
}

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
@import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');

#esriMap {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>