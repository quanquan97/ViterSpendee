<template>
  <div class="numbers">
    <div class="output">{{ output }}</div>
    <div class="buttons ">
      <button @click="inputContent">1</button>
      <button @click="inputContent ">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Numbers extends Vue {
@Prop( Number )readonly value!: number;
output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLBaseElement);
    const input = button.textContent!;
    if (this.output.length == 16) {return;}
    if (this.output == '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input == '.') {return;}
    this.output += input;
  }
  remove(){
    if (this.output.length==1) {
      this.output = '0';
    }else{
        this.output= this.output.slice(0,-1)
      }
    }

    clear(){ this.output='0'}

    ok() {
      const number = parseFloat(this.output);
      this.$emit('update:value', number);
      this.$emit('submit', number);
      this.output = '0'

}}
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numbers {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    min-height: 72px;
  }

  .buttons {
    //如果用了float 父元素必须加clearfix 在此处用另一种方法
    @extend %clearFix; //意思是把button这个选择器复制到helper里的%x里去 就是这个“%x”
    > button {
      width: 25%;
      height: 64px;
      background-color: transparent;
      border: none;
      float: left;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      $bg: #F2F2F2;

      &:nth-child(2), &:nth-child(5) {
        background-color: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background-color: darken($bg, 2*4%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background-color: darken($bg, 3*4%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background-color: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background-color: darken($bg, 5*4%);
      }

      &:nth-child(12) {
        background-color: darken($bg, 6*4%);
      }
    }

  }

}
</style>