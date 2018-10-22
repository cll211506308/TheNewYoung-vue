<template>
  <div id="container">
    <br><h2>热门排行</h2><br>
    <div>
      <router-link tag="li" to="/artical/1">{{result[0].title}}</router-link>
      <router-link tag="li" to="/artical/2">{{result[1].title}}</router-link>
      <router-link tag="li" to="/artical/3">{{result[2].title}}</router-link>
      <router-link tag="li" to="/artical/4">{{result[3].title}}</router-link>
      <router-link tag="li" to="/artical/5">{{result[0].title}}</router-link>
      <router-link tag="li" to="/artical/6">{{result[1].title}}</router-link>
      <router-link tag="li" to="/artical/7">{{result[2].title}}</router-link>
      <router-link tag="li" to="/artical/8">{{result[3].title}}</router-link>
      <router-link tag="li" to="/artical/9">{{result[0].title}}</router-link>
      <router-link tag="li" to="/artical/10">{{result[1].title}}</router-link>
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
      },
      created(){
        this.$axios.get("http://localhost:3000/fit/fitRank")
          .then((res) => {
            console.log(res.data.data);
            this.result = res.data.data;
          })
          .catch((err) => {
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
