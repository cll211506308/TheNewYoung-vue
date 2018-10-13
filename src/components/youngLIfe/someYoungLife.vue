<template>
  <div>
    <h2>这是关于{{sort}}的养生堂的文章</h2>
  </div>
</template>

<script>
export default {
  name: 'someYoungLife',
  data () {
    return {
      sort: this.$route.params.sort
    }
  }
}
</script>

<style scoped>

</style>
