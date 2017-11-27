<template>
  <div  style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="1">商品购买记录</el-radio>
    <el-radio v-model="radio" label="2">充值记录</el-radio>

    <el-table :data="tableData" style="width: 100%" v-if="radio==1">
      <el-table-column prop="order_on" label="订单号"></el-table-column>
      <el-table-column prop="goods_name" label="名称"></el-table-column>
      <el-table-column prop="price" label="金额"></el-table-column>
      <el-table-column prop="pay_time" label="购买时间"></el-table-column>
      <el-table-column prop="payStatus" label="状态"></el-table-column>
    </el-table>

    <el-table :data="tableData2" style="width: 100%" v-if="radio==2">
      <el-table-column prop="customer_name" label="姓名" ></el-table-column>
      <el-table-column prop="phone" label="电话" ></el-table-column>
      <el-table-column prop="id_number" label="身份证号码" ></el-table-column>
      <el-table-column prop="price" label="充值金额" ></el-table-column>
      <el-table-column prop="create_date" label="充值时间"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {personalPurchase, personalCredit} from '../../interface';

  export default {
    name: 'gl_xiaofei',
    created(){
      this.userID = this.$route.params.userID;
      if(this.userID == undefined) {
        this.$router.push({path: 'list'});
      }
      this.get();
      this.get2();
    },
    data(){
      return {
        radio: '1',
        tableData: [],
        tableData2: [],
      }
    },
    methods:{
      get(){
        this.$ajax({
          method: 'GET',
          url: personalPurchase()+"?customer_id="+this.userID,
        }).then((res) => {
          this.tableData = res.data.medicalGoods;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      get2(){
        this.$ajax({
          method: 'GET',
          url: personalCredit()+"?customer_id="+this.userID,
        }).then((res) => {
          this.tableData2 = res.data.orders;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>

</style>
