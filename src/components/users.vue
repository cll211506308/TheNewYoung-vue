<template>
  <div>
      <div class="userbg">
        <div class="container">
            <el-row type="flex"  justify="center">
               <el-col :span="21"><div class="basicdata"><user-basicdata>显示用户基本信息</user-basicdata></div></el-col>
            </el-row>
            <el-row type="flex"  justify="center">
               <el-col :span="21"><div class="alldata"><users-alldatas>显示用户全部信息</users-alldatas></div></el-col>
            </el-row>
        </div>
  </div>
  </div>
</template>
<script>
  import alldatas from './users/alldatas';
  import usercollections from './users/usercollections';
  import usersarticals from './users/usersarticals';
  import userscards from './users/userscards';
  import basicdata from './users/basicdata.vue'
  export default {
    name: 'users',
    components: {

       'user-basicdata':basicdata,
       'users-alldatas':alldatas,
      'users-collections':usercollections,
      'users-articals':usersarticals,
       'users-cards':userscards,
     }
  }
</script>

<style scoped>
  .userbg {
    width: 100%;
    min-height: 800px;
    overflow: hidden;
    margin: 0 auto;
    background-image: url("../../static/images/userbg.jpg");
    background-position:center 0 ;
    background-repeat: no-repeat;
    position: relative;
  }
  .basicdata{
    width: 87%;
    height: 100px;
    background-color: whitesmoke;
    position: absolute;
    top:300px;
  }
  .alldata{
    width: 87%;
    min-height: 300px;
    background: white;
    position: absolute;
    top: 400px;
    border-top: gainsboro 2px solid;
  }

</style>
