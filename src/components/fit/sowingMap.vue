<template>
  <div style="margin-top: 40px">
    <h2>最强Young友</h2><br>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src=item.idView>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "sowingMap",
    data(){
      return{
        imgList:[
          {id:0, idView:'./static/images/SowingPic0.jpg'},
          {id:1, idView:'./static/images/SowingPic1.jpg'},
          {id:2, idView:'./static/images/SowingPic2.jpg'},
          {id:3, idView:'./static/images/SowingPic3.jpg'},
          {id:4, idView:'./static/images/SowingPic4.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
