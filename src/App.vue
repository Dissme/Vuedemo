<template lang="jade">
  #app
    Loader(v-show='fetching')
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
import Loader from 'components/GloabalFetching'

export default {
  store,
  components: {
    Topbar, Sidebar, Loader
  },
  vuex: {
    getters: {
      bars_show (_) {
        return _.bars.bars_show
      },
      fetching (_) {
        return _.bars.fetching > 0
      }
    }
  },
  created () {
    console.log(this.$route, document.body.offsetWidth)
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
    .h1,.h2{
      margin: 0;
      font-weight: normal;
      line-height: 1.5;
      text-align: center;
    }
    .h1{
      font-size: 23px;
    }
    .h2{
      font-size: 18px;
    }
  }
  #app{
    display: flex;
    flex-direction: column;
  }
  .content{
    flex: 1 1 auto;
    display: flex;
    overflow: hidden;
    .side_bar{
      flex: 0 0 auto;
      overflow: hidden;
      overflow-y: auto;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
      overflow-y: auto;
      background: #e2e2e2;
    }
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 5px;
    height: 15px;
    background-color: rgba(0,0,0,.7);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 5px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
  .modal-transition {
    transition: all .3s ease;
  }
  .modal-enter, .modal-leave {
    transform: scale(.5);
  }
</style>
