<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :md="16" :sm="24">
        <el-card class="box-card" shadow="hover" style="border-radius: 15px">
          <el-col :span="20" :offset="2" style="margin-bottom: 20px;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="用户管理" name="first">
                <template slot="label">
                  <h2>{{keys}}</h2>
                </template>
                <div class="search1" v-for="item in myActData1">
                  <el-row>
                    <el-col :span="8">
                      <router-link :to="'/artical/'+ item.articalId" target="_blank"><img v-bind:src="'http://127.0.0.1:3000/'+ item.coverPic" alt="" class="image"></router-link>
                    </el-col>
                    <el-col :span="14" :offset="2">
                      <router-link :to="'/artical/'+ item.articalId" target="_blank"><p class="sT">{{item.title}}</p></router-link>
                      <p class="sA">标签: <span style="color:orangered">{{item.articalLabel}}</span></p>
                      <p class="sP hidden-sm-and-down"><i class="el-icon-view"></i> {{item.pageViews}}</p>
                    </el-col>
                  </el-row>
                  <el-row>
                  </el-row>
                </div>
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

              </el-tab-pane>
            </el-tabs>
          </el-col>

        </el-card>
      </el-col>
      <el-col :span="7" :offset="1" class="hidden-sm-and-down">
        <el-card class="box-card fixed" shadow="hover" style="margin-bottom: 290px">
          <h3 style="margin-bottom: 20px;text-align: center">热门标签 <small style="color: red;">HOT</small></h3>
          <a href="/search/养生" ><el-tag class="hotLabel">养生</el-tag></a>
          <a href="/search/健身" ><el-tag type="success" class="hotLabel">健身</el-tag></a>
          <a href="/search/营养" ><el-tag type="info" class="hotLabel">营养</el-tag></a>
          <a href="/search/瘦身" ><el-tag type="warning" class="hotLabel">瘦身</el-tag></a>
          <a href="/search/增肌" ><el-tag type="danger" class="hotLabel">增肌</el-tag></a>
          <a href="/search/健康作息" ><el-tag class="hotLabel">健康作息</el-tag></a>
          <a href="/search/消食" ><el-tag type="success" class="hotLabel">消食</el-tag></a>
          <a href="/search/降血压" ><el-tag type="info" class="hotLabel">降血压</el-tag></a>
          <a href="/search/抗癌" ><el-tag type="warning" class="hotLabel">抗癌</el-tag></a>
          <a href="/search/止咳润肺" ><el-tag type="danger" class="hotLabel">止咳润肺</el-tag></a>
        </el-card>
      </el-col>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "search1",
    data(){
      return {
        pageIndex: 1,
        pagesize: 6,
        pageCount:0,
        keys:this.$route.params.keys,
        data:[],
        activeName: 'first',
        myActData:[],
        activitys:[]
      }
    },
    created(){
      this.$axios.get('/search/'+this.keys).then(
        ((res) => {
          this.data = res.data.data.search1
        })
      ).catch(err => {
        console.log(err)
      })
    },
    computed:{
      myActData1() {
        return this.activitys
      }

    },
    methods:{
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
      this.$axios.get("/search/"+this.keys).then((result) =>{
        _this.myActData= result.data.data.search1;
        console.log(result.data)
        _this.pageCount=_this.myActData.length
        _this.loadData()
        // for(var i = 0 ; i < 6; i++){
        //   this.activitys.push(this.myActData[i])
        // }
      })
    }

  }
</script>

<style scoped>
  .image{
    height: 200px;
    width: 100%;
  }

  h2{
    font-size: 22px;
  }

  .hotLabel{
    margin-right: 5px;
    margin-bottom: 15px;
  }

  .hotLabel:hover{
    transform: scale(1.1);
  }

  .search1{
    margin-bottom: 10px;
    cursor: pointer;
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

  .sT{
    position: absolute;
    font-size: 18px;
    top: 30px;
    font-weight: bold;
    color: #000009;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }

  .sA{
    position:absolute;
    bottom: 30%;
    font-weight: 600;
  }

  .sP{
    color:darkgray;
    position:absolute;
    bottom: 42px;
    right: 50px;

  }

  @media only screen and (max-width: 1300px){
    .image{
      height: 160px;
    }
  }

  @media only screen and (max-width: 900px){
    .image{
      height: 120px;
    }

    h2{
      height: 20px;
    }

    .sT{
      top: 25px;
      font-size: 16px;
    }

    .sA{
      font-size: 15px;
    }

  }

</style>
