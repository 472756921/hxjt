<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="1">服务包</el-radio>
    <el-radio v-model="radio" label="2">商品</el-radio>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="omunber" label="订单号"></el-table-column>
      <el-table-column prop="name" label="商品名"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="user" label="购买用户">
        <template scope="scope">
          <div class="cursor" @click="goUser(scope.row)"> {{ scope.row.user }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter'></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCustomerHealthServiceOrder, customerGetMedicalOrder } from '../../interface';

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
      getList(page, type) {
        let url;
        if(type == 1) {
          url = getCustomerHealthServiceOrder();
        }
        if(type == 2) {
          url = customerGetMedicalOrder();
        }
        this.$ajax({
          method: 'GET',
          url: url + "?page="+page,
        }).then((res) => {
          this.tableData = res.data.packages;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      formatter(r,i) {
        if(r.status == '1') {
          return '已支付';
        }
        if(r.status == '0') {
          return '未支付';
        }
      },
      goUser(row) {
        this.$router.push({ name: 'userDatile', params: { userID:row.userID } })
      },
    },
    created() {
    },
    data() {
      return {
        radio: '1',
        tableData: [],
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
