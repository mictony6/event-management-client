<template>
  <TheNavBar style="position: absolute" />

  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import TheNavBar from '@/components/TheNavBar.vue';
export default {
  components: {
    TheNavBar,
    RouterView
  }
};
</script>

<style lang="scss">
@import 'assets/mystyles';
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
</style>
