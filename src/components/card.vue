<template>
    <div>
      <h1>
        这是帖子{{id}}的页面
      </h1>
    </div>
</template>

<script>
    export default {
        name: "card",
      data(){
          return {
            id:this.$route.params.id
          }
      }
    }
</script>

<style scoped>

</style>
