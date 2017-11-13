<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="price" label="充值金额" ></el-table-column>
      <el-table-column prop="create_date" label="充值时间"></el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRechargeByPage} from '../../interface'

  export default {
    name: 'gl_rechargeList',
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
      chang(index) {
        this.$router.push({ name: 'userDatile', params: { userID: this.tableData[index].id } })
      },
      formatter(row, column) {
        if (row.gender === 1) {
          return '男';
        } else if (row.gender === 0){
          return '女';
        } else {
          return '未知';
        }
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
