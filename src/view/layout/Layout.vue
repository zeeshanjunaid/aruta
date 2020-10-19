<template>
  <div class="aruta__dashboard-container">
    <Sidebar />
    <div class="aruta__dashboard-content">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/view/layout/sidebar/Sidebar";
import Topbar from "@/view/layout/topbar/Topbar";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Topbar,
  },
};
</script>
