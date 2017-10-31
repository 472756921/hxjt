<template>
  <div class="content">
    <img src="../../assets/yy.jpg" width="100%"/>
    <h3>预约服务<span style="color: #ff8746;font-size: 12px;">（当前服务剩余 5 次）</span></h3>
    <div class="text">
      这里是一些预约服务的介绍，这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍
    </div>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" >我要预约</el-button>
    <br/>
    <div class="textCenter"><span @click="hist">预约历史</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { insertReservationService } from '../interface';

  export default {
    name: 'reservation',
    data() {
      return {
        childs: '',
        position: '',
        positionList: '',
        hospital: '',
        hospitalList: '',
        department: '',
        departmentList: '',
        patient: '',
        date: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      };
    },
    methods: {
      dateChange(date) {
        this.date = date;
      },
      hist() {
        this.$router.push({name: 'reservationList'});
      },
      yy() {
        if(this.date == '') {
          this.$message.error('请选择预约时间');
          return;
        }
        const data = {appointment_time: this.date};
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
</style>
