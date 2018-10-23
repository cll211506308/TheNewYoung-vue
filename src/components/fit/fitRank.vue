<template>
  <div id="container">
    <br><h2>热门排行</h2><br>
    <div>
      <router-link tag="li" v-for="(item,index) in result" :key="index" v-if="index<10"
                   :to="{path:'/artical/' + item.articalId}">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fitRank",
    data(){
      return{
        result:[]
      }
    }, created(){
      this.$axios.get("/fit/fitrank")
        .then((res) => {
          this.result = res.data.data;
        }).catch((err) => {
          console.log(err)
        })
    }
  }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    border: 2px solid gray;
    border-radius: 20px;
    margin-top: 40px;
  }
  h2{
    margin-left: 30px;
  }
  li{
    width: 100%;
    height: 40px;
    list-style: none;
    margin-left: 20px;
  }
</style>
