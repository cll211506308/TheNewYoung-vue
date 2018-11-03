<template>
  <div>
    <h2 style="text-align: center;color: #2c2c2c;">热门标签 <small style="color: red">HOT</small></h2>
    <div style="margin-top: 20px">
      <router-link to="/search/血糖" ><el-tag class="hotLabel">血糖</el-tag></router-link>
      <router-link to="/search/血压" ><el-tag type="success" class="hotLabel">血压</el-tag></router-link>
      <router-link to="/search/血脂" ><el-tag type="info" class="hotLabel">血脂</el-tag></router-link>
      <router-link to="/search/止咳润肺" ><el-tag type="warning" class="hotLabel">止咳润肺</el-tag></router-link>
      <router-link to="/search/养胃" ><el-tag type="danger" class="hotLabel">养胃</el-tag></router-link>
      <router-link to="/search/脱发" ><el-tag class="hotLabel">脱发</el-tag></router-link>
      <router-link to="/search/补气安神" ><el-tag type="success" class="hotLabel">补气安神</el-tag></router-link>
      <router-link to="/search/活血化瘀" ><el-tag type="info" class="hotLabel">活血化瘀</el-tag></router-link>
      <router-link to="/search/抗癌" ><el-tag type="warning" class="hotLabel">抗癌</el-tag></router-link>
      <router-link to="/search/排毒" ><el-tag type="danger" class="hotLabel">排毒</el-tag></router-link>
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

  .hotLabel{
    margin-right: 5px;
    margin-bottom: 15px;
  }

  .hotLabel:hover{
    transform: scale(1.1);
  }
</style>
