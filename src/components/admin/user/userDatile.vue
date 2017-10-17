<template>
  <div style="padding: 10px;overflow:auto;">
    <!--{{user.sex==1||user.sex==0?user.sex==1?'男':'女':'未知'}}-->
    <h4>刘德华 - 39岁 - 男</h4>
    <el-row>
      <el-col :span="6"><div>地址：xishan</div></el-col>
      <el-col :span="6"><div>身份证号码：123123123123123123</div></el-col>
      <el-col :span="6"><div>电话：123123123123</div></el-col>
      <el-col :span="6"><div>账户余额：12312</div></el-col>
    </el-row>
    <h4>生理信息</h4>
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column prop="date" label="测量时间"></el-table-column>
      <el-table-column prop="xy" label="血压" ></el-table-column>
      <el-table-column prop="xt" label="血糖" ></el-table-column>
      <el-table-column prop="xl" label="心率" ></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userDatile',
    created() {
      this.userID = this.$route.params.userID;
    },
    data() {
      return {
        user: '',
        tableData1: [
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
