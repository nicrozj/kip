import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import Laboratory1 from "./pages/laboratory_work/Laboratory1.vue";

import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/laboratory_work/1", component: Laboratory1}
  ],
});

createApp(RouterView).use(router).mount("body");
