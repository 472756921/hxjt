<template>
  <div style="background-color: #F9FAFC;">
    <img src="../../assets/wz.jpg" width="100%"/>
    <h3 style="margin: .4rem 0;">网上问答<span style="color: #ff8746;font-size: 12px;">（剩余次数：{{times}}）</span></h3>
    <div class="pointer" @click="hisqu">历史记录</div>
    <div style="margin: .6rem 0">输入问题描述</div>
    <el-input type="textarea" :rows="3" :maxlength="300" placeholder="请输入内容（最多输入300字）" v-model="textarea"></el-input>
    <div style="margin: .6rem 0">
      <div style="margin: .4rem 0;font-size: .6rem;color: #FF4949">上传相关描述图片（支持jpg，png类型的文件上传，大小在2M以内）</div>
      <input type=file value="添加图片" class="fileInput" @change="clickUp" ref="fileNow"/>
      <button class="chooes">选择图片</button>
    </div>
    <div style="height:170px">
      <el-row>
        <el-col :span="12" v-for="(it, i) in img" key="i">
          <img :src=it width="100%" style="max-height: 160px"/>
        </el-col>
      </el-row>
    </div>
    <br/>
    <el-button type="danger" style="margin: 10px auto;display: block;" @click="go">提交问题</el-button>
    <br/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { createConsultation } from '../interface';
  import { getCustomerServiceDetailCount } from '../interface';

  export default {
    name: 'question',
    data() {
      return {
        textarea: '',
        times: '',
        dialogVisible: true,
        img: [],
      }
    },
    created(){
      this.getTimes()
    },
    methods: {
      go() {
        if(this.textarea == '') {
          this.$message.error('请输入问题描述');
          return false;
        }
        const data = { describe: this.textarea, img: this.img, customer_id: sessionStorage.getItem('customer_id')};
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
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      getTimes() {
        this.$ajax({
          method: 'get',
          url: getCustomerServiceDetailCount() + '?customer_id='+sessionStorage.getItem('customer_id')+'&health_service_id=1',
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          console.log(res.data)
          this.times = res.data;
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
  .fileInput{
    width: 70px;
    opacity: 0;
    position: absolute;
  }
  .chooes{
    left: 7px;
    width: 70px;
    margin-top: 1px;
    background: #1D8CE0;
    color: #fff;
    border: 1px solid #1D8CE0;
    padding: .3rem;
    border-radius: 4px;
  }
  .pointer{
    color: #1D8CE0;
    font-size: .8rem;
  }
</style>
