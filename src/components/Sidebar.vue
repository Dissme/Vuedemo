<template lang="jade">
    div(v-bind:class='["side_bar", full && "full"]')
      button.toggle(v-on:click='toggle')
      ul.top
        template(v-for='(ia,la) in list1.sibs')
          li(:class="['list_1',ia == list1.idx ? 'on' : '']")
            button(v-on:click='handleC1(ia)') {{la}}
            template(v-if='ia == list1.idx')
              .list_2
                template(v-for='(ib,lb) in list2[ia].sibs')
                  button(:class="ib == list2[ia].idx ? 'on' : ''", v-on:click='handleC2(ib)') {{lb}}
                  template(v-if='ib == list2[ia].idx')
                    .list_3
                      template(v-for='(ic,lc) in list3[ia][ib].sibs')
                        a(:class="ic == list3[ia][ib].idx ? 'on' : ''", v-on:click='handleC3(ic)', v-link='"/sanji/"+lc') {{lc}}
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
      button,a{
        display: block;
        font-size: 16px;
        padding-left: 70px;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        height: 60px;
        line-height: 60px;
        color: #2f2f2f;
        white-space: nowrap;
        font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";
      }
      .list_1.on{
        position: relative;
        background: #2f2f2f;
        button,a{
          color: #e2e2e2;
        }
      }
      .list_2 button,.list_2 a{
        &.on,&:hover{
          background: #393939;
        }
      }
      .list_3 a{
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
        padding-left: 70px;
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
import actions2 from 'actions/erji'

export default{
  methods: {
    toggle () {
      this.toggleFullBar()
    },
    handleC1 (idx) {
      this.handleList1(idx)
    },
    handleC2 (idx) {
      this.handleList2(idx)
    },
    handleC3 (idx) {
      this.handleList3(idx)
    }
  },
  vuex: {
    actions: {
      ...Object.assign({}, actions, actions2)
    },
    method: {
      route () {
        let reg = /\?[\S]+/
        return this.$route.path.replace(reg, '').split('/')
      }
    },
    getters: {
      full (state) {
        return state.bars.full_show
      },
      list1 (_) {
        return _.menu.list1
      },
      list2 (_) {
        return _.menu.list2
      },
      list3 (_) {
        return _.menu.list3
      }
    }
  }
}
</script>
