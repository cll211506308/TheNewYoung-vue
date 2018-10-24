<template>
  <el-row style="padding-top: 20px; padding-bottom: 20px;background: whitesmoke">
    <el-col :span="20" :offset="2">
      <el-col :span="16">
        <el-card class="box-card" shadow="hover" style="border-radius: 15px">
          <el-col :span="20" :offset="2">
            {{result}}
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card class="box-card" shadow="hover">
           <div class="paiHang"></div>
        </el-card>
      </el-col>
    </el-col>
  </el-row>
  <!--<el-row>-->
    <!--<el-col :span="20" :offset="2">-->
      <!--<h1>这是id为{{id}}的文章</h1>-->
      <!--<h3>作者：{{result.title}}</h3>-->
      <!--<div id="text">-->
        <!--<p>{{result.content}}</p>-->
        <!--<el-button type="primary" icon="el-icon-star-off">添加收藏</el-button>-->
        <!--&lt;!&ndash;<el-button type="primary" icon="el-icon-star-on">取消收藏</el-button>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-col>-->
  <!--</el-row>-->
</template>

<script>
  export default {
    name: "artical",
    data(){
      return {
        id:this.$route.params.id,
        result:[]
      }
    },created(){
      this.$axios.get("/relativeEssay/" + this.id)
        .then((res) => {
          this.result = res.data.data;
        }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .paiHang{
    width: 100%;
    height: 60px;
    background: sienna;
  }

</style>
