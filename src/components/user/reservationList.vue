<template>
  <div>
    <h3 class="title">预约面诊记录</h3>
    <span class="danger">（预约成功后，请按时到达指定地点进行面诊）</span>
    <br/>
    <el-row :gutter="10" class="bo">
      <el-col :xs="12">时间</el-col>
      <el-col :xs="12" style="text-align: right">状态</el-col>
    </el-row>
    <el-row :gutter="10" class="item">
      <el-col :xs="12">2012-12-12 08:00</el-col>
      <el-col :xs="12" class="Blue" style="text-align: right">预约中</el-col>
    </el-row>
    <el-row :gutter="10" class="item">
      <el-col :xs="12">2012-12-12 09:00</el-col>
      <el-col :xs="12" class="Success" style="text-align: right">预约成功</el-col>
    </el-row>
    <el-row :gutter="10" class="item">
      <el-col :xs="12">2012-12-12 11:00</el-col>
      <el-col :xs="12" class="danger" style="text-align: right">预约失败</el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'reservationList',
  };
</script>

<style scoped>
  .title{
    color: #409EFF;
  }
  .bo{
    font-weight: 700;
    font-size: 1rem;
    /*text-align: center;*/
    margin: 1rem 0;
  }
  .item{
    padding: .8rem 0;
    border-bottom: 1px solid #ddd;
  }
</style>
