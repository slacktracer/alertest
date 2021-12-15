import { createWebHistory, createRouter } from "vue-router";

import home from "../home/home.vue";

const routes = [
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
