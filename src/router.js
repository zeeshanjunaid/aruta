import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";
import ForgetPassword from "./views/ForgetPassword.vue";
import ResetPassword from "./views/ResetPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/registration",
      component: Registration,
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
