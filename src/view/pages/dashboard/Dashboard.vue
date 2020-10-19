<template>
  <div class="aruta__content">
    <div class="widget widget1"></div>
    <div class="widget widget2"></div>
    <div class="widget widget3"></div>
    <div class="widget widget4"></div>
    <RecentOrders />
    <div class="widget widget5"></div>
    <div class="widget widget6"></div>
  </div>
</template>

<script>
import RecentOrders from "@/view/components/orders/RecentOrders";
export default {
  name: "Dashboard",
  components: {
    RecentOrders,
  },
};
</script>

