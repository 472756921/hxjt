<template>
  <div>
    <el-tabs v-model="activeName2" @tab-click="handleClick">
      <el-tab-pane label="预约就诊" name="first">
        <div class="reservation" v-for="(item, index) in data">
          <el-row>
            <el-col :span="18">
              <div style="font-size: .6rem;color: #aaa"><span>编号：</span><span>{{item.order_on}}</span></div>
              <div><span class="infoTitle">预约时间：</span><span class="infoText">{{ item.appointment_date }}</span></div>
              <div><span class="infoTitle">预约医院：</span><span class="infoText">{{ item.hospital_name }}</span></div>
              <div><span class="infoTitle">预约科室：</span><span class="infoText">{{ item.department_name }}</span></div>
            </el-col>
            <el-col :span="6">
              <div class="reservationStatus Blue" v-if="item.status === 1">预约中</div>
              <div class="reservationStatus Success" v-if="item.status === 2">预约成功</div>
              <!--<div class="reservationStatus Warning" v-if="item.status === 3">退款中</div>-->
              <div class="reservationStatus danger" v-if="item.status === 3">已退款</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="预约名医就诊" name="second">
        <div class="reservation" v-for="(item, index) in 2">
          <el-row>
            <el-col :span="18">
              <div style="font-size: .6rem;color: #aaa"><span>编号：</span><span>{{item.order_on}}</span></div>
              <div><span class="infoTitle">预约时间：</span><span class="infoText">2012-12-12</span></div>
              <div><span class="infoTitle">预约名医地区：</span><span class="infoText">重庆</span></div>
            </el-col>
            <el-col :span="6">
              <div class="reservationStatus Blue" v-if="item.status === 1">预约中</div>
              <div class="reservationStatus Success" v-if="item.status === 2">预约成功</div>
              <!--<div class="reservationStatus Warning" v-if="item.status === 3">退款中</div>-->
              <div class="reservationStatus danger" v-if="item.status === 3">已退款</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getAppointmentExamineList } from '../interface';

  export default {
    name: 'reservationStatus',
    data() {
      return {
        activeName2: 'first',
        data: '',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      handleClick(tab, event) {
      },
      getList() {
        this.$ajax({
          method: 'GET',
          url: getAppointmentExamineList() + '?customer_id=6',
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
        });
      }
    }
  };
</script>

<style scoped>
  .reservation{
    padding: 1rem;
    font-size: .8rem;
    background: #EFF2F7;
    border-bottom: 1px solid #D3DCE6;
    margin-bottom: .4rem;
  }
  .reservationStatus{
    line-height: 4rem;
  }
  .infoText{
    color: #666;
  }
  .infoTitle{
    color: #333;
  }
</style>
