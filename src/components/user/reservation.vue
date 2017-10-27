<template>
  <div class="content">
    <h3 class="center">预约服务</h3>
    <div style="color: #ff8746;font-size: 10px; text-align: center">（当前服务剩余 5 次）</div>
    <br/>
    <div class="block">
      <div class="demonstration">预约时间：</div>
      <el-date-picker
        v-model="date"
        type="date"
        size="small"
        @change="dateChange"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="success" class="center_block" @click="yy" >预约</el-button>
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
</style>
