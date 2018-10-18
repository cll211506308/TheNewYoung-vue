<template>
  <div>
    <h1>我是foods</h1>
    <foods-intro></foods-intro>
    <foods-rank></foods-rank>
    <foods-class></foods-class>
  </div>
</template>

<script>
  import foodsIntro from './foods/foodsIntro'
  import foodsRank from './foods/foodsRank'
  import foodsClass from './foods/foodsClass'
    export default {
        name: "foods",
      components:{
        'foods-intro':foodsIntro,
        'foods-rank':foodsRank,
        'foods-class':foodsClass
      }
    }
</script>

<style scoped>

</style>
