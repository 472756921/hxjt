<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="customer_name" label="姓名" ></el-table-column>
      <el-table-column prop="phone" label="电话" ></el-table-column>
      <el-table-column prop="id_number" label="身份证号码" ></el-table-column>
      <el-table-column prop="price" label="充值金额" ></el-table-column>
      <el-table-column prop="create_date" label="充值时间"></el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRechargeByPage, personalCredit} from '../../interface'

  export default {
    name: 'gl_userList',
    data() {
      return {
        pageNow: 1,
        pageTotle: 1,
        tableData: [],
      }
    },
    created(){
      this.getInfo(1);
    },
    methods: {
      changPage(newPage){
        this.getInfo(newPage);
      },
      getInfo(page) {
        this.$ajax({
          method: 'GET',
          url: getRechargeByPage()+"?page="+page,
        }).then((res) => {
          this.tableData = res.data.orders;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .danger{
    cursor: pointer;
  }
</style>
