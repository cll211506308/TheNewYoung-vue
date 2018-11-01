<template>
  <div>
    <h2 style="text-align: center;color: #2c2c2c;">热门标签 <small style="color: red">HOT</small></h2>
    <div style="margin-top: 20px">
      <router-link to="/search/减肥" target="_blank"><el-tag class="hotLabel">减肥</el-tag></router-link>
      <router-link to="/search/丰胸" target="_blank"><el-tag type="success" class="hotLabel">丰胸</el-tag></router-link>
      <router-link to="/search/清真" target="_blank"><el-tag type="info" class="hotLabel">清真</el-tag></router-link>
      <router-link to="/search/补血" target="_blank"><el-tag type="warning" class="hotLabel">补血</el-tag></router-link>
      <router-link to="/search/补钙" target="_blank"><el-tag type="danger" class="hotLabel">补钙</el-tag></router-link>
      <router-link to="/search/补维生素" target="_blank"><el-tag class="hotLabel">补维生素</el-tag></router-link>
      <router-link to="/search/食疗" target="_blank"><el-tag type="success" class="hotLabel">食疗</el-tag></router-link>
      <router-link to="/search/糖粥" target="_blank"><el-tag type="info" class="hotLabel">糖粥</el-tag></router-link>
      <router-link to="/search/火锅" target="_blank"><el-tag type="warning" class="hotLabel">火锅</el-tag></router-link>
      <router-link to="/search/排毒" target="_blank"><el-tag type="danger" class="hotLabel">排毒</el-tag></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "foodsClass"
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
</style>
