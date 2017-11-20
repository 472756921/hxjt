<template>
  <div>
    <div class="loding"></div>
    <div>
      <div class="userInfoHead">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div>健康豆</div>
              <div>{{customer.money}}个</div>
              <div><el-button type="danger" size="mini" @click="cz">充值</el-button></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="">
              <div class="round" @click="head">
                <img :src="customer.userHeadImg" width="100%" height="100%">
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div>{{customer.userName}}</div>
              <div><i class="iconfont icon-nan sex" v-if="customer.sex == '男'"></i><i class="iconfont icon-nv sex" v-if="customer.sex == '女'"></i></div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="line"></div>

      <br/>
      <div class="text">
        <span>身份证号码</span>
        <span class="itemText" >{{customer.idNumber.substr(0,6)}}********{{customer.idNumber.substr(14,4)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="show('phone')">
        <span>联系电话</span>
        <span class="itemText" >{{customer.phone.substr(0,3)}}****{{customer.phone.substr(7)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="show('address')">
        <span>联系地址</span>
        <span class="itemText">{{customer.address}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="teamList">
        <span>团队</span>
        <span class="itemText">》</span>
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
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCustomerMessage, updateUserMessage} from '../../interface';

  export default {
    name: 'gl_userInfo',
    data() {
      return {
        dialogVisible: false,
        text: 'ces',
        val: '',
        customer: {
          address: '',
          id: '',
          idNumber: '',
          phone: '',
          sex: '',
          userHeadImg: '',
          userName: '',
        },
      };
    },
    created() {
      this.getData();
    },
    methods: {
      head() {
        this.$router.push({ name: 'userHeadUplode', params: { src: 'benson' }})
      },
      getData() {
        this.$ajax({
          method: 'GET',
          url: getCustomerMessage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.customer = res.data.customer;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      teamList(){
        this.$router.push({name:'gl_team', params:{type: 'user'}});
      },
      change(){
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
            this.customer.phone =  this.val;
          }
          if(this.text === '联系地址') {
            this.customer.address =  this.val;
          }
        }).catch((error) => {
          console.log(error)
          this.$message.error(error.message);
        });
        this.dialogVisible = false;
      },
      cz(){
        this.$router.push({name:'gl_recharge'});
      },
      buyHist(){
        this.$router.push({name:'gl_buyHistor'});
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
    },
  };
</script>

<style scoped>
  .userInfoHead{
    text-align: center;
    padding: 4rem 1rem;
    color: #fff;
    background: url("../../../assets/userInfo.jpg");
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
