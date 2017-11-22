<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="order_on" label="订单号"></el-table-column>
    <el-table-column prop="goods_name" label="名称"></el-table-column>
    <el-table-column prop="price" label="金额"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column prop="pay_time" label="购买时间"></el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
  import { getCusotmerMedicalOrder } from '../../../interface';

  export default {
    name: 'spList',
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
      getList(){
        this.$ajax({
          url:getCusotmerMedicalOrder()+"?customer_id="+this.userID,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.orders;
        })
      },
    },
  };
</script>

<style scoped>

</style>
