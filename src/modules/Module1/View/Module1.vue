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

import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map.js";
import { onMounted } from "vue";

let map = null;
let view = null;

function createMap() {
  map = new Map({
    basemap: 'streets-navigation-vector', //with api key arcgis-navigation
  })
  view = new MapView({
    map: map,
    container: "esriMap",
    zoom: 5,
    center: [-51.531047, -24.695827],
  })
}

onMounted(async () => {
  await createMap()
});

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