<template>
  <div style="padding: 10px;overflow:auto;">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="用户问答详情" name="1">
        <el-row>
          <el-col :span="24"  class="userAsk">
            {{data.customer_name}} - {{data.gender}} - {{data.age}}
            <h4 style="margin:0;">用户提问</h4>
            <br/>
            <div>{{data.describe}}</div>
            <br/>
            <div>
              <img :src="'http://www.schrtinfo.com'+it" width="100px" @click="showImg(it)" title="点击查看大图" v-for="(it, i) in data.imgs"/>
            </div>
            <div class="docWri">
              <h4 style="margin:12px 0;">医生回复 {{reply_time}}</h4>
              <el-input type="textarea" autosize placeholder="请输入内容" :disabled='pback' v-model="textarea" :autosize="{ minRows: 4, maxRows: 4}"></el-input>
            </div>
            <br/>
            <el-button type="primary" :disabled='pback' @click="back">提交</el-button>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="用户生理数据" name="2">
        <UD :userIDt="user.customer_id"/>
      </el-collapse-item>
    </el-collapse>

    <el-dialog title="查看详细" :visible.sync="dialogVisible" size="lage">
      <img width="100%" :src="daImg"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import UD from './userDatile';
  import {getHealthConsultationDetail, replyConsultation} from '../../interface';

  export default {
    name: 'askDatile',
    components: { UD },
    created() {
      this.user = this.$route.params.user;
      this.getInfo();
    },
    data() {
      return {
        activeNames: ['1'],
        user: '',
        dialogVisible: false,
        textarea: '',
        data: '',
        daImg: '',
        status: '',
        reply:'',
        create_date:'',
        customer_name: '',
        age: '',
        gender: '',
        reply_time: '',
        pback: false,
      };
    },
    methods: {
      back(){
        this.$ajax({
          method: 'POST',
          data: {id: this.user.id, reply: this.textarea, doctor_id: 1},
          url: replyConsultation()+"?id="+this.user.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('提交成功');
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      getInfo(){
        this.$ajax({
          method: 'get',
          url: getHealthConsultationDetail()+"?id="+this.user.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.detail
          if(res.data.detail.status == '已回答') {
            this.textarea = res.data.detail.reply;
            this.reply_time = res.data.detail.reply_time;
            this.pback = true
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      showImg(src){
        this.dialogVisible = true;
        this.daImg = 'http://www.schrtinfo.com'+src;
      },
    },
  };
</script>

<style scoped>
.userAsk{
  background: #E5E9F2;
  padding: 10px 10px 30px 10px;
}
  .docWri{

  }
</style>
