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
  <!--<div>-->
    <!--<el-row>-->
      <!--<el-col :span="24" v-for="(u,index) in showData" class="post" :key="index">-->
        <!--<el-card shadow="always">-->

          <!--<el-row>-->
            <!--<el-col class="post-left" :xs="4" :sm="4" :md="6" :lg="6" :xl="6"><div>-->
              <!--<img v-bind:src="'http://127.0.0.1:3000/'+u.headPic"/>-->
              <!--<div>-->
                <!--<button @click="att(u.userId)">取消关注</button>-->
              <!--</div>-->
            <!--</div></el-col>-->
            <!--<el-col class="post-right" :xs="20" :sm="20" :md="18" :lg="18" :xl="18"><div>-->
              <!--<div>-->
                <!--<router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">-->
                  <!--【{{u.postLabel}}】{{u.title}}-->
                <!--</router-link>-->
              <!--</div>-->
              <!--<div class="post-content">-->
                <!--<router-link tag="a" target="_blank" :to="{name:'card',params: {id: u.postId}}">-->
                  <!--{{u.postContent}}-->
                <!--</router-link>-->
              <!--</div>-->
              <!--<div class="post-bottom">-->
                <!--作者：{{u.userName}}&nbsp;&nbsp;&nbsp;浏览量：{{u.pageViews}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{(u.postTime)}}-->
              <!--</div>-->
            <!--</div></el-col>-->
          <!--</el-row>-->


        <!--</el-card>-->
      <!--</el-col>-->
    <!--</el-row>-->


    <!--<el-row>-->
      <!--<el-button type="primary"  @click="pre" :disabled="dis1">上一页</el-button>-->
      <!--<el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>-->
      <!--<el-button type="primary" @click="next" :disabled="dis2">下一页</el-button>-->
    <!--</el-row>-->
  <!--</div>-->
</template>

<script>
  export default {
    data () {
      return {
        data: [],
        // pag:1,
        // tiao:5,
        // dis1:false,
        // dis2:false
        pageIndex: 1,
        pagesize: 6,
        pageCount:0,
        myActData:[],
        activitys:[]
      }
    },
    // created(){
    //   this.$axios.get('friends/likeUser/'+this.$store.state.data1).then(
    //     ((res)=>{
    //       this.data = res.data.data;
    //     })
    //   ).catch(err=>{console.log(err)})
    // },
    methods:{
      // pre(){
      //   if(this.pag == 1){
      //     this.dis1 = true
      //   }
      //   else {
      //     this.pag--
      //     this.dis2 = false
      //   }
      // },
      // //下一页
      // next(){
      //   if(this.pag >= this.data.length/this.tiao){
      //     this.dis2 = true
      //   }
      //   else {
      //     this.pag++
      //     this.dis1 = false
      //   }
      // },
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
              window.location.reload();
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
        console.log(this.myActData[1]);
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
        console.log(result.data)
        _this.pageCount=_this.myActData.length
        _this.loadData()
        // for(var i = 0 ; i < 6; i++){
        //   this.activitys.push(this.myActData[i])
        // }
      })
    },
    computed:{
      // //数据分页
      // showData:function() {
      //   return this.data.slice((this.pag-1)*this.tiao,(this.pag-1)*this.tiao+this.tiao)
      // }
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
