<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-row style="margin-bottom: 20px">
        <h2>热门帖子
          <small> Subtext for header</small>
        </h2>
      </el-row>
      <el-row
           style="background: url('../../../static/images/bg1.png'); width: 100%; height: 350px; background-size:100% 350px; ">
        <el-col :span="20" :offset="2" style="margin-top: 40px">
          <el-tabs style="height: 200px;">
            <el-tab-pane label="热 门" >热 门</el-tab-pane>
            <el-tab-pane label="养 生">养 生</el-tab-pane>
            <el-tab-pane label="美 食">美 食</el-tab-pane>
            <el-tab-pane label="健 身">健 身</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
  </el-row>




</template>

<script>
  export default {
    name: "hotPost"
  }
</script>

<style scoped>
  el-tab-pane{
    font-weight: bold;
    font-size: 20px;
  }
  h3 {
    font-weight: bold;
  }

  small {
    margin-left: 20px;
  }

</style>
