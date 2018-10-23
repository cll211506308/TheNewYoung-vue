<template>
    <div class="login">

      <el-row v-if="show1">
        <el-col :span="18" :offset="3"><div>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">登录</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
              <el-button type="primary"><router-link to="setUp">还没账号？去注册</router-link></el-button>
            </el-form-item>
          </el-form>
        </div></el-col>
      </el-row>

      <el-row v-if="show1">
        <el-col :span="18" :offset="3"><div>
          <div v-if="show2" @click="tuichu">您已登录,点击退出</div>
        </div></el-col>
      </el-row>

    </div>
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
            age: ''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods:{
        tuichu(){
          sessionStorage.clear()
          window.location.href = '/login'
        },
        submitForm() {
          let that = this;
          $.post('http://127.0.0.1:3000/users/login',{userName:this.ruleForm2.age,userPwd:this.ruleForm2.pass},function(data){
            if (data.data.length == 0){
              that.$message.error('用户名或密码错误');
            }
            else {
              that.$message({
                message: '登录成功,即将跳转',
                type: 'success'
              });
              sessionStorage.setItem('userId',data.data[0].userid);//设置session
              setTimeout(() => {
                window.location.href = '/'
              }, 500);

            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      computed:{
          show1:function () {
            if(this.$store.state.data1 == null){
              return true
            }
            else {
              return false
            }
          },
        show2:function () {
          if(this.$store.state.data1 == null){
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

</style>
