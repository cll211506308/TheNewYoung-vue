<template>
  <div>
    <h2>热门排行</h2>
    <div id="rank">
      <router-link tag="li" v-for="(item,index) in result" :key="index" v-if="index<10"
                   :to="{path:'/artical/' + item.articalId}">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "youngLifeRank",
      data(){
        return{
          result:[]
        }
      }, created(){
        this.$axios.get("/youngLife/youngrank").then((res) => {
          this.result = res.data.data;
        }).catch((err) => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  h2{text-align: center;}
  li{
    list-style: none;
    margin-top: 5%;
  }
</style>
