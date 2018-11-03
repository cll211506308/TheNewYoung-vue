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
            <att :fm="u.userId"></att>
            </el-col>
            <el-col class="post-right" :span="16" >
              <div>
                <div>
                  <router-link tag="a" :to="{name:'card',params: {id: u.postId}}">
                    <p class="pT">{{u.title}}</p>
                    <p class="pD">标签: <span style="color:orangered">{{u.postLabel}}</span></p>
                  </router-link>
                </div>
                <div class="post-content">
                  <router-link tag="a" :to="{name:'card',params: {id: u.postId}}">
                    "{{u.postContent}}"
                  </router-link>
                </div>
                <div class="post-bottom">
                  <el-row :gutter="20">
                    <el-col :span="6"><span class="hidden-sm-and-down">作者：{{u.userName}}</span></el-col>
                    <el-col :span="6"><span>浏览量：{{u.pageViews}}</span></el-col>
                    <el-col :span="12"><span class="hidden-sm-and-down">{{(u.postTime)}}</span></el-col>
                  </el-row>
                  <el-row style="margin-top: 20px">
                    <el-col :span="8" :offset="8">
                      <el-button type="primary" round size="mini" v-if="u.userId == id" @click="open2(u.postId)">删除</el-button>
                    </el-col>
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
  import att from './att';
  export default {
    data() {
      return {
        data: [],
        // pag: 1,
        // tiao: 5,
        // dis1: false,
        // dis2: false,
        id: this.$store.state.data1,
        attUsers: [],
        pageIndex: 1,
        pagesize: 6,
        pageCount:0,
        myActData:[],
        activitys:[]
      }
    },

    methods: {


      open2(postid) {
        this.$confirm('此操作将永久删除该帖子, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios.get('friends/deletePost/' + postid).then(
            ((res) => {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              setTimeout(() => {

                let _this=this
                this.$axios.get("/friends").then((result) =>{
                  _this.myActData= result.data.data;
                  _this.pageCount=_this.myActData.length
                  _this.loadData()

                })


              }, 1);
            })
          ).catch(err => {
            console.log(err)
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
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
    mounted() {
      let _this=this
      this.$axios.get("/friends").then((result) =>{
        _this.myActData= result.data.data;
        _this.pageCount=_this.myActData.length
        _this.loadData()
      })
    },
    computed:{
      myActData1() {
        return this.activitys
      }

    },
    components:{
      'att':att
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
