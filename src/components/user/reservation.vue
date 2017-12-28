<template>
  <div class="content">
    <img src="../../assets/mz.jpg" width="100%"/>
    <h3>预约面对面<span style="color: #ff8746;font-size: 12px;">（当前服务剩余 {{times}} 次）</span></h3>
    <div class="text">
      - 高端专享咨询场所<br/>
      - 20分钟与专家面对面，充分交流<br/>
      - 得到全面的健康管理评估和管理计划<br/>
      - 预约成功后原则上不予取消，否则作废
    </div>
    <h4>请选择预约时间</h4>
    <div v-for="(it, i) in date" style="padding: .2rem 0">
      <el-radio v-model="radio" :label="it.visit_time">
        {{it.visit_time.split(':')[0]}}点
        （剩余<span style="color: red">{{it.sum}}</span>个名额）
      </el-radio>
    </div>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" :disabled='dis'>我要预约</el-button>
    <br/>
    <div class="textCenter"><span @click="hist">预约历史</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { insertReservationService, getCustomerServiceDetailCount, getVisitTimeList, teamUserrecharge } from '../interface';

  export default {
    name: 'reservation',
    data() {
      return {
        radio: '',
        dis: false,
        times: '',
        date: '',
      };
    },
    created(){
      let user = localStorage.getItem('customer_id');
      if (user == '' || user == null) {
        this.$router.push({path:'userInfo'});
      } else {
        this.$ajax({
          method: 'get',
          url: getCustomerServiceDetailCount() + '?customer_id=' + localStorage.getItem('customer_id') + '&health_service_id=2',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.times = res.data;
          if(this.times == 0) {
            this.$notify({
              title: '购买服务次数',
              message: '您的剩余服务次数不足，请前往‘哈瑞特王勉工作室’公众号商城购买次数；如果您不是会员，请先前往‘哈瑞特健康’公众号个人中心充值，再返回‘哈瑞特王勉工作室’公众号商城购买会员服务资格（999健康豆），再前往本公众号商城购买对应服务次数（500健康豆）',
              duration: 0
            });
          }
          this.$ajax({
            method: 'get',
            url: getVisitTimeList(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.date = res.data;
          })
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
              this.yy();
            }
          }
        );
      },
      pay(){
        this.$ajax({
          method: 'post',
          url: teamUserrecharge(),
          data: {price: 2},
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

      hist() {
        this.$router.push({name: 'reservationList'});
      },
      yy() {
        if (this.radio == '') {
          this.$message.error('请选择预约时间');
          return false;
        }

        if(this.times <= 0) {
          this.pay();
          return false
        }

        const data = {customer_id: localStorage.getItem('customer_id'), appointment_time: this.radio};
        this.$ajax({
          method: 'POST',
          data: data,
          url: insertReservationService(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data==1) {
            this.$message.success('预约成功，客服将会尽快联系您');
            this.dis = true;
          }
        }).catch((error) => {
          this.$message.error('对不起您的次数不足，请先行购买次数');
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
