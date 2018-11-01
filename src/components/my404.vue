<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <img src="../../static/images/404.jpg">
      <div class="text">
        <h1>哎呀，页面出错了！</h1><br>
        <h2>请重新检查输入是否有误或刷新页面</h2>
        <router-link to="/"><el-button type="warning" plain>返回首页</el-button></router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "my404"
  }
</script>

<style scoped>
 img{
   float: left;
   margin-top: 150px;
   margin-bottom: 150px;
   margin-left: 5%;
 }
 .text{
   float: left;
   text-align: center;
   color: #696969;
   margin-top: 240px;
   margin-left: 5%;
 }
  button{
    border-radius: 20px;
    margin-top: 30px;
  }
</style>
