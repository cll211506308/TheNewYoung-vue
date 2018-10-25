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

        <!--头像-->
        <span>请上传头像</span>
        <input type="file" name="avatar"
               @change="changeImage($event)"
               accept="image/gif,image/jpeg,image/jpg,image/png"
               ref="avatarInput"
               multiple>

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
          age: '',
          mydata:'',
          upath:'' //保存选中的文件
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

            if(!this.upath){
              this.$message({
                message: '请上传头像',
                type: 'warning'
              });
            }
            else {

              this.$axios.get('users/judgeName/' + this.ruleForm2.age).then(
                ((res)=>{
                  if(res.data.data.length != 0){
                    this.$message.error('用户名已存在,请重新输入');
                  }
                  else {

                    var zipFormData = new FormData();
                    //依次添加多个文件
                    for(var i = 0 ; i< this.upath.length ; i++){
                      zipFormData.append('filename', this.upath[i]);
                    }
                    //添加其他的表单元素
                    zipFormData.append('userName',this.ruleForm2.age)
                    zipFormData.append('userPwd',this.ruleForm2.pass)
                    let config = { headers: { 'Content-Type': 'multipart/form-data' } };
                    this.$axios.post('friends/upTouxiang', zipFormData,config)
                      .then(function (response) {

                        if(response.data == 1){
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
              ).catch(err=>{console.log(err)})


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

</style>
