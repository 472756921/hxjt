<template>
    <div>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="consultation_time" label="专家回拨日期" ></el-table-column>
        <el-table-column prop="initiate_time" label="用户申请日期" ></el-table-column>
        <el-table-column prop="real_name" label="用户姓名" ></el-table-column>
        <el-table-column prop="phone" label="手机号码" ></el-table-column>
        <el-table-column label="状态" :formatter="formatter"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="primary" size="mini" @click="bod(scope.$index)" v-if="tableData[scope.$index].status==1">标记为已拨打</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over"  v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getPhoneConsultations, updatePhoneConsulation } from '../../interface';
  import Page from '../page';

  export default {
    components: { Page },
    name: 'treatmentPhone',
    data() {
      return {
        tableData: [],
        over: false,
        page: '',
      };
    },
    created() {
      this.getList(1);
    },
    methods: {
      bod(index){
        this.$ajax({
          method: 'POST',
          url: updatePhoneConsulation(),
          data: {id: this.tableData[index].id, status: 2},
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          window.location.reload();
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      formatter(row, c, cell){
        if(row.status == '1') {
          return '未拨打'
        }
        if(row.status == '2') {
          return '已拨打'
        }
      },
      goUser(row) {
        this.$router.push({ name: 'userDatile', params: { userID:row.userID } })
      },
      tableRowClassName(row, rowIndex){
        if (row.status === 1) {
          return 'warning-row';
        }
        return '';
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getPhoneConsultations() + "?page="+page,
        }).then((res) => {
          this.tableData = res.data.phoneConsultings;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      }
    },
  };
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .model{
    width: 200px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 40%;
    background-color: #fff;
    z-index: 2;
  }
  .fade{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #999999;
    opacity: .5;
    z-index: 1;
  }
</style>
