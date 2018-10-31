<template>
  <div >
    <el-row type="flex"  justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20" >
         <div class="banner">
             <div class="userphoto">
               <img v-bind:src="this.$store.state.picurl+data2.headPic" alt="">
               <span>&nbsp;&nbsp;&nbsp;您好！{{username}}</span>
              <!-- <span>&nbsp;&nbsp;&nbsp;{{autograph}}</span>-->
             </div>
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
        username:null,
        data2:'',
        autograph:null
      }
    },
    mounted(){
      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{
          console.log(res.data)
          this.username = res.data.data[0].userName
        })
      ).catch(err=>{console.log(err)})
      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{
          console.log(res.data)
          this.autograph = res.data.data[0].autograph
        })
      ).catch(err=>{console.log(err)})
      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{
          this.data2 = res.data.data[0];
        })
      ).catch(err=>{console.log(err)}),
        this.$axios.get('users/username/'+this.$store.state.data1).then(
          ((res)=>{
            this.data2 = res.data.data[0];
            console.log(this.data2)
          })
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
