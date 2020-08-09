<template>
  <div id="app">
    <b-container fluid>
      <b-row align-v="center" align-h="center" class="custom-section">
        <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
          <Login />
        </b-col>
        <b-col lg="6" md="12" class="d-flex justify-content-center align-items-center">
          <ProcedureSection />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Login from "./components/Login";
import ProcedureSection from "./components/ProcedureSection";
export default {
  name: "App",
  components: {
    ProcedureSection,
    Login,
  },
};
</script>


