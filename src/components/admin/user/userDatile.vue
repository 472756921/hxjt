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
          <el-table-column prop="create_date" label="测量时间"></el-table-column>
          <el-table-column prop="blood_pressure" label="血压" ></el-table-column>
          <el-table-column prop="blood_sugar" label="血糖" ></el-table-column>
          <el-table-column prop="heart_rate" label="心率" ></el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle"  @current-change="changPage1"></el-pagination>
      </el-col>
      <el-col :span="12">
        <h4>检测报告</h4>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="date" label="生成时间"></el-table-column>
          <el-table-column prop="number" label="登记号"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click.native.prevent="sure(scope.$index)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow2" :page-count="pageTotle2"  @current-change="changPage2"></el-pagination>
      </el-col>
    </el-row>
    <el-dialog title="生理指标" :visible.sync="dialogVisible">
      <el-row style="line-height: 1.8rem;color:#8492A6">
        <el-col :span="12">
          <span class="titleA">登记号：</span><input v-model="rNumber"/>
        </el-col>
        <el-col :span="24">
          <span class="titleA">首次病程记录/诊断意见：</span>
          <div> <textarea cols="100" style="resize: none" :maxlength="300" rows="3" v-model="ryj"></textarea></div>
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
        <el-col :span="12">
          <span class="titleA">总蛋白（参考值：65-85）：</span><input v-model="v3"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白蛋白（参考值：40-55）：</span><input v-model="v4"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">葡萄糖（参考值：3.9-5.9）：</span><input v-model="v5"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿素（参考值：3.82-8.86）：</span><input v-model="v6"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酐（参考值：53-140）：</span><input v-model="v7"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">估算肾小球滤过率（参考值：56-122）：</span><input v-model="v8"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿酸（参考值：240-490）：</span><input v-model="v9"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">甘油三脂（参考值：0.29-1.83）：</span><input v-model="v10"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">胆固醇（参考值：2.8-5.7）：</span><input v-model="v11"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">高密度脂蛋白（参考值：>0.9）：</span><input v-model="v12"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">低密度脂蛋白（参考值：<4）：</span><input v-model="v13"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">谷氨酰转肽酶（参考值：<60）：</span><input v-model="v14"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶（参考值：19-226）：</span><input v-model="v15"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">乳酸脱氢酶（参考值：110-220）：</span><input v-model="v16"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">羟丁酸脱氢酶（参考值：72-182）：</span><input v-model="v17"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钠（参考值：137-147）：</span><input v-model="v18"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">钾（参考值：3.5-5.3）：</span><input v-model="v19"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">氯（参考值：99-110）：</span><input v-model="v20"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">血常规</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">红细胞计数（参考值：4.3-5.8）：</span><input v-model="v21"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血红蛋白（参考值：130-175）：</span><input v-model="v22"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血小板计数（参考值：100-300）：</span><input v-model="v23"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">白细胞计数（参考值：3.9-9.5）：</span><input v-model="v24"/>
        </el-col>
        <el-col :span="24" >
          <span class="titleC">心肌标志物</span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌红蛋白（参考值：<72）：</span><input v-model="v25"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌酸激酶同功酶MB质量（参考值：<4.94）：</span><input v-model="v26"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">尿钠素（参考值：0-227）：</span><input v-model="v27"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">肌钙蛋白-T（参考值：0-14）：</span><input v-model="v28"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">大便隐血：<input v-model="v28"/></span>
        </el-col>
        <el-col :span="12">
          <span class="titleA">血压：</span><input v-model="v29"/>
        </el-col>
        <el-col :span="12">
          <span class="titleA">心率：</span><input v-model="v30"/>
        </el-col>
        <el-col :span="24">
          <span class="titleA">冠脉造影结果：</span>
          <textarea cols="100" style="resize: none" :maxlength="300" rows="3"></textarea>
        </el-col>
        <el-col :span="24">
          <span class="titleA">支架置入个数、部位：</span>
          <textarea cols="100" style="resize: none" :maxlength="300" rows="3" v-model="v32"></textarea>
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
  import {getslzb, getCheckReportsByCustomer} from '../../interface';

  export default {
    name: 'userDatile',
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
        this.dialogVisible = true;
      },
      inpure() {
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
          url: getCheckReportsByCustomer() + '?customer_id='+uid+'&page=' + page,
        }).then((res) => {
          this.tableData2 = res.data.reports;
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
    color: #8492A6;
  }
  .titleC{
    font-weight: bold;
    color: #1D8CE0;
    line-height: 2rem;
    font-size: .95rem;
    border-bottom: 1px solid #1D8CE0;
  }
  input{
    width: 100px;
  }
</style>
