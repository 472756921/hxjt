<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="order_on" label="订单号"></el-table-column>
      <el-table-column prop="price" label="金额"></el-table-column>
      <el-table-column prop="pay_time" label="充值时间"></el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'czList',
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

    },
    methods:{
      changPage(newPage){
        this.getList(newPage);
      },
      getList(page){
      },
    },
  };
</script>

<style scoped>

</style>
