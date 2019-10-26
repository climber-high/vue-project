<template>
  <div id="app">
    <h1>这是App组件</h1>

    <nav2>
        <div slot-scope="slot">
          <span v-for="(item,index) in slot.data" :key="index">{{item}}-</span>
        </div>
    </nav2>

    <mt-button type="default" @click="show">default</mt-button>
    <!-- <el-button type="primary">主要按钮</el-button> -->

    <router-link to="/Account">账号</router-link>
    <router-link to="/GoodsList">列表</router-link>
    <router-view></router-view>

    <one></one>
    <two></two>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import nav2 from './components/main/nav-bar'
import one from './components/dVuex/one'
import two from './components/dVuex/two'

export default {
  data() {
    return {
      
    }
  },
  components:{
    nav2,
    one,
    two
  },
  methods: {
    show(){
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 1000
      });
    }
  }
}
</script>

<style lang="scss">

</style>
