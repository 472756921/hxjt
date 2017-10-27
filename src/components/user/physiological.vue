<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基础指标" name="first">
        <h3>生理指标<i class="iconfont icon-add" style="float:right;color: #1D8CE0;" @click="dialogVisible = true"></i></h3>
        <el-row class="card" v-for="(o, index) in data" key="index">
          <el-col :span="12"><div>日期：{{o.create_date}}</div></el-col>
          <el-col :span="12"><div>血压：{{o.blood_pressure}}</div></el-col>
          <el-col :span="12"> <div>血糖：{{o.blood_sugar}}</div></el-col>
          <el-col :span="12"><div>心率：{{o.heart_rate}}</div></el-col>
        </el-row>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle"  @current-change="changPage1"></el-pagination>
        <el-dialog title="录入指标" :visible.sync="dialogVisible" size="large" :before-close="handleClose">
          <el-input  v-model="blood_pressure" :maxlength=2><template slot="prepend">血压</template></el-input>
          <br/>
          <br/>
          <el-input  v-model="blood_sugar" :maxlength=4><template slot="prepend">血糖</template></el-input>
          <br/>
          <br/>
          <el-input  v-model="heart_rate" :maxlength=4><template slot="prepend">心率</template></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="sure">确定</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="检查指标" name="second">
        <el-row class="card" v-for="(o, index) in data2" key="index">
          <el-col :span="12"><div>日期：{{o.upload_time.substr(0,10)}}</div></el-col>
          <el-col :span="12" style="text-align: right"><el-button type="text" size="small" @click="datile(o.id)">查看详情</el-button></el-col>
        </el-row>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow2" :page-count="pageTotle2"  @current-change="changPage2"></el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getslzb, uploadHealthData, getCheckReportsByCustomer } from '../interface';

  export default {
    name: 'physiological',
    data() {
      return {
        activeName: 'first',
        dialogVisible: false,
        blood_pressure: '',
        blood_sugar: '',
        heart_rate: '',
        user: '',
        xl: '',
        zg: '',
        data: [],
        data2: [],
        pageNow: 0,
        pageTotle: 0,
        pageNow2: 0,
        pageTotle2: 0,
      };
    },
    created() {
      this.getData(1);
      this.getData2(1);
    },
    methods: {
      changPage1(pageNew){
        this.getData(pageNew);
      },
      changPage2(pageNew){
        this.getData2(pageNew);
      },
      handleClick(tab, event) {
      },
      getData(page) {
        this.$ajax({
          method: 'GET',
          url: getslzb() + '?customer_id=3&page=' + page,
        }).then((res) => {
          this.data = res.data.healthDatas;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
      getData2(page) {
        this.$ajax({
          method: 'GET',
          url: getCheckReportsByCustomer() + '?customer_id=3&page=' + page,
        }).then((res) => {
          this.data2 = res.data.reports;
          this.pageNow2 = res.data.page;
          this.pageTotle2 = res.data.totalPage;
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
      datile(id){
        console.log(id)
        this.$router.push({path:'report/'+id})
      },
      handleClose(done) {
        done();
        this.blood_pressure = '' ;
        this.blood_sugar = '' ;
        this.heart_rate = '';
      },
      sure() {
        const date = new Date();
        if (this.blood_pressure !== '' && this.blood_sugar !== '' && this.heart_rate !== '') {
          const data = {blood_pressure: this.blood_pressure, blood_sugar: this.blood_sugar, heart_rate: this.heart_rate};
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: uploadHealthData(),
          }).then((res) => {
            if(res.data === 1) {
              this.$message.success('添加成功！');
              this.data = [data,...this.data];
            }
          }).catch((error) => {
            this.$message.error('网络异常请稍候');
          });
          this.dialogVisible = false;
          this.blood_pressure = '' ;
          this.blood_sugar = '' ;
          this.heart_rate = '';
        } else {
          this.$message.error('请输入生理指标信息');
        }
      },
    }
  };
</script>

<style scoped>
  .card{
    font-size: .8rem;
    background: #EFF2F7;
    padding: 1rem .6rem;
    border-radius: .2rem;
    margin-bottom: .6rem;
    line-height: 1.3rem;
  }
</style>
