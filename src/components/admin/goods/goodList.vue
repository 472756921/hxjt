<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="naema" label="商品名"></el-table-column>
        <el-table-column prop="xjg" label="现价格"></el-table-column>
        <el-table-column prop="yjg" label="原价格"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <span class="Success" @click="chang(scope.$index)">修改</span>
            <span class="danger" @click="del(scope.$index)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getAdmins } from '../../interface';

  export default {
    name: 'goodList',
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
            naema: '洗衣液',
            xjg: 229,
            yjg: 320,
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
