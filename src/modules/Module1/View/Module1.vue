<script setup>
import { loadModules } from 'esri-loader';

loadModules(['esri/views/MapView', 'esri/WebMap'])
  .then(([MapView, Map]) => {
    //esriConfig.apiKey = process.env.ESRI_API_KEY;
    const webmap = new Map({
      basemap: 'dark-gray',
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