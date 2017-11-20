<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="service_name" label="商品名"></el-table-column>
      <el-table-column label="图片">
        <template scope="scope">
          <img :src="'http://www.schrtinfo.com'+tableData[scope.$index].title_img" width="100px"/>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="指导价格"></el-table-column>
      <el-table-column prop="status" label="生失效状态" :formatter = 'formatter'></el-table-column>
      <el-table-column prop="is_shelf" label="上下架状态" :formatter = 'formatter2'></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Success" @click="pushChange2(scope.$index, 1)" v-if="tableData[scope.$index].status==0">激活</span>
          <span class="danger pointer" @click="pushChange2(scope.$index, 0)" v-if="tableData[scope.$index].status==1">注销</span>
          <span class="Success" @click="pushChange(scope.$index, 1)" v-if="tableData[scope.$index].is_shelf==0">上架</span>
          <span class="danger pointer" @click="pushChange(scope.$index, 0)" v-if="tableData[scope.$index].is_shelf==1">下架</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
  import { adminGetMedicalGoodsByPage, updateMedicalGoodsStatus } from '../../interface';

  export default {
    name: 'gl_goodList',
    methods: {
      pushChange2(index, type){
        this.$ajax({
          method: 'POST',
          data: {id: this.tableData[index].id, status: type},
          url:updateMedicalGoodsStatus(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('操作成功');
            setTimeout(()=>{window.location.reload();},1000)
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      }      ,
      pushChange(index, type){
        this.$ajax({
          method: 'POST',
          data: {id: this.tableData[index].id, is_self: type},
          url:updateMedicalGoodsStatus(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('操作成功');
            setTimeout(()=>{window.location.reload();},1000)
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      }      ,
      formatter(r,i) {
        if(r.status == '1') {
          return '生效';
        }
        if(r.status == '0') {
          return '失效';
        }
      },
      formatter2(r,i) {
        if(r.is_shelf == '1') {
          return '上架';
        }
        if(r.is_shelf == '0') {
          return '下架';
        }
      },
      changPage(newPage){
        this.getList(newPage);
      },
      getList(page){
        this.$ajax({
          method: 'GET',
          url: adminGetMedicalGoodsByPage() + "?page="+page,
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
    created() {
      this.getList(1,1);
    },
    data() {
      return {
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
        price: '',
        JsonData: {},
      }
    }
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
