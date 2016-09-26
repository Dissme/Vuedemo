<template lang="jade">
  .sanji
    .h5(:class='[comp_name, type]')
      component(:is='comp_name', keep-alive)
    .idx {{idx}}/{{all}}
    .pages
      .scroll
        .block
        span {{idx}}/{{all}}
</template>
<style lang="less" scoped>
  .sanji{
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .h5{
      overflow: hidden;
      flex: 0 0 auto;
      width: 375px;
      height: 667px;
      padding-top: 40px;
      position: relative;
      background: #fff;
    }
    .idx{
      margin-top: 56px;
      color: #828282;
      font-size: 20px;
      height: 20px;
      line-height: 20px;
    }
    .pages{
      position: absolute;
      right: 50px;
      top: 95px;
      bottom: 95px;
      margin: auto;
      width: 94px;
      &:before{
        width: 1px;
        height: 100%;
        background: #2f2f2f;
        z-index: 1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      .scroll{
        position: absolute;
        overflow: hidden;
        background: #e2e2e2;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        z-index: 2;
        width: 100%;
        .block{
          background: #2f2f2f;
          flex: 1 1 auto;
          height: 167px;
        }
        >span{
          .idx();
          margin-top: 10px;
          flex: 0 0 auto;
          text-align: center;
        }
      }
    }
  }
</style>
<script>
import sanjishouye from 'components/sanjishouye'
import sanjijiabin from 'components/sanjijiabin'

export default {
  data () {
    return {
      type: this.$route.params.type,
      comp_name: 'sanjishouye',
      idx: 1,
      all: 1
    }
  },
  components: {
    sanjishouye, sanjijiabin
  },
  created () {
    // todo 根据type fetch三级页面
  }
}
</script>
