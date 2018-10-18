<template>
    <div id="s1">
      <div v-for="u in showData">
        <div class="s1">
          <router-link tag="a" target="_blank"  :to="{ name: 'card', params: { id: u.postid }}">
            标题：{{u.title}}
            标签：{{u.postable}}
            内容：{{u.postcontent}}
            作者：{{u.username}}
          </router-link>
          {{(u.time.slice(0,19).replace(/T/, "  "))}}
          浏览量：{{u.pageviews}}
        </div>
      </div>
      <el-row>
        <el-button type="primary"  @click="pre" :disabled="dis1">上一页</el-button>
        <el-button type="primary">{{pag}}/{{ Math.ceil(data.length/tiao) }}</el-button>
        <el-button type="primary" @click="next" :disabled="dis2">下一页</el-button>
      </el-row>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          data: [],
          pag:2,
          tiao:3,
          dis1:false,
          dis2:false
        }
      },created(){
        this.$axios.get('friends').then(
          ((res1)=>{
            this.data = res1.data.data;
            for (let i = 0; i < this.data.length; i++) {

              this.$axios.get('users/username/' + res1.data.data[i].userid).then(
                ((res2)=>{
                   this.data[i].username = res2.data.data[0].username
                })
              ).catch(err=>{console.log(err)})
            }
          })
        ).catch(err=>{console.log(err)})

        setTimeout(() => {
          this.pag--
        }, 500)
      },
      methods:{
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
      mounted(){

      },
      computed:{
        //数据分页
        showData:function() {
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
