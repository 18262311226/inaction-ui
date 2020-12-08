<template>
  <div class="int-checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IntCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      checkgroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
