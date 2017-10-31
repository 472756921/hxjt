<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" @row-click="push">
      <el-table-column prop="create_date" label="日期"></el-table-column>
      <el-table-column prop="doctor_send" label="状态"></el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getConsultationList} from  '../interface';

  export default {
    name: 'question_List',
    data() {
      return {
        textarea: '',
        dialogVisible: true,
        img: [],
        fileNow: '',
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
      }
    },
    created(){
      this.getInfo(1);
    },
    methods: {
      changPage() {},
      getInfo(page) {
        this.$ajax({
          method: 'get',
          url: getConsultationList()+"?doctor_id=&customer_id=3&pageSize="+page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.consultingList
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      tableRowClassName(row, index) {
        if (row.doctor_send == '已回答') {
          return 'gos';
        }
        return '';
      },
      push(row, e, c){
        this.$router.push({path:'questionDatile/'+row.id})
      }
    },
  };
</script>

<style>
  .gos {
    color: green;
  }
</style>
