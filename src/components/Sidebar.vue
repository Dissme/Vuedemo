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
                  button(:class="ib == list2[ia].idx ? 'on' : ''", v-on:click='handleC2(ia,ib)') {{lb}}
                  template(v-if='ib == list2[ia].idx')
                    .list_3
                      template(v-for='(ic,lc) in list3[ia][ib].sibs')
                        a(:class="ic == list3[ia][ib].idx ? 'on' : ''", v-on:click='handleC3(ia,ib,ic)', v-link='"/sanji/"+lc') {{lc}}
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

export default{
  data () {
    return {
      list1: {idx: null, sibs: ['会议', '联合办公', '购物中心', '我的案例']},
      list2: [
        {idx: null, sibs: ['type1', 'type2', '自定义模板']},
        {idx: null, sibs: null},
        {idx: null, sibs: null},
        {idx: null, sibs: null}
      ],
      list3: [
        [
          {idx: null, sibs: null},
          {idx: null, sibs: null},
          {idx: null, sibs: ['typeA', 'typeB', 'typeC']}
        ], [], [], []
      ]
    }
  },
  methods: {
    toggle () {
      this.toggleFullBar()
    },
    handleC1 (idx) {
      this.list1.idx = idx
    },
    handleC2 (ia, idx) {
      this.list2[ia].idx = idx
    },
    handleC3 (ia, ib, idx) {
      this.list3[ia][ib].idx = idx
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
