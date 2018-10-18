<template>
  <div>
    <h2>这是关于{{sort}}的健康饮食的文章</h2>
  </div>
</template>

<script>
    export default {
        name: "someFit",
      data () {
          return {
            sort:this.$route.params.sort
          }
        }
      }
</script>

<style scoped>

</style>
