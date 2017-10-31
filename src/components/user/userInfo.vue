<template>
  <div>
    <div class="userInfoHead">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div>健康豆</div>
            <div>{{userInfo.money}}个</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="">
            <div class="round" @click="head">
              <img :src="userInfo.customer_icon.image_url" width="100%">
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div>{{userInfo.real_name}}</div>
            <div>22岁 <i class="iconfont icon-nan sex" v-if="userInfo.gender == 1"></i><i class="iconfont icon-nv sex" v-if="userInfo.gender == 0"></i></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="line"></div>

    <br/>
    <div class="text">
      <span>身份证号码</span>
      <span class="itemText">{{userInfo.id_number.substr(0,6)}}********{{userInfo.id_number.substr(14,4)}}</span>
    </div>
    <div class="line2"></div>
    <div class="text" @click="show('phone')">
      <span>联系电话</span>
      <span class="itemText">{{userInfo.phone.substr(0,3)}}****{{userInfo.phone.substr(7)}}</span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="show('address')">
      <span>联系地址</span>
      <span class="itemText">{{userInfo.address}}</span>
    </div>
    <div class="line2"></div>
    <div class="text" >
      <span>团队</span>
      <span class="itemText">{{group.group_name}}</span>
    </div>
    <div class="line2"></div>
    <div class="text" @click="buyHist">
      <span>购买记录</span>
      <span class="itemText">》</span>
    </div>
    <div class="line2"></div>

    <el-dialog title="提示" :visible.sync="dialogVisible" size="large">
      <el-input  v-model="val" size="small">
        <template slot="prepend">{{text}}</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="change">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="绑定账号" :visible.sync="bangding" size="large" :show-close="false">
      <div>您还未绑定账号，请输入您的身份证进行绑定</div>
      <br/>
      <el-input  v-model="idnumberB" size="small">
        <template slot="prepend">身份证号</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="bangdings">绑 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getCustomerMessage, updateUserMessage, getCustomerByIdNumber } from '../interface';

  export default {
    name: 'userInfo',
    data() {
      return {
        group: '',
        idnumberB: '',
        userInfo: '',
        dialogVisible: false,
        bangding: true,
        text: '',
        phone: '',
        address: '',
        val: '',
      };
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      buyHist(){
        this.$router.push({ name: 'buyHistor', params: { src: 'benson' }})
      },
      head() {
        this.$router.push({ name: 'userHeadUplode', params: { src: 'benson' }})
      },
      change() {
        let data;
        if(this.text === '电话号码') {
          data = {phone: this.val};
        }
        if(this.text === '联系地址') {
          data = {address: this.val};
        }
        if(this.val === '') {
          return;
        }
        this.$ajax({
          method: 'POST',
          data: data,
          url: updateUserMessage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.$message.success('修改成功');
          }
          if(this.text === '电话号码') {
            this.userInfo.phone = this.val;
          }
          if(this.text === '联系地址') {
            this.userInfo.address = this.val;
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
        this.dialogVisible = false;
      },
      show(val) {
        if (val === 'phone') {
          this.text = '电话号码';
          this.val = '';
        } else {
          this.text = '联系地址';
          this.val = '';
        }
        this.dialogVisible = true;
      },
      getUserInfo() {
        this.$ajax({
          method: 'GET',
          url: getCustomerMessage(),
        }).then((res) => {
          this.userInfo = res.data.customer;
          this.group = res.data.group;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      updataLive() {
        this.$router.push({ name: 'updataLive' });
      },
      bangdings() {
        if (this.idnumberB == '') {
          this.$message.error('请输入绑定号码');
        }
        this.$ajax({
          method: 'GET',
          url: getCustomerByIdNumber() + "?id_number="+this.idnumberB,
        }).then((res) => {
          this.$message.success('绑定成功');
        }).catch((error) => {
          this.$message.error(error.message);
        });
        this.bangding = false;
      },
    },
  };
</script>

<style scoped>
  .userInfoHead{
    text-align: center;
    padding: 4rem 1rem;
    color: #fff;
    background: url("../../assets/userInfo.jpg");
  }
  .round{
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
  }
  .grid-content{
    padding-top: 1.3rem;
  }
  .sex{
    font-size: .6rem;
  }
  .czBtn{
    background: #FF4949;
    border: none;
    color: #fff;
    border-radius: .2rem;
    padding: .2rem .4rem;
  }
  .text{
    padding: 0 .6rem;
    line-height: 1.6rem;
    color: #324057;
  }
  .itemText{
    float: right;
    color: #999;
    font-size: .8rem;
  }
</style>
