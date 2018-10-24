<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card id="intro" class="box-card" shadow="hover" style="border-radius: 20px">
          <h1>营养美食</h1>
          <p>新young生营养美食频道为您介绍各类食物、食材的功效与作用，
            让您了解它们的营养价值，提供药膳食疗，达到科学营养搭配饮食，吃出健康。</p>
        </el-card>
        <el-card class="box-card" shadow="hover" style="border-radius: 20px;margin-top: 10px">
          <foods-intro></foods-intro>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card fixed1" shadow="hover">
          <foods-rank></foods-rank>
        </el-card>
        <el-card class="box-card fixed2" shadow="hover" style="margin-top: 30px">
          <foods-class></foods-class>
        </el-card>
      </el-col>
    </el-col>
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
  #intro{
    background: url("../../static/images/foodsPic.jpg");
    background-size: cover;
    border-radius: 20px;
    width: 100%;
  }
  h1{
    text-align: center;
    padding-top: 30px;
  }
  p{padding: 25px 26% 35px 34%;}
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
