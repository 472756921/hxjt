<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="appointment_time" label="日期"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import { customerGetReservationList } from '../../../interface';

  export default {
    name: 'yu',
    props: {
      userID: Number,
    },
    data(){
      return {
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
      }
    },
    created(){
      this.getList(1);
    },
    methods:{
      changPage(newPage){
        this.getList(newPage);
      },
      getList(page){
        this.$ajax({
          url: customerGetReservationList() + '?customer_id='+this.userID+'&page='+page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.reservations;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        })
      },
    },
  };
</script>

<style scoped>

</style>
