<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="selectType('+')"> 收入</li>
    </ul>
  </div>
</template>



<script >
export default {
name: "Types",
  //声明一个data函数用来保存当前选中的类型 +表示收入-表示支出
  data(){
  return {
    type:'-'
  }
  },
  methods:{
  selectType(type){
    if(type !=='-' && type!=='+'){
      throw new Error ('type is unknown')
    }
    this.type=type
  }
  }
}
</script>


<style lang="scss" scoped>
.types{
  background-color: #d9d9d9;
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
      background-color: #FFD101;
    }
  }
}
</style>