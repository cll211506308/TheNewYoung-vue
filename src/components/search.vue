<template>
  <el-row>
    <el-col :span="18" :offset="3" style="margin-top: 20px; background: aliceblue; border-radius: 5px">
      <el-col :span="20" :offset="2">
        <el-row>
          <el-col :span="16" style="margin-bottom: 20px; margin-top: 20px;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="用户管理" name="first">
                <template slot="label">
                  <h2>{{keys}}</h2>
                </template>
                <div class="search1" v-for="item in data">
                  <el-row>
                    <el-col :span="8">
                      <router-link :to="'/artical/'+ item.articalId" target="_blank"><img src="../../static/images/banner1.jpg" alt="" style="width: 100%;height: 150px;"></router-link>
                    </el-col>
                    <el-col :span="14" :offset="2">
                      <router-link :to="'/artical/'+ item.articalId" target="_blank"><p class="sT">{{item.title}}</p></router-link>
                      <p class="sA">标签: <span style="color:orangered">{{item.articalLabel}}</span></p>
                      <p class="sP"><i class="el-icon-view"></i> {{item.pageViews}}</p>
                    </el-col>
                  </el-row>
                  <el-row>
                  </el-row>
                </div>
                <el-pagination
                  :page-size="20"
                  :pager-count="11"
                  layout="prev, pager, next"
                  :total="1000"
                  style="background:aliceblue ">
                </el-pagination>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="6" :offset="2" style="margin-top: 30px;margin-bottom: 20px;">
            <h3 style="margin-bottom: 20px">热门标签 <small style="color: red;">HOT</small></h3>
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
          </el-col>
        </el-row>
      </el-col>
    </el-col>
  </el-row>

</template>

<script>
    export default {
        name: "search",
      data(){
        return {
          keys:this.$route.params.keys,
          data:[],
          activeName: 'first'
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
    }
</script>

<style scoped>
  .hotLabel{
    margin-right: 5px;
    margin-bottom: 15px;
  }
  .search1{
    margin-bottom: 10px;
    cursor: pointer;
  }

  .sT{
    position: absolute;
    font-size: 18px;
    top: 25px;
    font-weight: bold;
    color: #000009;
  }

  .sA{
    position:absolute;
    top: 90px;
    font-weight: 600;
  }

  .sP{
    color:darkgray;
    position:absolute;
    bottom: 42px;
    right: 50px;

  }

</style>
