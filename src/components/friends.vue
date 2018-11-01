<template>
  <el-row style="background: whitesmoke;padding-bottom: 20px">
    <el-col :span="20" :offset="2">
      <el-row class="fBg">
        <el-col :span="5" :offset="6" >
          <img v-bind:src="this.$store.state.picurl+data2.headPic" class="head" v-if="!show1"/>
          <img src="../../static/images/userTouxiang.png" class="head" v-if="show1"/>
          <div class="name">Hi,{{username}}!</div>
        </el-col>
        <el-col :span="5" :offset="2" style="margin-top: 80px; margin-left: 130px" class="hidden-sm-and-down">
          <h2 style="margin-bottom: 20px">Young友圈</h2>
          <div style="font-weight: bold">用户：<span style="color: orangered">{{userCount}}</span> 帖子：<span
            style="color: orangered">{{postCount}}</span></div>
          <div style="margin-top: 20px; font-weight: bold">中国最大的养生类社区</div>
        </el-col>
      </el-row>
      <el-row class="fNav">
        <el-col :span="20" :offset="2">
          <router-link tag="p" class="fT" to="/friends" active-class="active3" exact><span @click="allCard">全部帖子</span></router-link>
          <router-link tag="p" class="fT" :to="'/friends/likeuser/' + this.$store.state.data1" active-class="active3"><span @click="likeCard">我的关注</span></router-link>
          <p @click="publish" class="fT" style="float:right"><img src="../../static/images/publish.png" alt="" class="publish"> 发表帖子</p>
        </el-col>


      </el-row>
      <el-row>
        <el-col :sm="24" :md="16">
          <router-view></router-view>
        </el-col>
        <el-col :span="7" :offset="1" class="hidden-sm-and-down">
          <el-card class="box-card fixed" shadow="hover">
            <h3 style="margin-bottom: 20px;text-align: center">热门标签 <small style="color: red;">HOT</small></h3>
            <router-link to="/search/养生" target="_blank"><el-tag class="hotLabel">养生</el-tag></router-link>
            <router-link to="/search/健身" target="_blank"><el-tag type="success" class="hotLabel">健身</el-tag></router-link>
            <router-link to="/search/营养" target="_blank"><el-tag type="info" class="hotLabel">营养</el-tag></router-link>
            <router-link to="/search/瘦身" target="_blank"><el-tag type="warning" class="hotLabel">瘦身</el-tag></router-link>
            <router-link to="/search/增肌" target="_blank"><el-tag type="danger" class="hotLabel">增肌</el-tag></router-link>
            <router-link to="/search/健康作息" target="_blank"><el-tag class="hotLabel">健康作息</el-tag></router-link>
            <router-link to="/search/消食" target="_blank"><el-tag type="success" class="hotLabel">消食</el-tag></router-link>
            <router-link to="/search/降血压" target="_blank"><el-tag type="info" class="hotLabel">降血压</el-tag></router-link>
            <router-link to="/search/抗癌" target="_blank"><el-tag type="warning" class="hotLabel">抗癌</el-tag></router-link>
            <router-link to="/search/止咳润肺" target="_blank"><el-tag type="danger" class="hotLabel">止咳润肺</el-tag></router-link>
          </el-card>
        </el-col>
      </el-row>

    </el-col>
    <!--发表帖子的界面-->
    <el-dialog
      title="发表帖子"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="70px">
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
      <el-button type="primary" @click="Submit">发 表</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </el-dialog>

  </el-row>

</template>

<script>

  export default {
    name: "friends",
    data() {
      return {
        userCount: null,
        postCount: null,
        tabPosition: 'top',
        input: null,
        dialogVisible: false,
        data2: '',
        form: {
          name: '',
          region: '',
          desc: ''
        }
      }
    },
    created() {
      sessionStorage.setItem("url", (window.location.pathname).slice(1));
      this.$axios.get('friends/count').then(
        ((res) => {
          this.postCount = res.data.data[0].count
        })
      ).catch(err => {
        console.log(err)
      })

      this.$axios.get('users/count').then(
        ((res) => {
          this.userCount = res.data.data[0].count
        })
      ).catch(err => {
        console.log(err)
      })

      this.$axios.get('users/username/' + this.$store.state.data1).then(
        ((res) => {
          this.data2 = res.data.data[0];
        })
      ).catch(err => {
        console.log(err)
      })
    },
    methods: {
      allCard() {
        this.$router.push({path: '/friends'})
      },
      likeCard() {
        if (this.$store.state.data1 == null) {
          this.$message({
            message: '您还没登陆，请先登陆',
            type: 'warning'
          });
        }
        else {
          this.$router.push({path: '/friends/likeuser/' + this.$store.state.data1})
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
      publish() {
        if (this.$store.state.data1 == null) {
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
        if (this.form.name == '') {
          this.$message({
            message: '标题不能为空，请输入',
            type: 'warning'
          });
        }
        else if (this.form.region == '') {
          this.$message({
            message: '请选择类别',
            type: 'warning'
          });
        }
        else if (this.form.desc == '') {
          this.$message({
            message: '内容不能为空，请输入',
            type: 'warning'
          });
        }
        else {
          let that = this
          this.$axios.get('/friends/submit', {
            params: {
              userId: this.$store.state.data1,
              title: this.form.name,
              postLabel: this.form.region,
              postContent: this.form.desc
            }
          })
            .then(function (response) {
              if (response.data.code == 200) {
                that.$message({
                  message: '恭喜你，发表成功',
                  type: 'success'
                });
                that.dialogVisible = false
                setTimeout(() => {
                  that.$router.push({path: '/friends/likeuser/1', replace: true})
                }, 1)
                setTimeout(() => {
                  that.$router.push({path: '/friends/', replace: true})
                }, 2)

              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }

      }
    },
    components: {},
    computed: {
      show1: function () {
        if (this.$store.state.data1 === null) {
          return true
        }
        else {
          return false
        }
      },
      username: function () {
        if (this.$store.state.data1 == null) {
          return '请先登录'
        }
        else {
          return this.data2.userName
        }
      }
    }
  }
</script>

<style scoped>

  .fBg {
    margin-top: 20px;
    background: url("../../static/images/fbg3.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 300px;

  }

  .fNav{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    background: url("../../static/images/fenge5.png") no-repeat;
    background-size: 100% 215%;
  }

  .fT{
    width: 20%;
    height: 60px;
    line-height: 60px;
    float:left;
    cursor: pointer;
    font-size: 17px;
    color: whitesmoke;
    text-align: center;
  }

  .head {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    margin-top: 55px;
    margin-left: 60px;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 12px;
    margin-left: 95px;
    white-space: nowrap;
  }

  .fixed{
    border-radius: 15px;
    background: url('../../static/images/divbg3.jpg');
    background-size: 100% 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .hotLabel{
    margin-right: 5px;
    margin-bottom: 15px;
  }

  .publish{
    position: relative;
    top: 10px;
  }

  .active3{
    background: url("../../static/images/leaf.png") no-repeat;
    background-size: 65% 68%;
    background-position: 36px 9px;
  }
</style>
