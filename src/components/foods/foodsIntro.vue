<template>
  <div style="margin-top: -20px">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#FF7F24">
      <el-menu-item index="1"><router-link to="/foods" style="text-decoration: none;font-weight: bold;font-size: 17px;">全 部</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/foods/someFoods1" style="text-decoration: none;font-weight: bold;font-size: 16px;">热门菜谱</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/foods/someFoods2" style="text-decoration: none;font-weight: bold;font-size: 16px;">常见食材</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/foods/someFoods3" style="text-decoration: none;font-weight: bold;font-size: 16px;">营养搭配</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/foods/someFoods4" style="text-decoration: none;font-weight: bold;font-size: 16px;">三 餐</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/foods/someFoods5" style="text-decoration: none;font-weight: bold;font-size: 16px;">素食者专区</router-link></el-menu-item>
    </el-menu>
    <div id="show"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "foodsIntro",
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  #show{
    float: left;
    width: 100%;
    margin-top: 10px;
  }
</style>
