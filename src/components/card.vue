<template>
    <div>
      <el-row>

        <el-col :span="18" :offset="3">
          <el-card shadow="always">
          <div>

          <el-row class="post">
            <el-col class="post-left" :xs="4" :sm="4" :md="6" :lg="6" :xl="6"><div>
              <img v-bind:src="this.$store.state.picurl+post[0].headPic"/>
              <div>
                <button @click="att(post[0].userId)">关注此人</button>
              </div>
            </div></el-col>
            <el-col class="post-right" :xs="20" :sm="20" :md="18" :lg="18" :xl="18"><div>
              <div>

                  【{{post[0].postLabel}}】{{post[0].title}}

              </div>
              <div class="post-content">

                  {{post[0].postContent}}

              </div>
              <div class="post-bottom">
                作者：{{post[0].userName}}&nbsp;&nbsp;&nbsp;浏览量：{{post[0].pageViews}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{(post[0].postTime)}}
              </div>
            </div></el-col>
          </el-row>

        </div>
        </el-card>
        </el-col>
      </el-row>
      <hr/>

      <el-row>
        <el-col :span="18" :offset="3"><div>
          <el-card shadow="always" v-for="(u,index) in showData" :key="index">
            <div> 内容：{{u.comContent}}<br/>
              评论者:{{u.userName}}&nbsp;&nbsp;&nbsp;
              时间：{{u.comTime}}
              <button v-if="u.userId == userId" @click="delcom(u.commentsId)">删除</button>
            </div>
          </el-card>
          <div v-if="show">暂时还没有评论</div>
          <el-row>
            <el-button type="primary"  @click="pre" :disabled="dis1">上一页</el-button>
            <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
            <el-button type="primary" @click="next" :disabled="dis2">下一页</el-button>
            <el-button type="primary" @click="addComment" >发表评论</el-button>
          </el-row>
        </div></el-col>
      </el-row>

      <!--//评论的组件-->
      <el-dialog
        title="发表评论"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <br/> <br/> <br/>
        <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addComment2">发表</el-button>

      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "card",
      data(){
          return {
            id:this.$route.params.id,
            data:[],
            pag:1,
            tiao:10,
            dis1:false,
            dis2:false,
            post:[
              {postLabel:'',userId:'',title:''}
            ],
            textarea: '',
            dialogVisible: false,
            userId:this.$store.state.data1
          }
      },
     created(){
          //获取评论
        this.$axios.get('/friends/getCom/'+this.id).then(
          ((res)=>{
            this.data = res.data.data
          })
        ).catch(err=>{console.log(err)})
       //获取帖子信息
       this.$axios.get('/friends/postId/', {
         params: {
           postid:this.id
         }
       }).then(
         ((res)=>{
           this.post = res.data.data
         })
       ).catch(err=>{console.log(err)})
       //更新浏览量
       this.$axios.get('/friends/uppv/'+this.id).then(
         ((res)=>{})
       ).catch(err=>{console.log(err)})
      },
    methods:{
          //上一页
      pre(){
        if(this.pag == 1){
          this.dis1 = true
        }
        else {
          this.pag--
          this.dis2 = false
        }
      },
      //下一页
      next(){
        if(this.pag > this.data.length/this.tiao){
          this.dis2 = true
        }
        else {
          this.pag++
          this.dis1 = false
        }
      },
      att(attId){
        if(this.$store.state.data1 == null){
          this.$message({
            message: '您还没登陆，请先登陆',
            type: 'warning'
          });
        }
        else {
          let that = this
          this.$axios.get('/friends/getAtt', {
            params: {
              userId:this.$store.state.data1,attentioneduserid:attId
            }
          })
            .then(function (response1) {
              if(response1.data.data.length == 1){
                that.$message({
                  message: '您已关注',
                  type: 'success'
                });
              }
              else {
                that.$axios.get('/friends/attention', {
                  params: {
                    userId:that.$store.state.data1,attentioneduserid:attId
                  }
                })
                  .then(function (response2) {
                    if(response2.data.code == 200){
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

      addComment(){
        if(this.$store.state.data1 == null){
          this.$message({
            showClose: true,
            message: '您还没登陆，请先登陆',
            type: 'warning'
          });
        }
        else {
          this.dialogVisible = true
        }
      },
      addComment2(){
        if(this.textarea.length == 0){
          this.$message({
            message: '请输入评论内容',
            type: 'warning'
          });
        }
        else {
          this.$axios.get('friends/addComment', {
            params: {
             userid:this.$store.state.data1,
              comcontent:this.textarea,
              postid:this.post[0].postId
            }
          }).then(
            ((res)=>{
              this.$message({
                message: '发表成功',
                type: 'success'
              });
              setTimeout(() => {
                location.reload()
              }, 500);
            })
          ).catch(err=>{console.log(err)})
        }

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      delcom(comid){
        this.$axios.get('friends/deleteComment/'+ comid).then(
          ((res)=>{
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            setTimeout(() => {
              location.reload()
            }, 500);
          })
        ).catch(err=>{console.log(err)})
      }
    },
      computed:{
        showData:function () {
          if(this.data.length == 0){
            this.show = true
            return this.show = true
          }
          else {
            this.show = false
            return this.data.slice((this.pag-1)*this.tiao,(this.pag-1)*this.tiao+this.tiao)
          }
        }
      }
    }
</script>

<style scoped>
  .post a{
    text-decoration: none;
    color: black;
  }
  .post img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .post-left{
    text-align: center;
  }
  .post-content{
    margin: 16px 0;
    text-align: center;
  }

</style>
