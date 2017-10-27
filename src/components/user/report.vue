<template>
  <div class="content">
    <h3 style="text-align: center;">检测指标</h3>
    <el-row style="line-height: 1.8rem;color:#8492A6">
      <el-col :span="24">
        <span class="titleC">基本信息</span>
      </el-col>
      <el-col :span="12">
        <span class="titleA">姓名：</span>刘德华
      </el-col>
      <el-col :span="12">
        <span class="titleA">登记号：</span>12138
      </el-col>
      <el-col :span="24">
        <span class="titleA">联系方式：</span>1883774639
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: .2rem">
        <span class="titleA">首次病程记录/诊断意见：</span>
        <div> 他挥了挥手让出去，看着仍然昏迷的儿子，轻抚着他的额头喃喃道“臭小子，我知道你很聪明。</div>
      </el-col>
      <el-col :span="24">
        <span class="titleC">心脏彩超</span>
      </el-col>
      <el-col :span="12">
        <span class="titleA">LV：</span>12
      </el-col>
      <el-col :span="12">
        <span class="titleA">LA：</span>12
      </el-col>
      <el-col :span="12">
        <span class="titleA">RV：</span>12
      </el-col>
      <el-col :span="12">
        <span class="titleA">RA：</span>12
      </el-col>
      <el-col :span="12">
        <span class="titleA">EF：</span>12
      </el-col>
      <el-col :span="24" >
        <span class="titleC">生化指标</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">丙氨酸氨基转移酶：</span>12 IU/L<span class="ckz">（参考值：<50）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">门冬氨酸氨基转移酶：</span>12 IU/L<span class="ckz">（参考值：<40）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">总蛋白：</span>12 g/L<span class="ckz">（参考值：65-85）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">白蛋白：</span>12 g/L<span class="ckz">（参考值：40-55）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">葡萄糖：</span>12 mmol/L<span class="ckz">（参考值：3.9-5.9）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿素：</span>12 mmol/L<span class="ckz">（参考值：3.82-8.86）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酐：</span>12 umol/L<span class="ckz">（参考值：53-140）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">估算肾小球滤过率：</span>12 ml/min/1.73m2<span class="ckz">（参考值：56-122）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿酸：</span>12 umol/L<span class="ckz">（参考值：240-490）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">甘油三脂：</span>12 mmol/L<span class="ckz">（参考值：0.29-1.83）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">胆固醇：</span>12 mmol/L<span class="ckz">（参考值：2.8-5.7）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">高密度脂蛋白：</span>12 mmol/L<span class="ckz">（参考值：>0.9）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">低密度脂蛋白：</span>12 mmol/L<span class="ckz">（参考值：<4）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">谷氨酰转肽酶：</span>12 IU/L<span class="ckz">（参考值：<60）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酸激酶：</span>12 IU/L<span class="ckz">（参考值：19-226）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">乳酸脱氢酶：</span>12 IU/L<span class="ckz">（参考值：110-220）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">羟丁酸脱氢酶：</span>12 IU/L<span class="ckz">（参考值：72-182）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">钠：</span>12 mmol/L<span class="ckz">（参考值：137-147）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">钾：</span>12 mmol/L<span class="ckz">（参考值：3.5-5.3）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">氯：</span>12 mmol/L<span class="ckz">（参考值：99-110）</span>
      </el-col>
      <el-col :span="24" >
        <span class="titleC">血常规</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">红细胞计数：</span>12 10^12/L<span class="ckz">（参考值：4.3-5.8）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血红蛋白：</span>12 g/L<span class="ckz">（参考值：130-175）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血小板计数：</span>12 10^9/L<span class="ckz">（参考值：100-300）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">白细胞计数：</span>12 10^10/L<span class="ckz">（参考值：3.9-9.5）</span>
      </el-col>
      <el-col :span="24" >
        <span class="titleC">心肌标志物</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌红蛋白：</span>12 ng/ml<span class="ckz">（参考值：<72）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酸激酶同功酶MB质量：</span>12 ng/ml<span class="ckz">（参考值：<4.94）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿钠素：</span>12 pg/ml<span class="ckz">（参考值：0-227）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌钙蛋白-T：</span>12 ng/ml<span class="ckz">（参考值：0-14）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">大便隐血：</span>阳性</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血压：</span>29</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">心率：</span>23</span>
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: .2rem">
        <span class="titleA">冠脉造影结果：</span>
        <div> 他挥了挥手让出去，看着仍然昏迷的儿子，轻抚着他的额头喃喃道“臭小子，我知道你很聪明。</div>
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: .2rem; margin-top: .3rem">
        <span class="titleA">支架置入个数、部位：</span>
        <div> 他挥了挥手让出去，看着仍然昏迷的儿子，轻抚着他的额头喃喃道“臭小子，我知道你很聪明。</div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getReportDetailByReportId} from '../interface';

  export default {
    name: 'report',
    created(){
      this.getInfo(this.$route.params.id);
    },
    data(){
      return{
        data : '',
      };
    },
    methods:{
      getInfo(datID){
        this.$ajax({
          method: 'GET',
          url: getReportDetailByReportId() + '?report_id='+datID,
        }).then((res) => {
          this.data2 = res.data.reports;
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
.titleA{
  font-weight: bold;
  color: #486B8A;
}
.titleC{
  font-weight: bold;
  color: #666;
  line-height: 2rem;
  font-size: .95rem;
}
.ckz{
  color: #13CE66;
}
.content{
}
</style>
