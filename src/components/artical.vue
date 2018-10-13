<template>
    <div>
        <index-header></index-header>
        <h1>这是id为{{id}}的文章</h1>
    </div>
</template>

<script>
  import header from './index/header'
    export default {
        name: "artical",
      data(){
          return {
            id:this.$route.params.id
          }
      },
      components:{
          'index-header':header
      }
    }
</script>

<style scoped>

</style>
