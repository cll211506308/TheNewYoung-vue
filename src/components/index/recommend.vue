<template>
  <el-row style="margin-top: 40px;margin-bottom: 20px">
    <el-col :span="20" :offset="2">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <h2>养生堂
              <small class="hidden-sm-and-down"> 心乱则百病生，心静则万病息。---《卫生宝鉴》</small></h2>
          </template>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index) in oneYang" :key="index">
              <el-card shadow="hover">
                <img src="../../../static/images/banner1.jpg" class="image">
                <div style="padding: 14px;">
                  <p class="pT">{{item.title}}</p>
                  <div class="bottom clearfix">
                    <p class="hidden-sm-and-down">标签: <span style="color: orangered">{{item.articalLabel}}</span></p>
                    <p style="margin-top: 15px" class="hidden-sm-and-down"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                    <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">了解更多</el-button></router-link>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <h2>营养饮食
              <small class="hidden-sm-and-down">体欲常劳，食欲常少，劳无过极，少无过滤。---《养性延命录》</small></h2>
          </template>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index) in oneDiet" :key="index">
              <el-card shadow="hover">
                <img src="../../../static/images/banner2.jpg" class="image">
                <div style="padding: 14px;">
                  <p class="pT">{{item.title}}</p>
                  <div class="bottom clearfix">
                    <p class="hidden-sm-and-down">标签: <span style="color: orangered">{{item.articallabel}}</span></p>
                    <p style="margin-top: 15px" class="hidden-sm-and-down"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                    <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">了解更多</el-button></router-link>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title" >
            <h2>健身课堂
              <small class="hidden-sm-and-down">人生如天地，和煦则春，惨郁则秋。---《医 述》</small></h2>
          </template>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index) in oneFit" :key="index">
              <el-card shadow="hover">
                <img src="../../../static/images/banner4.jpg" class="image">
                <div style="padding: 14px;">
                  <div class="pT">{{item.title}}</div>
                  <div class="bottom clearfix">
                    <p class="hidden-sm-and-down">标签: <span style="color: orangered">{{item.articallabel}}</span></p>
                    <p style="margin-top: 15px" class="hidden-sm-and-down"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                    <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">了解更多</el-button></router-link>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "recommend1",
    data() {
      return {
        activeName: '1',
        currentDate: new Date(),
        Yang:[],
        oneYang:[],
        Diet:[],
        oneDiet:[],
        Fit:[],
        oneFit:[]
      }
    },
    created(){
      //获取
      this.$axios.get('/').then(
        ((res)=>{
          this.Yang = res.data.data.Yang;
          for(let i =0; i<3;i++){
            this.oneYang.push(this.Yang[i])
          }
          this.Diet = res.data.data.Diet;
          for(let i =0; i<3;i++){
            this.oneDiet.push(this.Diet[i])
          }
          this.Fit = res.data.data.Fit;
          for(let i =0; i<3;i++){
            this.oneFit.push(this.Fit[i])
          }
        })
      ).catch(err=>{console.log(err)})
    },

  }
</script>

<style scoped>

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    height: 40px;
    width: 85px;
    font-weight: bold;
  }

  .image {
    width: 100%;
    min-height: 100px;
    max-height: 215px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  h2 {
    font-weight: bold;
    font-size: 22px;
    width: 100%;
    text-indent: 2em;
    /*background: url("../../../static/images/navbg1.jpg");*/
  }

  small {
    margin-left: 100px;
    color:sienna;
    font-size: 18px;
    text-indent: 10em;
  }

  .pT{
    font-size: 18px;
    font-weight: 600;
    color: #000009;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
    width: 100%;
    margin-top: 10px;
  }

  p{
    height: 20px;
    width: 100%;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    color:#000009;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
</style>
