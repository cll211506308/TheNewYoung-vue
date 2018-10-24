<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card id="intro" class="box-card" shadow="hover" style="border-radius: 20px">
          <h1>养生堂</h1>
          <p>新young生网站养生堂板块为您提供最全面的中医养生知识，
            随时查找实用的中药偏方秘方，借鉴名人养生方法，
            了解养生保健知识，让您远离疾病，保持身体健康。</p>
        </el-card>
        <el-card class="box-card" shadow="hover" style="border-radius: 20px;margin-top: 10px">
          <younglife-intro></younglife-intro>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card fixed1" shadow="hover">
          <younglife-rank></younglife-rank>
        </el-card>
        <el-card class="box-card fixed2" shadow="hover" style="margin-top: 30px">
          <younglife-class></younglife-class>
        </el-card>
      </el-col>
    </el-col>
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
  #intro{
    background: url("../../static/images/youngPic.jpg");
    background-size: cover;
    border-radius: 20px;
    width: 100%;
  }
  h1{
    text-align: center;
    padding-top: 30px;
  }
  p{padding: 25px 30% 35px 30%;}
  .fixed1{
    background: url('../../static/images/bgrank.jpg') no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;
    padding: 5%;
  }
  .fixed2{
    background: url('../../static/images/divbg3.jpg') no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;
    padding: 5%;
  }
</style>
