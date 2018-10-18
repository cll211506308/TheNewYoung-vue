<template>
    <div>
      <img src="../../../static/images/fitPic.png" alt="">
      <h2>健身课堂</h2>
      <p>新Young生网站健身课堂为您提供健康、有效的训练方法以及个人案例，
        从减脂、增肌、力量、心肺、核心等方面为您提供专业的讲解，以便于调理出健康、强健的体魄。</p>
        <router-link tag="li" to="/fit/allFit">全部</router-link>
        <router-link tag="li" to="/fit/someFit">减脂</router-link>
        <router-link tag="li" to="/fit/allFit">增肌</router-link>
        <router-link tag="li" to="/fit/allFit">力量</router-link>
        <router-link tag="li" to="/fit/allFit">核心</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "fitIntro"
    }
</script>

<style scoped>
</style>
