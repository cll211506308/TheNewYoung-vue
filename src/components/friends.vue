<template>
  <div class="friends">
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
    <!--</el-row>-->
    <div class="header">
      <div class="header-left">
        <img src="../../static/images/user1.jpg"/>
        <div>{{username}}</div>
      </div>
      <div class="header-right">
        <h2>Young友圈</h2>
        <span>用户：{{userCount}} 帖子：{{postCount}}</span>
        <br/><br/>
        <div>中国最大的养生类社区</div>
      </div>
      <div></div>
    </div>
    <div class="daohang">
      <div class="daohang-left">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top"><span @click="allCard">全部帖子</span></el-radio-button>
          <el-radio-button label="right"><span @click="likeCard">我得关注</span></el-radio-button>
        </el-radio-group>
      </div>
      <div class="daohang-right">
        <div>
          <el-row>
            <el-button type="primary">发表帖子</el-button>
          </el-row>
        </div>
        <div class="sousuo">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
    </div>
    <div class="view">
      <div class="view-body">
        <router-view class="card"></router-view>
      </div>
      <div class="tag">
        <div class="hot-tag">热门标签<br/><br/>
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
        <div class="hot-s">热搜<br/><br/>
          <el-tag>如何科学养生</el-tag><br/>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
    export default {
        name: "friends",
      data(){
          return{
            username:"qqq",
            userCount:155,
            postCount:null,
            tabPosition: 'top',
            input:null
          }
      },
      created(){
        this.$axios.get('friends/count').then(
          ((res)=>{
            this.postCount = res.data.data[0].count
          })
        ).catch(err=>{console.log(err)})
      },
      methods:{
          allCard(){
            this.$router.push({ path:'/friends' })
          },
        likeCard(){
          this.$router.push({ path:'/friends/likeuser/5' })
        }
      },
      components:{

      },
      computed:{
        show1:function () {
          if(this.$store.state.data1 === null){
            return true
          }
          else {
            return false
          }
        }
      }
    }
</script>

<style scoped>
  .friends{
    width: 1200px;
    position: relative;
    margin: 0 auto;
    border: 1px solid #decfed;
  }
  .header{
    height: 220px;
    background: url("../../static/images/friendsBg.jpg") 85px -50px;
  }
  .header-left{
    position: absolute;
    left: 200px;
    top: 40px;
    text-align: center;
  }
  .header-left img{
    width: 100px;
    height: 100px;
  }
  .header-right{
    width: 500px;
    text-align: left;
    position: absolute;
    top: 60px;
    left: 450px;
  }
  .header-right span{
    position: absolute;
    right: 50px;
    top: 10px;
  }
.card{
  width: 800px;
  border: 1px solid white;
}
.daohang{
  position: relative;
  width: 1200px;
  height: 40px;
  margin-top: 10px;
}
  .daohang-left{
    display: inline-block;
    position: relative;
  }
  .daohang-right{
    width: 450px;
    display: inline-block;
    position: absolute;
    right: 50px;
  }
  .daohang-right div{
    display: inline-block;
  }
  .sousuo{
    position: absolute;
    right: 50px;
  }
  .view-body{
    width: 800px;
    float: left;
  }
  .tag{
    float: right;
    margin-right:100px;
    width: 200px;
    height: 300px;
    text-align: center;
    padding-top: 50px;
  }
  .hot-tag{
    border: 1px solid #ccc;
  }
  .hot-s{
    border: 1px solid #ccc;
    margin-top: 20px;
  }
  /*.el-col {*/
    /*border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
    /*background: #99a9bf;*/
  /*}*/
  /*.bg-purple {*/
    /*background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
    /*background: #e5e9f2;*/
  /*}*/
  /*.grid-content {*/
    /*border-radius: 4px;*/
    /*min-height: 36px;*/
  /*}*/
</style>
