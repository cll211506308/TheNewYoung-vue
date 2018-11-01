<template>
  <div >
    <el-row type="flex"  justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20" >
         <div class="banner">
           <div class="users">
             <div class="userphoto">
             <img v-bind:src="this.$store.state.picurl+data2.headPic" alt="">
           </div>
             <div class="datas">
               <span>&nbsp;&nbsp;&nbsp;您好！{{username}}</span><br>
             </div>
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
    background-size: 100% 280px;
    background-image: url("../../../static/images/userbg18.jpg");
    width: 100%;
    height: 280px;
    margin-top: 20px;
    position: relative;
  }
  .userphoto{
    width: 140px;
    height: 140px;
    float: left;

  }
  .userphoto img{
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  .datas{
    width: 200px;
    height: 140px;
    font-size: 18px;
    float: left;
    text-align: center;
    line-height: 140px;
  }
.users{
  position:absolute;
  top: 30%;
  left: 15%;
}

</style>
