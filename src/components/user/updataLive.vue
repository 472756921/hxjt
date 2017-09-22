<template>
  <div>
    <h3>会员升级</h3>
    <p>请选择升级类型</p>
    <el-radio-group v-model="hy" @change="change">
      <el-radio-button label="1">至尊会员</el-radio-button>
      <el-radio-button label="2">黄金会员</el-radio-button>
    </el-radio-group>
    <p>{{js}}</p>
    <p>会费：<span style="color: #FF4949;">￥{{fy}}</span></p>
    <el-button type="danger" style="display: block;margin: 2rem auto">升级</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'updataLive',
    data() {
      return {
        hy: '1',
        fy: '9999.00',
        js: '至尊会员简介',
      };
    },
    methods: {
      change() {
        const king = '黄金会员简介';
        const zzh = '至尊会员简介';
        if (this.hy === '1') {
          this.js = zzh;
          this.fy = '9999.00';
        }
        if (this.hy === '2') {
          this.js = king;
          this.fy = '999.00';
        }
      },
    },
  };
</script>

<style scoped>

</style>
