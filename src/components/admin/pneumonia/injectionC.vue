<template>
  <div>
    <div class="title">小儿肺炎疫苗第三次注射安排</div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="create_date" label="创建日期" width="120"></el-table-column>
      <el-table-column prop="injection_date" label="注射时间" width="120"></el-table-column>
      <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
      <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="住址" width="120"></el-table-column>
      <el-table-column prop="sum_count" label="总注射次数" width="120"></el-table-column>
      <el-table-column prop="now_count" label="当前待注射次数" width="180"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">完成注射</el-button>
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">设置注射日期</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Page :page="page" v-if="over"  v-on:pageChange="getList"/>

    <div class="model" v-if="cover">
      <div style="font-weight: bold">修改时间</div>
      <br/>
      <div class="block">
        <el-date-picker
          v-model="changeDateValue"
          type="date"
          placeholder="选择日期"
          size="small"
          @change="dateChange"
          :picker-options="pickerOptions0">
        </el-date-picker>
      </div>
      <br/>
      <el-button type="danger" size="small" @click="cancle">取消</el-button>
      <el-button type="primary" size="small" @click="change">确认</el-button>
    </div>
    <div class="fade" v-if="cover"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getInjection, updateInjectionDate, updatePediatricPneumoniaStatus } from '../../interface';
  import Page from '../page';

  export default {
    name: 'injectionC',
    components: { Page },
    created() {
      this.getList(1);
    },
    methods: {
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getInjection()+"?count=3&page="+page,
        }).then((res) => {
          this.tableData = res.data.pediatricPneumonia;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      },
      dateChange(date) {
        this.changeDateValue = date;
      },
      change() {
        const data = {
          injection_date: this.changeDateValue,
          id: this.tableData[this.index].id,
          count: 3,
        };
        this.$ajax({
          method: 'post',
          url: updateInjectionDate(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData[this.index].injection_date = this.changeDateValue;
          this.cover = false;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      cancle() {
        this.cover = false;
      },
      changeDate(index, rows) {
        this.index = index;
        this.injectionDate = rows[index].injectionDate;
        this.cover = true;
      },
      colse(index, rows) {
        const r = confirm("确认关闭订单，并向用户退款？")
        if (r === true) {
          const id = rows[index].id;
          rows.splice(index, 1);
        }
      },
      sure(index, rows) {
        const ijdate =  rows[index].injection_date;
        if(ijdate == '' || ijdate == null || ijdate == undefined) {
          this.$message.error('当前用户还未设置注射时间，不能完成注射');
          return ;
        };
        const r = confirm("确认该用户已经完成第三次注射？")
        const id = rows[index].id;
        if (r === true) {
          this.$ajax({
            method: 'post',
            url: updatePediatricPneumoniaStatus(),
            data: {id: id, count: 3},
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            rows.splice(index, 1);
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
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
        cover: false,
        tableData: [],
        page: '',
        over: false,
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
  .title{
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    overflow: auto;
  }
</style>
