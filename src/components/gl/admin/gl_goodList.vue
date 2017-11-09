<template>
  <div style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="1">服务包</el-radio>
    <el-radio v-model="radio" label="2">商品</el-radio>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="service_name" label="商品名"></el-table-column>
      <el-table-column v-if="radio==2" label="图片">
        <template scope="scope">
          <img :src="123"/>
        </template>
      </el-table-column>
      <el-table-column prop="shelf_price" label="现价格"></el-table-column>
      <el-table-column prop="price" label="指导价格" ></el-table-column>
      <el-table-column prop="is_shelf" label="状态" :formatter = 'formatter'></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Success" @click="chang(scope.$index, 1)" v-if="tableData[scope.$index].is_shelf==0">上架</span>
          <span class="danger pointer" @click="chang(scope.$index, 0)" v-if="tableData[scope.$index].is_shelf==1">下架</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>

    <el-dialog title="输入服务包价格" :visible.sync="dialogVisible" size="samll">
      <input type="text" placeholder="服务包价格" v-model="price" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="priceSho">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getHealthPackageByPage, getMedicalGoodsByPage, GroupBindPackage, updateGroupBindPackageStatus, groupBindMedicalGoods, updateGroupMedicalGoodsStatus } from '../../interface';

  export default {
    name: 'gl_goodList',
    watch: {
      radio (newData, oldData) {
        this.getList(1,newData);
      },
    },
    methods: {
      priceSho(){
        if(this.price == '') {
          this.$message.warning('请输入售价');
          return ;
        }
        this.JsonData.data.price = this.price;
        this.pushChange( this.JsonData.url, this.JsonData.data);
      },
      //类型 radio，位置 index，操作 type, 是否首次上架 isFrist
      chang(index, type) {
        let url, data, isFrist = false;
        if(this.tableData[index].group_package_id == null){
          isFrist = true;
        }
        if(this.radio == '1'){    //服务包
          if(type == 1){  //上架
            this.dialogVisible = true;
            if(isFrist){  //（首次）
              url = GroupBindPackage();
              data = {
                price: 0,
                package_id: this.tableData[index].id,
              };
            } else {   //非首次
              url = updateGroupBindPackageStatus();
              data = {
                status: 1,
                price: 0,
                id: this.tableData[index].group_package_id,
              };
            }
            this.JsonData.data = data;
            this.JsonData.url = url;
          } else if(type == 0) { //下架
            url = updateGroupBindPackageStatus();
            data = {
              status: 0,
              price: 0,
              id: this.tableData[index].group_package_id,
            };
            this.pushChange(url, data);
          }
        } else if(this.radio == '2'){ //商品
          if(type == 1){  //上架
            if(isFrist){  //（首次）
              url = groupBindMedicalGoods();
              data = {
                medical_goods_id: this.tableData[index].id,
              };
            } else {   //非首次
              url = updateGroupMedicalGoodsStatus();
              data = {
                status: 1,
                id: this.tableData[index].group_package_id,
              };
            }
          } else if(type == 0){ //下架
            url = updateGroupMedicalGoodsStatus();
            data = {
              status: 0,
              id: this.tableData[index].group_package_id,
            };
          }
          this.pushChange(url, data);
        }
      },
      pushChange(url, data){
        this.$ajax({
          method: 'POST',
          data: data,
          url:url,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data == 1) {
            this.$message.success('操作成功');
            this.dialogVisible = false;
            setTimeout(()=>{window.location.reload();},1000)
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      }      ,
      formatter(r,i) {
        if(r.is_shelf == '1') {
          return '上架';
        }
        if(r.is_shelf == '0') {
          return '下架';
        }
      },
      changPage(newPage){
        this.getList(newPage, this.radio);
      },
      getList(page, type){
        let url;
        if(type == 1) {
          url = getHealthPackageByPage();
        }
        if(type == 2) {
          url = getMedicalGoodsByPage();
        }
        this.$ajax({
          method: 'GET',
          url: url + "?page="+page,
        }).then((res) => {
          this.tableData = res.data.goods;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
          if(this.radio == 2){
            this.tableData.map((it, i)=>{
              it.shelf_price = '仅指导价';
            })
          }
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
        dialogVisible: false,
        radio: '1',
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
