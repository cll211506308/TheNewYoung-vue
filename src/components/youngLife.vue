<template>
  <div>
    <h1>我是youngLife</h1>
    <younglife-intro></younglife-intro>
    <younglife-rank></younglife-rank>
    <younglife-class></younglife-class>
  </div>
</template>

<script>
  import youngLifeIntro from './youngLife/youngLifeIntro'
  import youngLifeRank from './youngLife/youngLifeRank'
  import youngLifeClass from './youngLife/youngLifeClass'
    export default {
        name: "youngLife",
      components:{
        'younglife-intro':youngLifeIntro,
        'younglife-rank':youngLifeRank,
        'younglife-class':youngLifeClass
      }
    }
</script>

<style scoped>

</style>
