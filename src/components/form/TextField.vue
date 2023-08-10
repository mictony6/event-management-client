<template>
  <div class="field">
    <label :for="inputId" class="label">{{ label }}</label>
    <div class="control">
      <input
        :id="inputId"
        type="text"
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextField',
  props: ['label', 'inputId', 'modelValue']
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  * {
    color: #a2b5da;
  }
}
</style>
