<template>
  <div>
    <h2>这是关于{{sort}}的养生堂的文章</h2>
    <div class="content">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=423278704,2694633106&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=423278704,2694633106&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=423278704,2694633106&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=423278704,2694633106&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=423278704,2694633106&fm=26&gp=0.jpg">
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'someYoungLife',
  data () {
    return {
      sort: this.$route.params.sort
    }
  }
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
