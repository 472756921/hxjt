<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="重庆名医" name="first">敬请期待</el-tab-pane>
      <el-tab-pane label="港澳名医" name="second">
        <img src="../../assets/ycyl.jpg" width="100%"/>
        <h4>港澳名医远程支持</h4>
        <div>
          <span style="font-weight: bold">简介：</span>港澳名医远程支持港澳名医远程支持港澳名医远程支持港澳名医远程支持港澳名医远程支持港澳名医远程支持港澳名医远程支持港澳名医远程支持
        </div>
        <br/>
        <div>
          <span>单次服务费用：￥5000.00</span>
        </div>
        <br/>
        <br/>
        <el-button type="primary" style="margin: 0 auto; display: block;" @click="yuyue">预约服务</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'famousDoctorStudio',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
      },
      yuyue() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('div', null, '您已成功预约服务 '),
            h('div', null, '后续客服会立即联系您，进行相关事宜')
          ]),
          duration: 5000,
          type: 'success',
        });
      },
    }
  };
</script>

<style scoped>

</style>
