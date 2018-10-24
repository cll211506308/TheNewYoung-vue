<template>
  <div>
    <div class="content" v-for="(item,index) in result" :key="index">
      <router-link :to="{path:'/artical/' + item.articalId}">
        <p>{{item.title}}</p><br>
        <i class="el-icon-view">{{item.pageViews}}</i>
      </router-link>
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: "allFoods",
    data(){
      return{
        result:[],
      }
    }, created(){
      this.$axios.get("/foods")
        .then((res) => {
          this.result = res.data.data;
        }).catch((err) => {
        console.log(err)
      })
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
  img{
    width: 50%;
    height: 100%;
    float: left;
  }
  p{
    float: left;
  }
  .page{
    margin-left:auto;
    width: 82%;
    margin-top: 30px;
    float: left;
  }
</style>
