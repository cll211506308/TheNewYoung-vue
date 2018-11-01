<template>
  <el-row
    style="height: 80px; line-height: 80px; background: url('../../../static/images/nav2.jpg');">
    <el-col
      :span="20"
      :offset="2"
      style="font-size: 1.25em; font-weight:bold; color: #2c2c2c">
      <el-row>
        <el-col :span="3">
          <img src="../../../static/images/LOGO.png" alt="" class="LOGO">
        </el-col>
        <el-col :md="18" :sm="22" :offset="5" class="hidden-sm-and-down nav">
          <router-link tag="li" to="/" active-class="active123" exact>首 页</router-link>
          <router-link tag="li" to="/youngLife" active-class="active123">养生堂</router-link>
          <router-link tag="li" to="/foods" active-class="active123">营养饮食</router-link>
          <router-link tag="li" to="/fit" active-class="active123">健身课堂</router-link>
          <router-link tag="li" to="/friends" active-class="active123">Young友圈</router-link>
        </el-col>
        <el-col :md="5" :offset="2" style="position:absolute; left:61%; top: -2px;" class="hidden-md-and-down">
          <el-input
            placeholder="请输入内容..."
            v-model="input10"
            clearable>
          </el-input>
          <a :href="'/search/'+input10">
            <i class="header-icon el-icon-search" style="color:#2c2c2c; font-weight:bold;position:absolute;top:50%;margin-top: -8px; right: -38px"></i>
          </a>
        </el-col>
        <el-col :md="1" class="hidden-sm-and-down">
          <div v-if="isLogin">
            <router-link tag="li" to="/login" style="font-size: 15px">登 录</router-link>
          </div>
          <div v-if="!isLogin">
            <el-row>
              <el-col :span="18" class="dropdown1">
                <router-link tag="li" to="/usershome"><img src="../../../static/images/person.png" style="width: 21px;height: 21px; position: relative;top: 3px;" alt=""></router-link>
                <div class="dropdown-content1">
                  <p style="height: 90px;line-height: 90px"><img v-bind:src="this.$store.state.picurl+data2.headPic" alt="" style="height: 80px;width: 80px;border-radius: 40px;margin-top: 10px;margin-bottom: 10px;color: whitesmoke"></p>
                  <p>Hi,{{userName}}!</p>
                  <router-link tag="p" to="/usershome" style="cursor: pointer" class="pg">个人中心</router-link>
                  <hr style="color:darkgray; width: 150px;margin:auto auto">
                  <p style="cursor: pointer" @click="tuichu" class="pg">退出登录</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="2" :offset="22" class="hidden-md-and-up">
          <el-row>
            <el-col :span="18" class="dropdown1">
              <router-link tag="li" to="" ><img src="../../../static/images/navicon.png" alt="导航" class="navicon"></router-link>
              <div class="dropdown-content2">
                <router-link tag="p" to="/" style="cursor: pointer" class="pg">首 页</router-link>
                <router-link tag="p" to="/youngLife" style="cursor: pointer" class="pg">养生堂</router-link>
                <router-link tag="p" to="/foods" style="cursor: pointer" class="pg">营养饮食</router-link>
                <router-link tag="p" to="/fit" style="cursor: pointer" class="pg">健身课堂</router-link>
                <router-link tag="p" to="/friends" style="cursor: pointer" class="pg">Young友圈</router-link>
                <hr style="color:darkgray; width: 100px;margin:auto auto">
                <div v-if="isLogin">
                  <router-link tag="p" to="/login" style="cursor: pointer;font-size: 15px" class="pg">登 录</router-link>
                </div>
                <div v-if="!isLogin">
                  <router-link tag="p" to="/usershome" style="cursor: pointer" class="pg"><img src="../../../static/images/person.png" style="width: 21px;height: 21px; position: relative;top: 5px;" alt=""></router-link>
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
        userId :this.$store.state.data1,
        data2:''

      };
    },
    created() {
      this.$axios.get('users/username/'+this.userId).then(
        ((res) => {
          this.userName = res.data.data[0].userName
        })
      ).catch(err => {
        console.log(err)
      });

      this.$axios.get('users/username/' + this.$store.state.data1).then(
        ((res) => {
          this.data2 = res.data.data[0];
        })
      ).catch(err => {
        console.log(err)
      })

    },
    methods: {
      tuichu() {
        sessionStorage.clear();
        window.location.href = '/login'
      },
      change(){
        let lis = document.getElementById()
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
    transform: scale(1.05);
  }

  .navicon{
    position: relative;
    top: 10px;
  }

  li {
    margin-right: 25px;
    text-align: center;
    list-style: none;
    float: left;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 77px;

  }

  li:hover{
    transform: scale(1.05);
  }

  .dropdown1 {
    position: relative;
    display: inline-block;
  }

  .dropdown-content1 {
    display: none;
    position: absolute;
    top: 80px;
    left: -78px;
    background: linear-gradient(to top, rgba(232, 223, 181, 1) 0%,rgba(232, 223, 181, 0.6) 100%);
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
    top: 80px;
    left: -45px;
    background: linear-gradient(to top, rgba(232, 223, 181, 1) 0%,rgba(232, 223, 181, 0.6) 100%);
    width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    border-radius: 5px;
  }

  .dropdown1:hover .dropdown-content2 {
    display: block;
  }
  .LOGO{
    height: 53px;
    width: 180px;
    position:absolute;
    top: 12px;

  }

  .active123{
    border-bottom: 4px solid orangered;
    color:orangered;
  }
</style>
