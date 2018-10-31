<template>
  <div style="background: white">
    <div id="title">
      <img src="../../../static/images/lebel.png" style="float: left;margin-left: 30%;margin-top: 15px">
      <h2 style="float: left;padding-left: 4%;margin-top: 12px;color: #696969;">排行榜</h2>
    </div>
    <div class="rank" v-for="(item,index) in oneDiet" :key="index">
      <span v-if="index==0"><img src="../../../static/images/gold.png" class="pic"></span>
      <span v-if="index==1"><img src="../../../static/images/yin.png" class="pic"></span>
      <span v-if="index==2"><img src="../../../static/images/tong.png" class="pic"></span>
      <span v-if="index>2&&index<6" style="margin-left: 5%">{{index+1}}.</span>
      <router-link :to="{path:'/artical/' + item.articalId}" style="text-decoration: none;">
        {{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foodsRank",
    data(){
      return{
        data:[],
        oneDiet:[],
      }
    },
    created(){
      this.$axios.get("/foods").then((res) => {
        this.data = res.data.data.Diet
        for(let i =0; i<6;i++){
          this.oneDiet.push(this.data[i])
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  #title{
    background: url("../../../static/images/paihang.jpg");
    width: 100%;
    height: 60px;
    background-size: 100% 100%;
    position:relative;
  }
  .rank{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 1em;
  }
  .rank:hover{box-shadow:0px 0px 10px 2px #aaa;}
  .pic{
    position: relative;
    top: 11px;
  }
  a{
    color: dimgrey;
  }
</style>
