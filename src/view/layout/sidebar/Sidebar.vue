<template>
  <div class="aruta__sidebar">
    <Logo />
    <div class="aruta__sidebar-menu--contianer">
      <ul class="aruta__sidebar-menu">
        <li class="aruta__sidebar-menu--item">
          <router-link to="/">
            <span class="nav__icon">
              <img src="@/assets/images/icon-dashboard.svg" />
            </span>
            My Account
          </router-link>
        </li>
        <li class="aruta__sidebar-menu--item">
          <router-link to="/">
            <span class="nav__icon">
              <img src="@/assets/images/icon-orders.svg" />
            </span>
            Manage Orders
          </router-link>
        </li>
        <li class="aruta__sidebar-menu--item">
          <router-link to="/">
            <span class="nav__icon">
              <img src="@/assets/images/icon-payments.svg" />
            </span>
            Payments
          </router-link>
        </li>
        <li class="aruta__sidebar-menu--item">
          <router-link to="/">
            <span class="nav__icon">
              <img src="@/assets/images/icon-notification.svg" />
            </span>
            Profile
          </router-link>
        </li>
        <li class="aruta__sidebar-menu--item">
          <router-link to="/">
            <span class="nav__icon">
              <img src="@/assets/images/icon-setting.svg" />
            </span>
            Settings
          </router-link>
        </li>
      </ul>
      <div class="aruta__sidebar-footer">
        <router-link class="btn btn-block gradient-btn" to="/dashboard">
          Go back home
        </router-link>
        <div class="aruta__sidebar-footer--copyright">
          <p>&copy; 2019 ARUTA. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../logo/Logo";
export default {
  name: "Sidebar",
  components: {
    Logo,
  },
};
</script>

<style>
</style>