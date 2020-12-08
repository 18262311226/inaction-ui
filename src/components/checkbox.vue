<template>
  <label class="int-checkbox" :class="{'is-checked': ismodel}">
    <span class="int-checkbox__input">
      <span class="int-checkbox__inner"></span>
      <input type="checkbox" v-model="model" :name="name" :value="label" class="int-checkbox__original">
    </span>
    <span class="int-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'IntCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    checkgroup: {
      default: ''
    }
  },
  computed: {
    isgroup: {
      get () {
        return !!this.checkgroup
      }
    },
    model: {
      get () {
        return this.isgroup ? this.checkgroup.value : this.value
      },
      set (value) {
        this.isgroup ? this.checkgroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    ismodel: {
      get () {
        return this.isgroup ? this.model.includes(this.label) : this.model
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.int-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .int-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .int-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .int-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .int-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.int-checkbox.is-checked {
  .int-checkbox__input {
    .int-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .int-checkbox__label {
    color: #409eff;
  }
}
</style>
