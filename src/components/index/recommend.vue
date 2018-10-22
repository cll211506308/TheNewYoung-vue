<template>
    <el-row style="margin-top: 20px;margin-bottom: 20px">
      <el-col :span="18" :offset="3">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              <h2>养生堂
                <small> Health is not everything, no health, no everything</small></h2>
            </template>
            <el-row :gutter="20">
              <el-col :span="8" v-for="item in oneYang">
                <el-card shadow="hover">
                  <img src="../../../static/images/banner1.jpg" class="image" style="width: 100%;height: 250px;">
                  <div style="padding: 14px;">
                    <span>{{item.title}}</span>
                    <div class="bottom clearfix">
                      <p>标签: <span style="color: orangered">{{item.articalLabel}}</span></p>
                      <p style="margin-top: 15px"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                      <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">know more</el-button></router-link>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <h2>营养饮食
                <small>Radish and ginger keep away from doctor</small></h2>
            </template>
            <el-row :gutter="20">
              <el-col :span="8" v-for="item in oneDiet">
                <el-card shadow="hover">
                  <img src="../../../static/images/banner2.jpg" class="image" style="width: 100%;height: 250px;">
                  <div style="padding: 14px;">
                    <span>{{item.title}}</span>
                    <div class="bottom clearfix">
                      <p>标签: <span style="color: orangered">{{item.articallabel}}</span></p>
                      <p style="margin-top: 15px"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                      <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">know more</el-button></router-link>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title" >
              <h2>健身课堂
                <small>The power of the brain lies in the movement</small></h2>
            </template>
            <el-row :gutter="20">
              <el-col :span="8" v-for="item in oneFit">
                <el-card shadow="hover">
                  <img src="../../../static/images/banner4.jpg" class="image" style="width: 100%;height: 250px;">
                  <div style="padding: 14px;">
                    <span>{{item.title}}</span>
                    <div class="bottom clearfix">
                      <p>标签: <span style="color: orangered">{{item.articallabel}}</span></p>
                      <p style="margin-top: 15px"><i class="el-icon-view"> {{item.pageViews}}</i></p>
                      <router-link :to="'/artical/'+item.articalId" target="_blank"><el-button type="primary" class="button">know more</el-button></router-link>
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
        name: "recommend",
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
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    height: 40px;
    width: 85px;
  }

  .image {
    width: 100%;
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
  }

  small {
    margin-left: 40px;
    color:darkgray;
  }

  span{
    font-size: 16px;
    font-weight: 600;
    color: #000009;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p{
    height: 20px;
    width: 50%;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    color:#000009;
  }
</style>
