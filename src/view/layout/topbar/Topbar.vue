<template>
  <div class="aruta__topbar">
    <div class="topbar__search">
      <b-form-input placeholder="Find"></b-form-input>
    </div>
    <div class="topbar__side">
      <div class="topbar__side-user">
        <img src="@/assets/images/profile-img.png" />
        <span>Rafael Romis</span>
        <div>
          <b-dropdown id="dropdown-1" class="m-md-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="topbar__side-notification">
        <img src="@/assets/images/icon-notification.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
};
</script>
