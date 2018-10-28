<template>
  <el-row class="login">
    <el-col :span="10" :offset="7" class="loginCard animated slideInLeft" style="padding: 15px">
      <el-row>
        <p class="log">登 录</p>
        <router-link to="setUp" class="toSet">还没账号？去<span style="color:orangered;">注册</span></router-link>
      </el-row>
      <el-row>
        <div class="heng"></div>
      </el-row>
      <el-row v-if="show1">
        <el-col :span="20">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm2.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" style="margin-bottom: 30px">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="8" :offset="8">
                <el-button type="primary" @click="submitForm()" class="btn">登 录</el-button>
              </el-col>
              <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <div>
            <div v-if="show2" @click="tuichu">您已登录,点击退出</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>


</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {

          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          name: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      tuichu() {
        sessionStorage.clear()
        window.location.href = '/login'
      },
      submitForm() {
        let that = this;
        $.post('http://127.0.0.1:3000/users/login', {
          userName: this.ruleForm2.name,
          userPwd: this.ruleForm2.pass
        }, function (data) {
          if (data.data.length == 0) {
            that.$message.error('用户名或密码错误');
          }
          else {
            that.$message({
              message: '登录成功,即将跳转',
              type: 'success'
            });
            sessionStorage.setItem('userId', data.data[0].userid);//设置session
            setTimeout(() => {
              if(sessionStorage.getItem('url') == null){
                window.location.href = '/'
              }
              else {
                window.location.href = '/'+sessionStorage.getItem('url')
              }
            }, 500);

          }
        })
      }
    },
    computed: {
      show1: function () {
        if (this.$store.state.data1 == null) {
          return true
        }
        else {
          return false
        }
      },
      show2: function () {
        if (this.$store.state.data1 == null) {
          return false
        }
        else {
          return true
        }
      },

    }
  }
</script>

<style scoped>
  .log {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 50px;
    margin-bottom: 10px;
    margin-top: 10px;

  }

  .toSet{
    text-decoration: none;
    color: #2c2c2c;
    position: absolute;
    right: 50px;
    top: 25px;
  }

  .btn {
    width: 100px;
    text-align: center;
  }

  .heng {
    width: 85%;
    margin-right: auto;
    margin-left: auto;
    height: 10px;
    border-bottom: 2px solid orangered;
    margin-bottom: 25px;
  }

  .login {
    height: 530px;
    width: 100%;
    background: url("../../static/images/loginbg1.jpg");
    background-size: 100% 100%;
  }

  .loginCard {
    margin-top: 100px;
    border-radius: 15px;
    background: gainsboro;
    opacity: 0.8;
  }

  .loginCard:hover {
    box-shadow: 0px 0px 10px 2px #aaa;
  }
</style>
