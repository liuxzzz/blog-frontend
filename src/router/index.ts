import { createRouter, createWebHistory } from "vue-router";

const Blog = () => import("../views/blog/index.vue");

const About = () => import("../views/about/index.vue");

const routes = [
  { path: "/", component: Blog },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
