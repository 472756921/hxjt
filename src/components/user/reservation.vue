<template>
  <div class="content">
    <img src="../../assets/yy.jpg" width="100%"/>
    <h3>预约服务<span style="color: #ff8746;font-size: 12px;">（当前服务剩余 {{times}} 次）</span></h3>
    <div class="text">
      这里是一些预约服务的介绍，这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" >我要预约</el-button>
    <br/>
    <div class="textCenter"><span @click="hist">预约历史</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { insertReservationService, getCustomerServiceDetailCount } from '../interface';

  export default {
    name: 'reservation',
    data() {
      return {
        times: '',
        date: '',
      };
    },
    created(){
      this.$ajax({
        method: 'get',
        url: getCustomerServiceDetailCount() + '?customer_id='+localStorage.getItem('customer_id')+'&health_service_id=2',
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        this.times = res.data;
      })
    },
    methods: {
      hist() {
        this.$router.push({name: 'reservationList'});
      },
      yy() {
        const data = {customer_id: localStorage.getItem('customer_id')};
        this.$ajax({
          method: 'POST',
          data: data,
          url: insertReservationService(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data==1) {
            this.$message.success('预约成功，客服将会尽快联系您');
          }
        }).catch((error) => {
          this.$message.error(error.message);
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
