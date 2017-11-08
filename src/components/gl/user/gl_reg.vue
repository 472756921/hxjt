<template>
  <div>
    <h3 style="text-align: center">用户注册</h3>
    <div class="Warning">(请如实填写以下信息，我们将严格保密您的个人信息)</div>
    <br/>
    <div class="items">
      <span class="itemA">姓名：</span>
      <input type="text"/>
    </div>
    <div class="items">
      <span class="itemA">手机号：</span>
      <input type="text"/>
    </div>
    <div class="items">
      <span class="itemA">身份证：</span>
      <input type="text"/>
    </div>
    <div class="items">
      <span class="itemA">住址：</span>
      <input type="text"/>
    </div>
    <el-checkbox v-model="checked" class="items">我已阅读并同意<a href="gl_reg.vue" class="xieyi">《用户注册协议》</a></el-checkbox>
    <br/>
    <br/>
    <button class="regBtn">注册</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'gl_reg',
    data(){
      return{
        checked: false,
      }
    },
  };
</script>

<style scoped>
  .itemA{
    width: 4rem;
    display: block;
    float: left;
    padding-top: .2rem;
  }
  .items{
    margin: .6rem auto;
    padding: 0 3rem;
  }
  input{
    height: 1.4rem;
    border: 1px solid #cccccc;
  }
  .Warning{
    text-align: center;
  }
  .xieyi{
    text-decoration: none;
    color: #409EFF;
  }
  .regBtn{
    border: none;
    background: #409EFF;
    color: #ffffff;
    padding: .6rem 1.4rem;
    border-radius: .2rem;
    display: block;
    margin: 1rem auto;
  }
</style>
