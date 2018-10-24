<template>
  <div >
    <el-row type="flex"  justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20" >
         <div class="banner">
             <div class="userphoto"><img src="../../../static/images/user1.jpg" alt=""><span>&nbsp;&nbsp;&nbsp;您好！{{username}}</span></div>
        </div>
      </el-col>
    </el-row>
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
    mounted(){
      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{this.username = res.data.data[0].username})
      ).catch(err=>{console.log(err)})
    }
  }
</script>

<style scoped>
  .banner{
    background: center;
    background-size: 100% 200px;
    background-image: url("../../../static/images/userbanner4.jpg");
    width: 100%;
    height: 200px;
    margin-top: 15px;
  }
  .userphoto{
    position: relative;
    left: 5%;
    top:20%
  }
  .userphoto img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

</style>
