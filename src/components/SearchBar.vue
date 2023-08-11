<template>
  <div class="field is-grouped is-fullwidth">
    <p class="control has-icons-right">
      <input
        class="input"
        type="search"
        placeholder="Search..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <SearchIcon />
    </p>
    <FormButton
      type="submit"
      button-classes="is-dark"
      :disabled="isSearchDisabled"
    >
      Search</FormButton
    >
  </div>
</template>
<script>
import SearchIcon from '@/components/SearchIcon.vue';
import FormButton from '@/components/form/FormButton.vue';

export default {
  props: ['modelValue'],
  name: 'SearchBar',
  components: { FormButton, SearchIcon },
  computed: {
    isSearchDisabled() {
      return this.$store.state.searchText.length === 0;
    }
  }
};
</script>

<style scoped lang="scss"></style>
