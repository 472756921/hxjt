<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="appointment_time" label="预约日期" :formatter = 'formatter'></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" >
          <template scope="scope">
            <div class="cursor" @click="goUser(scope.row)"> {{ scope.row.customer_name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="customer_phone" label="手机号码" ></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">确认预约</el-button>
            <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">时间设置</el-button>
            <el-button @click.native.prevent="cancel(scope.$index)" type="text" size="small">取消预约</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over" v-on:pageChange="getList"/>
      <div class="model" v-if="cover">
        <div style="font-weight: bold">时间设置</div>
        <br/>
        <div class="block">
          <el-date-picker v-model="changeDateValue" type="datetime" placeholder="选择日期" size="small" @change="dateChange" :picker-options="pickerOptions0"></el-date-picker>
        </div>
        <br/>
        <el-button type="danger" size="small" @click="cancle">取消</el-button>
        <el-button type="primary" size="small" @click="change">确认</el-button>
      </div>
      <div class="fade" v-if="cover"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getReservationList, updateReservationStatus, reservationBack } from '../../interface';
  import Page from '../page';

  export default {
    name: 'treatment',
    components: { Page },
    methods: {
      formatter(row, column) {
        if (row.appointment_time == '' || row.appointment_time == null) {
          return '未设置时间';
        } else {
          return row.appointment_time;
        }
      },
      goUser(row) {
        this.$router.push({ name: 'userDatile', params: { userID:row.userID } })
      },
      dateChange(date) {
        this.changeDateValue = date;
      },
      cancel(index){
        let a = confirm('是否取消该预约');
        if(a) {
          const data = {
            id: this.tableData[index].id,
          };
          this.$ajax({
            method: 'post',
            url: reservationBack(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.tableData.splice(index, index+1);
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        } else {
          return false;
        }
      },
      change() {
        const data = {
          status: 1,
          id: this.cID,
          appointment_time: this.changeDateValue,
        };
        this.$ajax({
          method: 'post',
          url: updateReservationStatus(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('安排成功');
          this.tableData[this.index].appointment_time = this.changeDateValue;
          this.cover = false;
        }).catch((error) => {
          console.log(error)
          this.$message.error('服务器累了，歇会再试吧');
        });
      },
      cancle() {
        this.cover = false;
      },
      changeDate(index, rows) {
        this.index = index;
        this.cID = rows[index].id;
        this.changeDateValue = rows[index].date;
        this.cover = true;
      },
      sure(index, rows) {
        if(rows[index].appointment_time == null || rows[index].appointment_time == ''){
          this.$message.error('请先设置时间');
          return false;
        }
        const r = confirm("确认预约？")
        if (r === true) {
          const data = {
            status: 2,
            id: rows[index].id,
            appointment_time: rows[index].appointment_time,
          };
          this.$ajax({
            method: 'post',
            url: updateReservationStatus(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            rows.splice(index, 1);
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getReservationList() + "?doctor_id=1&page="+page+"&status=1",
        }).then((res) => {
          this.tableData = res.data.reservations;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      }
    },
    created() {
     this.getList(1);
    },
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        changeDateValue: '',
        index: '',
        over: false,
        cover: false,
        tableData: [],
        page: '',
        cID: '',
      };
    },
  };
</script>

<style scoped>
  .model{
    width: 200px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 40%;
    background-color: #fff;
    z-index: 2;
  }
  .fade{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #999999;
    opacity: .5;
    z-index: 1;
  }
</style>
