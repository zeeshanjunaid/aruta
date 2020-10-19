<template>
  <div class="recentOrders">
    <b-table class="recentOrders__table" hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "RecentOrders",
  fields: ["Customer", "Invoice", "Date/Time", "Sign", "Amount", ""],
  data() {
    return {
      items: [
        {
          Customer: "Andy King",
          Invoice: "#76948",
          "Date/Time": "10/08/2020  |  8:50 am",
          Sign: "lorum isp",
          Amount: "$5000",
          Action: "completed",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.recentOrders {
  box-shadow: 0 2px 10px 0 hsla(0, 0%, 65.5%, 0.16);
  background-color: #fff;
  border-radius: 1rem;
  &__table {
    thead {
      background-color: #e5f2ff;
      color: #0084ff;
    }
  }
}
</style>
