<template>
  <div>
    <div>
      <el-input placeholder="请输入用户姓名/电话/身份证" v-model="search">
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="real_name" label="姓名" ></el-table-column>
      <el-table-column prop="phone" label="电话" ></el-table-column>
      <el-table-column prop="gender" label="性别" :formatter = 'formatter' ></el-table-column>
      <el-table-column prop="age" label="年龄"  ></el-table-column>
      <el-table-column prop="id_number" label="身份证号码" width="200"></el-table-column>
      <el-table-column prop="money" label="账户余额" ></el-table-column>
      <el-table-column prop="join_group_time" label="加入团队时间"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Blue cursor" @click="chang(scope.$index)">生理监控</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getGroupCustomers} from '../../interface'

  export default {
    name: 'list',
    data() {
      return {
        pageNow: 1,
        pageTotle: 1,
        search: '',
        tableData: [],
      }
    },
    created(){
      this.getInfo(1);
    },
    methods: {
      changPage(newPage){
        this.getInfo(newPage);
      },
      getInfo(page) {
        this.$ajax({
          method: 'GET',
          url: getGroupCustomers()+"?page="+page,
        }).then((res) => {
          this.tableData = res.data.customers;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      chang(index) {
        this.$router.push({ name: 'userDatile', params: { userID: this.tableData[index].id } })
      },
      formatter(row, column) {
        if (row.gender === 1) {
          return '男';
        } else if (row.gender === 0){
          return '女';
        } else {
          return '未知';
        }
      },
    },
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
