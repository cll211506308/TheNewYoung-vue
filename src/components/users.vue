<template>
<!--  <div>
    <el-container>
      <el-aside width="200px">
        <div>
          <ul class="nav nav-pills">
            <router-link tag="li" active-class="active" role="presentation" to="/users/alldatas/2" exact><a>我的体质</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/users/usersarticals/2" ><a>我的文章</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/users/userscards/2" ><a>我的贴子</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/users/usercollection/2" ><a>我的收藏</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/userbodydata" ><a>体质数据填写</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/useridentity" ><a>身份认证</a></router-link>
          </ul>
          <router-view class="myself"></router-view>
        </div>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </div>-->

</template>
<script>
  import topCon from './index/topCon.vue';
  import alldatas from './users/alldatas';
  import usercollections from './users/usercollections';
  import usersarticals from './users/usersarticals';
  import userscards from './users/userscards';
  import bottomCon from './index/bottomCon.vue';
  export default {
    name: 'users',
    /*components: {
      'index-topCon': topCon,
      'users-alldatas':alldatas,
      'users-collections':usercollections,
      'users-articals':usersarticals,
      'users-cards':userscards,
      'index-bottomCon': bottomCon
    }*/
  }
</script>

<style scoped>
  .myself{
    width: 800px;
    border: 1px solid red;
  }
</style>
