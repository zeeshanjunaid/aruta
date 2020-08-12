import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import ForgetPassword from "./views/ForgetPassword.vue";
import ResetPassword from "./views/ResetPassword.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/forget-password",
      component: ForgetPassword,
    },
    {
      path: "/reset-password",
      component: ResetPassword,
    },
  ],
});
