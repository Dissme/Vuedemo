<template lang="jade">
  .top_bar
    div(v-bind:class = '[".logo", full ? "full" : ""]')
    .buttons
      button 保存
      button 预览
      button.publish 发布
</template>
<style lang="less" scoped>
  .top_bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    overflow: hidden;
    background: #333;
    box-shadow: 0 4px 20px 0 rgba(79, 79, 79, 0.5);
    z-index: 1000;
    .logo{
      width: 33px;
      height: 37px;
      .full{
        width: 178px;
      }
    }
    .buttons{
      position: absolute;
      display: flex;
      right: 0;
      top: 0;
      line-height: 70px;
      height: 70px;
      >button{
        flex: 0 0 auto;
        width: 140px;
        font-size: 16px;
        color: #fff;
      }
      .publish{
        background: #3c6;
      }
    }
  }
</style>
<script>
export default{
  vuex: {
    getters: {
      full (state) {
        return state.bars.full_show
      }
    }
  }
}
</script>
