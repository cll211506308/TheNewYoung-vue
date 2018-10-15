<template>
    <div>
      <h1>我是首页</h1>
      <index-top-con></index-top-con>
      <index-banner></index-banner>
      <index-recommend></index-recommend>
      <index-hot-post></index-hot-post>
      <index-bottom-con></index-bottom-con>
    </div>
</template>

<script>
import topCon from './index/topCon';
import banner from './index/banner';
import recommend from './index/recommend';
import hotPost from './index/hotPost';
import bottomCon from './index/bottomCon';
export default {
  name: 'index',
  components: {
    'index-top-con': topCon,
    'index-banner': banner,
    'index-recommend': recommend,
    'index-hot-post': hotPost,
    'index-bottom-con': bottomCon
  }
}
</script>

<style scoped>

</style>
