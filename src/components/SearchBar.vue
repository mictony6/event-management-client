<template>
  <div class="field">
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
  </div>
</template>
<script>
import SearchIcon from '@/components/SearchIcon.vue';

export default {
  props: ['modelValue'],
  name: 'SearchBar',
  components: { SearchIcon }
};
</script>

<style scoped lang="scss"></style>
