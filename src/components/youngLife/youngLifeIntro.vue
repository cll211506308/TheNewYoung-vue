<template>
    <div>
      <img src="../../../static/images/younglifePic.png" alt="">
      <h2>养生堂</h2>
      <p>新young生网站养生堂板块为您提供最全面的中医养生知识，
        随时查找实用的中药偏方秘方，借鉴名人养生方法，
        了解养生保健知识，让您远离疾病，保持身体健康。</p>
      <router-link tag="li" to="/youngLife/allYoungLife">婴幼儿</router-link>
      <router-link tag="li" to="/youngLife/allYoungLife">青少年</router-link>
      <router-link tag="li" to="/youngLife/allYoungLife">中老年</router-link>
      <router-link tag="li" to="/youngLife/allYoungLife">男性专区</router-link>
      <router-link tag="li" to="/youngLife/allYoungLife">女性专区</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "youngLifeIntro"
    }
</script>

<style scoped>

</style>
