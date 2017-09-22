<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="account"
          label="账号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="admin_type"
          label="角色（1：超级管理员，2：管理员，3：客服）">
        </el-table-column>
        <el-table-column
          prop="create_date"
          label="注册时间">
        </el-table-column>
        <el-table-column label="状态">
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
    name: 'adminUserList',
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
      this.$ajax({
        method: 'get',
        url: getAdmins(),
      }).then((res) => {
        this.tableData = res.data.admins;
      }).catch((error) => {
        this.$message.error('网络有问题，请稍后再试');
      });
    },
    data() {
      return {
        tableData: [],
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
