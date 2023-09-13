import { createRouter, createWebHistory } from "vue-router";

const Blog = () => import("../views/blog/index.vue");

const routes = [{ path: "/", component: Blog }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
