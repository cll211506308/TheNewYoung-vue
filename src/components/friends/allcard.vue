<template>
  <div>
    <el-row>
      <el-col :span="24" v-for="(u,index) in showData" class="post" :key="index">
        <el-card shadow="always">

          <el-row>
            <el-col class="post-left" :xs="4" :sm="4" :md="6" :lg="6" :xl="6"><div>
              <img v-bind:src="'http://127.0.0.1:3000/'+u.headPic"/>
              <div>
                <button @click="att(u.userId)">关注此人</button>
              </div>
            </div></el-col>
            <el-col class="post-right" :xs="20" :sm="20" :md="18" :lg="18" :xl="18"><div>
              <div>
                <router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">
                  【{{u.postLabel}}】{{u.title}}
                </router-link>
              </div>
              <div class="post-content">
                <router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">
                  {{u.postContent}}
                </router-link>
              </div>
              <div class="post-bottom">
                作者：{{u.userName}}&nbsp;&nbsp;&nbsp;浏览量：{{u.pageViews}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{(u.postTime)}}
                <button v-if="u.userId == id" @click="open2(u.postId)">删除</button>
              </div>
            </div></el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-button type="primary"  @click="pre" :disabled="dis1">上一页</el-button>
      <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
      <el-button type="primary" @click="next" :disabled="dis2">下一页</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [],
        pag:1,
        tiao:5,
        dis1:false,
        dis2:false,
        id:this.$store.state.data1
      }
    },created(){
      this.$axios.get('friends').then(
        ((res1)=>{
          this.data = res1.data.data;
        })
      ).catch(err=>{console.log(err)})
    },
    methods:{
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
        if(this.pag >= this.data.length/this.tiao){
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
      open2(postid) {
        this.$confirm('此操作将永久删除该帖子, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios.get('friends/deletePost/'+ postid).then(
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

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    mounted(){

    },
    computed:{
      //数据分页
      showData:function() {
        return this.data.slice((this.pag-1)*this.tiao,(this.pag-1)*this.tiao+this.tiao)
      }
    }
  }
</script>

<style scoped>
  .post a{
    text-decoration: none;
    color: black;
  }
  .post-left{
    text-align: center;
  }
  .post-left img{
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .post-content{
    margin: 16px 0;
    text-align: center;
  }

</style>
