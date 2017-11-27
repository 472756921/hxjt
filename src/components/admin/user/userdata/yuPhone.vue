<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="initiate_time" label="日期"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter="formatter"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getPhoneConsultationsByCustomerId } from '../../../interface';

  export default {
    name: 'yuPhone',
    props: {
      userID: Number,
    },
    data(){
      return {
        tableData: [],
      }
    },
    created(){
      this.getList();
    },
    methods:{
      formatter(row, c, cell){
        if(row.status == '1') {
          return '未拨打'
        }
        if(row.status == '2') {
          return '已拨打'
        }
      },
      getList(){
        this.$ajax({
          url: getPhoneConsultationsByCustomerId() + '?customer_id='+this.userID,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.phoneConsultings;
        })
      },
    },
  };
</script>

<style scoped>

</style>
