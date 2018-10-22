<template>
  <el-row>
    <el-col :span="12" :offset="3"><foods-intro></foods-intro></el-col>
    <el-col :span="6"><foods-rank></foods-rank>
      <foods-class></foods-class></el-col>
  </el-row>
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
