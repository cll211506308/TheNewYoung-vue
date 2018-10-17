<template>
  <div>
    <router-link to="/friends">全部帖子</router-link>
    <router-link to="/friends/likeuser/5">我的关注
    <span v-if="show1">还没登陆</span>
    </router-link>
    <router-view class="card"></router-view>


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
