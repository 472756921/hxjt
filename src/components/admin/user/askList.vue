<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="account" label="姓名" ></el-table-column>
      <el-table-column prop="phone" label="电话" ></el-table-column>
      <el-table-column prop="sex" label="性别" :formatter = 'formatter' ></el-table-column>
      <el-table-column prop="age" label="年龄"  ></el-table-column>
      <el-table-column prop="lastLoginDate" label="提问时间"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter2'></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Blue cursor" @click="chang(scope.$index)">详情</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (row.status === 0) {
          return 'info-row';
        }
        return '';
      },
      chang(index) {
        this.$router.push({ name: 'askDatile', params: { user: this.tableData[index] } })
      },
      formatter(row, column) {
        if (row.sex === 1) {
          return '男';
        } else if (row.sex === 0){
          return '女';
        } else {
          return '未知';
        }
      },
      formatter2(row, column) {
        if (row.status === 1) {
          return '已回答';
        } else if (row.status === 0){
          return '未回答';
        }
      },
    },
    data() {
      return {
        tableData: [{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          phone: '123123123',
          ye: 320,
          id: 1,
          status: 0,
          idNumber: 49382839993829383922,
          age:33,
          sex: 1
        },{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          phone: 18830293,
          ye: 320,
          status: 1,
          id: 1,
          age:33,
          idNumber: 49382839993829383922,
          sex: 0
        }, {
          lastLoginDate: '2016-05-02',
          account: '王小',
          phone: 18830293,
          status: 1,
          ye: 320,
          idNumber: 49382839993829383922,
          id: 1,
          age:33,
          sex: 2
        },],
      }
    }
  }
</script>

<style>
  .el-table .info-row {
    background: #ffece3;
  }
</style>
