<template>
  <div id="container">
    <br><h2>热门排行</h2><br>
    <div>
      <router-link tag="li" to="/artical/1">热门第1文章</router-link>
      <router-link tag="li" to="/artical/2">热门第2文章</router-link>
      <router-link tag="li" to="/artical/3">热门第3文章</router-link>
      <router-link tag="li" to="/artical/4">热门第4文章</router-link>
      <router-link tag="li" to="/artical/5">热门第5文章</router-link>
      <router-link tag="li" to="/artical/6">热门第6文章</router-link>
      <router-link tag="li" to="/artical/7">热门第7文章</router-link>
      <router-link tag="li" to="/artical/8">热门第8文章</router-link>
      <router-link tag="li" to="/artical/9">热门第9文章</router-link>
      <router-link tag="li" to="/artical/10">热门第10文章</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "youngLifeRank"
    }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 485px;
    border: 2px solid gray;
    border-radius: 20px;
    margin-top: 40px;
  }
  h2{
    margin-left: 30px;
  }
  li{
    width: 100%;
    height: 40px;
    list-style: none;
    margin-left: 20px;
  }
</style>
