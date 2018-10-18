<template>
    <div>
      <h1>
        这是帖子{{id}}的页面
      </h1>
        <hr/>
      <div v-for="u in showData">
        <div>
          评论者:{{u.userid}}
          内容：{{u.comcontent}}
          时间：{{u.time}}
        </div>
      </div>
      <div v-if="show">暂时还没有评论</div>
      <el-row>
        <el-button type="primary"  @click="pre" :disabled="dis1">上一页</el-button>
        <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
        <el-button type="primary" @click="next" :disabled="dis2">下一页</el-button>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "card",
      data(){
          return {
            id:this.$route.params.id,
            data:[],
            pag:1,
            tiao:10,
            dis1:false,
            dis2:false
          }
      },
     created(){
          //获取评论
        this.$axios.get('/friends/getCom/'+this.id).then(
          ((res)=>{
            this.data = res.data.data})
        ).catch(err=>{console.log(err)})


       //更新浏览量
       this.$axios.get('/friends/uppv/'+this.id).then(
         ((res)=>{})
       ).catch(err=>{console.log(err)})
      },
    methods:{
          //上一页
      pre(){
        if(this.pag == 1){
          this.dis1 = true
        }
        else {
          this.pag--
          this.dis2 = false
        }
      },
      //下一页
      next(){
        if(this.pag > this.data.length/this.tiao){
          this.dis2 = true
        }
        else {
          this.pag++
          this.dis1 = false
        }
      }
    },
      computed:{
        showData:function () {
          if(this.data.length == 0){
            this.show = true
            return this.show = true
          }
          else {
            this.show = false
            return this.data.slice((this.pag-1)*this.tiao,(this.pag-1)*this.tiao+this.tiao)
          }
        }
      }
    }
</script>

<style scoped>

</style>
