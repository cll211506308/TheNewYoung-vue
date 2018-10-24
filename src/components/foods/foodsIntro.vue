<template>
  <div>
    <div id="classify">
      <router-link tag="li" to="/foods">全部</router-link>
      <router-link tag="li" to="/foods/someFoods">热门菜谱</router-link>
      <router-link tag="li" to="/foods/someFoods">常见食材</router-link>
      <router-link tag="li" to="/foods/someFoods">营养搭配</router-link>
      <router-link tag="li" to="/foods/someFoods">三餐</router-link>
      <router-link tag="li" to="/foods/someFoods">素食者专区</router-link>
    </div>
    <div id="show"><router-view></router-view></div>
  </div>
</template>

<script>
  export default {
    name: "foodsIntro"
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
