<template>
  <div class="columns is-desktop is-flex-tablet is-gapless vh-100">
    <EventBackgroundImage
      :event-desktop-image="this.$store.state.imageUrlDesktop"
    />
    <div class="column secondColumn is-flex is-align-items-center">
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue';
import EventBackgroundImage from '@/components/EventBackgroundImage.vue';

export default {
  name: 'RegistrationView',
  components: { EventBackgroundImage, RegistrationForm }
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

  .secondColumn {
    background: rgba(0, 0, 0, 0.5);
    min-width: 90%;
  }
}
</style>
