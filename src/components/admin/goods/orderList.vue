<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="1">服务包</el-radio>
    <el-radio v-model="radio" label="2">商品</el-radio>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="order_on" label="订单号"></el-table-column>
      <el-table-column prop="goods_name" label="商品名"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="购买用户">
        <template scope="scope">
          <div class="cursor" @click="goUser(scope.row)"> {{ scope.row.customer_name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="pay_time" label="创建时间"></el-table-column>
      <el-table-column prop="payStatus" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="primary" size="small" v-if="scope.row.payStatus=='未发货'&&radio==2" @click="fahuo">发货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getHealthServiceOrder, customerGetMedicalOrder } from '../../interface';

  export default {
    name: 'orderList',
    created(){
      this.getList(1,1);
    },
    watch: {
      radio (newData, oldData) {
        this.getList(1,newData);
      },
    },
    methods: {
      changPage(newPage) {
        this.getList(newPage, this.radio);
      },
      getList(page, type) {
        let url;
        if(type == 1) {
          url = getHealthServiceOrder()+"?page="+page;
        }
        if(type == 2) {
          url = customerGetMedicalOrder()+"?page="+page+"&customer_id=";
        }
        this.$ajax({
          method: 'GET',
          url: url,
        }).then((res) => {
          this.tableData = res.data.medicalGoods;
          this.pageTotle = res.data.totalPage;
          this.pageNow = res.data.page;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      goUser(row) {
        this.$router.push({ name: 'userDatile', params: { userID:row.userID } })
      },
      fahuo(){

      },
    },
    data() {
      return {
        radio: '1',
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
      }
    }
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .cursor{
    cursor: pointer;
  }
</style>
