<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-carousel indicator-position="outside" height="400px">
        <el-carousel-item v-for="(item,index) in dating" :key="index">
          <img :src="item.src" height="100%" width="100%">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "banner1",
    data(){
      return {
        dating:[
          {src:'../../../static/images/banner1.jpg'},
          {src:'../../../static/images/banner2.jpg'},
          {src:'../../../static/images/banner3.jpg'},
          {src:'../../../static/images/banner4.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
