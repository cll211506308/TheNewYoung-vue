<template>
  <div>
    <!--<h2>这是关于{{sort}}的营养饮食文章</h2>-->
    <router-link to="/artical/2">
      <div class="content">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2307854856,2580089398&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/2">
      <div class="content">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2307854856,2580089398&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/2">
      <div class="content">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2307854856,2580089398&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/2">
      <div class="content">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2307854856,2580089398&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <router-link to="/artical/2">
      <div class="content">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2307854856,2580089398&fm=26&gp=0.jpg">
        <p></p>
      </div>
    </router-link>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
    export default {
        name: "someFoods",
      // data () {
      //     return {
      //       sort: this.$route.params.sort
      //     }
      // }
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
