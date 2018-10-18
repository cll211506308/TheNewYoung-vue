<template>
  <div>
    <h1>我是fit</h1>
    <fit-intro></fit-intro>
    <fit-rank></fit-rank>
    <sowing-map></sowing-map>
  </div>
</template>

<script>
  import fitIntro from './fit/fitIntro'
  import fitRank from './fit/fitRank'
  import sowingMap from './fit/sowingMap'
    export default {
        name: "fit",
      components:{
          'fit-intro':fitIntro,
          'fit-rank':fitRank,
          'sowing-map':sowingMap
      }
    }
</script>

<style scoped>

</style>
