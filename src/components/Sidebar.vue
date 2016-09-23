<template lang="jade">
    div(v-bind:class='["side_bar", full && "full"]')
      button.toggle(v-on:click='toggle')
      ul.top
        li.list_1.on
          button 会议
          .list_2
            button type1
            button type2
            button.on 自定义模板
            .list_3
              button typeA
              button.on typeB
              button typeC
        li.list_1
          button 联合办公
        li.list_1
          button 购物中心
        li.list_1
          button 我的案例
      .white
      nav.bottom
        a(v-link='') 个人中心
        a(v-link='') 联系我们
        a(v-link='') 联系我们
      .emerge
</template>
<style lang="less" scoped>
  .side_bar{
    width: 70px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all .5s ease;
    color: #2f2f2f;
    &.full{
      width: 178px;
    }
    .toggle{
      height: 60px;
      background: #393939;
      flex: 0 0 auto;
    }
    .top{
      flex: 0 0 auto;
      font-size: 16px;
      button{
        font-size: 16px;
        padding-left: 66px;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        height: 60px;
        color: #2f2f2f;
        white-space: nowrap;
      }
      .list_1.on{
        background: #2f2f2f;
        button{
          color: #e2e2e2;
        }
      }
      .list_2{
        button.on,button:hover{
          background: #393939;
        }
      }
      .list_3 button{
        padding-left: 80px;
      }
    }
    .white{
      flex: 1 1 auto;
    }
    .bottom{
      flex: 0 0 auto;
      a{
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        padding-left: 66px;
        white-space: nowrap;
      }
    }
    .emerge{
      flex: 0 0 auto;
      height: 60px;
    }
  }
</style>
<script>
import actions from 'actions/bars'

export default{
  methods: {
    toggle () {
      this.toggleFullBar()
    }
  },
  vuex: {
    actions,
    getters: {
      full (state) {
        return state.bars.full_show
      }
    }
  }
}
</script>
