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
          <span class="titleA">丙氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v1_2"/> ）：</span><input :disabled="isShow" v-model="repData.alt"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">门冬氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v2_2"/>）：</span><input :disabled="isShow" v-model="repData.ast"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">总蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v3_2"/>）：</span><input :disabled="isShow" v-model="repData.v3"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v4_2"/>）：</span><input :disabled="isShow" v-model="repData.v4"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">葡萄糖（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v5_2"/>）：</span><input :disabled="isShow" v-model="repData.v5"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿素（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v6_2"/>）：</span><input :disabled="isShow" v-model="repData.v6"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酐（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v7_2"/>）：</span><input :disabled="isShow" v-model="repData.v7"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">估算肾小球滤过率（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v8_2"/>）：</span><input :disabled="isShow" v-model="repData.v8"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿酸（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v9_2"/>）：</span><input :disabled="isShow" v-model="repData.v9"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">甘油三脂（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v10_2"/>）：</span><input :disabled="isShow" v-model="repData.v10"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">胆固醇（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v11_2"/>）：</span><input :disabled="isShow" v-model="repData.v11"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">高密度脂蛋白（参考值：><input :disabled="isShow" class="ckz" v-model="repData.v12_2"/>）：</span><input :disabled="isShow" v-model="repData.v12"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">低密度脂蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v13_2"/>）：</span><input :disabled="isShow" v-model="repData.v13"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">谷氨酰转肽酶（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v14_2"/>）：</span><input :disabled="isShow" v-model="repData.v14"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v15_2"/>）：</span><input :disabled="isShow" v-model="repData.v15"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">乳酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v16_2"/>）：</span><input :disabled="isShow" v-model="repData.v16"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">羟丁酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v17_2"/>）：</span><input :disabled="isShow" v-model="repData.v17"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钠（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v18_2"/>）：</span><input :disabled="isShow" v-model="repData.v18"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钾（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v19_2"/>）：</span><input :disabled="isShow" v-model="repData.v19"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">氯（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v20_2"/>）：</span><input :disabled="isShow" v-model="repData.v20"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">血常规</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">红细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v21_2"/>）：</span><input :disabled="isShow" v-model="repData.v21"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血红蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v22_2"/>）：</span><input :disabled="isShow" v-model="repData.v22"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血小板计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v23_2"/>）：</span><input :disabled="isShow" v-model="repData.v23"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v24_2"/>）：</span><input :disabled="isShow" v-model="repData.v24"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">心肌标志物</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌红蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v25_2"/>）：</span><input :disabled="isShow" v-model="repData.v25"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶同功酶MB质量（参考值：<<input :disabled="isShow" class="ckz" v-model="repData.v26_2"/>）：</span><input :disabled="isShow" v-model="repData.v26"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿钠素（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v27_2"/>）：</span><input :disabled="isShow" v-model="repData.v27"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌钙蛋白-T（参考值：<input :disabled="isShow" class="ckz" v-model="repData.v28_2"/>）：</span><input :disabled="isShow" v-model="repData.v28"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">大便隐血：</span><input :disabled="isShow" v-model="repData.v29"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血压：</span><input :disabled="isShow" v-model="repData.v30"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">心率：</span><input :disabled="isShow" v-model="repData.v31"/>
        </el-col>
        <el-col :span="24">
          <div class="titleA">冠脉造影结果：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.v32"></textarea>
        </el-col>
        <el-col :span="24">
          <div class="titleA">支架置入个数、部位：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.v33"></textarea>
        </el-col>
        <el-col :span="24">
          <div class="titleA">其他</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="repData.v34"></textarea>
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
          date: '',
          diagnosis: '',
          lv: '',
          la: '',
          rv: '',
          ra: '',
          ef: '',
          alt: '',
          v2: '',
          v3: '',
          v4: '',
          v5: '',
          v6: '',
          v7: '',
          v8: '',
          v9: '',
          v10: '',
          v11: '',
          v12: '',
          v13: '',
          v14: '',
          v15: '',
          v16: '',
          v17: '',
          v18: '',
          v19: '',
          v20: '',
          v21: '',
          v22: '',
          v23: '',
          v24: '',
          v25: '',
          v26: '',
          v27: '',
          v28: '',
          v29: '',
          v30: '',
          v31: '',
          v32: '',
          v33: '',
          v34: '',
          v1_2: 50,
          v2_2: 40,
          v3_2: '65-85',
          v4_2: '40-55',
          v5_2: '3.9-5.9',
          v6_2: '3.82-8.86',
          v7_2: '53-140',
          v8_2: '56-122',
          v9_2: '240-490',
          v10_2: '0.29-1.83',
          v11_2: '2.8-5.7',
          v12_2: 0.9,
          v13_2: 4,
          v14_2: 60,
          v15_2: '19-226',
          v16_2: '110-220',
          v17_2: '72-182',
          v18_2: '137-147',
          v19_2: '3.5-5.3',
          v20_2: '99-110',
          v21_2: '4.3-5.8',
          v22_2: '130-175',
          v23_2: '100-300',
          v24_2: '3.9-9.5',
          v25_2: 72,
          v26_2: 4.94,
          v27_2: '0-227',
          v28_2: '0-14',
        },
      };
    },
    methods: {
      dateChange(date) {
        this.date = date;
      },
      inpure(data) {
        if(typeof data.preventDefault == 'function') { //新建
          this.isShow = false;
        }
        if(typeof data.preventDefault == 'undefined') { //查看
          this.isShow = true;
          this.getInfo(data.id);
        }
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
          this.repData = {a:1, b:2, c:3}
          this.repData = res.data.check_port;
          console.log(this.repData)
//          this.repData = res.data.check_port;
//          console.log(this.repData)
//          res.data.template;
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
          tp: this.repData.v3,
          alb: this.repData.v4,
          glucose: this.repData.v5,
          urea: this.repData.v6,
          cre: this.repData.v7,
          gfr: this.repData.v8,
          uric_acid: this.repData.v9,
          tg: this.repData.v10,
          cholesterol: this.repData.v11,
          hdl: this.repData.v12,
          ldl: this.repData.v13,
          ygt: this.repData.v14,
          ck: this.repData.v15,
          ldh: this.repData.v16,
          hbdh: this.repData.v17,
          na: this.repData.v18,
          k: this.repData.v19,
          cl: this.repData.v20,
          rbc: this.repData.v21,
          hgb: this.repData.v22,
          platelet: this.repData.v23,
          wbc: this.repData.v24,
          myo: this.repData.v25,
          creatine_kinase_isoenzymes_mb: this.repData.v26,
          pro_bnp: this.repData.v27,
          tn_t: this.repData.v28,
          stool_ob: this.repData.v29,
          heart_rate: this.repData.v31,
          blood_pressure: this.repData.v30,
          coronary_angiography_results:this.repData.v32,
          support_count_position: this.repData.v33,
          others: this.repData.v34,
          check_time: this.repData.date,
          customerCheckReportTemplateJson: {
            ef_values: this.repData.v1_2,
            alt_values: this.repData.v1_2,
            ast_values: this.repData.v2_2,
            tp_values: this.repData.v3_2,
            alb_values: this.repData.v4_2,
            glucose_values: this.repData.v5_2,
            urea_values: this.repData.v6_2,
            cre_values: this.repData.v7_2,
            gfr_values: this.repData.v8_2,
            uric_acid_values: this.repData.v9_2,
            tg_values: this.repData.v10_2,
            cholesterol_values: this.repData.v11_2,
            hdl_values: this.repData.v12_2,
            ldl_values: this.repData.v13_2,
            ygt_values: this.repData.v14_2,
            ck_values: this.repData.v15_2,
            ldh_values: this.repData.v16_2,
            hbdh_values: this.repData.v17_2,
            na_values: this.repData.v18_2,
            k_values: this.repData.v19_2,
            cl_values: this.repData.v20_2,
            rbc_values: this.repData.v21_2,
            hgb_values: this.repData.v22_2,
            platelet_values: this.repData.v23_2,
            wbc_values: this.repData.v24_2,
            myo_values: this.repData.v25_2,
            creatine_kinase_isoenzymes_mb_values: this.repData.v26_2,
            pro_bnp_values: this.repData.v27_2,
            tn_t_values: this.repData.v28_2,
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
        this.date='';
        this.diagnosis='';
        this.lv='';
        this.la='';
        this.rv='';
        this.ra='';
        this.ef='';
        this.v1='';
        this.v2='';
        this.v3='';
        this.v4='';
        this.v5='';
        this.v6='';
        this.v7='';
        this.v8='';
        this.v9='';
        this.v10='';
        this.v11='';
        this.v12='';
        this.v13='';
        this.v14='';
        this.v15='';
        this.v16='';
        this.v17='';
        this.v18='';
        this.v19='';
        this.v20='';
        this.v21='';
        this.v22='';
        this.v23='';
        this.v24='';
        this.v25='';
        this.v26='';
        this.v27='';
        this.v28='';
        this.v29='';
        this.v30='';
        this.v31='';
        this.v32='';
        this.v33='';
        this.v34='';
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
