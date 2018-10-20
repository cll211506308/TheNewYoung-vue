<template>
    <div>
        <h1>这是id为{{id}}的文章</h1>
    </div>
</template>

<script>
    export default {
        name: "artical",
      data(){
          return {
            id:this.$route.params.id
          }
      }
    }
</script>

<style scoped>

</style>
