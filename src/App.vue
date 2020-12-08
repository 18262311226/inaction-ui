<template>
  <div id="app">
    <!-- <div class="row">
      <int-button>默认</int-button>
      <int-button type="info">info</int-button>
      <int-button type="success">success</int-button>
      <int-button type="danger">danger</int-button>
      <int-button type="warning">warning</int-button>
      <int-button type="primary">primary</int-button>
    </div>

    <div class="row">
      <int-button plain>默认</int-button>
      <int-button plain type="info">info</int-button>
      <int-button plain type="success">success</int-button>
      <int-button plain type="danger">danger</int-button>
      <int-button plain type="warning">warning</int-button>
      <int-button plain type="primary">primary</int-button>
    </div>

    <div class="row">
      <int-button plain round icon="hm-icon-delete">默</int-button>
      <int-button plain round type="info" icon="hm-icon-delete">info</int-button>
      <int-button plain round type="success" icon="hm-icon-delete">success</int-button>
      <int-button plain round type="danger" icon="hm-icon-delete">danger</int-button>
      <int-button plain round type="warning" icon="hm-icon-delete">warning</int-button>
      <int-button plain round type="primary" icon="hm-icon-delete">primary</int-button>
    </div>

    <div class="row">
      <int-button plain circle>邦</int-button>
      <int-button plain circle type="info">恒</int-button>
      <int-button plain circle type="success">启</int-button>
      <int-button plain circle type="danger">彻</int-button>
      <int-button plain circle type="warning">弗</int-button>
      <int-button plain circle type="primary">询</int-button>
    </div>

    <div class="row">
      <int-button plain circle icon="hm-icon-delete"></int-button>
      <int-button plain circle type="info" icon="hm-icon-delete"></int-button>
      <int-button plain circle type="success" icon="hm-icon-delete"></int-button>
      <int-button plain circle type="danger" icon="hm-icon-delete"></int-button>
      <int-button plain circle type="warning" icon="hm-icon-delete"></int-button>
      <int-button plain circle type="primary" icon="hm-icon-delete"></int-button>
    </div>

    <div class="row">
      <int-button plain disabled>默认</int-button>
      <int-button plain disabled type="info">info</int-button>
      <int-button plain disabled type="success">success</int-button>
      <int-button plain disabled type="danger">danger</int-button>
      <int-button plain disabled type="warning">warning</int-button>
      <int-button plain disabled type="primary">primary</int-button>
    </div> -->
    <!-- <int-button type="primary" size="small" @click="showDialog">登录</int-button>
    <int-dialog width="50%" top="50px" :isShow="show" @close="closeDialog">
      <template v-slot:title>
        <span>Dialog</span>
      </template>
      <ul>
        <li>123</li>
        <li>22</li>
        <li>3213</li>
      </ul>
      <template v-slot:footer>
        <int-button @click="show=false">取消</int-button>
        <int-button @click="show=false" type="primary">确定</int-button>
      </template>
    </int-dialog> -->
    <!-- <int-input placeholder="请输入关键字" type="password" :disabled="false" v-model="msg" :showPassword="true"></int-input> -->
    <!-- <int-switch v-model="active" activeColor="yellow" inactiveColor="blue" :name="name"></int-switch> -->
    <!-- <int-radio-group v-model="gender">
      <int-radio label="1">男</int-radio>
      <int-radio label="0">女</int-radio>
    </int-radio-group> -->
    <!-- <int-checkbox-group v-model="like">
      <int-checkbox label="桃子" name="liu" v-model="active"></int-checkbox>
      <int-checkbox label="苹果" name="liu" v-model="active"></int-checkbox>
    </int-checkbox-group> -->

    <int-form v-model="model" label-width="80px">
      <int-form-item label="用户名">
        <int-input placeholder="请输入用户名" width="300px" :reg="/^[0-9]{9}$/" v-model="model.username" :rule="rules.username"></int-input>
      </int-form-item>
      <!-- <int-form-item label="密码">
        <int-input placeholder="请输入密码" type="password" width="300px" v-model="model.password" :rule="rules.password"></int-input>
      </int-form-item> -->
      <template v-slot:submit>
        <int-button type="danger">提交</int-button>
      </template>
    </int-form>

  <!-- <div class="container">
    <int-carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true">
      <int-carousel-item
      v-for="(item,index) in images"
      :key="index">
        <img :src="require(`./assets/images/${item.Imgsrc}`)">
      </int-carousel-item>
    </int-carousel>
  </div> -->

  </div>
</template>

<script>
import images from './dataJson.js'
export default {
  data () {
    return {
      images,
      model: {},
      rules: {
        username: [
          { type: 'required', message: '用户名不能为空' }
        ]
      }
    }
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>
.container{
  width:520px;
  height:300px;
  margin:100px auto;
}

</style>
