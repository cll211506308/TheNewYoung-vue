<template>
  <div>
    <router-link to="/friends">全部帖子</router-link>
    <router-link to="/friends/likeuser/5">我的关注
    <span v-if="show1">还没登陆</span>
    </router-link>
    <router-view class="card"></router-view>

    <el-tree
      :data="data2"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
    export default {
        name: "friends",
      data(){
          return{
            data2: [{
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };


      },
      methods:{

      },
      components:{

      },
      computed:{
        show1:function () {
          if(this.$store.state.data1 === null){
            return true
          }
          else {
            return false
          }
        }
      }
    }
</script>

<style scoped>
.card{
  width: 800px;
  border: 1px solid white;
}
</style>
