<template>
  <div style="padding: .6rem 1rem">
    <div style="font-size: 1rem;padding: 1rem 0">请选择充值金额<span class="Warning" style="font-size: .6rem">（1.00元=1健康豆）</span></div>
    <el-radio v-model="radio" label="100" class="items">¥100.00</el-radio>
    <el-radio v-model="radio" label="500" class="items">¥500.00</el-radio>
    <el-radio v-model="radio" label="1000" class="items">¥1000.00</el-radio>
    <el-radio v-model="radio" label="2000" class="items">¥2000.00</el-radio>
    <el-button type="danger" class="czBtn" @click="recharges">立即充值</el-button>
    <div style="font-size: .6rem;text-align: center;color: #409EFF;" @click="remb">充值记录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { recharge } from '../../interface';

  export default {
    name: 'gl_recharge',
    data(){
      return{
        radio: '100',
      };
    },
    methods: {
      remb(){
        this.$router.push({name:'gl_rechargeList'});
      },
      recharges() {
        this.$ajax({
          method: 'post',
          url: recharge(),
          data: {price: parseInt(this.radio)},
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('充值成功');
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
  .items{
    display: block;
    margin:  1rem 0!important;
  }
  .czBtn{
    display: block;
    margin: 5rem auto .4rem auto;
  }
</style>
