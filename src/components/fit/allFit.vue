<template>
  <div>
    <router-link :to="'/artical/' + articalId">
      <div class="content">
        <img src="http://img4.imgtn.bdimg.com/it/u=2013806720,4152885594&fm=26&gp=0.jpg">
        <p>{{result[0].title}}</p><br>
        <i class="el-icon-view">{{result[0].pageViews}}</i>
      </div>
    </router-link>
    <router-link :to="'/artical/' + articalId">
      <div class="content">
        <img src="http://img4.imgtn.bdimg.com/it/u=2013806720,4152885594&fm=26&gp=0.jpg">
        <p style="font-size: 14px">{{result[1].title}}</p><br>
        <i class="el-icon-view">{{result[1].pageViews}}</i>
      </div>
    </router-link>
    <router-link :to="'/artical/' + articalId">
      <div class="content">
        <img src="http://img4.imgtn.bdimg.com/it/u=2013806720,4152885594&fm=26&gp=0.jpg">
        <p>{{result[2].title}}</p><br>
        <i class="el-icon-view">{{result[2].pageViews}}</i>
      </div>
    </router-link>
    <router-link :to="'/artical/' + articalId">
      <div class="content">
        <img src="http://img4.imgtn.bdimg.com/it/u=2013806720,4152885594&fm=26&gp=0.jpg">
        <p>{{result[3].title}}</p><br>
        <i class="el-icon-view">{{result[3].pageViews}}</i>
      </div>
    </router-link>
    <router-link :to="'/artical/' + articalId">
      <div class="content">
        <img src="http://img4.imgtn.bdimg.com/it/u=2013806720,4152885594&fm=26&gp=0.jpg">
        <p>{{result[3].title}}</p><br>
        <i class="el-icon-view">{{result[3].pageViews}}</i>
      </div>
    </router-link>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: "allFit",
    data(){
      return{
        result:[]
      }
    },
    created(){
      this.$axios.get("http://localhost:3000/fit")
        .then((res) => {
          console.log(res.data.data);
          this.result = res.data.data;
        })
        .catch((err) => {
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
