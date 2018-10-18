<template>
    <div class="login">
      <div class="s1">
        <form action="" method="post" v-if="show1">
          <p>用户名: <input type="text" name="userName" v-model="userName"/></p>
          <p>密码: <input type="password" name="userPwd" v-model="userPwd"/></p>
          <input type="button" value="登陆" @click="login" />
          <router-link to="setUp">去注册</router-link>
        </form>
        <div v-if="show2" @click="tuichu">您已登陆,点击退出</div>
      </div>

    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "login",
      data(){
          return {
            userName:null,
            userPwd:null
          }
      },
      methods:{
          login(){
            let that = this;
              $.post('http://127.0.0.1:3000/users/login',{userName:this.userName,userPwd:this.userPwd},function(data){
                if (data.data.length == 0){
                  alert('用户名或密码错误')
                }
                else {
                  alert('登陆成功')
                  sessionStorage.setItem('userId',data.data[0].userId);//设置session
                  window.location.href = '/'
                }
              })
            },
        tuichu(){
          sessionStorage.clear()
          window.location.href = '/login'
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
  .login{
    text-align: center;
  }
.s1{
  display: inline-block;
  margin-top: 50px;
  border: 1px solid red;
}
</style>
