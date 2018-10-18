<template>
  <el-row type="flex" justify="center">
    <el-col :span="22">
      <div id="app">
        <el-card class="box-card" v-for="(item,index) in List" :key="index">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
            <span v-if="item.category===0">(单选)</span>
            <span v-else>(多选)</span>
          </div>
          <div v-if="item.category===0">
            <el-radio-group v-model="List[index].radio" @change="radioCClick">
              <el-radio :label="index2" v-for="(item,index2) in List[index].data" :key="index2"
                        @change="radioCClick2(index, index2)">{{item.content}}
              </el-radio>
            </el-radio-group>
          </div>
          <div v-else>
            <el-checkbox-group v-model="List[index].checkList">
              <el-checkbox :label="item.content" v-for="(item,index2) in List[index].data" :key="index2">
                {{item.content}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-card>
        <div class="score">得分：{{total}}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import Vue from 'vue'

  Vue.use(ElementUI)
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        total: 0,
        List: [
          {
            title: '您的性别',
            category: 0,
            radio: '',
            score: 0,
            data: [
              {
                content: '男'
              },
              {
                content: '女'
              }
            ]
          },
          {
            title: '健康包括哪几个方面',
            category: 1,
            score: 0,
            checkList: [],
            data: [
              {
                content: '合理的饮食'
              },
              {
                content: '均衡的营养'
              }
            ]
          },
          {
            title: '您的年龄',
            category: 0,
            radio: '',
            score: 0,
            data: [
              {
                content: '15-20'
              },
              {
                content: '20-30'
              }
            ]
          },
          {
            title: '几个方面',
            category: 1,
            score: 0,
            checkList: [],
            data: [
              {
                content: '1'
              },
              {
                content: '2'
              }
            ]
          }
        ]
      }
    },
    methods: {
      radioCClick() {
        // console.log(123)
      },
      radioCClick2(index, index2) {
        // index-List的索引   index2-List下data的索引
        // 这边写你的得分算法
        this.List[index].score = (index2 === 0) ? 5 : 4
        // 这边是遍历赋值，得总分
        let a = this.List.map(item => {
          return item.score
        })
        this.total = a.reduce((total, num) => {
          return total + num
        })
      }
    }
  }
</script>

<style>
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>

