<template>
  <div class="doccontent" ref="logonBG">
    <div class="center titleA">哈瑞特</div>
    <div class="center" style="font-size: 18px">集团管理平台</div>
    <div class="infoContent">
      <input type="text" class="inputtype" placeholder="账号" v-model="u"/>
      <input type="password" class="inputtype" v-model="p" placeholder="密码"/>
      <br/>
      <button class="loginBtn" @click="login">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { userLogin } from '../../interface';

  export default {
    name: 'gl_adminLogin',
    data() {
      return {
        u: '',
        p: '',
      };
    },
    methods: {
      login() {
        if (this.u == '' || this.p == '') {
          this.$message.error('请输入账号和密码');
          return ;
        }
        const data = {
          account: this.u,
          password: this.p,
        };
        this.$ajax({
          method: 'post',
          url: userLogin(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          sessionStorage.setItem('doc', JSON.stringify(res.data.doctor));
          sessionStorage.setItem('docID', res.data.doctor.id);
          this.$router.push({ name: 'admin' });
        }).catch((error) => {
          this.$message.error('账号或密码错误');
        });
      },
    },
    mounted() {
      const w = document.body.clientWidth;
      const h = document.body.clientHeight;
      this.$refs.logonBG.style.height = h + 'px';
    },
  };
</script>

<style scoped>
  .doccontent{
    font-size: 2rem;
  }
  .titleA{
    padding: 40px 0 10px 0;
  }
  .infoContent{
    width: 500px;
    padding: 60px;
    margin: 0 auto;
  }
  .inputtype{
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: none;
    height: 30px;
    width: 100%;
    outline: none;
    padding-left: 5px;
    color: #333;
    font-size: 14px;
  }
  .inputtype:focus{
    background-color: #eee;
  }
  .loginBtn{
    color: #666;
    background: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
  }
  .loginBtn:hover{
    border: 1px solid #aaa;
    color: #333;
  }
  .radio{
    color: #666;
  }
</style>
