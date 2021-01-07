<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';


@Component//声明一个类，在上面加上装饰器--修饰在class上 是一个组件 告诉ts 下面代码要被处理成data和method
export default class Types extends Vue {
  @Prop() readonly value!: string;

  //@Prop(Number) xxx: number | undefined
  //undefined是初始值，一旦写了在后面就需要if判断检查，虽然麻烦，但ts会保证严谨性--有追求的前端
  // Prop是个装饰器 告诉vue：xxx不是data是prop
  // Number告诉Vue  xxx是个Number ---运行时
  //xxx 属性名
  //number |undefined 告诉ts  xxx 的类型---编译时

  selectType(type: string) {
    if (type !=='-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);
  } }

</script>


//   mounted(){
// //仔细理解下面一段代码 ，以前在控制台出现的bug 现在ts就告诉我了 这就是ts的严谨之处
//     if(this.xxx===undefined){
//       console.log(undefined);
//     }
//     else{
//       console.log(this.xxx.toString());
//     }
//   }



// export default {
// name: "Types",
//   //声明一个data函数用来保存当前选中的类型 +表示收入-表示支出
//   data(){
//   return {
//     type:'-'
//   }
//   },
//   methods:{
//   selectType(type){
//     if(type !=='-' && type!=='+'){
//       throw new Error ('type is unknown')
//     }
//     this.type=type
//   }
//   }
// }


<style lang="scss" scoped>
.types {
  background-color: #d9d9d9;
  font-size: 24px;
  text-align: center;
  display: flex;

  > li {
    width: 50%;
    line-height: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;

    &.selected {
      background-color: #FFD101;
    }
  }
}
</style>