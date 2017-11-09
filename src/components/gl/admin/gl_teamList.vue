<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="teamName" label="团队名"></el-table-column>
      <el-table-column prop="teamNumber" label="团队人数"></el-table-column>
      <el-table-column prop="teamCreateDate" label="创建时间" ></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter'></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Success pointer" @click="chang(scope.$index, 1)" v-if="tableData[scope.$index].status==0">激活</span>
          <span class="danger pointer" @click="chang(scope.$index, 0)" v-if="tableData[scope.$index].status==1">失效</span>
          <span class="Blue pointer" @click="datile(scope.$index)">详情</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getGroups, updateGroupStatus} from '../../interface';

  export default {
    name: 'gl_teamList',
    data(){
      return{
        tableData: [],
        pageNow: 1,
        pageTotle: 1,

      };
    },
    created(){
      this.getDate(1);
    },
    methods:{
      chang(index, type){
        this.$ajax({
          method: 'POST',
          url:updateGroupStatus(),
          data: {id: this.tableData[index].teamID, status: type},
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.groups
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      changPage(pageNew){
        this.getDate(pageNew);
      },
      formatter(r,i) {
        if(r.status  == '1') {
          return '生效';
        }
        if(r.status  == '0') {
          return '失效';
        }
      },
      datile(index){
        this.$route.push();
      },
      getDate(page){
        this.$ajax({
          method: 'GET',
          url:getGroups()+"?page=" + page + "&status=",
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.tableData = res.data.groups
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
</style>
