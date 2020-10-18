<template>
  <div class="auth__template">
    <b-container fluid>
      <b-row align-v="center" align-h="center" class="custom-section">
        <b-col
          lg="6"
          md="12"
          class="d-flex justify-content-center align-items-center"
        >
          <div class="column-left">
            <Logo />
            <router-view></router-view>
          </div>
        </b-col>
        <b-col
          lg="6"
          md="12"
          class="d-flex justify-content-center align-items-center"
        >
          <ProcedureSection />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Logo from "@/view/layout/logo/Logo";
import ProcedureSection from "@/view/layout/components/general/ProcedureSection";

export default {
  name: "Auth",
  components: {
    Logo,
    ProcedureSection,
  },
};
</script>