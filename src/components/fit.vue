<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card id="intro" class="box-card" shadow="hover" style="border-radius: 20px">
          <h1>健身课堂</h1>
          <p>新Young生网站健身课堂为您提供健康、有效的训练方法以及个人案例，
            从减脂、增肌、力量、塑形、核心等方面为您提供专业的讲解，以便于调理出健康、强健的体魄。</p>
        </el-card>
        <el-card class="box-card" shadow="hover" style="border-radius: 20px;margin-top: 10px">
          <fit-intro></fit-intro>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card fixed" shadow="hover">
          <fit-rank></fit-rank>
        </el-card>
        <el-card class="box-card fixed" shadow="hover" style="margin-top: 30px">
          <sowing-map></sowing-map>
        </el-card>
      </el-col>
    </el-col>
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
      'sowing-map':sowingMap,
    }
  }
</script>

<style scoped>
  #intro{
    background: url("../../static/images/fitPic.jpg");
    background-size: cover;
    border-radius: 20px;
    width: 100%;
  }
  h1{
    text-align: center;
    padding-top: 30px;
  }
  p{padding: 25px 30% 35px 30%;}
  .fixed{
    border-radius: 20px;
    background: url('../../static/images/bgrank.jpg');
    background-size: 100% 100%;
    padding: 5%;
  }
</style>
