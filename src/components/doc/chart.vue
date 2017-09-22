<template>
  <div class="content">
    <div class="back" @click="back"><i class="iconfont icon-back"></i> 返回</div>
    <br/>
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="chart" id="chart">
          <span  v-for="(o, index) in egData">
            <UserSay v-if="o.role === 0" :content="o.content"></UserSay>
            <DocSay v-if="o.role === 1" :content="o.content"></DocSay>
          </span>
          <span id="nn"></span>
        </div>
        <div class="message">
          <el-row>
            <el-col :span="20">
              <textarea rows="4" maxlength="200" v-model="sendMessage"></textarea>
            </el-col>
            <el-col :span="2">
              <button class="send"  @click="send">发送</button>
            </el-col>
            <el-col :span="2">
              <button class="colse"  @click="colse">结束问题</button>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="userData">
          <div class="plan">
            <h4 class="center">生理指标</h4>
          </div>
          <el-row class="card" v-for="(o, index) in data" key="index">
            <el-col :span="12"><div>日期：{{o.creation_date}}</div></el-col>
            <el-col :span="12"><div>月龄：{{o.month}}</div></el-col>
            <el-col :span="12"> <div>体重：{{o.weight}}</div></el-col>
            <el-col :span="12"><div>体温：{{o.body_temperature}} ℃</div></el-col>
            <el-col :span="12"><div>奶量：{{o.milk}}</div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserSay from '../question/userSay';
  import DocSay from '../question/docSay';
  import { saveConsultingDetail, getConsultingDetails, closeTheConsulting } from '../interface';

  export default {
    components: { UserSay, DocSay},
    name: 'chart',
    mounted(){
      const scrollDiv = document.getElementById('chart');
      const anchor = document.getElementById('nn').offsetTop;
      scrollDiv.scrollTop = anchor;
    },
    created() {
      const par = this.$route.params;
      this.tid = par.id;
      if ('id' in par) {
        this.tid = par.id;
        this.getList();
      }
    },
    data() {
      return {
        sendMessage: '',
        tid: '',
        egData: [],
        data: [],
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getList() {
        this.$ajax({
          method: 'GET',
          dataType: 'JSON',
          url: getConsultingDetails() + "?consulting_id=" + this.tid + '&&isDoctor=1' ,
        }).then((res) => {
          this.egData = res.data.consultingDetails;
          this.data = res.data.childRecord;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      send() {
        if (this.sendMessage === '') {
          return;
        } else {
          const data = {
            role: 0,
            content: this.sendMessage,
            consulting_id: this.tid,
          };
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: saveConsultingDetail(),
          }).then((res) => {

          }).catch((error) => {
            this.$message.error(error.message);
          });

          const message = { content: this.sendMessage, role: 0};
          this.egData = [...this.egData, message];
          this.sendMessage = '';
          let anchor = document.getElementById('nn').offsetTop;
          console.log(anchor)
          anchor += 100;
          document.getElementById('chart').scrollTop = 2000;
        }
      },
      colse() {
        const r = confirm("确认完成并关闭会话？关闭后用户将无法继续向您提问")
        if (r === true) {
          const data = {id: this.tid,};
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: closeTheConsulting(),
          }).then((res) => {
            this.$router.go(-1);
          }).catch((error) => {
            this.$message.error(error.message);
          });
        }
      },
    },
  };
</script>

<style scoped>
  .content{
    overflow: auto;
  }
  .back:hover{
    cursor: pointer;
    color: #1D8CE0;
  }
  .chart{
    border: 1px solid #aaa;
    height: 500px;
    padding: 20px;
    overflow: auto;
    position: relative;
    padding-bottom: 60px;
  }
  .message  textarea{
    width: 100%;
    box-sizing:border-box;
    resize: none;
    height: 70px;
    font-size: 16px;
    padding: 4px;
    outline: none;
  }
  .send{
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    background: #1D8CE0;
    border: none;
    height: 70px;
    outline: none;
    cursor: pointer;
  }
  .userData{
    border: 1px solid #aaa;
    height: 650px;
    overflow: auto;
  }
  .plan{
    background: #5a6378;
    color: #ffffff;
    padding: 10px;
  }
  .colse{
    background-color: #FF4949;
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    border: none;
    outline: none;
    height: 70px;
    cursor: pointer;
  }
  .card{
    font-size: .8rem;
    background: #EFF2F7;
    padding: 1rem .6rem;
    border-radius: .2rem;
    margin-bottom: .2rem;
    line-height: 1.3rem;
  }
</style>
