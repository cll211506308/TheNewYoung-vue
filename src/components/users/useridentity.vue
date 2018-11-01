<template>
  <el-row style="margin-bottom: 30px" :gutter="40" type="flex" justify="center">
    <!--<el-col :md="12" :sm="24">-->
      <!--<div class="block">-->
        <!--<el-carousel :interval="3000" height="300px">-->
          <!--<el-carousel-item v-for="(item,index) in dating" :key="index">-->
            <!--<img :src="item.src" class="banners">-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      <!--</div>-->
    <!--</el-col>-->
    <el-col :md="18" :sm="24">
      <el-card shadow="hover" style="border-radius: 15px">
        <el-col :span="22">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-row style="margin-bottom: 25px; margin-top: 10px">
              <el-col :span="20" :offset="2">
                <span style="margin-right: 20px">更改头像：</span><input type="file" name="avatar"
                                        @change="changeImage($event)"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        ref="avatarInput"
                                        multiple>
              </el-col>
            </el-row>


            <el-form-item label="用户名" prop="age">
              <el-input v-model="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="ruleForm2.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="出生日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="个性签名">
              <el-input v-model="ruleForm2.name"></el-input>
            </el-form-item>


            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-card>
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
        callback();
      };
      var validatePass = (rule, value, callback) => {
        var pattern = /^\S{6,12}$/g
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        else if (!pattern.test(value)) {
          callback(new Error('请输入6-12个非空白字符'))
        }
        else {
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
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '1',
          resource:'男',
          name:'',
          data1:'',
          upath:'',
          name1:'',

        },
        dating: [
          {src: '../../../static/images/banner5.jpg'},
          {src: '../../../static/images/userbg17.jpg'},
          {src: '../../../static/images/userbg8.jpg'},
          {src: '../../../static/images/fbg1.jpg'}
        ],
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
    created(){
      let that = this;
      this.$axios.get('/users/username/'+this.$store.state.data1).then(
        ((res)=>{
          this.ruleForm2.age = res.data.data[0].userName
          this.ruleForm2.name1 = res.data.data[0].userName
          // this.ruleForm2.pass = res.data.data[0].userPwd
          // this.ruleForm2.checkPass = res.data.data[0].userPwd
          this.ruleForm2.name = res.data.data[0].autograph
        })
      ).catch(err=>{console.log(err)})
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            let that = this;
            // 如果没有图片
            if (!this.ruleForm2.upath) {

              if(this.ruleForm2.age == this.ruleForm2.name1){

                $.post('http://127.0.0.1:3000/users/updateusers', {
                  userName: this.ruleForm2.age,
                  userPwd: this.ruleForm2.pass,
                  autograph: this.ruleForm2.name,
                  userId: this.$store.state.data1,
                  birthday: this.ruleForm2.data1,
                  sex: this.ruleForm2.resource
                }, function (data) {

                  that.$message({
                    message: '恭喜你，修改成功',
                    type: 'success'
                  });
                  setTimeout(() => {
                    location.reload()
                  }, 500);
                })
              }
              else {
                this.$axios.get('users/judgeName/' + this.ruleForm2.age).then(
                  ((res) => {

                    if (res.data.data.length != 0) {
                      this.$message.error('用户名已存在,请重新输入');
                    }
                    else {

                      $.post('http://127.0.0.1:3000/users/updateusers', {
                        userName: this.ruleForm2.age,
                        userPwd: this.ruleForm2.pass,
                        autograph: this.ruleForm2.name,
                        userId: this.$store.state.data1,
                        birthday: this.ruleForm2.data1,
                        sex: this.ruleForm2.resource
                      }, function (data) {

                        that.$message({
                          message: '恭喜你，修改成功',
                          type: 'success'
                        });
                        setTimeout(() => {
                          location.reload()
                        }, 500);
                      })
                    }

                  })
                ).catch(err => {
                  console.log(err)
                })

              }


            }


            //有图片
            else {

              if(this.ruleForm2.age == this.ruleForm2.name1){
                var zipFormData = new FormData();
                //依次添加多个文件
                for (var i = 0; i < this.ruleForm2.upath.length; i++) {
                  zipFormData.append('filename', this.ruleForm2.upath[i]);
                }
                //添加其他的表单元素
                zipFormData.append('userName', this.ruleForm2.age)
                zipFormData.append('userPwd', this.ruleForm2.pass)
                zipFormData.append('autograph',this.ruleForm2.name)
                zipFormData.append('userId',this.$store.state.data1)
                zipFormData.append('birthday',this.ruleForm2.data1)
                zipFormData.append('sex',this.ruleForm2.resource)
                let config = {headers: {'Content-Type': 'multipart/form-data'}};
                this.$axios.post('users/upTouxiang', zipFormData, config)
                  .then(function (response) {

                    that.$message({
                      message: '恭喜你，修改成功',
                      type: 'success'
                    });
                    setTimeout(() => {
                      location.reload()
                    }, 500);

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
                      for (var i = 0; i < this.ruleForm2.upath.length; i++) {
                        zipFormData.append('filename', this.ruleForm2.upath[i]);
                      }
                      //添加其他的表单元素
                      zipFormData.append('userName', this.ruleForm2.age)
                      zipFormData.append('userPwd', this.ruleForm2.pass)
                      zipFormData.append('autograph',this.ruleForm2.name)
                      zipFormData.append('userId',this.$store.state.data1)
                      zipFormData.append('birthday',this.ruleForm2.data1)
                      zipFormData.append('sex',this.ruleForm2.resource)
                      let config = {headers: {'Content-Type': 'multipart/form-data'}};
                      this.$axios.post('users/upTouxiang', zipFormData, config)
                        .then(function (response) {

                          that.$message({
                            message: '恭喜你，修改成功',
                            type: 'success'
                          });
                          setTimeout(() => {
                            location.reload()
                          }, 500);

                        });

                    }

                  })
                ).catch(err => {
                  console.log(err)
                })

              }


            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeImage(e) {
        this.ruleForm2.upath = e.target.files;
      }
    }
  }
</script>
<style scoped>
  .banners {
    width: 100%;
    height: 100%;
  }

</style>
