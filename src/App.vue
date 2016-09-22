<template lang="jade">
  #app
    Topbar(v-show='bars_show')
    .content
      Sidebar(v-show='bars_show')
      .main
        router-view
</template>

<script>
import store from './store'
import Topbar from 'components/Topbar'
import Sidebar from 'components/Sidebar'

export default {
  store,
  components: {
    Topbar, Sidebar
  },
  vuex: {
    getters: {
      bars_show (_) {
        return _.bars.bars_show
      }
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="less">
  html,body,#app{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-y: auto;
  }
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
    button{
      cursor: pointer;
    }
    ul,li{
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .content{
    display: flex;
    padding-top: 70px;
    height: 100%;
    overflow-y: auto;
    .side_bar{
      flex: 0 0 auto;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
  .modal-transition {
    transition: all .3s ease;
  }
  .modal-enter, .modal-leave {
    transform: scale(.3);
  }
</style>
