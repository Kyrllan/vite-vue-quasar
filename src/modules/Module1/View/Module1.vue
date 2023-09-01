<script setup>
import { loadModules } from 'esri-loader';

loadModules(['esri/views/MapView', 'esri/WebMap'])
  .then(([MapView, WebMap]) => {
    //esriConfig.apiKey = process.env.ESRI_API_KEY;
    const webmap = new WebMap({
      portalItem: { // autocasts as new PortalItem()
        id: 'bc19c34549de4000bcd91cef929420dc'
      }
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
    <h1>Módulo 1</h1>
    <div id="esriMap"></div>
  </q-page>
</template>


<style scoped>
@import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');

#esriMap {
  width: 800px;
  height: 500px;
}
</style>