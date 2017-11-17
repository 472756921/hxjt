<template>
  <div style="padding: 20px;overflow:auto;">
    <el-row :gutter="20" style="line-height: 30px">
      <el-col :span="3">
        <div class="">
          <img :src="'http://www.schrtinfo.com'+data.teamImg" width="100%"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="">
          <img :src="'http://www.schrtinfo.com'+data.teamCode" width="100%"/>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="">团队名称：{{data.teamName}}</div>
      </el-col>
      <el-col :span="4">
        <div class="">团队建立时间：{{data.teamCreateDate}}</div>
      </el-col>
      <el-col :span="4">
        <div class="">团队人数：{{data.teamNumber}}</div>
      </el-col>
      <el-col :span="4">
        <div class="">状态：{{data.status==1?'使用中':'未使用'}}</div>
      </el-col>
      <el-col :span="18">
        <div class="Introduction">团队简介：{{data.teamIntroduction}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getGroupDetail} from '../../interface';

  export default {
    name: 'gl_teamDatile',
    data(){
      return{
        teamID: '',
        data:{
          teamImg: '',
          teamName: '',
          teamIntroduction: '',
          teamNumber: '',
          teamCreateDate: '',
          teamCode: '',
          status: '',
        },
      };
    },
    created(){
      this.teamID = this.$route.params.teamID;
      this.getData();
    },
    methods:{
      getData(){
        this.$ajax({
          method: 'GET',
          url:getGroupDetail()+"?group_id="+this.teamID,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.detail;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
  .Introduction{
    word-wrap:break-word;
  }
</style>
