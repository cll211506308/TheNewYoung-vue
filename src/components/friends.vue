<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="18" :offset="3" class="header"><div>
        <el-row :gutter="20">
          <el-col :span="8" class="header-left"><div>
            <img src="../../static/images/user1.jpg"/>
            <div>{{username}}</div>
          </div></el-col>
          <el-col :span="12" :offset="2" class="header-right"><div>
            <h2>Young友圈</h2>
            <span>用户：{{userCount}} 帖子：{{postCount}}</span>
            <br/><br/>
            <div>中国最大的养生类社区</div>
          </div></el-col>
        </el-row>
      </div></el-col>

      <el-col :span="18" :offset="3"><div>
        <el-row :gutter="20">
          <el-col :span="6"><div>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <el-radio-button label="top"><span @click="allCard">全部帖子</span></el-radio-button>
              <el-radio-button label="right"><span @click="likeCard">我得关注</span></el-radio-button>
            </el-radio-group>
          </div></el-col>
          <el-col :span="12" :offset="4"><div>
            <div class="Publish">
              <el-button type="primary" @click="dialogVisible = true">发表帖子</el-button>
            </div>
            <div class="Publish-1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div></el-col>
        </el-row>
      </div></el-col>

      <el-col :offset="3" :span="18"><div>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16"><div>
            <router-view></router-view>
          </div></el-col>
          <el-col class="hidden-sm-and-down"  :md="8" :lg="8" :xl="8"><div>

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

          </div></el-col>
        </el-row>
      </div></el-col>
    </el-row>

    <div style="clear: both"></div>

    <!--发表帖子的界面-->
    <el-dialog
      title="发表帖子"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <span>发表帖子</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>

    export default {
        name: "friends",
      data(){
          return{
            userCount:null,
            postCount:null,
            tabPosition: 'top',
            input:null,
            dialogVisible: false
          }
      },
      created(){
        this.$axios.get('friends/count').then(
          ((res)=>{
            this.postCount = res.data.data[0].count
          })
        ).catch(err=>{console.log(err)})

        this.$axios.get('users/count').then(
          ((res)=>{
            this.userCount = res.data.data[0].count
          })
        ).catch(err=>{console.log(err)})
      },
      methods:{
          allCard(){
            this.$router.push({ path:'/friends' })
          },
        likeCard(){
          this.$router.push({ path:'/friends/likeuser/5' })
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
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
        },
        username:function () {
          if(this.$store.state.data1 == null){
            return '您好，请登录'
          }
          else {
            return this.$store.state.data1
          }
        }
      }
    }
</script>

<style scoped>
  .header{
    height: 246px;
    background: url("../../static/images/friendsBg.jpg") 0px -50px;
    padding-top: 40px;
  }
  .header-left{
    text-align: center;
  }
  .header-left img{
    width: 100px;
    height: 100px;
  }
  .header-right{
    text-align: left;
  }
  .header-right span{
    position: relative;
    right: -20px;
  }
  .Publish{
    margin-right: 100px;
  }
  .Publish,.Publish-1{
    display: inline-block;
  }
.card{
  width: 800px;
  border: 1px solid white;
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
  .s1{
    border: 1px solid red;
  }
</style>
