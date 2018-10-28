<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div v-for="item in title1">
        <el-card class="box-card" shadow="hover" style="margin-bottom: 6px;" >
          <div class="text item">
            <router-link tag="a" :to="'/artical/'+item.articalId" target="_blank"
                         style="width: 90%;float: left;text-decoration: none;color: black;">
            {{item.title}}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{item.colTime}}
            </router-link>
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-delete" @click="delCol(item.articalId)"></el-button>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "usercollections",

    methods:{
     delCol(id){
        let that = this
        this.$axios.get('/delCol', {
          params: {
            userId:this.$store.state.data1,articalId:id
          }
        })
          .then(function (res) {
            that.$message({
              message: '删除成功',
              type: 'success'
            });
            setTimeout(() => {
              location.reload()
            }, 500);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    data(){
      return {
        title1:[],
        id:this.$route.params.id
      }
    },
    created(){
      this.$axios.get('users/collections/'+this.$store.state.data1).then(
        ((res)=>{
          this.title1 = res.data.data;
        })
      ).catch(err=>{console.log(err)})
    }
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
  }
  .item :link{
    color: black;
  }
  .box-card {
    width: 100%;
    padding: 0;
    height: 61px;
  }

</style>

