<template>
  <transition name="dialog-fade">
     <div class="int-dialog__wrapper" v-show="isShow" @click.self="handleClick">
      <div class="int-dialog" :style="{width:width,top:top}">
        <div class="int-dialog__header">
          <slot name="title">
            <span class="int-dialog__title">{{title}}</span>
          </slot>
          <button class="int-dialog__headerbtn" @click.stop="handleClick">
            <i class="hm-icon-close"></i>
          </button>
        </div>
        <div class="int-dialog__body">
          <slot></slot>
        </div>
        <div class="int-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'IntDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '10vh'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.int-dialog__wrapper{
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  z-index: 2000;
  overflow: auto;
  margin:0;
  background:rgba(0,0,0,.5);
  .int-dialog{
    position:relative;
    margin:15vh auto 50px;
    width:30%;
    background:#fff;
    box-sizing: border-box;
    box-shadow:0px 1px 3px rgba(0,0,0,.3);
    border-radius: 3px;
    &__header{
      padding:20px 20px 10px;
      .int-dialog__title{
        line-height:24px;
        font-size: 14px;
        color:#303133;
      }
      .int-dialog__headerbtn{
        position:absolute;
        right:20px;
        top:20px;
        padding:0;
        border:none;
        outline: 0;
        background:transparent;
        cursor:pointer;
        font-size: 16px;
        .hm-icon-close{
          color:#909399;
        }
      }
    }
    &__body{
      padding:30px 20px;
      color:#606266;
      word-break: break-all;
      font-size: 14px;
    }
    &__footer{
      padding:10px 20px 20px;
      text-align:right;
      box-sizing: border-box;
      ::v-deep{
        .int-button:first-child{
          margin-right:20px;
        }
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade 0.3s;
}
.dialog-fade-leave-active{
  animation: fade 0.3s reverse;
}
@keyframes fade{
  0%{
    opacity: 0;
    transform: translateY(-10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
