<template>
  <div id="uc1">
    <h3>用户{{id}}收藏的文章</h3>
  </div>
</template>

<script>
    export default {
        name: "usercollections",
      data(){
        return {
          id:this.$route.params.id
        }
      }
    }
</script>

<style scoped>
  #uc1{
    border: 1px solid red;
  }
</style>

