<template>
  <div class="column is-two-fifths firstColumn" id="background-image ">
    <figure class="image">
      <img :src="eventDesktopImage" alt="event image" id="eventImage" />
    </figure>
  </div>
</template>
<script>
export default {
  name: 'EventBackgroundImage',
  props: {
    eventDesktopImage: {},
    eventMobileImage: {}
  }
};
</script>
<style lang="scss" scoped>
#eventImage {
  height: 100vh;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .firstColumn {
    position: absolute;
    z-index: -1;
    width: 100vw;
  }

  #eventImage {
    padding: 0 !important;
  }
}
</style>
