<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="customer_name" label="姓名" ></el-table-column>
      <el-table-column prop="customer_phone" label="电话" ></el-table-column>
      <el-table-column prop="gender" label="性别" ></el-table-column>
      <el-table-column prop="age" label="年龄"  ></el-table-column>
      <el-table-column prop="create_date" label="提问时间"></el-table-column>
      <el-table-column prop="doctor_send" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Blue cursor" @click="chang(scope.$index)">详情</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow2" :page-count="pageTotle2" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getConsultationList} from '../../interface';

  export default {
    created(){
      this.getInfo(1);
    },
    methods: {
      changPage(pageNew){
        this.getInfo(pageNew);
      },
      tableRowClassName(row, index) {
        if (row.status === 0) {
          return 'info-row';
        }
        return '';
      },
      chang(index) {
        this.$router.push({ name: 'askDatile', params: { user: this.tableData[index] } })
      },
      getInfo(page) {
        this.$ajax({
          method: 'get',
          url: getConsultationList()+"?doctor_id=&customer_id=3&pageSize="+page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.consultingList
          this.pageNow2 = res.data.page;
          this.pageTotle2 = res.data.totalPage;
        }).catch((error) => {
            this.$message.error(error.message);
        });
      },
    },
    data() {
      return {
        pageNow2: 1,
        pageTotle2: 1,
        tableData: [],
      }
    }
  }
</script>

<style>
  .el-table .info-row {
    background: #ffece3;
  }
</style>
