import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/HomePageView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePageView,
  },
  // {
  //   path: "/okids/",
  //   name: "home",
  //   component: HomePageView,
  // },
  // {
  //   path: "/okids/anniversaire",
  //   name: "anniversaire",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/FormuleBirthdayView.vue"
  //     ),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
