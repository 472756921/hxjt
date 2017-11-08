<template>
  <div class="hello">
    <h1>团队系统</h1>
    <br/>
    <a href="#/login">后台</a>
    <br/>
    <br/>
    <a href="#/user/userInfo">个人中心</a>
    <br/>
    <br/>
    健康管理
    <ul>
      <li><a href="#/user/question_u">网上问答</a></li>
      <li><a href="#/user/Physiological">查看健康状况</a></li>
      <li><a href="#/user/reservation">预约服务</a></li>
    </ul>
    会员服务
    <ul>
      <li><a href="#/user/buyService">购买服务包</a></li>
      <li><a>联系我们</a></li>
      <li><a>更多服务</a></li>
    </ul>
    <h1>团队系统</h1>
    <ul>
      <li><a href="#/gl_reg">用户注册</a></li>
      <li><a href="#/gl_team">团队列表</a></li>
      <li><a href="#/gl_userInfo">个人中心</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this.$ajax({
      method: 'GET',
      url: 'http://118.31.38.185/hrt/admin/saveSession?group_id=1',
    }).then((res) => {
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
