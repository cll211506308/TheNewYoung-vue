<template>
      <div>
        <el-row :gutter="10">
          <el-col :span="18" :offset="3"><div>
            <el-steps :active="active" finish-status="success">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </div></el-col>
          <el-col :span="18" :offset="3"  v-if="dis"><div>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
            </el-form>
          </div></el-col>
          <el-col :span="18" :offset="3"  v-if="dis1"><div>恭喜注册成功，进行下一步</div></el-col>
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
          active:0,
          dis:true,
          dis1:false,
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: ''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          var that = this
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.get('users/judgeName/' + this.ruleForm2.age).then(
                ((res)=>{
                  if(res.data.data.length != 0){
                    alert('用户名已存在,请从新输入')
                  }
                  else {
                    $.post('http://127.0.0.1:3000/users/setUp',{userName:this.ruleForm2.age,userPwd:this.ruleForm2.pass},function(data2){

                      that.active++
                      that.dis = false
                      that.dis1 = true
                    })
                  }
                })
              ).catch(err=>{console.log(err)})
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
