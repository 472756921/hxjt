<template>
  <div class="content">
    <h3>关联人</h3>
    <el-input  v-model="name">
      <template slot="prepend">姓名</template>
    </el-input>
    <br/>
    <br/>
    <el-input  v-model="address">
      <template slot="prepend">住址</template>
    </el-input>
    <br/>
    <br/>
    <div class="el-input-group__prepend birtitle">生日</div>
    <el-date-picker
      class="birValue"
      v-model="brith"
      type="date"
      :disabled="type=='add'?false:true"
      placeholder="选择日期"
      @change="dateChange"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <br/>
    <br/>
    <span>性别：</span>
    <el-radio class="radio" v-model="sex" label=1>男</el-radio>
    <el-radio class="radio" v-model="sex" label=0>女</el-radio>
    <br/>
    <br/>
    <el-button type="success" @click="save">保存</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { saveAffiliate, updateChild } from '../interface';

  export default {
    name: 'newContact',
    data() {
      return {
        type: 'add',
        name: '',
        sex: '',
        address: '',
        cid: '',
        brith: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e7;
          }
        },
      };
    },
    created() {
      const par = this.$route.params;
      if ('obj' in par) {
        this.type = 'edit';
        this.name = par.obj.real_name;
        this.address = par.obj.address;
        this.sex = par.obj.gender.toString();
        this.brith = par.obj.birthday;
        this.cid = par.obj.id;
      }
    },
    methods: {
      dateChange(date) {
        this.brith = date;
      },
      save() {
        if (this.name === '' || this.sex === '' ||　this.address === '' || this.brith === '') {
          this.$message.error('请输入关联联系人信息');
          return;
        }
        const data = {
          real_name: this.name,
          birthday: this.brith,
          gender: this.sex,
          address: this.address,
          child_id: this.cid,
        };
        if (this.type === 'edit') {
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: updateChild(),
          }).then((res) => {
            if(res.data === 1) {
              this.$message.success('修改成功！');
            }
          }).catch((error) => {
            this.$message.error(error.message);
          });
        } else if (this.type === 'add') {
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: saveAffiliate(),
          }).then((res) => {
            if(res.data === 1) {
              this.$message.success('添加成功！');
            }
          }).catch((error) => {
            this.$message.error(error.message);
          });
        }
      }
    }
  };
</script>

<style scoped>
  .el-input{
    width: 15rem;
  }
  .birtitle{
    float: left;
    width: 2rem;
    padding: 7.5px;
    border-right: 1px solid #bfcbd9;
    z-index: 999;
  }
  .birValue{
    width: 12rem;
    margin-left: -3px;
  }
</style>
