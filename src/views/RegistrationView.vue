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
import axios from 'axios';

export default {
  name: 'RegistrationView',
  components: { EventBackgroundImage, RegistrationForm },
  setup() {
    return {
      eventDesktopImage,
      eventMobileImage
    };
  },
  async mounted() {
    let url = new URL('http://localhost:5000/api/event/search');
    url.search = new URLSearchParams({
      event_name: 'testEvent'
    });

    let data = await axios
      .get(url.toString())
      .then(res => {
        return res.data.data;
      })
      .catch(e => console.error(e));

    this.$store.commit({
      type: 'setEventDetails',
      eventName: data.name,
      eventId: data._id,
      imageUrlMobile: data.mobile_url,
      imageUrlDesktop: data.desktop_url
    });
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

  .secondColumn {
    background: rgba(0, 0, 0, 0.5);
    min-width: 90%;
  }
}
</style>
