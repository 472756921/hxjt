<template>
  <div class="content">
    <p class="text">为保证您获得优质的服务，请准确填写注册信息，您的个人信息我们不会泄露给任何人</p>
    <el-input  v-model="userName" maxlength=7  size="small">
      <template slot="prepend">姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
    </el-input>
    <el-input  v-model="phone" maxlength=15 minlength=11 size="small">
      <template slot="prepend">联系电话</template>
    </el-input>
    <el-input  v-model="idcard" maxlength=18 minlength=15 size="small">
      <template slot="prepend">身份证号</template>
    </el-input>
    <el-input  v-model="address" maxlength=30 size="small">
      <template slot="prepend">联系地址</template>
    </el-input>
    <br/>
    <br/>
    <el-radio class="radio" v-model="sex" label="1">男</el-radio>
    <el-radio class="radio" v-model="sex" label="2">女</el-radio>
    <div>
      <br/>
      <el-checkbox v-model="checked" size="large">我已于阅读并同意</el-checkbox>
      <a href="#/public/ag" class="text">《和润康注册协议》</a>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="success" class="center_block" @click="reg">注册</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import IDCheck from '../ut/IDNumberCheck';
  import { userReg } from '../interface';

  export default {
    name: 'reg',
    data() {
      return {
        userName: '',
        phone: '',
        idcard: '',
        address: '',
        checked: false,
        sex: '',
      };
    },
    methods: {
      reg() {
        if (this.userName === '' || this.phone === '' || this.idcard === '' || this.address === '' || this.sex === '') {
          this.$message.warning('请完整填写注册信息');
          return;
        }
        if (!this.checked) {
          this.$message.warning('请仔细阅读并同意注册协议');
          return;
        }
        const IDNCheck = IDCheck(this.idcard);
        if (!IDNCheck.passes) {
          this.$message.warning('身份证格式错误');
          return;
        }
        const userDTO = {
          real_name: this.userName,
          gender: this.sex,
          id_number: this.idcard,
          phone: this.phone,
          address: this.address,
        };

        this.$ajax({
          method: 'POST',
          url: userReg(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
          data: userDTO,
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
    }
  };
</script>

<style scoped>
  .content{
    padding: .2rem .8rem;
  }
  .text{
    font-size: .8rem;
    color: #1D8CE0;
  }
  .el-input{
    margin-top: .8rem;
  }

</style>
