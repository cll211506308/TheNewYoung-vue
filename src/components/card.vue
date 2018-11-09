<template>
  <el-row style="background: whitesmoke">
    <el-col :span="20" :offset="2" style="margin-top: 20px;margin-bottom: 20px">
      <el-col :md="16" :sm="24">
        <el-card shadow="hover" style="border-radius: 15px">
          <el-row class="post" style="margin-top: 10px">
            <el-col class="post-left" :span="5">
              <div>
                <img v-bind:src="this.$store.state.picurl+post[0].headPic"/>
                <div style="margin-top: 10px">
                  <el-button type="primary" size="mini" round @click="att(post[0].userId)">关注此人</el-button>
                </div>
              </div>
            </el-col>
            <el-col class="post-right" :span="18" :offset="1">
              <div>
                <div>
                  <p class="pT">{{post[0].title}}</p>
                  <p class="pD">标签: <span style="color:orangered">{{post[0].postLabel}}</span></p>
                </div>
                <div class="post-content">

                  {{post[0].postContent}}

                </div>
                <div class="post-bottom">
                  <el-row :gutter="20">
                    <el-col :span="6"><span>作者：{{post[0].userName}}</span></el-col>
                    <el-col :span="6" class="hidden-xs-only"><span>浏览量：{{post[0].pageViews}}</span></el-col>
                    <el-col :span="12" class="hidden-xs-only"><span>{{(post[0].postTime)}}</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-row style="margin-top: 20px">
          <el-col>
            <el-row class="menu">
              <el-col :span="20" :offset="2">
                <p>全部评论</p>
                <p @click="addComment" style="float:right"><img src="../../static/images/publish.png" alt="" class="publish">发表评论</p>
              </el-col>
            </el-row>
            <el-row>
              <el-card shadow="hover" v-for="(u,index) in myActData1" :key="index" style="width: 100%;">
                <el-row>
                  <el-col :span="5" style="text-align: center">
                    <img v-bind:src="'http://127.0.0.1:3000/'+u.headPic" class="head"/>
                    <p style="margin-top: 5px;font-weight: bold">{{u.userName}}</p>
                  </el-col>
                  <el-col :span="16" :offset="1">
                    <div>
                      <p style="margin-top: 10px; line-height: 25px;margin-bottom: 20px"><span style="color: darkgrey">内容 :</span> {{u.comContent}}</p>
                      <span style="color: darkgrey;float:right;">{{u.comTime}}</span>
                    </div>
                  </el-col>
                  <el-col :span="2" style="position:relative;text-align: center;">
                  <span><i class="el-icon-delete del" v-if="u.userId == userId"
                           @click="delcom(u.commentsId)"></i></span>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>

            <el-row style="margin-top: 20px; margin-bottom: 10px;margin-left: 40px">
              <div class="block">
                <span class="demonstration"></span>
                <el-pagination ref="elpage"
                               @current-change="change()"
                               :current-page.sync="pageIndex"
                               layout="prev, pager, next"
                               :total="pageCount"
                               :page-size="pagesize">
                </el-pagination>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7" :offset="1" style="border-radius: 5px;background: white;margin-bottom: 140px" class="hidden-sm-and-down">
        <div class="paiHang">
          <img class="hidden-sm-and-down" src="../../static/images/lebel.png" alt=""
               style="position: absolute;top:50%;margin-top: -16px; left:30%">
          <h3>排行榜</h3>
        </div>
        <div class="paiMing" v-for="(item,index) in oneRecommend">
          <span style="margin-right: 8px" v-if="index==0"><img src="../../static/images/gold.png" class="gold"></span>
          <span style="margin-right: 8px" v-if="index==1"><img src="../../static/images/yin.png" class="yin"></span>
          <span style="margin-right: 8px" v-if="index==2"><img src="../../static/images/tong.png" class="tong"></span>
          <span style="margin-right: 8px" v-if="index>2">{{index+1}}.</span>
          <router-link :to="'/artical/'+item.articalId">{{item.title}}</router-link>
        </div>
      </el-col>
    </el-col>
    <!--//评论的组件-->
    <el-dialog
      title="发表评论"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleCndse">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
        style="margin-bottom: 25px; margin-top: -20px">
      </el-input>
      <el-button type="primary" @click="addComment2">发表</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>


    </el-dialog>

  </el-row>

</template>

