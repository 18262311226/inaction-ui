<template>
  <div class="int-carousel">
      <div class="inner">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IntCarousel',
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.int-carousel{
    width:100%;
    height:100%;
    .inner{
        position:relative;
        width:100%;
        height:100%;
    }
}
</style>
