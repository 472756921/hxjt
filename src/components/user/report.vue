<template>
  <div class="content">
    <h3 style="text-align: center;margin: .4rem">检测指标</h3>
    <div style="text-align: center;color: #cccccc;">{{repData.check_time.split(' ')[0]}}</div>
    <el-row style="line-height: 1.8rem;color:#8492A6">
      <el-col :span="24">
        <span class="titleC">基本信息</span>
      </el-col>
      <el-col :span="12">
        <span class="titleA">姓名：</span>{{repData.customer.real_name}}
      </el-col>
      <el-col :span="12">
        <span class="titleA">登记号：</span>{{repData.id}}
      </el-col>
      <el-col :span="24">
        <span class="titleA">联系方式：</span>{{repData.customer.phone}}
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: 1rem">
        <span class="titleA">首次病程记录/诊断意见：</span>
        <div> {{repData.diagnosis}}</div>
      </el-col>
      <el-col :span="24">
        <span class="titleC">心脏彩超</span>
      </el-col>
      <el-col :span="12">
        <span class="titleA">LV：</span>{{repData.lv}}
      </el-col>
      <el-col :span="12">
        <span class="titleA">LA：</span>{{repData.la}}
      </el-col>
      <el-col :span="12">
        <span class="titleA">RV：</span>{{repData.rv}}
      </el-col>
      <el-col :span="12">
        <span class="titleA">RA：</span>{{repData.ra}}
      </el-col>
      <el-col :span="12">
        <span class="titleA">EF：</span>{{repData.ef}}
      </el-col>
      <el-col :span="24" >
        <span class="titleC">生化指标</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">丙氨酸氨基转移酶：</span>{{repData.alt}} IU/L<span class="ckz">（参考值：<{{repData.alt_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">门冬氨酸氨基转移酶：</span>{{repData.ast}} IU/L<span class="ckz">（参考值：<{{repData.ast_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">总蛋白：</span>{{repData.tp}} g/L<span class="ckz">（参考值：{{repData.tp_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">白蛋白：</span>{{repData.alb}} g/L<span class="ckz">（参考值：{{repData.alb_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">葡萄糖：</span>{{repData.glucose}}mmol/L<span class="ckz">（参考值：{{repData.glucose_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿素：</span>{{repData.urea}}mmol/L<span class="ckz">（参考值：{{repData.urea_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酐：</span>{{repData.cre}}umol/L<span class="ckz">（参考值：{{repData.cre_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">估算肾小球滤过率：</span>{{repData.gfr}}ml/min/1.73m2<span class="ckz">（参考值：{{repData.gfr_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿酸：</span>{{repData.uric_acid}}umol/L<span class="ckz">（参考值：{{repData.uric_acid_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">甘油三脂：</span>{{repData.tg}}mmol/L<span class="ckz">（参考值：{{repData.tg_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">胆固醇：</span>{{repData.cholesterol}}mmol/L<span class="ckz">（参考值：{{repData.cholesterol_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">高密度脂蛋白：</span>{{repData.hdl}}mmol/L<span class="ckz">（参考值：> {{repData.hdl_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">低密度脂蛋白：</span>{{repData.ldl}}mmol/L<span class="ckz">（参考值：< {{repData.ldl_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">谷氨酰转肽酶：</span>{{repData.ygt}}IU/L<span class="ckz">（参考值：< {{repData.ygt_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酸激酶：</span>{{repData.ck}}IU/L<span class="ckz">（参考值：{{repData.ck_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">乳酸脱氢酶：</span>{{repData.ldh}}IU/L<span class="ckz">（参考值：{{repData.ldh_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">羟丁酸脱氢酶：</span>{{repData.hbdh}}IU/L<span class="ckz">（参考值：{{repData.hbdh_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">钠：</span>{{repData.na}}mmol/L<span class="ckz">（参考值：{{repData.na_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">钾：</span>{{repData.k}}mmol/L<span class="ckz">（参考值：{{repData.k_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">氯：</span>{{repData.cl}}mmol/L<span class="ckz">（参考值：{{repData.cl_values}}）</span>
      </el-col>
      <el-col :span="24" >
        <span class="titleC">血常规</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">红细胞计数：</span>{{repData.rbc}}10^12/L<span class="ckz">（参考值：{{repData.rbc_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血红蛋白：</span>{{repData.hgb}}g/L<span class="ckz">（参考值：{{repData.hgb_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血小板计数：</span>{{repData.platelet}}10^9/L<span class="ckz">（参考值：{{repData.platelet_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">白细胞计数：</span>{{repData.wbc}}10^10/L<span class="ckz">（参考值：{{repData.wbc_values}}）</span>
      </el-col>
      <el-col :span="24" >
        <span class="titleC">心肌标志物</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌红蛋白：</span>{{repData.myo}}ng/ml<span class="ckz">（参考值：< {{repData.myo_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌酸激酶同功酶MB质量：</span>{{repData.creatine_kinase_isoenzymes_mb}}ng/ml<span class="ckz">（参考值：< {{repData.creatine_kinase_isoenzymes_mb_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">尿钠素：</span>{{repData.pro_bnp}}pg/ml<span class="ckz">（参考值：{{repData.pro_bnp_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">肌钙蛋白-T：</span>{{repData.tn_t}}ng/ml<span class="ckz">（参考值：{{repData.tn_t_values}}）</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">大便隐血：</span>{{repData.stool_ob}}</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">血压：</span>{{repData.blood_pressure}}</span>
      </el-col>
      <el-col :span="24">
        <span class="titleA">心率：</span>{{repData.heart_rate}}</span>
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: 1rem">
        <span class="titleA">冠脉造影结果：</span>
        <div> {{repData.coronary_angiography_results}}</div>
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: 1rem; margin-top: .3rem">
        <span class="titleA">支架置入个数、部位：</span>
        <div> {{repData.support_count_position}}</div>
      </el-col>
      <el-col :span="24" style="background: #EFF2F7;padding: 1rem; margin-top: .3rem">
        <span class="titleA">其他意见</span>
        <div> {{repData.others}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getReportDetailByReportId, getCustomerCheckReportDetail} from '../interface';

  export default {
    name: 'report',
    created(){
      this.getInfo(this.$route.params.id);
    },
    data(){
      return{
        repData: {
          customer: '',
          check_time: '',
          diagnosis: '',
          lv: '',
          la: '',
          rv: '',
          ra: '',
          ef: '',
          alt: '',
          ast: '',
          tp: '',
          alb: '',
          glucose: '',
          urea: '',
          cre: '',
          gfr: '',
          uric_acid: '',
          tg: '',
          cholesterol: '',
          hdl: '',
          ldl: '',
          ygt: '',
          ck: '',
          ldh: '',
          hbdh: '',
          na: '',
          k: '',
          cl: '',
          rbc: '',
          hgb: '',
          platelet: '',
          wbc: '',
          myo: '',
          creatine_kinase_isoenzymes_mb: '',
          pro_bnp: '',
          tn_t: '',
          stool_ob: '',
          blood_pressure: '',
          heart_rate: '',
          coronary_angiography_results: '',
          support_count_position: '',
          others: '',
          alt_values: 50,
          ast_values: 40,
          tp_values: '65-85',
          alb_values: '40-55',
          glucose_values: '3.9-5.9',
          urea_values: '3.82-8.86',
          cre_values: '53-140',
          gfr_values: '56-122',
          uric_acid_values: '240-490',
          tg_values: '0.29-1.83',
          cholesterol_values: '2.8-5.7',
          hdl_values: 0.9,
          ldl_values: 4,
          ygt_values: 60,
          ck_values: '19-226',
          ldh_values: '110-220',
          hbdh_values: '72-182',
          na_values: '137-147',
          k_values: '3.5-5.3',
          cl_values: '99-110',
          rbc_values: '4.3-5.8',
          hgb_values: '130-175',
          platelet_values: '100-300',
          wbc_values: '3.9-9.5',
          myo_values: '72',
          creatine_kinase_isoenzymes_mb_values: '4.94',
          pro_bnp_values: '0-227',
          tn_t_values: '0-14',
        },
      };
    },
    methods:{
      getInfo(datID){
        this.$ajax({
          method: 'GET',
          url: getCustomerCheckReportDetail()  + '?check_report_id='+datID+'&customer_id=' + localStorage.getItem('customer_id'),
        }).then((res) => {
          Object.assign(this.repData, res.data.template, res.data.check_port);
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
    },
  };
</script>

<style scoped>
.titleA{
  color: #486B8A;
}
.titleC{
  font-weight: bold;
  color: #666;
  line-height: 4rem;
  font-size: 1.2rem;
}
.ckz{
  color: #13CE66;
}
.content{
}
</style>
