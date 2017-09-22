<template>
    <div >
      <!--退款申请-->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="create_date" label="提问日期" width="120"></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="doctor_name" label="医生姓名" width="120"></el-table-column>
        <el-table-column prop="order_on" label="订单号" width="180"></el-table-column>
        <el-table-column prop="price" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope"><span class="danger" @click="tuikuan(scope.$index, tableData)">退款</span></template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over" v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getConsultings, updateConsultingStatus } from '../../interface';
  import Page from '../page';

  export default {
    name: 'askS',
    components: { Page },
    created() {
      this.getList(1);
    },
    methods: {
      tuikuan(index, rows) {
        const r = confirm("确认退款？")
        if (r === true) {
          this.$ajax({
            method: 'GET',
            url: updateConsultingStatus() + "?id="+rows[index].id,
          }).then((res) => {
            rows.splice(index, 1);
          }).catch((error) => {
          });
        }
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getConsultings() + "?status=3&page=" + page,
        }).then((res) => {
          this.tableData = res.data.consultings;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      },
    },
    data() {
      return {
        tableData: [],
        over: false,
        page: '',
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
  .danger{
    cursor: pointer;
  }
</style>
