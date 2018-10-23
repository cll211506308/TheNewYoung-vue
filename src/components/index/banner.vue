<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-carousel indicator-position="outside" >
        <el-carousel-item v-for="(item,index) in dating" :key="index">
          <img :src="item.src" class="banners">
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
          {src:'../../../static/images/banner5.jpg'},
          {src:'../../../static/images/banner6.jpg'},
          {src:'../../../static/images/banner7.jpg'},
          {src:'../../../static/images/banner9.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>
  .banners{
    width: 100%;
    height: 100%;
    min-height: 100px;
    max-height: 350px;
  }
</style>
