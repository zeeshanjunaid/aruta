<template>
  <div class="reset-password">
    <h4 class="heading">Reset Password</h4>
    <div class="rp-form">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="New Password"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            class="mb-2"
            v-model.trim="$v.password.$model"
            :class="{ 'is-invalid': validationStatus($v.password) }"
            type="password"
            required
          ></b-form-input>
          <span
            v-if="!$v.password.required && $v.password.$dirty"
            class="text-danger"
            >Password is required</span
          >
          <span v-if="!$v.password.minLength" class="text-danger"
            >Password should be at least 8 digits long</span
          >
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Confirm Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            class="mb-2"
            v-model.trim="$v.repeatPassword.$model"
            type="password"
            required
          ></b-form-input>
          <span class="text-danger" v-if="!$v.repeatPassword.sameAsPassword"
            >Passwords must be identical.</span
          >
        </b-form-group>
        <b-button class="gradient-btn" block>Update Password</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
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