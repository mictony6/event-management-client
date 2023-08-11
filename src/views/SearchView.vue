<template>
  <div class="columns is-desktop is-flex-tablet is-gapless vh-100">
    <div class="column is-two-fifths firstColumn" id="background-image ">
      <figure class="image">
        <img :src="eventDesktopImage" alt="event image" id="eventImage" />
      </figure>
    </div>
    <div
      class="column secondColumn is-flex is-flex-direction-column is-justify-content-flex-start is-flex-wrap"
    >
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Search Guests</p>
          <p class="subtitle">Enter guest name</p>
          <form @submit.prevent="e => console.log(searchText)" class="form p-4">
            <SearchBar v-model="searchText" />
          </form>
        </div>
      </section>

      <section>
        <div class="content">
          <p>Output will be shown ghere</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import eventDesktopImage from '@/assets/images/event-desktop-image.jpg';

export default {
  name: 'SearchView',
  components: { SearchBar },
  setup() {
    return {
      eventDesktopImage
    };
  },
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(value) {
        this.$store.commit({ type: 'setSearchText', value });
      }
    }
  }
};
</script>

<style scoped lang="scss">
#eventImage {
  height: 100vh;
  object-fit: cover;
}

.vh-100 {
  height: 100vh;
}
</style>
