<template>
    <div style="padding:.6rem .2rem">
      <h3 style="margin: .6rem .6rem 1rem">团队列表<span style="float:right;font-weight:400;font-size: .8rem;color: #ccc">（点击团队名称加入）</span></h3>
      <el-row :gutter="10" v-if="!userF" style="margin: 0 0 .8rem 0; border-bottom: 1px solid #eee;padding-bottom: .4rem" v-for="(it, i) in data" key="i">
        <el-col :span="6">
          <img :src="'http://www.schrtinfo.com/'+it.teamImg" width="100%" style="border-radius: 4px"/>
        </el-col>
        <el-col :span="18">
          <div>
            <div class="teamTitle"  @click="show(it.teamCode, it.teamIntroduction)">{{it.teamName}}</div>
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
        <div class="danger">长按识别下方二维码</div>
        <img width="100%" :src="codeImg"/>
        <span>{{datile}}</span>
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
        datile: '',
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
      show(code, teamIntroduction){
        this.codeImg = 'http://www.schrtinfo.com/'+code;
        this.dialogVisible = true
        this.datile = teamIntroduction;
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
    font-weight: 600;
    color: #409EFF;
    padding: .2rem 0 .6rem 0;
  }
  .teamDatile{
    font-size: 1rem;
    max-height: 36px;
    overflow: hidden;
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    white-space:nowrap; /*不换行 */
    padding:  0 0 .8rem 0;
  }
  .teamCount{
    color: #409EFF;
    font-size: 1rem;
  }
  .teamCreateDate{
    font-size: 1rem;
    color: #409EFF;
  }
</style>
