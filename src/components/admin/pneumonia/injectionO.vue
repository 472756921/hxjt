<template>
    <div>
      <div class="title">小儿肺炎疫苗完成注射</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="create_date" label="创建日期" width="120"></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="住址" width="120"></el-table-column>
        <el-table-column prop="now_count" label="总注射次数" width="120"></el-table-column>
        <el-table-column prop="injection_date" label="完成时间"></el-table-column>
      </el-table>
      <Page :page="page" v-if="over" v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import Page from '../page';
  import { getInjection } from '../../interface';

  export default {
    name: 'injectionO',
    components: { Page },
    created() {
      this.getList(1);
    },
    methods: {
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getInjection()+"?count=5&page="+page,
        }).then((res) => {
          this.tableData = res.data.pediatricPneumonia;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      },
    },
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        changeDateValue: '',
        index: '',
        cover: false,
        tableData: [],
        over: false,
        page: '',
      };
    },
  };
</script>

<style scoped>
  .model{
    width: 200px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 40%;
    background-color: #fff;
    z-index: 2;
  }
  .fade{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #999999;
    opacity: .5;
    z-index: 1;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    overflow: auto;
  }
</style>
