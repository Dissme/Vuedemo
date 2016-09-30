<template lang="jade">
  .erji
    .big_white
    template(v-for='(idx, comp) in comps')
      Comp(:title='comp.title', :src='comp.src', :idx='comp.idx')
      .white(v-if='(idx+1)%3')
    .big_white
</template>
<style lang='less' scoped>
  .erji{
    height: 100%;
    display: flex;
    align-items: center;
    .big_white{
      flex: 1 1 auto;
    }
    .white{
      display: block;
      flex: .5 .5 auto;
    }
  }
</style>
<script>
import Comp from 'components/erjizujian'
import actions from 'actions/erji'
export default{
  data () {
    return {
      comps: [{
        title: '自定义模板',
        src: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg',
        idx: 'typeA'
      }, {
        title: '案例模板B',
        src: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg',
        idx: 'typeB'
      }, {
        title: '案例模板A',
        src: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg',
        idx: 'typeC'
      }]
    }
  },
  components: {
    Comp
  },
  vuex: {
    actions
  }
}
</script>
