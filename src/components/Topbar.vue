<template lang="jade">
  .top_bar
    div(v-bind:class = '["logo", full ? "full" : ""]')
    .buttons
      slot
        button 保存
        button 预览
        button.publish 发布
</template>
<style lang="less" scoped>
  .top_bar{
    flex: 0 0 auto;
    height: 70px;
    overflow: hidden;
    background: #333;
    box-shadow: 0 4px 20px 0 rgba(79, 79, 79, 0.5);
    z-index: 1000;
    position: relative;
    .logo{
      width: 33px;
      height: 36px;
      margin-top: (70-36)/2px;
      margin-left: 20px;
      background: url(../assets/img/logo-white.png);
      &.full{
        width: 172px;
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
        font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";
        flex: 0 0 auto;
        width: 140px;
        font-size: 16px;
        color: #fff;
        letter-spacing: 3px;
        color: #E2E2E2;
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
