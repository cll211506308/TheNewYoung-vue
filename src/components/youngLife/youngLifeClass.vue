<template>
  <div>
    <h2>热门标签</h2><br>
    <div style="margin-left: 5px">
      <el-row>
        <router-link to="/youngLife/allYoungLife"><el-button round>血糖</el-button></router-link>
        <router-link to="/youngLife/someYoungLife"><el-button round>血压</el-button></router-link>
        <router-link to="/youngLife/allYoungLife"><el-button round>血脂</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/youngLife/allYoungLife"><el-button round>阴阳</el-button></router-link>
        <router-link to="/youngLife/someYoungLife"><el-button round>止咳</el-button></router-link>
        <router-link to="/youngLife/allYoungLife"><el-button round>消食</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/youngLife/allYoungLife"><el-button round>防脱</el-button></router-link>
        <router-link to="/youngLife/someYoungLife"><el-button round>补气</el-button></router-link>
        <router-link to="/youngLife/allYoungLife"><el-button round>安神</el-button></router-link>
      </el-row>
      <el-row>
        <router-link to="/youngLife/allYoungLife"><el-button round>活血</el-button></router-link>
        <router-link to="/youngLife/someYoungLife"><el-button round>排毒</el-button></router-link>
        <router-link to="/youngLife/allYoungLife"><el-button round>清热</el-button></router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "youngLifeClass"
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
