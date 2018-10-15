<template>
  <div>
    <h1>我是friends</h1>
    <router-link to="/friends">全部帖子</router-link>
    <router-link to="/friends/likeuser/5">我得关注</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "friends"
    }
</script>

<style scoped>

</style>
