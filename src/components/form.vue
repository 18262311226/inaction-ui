<template>
  <div class="int-form">
      <slot @ruleresult="ruleresult"></slot>
      <div class="submit-area">
        <slot name="submit">
          <int-button type="primary" v-if="!$slots.default">提交</int-button>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IntForm',
  data () {
    return {
      rulesArr: [],
      result: false
    }
  },
  props: {
    model: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  methods: {
    ruleresult (result) {
      this.rulesArr.push(result)
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
