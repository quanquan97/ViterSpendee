<template>
  <nav>
    <router-link to='/labels' class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>

    <router-link to='/money' class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>

    <router-link to='/statistics' class="item" active-class="selected">
     <Icon name="statistics"/>
      统计
    </router-link>

  </nav>
</template>

<script lang="ts">

//这一堆代码可以将一个目录任意后缀的文件统一全部引入另一个文件  此处就是将svg文件全部引入了
import Icon from '@/components/Icon.vue';
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

import x from '@/assets/icons/label.svg'; //loader把这个svg 变成了symbol标签，再把这个symbol标签放在svg里面，最后把svg放在body里面

console.log(x);
export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;

  flex-direction: row;
  font-size: 12px;


  > .item{
    padding: 5px 2px 0 0;
    width: 33.3333%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 32px;
      height: 32px;
    }
}
  > .item.selected{
    color: $color-highlight}



}

</style>