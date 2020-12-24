<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li class="selected"> 收入</li>
    </ul>
  </div>
</template>



<script lang="ts">
export default {
name: "Types"
}
</script>


<style lang="scss" scoped>
.types{
  background-color: #FFD101;
  font-size: 24px;
  text-align: center;
  display: flex;
  > li{
    width:50%;
    line-height: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    &.selected{
      background-color: red;
    }
  }
}
</style>