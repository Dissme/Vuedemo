<template lang="jade">
  .wrap
    .item(v-on:click='tiaozhuan(idx)')
      img(:src='src')
      .zhezhao
        img(src='')
        span 创建案例
    .title {{title}}
</template>
<style lang="less" scoped>
  .wrap{
    overflow: hidden;
    flex: 0 0 auto;
    .item{
      width: 340px;
      height: 605px;
      position: relative;
      >img{
        width: 100%;
        height: 100%;
      }
      .zhezhao{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .7;
        background: #313131;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width: 80px;
          height: 80px;
        }
        span{
          color: #fff;
          margin-top: 20px;
          font-size: 18px;
          line-height: 18px;
          height: 18px;
        }
      }
      &:hover .zhezhao{
        display: flex;
      }
    }
    .title{
      margin-top: 31px;
      font-size: 16px;
      line-height: 16px;
      height: 16px;
      color: #828282;
    }
  }
</style>
<script>
export default {
  props: ['title', 'src', 'idx'],
  methods: {
    tiaozhuan (idx) {
      this.$route.router.go(`/sanji/${idx}`)
    }
  }
}
</script>
