<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="service_name" label="商品名"></el-table-column>
      <el-table-column prop="shelf_price" label="现价格"></el-table-column>
      <el-table-column prop="price" label="指导价格" ></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter'></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Success" @click="chang(scope.$index, 1)" v-if="tableData[scope.$index].status==0">激活</span>
          <span class="danger pointer" @click="chang(scope.$index, 0)" v-if="tableData[scope.$index].status==1">注销</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import { adminGetHealthPackageByPage } from '../../interface';

  export default {
    name: 'gl_serviceList',
    created() {
      this.getList(1,1);
    },
    data() {
      return {
        dialogVisible: false,
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
        price: '',
        JsonData: {},
      }
    },
    methods: {
      chang(index, type){
//        this.$ajax({
//          method: 'POST',
//          data: data,
//          url:url,
//          dataType: 'JSON',
//          contentType: 'application/json;charset=UTF-8',
//        }).then((res) => {
//          if(res.data == 1) {
//            this.$message.success('操作成功');
//            this.dialogVisible = false;
//            setTimeout(()=>{window.location.reload();},1000)
//          }
//        }).catch((error) => {
//          this.$message.error(error.message);
//        });
      }      ,
      formatter(r,i) {
        if(r.status == '1') {
          return '生效';
        }
        if(r.status == '0') {
          return '失效';
        }
      },
      changPage(newPage){
        this.getList(newPage);
      },
      getList(page){
        this.$ajax({
          method: 'GET',
          url: adminGetHealthPackageByPage() + "?page="+page,
        }).then((res) => {
          this.tableData = res.data.goods;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          console.log(error)
          this.$message.error('网络有问题，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .pointer{
    cursor: pointer;
  }
</style>
