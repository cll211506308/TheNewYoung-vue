<template>
  <div>
    <div class="cards12">
       <el-card class="box-card1" shadow="hover"><div id="myChart" :style="{width: '100%', height: '400px'}"></div></el-card>
      <div class="kong1"></div>
       <div class="bodyclass">
          <el-card class="box-card2" shadow="hover">
            <div slot="header" class="clearfix">
              <span>您的体质：{{bodyClass}}</span>
            </div>
            <div class="text item" style="line-height: 35px">
              {{bodyclassContent }}
            </div>
        </el-card>
      </div>
    </div>
    <div class="kong"></div>
    <div class="suggestions" style="margin-bottom: 20px">
      <el-card class="box-card3"  shadow="hover">
        <div slot="header" class="clearfix">
          <span>中医建议：</span>
        </div>
        <div class="sug" >
          {{ suggestions}}
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
        suggestions: null,
        bodydata:[],
        userweightArr:[],
        userheightArr:[],
        usertotalArr:[],
        BMIArr:[]
      }
    },

    mounted() {

      this.getdata();
      this.drawLine();
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
      this.$axios.get('users/suggestion/showsuggestions/' + this.$store.state.data1).then(
        ((res) => {
          this.suggestions = res.data.data[0].suggestions;
        })
      ).catch(err => {
        console.log(err)
      })
    },
    methods:{
      getdata(){
        let  userweightArr=[]
        let  userheightArr=[]
        let usertotalArr=[]
        let BMIArr=[]
        let _this=this;
        this.$axios.get('users/weight/' + this.$store.state.data1).then(
          ((res) => {
            _this.bodydata = res.data.data;
            for(let i=0;i<_this.bodydata.length;i++){
              if(i<7){
                userweightArr.push(_this.bodydata[i].userweight)
                userheightArr.push(_this.bodydata[i].userheight)
                usertotalArr.push(_this.bodydata[i].usertotal)
                BMIArr.push(_this.bodydata[i].BMI)
              }else {
                break;
              }
            }
            _this.userweightArr=userweightArr.reverse()
            _this.userheightArr=userheightArr.reverse()
            _this.usertotalArr=usertotalArr.reverse()
            _this.BMIArr=BMIArr.reverse()
            this.drawLine();
          })
        ).catch(err => {
          console.log(err)
        })
      }  ,

      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: {
            text: '最近体质变化',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['BMI','体重','身高','体测分数']
          },
          toolbox: {
            show: true,
            feature: {
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['一','二','三','四','五','六','七']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name:'BMI',
              type:'line',
              data:this.BMIArr,
              // data:[2,2,3,5],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'体重',
              type:'line',
              data:this.userweightArr,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'身高',
              type:'line',
              data:this.userheightArr,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'体测分数',
              type:'line',
              data:this.usertotalArr,
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        })
      }
    }
  }

</script>

<style scoped>
  .box-card1{
    border-radius: 15px;
  }
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
    .box-card1{
    width: 55%;
    height: 400px;
    background: bisque;
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
    .box-card1{
    width: 100%;
    height: 400px;
   /* background: burlywood;*/
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
