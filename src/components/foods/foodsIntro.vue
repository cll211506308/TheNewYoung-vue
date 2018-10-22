<template>
    <div>
      <div id="intro">
        <img src="../../../static/images/foodsPic.png">
        <div id="foodsText">
          <h2>营养美食</h2><br>
          <p>新young生营养美食频道为您介绍各类食物、食材的功效与作用，
            让您了解它们的营养价值，提供药膳食疗，达到科学营养搭配饮食，吃出健康。</p>
        </div>
      </div>
      <div id="content">
        <router-link tag="li" to="/foods/allFoods">全部</router-link>
        <router-link tag="li" to="/foods/someFoods/1">热门菜谱</router-link>
        <router-link tag="li" to="/foods/someFoods/2">常见食材</router-link>
        <router-link tag="li" to="/foods/someFoods/3">营养搭配</router-link>
        <router-link tag="li" to="/foods/someFoods/4">三餐</router-link>
        <router-link tag="li" to="/foods/someFoods/5">素食者专区</router-link>
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
  #intro{float: left;}
  img{
    margin-top: 50px;
    width: 50%;
    float: left;
  }
  h2{margin-top: 20px;}
  #foodsText{
    margin-top: 50px;
    margin-left: 5%;
    width: 40%;
    float: left;
  }
  #content{
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
