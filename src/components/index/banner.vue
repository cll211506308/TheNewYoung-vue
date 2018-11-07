<template>
  <el-row style="margin-top: 20px">
    <el-col :span="20" :offset="2">
      <el-carousel :interval="3000"  class="banner" height="320px">
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
    data() {
      return {
        dating: [
          {src: '../../../static/images/banner5.jpg'},
          {src: '../../../static/images/userbg17.jpg'},
          {src: '../../../static/images/userbg8.jpg'},
          {src: '../../../static/images/fbg1.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>
  .banners {
    width: 100%;
    height: 100%;
  }

  .banner{
    height: 320px;
  }

  @media only screen and (max-width: 1300px){
    .banner{
      height: 270px;
    }
  }

  @media only screen and (max-width: 900px){
    .banner{
      height: 240px;
    }
  }

</style>
