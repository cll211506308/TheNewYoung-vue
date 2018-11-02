<template>
  <el-row style="padding-top: 20px; padding-bottom: 30px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card id="intro" class="box-card" shadow="hover" style="margin-bottom: 28px">
          <el-col :span="14" :offset="5">
            <h1>营养饮食</h1>
            <p>新young生营养美食频道为您介绍各类食物、食材的功效与作用，
              让您了解它们的营养价值，提供药膳食疗，达到科学营养搭配饮食，吃出健康。</p>
          </el-col>
        </el-card>
        <el-card class="box-card fixed" shadow="hover">
          <foods-intro></foods-intro>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <div class="fixed1"><foods-rank></foods-rank></div>
        <el-card class="box-card fixed2" shadow="hover">
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
  created(){
    sessionStorage.setItem("url", (window.location.pathname).slice(1));
  },
  components:{
    'foods-intro':foodsIntro,
    'foods-rank':foodsRank,
    'foods-class':foodsClass
  }
}
</script>

<style scoped>
  @media only screen and (min-width: 1000px){
    #intro{
      background: url("../../static/images/foodbg4.jpg");
      background-size: 100% 100%;
      height: 300px;
    }
    h1{
      color: #2c2c2c;
      text-align: center;
      padding-top: 28px;
    }
    p{
      padding: 15px 10% 15px 10%;
      line-height: 30px;
      font-size: 17px;
      font-weight: bold;
      color: dimgrey;
      text-indent: 2em;
    }
    .fixed{
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 5% 10px 5%;
    }
    .fixed2{
      background: url('../../static/images/divbg3.jpg') no-repeat;
      background-size: 100% 100%;
      border-radius: 20px;
      padding: 5%;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 1000px){
    #intro{
      background: url("../../static/images/foodbg4.jpg");
      background-size: 100% 100%;
      width: 150%;
      height: 280px;
    }
    h1{
      color: #2c2c2c;
      text-align: center;
      padding-top: 28px;
    }
    p{
      color: dimgrey;
      padding: 15px 10% 15px 10%;
      font-size: 17px;
      font-weight: bold;
      text-indent: 2em;
      line-height: 30px;
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
