<template>
  <el-row style="margin-bottom: 40px">
    <el-col :span="20" :offset="2">
      <el-row style="margin-bottom: 20px" >
      </el-row>
      <!--//样式1-->
      <el-row
        style="background: url('../../../static/images/bg1.png'); width: 100%; height: 400px; background-size:100% 400px; " class="hidden-sm-and-down">
        <el-col :span="20" :offset="2" style="margin-top: 40px">
          <el-tabs>
            <el-tab-pane>
              <template slot="label">
                <h3>热门帖子
                  <small style="color: red;margin-left: 0;">HOT</small>
                </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneRecommend" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}" >
                      <div class="postTop">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon animated slideInUp hidden-sm-and-down">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        <!--  id: {{item.postId}} <br>-->
                          <p style="margin-bottom: 5px;overflow: hidden;text-overflow: ellipsis;height: 20px;">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                         <p style="margin-bottom: 5px">主要内容:</p>
                          <div style="text-indent: 2em;overflow: hidden;text-overflow: ellipsis;height: 125px;">{{item.postContent}}</div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="养 生">
              <template slot="label">
                <h3> 养 生 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneYang" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon animated slideInUp hidden-sm-and-down">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        <!--  id: {{item.postId}} <br>-->
                          <p style="margin-bottom: 5px;overflow: hidden;text-overflow: ellipsis;height: 20px;">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                          <p style="margin-bottom: 5px">主要内容:</p>
                          <div style="text-indent: 2em;overflow: hidden;text-overflow: ellipsis;height: 125px;">{{item.postContent}}</div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="美 食">
              <template slot="label">
                <h3> 美 食 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneDiet" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon animated slideInUp hidden-sm-and-down">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        <!--  id: {{item.postId}} <br>-->
                          <p style="margin-bottom: 5px;overflow: hidden;text-overflow: ellipsis;height: 20px;">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                          <p style="margin-bottom: 5px">主要内容:</p>
                          <div style="text-indent: 2em;overflow: hidden;text-overflow: ellipsis;height: 125px;">{{item.postContent}}</div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="健 身">
              <template slot="label">
                <h3> 健 身 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneFit" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon animated slideInUp hidden-sm-and-down">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                          <!--id: {{item.postId}} <br>-->
                          <p style="margin-bottom: 5px;overflow: hidden;text-overflow: ellipsis;height: 20px;">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                          <p style="margin-bottom: 5px">主要内容:</p>
                          <div style="text-indent: 2em;overflow: hidden;text-overflow: ellipsis;height: 125px;">{{item.postContent}}</div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <!--//样式2-->
      <el-row
        style="background: url('../../../static/images/bg1.png'); width: 100%; height: 280px; background-size:100% 280px; " class="hidden-md-and-up">
        <el-col :span="20" :offset="2" style="margin-top: 20px">
          <el-tabs>
            <el-tab-pane>
              <template slot="label">
                <h3 class="ph3">热门帖子
                  <small style="color: red;margin-left: 0;">HOT</small>
                </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneRecommend" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post1" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop1">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon1 animated slideInUp">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 10px;">
                         <!-- id: {{item.postId}} <br>-->
                          <p style="margin-top: 40px">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="养 生">
              <template slot="label">
                <h3 class="ph3"> 养 生 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneYang" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post1" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop1">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon1 animated slideInUp">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        <!--  id: {{item.postId}} <br>-->
                          <p style="margin-top: 40px">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="美 食">
              <template slot="label">
                <h3 class="ph3"> 美 食 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneDiet" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post1" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop1">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon1 animated slideInUp">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                         <!-- id: {{item.postId}} <br>-->
                          <p style="margin-top: 40px">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="健 身">
              <template slot="label">
                <h3 class="ph3"> 健 身 </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in oneFit" :key="index">
                  <router-link :to="'/card/'+ item.postId">
                    <div class="post1" :style="{backgroundImage: 'url(' + ('http://127.0.0.1:3000/'+item.postPic1) + ')'}">
                      <div class="postTop1">
                        <p style="color:whitesmoke; margin: 15px; overflow:hidden; text-overflow: ellipsis;word-break: keep-all;white-space: nowrap">
                          {{item.title}}
                        </p>
                      </div>
                      <div class="postCon1 animated slideInUp">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                          <!--id: {{item.postId}} <br>-->
                          <p style="margin-top: 40px">标签: <span style="color:orangered">{{item.postLabel}}</span></p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
  </el-row>




</template>

<script>
  export default {
    name: "hotPost",
    data(){
      return {
        recommend:[],
        oneRecommend:[],
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
      this.$axios.get('/hotPost').then(
        ((res)=>{
          this.recommend = res.data.data.reconmend;
          for(let i =0; i<4;i++){
            this.oneRecommend.push(this.recommend[i])
          }
          this.Yang = res.data.data.Yang;
          for(let i =0; i<4;i++){
            this.oneYang.push(this.Yang[i])
          }
          this.Diet = res.data.data.Diet;
          for(let i =0; i<4;i++){
            this.oneDiet.push(this.Diet[i])
          }
          this.Fit = res.data.data.Fit;
          for(let i =0; i<4;i++){
            this.oneFit.push(this.Fit[i])
          }
        })
      ).catch(err=>{console.log(err)})
    },

  }
</script>

<style scoped>
  el-tab-pane{
    font-weight: bold;
    font-size: 20px;
  }
  h3 {
    font-weight: bold;
    font-size: 20px;
  }

  small {
    margin-left: 40px;
    color:darkgray;
  }

  .post{
    height: 250px;
    position: relative;
    cursor: pointer;
    background-size: 100% 210px;
    background-repeat:no-repeat;
  }

  .post1{
    height: 180px;
    position: relative;
    cursor: pointer;
    background-size: 100% 210px;
    background-repeat:no-repeat;
  }
  .postTop{
    width: 100%;
    height: 50px;
    background: black;
    opacity: 0.9;
    position: absolute;
    bottom: 0;
  }
  .postTop1{
    width: 100%;
    height: 50px;
    background: black;
    opacity: 0.9;
    position: absolute;
    bottom: 0;
  }
  .postCon{
    width: 100%;
    height: 200px;
    background: black;
    opacity: 0.7;
    position:absolute;
    top: 0;
    display: none;
  }
  .postCon1{
    width: 100%;
    height: 130px;
    background: black;
    opacity: 0.7;
    position:absolute;
    top: 0;
    display: none;
  }
  .post:hover .postCon{
    display: block;
  }
  .post1:hover .postCon1{
    display: block;
  }

  .ph3{
    font-size: 16px;
  }
</style>
