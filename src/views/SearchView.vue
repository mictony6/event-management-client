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
          <form @submit.prevent="handleSearch" class="form p-4">
            <SearchBar v-model="searchText" />
          </form>
        </div>
      </section>

      <section class="list-group p-1 m-1">
        <SearchResultItem
          v-for="(item, index) in searchResults"
          :key="index"
          :name="item.name"
          :email="item.email"
          :mobile-number="item.mobile_number"
          :affiliation="item.affiliation"
          :is-registered="item.is_registered"
          :id="item._id"
          :selected="false"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import eventDesktopImage from '@/assets/images/event-desktop-image.jpg';
import SearchResultItem from '@/components/SearchResultItem.vue';
import axios from 'axios';

export default {
  name: 'SearchView',
  components: { SearchResultItem, SearchBar },
  setup() {
    return {
      eventDesktopImage
    };
  },
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
      let searchUrl = new URL('http://127.0.0.1:5000/api/guest/search');
      searchUrl.search = new URLSearchParams({
        searchtext: this.searchText
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
</style>
