<template>
  <el-row
    style="height: 80px; line-height: 80px; background: #000009;">
    <el-col
      :span="18"
      :offset="3"
      style="font-size: 20px; font-weight:bold; color:#fff">
      <el-row>
        <el-col :span="2">
          <li>LOGO</li>
        </el-col>
        <el-col :span="12">
          <router-link tag="li" to="/">首 页</router-link>
          <router-link tag="li" to="/youngLife">养生堂</router-link>
          <router-link tag="li" to="/foods">营养饮食</router-link>
          <router-link tag="li" to="/fit">健身课堂</router-link>
          <router-link tag="li" to="/friends">Young友圈</router-link>
        </el-col>
        <el-col :span="6" style="position:absolute; left:61%; top: -2px;">
          <li>
            <el-input
              placeholder="search for..."
              v-model="input10"
              clearable>
            </el-input>
          </li>
        </el-col>
        <el-col :span="2" :offset="6">
          <router-link tag="li" to="/search" class="header-icon el-icon-search"
                       style="position:absolute;top:50%;margin-top: -9px;margin-left: 5px"></router-link>
        </el-col>
        <el-col :span="2" :offset="8">
          <div v-if="isLogin">
            <router-link tag="li" to="/login">Login</router-link>
          </div>
          <div v-if="!isLogin">
            <el-row>
              <el-col :span="18" id="dropdown">
                <router-link tag="li" to="/users">user</router-link>
                <div id="dropdown-content">
                  <p>HEAD</p>
                  <p>Hi,{{userName}}!</p>
                  <router-link tag="p" to="/users" style="cursor: pointer">个人中心</router-link>
                  <hr style="color:darkgray; width: 150px;margin:auto auto">
                  <p style="cursor: pointer" @click="tuichu">退出登录</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "topCon",
    data() {
      return {
        input10: '',
        userName: this.$store.state.data1,
      };
    },
    methods: {
      tuichu() {
        sessionStorage.clear();
        window.location.href = '/login'
      }

    },
    computed: {
      isLogin: function () {
        if(this.$store.state.data1 === null) {
          return true
        }
        else {
          return false
        }
      }
    }


  }
</script>

<style scoped>
  p {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
  }

  li {
    margin-right: 25px;
    text-align: center;
    list-style: none;
    float: left;
    cursor: pointer;
  }

  #dropdown {
    position: relative;
    display: inline-block;
  }

  #dropdown-content {
    display: none;
    position: absolute;
    top: 82px;
    left: -65px;
    background-color: rgba(0, 0, 0, 0.8);
    width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    border-radius: 5px;
  }

  #dropdown:hover #dropdown-content {
    display: block;
  }
</style>
