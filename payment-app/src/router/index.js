import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ProfileView from "../views/ProfileView.vue";
import PaymentView from "../views/PaymentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProfileView,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
