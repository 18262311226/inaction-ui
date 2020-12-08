<template>
  <div class="int-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="int-switch__core" ref="core" :style="{background:value?activeColor:inactiveColor,borderColor:value?activeColor:inactiveColor}">
      <span class="int-switch__button"></span>
    </span>
    <input type="checkbox" :name="name" class="int-switch__input" ref="input">
  </div>
</template>

<script>
export default {
  name: 'IntSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.selecteColor()
      this.$refs.input.checked = this.value
    },
    selecteColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.borderColor = color
      }
    },
    mounted () {
      this.selecteColor()
      this.$refs.input.checked = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.int-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .int-switch__input{
    position:absolute;
    opacity: 0;
    margin:0;
    width:0;
    height:0;
  }
  .int-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .int-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.int-switch.is-checked {
  .int-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .int-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
