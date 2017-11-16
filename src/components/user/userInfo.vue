<template>
  <div>
    <div class="loding" v-loading.fullscreen.lock="over"></div>

    <div>
      <div class="userInfoHead">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div>健康豆</div>
              <div v-if="infoover">{{userInfo.customer.money}}个</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="">
              <div class="round" @click="head" v-if="infoover">
                <img :src="'http://www.schrtinfo.com'+userInfo.customer.customer_icon.image_url" width="100%" height="100%">
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content" v-if="infoover">
              <div>
                {{userInfo.customer.real_name}}
                <i class="iconfont icon-nan sex" v-if="userInfo.customer.gender == 1"></i><i class="iconfont icon-nv sex" v-if="userInfo.customer.gender == 0"></i>
                <div class="liveGard">LV-{{userInfo.customer_level}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="line"></div>

      <br/>
      <div class="text">
        <span>身份证号码</span>
        <span class="itemText" v-if="infoover">{{userInfo.customer.id_number.substr(0,6)}}********{{userInfo.customer.id_number.substr(14,4)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="show('phone')">
        <span>联系电话</span>
        <span class="itemText" v-if="infoover">{{userInfo.customer.phone.substr(0,3)}}****{{userInfo.customer.phone.substr(7)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text"  @click="show('address')">
        <span>联系地址</span>
        <span class="itemText" v-if="infoover">{{userInfo.customer.address}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="buyHist">
        <span>购买记录</span>
        <span class="itemText">》</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="check">
        <span>查看生理指标</span>
        <span class="itemText">》</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="service">
        <span>剩余服务次数</span>
      </div>
      <div class="line2"></div>
      <!--查看服务次数-->
      <el-dialog title="服务剩余次数" :visible.sync="dialogVisible2" size="large">
        <div v-for="(it, i) in serviceTime">
          {{it.service_name}} - {{it.service_count}} 次
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        </span>
      </el-dialog>
      <!--修改信息弹窗-->
      <el-dialog title="提示" :visible.sync="dialogVisible" size="large">
        <el-input  v-model="val" size="small">
          <template slot="prepend">{{text}}</template>
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="change">确 定</el-button>
        </span>
      </el-dialog>
      <!--绑定用户弹窗-->
      <el-dialog title="绑定账号" :visible.sync="bangding" size="large" :show-close="false" :close-on-click-modal="false" :close-on-press-escape	='false'>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import { getGroupCustomerMessage, updateUserMessage, customerBindGroup } from '../interface';

  export default {
    name: 'userInfo',
    data() {
      return {
        over: true,
        infoover: false,
        group: '',
        idnumberB: '',
        userInfo: '',
        dialogVisible: false,
        dialogVisible2: false,
        bangding: true,
        text: '',
        phone: '',
        address: '',
        val: '',
        serviceTime: [],
      };
    },
    created() {
      let user = localStorage.getItem('customer_id');
      if (user == '' || user == null) {
        this.bangding = true;
        this.over = false;
        return
      } else {
        this.bangding = false;
        this.getUserInfo();
      }
    },
    methods: {
      service(){
        this.dialogVisible2 = true;
      },
      buyHist(){
        this.$router.push({ name: 'buyHistor', params: { src: 'benson' }})
      },
      check() {
        this.$router.push({ path: 'Physiological', params: { src: 'benson' }})
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
          url: getGroupCustomerMessage()+"?customer_id="+localStorage.getItem('customer_id'),
        }).then((res) => {
          this.userInfo = res.data.customerGroup;
          this.serviceTime = res.data.service_detail;
          this.group = res.data.group;
          this.over = false;
          this.infoover = true;
        }).catch((error) => {
          if(error.response.status == 400 || error.response.status == 1000) {
            this.$message.error('服务器开小差了，请稍后再试');
          }
          if(error.response.status == 1003) {
            this.$message.error('身份证格式错误');
          }
          if(error.response.status == 1009) {
            this.$message.error('用户不存在');
          }
          this.bangding = true;
        });
      },
      updataLive() {
        this.$router.push({ name: 'updataLive' });
      },
      bangdings() {
        if (this.idnumberB == '') {
          this.$message.error('请输入绑定号码');
          return
        }
        const data = {id_number: this.idnumberB};
        this.$ajax({
          method: 'post',
          dataType: 'JSON',
          data: data,
          url: customerBindGroup(),
        }).then((res) => {
          this.$message.success('绑定成功');
          localStorage.setItem('customer_id', res.data);
          this.bangding = false;
          setTimeout(()=>{window.location.reload();},600)
        }).catch((error) => {
          const code = error.response.data.errorCode;
          if (code == 1009) {
            this.$message.error('用户不存在');
          }
          if(code == 1000){
            this.$message.error('网络服务错误');
          }
        });
      },
    },
  };
</script>

<style scoped>
  .liveGard{
    color: #F6D600;
    font-weight: 600;
    font-style: italic;
  }
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
