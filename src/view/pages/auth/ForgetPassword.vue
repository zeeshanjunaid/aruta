<template>
  <div class="forget-password">
    <h4 class="heading">Forgot Password</h4>
    <p class="sub">Enter your emailaddress associated with your account.</p>
    <div class="fp-form">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Enter Email address:"
          label-for="input-1"
        >
          <b-form-input
            class="mb-2"
            :class="{ 'is-invalid': validationStatus($v.email) }"
            id="input-1"
            v-model.trim="$v.email.$model"
            type="email"
            required
            placeholder="admin@admin.com"
          ></b-form-input>
          <span
            v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
            class="text-danger"
            >Valid Email is required</span
          >
        </b-form-group>

        <b-button class="gradient-btn" block>Reset Password</b-button>
      </b-form>
    </div>
    <div class="back-link">
      <router-link to="/login">Back To Login</router-link>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "ForgetPassword",
  validations: {
    email: {
      required,
      email,
    },
  },
  data() {
    return {
      email: "",
    };
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