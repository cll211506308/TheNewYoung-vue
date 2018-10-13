<template>
    <div>
      {{ data }}
      <h1>分割</h1>
      {{shuzi}}
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


        this.$axios.get('friends/count').then(
          ((res)=>{this.shuzi = res.data.data})
        ).catch(err=>{console.log(err)})
      }
    }
</script>

<style scoped>

</style>
