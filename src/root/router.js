import { createWebHistory, createRouter } from "vue-router";

import alert from "../alert/alert.vue";
import home from "../home/home.vue";

const routes = [
  {
    path: "/alert",
    name: "alert",
    component: alert,
  },
  {
    path: "/",
    name: "home",
    component: home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
