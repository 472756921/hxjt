<template>
  <div class="content">
    <h3>生理指标<i class="iconfont icon-add" style="float:right;color: #1D8CE0;" @click="dialogVisible = true"></i></h3>
    <div style="line-height: 1.4rem;padding: 0.4rem">
      名字：{{user.real_name}} &nbsp;&nbsp;
      生日：{{user.birthday}} &nbsp;&nbsp;
      性别：{{user.gender==0?'女':'男'}}
    </div>
    <el-row class="card" v-for="(o, index) in data" key="index">
      <el-col :span="12"><div>日期：{{o.creation_date}}</div></el-col>
      <el-col :span="12"><div>月龄：{{o.month}}</div></el-col>
      <el-col :span="12"> <div>体重：{{o.weight}} KG</div></el-col>
      <el-col :span="12"><div>体温：{{o.body_temperature}} ℃</div></el-col>
      <el-col :span="12"><div>心率：{{o.xl}} 次/min</div></el-col>
      <el-col :span="12"><div>坐高：{{o.zg}} CM</div></el-col>
      <el-col :span="24"><div>奶量：{{o.milk}} ML</div></el-col>
    </el-row>
    <el-dialog
      title="录入今日指标"
      :visible.sync="dialogVisible"
      size="large"
      :before-close="handleClose">
      <el-input  v-model="weight" maxlength=2 placeholder="KG">
        <template slot="prepend">体重</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="temperature" maxlength=4  placeholder="℃">
        <template slot="prepend">体温</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="volume" maxlength=4 placeholder="ML">
        <template slot="prepend">奶量</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="xl" maxlength=4 placeholder="次/min">
        <template slot="prepend">心率</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="zg" maxlength=4 placeholder="CM">
        <template slot="prepend">坐高</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import { saveChildRecord, selectChildRecord } from '../interface';

  export default {
    name: 'physiological',
    data() {
      return {
        dialogVisible: false,
        weight: '',
        temperature: '',
        volume: '',
        user: '',
        xl: '',
        zg: '',
        data: [],
      };
    },
    created() {
      const par = this.$route.params;
      if('item' in par) {
        this.user = par.item;
        this.getData(1);
      }
    },
    methods: {
      getData(page) {
        this.$ajax({
          method: 'GET',
          url: selectChildRecord() + '?child_id=' + this.user.id + '&page=' + page,
        }).then((res) => {
          this.data = res.data.ChildRecords;
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
      },
      handleClose(done) {
        done();
        this.weight = '' ;
        this.temperature = '' ;
        this.volume = '';
      },
      sure() {
        const date = new Date();
        if (this.weight !== '' && this.temperature !== '' && this.volume !== '') {
          let dateF = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +date.getDate()

          const data = {age: this.data[0].age, weight: this.weight, temperature: this.temperature, volume: this.volume, date:dateF};
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: saveChildRecord(),
          }).then((res) => {
            if(res.data === 1) {
              this.$message.success('添加成功！');
              this.data = [data,...this.data];
            }
          }).catch((error) => {
            this.$message.error('网络异常请稍候');
          });
          this.dialogVisible = false;
          this.weight = '' ;
          this.temperature = '' ;
          this.volume = '';
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
