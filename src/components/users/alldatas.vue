<template>
  <div>
    <el-row>
      <el-col :span="24" id="menu">
        <el-row type="flex" justify="center">
          <el-col :span="22" class="menuli">
    <el-row>
            <router-link tag="li" to="/usershome/" active-class = "active2" exact>我的主页</router-link>
            <router-link tag="li" to="/usershome/userbodydata/" active-class = "active2" >测试体质</router-link>
            <router-link tag="li" to="/usershome/usercollection/" active-class = "active2" >我的收藏</router-link>
            <router-link tag="li" to="/usershome/userscards/" active-class = "active2"  >我的贴子</router-link>
            <router-link tag="li" to="/usershome/useridentity/" active-class = "active2" >我的信息</router-link>
        </el-row>
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
        tabPosition: 'top',
        activeClass:0
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
  .menuli{
    line-height: 60px;
    color: black;
    font-size: 17px;
    cursor: pointer;
  }
.active2{
  background: url("../../../static/images/leaf.png") no-repeat;
  background-position: 50% 5px;
  background-size:90px;
}

</style>
