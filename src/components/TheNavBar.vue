<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-item">
      <a
        @click.prevent="toggleMenu"
        role="button"
        :class="['navbar-burger', { 'is-active': menuShow }]"
        data-target="menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="['navbar-menu', { 'is-active': menuShow }]" id="menu">
      <div class="navbar-end">
        <RouterLink class="navbar-item" :to="{ name: 'register' }"
          >Register</RouterLink
        >
        <RouterLink class="navbar-item" :to="{ name: 'search' }"
          >Search</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar',
  data() {
    return {
      menuShow: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuShow = !this.menuShow;
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  left: 50%;
  right: 0;
  background: transparent;
}
@media screen and (max-width: 768px) {
  .navbar-burger {
    color: white;
    background: #676767;
  }
}
</style>
