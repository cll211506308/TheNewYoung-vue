<template>
  <el-row>
    <el-col :span="12" :offset="3"><younglife-intro></younglife-intro></el-col>
    <el-col :span="6"><younglife-rank></younglife-rank>
      <younglife-class></younglife-class></el-col>
  </el-row>
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
