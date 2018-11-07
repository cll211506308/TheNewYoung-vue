<template>
  <el-row :gutter="20">
    <el-col  :xs="12" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in title1">
      <el-card shadow="hover" class="cards">
        <router-link tag="a" target="_blank" :to="'/artical/'+item.articalId"
                     style="width: 90%;float: left;text-decoration: none;color: black;">
        <img v-bind:src="'http://127.0.0.1:3000/'+ item.coverPic" class="image">
          <div class="title">{{item.title}}</div>
            <div class="able">标签: <span style="color: orangered">{{item.articalLabel}}</span></div>
            <div style="margin-top: 15px;margin-bottom: 20px" >
              <i class="el-icon-view coltime"> {{item.colTime}}</i></div>
        </router-link>
           <!-- <el-button type="primary" @click="delCol(item.articalId)" class="">删除</el-button>-->
        <el-button icon="el-icon-error"circle @click="delCol(item.articalId)" style="width: 25px;height: 25px;text-align: center"></el-button>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "usercollections",
    methods:{
      details(articalId){
        this.$router.push({path: `/artical/+${articalId}`})
      },
      delCol(id) {
        let that = this;
        this.$confirm('此操作将永久删除该收藏, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonClass: '取消',
          type: 'waring'
        }).then(() => {
          this.$axios.get('/delCol', {
            params: {userId: this.$store.state.data1, articalId: id}
          })
            .then((res => {
                that.$message({
                  message: '删除成功',
                  type: 'success'
                });
              setTimeout(() => {
                this.$axios.get('users/collections/'+this.$store.state.data1).then(
                  ((res)=>{
                    this.title1 = res.data.data;
                  })
                ).catch(err=>{console.log(err)})
              }, 1);

              })
            ).catch(function (error) {
            console.log(error);
          })
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
  .item :link{
    color: black;
  }
  .image{
    width: 100%;
    height: 150px;
  }
  .cards{
    height: 350px;
    margin-bottom: 15px;
  /*  text-align: center;
    margin: 0 auto;*/
  }
  .title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
    width:100% ;
    height: 30px;
    text-align: left;
    margin-top:10px;
    font-size: 18px;
  }
  .able{
    width: 100%;
    height: 15px;
  }
  .coltime{
    width: 100%;
    height: 20px;
  }
  /*@media only screen and (max-width: 800px){*/
/*.cards{*/
  /*width: 100%;*/
  /*height:350px;*/
/*}*/
    /*}*/
</style>

