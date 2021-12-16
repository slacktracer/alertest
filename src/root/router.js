import { createWebHistory, createRouter } from "vue-router";

import alert from "../alert/alert.vue";
import main from "../main/main.vue";

// TODO
// Make routes async the lighten as much as possible the initial load for alerts!
const routes = [
  {
    path: "/alert",
    name: "alert",
    component: alert,
  },
  {
    path: "/",
    name: "main",
    component: main,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
