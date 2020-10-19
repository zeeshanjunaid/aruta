<template>
  <div class="aruta__content">
    <RecentOrders />
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

