<template lang="jade">
.shouye
  input.h1(v-model='h1')
  input.h2(v-model='h2')
  .biaozhi
    span 上传
    span 标志
  .huodong
    template(v-for='i in huodong')
      .time {{i.time+' '+i.status}}
      input(v-model='i.topic', v-on:change='changeHandle')
      input(v-model='i.author', v-on:change='changeHandle')
  .search
  .menu
</template>
<style lang="less" scoped>
  .typeA .shouye{
    height: 100%;
    background: url("http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg") no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
    .biaozhi{
      position: absolute;
      top: 10px;
      left: 10px;
      width: 110px;
      height: 110px;
      background: #333;
      color: #fff;
      opacity: .7;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .h1,.h2{
      color: #fff;
      position: absolute;
    }
    .h1{
      top: 160px;
      left: 0;
      width: 100%;
    }
    .h2{
      top: 200px;
      left: 0;
      width: 100%;
    }
    .huodong{
      width: 300px;
      height: 140px;
      position: absolute;
      top: 244px;
      left: 0;
      right: 0;
      margin: auto;
      background: rgba(255,255,255,.7);
      color: #fff;
      overflow-y: auto;
      input{
        width: 100%;
        color: #fff;
      }
    }
    .search{
      width: 340px;
      height: 45px;
      margin: 0 auto;
      position: absolute;
      top: 460px;
      left: 0;
      right: 0;
      border: 1px solid #f2f2f2;
      padding-right: 45px;
      &:before{
        position: absolute;
        right: 0;
        top: 0;
        background: #f2f2f2;
        width: 45px;
        height: 100%;
        content: '';
      }
    }
    .menu{
      height: 65px;
      width: 340px;
      margin: 0 auto;
      position: absolute;
      top: 530px;
      left: 0;
      right: 0;
      border: 1px solid #f2f2f2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &:hover:before{
        position: absolute;
        background: #333;
        color: #f2f2f2;
        opacity: .7;
        content: '点击选择其它菜单';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-align: center;
        line-height: 65px;
      }
    }
  }
</style>
<script>
//  import moment from 'moment'
  export default{
    data () {
      return {
        h1: '点击输入主标题',
        h2: '点击输入副标题',
        huodong: [{
          time: '9:00-10:00',
          status: '进行中',
          topic: '活动',
          author: '主办方'
        }, {
          time: '10:00-11:00',
          status: '进行中',
          topic: '活动',
          author: '主办方'
        }]
      }
    },
    methods: {
      changeHandle (e) {
        console.log(this.huodong, e.target.value)
      }
    }
  }
</script>
