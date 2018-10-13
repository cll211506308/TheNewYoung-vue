<template>
    <div>
      <h1>我是首页</h1>
      <index-header></index-header>
      <index-banner></index-banner>
      <index-recommend></index-recommend>
      <index-hot-post></index-hot-post>
      <index-footer></index-footer>
    </div>
</template>

<script>
import header from './index/header';
import banner from './index/banner';
import recommend from './index/recommend';
import hotPost from './index/hotPost';
import footer from './index/footer';
export default {
  name: 'index',
  components: {
    'index-header': header,
    'index-banner': banner,
    'index-recommend': recommend,
    'index-hot-post': hotPost,
    'index-footer': footer
  }
}
</script>

<style scoped>

</style>
