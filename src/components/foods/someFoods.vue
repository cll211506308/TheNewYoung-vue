<template>
  <div>
    <h2>这是关于{{sort}}的营养饮食文章</h2>
  </div>
</template>

<script>
    export default {
        name: "someFoods",
      data () {
          return {
            sort: this.$route.params.sort
          }
      }
    }
</script>

<style scoped>

</style>
