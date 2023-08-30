import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router/index";
import { Quasar } from "quasar";
import "./style.css";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const router = createRouter({ history: createWebHistory(), routes: routes });

createApp(App)
  .use(Quasar, { plugins: {}, config: { dark: true } })
  .use(router)
  .mount("#app");
