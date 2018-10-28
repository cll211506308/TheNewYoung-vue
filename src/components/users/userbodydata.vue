<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <div id="app">
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
          <el-row >
            <el-col :span="8">
          <el-form-item label="身高(单位：m)" prop="height" :rules="[{ required: true, message: '身高不能为空'}, { type: 'number',
           message: '身高必须为数字值'} ]">
            <el-input type="age" v-model.number="numberValidateForm.height" autocomplete="off"></el-input>
          </el-form-item>
            </el-col>
            <el-col :span="8">
            <el-form-item label="体重（单位：kg）" prop="weight" :rules="[{ required: true, message: '体重不能为空'}, { type: 'number',
           message: '体重必须为数字值'} ]">
              <el-input type="age" v-model.number="numberValidateForm.weight" autocomplete="off"></el-input>
            </el-form-item>
            </el-col>
          </el-row>
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
        <el-button type="primary" @click="submit" class="btn">提交</el-button>
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
        numberValidateForm: {
         height: '',
          weight:'',
        },
        dataList: [],
        total: 0,
        BMI:0,
        List: [
          //阳虚质
          {
            title: '您手脚发凉吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },
          // {
          //   title: '您胃脘部、背部或腰膝部怕冷吗？',
          //   category: 0,
          //   radio: '',
          //   score: 0,
          //   data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          // },
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
          /*{
            title: '你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？',
            category: 0,
            radio: '',
            score: 0,
            data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
          },*/
          //阴虚质
           {
             title: '您感到手脚心发热吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },
/*           {
             title: '您感觉身体、脸上发热吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
           {
             title: '您皮肤或口唇干吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },
/*           {
             title: '您口唇的颜色比一般人红吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
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
/*           {
             title: '您容易心慌吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
           {
             title: '您容易头晕或站起时晕眩吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },
/*           {
             title: '您比别人容易患感冒吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
           //平和质
/*           {
             title: '您精力充沛吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
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
/*           {
             title: '您能适应外界自然和社会环境的变化吗？',
             category: 0,
             radio: '',
             score: 0,
             data: [{content: '没有'}, {content: '很少'}, {content: '有时'}, {content: '经常'}, {content: '总是'}]
           },*/
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
           },
        ]
      }
    },
    methods: {
      submit() {
        var submitContent;
        var  bodyclassContent;
        var suggestions;
        if(this.total>=70){
          submitContent = '平和体质',
            bodyclassContent = '平和体质是正常体质，这类人体形匀称健壮，面色、肤色润泽，头发稠密有光泽，目光有神，唇色红润，' +
              '不易疲劳，精力充沛，睡眠、食欲好，大小便正常，性格随和开朗，患病少。',
            suggestions = '平和体质的人乃阴阳平和、脏腑气血功能正常的人，但平时也应该注意保健。'

        } else if(this.total>=60){
          submitContent = '阳虚体质',
            bodyclassContent = '这类人肌肉不健壮，手脚发凉，胃脘部、背部或腰膝部怕冷，衣服比别人穿得多，夏天不喜吹空调，' +
              '喜欢安静，吃或喝凉的食物不舒服，容易大便稀溏，小便颜色清而量多。性格多沉闷、内向。',
            suggestions = '可常食用有温阳益气的食物。如牛肉、羊肉、狗肉、鹿肉、韭菜、生姜、辣椒、花椒、胡椒等。'
        }else if(this.total>=50){
          submitContent = '阴虚体质',
            bodyclassContent = '阴虚体质的人体形多瘦长，经常感到手、脚心发热，脸上冒火，面颊潮红或偏红，耐受不了夏天的暑热，' +
              '常感到眼睛干涩，口干咽燥，总想喝水，皮肤干燥，性情急躁，外向好动。',
            suggestions = '经常吃养阴润燥、清淡的食物，如芝麻、糯米、蜂蜜、乳制品、甘蔗、鱼类等。少吃肥腻厚味、燥烈食物，如葱、姜、蒜、椒等辛味之品少吃。'
        }else if(this.total>=40){
          submitContent = '湿热体质',
            bodyclassContent = '湿热体质的人，面部油光发亮，脸上易生粉刺，皮肤易瘙痒。常感口苦、口臭，大便粘滞不爽，' +
              '小便有发热感，尿黄，女性常带下色黄，男性阴囊总是潮湿多汗。',
            suggestions = '多食用清热利湿、清痰的食物。如香蕉、西瓜、柿子、苦瓜、番茄、莲藕等。对牛、羊、鸡、鹿肉等肉类少吃。'
        }else{
          submitContent = '偏颇体质',
            bodyclassContent = '《中医体质分类与判断》标准将人的体质分为平和质，气虚质，阳虚质，阴虚质，痰虚制，湿热质，血瘀质，抑郁质，特禀质等9种基本体质类型，' +
              '除了平和体质，其他8种体质都存在偏颇的倾向。不同的身体状况，不同的疾病风险，对应着不同的体质，同时也有不同的生活方式。',
            suggestions = '可多食用行气的食物，如佛手、橙子、桔皮、韭菜、茴香、大蒜、高粱皮、刀豆、芥麦等。可少量饮酒以活动血脉、提高情绪。'
        }
        let Arr = this.List.filter(item => item.score === 0)
        this.dataList = []
        this.dataList.push()
        if (Arr.length === 0) {
          //允许提交
          $.post("http://127.0.0.1:3000/users/insertbodydatas",{
            userId: this.$store.state.data1,
            userHeight: this.numberValidateForm.height,
            userWeight: this.numberValidateForm.weight,
            putTime: Date.now(),
            usertotal: this.total,
            bodyClass: submitContent,
            bodyclassContent : bodyclassContent,
            BMI:this.BMI,
            suggestions : suggestions,


          } ,function () {

          })
          this.$alert('提交成功,您可以在您的主页中查看最新体质信息', {
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
        // 得分算法
        console.log(index2)
        this.scoring(index, index2)
        // this.List[index].score = (index2 === 0) ? 5 : 4
        // 遍历赋值，得总分
        let a = this.List.map(item => {
          return item.score
        })
        this.total = a.reduce((total, num) => {
          return total + num
        })
       this.BMI = this.numberValidateForm.weight/( this.numberValidateForm.height* this.numberValidateForm.height);
        console.log(this.BMI)
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
  .btn{
    float: right;
    margin-bottom: 10px;
  }
</style>
