<template>

  <Layout class-prefix="layout">


    <div class="numbers">
      <div class="output">100</div>
      <div class="buttons ">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>



    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li class="selected"> 收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name"> 备注 </span>
        <input type="text"  placeholder="输入备注">

      </label>

    </div>
    <div class="tags">



      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li><li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>

      </ul>
    </div>

  </Layout>

</template>

<script lang="ts">

export default {
  name: 'Money',

};
</script>


<style lang="scss">
 .xxx-wrapper{}

.layout-content{
  display: flex; flex-direction: column-reverse}

</style>

<style lang="scss" scoped>

@import "~@/assets/style/helper.scss";
.numbers{
  .output{
    @extend %clearFix;
    @extend  %innerShadow;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;


  }
  .buttons{
//如果用了float 父元素必须加clearfix 在此处用另一种方法
    @extend %clearFix; //意思是把button这个选择器复制到helper里的%x里去 就是这个“%x”
    > button {
      width: 25%;
      height: 64px;
      background-color: transparent;
      border: none;
      float:left;
      &.ok{
        height: 64*2px;
        float:right;
      }
      &.zero{
        width: 25*2%;
      }
      $bg:#f2f2f2;
      &:nth-child(2),&:nth-child(5){
        background-color:darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background-color:darken($bg,2*4%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background-color:darken($bg,3*4%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background-color:darken($bg,4*4%);
      }
      &:nth-child(14){
        background-color:darken($bg,5*4%);
      }
      &:nth-child(12){background-color:darken($bg,6*4%);}
    }

  }

}

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

.tags{
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  > .current{
    display: flex;
    flex-wrap: wrap;
    >li{
      background: #d9d9d9;
      $h:24px;
      height: $h;
      //想要垂直居中有两种方式：只有一行字的情况下让height等于line-height,就像此时。另一种：如果两行及其以上就用display-flex
      line-height: $h;
    border-radius: $h/2;
      padding: 0 18px;
    margin-right: 12px;
    margin-top: 4px;
  }}
  >.new{
    padding-top: 16px ;
    button{
      background-color: transparent;
      border: none  ;
      border-bottom: 1px solid;
      color:#999;
      padding: 0 4px;

    }
  }

}

.notes{
  background-color: #f5f5f5;
  padding-left: 16px;

  font-size: 14px;

  display: flex;
  align-items: center;
  .name{
    padding-right: 16px;
  }
  input{ height: 64px;
    flex-grow: 1;
  background-color: transparent;
    padding-right: 16px;
    border: none;
  }

}



</style>
