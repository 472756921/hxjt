<template>
  <div class="content">
    <div>账号：<input type="text" v-model="account"></div>
    <br v-if="!edit"/>
    <div v-if="!edit">密码：<input type="password" v-model="pwd"></div>
    <br v-if="!edit"/>
    <div v-if="!edit">重复：<input type="password" v-model="pwda"></div>
    <br/>
    <div>角色：
      <el-radio class="radio" v-model="radio" label="1">超级管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="2">管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="3">客服</el-radio>
    </div>
    <br/>
    <el-button  v-if="!edit" type="success" size="small" @click="add">添加</el-button>
    <el-button  v-if="edit" type="success" size="small" @click="chang">修改</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { createAdmin, updateAdmin } from '../../interface';

  export default {
    name: 'addAdmin',
    methods: {
      add(){
        if (this.edit){
          return;
        }
        if (this.account === '' || this.pwd === '' || this.pwda === ''){
          this.$message.error('请输入必要信息');
          return;
        }
        if (this.pwd !== this.pwda){
          this.$message.error('两次输入的密码不一致');
          return;
        }
        const data = {
          account: this.account,
          pass_word: this.pwd,
          admin_type: 1,
        };
        this.$ajax({
          method: 'post',
          url: createAdmin(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.cover = false;
          location.reload();
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      chang() {
        if (!this.edit){
          return;
        }
        const data = {
          id: this.id,
          status: 1,
          admin_type: this.radio,
        };
        this.$ajax({
          method: 'post',
          url: updateAdmin(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('修改成功');
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });

      },
    },
    created() {
      const par = this.$route.params;
      if ('account' in par) {
        this.account = par.account;
        this.id = par.id;
        this.radio = par.rout.toString();
        this.edit = true;
      }
    },
    data () {
      return {
        edit: false,
        id: '',
        radio: '1',
        pwd: '',
        pwda: '',
        account: '',
      };
    }
  };
</script>

<style scoped>
  .content{
    overflow: auto;
  }
</style>
