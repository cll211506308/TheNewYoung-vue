<template>
  <div>
    <div id="intro">
      <img src="../../../static/images/fitPic.png">
      <div id="fitText">
        <h2>健身课堂</h2><br>
        <p>新Young生网站健身课堂为您提供健康、有效的训练方法以及个人案例，
          从减脂、增肌、力量、塑形、核心等方面为您提供专业的讲解，以便于调理出健康、强健的体魄。</p>
      </div>
    </div>
    <div id="content">
      <router-link tag="li" to="/fit/allFit">全部</router-link>
      <router-link tag="li" to="/fit/someFit/1">减脂</router-link>
      <router-link tag="li" to="/fit/someFit/2">增肌</router-link>
      <router-link tag="li" to="/fit/someFit/3">力量</router-link>
      <router-link tag="li" to="/fit/someFit/4">塑形</router-link>
      <router-link tag="li" to="/fit/someFit/5">核心</router-link>
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
  #intro{float: left;}
  img{
    margin-top: 50px;
    width: 50%;
    float: left;
  }
  h2{margin-top: 20px;}
  #fitText{
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
