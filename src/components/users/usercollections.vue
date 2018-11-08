<template>
  <el-row :gutter="10">
    <el-col  :xs="12" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in title1">
      <div id="tests">
      <el-card shadow="hover" class="cards">
        <el-button icon="el-icon-error"circle @click="delCol(item.articalId)" class="buttons"></el-button>
        <router-link tag="a" target="_blank" :to="'/artical/'+item.articalId"
                     style="width: 90%;float: left;text-decoration: none;color: black;">
          <div class="test"> <img v-bind:src="'http://127.0.0.1:3000/'+ item.coverPic" class="image"></div>
          <div class="title">{{item.title}}</div>
            <div class="able">标签: <span style="color: orangered">{{item.articalLabel}}</span></div>
            <div style="margin-top: 15px;margin-bottom: 20px" >
              <i class="el-icon-view coltime"> {{item.colTime}}</i></div>
        </router-link>
      </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
/*  import stroll from '../../stroll.min.js';
  stroll.bind('#tests .cards');*/
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
  .cards{
    height: 310px;
    margin-bottom: 15px;
    position: relative;
  }
  .image{
    width: 110%;
    height: 150px;
  }
  .title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
    width:110% ;
    height: 40px;
    text-align: left;
    margin-top:10px;
    font-size: 18px;
  }
  .able{
    width: 110%;
    height: 25px;
  }
  .coltime{
    width: 110%;
    height: 30px;
    color: gray;
    font-size: 14px;
  }
.buttons{
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}
  .cards:hover .buttons{
    display: block;
    color: red;
  }
/*  .cards {
    -webkit-transition: all 600ms ease;
    -moz-transition: all 600ms ease;
    -ms-transition: all 600ms ease;
    -o-transition: all 600ms ease;
    transition: all 600ms ease;

    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  .cards.past {
    -webkit-transform: scale( 0.01 );
    -moz-transform: scale( 0.01 );
    -ms-transform: scale( 0.01 );
    -o-transform: scale( 0.01 );
    transform: scale( 0.01 );
  }
  .cards.future {
    -webkit-transform: scale( 0.01 );
    -moz-transform: scale( 0.01 );
    -ms-transform: scale( 0.01 );
    -o-transform: scale( 0.01 );
    transform: scale( 0.01 );
  }*/

</style>

