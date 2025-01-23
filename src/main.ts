import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import Polygon from "./pages/polygon.vue";

import "./main.css";
import Laboratories from "./pages/laboratories/laboratories.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/polygon", component: Polygon},
    { path: "/laboratories", component: Laboratories}
  ],
});

createApp(RouterView).use(router).mount("body");
