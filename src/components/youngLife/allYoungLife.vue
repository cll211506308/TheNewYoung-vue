<template>
  <div>
    <h2>这是全部的养生堂文章</h2>
    <div class="content">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2414834993,24188519&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="http://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2414834993,24188519&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="http://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2414834993,24188519&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="http://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2414834993,24188519&fm=26&gp=0.jpg">
    </div>
    <div class="content">
      <img src="http://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2414834993,24188519&fm=26&gp=0.jpg">
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
    export default {
        name: "allYoungLIfe",
      // data(){
      //     return{
      //       result:[]
      //     }
      // },
      // created(){
      //     this.$axios.get("http://127.0.0.1:3000/allYoungLife")
      //       .then((res)=>{
      //         console.log(res.data.data);
      //         this.result=res.data.data;
      //       })
      //       .catch((err)=>{
      //         console.log(err)
      //       })
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
