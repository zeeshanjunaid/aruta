<template>
  <b-container fluid>
    <b-row align-v="center" align-h="center" class="custom-section">
      <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
        <div class="column-left">
          <Logo />
          <div class="reset-password">
            <h4 class="heading">Reset Password</h4>
            <div class="rp-form">
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label="New Password" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.password" type="password" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Confirm Password" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.confirmPassword"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button class="gradient-btn" block>Update Password</b-button>
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
  name: "ResetPassword",
  components: {
    Logo,
    ProcedureSection,
  },
  data() {
    return {
      form: {
        password: "",
        confirmPassword: "",
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