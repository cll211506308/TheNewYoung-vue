<template>
  <div>
    <!--<h2>这是关于{{sort}}的健康饮食的文章</h2>-->
    <router-link to="/artical/4">
      <div class="content">
        <img src="http://img3.imgtn.bdimg.com/it/u=3971964603,2168204668&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/4">
      <div class="content">
        <img src="http://img3.imgtn.bdimg.com/it/u=3971964603,2168204668&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/4">
      <div class="content">
        <img src="http://img3.imgtn.bdimg.com/it/u=3971964603,2168204668&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/4">
      <div class="content">
        <img src="http://img3.imgtn.bdimg.com/it/u=3971964603,2168204668&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/4">
      <div class="content">
        <img src="http://img3.imgtn.bdimg.com/it/u=3971964603,2168204668&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: "someFit",
    // data () {
    //     return {
    //       sort:this.$route.params.sort
    //     }
    //   }
  }
</script>

<style scoped>
  .content{
    width: 90%;
    height: 180px;
    border: 2px solid red;
    float: left;
    margin-top: 10px;
  }
  img{width: 50%;height: 100%;}
  .page{
    margin-left:auto;
    width: 82%;
    margin-top: 30px;
    float: left;
  }
</style>
