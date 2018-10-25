<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card class="box-card" shadow="hover" style="border-radius: 15px">
          <el-col :span="22" :offset="1">
            <el-row :gutter="20" style="margin-top: 10px;margin-bottom: 25px">
              <el-col :span="10">
                <img src="../../static/images/banner1.jpg" alt="" style="width: 100%;min-height: 100px;max-height: 250px">
              </el-col>
              <el-col :span="14">
                <p class="articalT">{{result.title}}</p>
                <p class="articalL">标签: <span style="color: orangered">{{result.articallabel}}</span></p>
                <p class="articalL hidden-sm-and-down">
                  <span>作者: {{result.userName}}</span>
                  <span style="float:right"><i class="el-icon-view"></i> <span style="color: darkgrey">{{result.pageViews}}</span></span>
                </p>
                <el-button v-if="!isCol" type="primary" round size="small" class="btn hidden-sm-and-down" @click="col">+ 收 藏</el-button>
                <el-button v-if="isCol" round size="small" class="btn hidden-sm-and-down" @click="delCol">已 收 藏</el-button>
              </el-col>
            </el-row>
            <el-row style="margin-bottom: 25px;background: url('../../static/images/border3.jpg');background-size: 100% 100%">
              <el-col :span="20" :offset="2" style="margin-top: 35px;margin-bottom: 35px">
                <div class="articalCon">
                  {{result.content}}
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1" style="border-radius: 5px;background: white">
           <div class="paiHang">
             <img class="hidden-sm-and-down" src="../../static/images/lebel.png" alt="" style="position: absolute;top:50%;margin-top: -16px; left:30%">
             <h3>排行榜</h3>
           </div>
            <div class="paiMing" v-for="(item,index) in oneRecommend">
                <span style="margin-right: 8px" v-if="index==0"><img src="../../static/images/gold.png" class="gold"></span>
                <span style="margin-right: 8px" v-if="index==1"><img src="../../static/images/yin.png" class="yin"></span>
                <span style="margin-right: 8px" v-if="index==2"><img src="../../static/images/tong.png" class="tong"></span>
                <span style="margin-right: 8px" v-if="index>2">{{index+1}}.</span>
                <router-link :to="'/artical/'+item.articalId" target="_blank">{{item.title}}</router-link>
            </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "artical",
    data(){
      return {
        id:this.$route.params.id,
        result:[],
        recommend:[],
        oneRecommend:[],
        length:''
      }
    },
    created(){
      this.$axios.get("/relativeEssay/" + this.id)
        .then((res) => {
          this.result = res.data.data[0];
        }).catch((err) => {
        console.log(err)
      });

      this.$axios.get("/")
        .then((res) => {
          this.recommend = res.data.data.reconmend;
          for(let i =0; i<6;i++){
            this.oneRecommend.push(this.recommend[i])
          }
        }).catch((err) => {
        console.log(err)
      });

      //更新浏览量
      this.$axios.get('/upPv/'+this.id).then(
        ((res)=>{})
      ).catch(err=>{console.log(err)});

      //判断是否已收藏
      this.$axios.get('/getCol', {
        params: {
          userId:this.$store.state.data1,articalId: this.id
        }
      }).then((res) => {
        this.length = res.data.data.length
      })
        .catch( (error) => {
          console.log(error);
        });
    },
    methods:{
      col(){
        if(this.$store.state.data1 == null){
          this.$message({
            message: '您还没登陆，请先登陆！',
            type: 'warning'
          });
        }
        else {
          let that = this
          this.$axios.get('/addCol', {
            params: {
              userId:this.$store.state.data1,articalId:this.id
            }
          })
            .then(function (res) {
              if(res.data.code == 200){
                that.$message({
                  message: '收藏成功！',
                  type: 'success'
                });
                window.location.reload();
              }
            })
            .catch(function (error) {
              console.log(error);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      delCol(){
        let that = this
        this.$axios.get('/delCol', {
          params: {
            userId:this.$store.state.data1,articalId: this.id
          }
        })
          .then(function (res) {
            if(res.data.code == 200){
              that.$message({
                message: '已取消关注!',
                type: 'success'
              });
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },
    computed:{
      isCol: function () {
        if (this.length == 0) {
          return false
        }
        else {
          return true
        }
      },
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color:black;
  }
  h3{
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }

  .gold,.yin,.tong{
    position: relative;
    top: 13px;
    margin-left: -8px;
  }

  .paiHang{
    width: 100%;
    height: 60px;
    background: url("../../static/images/paihang.jpg");
    background-size: 100% 100%;
    position:relative;
  }

  .paiMing:hover{
    box-shadow:0px 0px  10px 2px #aaa;
  }

  .paiMing{
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

  .btn{
    margin-top: 20px;
    float:right;
  }

  .articalT{
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 20px;
  }


  .articalL{
    margin-top: 20px;
    font-weight: bold;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .articalCon{
    text-indent: 2em;
    line-height: 30px;
    /*font-weight: ;*/
    color: #2c2c2c;
    font-size: 17px;
  }

</style>
