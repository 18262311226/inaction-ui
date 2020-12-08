<template>
  <div class="int-form-item">
    <div class="labeltext" :style="{width:Form.labelWidth}">{{label}}</div>
    <div class="int-form-item__content">
      <slot :inputArr="inputArr"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    inputArr: {
      type: Array
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.int-form-item {
  margin-bottom: 25px;
  display:flex;
  align-items: center;
  .labeltext{
    width:60px;
  }
  .int-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
}
</style>
