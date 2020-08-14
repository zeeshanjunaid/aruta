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
              <router-link to="/registration">Create an account</router-link>
            </p>
            <div class="social-buttons">
              <a class="fb" href="#">Login with Facebook</a>
              <a class="gmail" href="#">
                <img src="@/assets/images/icon-gmail.png" />Login with Gmail
              </a>
            </div>
            <div class="login-form">
              <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input
                    class="mb-2"
                    id="input-1"
                    :class="{'is-invalid':validationStatus($v.email)}"
                    v-model.trim="$v.email.$model"
                    type="email"
                    required
                    placeholder="admin@admin.com"
                  ></b-form-input>
                  <span
                    v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
                    class="text-danger"
                  >Valid Email is required</span>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input
                    class="mb-2"
                    id="input-2"
                    :class="{'is-invalid':validationStatus($v.password)}"
                    type="password"
                    v-model="$v.password.$model"
                    required
                  ></b-form-input>
                  <span
                    v-if="!$v.password.required && $v.password.$dirty"
                    class="text-danger"
                  >Password is required</span>
                  <span
                    v-if="!$v.password.minLength"
                    class="text-danger"
                  >Password should be at least 8 digits long</span>
                </b-form-group>
                <div class="links">
                  <b-form-group id="input-group-3">
                    <b-form-checkbox-group class="rm" v-model="checked" id="checkboxes-3">
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
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  components: {
    Logo,
    ProcedureSection,
  },
  data() {
    return {
      email: "",
      password: "",
      checked: [],
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>