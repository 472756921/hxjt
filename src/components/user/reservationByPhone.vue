<template>
  <div class="content">
    <img src="../../assets/doctor.jpg" width="100%"/>
    <h3>预约电话咨询<span style="color: #ff8746;font-size: 12px;">（当前服务剩余 {{times}} 次）</span></h3>
    <div class="text">
      这里是一些预约服务的介绍，这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy">我要预约</el-button>
    <br/>
    <div style="text-align:center;color: #ff8746;font-size: 12px;">（预约成功后，24小时内专家将会亲自致电与您沟通）</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {createPhoneConsultation, getCustomerServiceDetailCount} from '../interface';

  export default {
    name: 'reservationByPhone',
    data() {
      return {
        times: '',
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
        })
      }
    },
    methods: {
      yy() {
        if(this.times <= 0) {
          this.$message.error('对不起您的余额不足请先充值');
          return false
        }
        this.$ajax({
          method: 'POST',
          data: {customer_id: localStorage.getItem('customer_id')},
          url: createPhoneConsultation(),
        }).then((res) => {
            this.$message.success('预约成功，我们将会尽快致电');
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
