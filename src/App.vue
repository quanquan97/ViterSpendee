<template>
  <div id="app">
    <router-view/>
    <!--    表示显示在页面的什么地方-->
  </div>
</template>


<script lang="js">
import store from '@/store/index2'
export default {
  data() {
    return {
      store: store
    }
  }
}
</script>

<style lang="scss">

@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F5F5F5;
  color: #333;
}
</style>
