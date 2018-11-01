<template>
  <div>
    <h2>最强<span style="color: orangered">Young</span>友</h2>
    <el-carousel :interval="4000" type="card" style="margin-top: 10px">
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
        {id:0, idView:'./static/images/sowing0.jpg'},
        {id:1, idView:'./static/images/sowing1.jpg'},
        {id:2, idView:'./static/images/sowing2.jpg'},
        {id:3, idView:'./static/images/sowing3.jpg'},
        {id:4, idView:'./static/images/sowing4.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
  h2{
    text-align: center;
    color: #2c2c2c;
    width: 100%;
    height: 50px;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
