<template>
  <div>
    <el-row>
      <el-col :span="24" class="banner">
        <el-row type="flex"  justify="center">
          <el-col :span="18" class="datas">
            <el-row>
              <el-col :span="4" class="datas"><img src="../../../static/images/userpic1.jpg" class="photo"></el-col>
              <el-col :span="20" class="datas"><span class="username">您好！{{username}}
                <!--<el-button icon="el-icon-edit" style="width: 25px;height: 25px"></el-button>-->
              </span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
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
  .photo{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-height: 120px;
    max-width: 120px;
  }

  .banner{
    background-image: url("../../../static/images/userbanner4.jpg");
    background-size: 100% 200%;
  }
  .username{
    position: absolute;
    top: 40%;
  }


</style>
