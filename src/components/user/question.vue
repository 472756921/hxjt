<template>
  <div style="background-color: #F9FAFC;">
    <img src="../../assets/zxwd.jpg" width="100%"/>
    <h3 style="margin: .4rem 0;">网上问答<span style="color: #ff8746;font-size: 12px;">（剩余次数：{{times}}）</span>  <span class="pointer" @click="hisqu">历史记录</span></h3>
    <p>
      - 文字/图片方式留言，医生工作室及时回复，与您充分沟通<br/>
      - 专家24小时内给予回复<br/>
      - 问诊阶段不限次交流，以专家给出明确建议后才为结束<br/>
      - 服务时限最长不超过3天，逾期服务自动结束
    </p>
    <div style="margin: .6rem 0">输入问题描述</div>
    <el-input type="textarea" :rows="3" :maxlength="300" placeholder="请输入内容（最多输入300字）" v-model="textarea"></el-input>
    <br/>
    <br/>
    <el-row>
      <el-col :span="12">
        <el-upload
          class="avatar-uploader"
          action="http://www.schrtinfo.com/hrt/userManager/uploadImg/"
          :show-file-list="false"
          :data=dData
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="img1" :src="img1" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <el-upload
          class="avatar-uploader"
          action="http://www.schrtinfo.com/hrt/userManager/uploadImg/"
          :show-file-list="false"
          :data=dData
          :on-success="handleAvatarSuccess2"
          :before-upload="beforeAvatarUpload">
          <img v-if="img2" :src="img2" class="avatar" width="100%">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
    </el-row>
    <el-button type="danger" style="margin: 10px auto;display: block;" @click="go" :disabled='dis' >提交问题</el-button>
    <br/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { createConsultation,getCustomerServiceDetailCount, teamUserrecharge } from '../interface';

  export default {
    name: 'question',
    data() {
      return {
        dis: false,
        dData: {pathType: 'qHead'},
        textarea: '',
        times: '',
        dialogVisible: true,
        img: [],
        img1: '',
        img2: '',
      }
    },
    created(){
      let user = localStorage.getItem('customer_id');
      if (user == '' || user == null) {
        this.$router.push({path:'userInfo'});
      } else {
        this.getTimes()
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.img = [...this.img, res];
        this.img1 = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess2(res, file) {
        this.img = [...this.img, res];
        this.img2 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return isJPG && isLt2M;
      },

      onBridgeReady(appIdV, nonceStrV, prepayIdV, paySignV, timeStampV) {
        window.WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            'appId': appIdV,
            'timeStamp': timeStampV.toString(),
            'nonceStr': nonceStrV,
            'package': 'prepay_id=' + prepayIdV,
            'signType': 'MD5',
            'paySign': paySignV,
          },
          (res) => {
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
              this.times = 1;
              setTimeout(this.go(),1000)
            }
          }
        );
      },
      pay(){
        this.$ajax({
          method: 'post',
          url: teamUserrecharge(),
          data: {price: 4},
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (typeof window.WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('window.WeixinJSBridgeReady',
                this.onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('window.WeixinJSBridgeReady', this.onBridgeReady);
              document.attachEvent('window.onWeixinJSBridgeReady', this.onBridgeReady);
            }
          } else {
            this.onBridgeReady(res.data.appId, res.data.nonceStr,res.data.package, res.data.paySign, res.data.timeStamp);
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },

      go() {
        if(this.textarea == '') {
          this.$message.error('请输入问题描述');
          return false;
        }
        if(this.times <= 0) {
          this.pay();
          return false
        }
        const data = { describe: this.textarea, img: this.img, customer_id: localStorage.getItem('customer_id')};
        this.$ajax({
          method: 'POST',
          data: data,
          url: createConsultation(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('提交成功');
            this.times -= 1;
            this.dis = true;
          }
        }).catch((error) => {
          this.$message.error('对不起您的次数不足，请购买服务次数');
        });
      },
      getTimes() {
        this.$ajax({
          method: 'get',
          url: getCustomerServiceDetailCount() + '?customer_id='+localStorage.getItem('customer_id')+'&health_service_id=1',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.times = res.data;
          if(this.times == 0) {
            this.$notify({
              title: '购买服务次数',
              message: '您的剩余服务次数不足，请前往‘哈瑞特王勉工作室’公众号商城购买次数；如果您不是会员，请先前往‘哈瑞特健康’公众号个人中心充值，再返回‘哈瑞特王勉工作室’公众号商城购买会员服务资格（999健康豆），再前往本公众号商城购买对应服务次数（200健康豆）',
              duration: 0
            });
          }
        })
      },
      hisqu() {
        this.$router.push({name: 'question_List'});
      },
      clickUp() {
        let file = this.$refs.fileNow.files[0];
        if (file.size>2000000) {
          this.$message.error('图片大小不成超过2M');
          return false;
        }
        if (!/image\/\w+/.test(file.type)) {
          this.$message.error('只能上传图片');
          return false;
        }
        if(this.img.length > 1) {
          this.$message.error('上传图片不能超过两张');
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          this.img = [...this.img, e.target.result];
        }.bind(this);
      }
    },
  };
</script>

<style scoped>
  .pointer{
    color: #1D8CE0;
    font-size: .8rem;
    float: right;
    font-weight: 400;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    height: 150px;
    width: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
</style>
