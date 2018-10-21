<template>
  <div>
  <el-container>
    <el-aside width="40%">折线图</el-aside>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>您的体质：{{bodyClass}}</span>
        </div>
        <div class="text item">
          {{bodyclassContent }}
        </div>
      </el-card>
    </el-main>
  </el-container>
    <el-card class="box-card"  >
      <div slot="header" class="clearfix">
        <span>中医建议：</span>
      </div>
      <div class="sug"  v-for="i in sugcontent">
        {{ i.sugcontent}}
      </div>
    </el-card>
  </div>


</template>

<script>
    export default {
      name: "userhome",

        data() {
          return {
            bodyClass: null,
            bodyclassContent: null,
            sugcontent: []
          }
        },
        mounted() {
          let _this = this;
          this.$axios.get('users/bodyclass/' + this.$store.state.data1).then(
            ((res) => {
              this.bodyClass = res.data.data[0].bodyclass
            })
          ).catch(err => {
            console.log(err)
          })

          this.$axios.get('users/bodyclass/' + this.$store.state.data1).then(
            ((res) => {
              this.bodyclassContent = res.data.data[0].bodyclassContent
            })
          ).catch(err => {
            console.log(err)
          })

          this.$axios.get('users/suggestion/getsuggestions/平和体质').then(
            ((res) => {
              _this.sugcontent = res.data.data;
              // console.log(_this.sugcontent);
              // /*this.sugcontent =res.data.data*/
            })
          ).catch(err => {
            console.log(err)
          })
        }
    }
</script>

<style scoped>
</style>
