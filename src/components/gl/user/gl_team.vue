<template>
    <div style="padding:.6rem .2rem">
      <h3>团队列表</h3>
      <el-row :gutter="10" v-if="!userF" style="margin: 0 0 .4rem 0; border-bottom: 1px solid #eee" v-for="(it, i) in data" key="i">
        <el-col :span="6">
          <img src="http://iph.href.lu/120x160" width="100%"/>
        </el-col>
        <el-col :span="18">
          <div @click="show(it.teamCode)">
            <div class="teamTitle">{{it.teamName}}</div>
            <div class="teamDatile">{{it.teamIntroduction}}</div>
            <div class="teamCount">当前人数：{{it.teamNumber}}</div>
            <div class="teamCreateDate">创建时间：{{it.teamCreateDate}}</div>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="userF" style="margin: 0 0 .4rem 0;padding: 1rem" v-for="(it, i) in data" key="i">
        <el-col :span="12">
          <div>名称：{{it.teamName}}</div>
        </el-col>
        <el-col :span="12">
            <div>加入时间：{{it.joinDate}}</div>
        </el-col>
      </el-row>
      <el-pagination v-if="pageTotle!=1" layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>

      <el-dialog
        title="加入团队"
        :visible.sync="dialogVisible"
        size="large">
        <span>长按识别下方二维码</span>
        <img width="100%" :src="codeImg"/>
      </el-dialog>

    </div>
</template>

<script type="text/ecmascript-6">
  import {getGroups, getCustomerGroups} from '../../interface';

  export default {
    name: 'gl_team',
    data(){
      return {
        dialogVisible: false,
        data: '',
        codeImg: '',
        pageNow: 1,
        pageTotle: 1,
        userF: false,
      };
    },
    created(){
      const user = this.$route.params.type;
      if(user != undefined) {
        this.userF = true;
      }
      this.getInfo(1);
    },
    methods: {
      changPage(newPage){
        this.getInfo(newPage);
      },
      show(code){
        this.codeImg = code;
        this.dialogVisible = true
      },
      getInfo(page){
        let url = getGroups()+"?status=1&page="+page;
        if(this.userF){
          url = getCustomerGroups();
        }
        this.$ajax({
          method: 'GET',
          url: url,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(this.userF) {
            this.data = res.data.userTeams;
          } else {
            this.data = res.data.groups
            this.pageNow = res.data.page;
            this.pageTotle = res.data.totalPage;
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
  .teamTitle{
    font-size: 1.2rem;
    color: #409EFF;
  }
  .teamDatile{
    max-height: 40px;
  }
  .teamCount{
    color: #409EFF;
  }
  .teamCreateDate{
    color: #409EFF;
  }
</style>
