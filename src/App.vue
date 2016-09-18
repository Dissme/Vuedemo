<template lang="jade">
  #app #{'这里加侧边栏'}
    .main
      router-view
</template>

<script>
import store from './store'
export default {
  store
}
</script>

<style lang="less">
  .main {
    overflow: hidden;
  }
</style>
