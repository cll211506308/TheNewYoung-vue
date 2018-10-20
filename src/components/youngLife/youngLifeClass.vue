<template>
  <div>
    <h2>热门标签</h2><br>
    <div style="margin-left: 5px">
      <el-row>
        <el-button round>血糖</el-button>
        <el-button round>血压</el-button>
        <el-button round>血脂</el-button>
      </el-row>
      <el-row>
        <el-button round>阴阳</el-button>
        <el-button round>止咳</el-button>
        <el-button round>消食</el-button>
      </el-row>
      <el-row>
        <el-button round>防脱</el-button>
        <el-button round>补气</el-button>
        <el-button round>安神</el-button>
      </el-row>
      <el-row>
        <el-button round>活血</el-button>
        <el-button round>排毒</el-button>
        <el-button round>清热</el-button>
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
