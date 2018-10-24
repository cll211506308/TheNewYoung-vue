<template>
  <div>
    <div class="cards12">
       <div class="tu">折线图</div>
      <div class="kong1"></div>
       <div class="bodyclass">
          <el-card class="box-card2">
            <div slot="header" class="clearfix">
              <span>您的体质：{{bodyClass}}</span>
            </div>
            <div class="text item">
              {{bodyclassContent }}
            </div>
        </el-card>
      </div>
    </div>
    <div class="kong"></div>
    <div class="suggestions" style="margin-bottom: 20px">
      <el-card class="box-card3"  >
        <div slot="header" class="clearfix">
          <span>中医建议：</span>
        </div>
        <div class="sug"  v-for="i in sugcontent">
          {{ i.sugcontent}}
        </div>
      </el-card>
    </div>
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
  .box-card2 {
    border-radius: 15px;
  }
  .box-card3{
    border-radius: 15px;
  }

  .suggestions{
    clear: both;
  }
  @media only screen and (min-width: 900px){
    .tu{
    width: 55%;
    height: 400px;
    background: burlywood;
    float: left;
  }
    .bodyclass{
      width: 40%;
      height: 400px;
      float: right;
    }
    .box-card2{
      height: 400px;
    }
    .kong{
      width: 100%;
      height: 30px;
      clear: both;
    }

  }
  @media only screen and (max-width: 900px){
    .tu{
    width: 100%;
    height: 400px;
    background: burlywood;
  }
    .box-card2{
      width: 100%;
      height:300px;
    }
    .kong{
      width: 100%;
      height: 20px;
      clear: both;
    }
    .kong1{
      width: 100%;
      height: 20px;
    }
  }

</style>