<script>
  export default {
    name: "card",
    data() {
      return {
        id: this.$route.params.id,
        data: [],
        post: [
          {postLabel: '', userId: '', title: ''}
        ],
        textarea: '',
        dialogVisible: false,
        userId: this.$store.state.data1,
        recommend: [],
        oneRecommend: [],
        pageIndex: 1,
        pagesize: 6,
        pageCount: 0,
        myActData: [],
        activitys: []
      }
    },
    created() {
      sessionStorage.setItem("url", (window.location.pathname).slice(1));
      //获取帖子信息
      this.$axios.get('/friends/postId/', {
        params: {
          postid: this.id
        }
      }).then(
        ((res) => {
          this.post = res.data.data
        })
      ).catch(err => {
        console.log(err)
      })
      //更新浏览量
      this.$axios.get('/friends/uppv/' + this.id).then(
        ((res) => {
        })
      ).catch(err => {
        console.log(err)
      });

      this.$axios.get("/")
        .then((res) => {
          this.recommend = res.data.data.reconmend;
          for (let i = 0; i < 6; i++) {
            this.oneRecommend.push(this.recommend[i])
          }
        }).catch((err) => {
        console.log(err)
      });
    },
    methods: {
      att(attId) {
        if (this.$store.state.data1 == null) {
          this.$message({
            message: '您还没登录，请先登录',
            type: 'warning'
          });
        }
        else {
          let that = this
          this.$axios.get('/friends/getAtt', {
            params: {
              userId: this.$store.state.data1, attentioneduserid: attId
            }
          })
            .then(function (response1) {
              if (response1.data.data.length == 1) {
                that.$message({
                  message: '您已关注',
                  type: 'success'
                });
              }
              else {
                that.$axios.get('/friends/attention', {
                  params: {
                    userId: that.$store.state.data1, attentioneduserid: attId
                  }
                })
                  .then(function (response2) {
                    if (response2.data.code == 200) {
                      that.$message({
                        message: '关注成功',
                        type: 'success'
                      });
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

              }

            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },

      addComment() {
        if (this.$store.state.data1 == null) {
          this.$message({
            showClose: true,
            message: '您还没登录，请先登录',
            type: 'warning'
          });
        }
        else {
          this.dialogVisible = true
        }
      },
      addComment2() {
        if (this.textarea.length == 0) {
          this.$message({
            message: '请输入评论内容',
            type: 'warning'
          });
        }
        else {
          var that = this
          this.$axios.get('friends/addComment', {
            params: {
              userid: this.$store.state.data1,
              comcontent: this.textarea,
              postid: this.post[0].postId
            }
          }).then(
            ((res) => {
              this.$message({
                message: '发表成功',
                type: 'success'
              });

              this.textarea = ''
                this.dialogVisible = false
                that.$axios.get('/friends/getCom/' + that.id).then((result) => {
                  that.myActData = result.data.data;
                  that.pageCount = that.myActData.length
                  that.loadData()
                })

            })
          ).catch(err => {
            console.log(err)
          })
        }

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      delcom(comid) {
        let that = this;
        this.$confirm('此操作将永久删除该收藏, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonClass: '取消',
          type: 'waring'
        }).then(() => {
          this.$axios.get('friends/deleteComment/' + comid).then(
            ((res) => {
              this.$message({
                message: '删除成功',
                type: 'success'
              });


              that.$axios.get('/friends/getCom/' + that.id).then((result) => {
                that.myActData = result.data.data;
                that.pageCount = that.myActData.length
                that.loadData()
              })

            })
          ).catch(err => {
            console.log(err)
          })
        })
      },
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex - 1) * this.pagesize;
        let end = start + this.pagesize;
        if (end >= this.pageCount) {
          end = this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change() {
        return this.loadData();
      }
    },
    computed: {
      myActData1() {
        return this.activitys
      }
    },
    mounted() {
      let _this = this
      this.$axios.get('/friends/getCom/' + this.id).then((result) => {
      _this.myActData = result.data.data;
      _this.pageCount = _this.myActData.length
      _this.loadData()
    })
  }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }

  .post img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .post-left {
    text-align: center;
    margin-top: 20px;
  }

  .post-content {
    text-indent: 2em;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 30px;

  }

  .post-bottom {
    color: darkgrey;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }

  .gold, .yin, .tong {
    position: relative;
    top: 13px;
    margin-left: -8px;
  }

  .paiHang {
    width: 100%;
    height: 60px;
    background: url("../../static/images/paihang.jpg");
    background-size: 100% 100%;
    position: relative;
  }

  .paiMing:hover {
    box-shadow: 0px 0px 10px 2px #aaa;
  }

  .paiMing {
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

  .pT {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .head {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }

  .del {
    font-size: 20px;
    color: orangered;
    margin-top: 60%;
    margin-left: 28px;
    cursor: pointer;
  }

  .menu{
    font-size: 16px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    width: 100%;
    height: 60px;
    background: url("../../static/images/fenge5.png") no-repeat;
    background-size: 100% 215%;
  }

  .menu p{
    width: 20%;
    float:left;
    line-height: 60px;
    color:whitesmoke;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .publish{
    position: relative;
    top: 10px;
    cursor: pointer;
  }

</style>
