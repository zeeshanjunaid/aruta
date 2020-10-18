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
      children: [],
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
      ],
    },
  ],
});
