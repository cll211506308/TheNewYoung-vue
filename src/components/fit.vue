<template>
  <el-row>
    <el-col :span="12" :offset="3"><fit-intro></fit-intro></el-col>
    <el-col :span="6"><fit-rank></fit-rank>
      <sowing-map></sowing-map></el-col>
  </el-row>
</template>

<script>
  import fitIntro from './fit/fitIntro'
  import fitRank from './fit/fitRank'
  import sowingMap from './fit/sowingMap'
    export default {
        name: "fit",
      components:{
          'fit-intro':fitIntro,
          'fit-rank':fitRank,
          'sowing-map':sowingMap
      }
    }
</script>

<style scoped>

</style>
