<template>
  <el-row
    style="height: 80px; line-height: 80px; background: url('../../../static/images/nav4.jpg');background-size: 100% 80px">
    <el-col
      :span="18"
      :offset="3"
      style="font-size: 1.25em; font-weight:bold; color: #2c2c2c">
      <el-row>
        <el-col :span="2">
          <li>LOGO</li>
        </el-col>
        <el-col :md="16" :sm="20" class="hidden-sm-and-down">
          <router-link tag="li" to="/">首 页</router-link>
          <router-link tag="li" to="/youngLife">养生堂</router-link>
          <router-link tag="li" to="/foods">营养饮食</router-link>
          <router-link tag="li" to="/fit">健身课堂</router-link>
          <router-link tag="li" to="/friends">Young友圈</router-link>
        </el-col>
        <el-col :md="5" style="position:absolute; left:61%; top: -2px;" class="hidden-md-and-down">
          <el-input
            placeholder="search for..."
            v-model="input10"
            clearable>
          </el-input>
          <router-link :to="'/search/'+input10" target="_blank">
            <i class="header-icon el-icon-search" style="color:#2c2c2c; font-weight:bold;position:absolute;top:50%;margin-top: -8px; right: -38px"></i>
          </router-link>
        </el-col>
        <el-col :md="1" :offset="4" class="hidden-sm-and-down">
          <div v-if="isLogin">
            <router-link tag="li" to="/login">Login</router-link>
          </div>
          <div v-if="!isLogin">
            <el-row>
              <el-col :span="18" class="dropdown1">
                <router-link tag="li" to="/users"><img src="../../../static/images/person.png" style="width: 21px;height: 21px; position: relative;top: 5px;" alt=""></router-link>
                <div class="dropdown-content1">
                  <p style="height: 90px;line-height: 90px"><img src="../../../static/images/user1.jpg" alt="" style="height: 80px;width: 80px;border-radius: 40px;margin-top: 10px;margin-bottom: 10px;color: whitesmoke"></p>
                  <p>Hi,{{userName}}!</p>
                  <router-link tag="p" to="/users" style="cursor: pointer" class="pg">个人中心</router-link>
                  <hr style="color:darkgray; width: 150px;margin:auto auto">
                  <p style="cursor: pointer" @click="tuichu" class="pg">退出登录</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="2" :offset="20" class="hidden-md-and-up">
          <el-row>
            <el-col :span="18" class="dropdown1">
              <i class="el-icon-menu" style="position: absolute; top: 31px;left: -25px"></i>
              <router-link tag="li" to="" > nav</router-link>
              <div class="dropdown-content2">
                <router-link tag="p" to="/youngLife" style="cursor: pointer" class="pg">养生堂</router-link>
                <router-link tag="p" to="/foods" style="cursor: pointer" class="pg">营养饮食</router-link>
                <router-link tag="p" to="/fit" style="cursor: pointer" class="pg">健身课堂</router-link>
                <router-link tag="p" to="/friends" style="cursor: pointer" class="pg">Young友圈</router-link>
                <hr style="color:darkgray; width: 100px;margin:auto auto">
                <div v-if="isLogin">
                  <router-link tag="p" to="/login" style="cursor: pointer" class="pg">Login</router-link>
                </div>
                <div v-if="!isLogin">
                  <router-link tag="p" to="/users" style="cursor: pointer" class="pg"><img src="../../../static/images/person.png" style="width: 21px;height: 21px; position: relative;top: 5px;" alt=""></router-link>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "topCon1",
    data() {
      return {
        input10: '',
        userName: '',
        data: [],
        userId :this.$store.state.data1

      };
    },
    created() {
      this.$axios.get('users/username/'+this.userId).then(
        ((res) => {
          this.userName = res.data.data[0].username
        })
      ).catch(err => {
        console.log(err)
      })

    },
    methods: {
      tuichu() {
        sessionStorage.clear();
        window.location.href = '/login'
      }

    },
    computed: {
      isLogin: function () {
        if (this.$store.state.data1 === null) {
          return true
        }
        else {
          return false
        }
      },

    },

  }
</script>

<style scoped>
  p {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
  }

  .pg:hover{
    color:white;
    transform: scale(1.05);
  }

  li {
    margin-right: 22px;
    text-align: center;
    list-style: none;
    float: left;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  li:hover{
    color:white;
    transform: scale(1.05);
  }

  .dropdown1 {
    position: relative;
    display: inline-block;
  }

  .dropdown-content1 {
    display: none;
    position: absolute;
    top: 82px;
    left: -78px;
    background: linear-gradient(to top, rgba(209, 176, 118, 1) 0%,rgba(209, 176, 118, 0.6) 100%);
    width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    border-radius: 5px;
  }

  .dropdown1:hover .dropdown-content1 {
    display: block;
  }

  .dropdown-content2 {
    display: none;
    position: absolute;
    top: 82px;
    left: -45px;
    background: linear-gradient(to top, rgba(209, 176, 118, 1) 0%,rgba(209, 176, 118, 0.6) 100%);
    width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    border-radius: 5px;
  }

  .dropdown1:hover .dropdown-content2 {
    display: block;
  }

</style>
