import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import Polygon from "./pages/Polygon.vue";

import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/polygon", component: Polygon}
  ],
});

createApp(RouterView).use(router).mount("body");
