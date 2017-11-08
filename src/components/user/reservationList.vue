<template>
  <div>
    <h3 class="title">预约面诊记录</h3>
    <span class="danger">（预约成功后，请按时到达指定地点进行面诊）</span>
    <br/>
    <el-row :gutter="10" class="bo">
      <el-col :xs="12">时间</el-col>
      <el-col :xs="12" style="text-align: right">状态</el-col>
    </el-row>
    <el-row :gutter="10" class="item" v-for="(it, i) in data" key="i">
      <el-col :xs="12">{{it.appointment_time==null?'暂未安排':it.appointment_time}}</el-col>
      <el-col :xs="12" class="Blue" style="text-align: right" v-if="it.status==1">预约中</el-col>
      <el-col :xs="12" class="Success" style="text-align: right" v-if="it.status==2">预约成功</el-col>
      <el-col :xs="12" class="danger" style="text-align: right" v-if="it.status==3">预约失败</el-col>
    </el-row>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {customerGetReservationList} from '../interface';

  export default {
    name: 'reservationList',
    data(){
      return {
        data: [],
        pageTotle: 1,
        pageNow: 1,
      };
    },
    created(){
      this.getData(1);
    },
    methods: {
      changPage(newPage){
        this.getData(newPage);
      },
      getData(page){
        this.$ajax({
          method: 'get',
          url: customerGetReservationList() + '?customer_id='+localStorage.getItem('customer_id')+'&page='+page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.reservations;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
        });
      },
    }
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
