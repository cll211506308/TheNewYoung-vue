<template>
  <div>
    <el-container>
      <el-aside width="20%" height="50%"><div class="userpic">头像</div></el-aside>
      <el-main>
        <h3 class="username">用户名：{{username}}</h3>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "basicdata",
      data(){
          return {
            username:null
          }
      },
      created(){
        this.$axios.get('users/username/1').then(
          ((res)=>{this.username = res.data.data[0].username})
        ).catch(err=>{console.log(err)})
      }
    }
</script>

<style scoped>
  .userpic{
    background: aqua;
    position:relative;
    width: 80%;
    height: 80%;
    left:10%;
    top: -40%;
  }

</style>
