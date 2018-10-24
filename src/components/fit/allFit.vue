<template>
  <div>
    <div class="content" v-for="(item,index) in result" :key="index">
      <router-link :to="{path:'/artical/' + item.articalId}">
        <p>{{item.title}}</p><br>
        <i class="el-icon-view">{{item.pageViews}}</i>
      </router-link>
    </div>
    <!--<el-pagination class="page" @current-change="currentPageNum" :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next" :total="len"></el-pagination>-->
    <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
  export default {
      name: "allFit",
    data(){
      return{
        result:[],
        // resultList: [],
        // currentPage: 1,
        // len: 0,
        // pageSize: 1,
      }
    }, created(){
      this.$axios.get("/fit")
        .then((res) => {
          this.result = res.data.data;
          // this.len = res.data.data.length;
          // this.handleInfo();
        }).catch((err) => {
          console.log(err)
        })
    },
    // methods: {
    //   handleInfo() {
    //     let pageNum = Number(String(this.len/this.pageSize).split(".")[0]);//页数如果有小数，只取整数部分
    //     let newArr = [];
    //     for (let i = 0; i < pageNum; i++) {
    //       newArr.push(this.result.splice(0, this.pageSize));
    //     }//遍历获取的数据，每次遍历都从数组的0位置开始截取，截取数量为每页显示的数量
    //     if (this.result.length < this.pageSize) {
    //       newArr.push(this.result.splice(0, this.result.length));
    //     }//判断剩余的数据有没有小于每一页的数量，如果小于就把剩余的数据放进newArr数组
    //     this.result = newArr;//将新的数组赋给articleList[],用来渲染页面
    //     this.resultList = this.result[0];//第一次进入页面显示this.articleList[]数组的第一个元素
    //   },
    //   currentPageNum(currentPage) {
    //     this.resultList = this.result[currentPage - 1];//currentPage为当前的页数,显示当前页数对应的数据
    //   }
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
