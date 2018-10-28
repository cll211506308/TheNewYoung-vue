<template>
  <div>
    <h2 style="text-align: center;color: #696969;">热门标签<small style="color: red">HOT</small></h2>
    <div style="margin-top: 20px">
      <router-link to="/search/血糖"><el-button>血糖</el-button></router-link>
      <router-link to="/search/血压"><el-button>血压</el-button></router-link>
      <router-link to="/search/血脂"><el-button>血脂</el-button></router-link>
      <router-link to="/search/止咳润肺"><el-button>止咳润肺</el-button></router-link>
      <router-link to="/search/养胃"><el-button>健胃消食</el-button></router-link>
      <router-link to="/search/脱发"><el-button>防脱固发</el-button></router-link>
      <router-link to="/search/补气安神"><el-button>补气安神</el-button></router-link>
      <router-link to="/search/活血化瘀"><el-button>活血化瘀</el-button></router-link>
      <router-link to="/search/排毒"><el-button>排毒养颜</el-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "youngLifeClass"
}
</script>

<style scoped>
  button{
    margin-top: 2px;
    border-color: orangered;
    color: darkred;
  }
  button:hover{
    background-color: orangered;
    color: white;
  }
</style>
