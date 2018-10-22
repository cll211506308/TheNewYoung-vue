<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
    <el-form-item label="真实姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="region">
      <el-input v-model="ruleForm.region" placeholder="请输入身份证号"></el-input>
    </el-form-item>
    <el-form-item label="擅长方向" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="中药调理" name="type"></el-checkbox>
        <el-checkbox label="营养饮食" name="type"></el-checkbox>
        <el-checkbox label="运动健身" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="工作经历" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="工作或身份证明" prop="userupload">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange">
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        <el-button size="small" >点击上传</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
  export default {
    name: "useridentity",
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输您的真实姓名', trigger: 'blur'},
            {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请输入身份证号', trigger: 'blur'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个擅长方向', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写工作经历', trigger: 'blur'}
          ],
          userupload: [
            {required: true, message: '请上传身份证明', trigger: 'blur'}
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      }
    }
  }
</script>
<style scoped>
  .demo-ruleForm{
    width: 100%;
  }
</style>
