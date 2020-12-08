<template>
    <div class="int-input">
          <input class="int-input__inner"
          :placeholder="placeholder"
          :type="showPassword ? (passwordShow ? 'text' : 'password') : type"
          :class="{'is-disabled':disabled}"
          :style="{width:width}"
          :value="value"
          :name="name"
          @input="handleInput"
          @blur="handleRules">
          <span class="int-input__suffix" v-if="showPassword">
              <i class="hm-input-icon hm-icon-circle-close" v-if="clearable && value" @click="clear"></i>
              <i class="hm-input-icon hm-icon-view" v-if="showPassword" @click="handleShowpassword"></i>
          </span>
          <span class="errorMsg" v-if="error">{{message}}</span>
      </div>
</template>

<script>
export default {
  name: 'IntInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    rule: {
      type: Array
    },
    reg: {
      type: RegExp
    },
    width: {
      type: String,
      default: '200px'
    }
  },
  data () {
    return {
      passwordShow: false,
      message: '',
      error: false
    }
  },
  created () {
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handleShowpassword () {
      this.passwordShow = !this.passwordShow
    },
    handleRules () {
      if (this.rule) {
        const allpassed = this.rule.every((rule) => {
          let passed = true
          this.message = rule.message

          switch (rule.type) {
            case 'required':
              passed = (this.value.trim() !== '')
              break
            case 'regRex':
              passed = this.reg.test(this.value)
              break
          }
          return passed
        })
        this.error = !allpassed
        return allpassed
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.int-input{
  width:100%;
  display:block;
  font-size: 14px;
  position:relative;
  .int-input__inner{
      -webkit-appearance: none;
      background:#fff;
      background-image:none;
      border-radius: 4px;
      border:1px solid #dcdfe6;
      box-sizing: border-box;
      color:#606266;
      display:inline-block;
      font-size: inherit;
      height:40px;
      line-height: 40px;
      outline: 0;
      padding:0 15px;
      transition:border-color 2s cubic-bezier(.645,.045,.355,1);
      width:100%;
      &:focus{
          outline:none;
          border-color:#409eff;
      }
      &.is-disabled{
          background-color:#f5f7fa;
          border-color:#e4e7ed;
          color:#c0c4cc;
          cursor:not-allowed;
      }
  }
.int-input__suffix{
    position:absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
    height:100%;
    line-height:40px;
    text-align:center;
    transition:all .3s;
    color:#c0c4cc;
    z-index:99;
    i{
        color:#c0c4cc;
        font-size: 14px;
        cursor:pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
}
.errorMsg{
    color:red;
    font-size: 13px;
    position:absolute;
    top:32px;
    left:0;
  }
}

</style>
