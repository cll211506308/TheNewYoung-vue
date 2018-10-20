<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-row style="margin-bottom: 20px">
        <!--<h2>热门帖子-->
          <!--<small> Subtext for header</small>-->
        <!--</h2>-->
      </el-row>
      <el-row
           style="background: url('../../../static/images/bg1.png'); width: 100%; height: 400px; background-size:100% 400px; ">
        <el-col :span="20" :offset="2" style="margin-top: 40px">
          <el-tabs>
            <el-tab-pane>
              <template slot="label">
                <h3>热门帖子
                <small style="color: red;margin-left: 0;">HOT</small>
                </h3>
              </template>
              <el-row :gutter="20">
                <el-col :span="6" v-for="item in oneRecommend">
                  <router-link tag="div" target="_blank" to="" class="post" style="background: url('../../../static/images/abcd.png'); background-size: 100% 210px; background-repeat:no-repeat; ">
                    <div class="postTop">
                        <p style="color:whitesmoke; margin: 15px; word-wrap:break-word; overflow:hidden;">
                          title:{{item.title}}
                        </p>
                    </div>
                    <div class="postCon animated slideInUp">
                        <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                            id: {{item.postId}} <br>
                            label: {{item.postLabel}} <br>
                            content: <br>
                            kjhjadskfhlahflk;hjdklfhklhafdklhakdfhkldhflkahlkhklafkhjjgkjgljkgjkhjklhk
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
                <el-col :span="6" v-for="item in oneRecommend">
                  <router-link tag="div" target="_blank" to="" class="post" style="background: url('../../../static/images/banner1.jpg'); background-size: 100% 200px; background-repeat:no-repeat;">
                    <div class="postTop">
                      <p style="color:whitesmoke; margin: 15px; word-wrap:break-word; overflow:hidden;">
                        title:{{item.title}}
                      </p>
                    </div>
                    <div class="postCon animated slideInUp">
                      <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        id: {{item.postId}} <br>
                        label: {{item.postLabel}} <br>
                        content: <br>
                        kjhjadskfhlahflk;hjdklfhklhafdklhakdfhkldhflkahlkhklafkhjjgkjgljkgjkhjklhk
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
                <el-col :span="6" v-for="item in oneRecommend">
                  <router-link tag="div" target="_blank" to="" class="post" style="background: url('../../../static/images/banner4.jpg'); background-size: 100% 200px; background-repeat:no-repeat;">
                    <div class="postTop">
                      <p style="color:whitesmoke; margin: 15px; word-wrap:break-word; overflow:hidden;">
                        title:{{item.title}}
                      </p>
                    </div>
                    <div class="postCon animated slideInUp">
                      <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        id: {{item.postId}} <br>
                        label: {{item.postLabel}} <br>
                        content: <br>
                        kjhjadskfhlahflk;hjdklfhklhafdklhakdfhkldhflkahlkhklafkhjjgkjgljkgjkhjklhk
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
                <el-col :span="6" v-for="item in oneRecommend">
                  <router-link tag="div" target="_blank" to="" class="post" style="background: url('../../../static/images/banner2.jpg'); background-size: 100% 200px; background-repeat:no-repeat;">
                    <div class="postTop">
                      <p style="color:whitesmoke; margin: 15px; word-wrap:break-word; overflow:hidden;">
                        title:{{item.title}}
                      </p>
                    </div>
                    <div class="postCon animated slideInUp">
                      <div style="color:whitesmoke;word-wrap:break-word; overflow:hidden; margin: 15px;">
                        id: {{item.postId}} <br>
                        label: {{item.postLabel}} <br>
                        content: <br>
                        kjhjadskfhlahflk;hjdklfhklhafdklhakdfhkldhflkahlkhklafkhjjgkjgljkgjkhjklhk
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
  }
  .postTop{
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
  .post:hover .postCon{
    display: block;
  }

</style>
