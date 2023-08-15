<template>
  <div class="columns is-desktop is-flex-tablet is-gapless vh-100">
    <EventBackgroundImage
      :event-desktop-image="this.$store.state.imageUrlDesktop"
    />
    <div
      class="column secondColumn is-flex is-flex-direction-column is-justify-content-flex-start is-flex-wrap"
    >
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Search Guests</p>
          <p class="subtitle">Enter guest name</p>
          <form @submit.prevent="handleSearch" class="form p-4">
            <SearchBar v-model="searchText" />
          </form>
        </div>
      </section>

      <section class="list-group py-2 px-4 m-1 scroll-y">
        <SearchResultItem
          v-for="item in searchResults"
          :key="item._id"
          :name="item.name"
          :email="item.email"
          :mobile-number="item.mobile_number"
          :affiliation="item.affiliation"
          :is-registered="item.is_registered"
          :id="item._id"
          :selected="!(this.searchResults.length > 1)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import SearchResultItem from '@/components/SearchResultItem.vue';
import axios from 'axios';
import EventBackgroundImage from '@/components/EventBackgroundImage.vue';

export default {
  name: 'SearchView',
  components: { EventBackgroundImage, SearchResultItem, SearchBar },

  data() {
    return {
      searchResults: []
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
  },
  methods: {
    handleSearch() {
      let searchUrl = new URL('http://eventsapi.ihdevs.com/api/guest/search');
      searchUrl.search = new URLSearchParams({
        searchtext: this.searchText,
        event_id: this.$store.state.eventId
      });
      axios
        .get(searchUrl.toString())
        .then(res => {
          this.searchResults = res.data.data;
        })
        .catch(e => console.error(e));
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

.scroll-y {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
