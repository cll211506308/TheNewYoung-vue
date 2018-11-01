<template>
  <el-row style="margin-bottom: 20px">
    <el-col :span="24">
      <el-card shadow="hover" style="border-radius: 15px">
        <el-row v-for="(u,index) in myActData1" class="post" :key="index">
          <el-row class="fenge">
          </el-row>
          <el-row>
            <el-col class="post-left" :span="5" :offset="1">
              <el-row>
                <img v-bind:src="'http://127.0.0.1:3000/'+u.headPic"/>
              </el-row>
              <el-row style="margin-top: 10px">
                <el-button type="primary" round size="mini" @click="att(u.userId)">取消关注</el-button>
              </el-row>
            </el-col>
            <el-col class="post-right" :span="16" >
              <div>
                <div>
                  <router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">
                    <p class="pT">{{u.title}}</p>
                    <p class="pD">标签: <span style="color:orangered">{{u.postLabel}}</span></p>
                  </router-link>
                </div>
                <div class="post-content">
                  <router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">
                    "{{u.postContent}}"
                  </router-link>
                </div>
                <div class="post-bottom">
                  <el-row :gutter="20">
                    <el-col :span="6"><span class="hidden-sm-and-down">作者：{{u.userName}}</span></el-col>
                    <el-col :span="6"><span>浏览量：{{u.pageViews}}</span></el-col>
                    <el-col :span="12"><span class="hidden-sm-and-down">{{(u.postTime)}}</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>

        </el-row>
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
      </el-card>
    </el-col>

  </el-row>

</template>

<script>
  export default {
    data () {
      return {
        data: [],
        pageIndex: 1,
        pagesize: 6,
        pageCount:0,
        myActData:[],
        activitys:[]
      }
    },
    methods:{
      att(attid){
        let that = this
        this.$axios.get('/friends/delAttention', {
          params: {
            userId:this.$store.state.data1,attentioneduserid:attid
          }
        })
          .then(function (response) {
            if(response.data.code == 200){
              that.$message({
                message: '恭喜你，取消关注成功',
                type: 'success'
              });

              that.$axios.get("/friends/likeUser/"+that.$store.state.data1).then((result) =>{
                that.myActData= result.data.data;
                that.pageCount=that.myActData.length
                that.loadData()
              })

            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
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
    mounted(){
      let _this=this
      this.$axios.get("/friends/likeUser/"+this.$store.state.data1).then((result) =>{
        _this.myActData= result.data.data;
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
  .post a {
    text-decoration: none;
    color: black;
  }

  .post-left {
    text-align: center;
  }

  .post-left img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .post-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
    margin-top: 15px;
    text-indent: 2em;

  }

  .post-bottom{
    color:darkgrey;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fenge{
    height: 40px;
    background: url("../../../static/images/tengman.jpg");
    background-size: 100% 100%;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .pT{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

</style>
