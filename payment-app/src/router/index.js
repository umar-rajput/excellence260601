import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ProfileView from "../views/ProfileView.vue";
// import PaymentView from "../views/PaymentView.vue";
import StripeConView from "../views/StripeConView.vue";
import SuccessView from "../views/SuccessView.vue";
import ErrorView from "../views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProfileView,
  },
  {
    path: "/payment",
    name: "payment",
    // component: PaymentView,
    component: StripeConView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
