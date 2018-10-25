<template>
  <div style="margin:0 5px">
    <el-row :gutter="10">
      <el-col :span="18" :offset="3" class="header"><div>
        <el-row :gutter="20">
          <el-col :span="8" class="header-left"><div>
            <img v-bind:src="this.$store.state.picurl+data2.headPic"/>
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
              <span @click="allCard"><el-radio-button label="top">全部帖子</el-radio-button></span>
              <span @click="likeCard"><el-radio-button label="right">我的关注</el-radio-button></span>
            </el-radio-group>
          </div></el-col>
          <el-col :span="12" :offset="4"><div>
            <div class="Publish">
              <el-button type="primary" @click="publish">发表帖子</el-button>
            </div>
            <div class="Publish-1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div></el-col>
        </el-row>
      </div></el-col>

      <el-col :offset="3" :span="18"><div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17"><div>
            <router-view></router-view>
          </div></el-col>
          <el-col class="hidden-sm-and-down"  :md="7" :lg="7" :xl="7"><div>
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
      width="60%"
      :before-close="handleClose">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.region" placeholder="请选择类别">
            <el-option label="养胃" value="养胃"></el-option>
            <el-option label="养肝" value="养肝"></el-option>
            <el-option label="脱发" value="脱发"></el-option>
            <el-option label="护肤" value="护肤"></el-option>
            <el-option label="口腔" value="口腔"></el-option>
            <el-option label="作息" value="作息"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>


      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="Submit">发 表</el-button>

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
        dialogVisible: false,
        data2:'',
        form: {
          name: '',
          region: '',
          desc: ''
        }
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

      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{
          this.data2 = res.data.data[0];
        })
      ).catch(err=>{console.log(err)})
    },
    methods:{
      allCard(){
        this.$router.push({ path:'/friends' })
      },
      likeCard(){
        if(this.$store.state.data1 == null){
          this.$message({
            message: '您还没登陆，请先登陆',
            type: 'warning'
          });
        }
        else {
          this.$router.push({ path:'/friends/likeuser/'+ this.$store.state.data1})
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      publish(){
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
      Submit() {
        if(this.form.name == ''){
          this.$message({
            message: '标题不能为空，请输入',
            type: 'warning'
          });
        }
        else if(this.form.region == ''){
          this.$message({
            message: '请选择类别',
            type: 'warning'
          });
        }
        else if(this.form.desc == ''){
          this.$message({
            message: '内容不能为空，请输入',
            type: 'warning'
          });
        }
        else {
          let that = this
          this.$axios.get('/friends/submit', {
            params: {
              userId:this.$store.state.data1,title:this.form.name,postLabel:this.form.region,postContent:this.form.desc
            }
          })
            .then(function (response) {
              if(response.data.code == 200){
                that.$message({
                  message: '恭喜你，发表成功',
                  type: 'success'
                });
                setTimeout(() => {
                  window.location.href = '/friends'
                }, 500)

              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }

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
          return this.data2.userName
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
  .header img{
    border-radius: 50%;
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
  .tag{
    float: right;
    width: 200px;
    height: 300px;
    text-align: center;
  }
  .hot-tag{
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .hot-s{
    border: 1px solid #ccc;
    margin-top: 20px;
    border-radius:5px;
  }
</style>
