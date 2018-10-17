<template>
  <div>
    <el-button-group>
      <router-link active-class="active" role="presentation" to="/users" exact>
        <el-button type="primary" icon="el-icon-date">我的主页</el-button>
      </router-link>
      <router-link active-class="active" role="presentation" to="/users/usersarticals/2">
        <el-button type="primary" icon="el-icon-tickets">我的文章</el-button>
      </router-link>
      <router-link active-class="active" role="presentation" to="/users/userscards/2">
        <el-button type="primary" icon="el-icon-message">我的贴子</el-button>
      </router-link>
      <router-link active-class="active" role="presentation" to="/users/usercollection/2">
        <el-button type="primary" icon="el-icon-star-on">我的收藏</el-button>
      </router-link>
      <router-link active-class="active" role="presentation" to="/users/userbodydata">
        <el-button type="primary" icon="el-icon-edit">测试体质</el-button>
      </router-link>
      <router-link active-class="active" role="presentation" to="/users/useridentity">
        <el-button type="primary" icon="el-icon-info">我的身份</el-button>
      </router-link>
    </el-button-group>
    <router-view class="myself"></router-view>
  </div>

</template>

<script>
    export default {
        name: "alldatas"
    }


</script>

<style scoped>

</style>
