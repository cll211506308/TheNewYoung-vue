<template>
  <div class="container-fluid" style="background: black">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <li style="margin-right: 30px">LOGO</li>
          <router-link tag="li" to="/">首 页</router-link>
          <router-link tag="li" to="/youngLife">养生堂</router-link>
          <router-link tag="li" to="/foods">营养饮食</router-link>
          <router-link tag="li" to="/fit">健身课堂</router-link>
          <router-link tag="li" to="/friends">Young友圈</router-link>
          <router-link tag="li" to="/users">个人中心</router-link>
        </div>
        <div class="col-sm-4">
          <div class="col-sm-10">
            <el-input v-model="input" placeholder="search for..." style="margin-top: 20px;"></el-input>
          </div>
          <div class="col-sm-2">
            <li class="glyphicon glyphicon-search"></li>
          </div>

        </div>
        <div class="col-sm-1">
          <router-link tag="li" to="/login">login</router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "topCon",
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>
  li {
    height: 80px;
    color: #fff;
    list-style: none;
    float: left;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 20px;
    line-height: 80px;
  }

  el-input {
    margin-top: 22px;
    height: 34px;
    border-radius: 5px;
  }

  .container-fluid {
    height: 80px;
  }

</style>
