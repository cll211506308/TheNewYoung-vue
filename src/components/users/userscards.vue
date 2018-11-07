<template>
  <div>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div v-for="item in title1">
        <el-card class="box-card" shadow="hover" style="margin-bottom: 5px;">
          <div class="text item">
            <router-link tag="a" target="_blank" :to="{name:'card',params: {id: item.postId}}"
                         style="width: 90%;float: left;text-decoration: none;color: black;">
              <div class="userphoto">
                <img v-bind:src="picSrc+data2.headPic" alt="">
                <p class="username">{{item.userName}}</p>
              </div>
              <div class="datas">
                <span class="title">{{item.title}}</span><br><br>
                <span class="content">{{item.postContent}}</span><br>
                <span class="posttime">发布于：{{item.postTime}}</span>
              </div>
            </router-link>
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-delete" @click="delPost(item.postId)"></el-button>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
  </div>
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
              setTimeout(() => {
                this.$axios.get('/friends').then(
                  ((res)=>{
                    this.title1=[]
                    for(var i = 0;i< res.data.data.length;i++){
                      if(res.data.data[i].userId == this.$store.state.data1 ){
                        this.title1.push(res.data.data[i])
                      }
                    }
                  })
                ).catch(err=>{console.log(err)})
              }, 1);

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
        data2:'',
        picSrc:this.$store.state.picurl,
    }
    },
    created(){
      this.$axios.get('/friends').then(
        ((res)=>{
          for(var i = 0;i< res.data.data.length;i++){
            if(res.data.data[i].userId == this.$store.state.data1 ){
              this.title1.push(res.data.data[i])
            }
          }

        })
      ).catch(err=>{console.log(err)});
      this.$axios.get('users/username/'+this.$store.state.data1).then(
        ((res)=>{
          this.data2 = res.data.data[0];
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
    height:150px;
  }
  .userphoto{
    width: 140px;
    height: 140px;
    float: left;
    text-align: center;
   /* line-height: 140px;*/
  }
  .userphoto img{
    width: 75px;
    height: 75px;
    border-radius: 50%;

  }
  .title{
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
  }
  .posttime{
      color: gray;
  }
  .username{
     font: 16px bolder;
    margin-top: 10px;
  }
</style>
