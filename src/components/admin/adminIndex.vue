<template>
  <el-row>
    <el-col :span="4">
      <div class="side">
        <div class="sideHead">心内科管理系统</div>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1" v-if="type==1">
                <template slot="title"><i class="iconfont icon-icon-test"></i> 统计数据</template>
                <el-menu-item index="1-1">暂无</el-menu-item>
                <el-menu-item index="1-2">暂无</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 用户管理</template>
                <el-menu-item index="2-1"><router-link :to="{ name: 'list' }">用户列表</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'askList' }">用户问答</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'treatment' }">预约管理</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'treatmentS' }">已预约门诊用户</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 商城管理</template>
                <el-menu-item index="3-1"><router-link :to="{ name: 'goodList' }">商品管理</router-link></el-menu-item>
                <el-menu-item index="3-1"><router-link :to="{ name: 'orderList' }">订单记录</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="7" v-if="type==1&&adminType==1">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 管理员管理</template>
                <el-menu-item index="7-1"><router-link :to="{ name: 'adminUserList' }">管理员列表</router-link></el-menu-item>
                <el-menu-item index="7-1"><router-link :to="{ name: 'addAdmin' }">新增管理员</router-link></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="main">
        <div class="mainHead">用户，您好</div>
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docIndex',
    created() {
      const userdata = sessionStorage.getItem('user');
      if (userdata == null || userdata == '' || userdata == undefined){
//        this.$router.push({ name: 'adminLogin' });
      } else {
        this.type = sessionStorage.getItem('type');
        this.adminType = JSON.parse(userdata).admin.admin_type;
      }
    },
    data() {
      return {
        type: '',
        adminType: '',
      };
    },
    methods: {
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
