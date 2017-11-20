<template>
  <div style="padding: .6rem 1rem">
    <div style="font-size: 1rem;padding: 1rem 0">请选择充值金额<span class="Warning" style="font-size: .6rem">（1.00元=1健康豆）</span></div>
    <el-radio v-model="radio" label="100" class="items">¥100.00</el-radio>
    <el-radio v-model="radio" label="500" class="items">¥500.00</el-radio>
    <el-radio v-model="radio" label="1000" class="items">¥1000.00</el-radio>
    <el-radio v-model="radio" label="2000" class="items">¥2000.00</el-radio>
    <el-button type="danger" class="czBtn" @click="recharges">立即充值</el-button>
    <div style="font-size: .8rem;text-align: center;color: #409EFF;" @click="remb">充值记录</div>
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
          if (typeof window.WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('window.WeixinJSBridgeReady',
                this.onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('window.WeixinJSBridgeReady', this.onBridgeReady);
              document.attachEvent('window.onWeixinJSBridgeReady', this.onBridgeReady);
            }
          } else {
            this.onBridgeReady(res.data.appId, res.data.nonceStr,res.data.package, res.data.paySign, res.data.timeStamp);
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      onBridgeReady(appIdV, nonceStrV, prepayIdV, paySignV, timeStampV) {
        window.WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            'appId': appIdV,
            'timeStamp': timeStampV.toString(),
            'nonceStr': nonceStrV,
            'package': 'prepay_id=' + prepayIdV,
            'signType': 'MD5',
            'paySign': paySignV,
          },
          (res) => {
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
              this.$message.success('充值成功');
              setTimeout(()=>{this.$router.push({path:'gl_userInfo'});},1000)
            }
          }
        );
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
