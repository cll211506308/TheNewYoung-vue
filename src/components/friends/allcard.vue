<template>
    <div id="s1">
      <!--{{ data }}-->
      <div v-for="(u,i) in data">---{{u.postabel}}---索引：{{i}}</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      data () {
        return {
          data: null,
          shuzi:null
        }
      },created(){
        this.$axios.get('friends').then(
          ((res)=>{this.data = res.data.data})
        ).catch(err=>{console.log(err)})
      }
    }
</script>

<style scoped>
    #s1{
      border:1px solid red;
    }
</style>
