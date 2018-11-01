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
console.log('%c 新Young生',' text-shadow:#FF0000 0 0 10px;\n' +
  '    color:white;\n' +
  '    font-size:60px')
// console.log('%c 新Young生 ','text-shadow: 0 0 1px #999,    \n' +
//   '             1px 1px 1px #888,    \n' +
//   '             2px 2px 1px #777,    \n' +
//   '             3px 3px 1px #666,    \n' +
//   '             4px 4px 1px #555,    \n' +
//   '             5px 5px 1px #444;   \n' +
//   'background-color:red;   \n' +
//   'color:white;  font-size:50px;border-radius: 10px;')
</script>

<style>
*{
  margin: 0;
  padding: 0;

}
</style>
