import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          name: "Dashboard",
          path: "/dashboard",
          component: () => import("@/view/pages/dashboard/Dashboard"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/Auth"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login"),
        },
        {
          name: "registration",
          path: "/registration",
          component: () => import("@/view/pages/auth/Registration"),
        },
        {
          name: "ForgetPassword",
          path: "/forget-password",
          component: () => import("@/view/pages/auth/ForgetPassword"),
        },
        {
          name: "ResetPassword",
          path: "/reset-password",
          component: () => import("@/view/pages/auth/ResetPassword"),
        },
      ],
    },
  ],
});
