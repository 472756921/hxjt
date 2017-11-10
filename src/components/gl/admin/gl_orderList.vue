<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="order_on" label="订单号"></el-table-column>
      <el-table-column prop="goods_name" label="商品名"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="购买用户">
        <template scope="scope">
          <div class="cursor"> {{ scope.row.customer_name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="pay_time" label="创建时间"></el-table-column>
      <el-table-column prop="payStatus" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span  v-if="radio=='1'">无</span>
          <el-button type="primary" size="small" v-if="scope.row.payStatus=='未发货'" @click="fahuo(scope.row.id)">发货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import { customerGetEnterpriseMedicalOrder, updatetMedicalGoodsOrderStatus } from '../../interface';

  export default {
    name: 'gl_orderList',
    created(){
      this.getList(1,1);
    },
    methods: {
      fahuo(id) {
        let confim = confirm('确认已发货？');
        if(confim){
          this.$ajax({
            method: 'POST',
            data: {status: 'DELIVER_GOODS', id: id},
            url: updatetMedicalGoodsOrderStatus(),
          }).then((res) => {
            if(res.data == 1) {
              this.$message.error('操作成功');
              window.location.reload();
            }
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
      changPage(newPage) {
        this.getList(newPage);
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: customerGetEnterpriseMedicalOrder()+"?page=" + page,
        }).then((res) => {
          this.tableData = res.data.orderList;
          this.pageTotle = res.data.totalPage;
          this.pageNow = res.data.page;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
    },
    data() {
      return {
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
