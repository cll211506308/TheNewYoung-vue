<template>
  <div class="bg">
    <el-row type="flex" justify="center"><el-col :span="24"><user-basicdata></user-basicdata></el-col></el-row>
    <el-row type="flex" justify="center"><el-col :span="20"><users-alldatas></users-alldatas></el-col></el-row>
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
      'user-basicdata': basicdata,
      'users-alldatas': alldatas,
      'users-collections': usercollections,
      'users-articals': usersarticals,
      'users-cards': userscards,
    }
  }
</script>

<style scoped>
  .bg{
    background-color: whitesmoke;
    min-height: 800px;
  }
  .bannerimg img{
    width: 100%;
    height: 300px;
  }
</style>
