<template>
  <div style="position: relative">
    <div class="content" v-for="(item,index) in myActData1" :key="index">
      <img v-bind:src="'http://127.0.0.1:3000/'+ item.coverPic">
      <router-link :to="{path:'/artical/' + item.articalId}" tagret="_blank">
        <div id="title">
          <h3>{{item.title}}</h3><br>
          <p>标签：<span style="color: orangered">{{item.articalLabel}}</span></p>
          <span class="liulan"><i class="el-icon-view"> {{item.pageViews}}</i></span>
        </div>
      </router-link>
    </div>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination ref="elpage"
                     @current-change="change()"
                     :current-page.sync="pageIndex"
                     layout="prev, pager, next"
                     :total="pageCount"
                     :page-size = "pagesize">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "someFoods4",
    data(){
      return{
        data:'',
        pageIndex: 1,
        pagesize: 4,
        pageCount:0,
        myActData:[],
        activitys:[]
      }
    },
    methods: {
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change(){
        return this.loadData();
      }
    },
    mounted() {
      let _this=this
      this.$axios.get("/foods/foodsclass").then((result) =>{
        _this.myActData= result.data.data.foods4;
        console.log(result.data)
        _this.pageCount=_this.myActData.length
        _this.loadData()
      })
    },
    computed:{
      myActData1() {
        return this.activitys
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 200px;
    float: left;
  }
  img{
    width: 40%;
    height: 180px;
    float: left;
    margin-top: 10px;
  }
  #title{
    width: 60%;
    float: left;
    margin-top: 20px;
  }
  h3{
    width: 100%;
    float: left;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p{
    float: left;
    margin-left: 8%;
    margin-top: 45px;
    font-weight: bold;
  }
  .liulan{
    float: left;
    margin-top: 45px;
    margin-left: 25%;
    color:darkgrey;
  }
  .block{
    margin-top: 20px;
    margin-bottom: 30px;
    float: left;
  }
  a{
    color: #2c2c2c;
  }
</style>
