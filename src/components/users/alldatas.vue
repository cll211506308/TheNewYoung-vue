<template>
  <div>
    <span></span>
    <el-row>
      <el-col :span="24" id="menu">
        <el-row type="flex" justify="center">
          <el-col :span="22" class="menuli">
            <router-link tag="li" to="/usershome/' + this.$store.state.data1" exact>我的主页</router-link>
            <router-link tag="li" to="/usershome/userbodydata/' + this.$store.state.data1" active-class = "active"><a>测试体质</a></router-link>
            <router-link tag="li" to="/usershome/usercollection/' + this.$store.state.data1" active-class = "active">我的收藏</router-link>
            <router-link tag="li" to="/usershome/userscards/' + this.$store.state.data1" active-class = "active">我的贴子</router-link>
            <router-link tag="li" to="/usershome/useridentity/' + this.$store.state.data1" active-class = "active">我的信息</router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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

    }
  }
</script>
<style scoped>
  #menu{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    background: url("../../../static/images/fenge5.png") no-repeat;
    background-size: 100% 215%;
    position: relative;
  }
  #menu li {
    text-decoration: none;
    list-style: none;
    float: left;
    width: 20%;
    text-align: center;
    line-height: 60px;
    color: white;
    cursor: pointer;
  }
  #menu a{
    text-decoration: none;
    color: white;
  }
  #menu a:active{
    color: black;
  }
  span{
    display: block;
    height: 40px;
    width: 80px;
    background-image: url(../../../static/images/leaf.png);
    position: absolute;
    left: 0;
    top: 0;
  }
a{
  width: 80px;
  height: 40px;
  background-image: url("../../../static/images/leaf.png");
}


</style>
