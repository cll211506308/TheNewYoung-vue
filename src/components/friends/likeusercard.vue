<template>
  <div id="s2">
    这是用户{{id}}关注人的帖子
  </div>
</template>

<script>
    export default {
        name: "likeusercard",
      data(){
          return {
            id:this.$route.params.id
          }
      }
    }
</script>

<style scoped>
  #s2{
    border: 1px solid red;
  }
</style>
