<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div id="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="身高">
            <el-input v-model="formInline.user" placeholder="身高"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="formInline.region" placeholder="体重"></el-input>
          </el-form-item>
        </el-form>
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
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import Vue from 'vue'
  Vue.use(ElementUI)
  import $ from 'jquery'
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        dataList: [],
        formInline: {
          user: '',
          region: ''
        },
        total: 0,
        List: [
          //阳虚质
          {
            title: '您手脚发凉吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
         {
            title: '您胃脘部、背部或腰膝部怕冷吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您感到怕冷、衣服比别人穿得多吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您比一般人不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）。',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉东西吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
         /* //阴虚质
          {
            title: '您感到手脚心发热吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您感觉身体、脸上发热吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您皮肤或口唇干吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您口唇的颜色比一般人红吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您面部两潮红或偏红吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您感到眼睛干涩吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          //气虚质
          {
            title: '您活动量稍大就容易出虚汗吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '你容易疲乏吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您容易气短（呼吸短促，接不上气吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您容易心慌吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您容易头晕或站起时晕眩吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您比别人容易患感冒吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          //平和质
          {
            title: '您精力充沛吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您说话声音无力吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您感到闷闷不乐吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您能适应外界自然和社会环境的变化吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您容易失眠吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          {
            title: '您容易忘事（健忘）吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },*/
        ]
      }
    },
    methods: {
      submit() {
        var submitContent;
        var  bodyclassContent;
        if(this.total>=75){
             submitContent = '平和体质',
            bodyclassContent = '平和体质是一种身体和谐、自稳能力强的体质。' +
              '拥有这种体质的人，身体不一定结实强壮，甚至可能还有些气血不足、血压偏低，' +
              '脉搏也不是很有力，但是脏腑、气血很和谐，七情适度。这种体质的人，多数生' +
              '在长寿家族，比如五世同堂的大家族，而平常的人家四世同堂就不容易了。平' +
              '和体质通常表现为情绪稳定，生活规律，体重波动小等；得病少，对于环境和气' +
              '候的变化适应能力比较强；生病以后，对治疗的反应敏感，好治，自我康复能' +
              '力强'
        } else{
           submitContent = '偏颇体质',
            bodyclassContent = '《中医体质分类与判断》标准将人的体质分为平和质，气虚质，阳虚质，阴' +
              '虚质，痰虚制，湿热质，血瘀质，抑郁质，特禀质等9种基本体质类型，除' +
              '了平和体质，其他8种体质都存在偏颇的倾向。不同的身体状况，不同' +
              '的疾病风险，对应着不同的体质，同时也有不同的生活方式。'
        }
        let Arr = this.List.filter(item => item.score === 0)
        this.dataList = []
        this.dataList.push()
        if (Arr.length === 0) {
          //允许提交
          $.post("http://127.0.0.1:3000/users/insertbodydatas",{
            userId: 1,
            userHeight: this.formInline.user,
            userWeight: this.formInline.region,
            putTime: Date.now(),
            usertotal: this.total,
            bodyClass: submitContent,
            bodyclassContent : bodyclassContent,
          } ,function () {

          })
          this.$alert('提交成功', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert('您有未完成的题目，请检查！', {
            confirmButtonText: '确定'
          })}
      },
      radioCClick() {
        // console.log(123)
      },
      radioCClick2(index, index2) {
        // index-List的索引   index2-List下data的索引
        // 这边写你的得分算法
        console.log(index2)
        this.scoring(index, index2)
        // this.List[index].score = (index2 === 0) ? 5 : 4
        // 这边是遍历赋值，得总分
        let a = this.List.map(item => {
          return item.score
        })
        this.total = a.reduce((total, num) => {
          return total + num
        })
      },
      scoring(index, index2) {
        switch (index2) {
          case 0:
            this.List[index].score = 5
            break;
          case 1:
            this.List[index].score = 4
            break;
          case 2:
            this.List[index].score = 3
            break;
          case 3:
            this.List[index].score = 2
            break;
          default:
            this.List[index].score = 1
        }
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
