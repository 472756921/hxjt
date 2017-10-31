<template>
  <div>
    <el-button type="primary" size="small" @click="inpure">录入检测报告</el-button>

    <el-dialog title="生理指标" class="mod" :visible.sync="dialogVisible">
      <el-row style="line-height: 1.8rem;color:#8492A6">
        <el-col :span="12">
          <span>登记号：</span><input v-model="rNumber" :disabled="isShow"/>
        </el-col>
        <el-col :span="24">
          <span class="titleA">首次病程记录/诊断意见：</span>
          <div> <textarea cols="100" style="resize: none" :maxlength="300" rows="3" v-model="ryj" :disabled="isShow"></textarea></div>
        </el-col>
        <el-col :span="24">
          <span class="titleC">心脏彩超</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LV：</span><input v-model="rlv" :disabled="isShow"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LA：</span></span><input :disabled="isShow" v-model="rla"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RV：</span></span><input :disabled="isShow" v-model="rrv"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RA：</span></span><input :disabled="isShow" v-model="rra"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">EF：</span></span><input :disabled="isShow" v-model="ref"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">生化指标</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">丙氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="v1_2"/> ）：</span><input :disabled="isShow" v-model="v1"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">门冬氨酸氨基转移酶（参考值：<<input :disabled="isShow" class="ckz" v-model="v2_2"/>）：</span><input :disabled="isShow" v-model="v2"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">总蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="v3_2"/>）：</span><input :disabled="isShow" v-model="v3"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="v4_2"/>）：</span><input :disabled="isShow" v-model="v4"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">葡萄糖（参考值：<input :disabled="isShow" class="ckz" v-model="v5_2"/>）：</span><input :disabled="isShow" v-model="v5"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿素（参考值：<input :disabled="isShow" class="ckz" v-model="v6_2"/>）：</span><input :disabled="isShow" v-model="v6"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酐（参考值：<input :disabled="isShow" class="ckz" v-model="v7_2"/>）：</span><input :disabled="isShow" v-model="v7"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">估算肾小球滤过率（参考值：<input :disabled="isShow" class="ckz" v-model="v8_2"/>）：</span><input :disabled="isShow" v-model="v8"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿酸（参考值：<input :disabled="isShow" class="ckz" v-model="v9_2"/>）：</span><input :disabled="isShow" v-model="v9"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">甘油三脂（参考值：<input :disabled="isShow" class="ckz" v-model="v10_2"/>）：</span><input :disabled="isShow" v-model="v10"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">胆固醇（参考值：<input :disabled="isShow" class="ckz" v-model="v11_2"/>）：</span><input :disabled="isShow" v-model="v11"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">高密度脂蛋白（参考值：><input :disabled="isShow" class="ckz" v-model="v12_2"/>）：</span><input :disabled="isShow" v-model="v12"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">低密度脂蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="v13_2"/>）：</span><input :disabled="isShow" v-model="v13"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">谷氨酰转肽酶（参考值：<<input :disabled="isShow" class="ckz" v-model="v14_2"/>）：</span><input :disabled="isShow" v-model="v14"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶（参考值：<input :disabled="isShow" class="ckz" v-model="v15_2"/>）：</span><input :disabled="isShow" v-model="v15"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">乳酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="v16_2"/>）：</span><input :disabled="isShow" v-model="v16"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">羟丁酸脱氢酶（参考值：<input :disabled="isShow" class="ckz" v-model="v17_2"/>）：</span><input :disabled="isShow" v-model="v17"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钠（参考值：<input :disabled="isShow" class="ckz" v-model="v18_2"/>）：</span><input :disabled="isShow" v-model="v18"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钾（参考值：<input :disabled="isShow" class="ckz" v-model="v19_2"/>）：</span><input :disabled="isShow" v-model="v19"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">氯（参考值：<input :disabled="isShow" class="ckz" v-model="v20_2"/>）：</span><input :disabled="isShow" v-model="v20"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">血常规</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">红细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="v21_2"/>）：</span><input :disabled="isShow" v-model="v21"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血红蛋白（参考值：<input :disabled="isShow" class="ckz" v-model="v22_2"/>）：</span><input :disabled="isShow" v-model="v22"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血小板计数（参考值：<input :disabled="isShow" class="ckz" v-model="v23_2"/>）：</span><input :disabled="isShow" v-model="v23"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白细胞计数（参考值：<input :disabled="isShow" class="ckz" v-model="v24_2"/>）：</span><input :disabled="isShow" v-model="v24"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">心肌标志物</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌红蛋白（参考值：<<input :disabled="isShow" class="ckz" v-model="v25_2"/>）：</span><input :disabled="isShow" v-model="v25"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶同功酶MB质量（参考值：<<input :disabled="isShow" class="ckz" v-model="v26_2"/>）：</span><input :disabled="isShow" v-model="v26"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿钠素（参考值：<input :disabled="isShow" class="ckz" v-model="v27_2"/>）：</span><input :disabled="isShow" v-model="v27"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌钙蛋白-T（参考值：<input :disabled="isShow" class="ckz" v-model="v28_2"/>）：</span><input :disabled="isShow" v-model="v28"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">大便隐血：</span><input :disabled="isShow" v-model="v28"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血压：</span><input :disabled="isShow" v-model="v29"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">心率：</span><input :disabled="isShow" v-model="v30"/>
        </el-col>
        <el-col :span="24">
          <div class="titleA">冠脉造影结果：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3"></textarea>
        </el-col>
        <el-col :span="24">
          <div class="titleA">支架置入个数、部位：</div>
          <textarea :disabled="isShow" cols="100" style="resize: none" :maxlength="300" rows="3" v-model="v32"></textarea>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'report',
    data() {
      return {
        ryj: '',
        rNumber: '',
        rlv: '',
        rla: '',
        rrv: '',
        rra: '',
        ref: '',
        v1: '',
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
        v29_2: '',
        v30_2: '',
        v31_2: '',
        v32_2: '',
        dialogVisible: false,
        isShow: false,
      };
    },
    methods: {
      inpure(data) {
        if(typeof data.preventDefault == 'function') { //新建
          this.isShow = false;
        }
        if(typeof data.preventDefault == 'undefined') { //查看
          this.isShow = true;
        }
        this.dialogVisible = true;
      },
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
