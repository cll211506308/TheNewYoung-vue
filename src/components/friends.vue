<template>
  <div>
    <h1>我是friends</h1>
    <router-link to="/friends">全部帖子</router-link>
    <router-link to="/friends/likeuser/5">我的关注</router-link>
    <router-view class="card"></router-view>
  </div>
</template>

<script>
    export default {
        name: "friends"
    }
</script>

<style scoped>
.card{
  width: 800px;
  border: 1px solid white;
}
</style>
