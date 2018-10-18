<template>
    <el-row type="flex" justify="center">
      <el-col :span="22">
        <div v-for="o in 4" :key="o">
          <el-card class="box-card">
            <div  class="text item">
              {{'用户发表帖子'+o}}
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-delete"></el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
</template>


<script>
    export default {
        name: "userpublish"
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .box-card {
    width: 100%;
  }
</style>
