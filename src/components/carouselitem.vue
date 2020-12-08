<template>
  <div class="int-carousel-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IntCarouselItem',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.int-carousel-item{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    img{
    width:100%;
    height:100%;
  }
}
</style>
