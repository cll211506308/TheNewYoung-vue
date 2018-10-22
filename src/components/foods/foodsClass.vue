<template>
  <div>
    <h2>热门标签</h2><br>
    <div style="margin-left: 5px">
      <el-row>
        <el-button round>减肥</el-button>
        <el-button round>丰胸</el-button>
        <el-button round>清真</el-button>
      </el-row>
      <el-row>
        <el-button round>补血</el-button>
        <el-button round>补钙</el-button>
        <el-button round>补维</el-button>
      </el-row>
      <el-row>
        <el-button round>食疗</el-button>
        <el-button round>烘焙</el-button>
        <el-button round>汤粥</el-button>
      </el-row>
      <el-row>
        <el-button round>甜品</el-button>
        <el-button round>火锅</el-button>
        <el-button round>烧烤</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "foodsClass"
    }
</script>

<style scoped>
  h2{
    margin-top: 40px;
    margin-left: 30px;
  }
  button{
    width: 90px;
    height: 40px;
    color: cornflowerblue;
    background-color: aliceblue;
    float: left;
    margin-top: 10px;
    margin-left: 15px;
  }
</style>
