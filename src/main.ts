import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import Polygon from "./pages/polygon.vue";
import Laboratories from "./pages/laboratories/Laboratories.vue";
import Laboratory1 from "./pages/laboratories/laboratory1/Laboratory1.vue";
import Laboratory2 from "./pages/laboratories/laboratory2/Laboratory2.vue";
import Laboratory3 from "./pages/laboratories/laboratory3/Laboratory3.vue";
import Laboratory4 from "./pages/laboratories/laboratory4/Laboratory4.vue";
import Laboratory5 from "./pages/laboratories/laboratory5/Laboratory5.vue";

import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/polygon", component: Polygon },
    { path: "/laboratories", component: Laboratories },
    { path: "/laboratory1", component: Laboratory1 },
    { path: "/laboratory2", component: Laboratory2 },
    { path: "/laboratory3", component: Laboratory3 },
    { path: "/laboratory4", component: Laboratory4 },
    { path: "/laboratory5", component: Laboratory5 },

  ],
});

createApp(RouterView).use(router).mount("body");
