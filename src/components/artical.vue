<template>
  <el-row>
    <el-col :span="18" :offset="3" id="content">
      <h1>这是id为{{id}}的文章</h1>
      <h3>作者：</h3>
      <div id="text">
        <p>我是正文</p>
        <el-button type="primary" icon="el-icon-star-off">添加收藏</el-button>
        <!--<el-button type="primary" icon="el-icon-star-on">取消收藏</el-button>-->
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "artical",
    data(){
      return {
        id:this.$route.params.id
      }
    }
  }
</script>

<style scoped>
  #content{
    background-color: lightblue;
  }
  h1{
    text-align: center;
    margin-top: 50px;
  }
  h3{
    text-align: center;
    margin-top: 50px;
  }
  #text{
    text-align: center;
    margin-top: 50px;
  }
  button{
    margin-top: 50px;
  }
</style>
