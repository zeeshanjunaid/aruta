<template>
  <b-container fluid>
    <b-row align-v="center" align-h="center" class="custom-section">
      <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
        <div class="column-left">
          <Logo />
          <div class="forget-password">
            <h4 class="heading">Forgot Password</h4>
            <p class="sub">
              Enter your emailaddress associated with your
              account.
            </p>
            <div class="fp-form">
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label="Enter Email address:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="admin@admin.com"
                  ></b-form-input>
                </b-form-group>

                <b-button class="gradient-btn" block>Reset Password</b-button>
              </b-form>
            </div>
            <div class="back-link">
              <router-link to="/login">Back To Login</router-link>
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
  name: "ForgetPassword",
  components: {
    Logo,
    ProcedureSection,
  },
  data() {
    return {
      form: {
        email: "",
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