<template>
    <div>
      <h1>
        这是帖子{{id}}的页面{{this.$store.state.data1}}
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
      <el-button-group>
        <el-button type="primary" @click="pre">上一页</el-button>
        <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
        <el-button type="primary" @click="next">下一页</el-button>
      </el-button-group>
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
            show:false
          }
      },
     created(){
        this.$axios.get('/friends/getCom/'+this.id).then(
          ((res)=>{
            this.data = res.data.data})
        ).catch(err=>{console.log(err)})
      },
    methods:{
      pre(){
        if(this.pag == 1){
          alert('已经是第一页了')
        }
        else {
          this.pag--
        }
      },
      next(){
        if(this.pag > this.data.length/this.tiao){
          alert('已经是最后一页了')
        }
        else {
          this.pag++
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
