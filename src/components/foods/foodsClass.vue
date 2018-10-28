<template>
  <div>
    <h2 style="text-align: center;color: #696969;">热门标签<small style="color: red">HOT</small></h2>
    <div style="margin-top: 20px">
      <router-link to="/search/减肥"><el-button>减肥</el-button></router-link>
      <router-link to="/search/丰胸"><el-button>丰胸</el-button></router-link>
      <router-link to="/search/清真"><el-button>清真</el-button></router-link>
      <router-link to="/search/补血"><el-button>补血</el-button></router-link>
      <router-link to="/search/补钙"><el-button>补钙</el-button></router-link>
      <router-link to="/search/补维生素"><el-button>补维生素</el-button></router-link>
      <router-link to="/search/食疗"><el-button>食疗</el-button></router-link>
      <router-link to="/search/汤粥"><el-button>汤粥</el-button></router-link>
      <router-link to="/search/甜品"><el-button>甜品</el-button></router-link>
      <router-link to="/search/火锅"><el-button>火锅</el-button></router-link>
      <router-link to="/search/烧烤"><el-button>烧烤</el-button></router-link>
      <router-link to="/search/异国料理"><el-button>异国料理</el-button></router-link>
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
</style>
