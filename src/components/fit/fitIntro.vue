<template>
  <div>
    <div id="classify">
      <router-link tag="li" to="/fit">全部</router-link>
      <router-link tag="li" to="/fit/someFit">减脂</router-link>
      <router-link tag="li" to="/fit/someFit">增肌</router-link>
      <router-link tag="li" to="/fit/someFit">力量</router-link>
      <router-link tag="li" to="/fit/someFit">塑形</router-link>
      <router-link tag="li" to="/fit/someFit">核心</router-link>
    </div>
    <div id="show"><router-view></router-view></div>
  </div>
</template>

<script>
  export default {
    name: "fitIntro"
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
    width: 16.3%;
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
