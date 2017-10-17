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
    <br/>
    <el-button type="primary" size="small" @click="inpure">录入检测报告</el-button>
    <br/>
    <el-row>
      <el-col :span="12">
        <h4>生理监控</h4>
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="date" label="测量时间"></el-table-column>
          <el-table-column prop="xy" label="血压" ></el-table-column>
          <el-table-column prop="xt" label="血糖" ></el-table-column>
          <el-table-column prop="xl" label="心率" ></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <h4>检测报告</h4>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="date" label="生成时间"></el-table-column>
          <el-table-column prop="number" label="登记号"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="生理指标" :visible.sync="dialogVisible">
      <el-row style="line-height: 1.8rem;color:#8492A6">
        <el-col :span="12">
          <span class="titleA">登记号：</span><input v-model="rNumber"/>
        </el-col>
        <el-col :span="24">
          <span class="titleA">首次病程记录/诊断意见：</span>
          <div> <textarea cols="100" style="resize: none" :maxlength="300" rows="3"></textarea></div>
        </el-col>
        <el-col :span="24">
          <span class="titleC">心脏彩超</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LV：</span><input v-model="rlv"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">LA：</span></span><input v-model="rla"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RV：</span></span><input v-model="rrv"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">RA：</span></span><input v-model="rra"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">EF：</span></span><input v-model="ref"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">生化指标</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">丙氨酸氨基转移酶（参考值：<50）：</span><input v-model="v1"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">门冬氨酸氨基转移酶（参考值：<40）：</span><input v-model="v2"/>
        </el-col>
        <el-col :span="24">
          <span class="titleA">总蛋白（参考值：65-85）：</span>12 g/L<span class="ckz"></span>
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


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
        dialogVisible: false,
        tableData1: [
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', xy: '85/120', xt: '223', xl: 86 },
        ],
        tableData2: [
          {date: '2012-12-12', number: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', number: '85/120', xt: '223', xl: 86 },
          {date: '2012-12-12', number: '85/120', xt: '223', xl: 86 },
        ],
      };
    },
    methods: {
      inpure() {
        this.dialogVisible = true;
      }
    },
  };
</script>

<style scoped>
  .titleA{
    font-weight: bold;
    color: #8492A6;
  }
  .titleC{
    font-weight: bold;
    color: #1D8CE0;
    line-height: 2rem;
    font-size: .95rem;
    border-bottom: 1px solid #1D8CE0;
  }
</style>
