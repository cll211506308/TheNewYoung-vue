<template>
  <div>
    <index-header>头</index-header>
    <user-userdetails>用户详情</user-userdetails>
    <user-userdiagram>用户折线图</user-userdiagram>
    <router-view></router-view>
    <user-userbody>用户体质类别</user-userbody>
    <user-suggestions>建议</user-suggestions>
    <index-footer>尾</index-footer>
  </div>
</template>

<script>
  import header from './index/topCon.vue';
  import footer from './index/bottomCon.vue';
  export default {
    name: 'users',
    components: {
      'index-header': header,
      // 'user-userdetails': userdetails,
      // 'user-userdiagram':userdiagram,
      // 'user-userbody':userbody,
      // 'user-suggestions':suggestions,
      'index-footer': footer

    }
  }
</script>

<style scoped>

</style>
