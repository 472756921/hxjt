<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="appointment_time" label="预约日期" ></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" >
          <template scope="scope">
            <div class="cursor" @click="goUser(scope.row)"> {{ scope.row.customer_name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="customer_phone" label="手机号码" ></el-table-column>
        <el-table-column label="状态">
          <template scope="scope"><span class="Success">预约成功</span></template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over"  v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getReservationList } from '../../interface';
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
      goUser(row) {
        this.$router.push({ name: 'userDatile', params: { userID:row.userID } })
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getReservationList() + "?doctor_id="+sessionStorage.getItem('docID')+"&page="+page+"&status=2",
        }).then((res) => {
          this.tableData = res.data.reservations;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
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
