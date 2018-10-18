<template>
  <div id="app">
    <top-con></top-con>
    <router-view/>
  </div>
</template>

<script>
  import topCon from './components/index/topCon'
export default {
  name: 'App',
  components:{
    'top-con':topCon
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
