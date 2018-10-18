<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <div class="page-header">
        <h3>热门帖子
          <small> Subtext for header</small>
        </h3>
      </div>
      <div class="col-sm-12"
           style="background: url('../../../static/images/bg1.png'); width: 100%; height: 350px; background-size:100% 350px; ">
        <div class="col-sm-offset-1 col-sm-10" style="margin-top: 35px">
          <el-tabs :tab-position="bottom" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-col>
  </el-row>




</template>

<script>
  export default {
    name: "hotPost"
  }
</script>

<style scoped>
  h3 {
    font-weight: bold;
  }

  small {
    margin-left: 20px;
  }

</style>
