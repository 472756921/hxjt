<template>
  <div style="padding: 10px;overflow:auto;">
    <UD :userIDt="3"/>
    <br/>
    <el-row>
      <el-col :span="24"  class="userAsk">
        <h4 style="margin:0;">用户提问</h4>
        <br/>
        <div>{{data.describe}}</div>
        <br/>
        <div>
          <img :src="it" width="100px" @click="showImg(it)" title="点击查看大图" v-for="(it, i) in data.imgs"/>
        </div>
        <div class="docWri">
          <h4 style="margin:12px 0;">医生回复</h4>
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea" :autosize="{ minRows: 4, maxRows: 4}"></el-input>
        </div>
        <br/>
        <el-button type="primary" @click="back">提交</el-button>
      </el-col>
    </el-row>

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
        user: '',
        dialogVisible: false,
        textarea: '',
        data: '',
        daImg: '',
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
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      showImg(src){
        this.dialogVisible = true;
        this.daImg = src;
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
