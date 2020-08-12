<template>
  <b-container fluid>
    <b-row align-v="center" align-h="center" class="custom-section">
      <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
        <div class="column-left">
          <Logo />
          <div class="login">
            <h4 class="heading">Log In</h4>
            <p class="sub">
              Don’t have an account yet?
              <a href="#">Create an account</a>
            </p>
            <div class="social-buttons">
              <a class="fb" href="#">Login with Facebook</a>
              <a class="gmail" href="#">
                <img src="@/assets/images/icon-gmail.png" />Login with Gmail
              </a>
            </div>
            <div class="login-form">
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="admin@admin.com"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input id="input-2" type="password" v-model="form.password" required></b-form-input>
                </b-form-group>
                <div class="links">
                  <b-form-group id="input-group-3">
                    <b-form-checkbox-group class="rm" v-model="form.checked" id="checkboxes-3">
                      <b-form-checkbox value="remember-me">Remember me</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                  <router-link class="fp" to="forget-password">Forgot Password?</router-link>
                </div>

                <b-button class="gradient-btn" block>Login</b-button>
              </b-form>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
        <ProcedureSection />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Logo from "@/components/Logo";
import ProcedureSection from "@/components/ProcedureSection";
export default {
  name: "Login",
  components: {
    Logo,
    ProcedureSection,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>