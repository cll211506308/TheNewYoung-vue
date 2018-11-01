<template>
  <div style="margin-top: -20px">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#FF7F24">
      <el-menu-item index="1"><router-link to="/youngLife" style="text-decoration: none;font-weight: bold;font-size: 17px">全 部</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/youngLife/someYoungLife1" style="text-decoration: none;font-weight: bold;font-size: 16px">婴幼儿</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/youngLife/someYoungLife2" style="text-decoration: none;font-weight: bold;font-size: 16px">青少年</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/youngLife/someYoungLife3" style="text-decoration: none;font-weight: bold;font-size: 16px">中老年</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/youngLife/someYoungLife4" style="text-decoration: none;font-weight: bold;font-size: 16px">男性专区</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/youngLife/someYoungLife5" style="text-decoration: none;font-weight: bold;font-size: 16px">女性专区</router-link></el-menu-item>
    </el-menu>
    <div id="show"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "youngLifeIntro",
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
