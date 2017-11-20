<template>
  <div style="padding: 10px;overflow:auto;">
    <br/>
    <report ref="report" style="float: left;margin-right: 10px" :userID=this.userID :userID2=this.userIDt></report>
    <addpr style="float: left" :userID=this.userID :userID2=this.userIDt></addpr>
    <br/>
    <el-row>
      <el-col :span="24">
        <h4>生理监控</h4>
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="create_date" label="测量时间"></el-table-column>
          <el-table-column prop="blood_pressure" label="血压(低/高)" ></el-table-column>
          <el-table-column prop="blood_sugar" label="血糖" ></el-table-column>
          <el-table-column prop="heart_rate" label="心率" ></el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle"  @current-change="changPage1"></el-pagination>
      </el-col>
      <el-col :span="24">
        <h4>出院报告</h4>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="upload_time" label="生成时间"></el-table-column>
          <el-table-column prop="id" label="登记号"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click.native.prevent="sure(scope.$index)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow2" :page-count="pageTotle2"  @current-change="changPage2"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getslzb, getCheckReportListByPage} from '../../interface';
  import report from './report.vue';
  import addpr from './addpr.vue';

  export default {
    name: 'userDatile',
    components: {report, addpr},
    props: {
      userIDt: String,
    },
    created() {
      this.userID = this.$route.params.userID;
      this.getData(1);
      this.getData2(1);
    },
    data() {
      return {
        userID: 1,
        pageNow2: 1,
        pageTotle2: 1,
        pageNow: 1,
        pageTotle: 1,
        user: '',
        dialogVisible: false,
        tableData1: [],
        tableData2: [],
      };
    },
    methods: {
      changPage1(pageNew){
        this.getData(pageNew);
      },
      changPage2(pageNew){
        this.getData2(pageNew);
      },
      sure(index) {
        this.$refs.report.inpure(this.tableData2[index]);
        this.dialogVisible = true;
      },
      getData(page) {
        let uid;
        if(this.userIDt==undefined){
          uid = this.userID;
        }
        if (this.userID == undefined)(
          uid = this.userIDt
        )
        this.$ajax({
          method: 'GET',
          url: getslzb() + '?customer_id='+uid+'&page=' + page,
        }).then((res) => {
          this.tableData1 = res.data.healthDatas;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
      getData2(page) {
        let uid;
        if(this.userIDt==undefined){
          uid = this.userID;
        }
        if (this.userID == undefined)(
          uid = this.userIDt
        )
        this.$ajax({
          method: 'GET',
          url: getCheckReportListByPage() + '?customer_id='+uid+'&page=' + page,
        }).then((res) => {
          this.tableData2 = res.data.checkReport;
          this.pageNow2 = res.data.page;
          this.pageTotle2 = res.data.totalPage;
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
    },
  };
</script>

<style scoped>
</style>
