<template>
  <div>
    <div id="classify">
      <router-link tag="li" to="/youngLife">全部</router-link>
      <router-link tag="li" to="/youngLife/someYoungLife">婴幼儿</router-link>
      <router-link tag="li" to="/youngLife/someYoungLife">青少年</router-link>
      <router-link tag="li" to="/youngLife/someYoungLife">中老年</router-link>
      <router-link tag="li" to="/youngLife/someYoungLife">男性专区</router-link>
      <router-link tag="li" to="/youngLife/someYoungLife">女性专区</router-link>
    </div>
    <div id="show"><router-view></router-view></div>
  </div>
</template>

<script>
    export default {
        name: "youngLifeIntro"
    }
</script>

<style scoped>
  #classify{
    float: left;
    width: 100%;
    margin-top: 30px;
    text-align: center;
    line-height: 50px;
  }
  li{
    float: left;
    list-style: none;
    width: 15%;
    height: 50px;
    border: 1px solid cornflowerblue;
  }
  li:hover{
    border-bottom:transparent;
  }
  #show{
    float: left;
    width: 100%;
    margin-top: 30px;
  }
</style>
