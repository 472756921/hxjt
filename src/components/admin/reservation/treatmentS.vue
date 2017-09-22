<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="appointment_date" label="预约日期" width="120"></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="预约地点" width="120"></el-table-column>
        <el-table-column prop="hospital_name" label="预约医院" width="120"></el-table-column>
        <el-table-column prop="department_name" label="预约科室" width="120"></el-table-column>
        <el-table-column prop="order_on" label="订单号" width="190"></el-table-column>
        <el-table-column prop="price" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="状态">
          <template scope="scope"><span class="Success">预约成功</span></template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over"  v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getExamineManager } from '../../interface';
  import Page from '../page';

  export default {
    components: { Page },
    name: 'treatmentS',
    data() {
      return {
        tableData: [],
        over: false,
        page: '',
      };
    },
    created() {
      this.getList(1);
    },
    methods: {
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getExamineManager() + "?status=2&page=" + page,
        }).then((res) => {
          this.tableData = res.data.ExamineManager;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      }
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
