<template>
  <div id="app">
    <top-con></top-con>
    <router-view/>
    <bottom-con></bottom-con>
  </div>
</template>

<script>
  import topCon from './components/index/topCon'
  import bottomcon from './components/index/bottomCon'
export default {
  name: 'App',
  components:{
    'top-con':topCon,
    'bottom-con':bottomcon
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
