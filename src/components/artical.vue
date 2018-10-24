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
                <el-button type="primary" round size="small" class="btn hidden-sm-and-down">+ 收 藏</el-button>
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
                {{index+1}}
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
        oneRecommend:[]
      }
    },created(){
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
