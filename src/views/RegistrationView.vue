<template>
  <div class="columns is-desktop is-flex-tablet is-gapless vh-100">
    <EventBackgroundImage :event-desktop-image="eventDesktopImage" />
    <div class="column secondColumn is-flex is-align-items-center">
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
import eventDesktopImage from '@/assets/images/event-desktop-image.jpg';
import eventMobileImage from '@/assets/images/event-mobile-image.jpg';
import RegistrationForm from '@/components/RegistrationForm.vue';
import EventBackgroundImage from '@/components/EventBackgroundImage.vue';

export default {
  name: 'RegistrationView',
  components: { EventBackgroundImage, RegistrationForm },
  setup() {
    return {
      eventDesktopImage,
      eventMobileImage
    };
  }
};
</script>

<style lang="scss" scoped>
#eventImage {
  height: 100vh;
  object-fit: cover;
}

.vh-100 {
  height: 100vh;
}
@media screen and (max-width: 768px) {
  .columns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .firstColumn {
    position: absolute;
    z-index: -1;
    width: 100vw;
  }
  .secondColumn {
    background: rgba(0, 0, 0, 0.5);
    min-width: 90%;
  }

  #eventImage {
    padding: 0 !important;
  }
}
</style>
