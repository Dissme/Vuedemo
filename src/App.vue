<template lang="jade">
  #app #{'这里加侧边栏'}
    .main
      router-view
</template>

<script>
import store from './store'
export default {
  store
}
</script>

<style lang="less">
  body{
    font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";
    font-size: 16px;
    color: #333;
    div{
      box-sizing: border-box;
    }
    img{
      display: block;
    }
    button,input,textarea{
      display: block;
      border: none;
      appearance: none;
      padding: 0;
      background: none;
      outline: none;
    }
    input,textarea{
      font-size: 16px;
      line-height: 2;
      color: #333;
      &::-webkit-input-placeholder,&:-moz-placeholder,&:-ms-input-placeholder{
        color: #a4a4a4;
      }
    }
    a{
      appearance: none;
      text-decoration: none;
    }
  }
  .main {
    overflow: hidden;
  }
</style>
