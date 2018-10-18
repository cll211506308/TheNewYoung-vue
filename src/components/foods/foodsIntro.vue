<template>
    <div>
      <img src="../../../static/images/foodsPic.png" alt="">
      <h2>营养美食</h2>
      <p>新young生营养美食频道为您介绍各类食物、食材的功效与作用，
        让您了解它们的营养价值，提供药膳食疗，达到科学营养搭配饮食，吃出健康。</p>
      <router-link tag="li" to="/foods/allFoods">热门菜谱</router-link>
      <router-link tag="li" to="/foods/allFoods">常见食材</router-link>
      <router-link tag="li" to="/foods/allFoods">营养搭配</router-link>
      <router-link tag="li" to="/foods/allFoods">三餐</router-link>
      <router-link tag="li" to="/foods/allFoods">素食者专区</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "foodsIntro"
    }
</script>

<style scoped>
  li{
    float: left;
    list-style: none;
  }
</style>
