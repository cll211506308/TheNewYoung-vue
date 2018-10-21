<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div v-for="item in title1">
        <el-card class="box-card">
          <div class="text item">
            {{item.title}}
            {{item.colTime}}
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-delete" @click="del(item.collectionId)"></el-button>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "usercollections",
      methods:{
        del(colection){
          this.$axios.get('users/collections/2').then(
            ((res)=>{

            })
          ).catch(err=>{console.log(err)})
        }

      },
      data(){
        return {
          title1:[],
        }
      },
      created(){
        this.$axios.get('users/collections/2').then(
          ((res)=>{
            this.title1 = res.data.data;
          })
        ).catch(err=>{console.log(err)})
      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .box-card {
    width: 100%;
    padding: 0;
  }
</style>

