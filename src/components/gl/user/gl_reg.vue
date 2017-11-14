<template>
  <div>
    <h3 style="text-align: center">用户注册</h3>
    <div class="Warning">(请如实填写以下信息，我们将严格保密您的个人信息)</div>
    <br/>
    <div class="items">
      <span class="itemA">姓名：</span>
      <input type="text" v-model="data.real_name"/>
    </div>
    <div class="items">
      <span class="itemA">手机号：</span>
      <input type="text" v-model="data.phone"/>
    </div>
    <div class="items">
      <span class="itemA">身份证：</span>
      <input type="text" v-model="data.id_number"/>
    </div>
    <div class="items">
      <span class="itemA">住址：</span>
      <input type="text" v-model="data.address"/>
    </div>
    <el-checkbox v-model="checked" class="items">我已阅读并同意<a href="gl_reg.vue" class="xieyi">《用户注册协议》</a></el-checkbox>
    <br/>
    <br/>
    <button class="regBtn" @click="reg">注册</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {registerCustomer} from '../../interface';

  export default {
    name: 'gl_reg',
    data(){
      return{
        checked: false,
        data: {
          real_name: '',
          phone: '',
          id_number: '',
          address: '',
        },
      }
    },
    methods:{
      reg(){
        if(!this.checked) {
          this.$message.error('请阅读并同意《用户注册协议》');
          return;
        }
        let of = true;
        Object.entries(this.data).map((i) => {
          if(i[1] == '') {
            this.$message.error('请填写用户信息');
            of = false;
          }
        })
        if(!of){
          return
        }
        this.$ajax({
          method: 'POST',
          data: this.data,
          url: registerCustomer(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('提交成功');
          this.$router.push({name: 'gl_userInfo'});
        }).catch((error) => {
          if(error.response.status == 400) {
            this.$message.error('身份证或手机号已经被注册');
          }
          if(error.response.status == 1003) {
            this.$message.error('身份证格式错误');
          }
        });
      },
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
