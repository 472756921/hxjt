<template>
  <div class="content">
    <img src="../../assets/yydh.jpg" width="100%"/>
    <h3>预约电话咨询<span style="color: #ff8746;font-size: 12px;">（当前服务剩余 {{times}} 次）</span></h3>
    <div class="text">
      - 工作室先与您沟通整理好您想咨询的问题和您方便通话的时间<br/>
      - 工作室与专家预约时间，24小时内专家亲自给您回电<br/>
      - 预约成功后原则上不予取消，否则作废
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" :disabled='dis'>我要预约</el-button>
    <br/>
    <div style="text-align:center;color: #ff8746;font-size: 12px;">（预约成功后，24小时内专家将会亲自致电与您沟通）</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {createPhoneConsultation, getCustomerServiceDetailCount, teamUserrecharge} from '../interface';

  export default {
    name: 'reservationByPhone',
    data() {
      return {
        times: '',
        dis: false,
      };
    },
    created(){
      let user = localStorage.getItem('customer_id');
      if (user == '' || user == null) {
        this.$router.push({path:'userInfo'});
      } else {
        this.$ajax({
          method: 'get',
          url: getCustomerServiceDetailCount() + '?customer_id=' + localStorage.getItem('customer_id') + '&health_service_id=6',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.times = res.data;
          if(this.times == 0) {
            this.$notify({
              title: '购买服务次数',
              message: '您的剩余服务次数不足，请前往‘哈瑞特王勉工作室’公众号商城购买次数；如果您不是会员，请先前往‘哈瑞特健康’公众号个人中心充值，再返回‘哈瑞特王勉工作室’公众号商城购买会员服务资格（999健康豆），再前往本公众号商城购买对应服务次数（200健康豆）',
              duration: 0
            });
          }
        })
      }
    },
    methods: {

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
              this.times = 1;
              setTimeout(this.yy(),1000)
            }
          }
        );
      },
      pay(){
        this.$ajax({
          method: 'post',
          url: teamUserrecharge(),
          data: {price: 3},
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

      yy() {
        if(this.times <= 0) {
          this.pay();
          return false
        }
        this.$ajax({
          method: 'POST',
          data: {customer_id: localStorage.getItem('customer_id')},
          url: createPhoneConsultation(),
        }).then((res) => {
          this.$message.success('预约成功，我们将会尽快致电');
          this.dis = true;
          this.times -= 1;
        }).catch((error) => {
          if (error.response.data.errorCode == '1010') {
            this.$message.error('对不起您的次数不足，请前往商城购买');
            return false
          }
          this.$message.error('网络异常，请稍候');
        });
      },
    }
  };
</script>
<style scoped>
  .demonstration{
    color: #333;
    margin-bottom: .3rem;
    font-size: 15px;
  }
  .textCenter{
    text-align: center;
    color: #409EFF;
  }
  .text{
    line-height: 1.6rem;
  }
  .content{
    background-color: #F9FAFC;
  }
  .center_block{
    display: block;
    margin: 0 auto;
  }
</style>
