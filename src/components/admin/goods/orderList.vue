<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="omunber" label="订单号"></el-table-column>
        <el-table-column prop="name" label="商品名"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="user" label="购买用户"></el-table-column>
        <el-table-column prop="createDate" label="创建时间"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getAdmins } from '../../interface';

  export default {
    name: 'orderList',
    methods: {
      del(index) {
        const r = confirm("确认删除？")
        if (r === true) {
          this.tableData.splice(index, 1);
        }
      },
      chang(index) {
        this.$router.push({ name: 'addAdmin', params: { account: this.tableData[index].account, rout: this.tableData[index].admin_type, id: this.tableData[index].id } })
      },
    },
    created() {
    },
    data() {
      return {
        tableData: [
          {
            omunber: 123123,
            name: '洗衣液',
            price: 229,
            user: '刘德华',
            createDate: '2012-12-12',
            status: 1,
          },
        ],
      }
    }
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .danger{
    cursor: pointer;
  }
</style>
