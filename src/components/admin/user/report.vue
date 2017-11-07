<template>
  <div>
    <el-button type="primary" size="small" @click="inpure">录入检测报告</el-button>

    <el-dialog title="生理指标" class="mod" :visible.sync="dialogVisible">
      检测时间：<el-date-picker v-model="changeDateValue" type="datetime" placeholder="选择日期" size="small" @change="dateChange"></el-date-picker>
      <el-row style="line-height: 1.8rem;color:#8492A6">
        <el-col :span="24">
          <span class="titleA">首次病程记录/诊断意见：</span>
          <div> <textarea cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.diagnosis" :disabled="isShow"></textarea></div>
        </el-col>
        <el-col :span="24">
          <span class="titleC">心脏彩超</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LV：</span><input v-model="repData.lv" :disabled="isShow"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LA：</span></span><input :disabled="isShow" v-model="repData.la"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RV：</span></span><input :disabled="isShow" v-model="repData.rv"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RA：</span></span><input :disabled="isShow" v-model="repData.ra"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">EF：</span></span><input :disabled="isShow" v-model="repData.ef"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">生化指标</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">丙氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.alt_values"/> ）：</span><input :disabled="isShow" v-model="repData.alt"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">门冬氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.ast_values"/>）：</span><input :disabled="isShow" v-model="repData.ast"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">总蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.tp_values"/>）：</span><input :disabled="isShow" v-model="repData.tp"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.alb_values"/>）：</span><input :disabled="isShow" v-model="repData.alb"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">葡萄糖（参考值：<input :disabled="isShow" class="ckz" v-model="repData.glucose"/>）：</span><input :disabled="isShow" v-model="repData.glucose_values"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿素（参考值：<input :disabled="isShow" class="ckz" v-model="repData.urea_values"/>）：</span><input :disabled="isShow" v-model="repData.urea"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酐（参考值：<input :disabled="isShow" class="ckz" v-model="repData.cre_values"/>）：</span><input :disabled="isShow" v-model="repData.cre"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">估算肾小球滤过率（参考值：<input :disabled="isShow" class="ckz" v-model="repData.gfr_values"/>）：</span><input :disabled="isShow" v-model="repData.gfr"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿酸（参考值：<input :disabled="isShow" class="ckz" v-model="repData.uric_acid_values"/>）：</span><input :disabled="isShow" v-model="repData.uric_acid"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">甘油三脂（参考值：<input :disabled="isShow" class="ckz" v-model="repData.tg_values"/>）：</span><input :disabled="isShow" v-model="repData.tg"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">胆固醇（参考值：<input :disabled="isShow" class="ckz" v-model="repData.cholesterol_values"/>）：</span><input :disabled="isShow" v-model="repData.cholesterol"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">高密度脂蛋白（参考值：><input :disabled="isShow" class="ckz" v-model="repData.hdl_values"/>）：</span><input :disabled="isShow" v-model="repData.hdl"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">低密度脂蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.ldl_values"/>）：</span><input :disabled="isShow" v-model="repData.ldl"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">谷氨酰转肽酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.ygt_values"/>）：</span><input :disabled="isShow" v-model="repData.ygt"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.ck_values"/>）：</span><input :disabled="isShow" v-model="repData.ck"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">乳酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.ldh_values"/>）：</span><input :disabled="isShow" v-model="repData.ldh"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">羟丁酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.hbdh_values"/>）：</span><input :disabled="isShow" v-model="repData.hbdh"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钠（参考值：<input :disabled="isShow" class="ckz" v-model="repData.na_values"/>）：</span><input :disabled="isShow" v-model="repData.na"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钾（参考值：<input :disabled="isShow" class="ckz" v-model="repData.k_values"/>）：</span><input :disabled="isShow" v-model="repData.k"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">氯（参考值：<input :disabled="isShow" class="ckz" v-model="repData.cl_values"/>）：</span><input :disabled="isShow" v-model="repData.cl"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">血常规</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">红细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.rbc_values"/>）：</span><input :disabled="isShow" v-model="repData.rbc"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血红蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.hgb_values"/>）：</span><input :disabled="isShow" v-model="repData.hgb"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血小板计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.platelet_values"/>）：</span><input :disabled="isShow" v-model="repData.platelet"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.wbc_values"/>）：</span><input :disabled="isShow" v-model="repData.wbc"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">心肌标志物</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌红蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.myo_values"/>）：</span><input :disabled="isShow" v-model="repData.myo"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶同功酶MB质量（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.creatine_kinase_isoenzymes_mb_values"/>）：</span><input :disabled="isShow" v-model="repData.creatine_kinase_isoenzymes_mb"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿钠素（参考值：<input :disabled="isShow" class="ckz" v-model="repData.pro_bnp_values"/>）：</span><input :disabled="isShow" v-model="repData.pro_bnp"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌钙蛋白-T（参考值：<input :disabled="isShow" class="ckz" v-model="repData.tn_t_values"/>）：</span><input :disabled="isShow" v-model="repData.tn_t"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">大便隐血：</span><input :disabled="isShow" v-model="repData.stool_ob"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血压：</span><input :disabled="isShow" v-model="repData.blood_pressure"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">心率：</span><input :disabled="isShow" v-model="repData.heart_rate"/>
        </el-col>
        <el-col :span="24">
          <div class="titleA">冠脉造影结果：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.coronary_angiography_results"></textarea>
        </el-col>
        <el-col :span="24">
          <div class="titleA">支架置入个数、部位：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.support_count_position"></textarea>
        </el-col>
        <el-col :span="24">
          <div class="titleA">其他</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.others"></textarea>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="push">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {saveCheckReport, getCustomerCheckReportDetail} from '../../interface';

  export default {
    name: 'report',
    props: {
      userID: Number,
      userID2: Number,
    },
    data() {
      return {
        changeDateValue: '',
        dialogVisible: false,
        isShow: false,
        repData: {
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
    methods: {
      dateChange(date) {
        this.check_time = date;
      },
      inpure(data) {
        if(typeof data.preventDefault == 'function') { //新建
          this.isShow = false;
        }
        if(typeof data.preventDefault == 'undefined') { //查看
          this.isShow = true;
          this.getInfo(data.id);
        }
        this.clear();
        this.dialogVisible = true;
      },
      getInfo(id){
        let customer_id;
        if(this.userID == undefined){
          customer_id = this.userID2;
        }
        if(this.userID2 == undefined){
          customer_id = this.userID;
        }
        this.$ajax({
          method: 'GET',
          url: getCustomerCheckReportDetail() + '?check_report_id='+id+'&customer_id=' + customer_id,
        }).then((res) => {
          Object.assign(this.repData, res.data.template, res.data.check_port);
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
      push(){
        if(this.isShow){
          this.dialogVisible = false;
          return
        }
        let id;
        if(this.userID == undefined){
          id = this.userID2;
        }
        if(this.userID2 == undefined){
          id = this.userID;
        }
        const data = {
          customer_id:  id,
          diagnosis: this.repData.diagnosis,
          lv: this.repData.lv,
          la: this.repData.la,
          rv: this.repData.rv,
          ra: this.repData.ra,
          ef: this.repData.ef,
          alt: this.repData.alt,
          ast: this.repData.ast,
          tp: this.repData.tp,
          alb: this.repData.alb,
          glucose: this.repData.glucose_values,
          urea: this.repData.urea,
          cre: this.repData.cre,
          gfr: this.repData.gfr,
          uric_acid: this.repData.uric_acid,
          tg: this.repData.tg,
          cholesterol: this.repData.cholesterol,
          hdl: this.repData.hdl,
          ldl: this.repData.ldl,
          ygt: this.repData.ygt,
          ck: this.repData.ck,
          ldh: this.repData.ldh,
          hbdh: this.repData.hbdh,
          na: this.repData.na,
          k: this.repData.k,
          cl: this.repData.cl,
          rbc: this.repData.rbc,
          hgb: this.repData.hgb,
          platelet: this.repData.platelet,
          wbc: this.repData.wbc,
          myo: this.repData.myo,
          creatine_kinase_isoenzymes_mb: this.repData.creatine_kinase_isoenzymes_mb,
          pro_bnp: this.repData.pro_bnp,
          tn_t: this.repData.tn_t,
          stool_ob: this.repData.stool_ob,
          heart_rate: this.repData.heart_rate,
          blood_pressure: this.repData.blood_pressure,
          coronary_angiography_results:this.repData.coronary_angiography_results,
          support_count_position: this.repData.support_count_position,
          others: this.repData.others,
          check_time: this.repData.check_time,
          customerCheckReportTemplateJson: {
            alt_values: this.repData.alt_values,
            ast_values: this.repData.ast_values,
            tp_values: this.repData.tp_values,
            alb_values: this.repData.alb_values,
            glucose_values: this.repData.glucose_values,
            urea_values: this.repData.urea_values,
            cre_values: this.repData.cre_values,
            gfr_values: this.repData.gfr_values,
            uric_acid_values: this.repData.uric_acid_values,
            tg_values: this.repData.tg_values,
            cholesterol_values: this.repData.cholesterol_values,
            hdl_values: this.repData.hdl_values,
            ldl_values: this.repData.ldl_values,
            ygt_values: this.repData.ygt_values,
            ck_values: this.repData.ck_values,
            ldh_values: this.repData.ldh_values,
            hbdh_values: this.repData.hbdh_values,
            na_values: this.repData.na_values,
            k_values: this.repData.k_values,
            cl_values: this.repData.cl_values,
            rbc_values: this.repData.rbc_values,
            hgb_values: this.repData.hgb_values,
            platelet_values: this.repData.platelet_values,
            wbc_values: this.repData.wbc_values,
            myo_values: this.repData.myo_values,
            creatine_kinase_isoenzymes_mb_values: this.repData.creatine_kinase_isoenzymes_mb_values,
            pro_bnp_values: this.repData.pro_bnp_values,
            tn_t_values: this.repData.tn_t_values,
          },
        };
        this.$ajax({
          method: 'POST',
          data: data,
          url: saveCheckReport(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('提交成功');
            this.dialogVisible = false;
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
        this.clear();
      },
      clear(){
        this.repData.check_time='';
        this.repData.diagnosis='';
        this.repData.lv='';
        this.repData.la='';
        this.repData.rv='';
        this.repData.ra='';
        this.repData.ef='';
        this.repData.alt='';
        this.repData.ast='';
        this.repData.v3='';
        this.repData.alb='';
        this.repData.glucose_values='';
        this.repData.urea='';
        this.repData.cre='';
        this.repData.gfr='';
        this.repData.uric_acid='';
        this.repData.tg='';
        this.repData.cholesterol='';
        this.repData.hdl='';
        this.repData.ldl='';
        this.repData.ygt='';
        this.repData.ck='';
        this.repData.ldh='';
        this.repData.hbdh='';
        this.repData.na='';
        this.repData.k='';
        this.repData.cl='';
        this.repData.rbc='';
        this.repData.hgb='';
        this.repData.platelet='';
        this.repData.wbc='';
        this.repData.myo='';
        this.repData.creatine_kinase_isoenzymes_mb='';
        this.repData.pro_bnp='';
        this.repData.tn_t='';
        this.repData.stool_ob='';
        this.repData.blood_pressure='';
        this.repData.heart_rate='';
        this.repData.coronary_angiography_results='';
        this.repData.support_count_position='';
        this.repData.others='';
      }
    },
  };
</script>

<style scoped>

  .titleA{
    font-weight: bold;
    color: #8492A6;
    width:400px!important;
    display: block;
  }
  .titleC{
    font-weight: bold;
    color: #1D8CE0;
    line-height: 2rem;
    font-size: .95rem;
  }
  input{
    width: 100px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #1D8CE0;
  }
  textarea{
    border: 1px solid #ddd;
  }
  .ckz{
    width: 60px;
  }
</style>
