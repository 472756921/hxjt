<template>
  <div style="padding: .6rem 1rem">
    <div style="font-size: 1rem;padding: 1rem 0">请选择充值金额<span class="Warning" style="font-size: .6rem">（1.00元=1健康豆）</span></div>
    <el-radio v-model="radio" label="1" class="items">¥100.00</el-radio>
    <el-radio v-model="radio" label="2" class="items">¥500.00</el-radio>
    <el-radio v-model="radio" label="3" class="items">¥1000.00</el-radio>
    <el-radio v-model="radio" label="4" class="items">¥2000.00</el-radio>
    <el-button type="danger" class="czBtn">立即充值</el-button>
    <div style="font-size: .6rem;text-align: center;color: #409EFF;" @click="remb">充值记录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'gl_recharge',
    data(){
      return{
        radio: '1',
      };
    },
    methods: {
      remb(){
        this.$router.push({name:'gl_rechargeList', params: {userID: 1}});
      },
    },
  };
</script>

<style scoped>
  .items{
    display: block;
    margin:  1rem 0;
  }
  .czBtn{
    display: block;
    margin: 5rem auto .4rem auto;
  }
</style>
