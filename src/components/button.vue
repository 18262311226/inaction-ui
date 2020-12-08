<template>
  <button :disabled="disabled" @click="handleClick" class="int-button"
  :class="[`int-btn-${type}`,`int-btn-${size}`,{'is-plain': plain,'is-round' : round,'is-circle':circle}]">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
        <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'IntButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.int-button{
    display:inline-block;
    font-size: 14px;
    padding:12px 20px;
    background:#fff;
    cursor:pointer;
    box-sizing: border-box;
    line-height:1;
    white-space: nowrap;
    border:1px solid #dcdfe6;
    outline: 0;
    color:#ddd;
    margin:0;
    font-weight: 500;
    transition:0.1s;
    text-align:center;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border-radius: 5px;
    &:hover,
    &:focus{
        color:#409eff;
        border-color:#dcdfe6;
        background:#ecf5ff;
    }
}
.int-btn-info{
    color:#ddd;
    background:#606266;
    &:hover,
    &:focus{
        color:#ddd;
        border-color:#dcdfe6;
        background:#7a7b85;
    }
}
.int-btn-success{
    color:#ddd;
    background:#5eb632;
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:#80d420;
    }
}
.int-btn-danger{
    color:#ddd;
    background:rgb(212, 10, 10);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(231, 29, 29);
    }
}
.int-btn-warning{
    color:#ddd;
    background:rgb(240, 170, 40);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(250, 135, 4);
    }
}
.int-btn-primary{
    color:#ddd;
    background:rgb(64, 192, 243);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(0, 177, 247);
    }
}
//控制朴素按钮
.int-button.is-plain{
    color:#d2e4f8;
    background:#fff;
    border:1px solid #d2e4f8;
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:#ecf5ff;
    }
}
.int-btn-info.is-plain{
    color:#606266;
    background:#fff;
    border:1px solid #606266;
    &:hover,
    &:focus{
        color:#ddd;
        border-color:#dcdfe6;
        background:#7a7b85;
    }
}
.int-btn-success.is-plain{
    color:#5eb632;
    background:#fff;
    border:1px solid #5eb632;
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:#80d420;
    }
}
.int-btn-danger.is-plain{
    color:rgb(212, 10, 10);
    background:#fff;
    border:1px solid rgb(212, 10, 10);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(231, 29, 29);
    }
}
.int-btn-warning.is-plain{
    color:rgb(240, 170, 40);
    background:#fff;
    border:1px solid rgb(240, 170, 40);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(250, 135, 4);
    }
}
.int-btn-primary.is-plain{
    color:rgb(64, 192, 243);
    background:#fff;
    border:1px solid rgb(64, 192, 243);
    &:hover,
    &:focus{
        color:#fff;
        border-color:#dcdfe6;
        background:rgb(0, 177, 247);
    }
}
//控制按钮圆角
.int-button.is-round{
    border-radius: 20px;
    padding:12px 23px;
}
.int-button.is-circle{
    border-radius: 50%;
    padding:12px;
}
//图标字体间距
.int-button [class*="hm-icon-"]+span{
    margin-left:5px;
}
//大小
.int-btn-mini{
    width:50px;
    height:25px;
    font-size: 12px;
    line-height:12px;
    display:flex;
    justify-content:center;
    align-items: center;
}
.int-btn-small{
    width:80px;
    height:35px;
    line-height:12px;
    font-size: 13px;
}
.int-btn-big{
    width:100px;
    height:45px;
    font-size: 14px;
    line-height:15px;
}
</style>
