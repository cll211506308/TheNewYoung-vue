<template>
  <div style="margin-top: -20px">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#FF7F24">
      <el-menu-item index="1"><router-link to="/fit" style="text-decoration: none;">全部</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/fit/someFit1" style="text-decoration: none;">减脂</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/fit/someFit2" style="text-decoration: none;">增肌</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/fit/someFit3" style="text-decoration: none;">力量</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/fit/someFit4" style="text-decoration: none;">塑形</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/fit/someFit5" style="text-decoration: none;">核心</router-link></el-menu-item>
    </el-menu>
    <div id="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fitIntro",
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
