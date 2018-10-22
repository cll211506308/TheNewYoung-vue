<template>
  <div>
    <el-button-group>
        <el-button type="primary" icon="el-icon-date" @click="usershome">我的主页</el-button>
        <el-button type="primary" icon="el-icon-tickets" @click="usersarticals">我的文章</el-button>
        <el-button type="primary" icon="el-icon-message" @click="userscards">我的贴子</el-button>
        <el-button type="primary" icon="el-icon-star-on" @click="userscollections">我的收藏</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="usersbodydata">测试体质</el-button>

    </el-button-group>
    <div class="xian"></div>
    <router-view class="myself"></router-view>
  </div>

</template>

<script>
    export default {
        name: "alldatas",
      methods: {
        usershome() {
          this.$router.push({ path: '/users/usershome/' + this.$store.state.data1})
        },
        usersarticals() {
          this.$router.push({ path: '/users/usersarticals/' + this.$store.state.data1})
        },
        userscards() {
          this.$router.push({ path: '/users/userscards/' + this.$store.state.data1})
        },
        userscollections() {
          this.$router.push({ path: '/users/usercollection/' + this.$store.state.data1})
        },
        usersbodydata() {
          this.$router.push({ path: '/users/userbodydata/' + this.$store.state.data1})
        },
      }
    }


</script>

<style scoped>
.xian{
  width: 100%;
  height: 30px;
}
</style>
