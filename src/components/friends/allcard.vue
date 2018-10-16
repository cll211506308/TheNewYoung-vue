<template>
    <div id="s1">
      <div v-for="u in showData">
        <div class="s1">
          <router-link tag="a" target="_blank"  :to="{ name: 'card', params: { id: u.postid }}">
            标题：{{u.title}}
            标签：{{u.postable}}
            内容：{{u.postcontent}}
          </router-link>
          {{(u.time.slice(0,19).replace(/T/, "  "))}}
          浏览量：{{u.pageviews}}
        </div>
      </div>
      <el-button-group>
        <el-button type="primary" @click="pre">上一页</el-button>
        <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
        <el-button type="primary" @click="next">下一页</el-button>
      </el-button-group>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          data: [],
          pag:1,
          tiao:3
        }
      },created(){
        this.$axios.get('friends').then(
          ((res)=>{this.data = res.data.data})
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
        //下一页
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
        //数据分页
        showData:function () {
            return this.data.slice((this.pag-1)*this.tiao,(this.pag-1)*this.tiao+this.tiao)
        }
      }
    }
</script>

<style scoped>
  .s1{
    border: 1px solid white;
    border-bottom-color: #ccc;
    padding: 20px;
  }
  .s1:hover{
    border: 1px solid #ccc;
  }
</style>
