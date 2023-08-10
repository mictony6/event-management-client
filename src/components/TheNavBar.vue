<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
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
  name: 'TheNavBar'
};
</script>

<style scoped lang="scss"></style>
