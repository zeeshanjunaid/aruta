<template>
  <div class="recentOrders">
    <b-container>
      <b-row class="recentOrders__header">
        <h2>Recent Orders</h2>
        <div class="recentOrders__btn-group">
          <a href="/" class="btn btn-large gradient-btn">Assign Orders</a>
          <a class="btn btn-large gradient-btn" href="/">Complete Orders</a>
        </div>
      </b-row>
      <b-row>
        <table class="recentOrders__table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Invoice</th>
              <th>Date/Time</th>
              <th>Sign</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-success">complete</b-btn>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-success">complete</b-btn>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-warning">pending</b-btn>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-primary">in progress</b-btn>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-success">complete</b-btn>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-container">
                  <img src="@/assets/images/profile-img.png" />
                  <h2>King Arthur</h2>
                </div>
              </td>
              <td>
                <p class="invoice-text">#85794</p>
              </td>
              <td>
                <p class="date-text">10/08/2020 | 8:50 am</p>
              </td>
              <td>
                <p class="sign-text">lorum isp</p>
              </td>
              <td>
                <p class="amount-text">$ 50:00</p>
              </td>
              <td>
                <b-btn variant="outline-success">complete</b-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "RecentOrders",
};
</script>
<style scoped lang="scss">
.recentOrders {
  overflow: hidden;
  box-shadow: 0 2px 10px 0 hsla(0, 0%, 65.5%, 0.16);
  background-color: #fff;
  border-radius: 1rem;
  padding: 4rem;
  &__header {
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
  &__table {
    width: 100%;
    margin: 2rem 0;

    thead {
      background-color: #e5f2ff;

      color: #0084ff;
      tr {
        border-radius: 1rem;
      }
      th {
        padding: 3rem 1rem;
        &:first-child {
          padding: 3rem 2rem;
        }
      }
    }
    tbody {
      tr {
        &:hover {
          background-color: #f7f7f8;
          cursor: pointer;
        }
      }
      td {
        padding: 2rem 1rem;
        font-size: 1.6rem;
      }
      .user-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          max-width: 4.4rem;
          margin-right: 1rem;
        }
        h2 {
          font-size: 1.6rem;
          line-height: 1.6;
        }
      }
      button {
        text-transform: capitalize;
        font-size: 1rem;
      }
    }
  }
  &__btn-group {
    .btn {
      border-radius: 1.5rem;
      font-size: 1.4rem;
      padding: 1.2rem 3rem;
      &:first-child {
        background: #fff !important;
        color: #828282;
        border: 0.1rem solid #828282;
        margin-right: 1rem;
      }
    }
  }
}
</style>
