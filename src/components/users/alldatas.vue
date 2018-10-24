<template>
  <div >
    <el-row>
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20">
<!--        <ul id="menu">
          <li>我的主页</li>
          <li>测试体质</li>
          <li>我的收藏</li>
          <li>我的贴子</li>
          <li>我的信息</li>
        </ul>-->
        <el-button-group >
        <el-button type="primary" icon="el-icon-date" @click="usershome">我的主页</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="usersbodydata">测试体质</el-button>
        <el-button type="primary" icon="el-icon-star-on" @click="userscollections">我的收藏</el-button>
        <el-button type="primary" icon="el-icon-message" @click="userscards">我的贴子</el-button>
        <el-button type="primary" icon="el-icon-tickets" @click="usersarticals">我的文章</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="usersidentity">我的信息</el-button>
      </el-button-group>
      </el-col>
    </el-row>

    <div class="xian"></div>
    <router-view class="myself"></router-view>
  </div>

</template>

<script>
  export default {
    name: "alldatas",
    data() {
      return {
        tabPosition: 'top'
      };
    },
    methods: {
      usershome() {
        this.$router.push({ path: '/usershome/' + this.$store.state.data1})
      },
      usersarticals() {
        this.$router.push({ path: '/usershome/usersarticals/' + this.$store.state.data1})
      },
      userscards() {
        this.$router.push({ path: '/usershome/userscards/' + this.$store.state.data1})
      },
      userscollections() {
        this.$router.push({ path: '/usershome/usercollection/' + this.$store.state.data1})
      },
      usersbodydata() {
        this.$router.push({ path: '/usershome/userbodydata/' + this.$store.state.data1})
      },
      usersidentity() {
        this.$router.push({ path: '/usershome/useridentity/' + this.$store.state.data1})
      }
    }
  }


</script>

<style scoped>
  .xian{
    width: 100%;
    height: 30px;
  }
  #menu{
    font-size: 18px;
    font-weight: bold;
  }
  #menu li {
    text-decoration: none;
    list-style: none;
    float: left;

  }
</style>
