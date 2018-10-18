<template>
  <div>
    <div class="userbg">
      <div >
        <el-row type="flex" justify="center">
          <el-col :span="18">
            <div class="basicdata">
              <user-basicdata></user-basicdata>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="18">
            <div class="alldata">
              <users-alldatas></users-alldatas>
            </div>
          </el-col>
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

      'user-basicdata': basicdata,
      'users-alldatas': alldatas,
      'users-collections': usercollections,
      'users-articals': usersarticals,
      'users-cards': userscards,
    }
  }
</script>

<style scoped>
  .userbg {
    width: 100%;
    height: 1200px;
    overflow: hidden;
    margin: 0 auto;
    background-image: url("../../static/images/userbg.jpg");
    background-position: center 0;
    background-repeat: no-repeat;
    position: relative;
  }

  .basicdata {
    width:75%;
    height: 100px;
    background-color: whitesmoke;
    position: absolute;
    top: 300px;
  }

  .alldata {
    width: 75%;
    background: white;
    position: absolute;
    top: 400px;
    border-top: gainsboro 2px solid;
  }

</style>
