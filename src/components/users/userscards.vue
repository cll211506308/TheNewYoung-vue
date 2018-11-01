<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div v-for="item in title1">
        <el-card class="box-card" shadow="hover" style="margin-bottom: 6px;">
          <div class="text item">
            <router-link tag="a" target="_blank" :to="{name:'card',params: {id: item.postId}}"
                         style="width: 90%;float: left;text-decoration: none;color: black;">
            {{item.title}}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{item.postTime}}
            </router-link>
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-delete" @click="delPost(item.postId)"></el-button>
          </div>
        </el-card>
      </div>

    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: "userscard",
    methods:{

      delPost(postid){
        let that = this;
        this.$confirm('此操作将永久删除该贴子, 是否继续?', '提示',{
          confirmButtonText: '确定',
          cancelButtonClass: '取消',
          type: 'waring'
        }).then(()=>{
          this.$axios.get('friends/deletePost/'+ postid).then(
            ((res)=>{
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            })
          ).catch(err=>{console.log(err)})
        }).catch(() => {
          that.$message({
            message: '已取消删除',
            type: 'info'
          });
        });
      }
    },
    data(){
      return {
        title1:[],
    }
    },
    created(){
      this.$axios.get('/friends').then(
        ((res)=>{
          for(var i = 0;i< res.data.data.length;i++){
            if(res.data.data[i].userId == this.$store.state.data1 ){
              this.title1.push(res.data.data[i])
            }
            console.log(this.title1)
          }

        })
      ).catch(err=>{console.log(err)})
    }
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
  }
  .box-card {
    width: 100%;
    height: 61px;
  }
</style>
