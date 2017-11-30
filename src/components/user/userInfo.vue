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
              <div class="round" v-if="infoover">
                <img :src="'http://www.schrtinfo.com'+userInfo.customer.customer_icon.image_url" v-if="userInfo.customer.customer_icon.image_url!=null&&userInfo.customer.customer_icon.image_url!='http://www.schrtinfo.com/userHead.jpg'" width="100%" height="100%">
                <img :src="userInfo.customer.customer_icon.image_url" v-if="userInfo.customer.customer_icon.image_url=='http://www.schrtinfo.com/userHead.jpg'" width="100%" height="100%">
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
      <div class="text" @click="bingd">
        <span>绑定智能云设备</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="look">
        <span>查看云设备</span>
      </div>
      <div class="line2"></div>


      <!--查看云设备-->
      <el-dialog title="查看云设备" :visible.sync="lookF" size="large" >
        <div v-for=" item in CustomerDevice">
          <el-row>
            <el-col :span="24" style="margin:10px 0; font-weight:bold;">编号：{{ item.device_on }}</el-col>
            <el-col :span="12">类型：{{item.device_type ==1 ? "血压计" : "血糖仪" }}</el-col>
            <el-col :span="12">绑定时间：{{ item.bind_time }}</el-col>
          </el-row>
          <div class="line2"></div>
        </div>
        <br/>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="lookF = false">确 定</el-button>
        </span>
      </el-dialog>


      <!--绑定云设备-->
      <el-dialog title="绑定云设备" :visible.sync="bingdF" size="large" >
        <div>请输入云设备编号进行绑定</div>
        <br/>
        <el-input  v-model="prID" size="small">
          <template slot="prepend">编号</template>
        </el-input>
        <br>
        <div style="margin-top:10px;">请选择机种类型</div>
        <br>
        <el-radio-group v-model="machine_type" size="small">
          <el-radio-button label="1">血压计</el-radio-button>
          <el-radio-button label="2" >血糖仪</el-radio-button>
        </el-radio-group>
        <br>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="bangdPr">绑 定</el-button>
        </span>
      </el-dialog>

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
      <!--
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
      -->
      <!--集团二维码弹出-->

      <el-dialog title="关注集团公众号" :visible.sync="jtecode" size="large">
        <span>长按识别二维码</span>
        <img src="http://www.schrtinfo.com/jtcode.jpg" width="100%"/>
      </el-dialog>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getGroupCustomerMessage, updateUserMessage, customerBindGroup, bindDevice, lookDevice } from '../interface';

  export default {
    name: 'userInfo',
    data() {
      return {
        bingdF: false,
        prID: '',
        over: true,
        infoover: false,
        jtecode: false,
        group: '',
        idnumberB: '',
        userInfo: '',
        dialogVisible: false,
        dialogVisible2: false,
        bangding: true,
        lookF: false,
        text: '',
        phone: '',
        address: '',
        val: '',
        serviceTime: [],
        CustomerDevice:[
          /*  {
           customer_id: localStorage.getItem('customer_id'),
           equipment_type: 2,
           type: 1,
           machine_type: 1,
           device_on: '122453453525565656',
           bind_time: '2017-12-12',
           },
           {
           customer_id: localStorage.getItem('customer_id'),
           equipment_type: 2,
           type: 1,
           machine_type: 1,
           device_on: '122453453525565656',
           bind_time: '2017-12-12',
           }*/
        ],
        machine_type: '',
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
      look(){
        this.lookF = true;
        this.$ajax({
          method: 'GET',
          url: lookDevice()+"?customer_id="+localStorage.getItem('customer_id'),
        }).then( (res) =>{
          this.CustomerDevice = res.data.List;
//          console.log(res.data);
        }).catch( (error) =>{
          this.$message.error('网络异常请稍候');
        });

      },
      bingd() {
        this.bingdF = true;
      },
      bangdPr() {
//        console.log(this.machine_type);
        if( this.machine_type == ''|| this.prID == ''){
          this.$message.error("请填写全部信息");
          return;
        }
        let data;
        data ={
          customer_id: localStorage.getItem('customer_id'),
          equipment_type: 2,
          type: 3,
          machine_type: this.machine_type,
          device_on: this.prID,

        }
//        console.log(data);

        this.$ajax({
          method: 'POST',
          data: data,
          url: bindDevice(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then( (res) =>{
          if(res.data.Res === 1){
            this.$message.success("绑定成功");
          }
          if(res.data.Res === 0){
            this.$message.error('设备重复绑定');
          }
        }).catch( (err) =>{
          this.$message.error('网络异常请稍候');
        });
        this.bingdF = false;
        this.prID = '';
        this.machine_type = '';

      },
      service(){
        this.dialogVisible2 = true;
      },
      buyHist(){
        this.$router.push({ name: 'buyHistor', params: { src: 'benson' }})
      },
      check() {
        this.$router.push({ path: 'Physiological', params: { src: 'benson' }})
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
          localStorage.removeItem('customer_id');
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
          window.location.reload();
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
            this.$message.error('用户不存在，请先关注集团公众号');
            setTimeout(()=>{this.jtecode = true;},1500);
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
    border: 3px solid #fff;
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
