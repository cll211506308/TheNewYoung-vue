<template>
  <div>
    <h2>热门标签</h2><br>
    <div style="margin-left: 5px">
      <el-row>
        <router-link to="/foods/allFoods"><el-button round>减肥</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>丰胸</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>清真</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/foods/allFoods"><el-button round>补血</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>补钙</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>补维</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/foods/allFoods"><el-button round>食疗</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>烘焙</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>汤粥</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/foods/allFoods"><el-button round>甜品</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>火锅</el-button></router-link>
        <router-link to="/foods/allFoods"><el-button round>烧烤</el-button></router-link>
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
