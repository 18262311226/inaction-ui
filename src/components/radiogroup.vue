<template>
  <div class="int-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IntRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang="scss" scoped>

</style>
