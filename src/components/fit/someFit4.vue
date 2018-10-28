<template>
  <div style="position: relative">
    <div class="content" v-for="(item,index) in myActData1" :key="index">
      <img src="../../../static/images/abcd.png">
      <router-link :to="{path:'/artical/' + item.articalId}" tagret="_blank">
        <div id="title">
          <h3>{{item.title}}</h3><br>
          <p>标签：{{item.articalLabel}}</p>
          <span><i class="el-icon-view">{{item.pageViews}}</i></span>
        </div>
      </router-link>
    </div>
    <el-row style="margin-top: 20px; margin-bottom: 10px;margin-left: 40px">
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
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "someFit4",
    data(){
      return{
        data:'',
        pageIndex: 1,
        pagesize: 3,
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
      this.$axios.get("/fit/fitclass").then((result) =>{
        _this.myActData= result.data.data.fit4;
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
  }
  p{
    float: left;
    margin-left: 8%;
    margin-top: 30px;
  }
  span{
    float: left;
    margin-top: 30px;
    margin-left: 15%;
  }
  .block{
    margin-top: 20px;
    margin-bottom: 30px;
    padding-left: 35%;
    float: left;
  }
</style>
