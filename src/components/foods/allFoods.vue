<template>
  <div>
    <h2>这里是全部的营养饮食的文章</h2>
    <!--<p>{{result[0].title}}</p>-->
    <div class="content">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4115655235,1054159854&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4115655235,1054159854&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4115655235,1054159854&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4115655235,1054159854&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4115655235,1054159854&fm=26&gp=0.jpg">
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
    export default {
        name: "allFoods",
      // data(){
      //   return{
      //     result:[]
      //   }
      // },
      // created(){
      //   this.$axios.get("http://127.0.0.1:3000/foods")
      //     .then((res) => {
      //       console.log(res.data.data);
      //       this.result = res.data.data;
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
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
