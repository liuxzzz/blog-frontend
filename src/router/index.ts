import { createRouter, createWebHashHistory } from "vue-router";

const Blog = () => import("../views/blog/index.vue");

const routes = [{ path: "/", component: Blog }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
