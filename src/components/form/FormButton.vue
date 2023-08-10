<template>
  <div class="control is-fullwidth">
    <button
      :type="type"
      :disabled="disabled"
      class="button is-fullwidth"
      :class="buttonClasses"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['type', 'buttonClasses', 'disabled']
};
</script>

<style scoped lang="scss"></style>
