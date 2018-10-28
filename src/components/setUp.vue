<template>
  <el-row class="setUp">
    <el-row type="flex" justify="center">
      <el-col :md="10" :sm="20" class="loginCard animated slideInLeft" style="padding: 15px">
        <el-row>
          <p class="log">注 册</p>
          <router-link to="login" class="toSet">已有账号？去<span style="color:orangered;">登录</span></router-link>
        </el-row>
        <el-row>
          <div class="heng"></div>
        </el-row>
        <el-col :span="20" v-if="dis">
          <el-row style="margin-bottom: 25px">
            <el-col :span="20" :offset="2">
              <span style="margin-right: 40px">请上传头像</span>
              <img src="../../static/images/keys.png" alt="" class="keys">
              <input type="file" name="avatar"
                     @change="changeImage($event)"
                     accept="image/gif,image/jpeg,image/jpg,image/png"
                     ref="avatarInput"
                     multiple>
            </el-col>
          </el-row>

          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="用户名" prop="age">
              <el-input v-model.number="ruleForm2.age" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码,至少6位"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="8" :offset="8">
                <el-button type="primary" @click="submitForm('ruleForm2')" class="btn">提 交</el-button>
                <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="18" :offset="3" v-if="dis1" style="margin-bottom: 30px">
          <div style="font-size: 18px; font-weight: bold">
            <img src="../../static/images/success.png" alt="" class="success">
            注册成功！欢迎加入新Young生！
          </div>
        </el-col>


      </el-col>
    </el-row>


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
        setTimeout(() => {
          // if (!Number.isInteger(value)) {
          //   callback(new Error('请输入数字值'));
          // } else {
          //   if (value < 18) {
          //     callback(new Error('必须年满18岁'));
          //   } else {
          //     callback();
          //   }
          // }
          callback();
        }, 1);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        active: 0,
        dis: true,
        dis1: false,
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          mydata: '',
          upath: '' //保存选中的文件
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {

            if (!this.upath) {
              this.$message({
                message: '请上传头像',
                type: 'warning'
              });
            }
            else if(this.ruleForm2.pass.length <= 5){
              this.$message({
                message: '密码至少6位',
                type: 'warning'
              });
            }
            else {

              this.$axios.get('users/judgeName/' + this.ruleForm2.age).then(
                ((res) => {
                  if (res.data.data.length != 0) {
                    this.$message.error('用户名已存在,请重新输入');
                  }
                  else {

                    var zipFormData = new FormData();
                    //依次添加多个文件
                    for (var i = 0; i < this.upath.length; i++) {
                      zipFormData.append('filename', this.upath[i]);
                    }
                    //添加其他的表单元素
                    zipFormData.append('userName', this.ruleForm2.age)
                    zipFormData.append('userPwd', this.ruleForm2.pass)
                    let config = {headers: {'Content-Type': 'multipart/form-data'}};
                    this.$axios.post('friends/upTouxiang', zipFormData, config)
                      .then(function (response) {

                        if (response.data == 1) {
                          that.$message({
                            message: '恭喜你，注册成功',
                            type: 'success'
                          });
                          that.active++
                          that.dis = false
                          that.dis1 = true
                        }
                        else {

                        }
                      });


                    // $.post('http://127.0.0.1:3000/users/setUp',{userName:this.ruleForm2.age,userPwd:this.ruleForm2.pass},function(data2){
                    //

                    // })
                  }
                })
              ).catch(err => {
                console.log(err)
              })


            }


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeImage(e) {
        this.upath = e.target.files;
      }
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

  .toSet {
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

  .setUp {
    height: 530px;
    width: 100%;
    background: url("../../static/images/loginbg1.jpg");
    background-size: 100% 100%;
  }

  .loginCard {
    margin-top: 55px;
    border-radius: 15px;
    background: gainsboro;
    opacity: 0.8;
  }

  .loginCard:hover {
    box-shadow: 0px 0px 10px 2px #aaa;
  }

  .keys{
    width: 16px;
    height: 16px;
    position:absolute;
    margin-top: 4px;
    margin-left: -39px;
  }

  .success{
    margin-right: 20px;
    position:relative;
    top: 10px;
  }
</style>
