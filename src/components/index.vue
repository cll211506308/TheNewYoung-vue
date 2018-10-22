<template>
    <div>
      <index-banner></index-banner>
      <index-recommend></index-recommend>
      <index-hot-post></index-hot-post>
    </div>
</template>

<script>
import banner from './index/banner';
import recommend from './index/recommend';
import hotPost from './index/hotPost';
import bottomCon from './index/bottomCon';
export default {
  name: 'index',
  components: {
    'index-banner': banner,
    'index-recommend': recommend,
    'index-hot-post': hotPost,
  }
}
</script>

<style scoped>

</style>
