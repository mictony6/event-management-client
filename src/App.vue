<template>
  <TheNavBar />

  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import TheNavBar from '@/components/TheNavBar.vue';
import axios from 'axios';
export default {
  components: {
    TheNavBar,
    RouterView
  },
  async mounted() {
    let url = new URL('http://eventsapi.ihdevs.com/api/event/search');
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

<style lang="scss">
@import 'assets/mystyles';
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
</style>
