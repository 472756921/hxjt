<template>
  <el-row style="height: 100%;">
    <el-col :span="4" style="height: 100%;background: #eef1f6;">
      <div class="side">
        <div class="sideHead">心内科管理系统</div>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="2"  v-if="type==0">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 用户管理</template>
                <el-menu-item index="2-1"><router-link :to="{ name: 'list' }">用户列表</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'askList' }">用户问答</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'treatment' }">预约管理</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'treatmentS' }">已预约门诊用户</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3" v-if="type==0">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 商城管理</template>
                <el-menu-item index="3-1"><router-link :to="{ name: 'goodList' }">商品管理</router-link></el-menu-item>
                <el-menu-item index="3-1"><router-link :to="{ name: 'orderList' }">订单记录</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="4" v-if="type==1"><router-link :to="{ name: 'gl_userList' }">用户列表</router-link></el-menu-item>
              <el-menu-item index="7" v-if="type==1"><router-link :to="{ name: 'gl_orderList' }">订单列表</router-link></el-menu-item>
              <el-menu-item index="7" v-if="type==1"><router-link :to="{ name: 'gl_rechargeAdmin' }">充值记录</router-link></el-menu-item>
              <el-submenu index="5" v-if="type==1">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 商城管理</template>
                <el-menu-item index="5-1"><router-link :to="{ name: 'gl_goodList' }">商品管理</router-link></el-menu-item>
                <el-menu-item index="5-1"><router-link :to="{ name: 'gl_serviceList' }">服务包管理</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link :to="{ name: 'gl_goodsAdd' }">添加商品/服务包</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="6" v-if="type==1">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 团队管理</template>
                <el-menu-item index="6-1"><router-link :to="{ name: 'gl_teamList' }">团队列表</router-link></el-menu-item>
                <el-menu-item index="6-2"><router-link :to="{ name: 'gl_teamAdd' }">添加团队</router-link></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="main">
        <div class="mainHead">用户，您好<span style="float: right;cursor: pointer" @click="exit">退出</span></div>
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docIndex',
    created() {
      const admintype = sessionStorage.getItem('admin');
      console.log(admintype)
      if (admintype == '1'){ //集团
        this.type = '1';
      } else { //团队
        this.type = '0';
      }
    },
    data() {
      return {
        type: '',
      };
    },
    methods: {
      exit() {
        if(this.type == 1) {
          this.$router.push({name:'adminLogin'});
        } else if(this.type == 0) {
          $this.router.push({name:'login'});
        }
      }
    }
  };
</script>

<style scoped>
  .mainHead{
    background: #5a6378;
    width: 100%;
    float: left;
    padding: 20px 10px;
    font-size: 20px;
    color: #ffffff;
    box-sizing:border-box;
  }
  .side{
    width: 100%;
    float: left;
  }
  .sideHead{
    background: #ff6b6b;
    color: #ffffff;
    padding: 20px 10px;
    font-size: 20px;
  }
  a{
    color: #777;
    text-decoration: none;
  }
</style>
