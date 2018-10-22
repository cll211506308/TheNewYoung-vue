<template>
    <div>
      <div id="intro">
        <img src="../../../static/images/younglifePic.png">
        <div id="younglifeText">
          <h2>养生堂</h2><br>
          <p>新young生网站养生堂板块为您提供最全面的中医养生知识，
            随时查找实用的中药偏方秘方，借鉴名人养生方法，
            了解养生保健知识，让您远离疾病，保持身体健康。</p>
        </div>
      </div>
      <div id="content">
        <router-link tag="li" to="/youngLife/allYoungLife">全部</router-link>
        <router-link tag="li" to="/youngLife/someYoungLife/1">婴幼儿</router-link>
        <router-link tag="li" to="/youngLife/someYoungLife/2">青少年</router-link>
        <router-link tag="li" to="/youngLife/someYoungLife/3">中老年</router-link>
        <router-link tag="li" to="/youngLife/someYoungLife/4">男性专区</router-link>
        <router-link tag="li" to="/youngLife/someYoungLife/5">女性专区</router-link>
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
  #intro{float: left;}
  img{
    margin-top: 50px;
    width: 50%;
    float: left;
  }
  h2{margin-top: 20px;}
  #younglifeText{
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
