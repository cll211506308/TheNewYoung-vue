<template>
  <div>
    <router-link to="/friends">全部帖子</router-link>
    <router-link to="/friends/likeuser/5">我的关注
    <span v-if="show1">还没登陆</span>
    </router-link>
    <router-view class="card"></router-view>

    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=26&gp=0.jpg" alt="...">
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=26&gp=0.jpg" alt="...">
          <div class="carousel-caption">
            ...
          </div>
        </div>
        ...
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "friends",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{

      },
      computed:{
        show1:function () {
          if(this.$store.state.data1 === null){
            return true
          }
          else {
            return false
          }
        }
      }
    }
</script>

<style scoped>
.card{
  width: 800px;
  border: 1px solid white;
}
</style>
