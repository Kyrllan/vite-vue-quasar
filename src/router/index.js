import Module1 from "../modules/Module1/View/Module1.vue";
import Module2 from "../modules/Module2/View/Module2.vue";
import Module3 from "../modules/Module3/View/Module3.vue";

const routes = [
  { path: "/", component: Module1 },
  { path: "/module2", component: Module2 },
  { path: "/module3", component: Module3 },
];

export { routes };
