<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card id="intro" class="box-card" shadow="hover">
          <h1>健身课堂</h1>
          <p>新Young生网站健身课堂为您提供健康、有效的训练方法以及个人案例，从减脂、
            增肌、力量、塑形、核心等方面为您提供专业的讲解，以便于调理出健康、强健的体魄。</p>
        </el-card>
        <el-card class="box-card fixed" shadow="hover">
          <fit-intro></fit-intro>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <div class="fixed1"><fit-rank></fit-rank></div>
        <el-card class="box-card fixed2" shadow="hover">
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
  @media only screen and (min-width: 1000px){
    #intro{
      background: url("../../static/images/fitPic.jpg");
      background-size: cover;
    }
    h1{
      color: #696969;
      text-align: center;
      padding-top: 30px;
    }
    p{
      color: #696969;
      padding: 25px 30% 35px 30%;
    }
    .fixed{
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 5% 10px 5%;
    }
    .fixed2{
      background: url('../../static/images/bgrank.jpg') no-repeat;
      background-size: 100% 100%;
      border-radius: 20px;
      padding-top: 10px;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 1000px){
    #intro{
      background: url("../../static/images/fitPic.jpg");
      background-size: cover;
      width: 150%;
    }
    h1{
      color: #696969;
      text-align: center;
      padding-top: 30px;
    }
    p{
      color: #696969;
      padding: 25px 30% 35px 30%;
    }
    .fixed{
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 5% 10px 5%;
      width: 140%;
    }
    .fixed1,.fixed2{
      display: none;
    }
  }
</style>
