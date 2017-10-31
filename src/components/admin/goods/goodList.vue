<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="商品名"></el-table-column>
      <el-table-column prop="xjg" label="现价格"></el-table-column>
      <el-table-column prop="yjg" label="原价格"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter'></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Success" @click="chang(scope.$index)">修改</span>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog  title="商品信息" :visible.sync="dialogVisible" size="tiny">

      <el-radio-group v-model="p_class">
        <el-radio-button label=1>商品</el-radio-button>
        <el-radio-button label=2>服务包</el-radio-button>
      </el-radio-group>

      <div class="item">商品名称：<input v-model="sname" v-if="p_class==1"/>
        <select v-if="p_class==2" v-model="sClass">
          <option>就诊服务包</option>
          <option>提问服务包</option>
        </select>
      </div>
      <div class="item">商品价格：<input v-model="xjg"/></div>
      <div class="item">商品排序：<input v-model="sort"/></div>
      <div class="item" v-if="p_class==2">服务次数：<input v-model="stime"/></div>

      <el-radio-group v-model="pstatus">
        <el-radio-button label=1>上架</el-radio-button>
        <el-radio-button label=0>下架</el-radio-button>
      </el-radio-group>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getGroupGoodsList } from '../../interface';

  export default {
    name: 'goodList',
    methods: {
      chang(index) {
        this.dialogVisible = true;
        this.name = this.tableData[index].name;
        this.xjg = this.tableData[index].xjg;
        this.yjg = this.tableData[index].yjg;
        this.sort = this.tableData[index].sort;
        this.pstatus = this.tableData[index].status;
      },
      formatter(r,i) {
        if(r.status == '1') {
          return '上架';
        }
        if(r.status == '0') {
          return '下架';
        }
      },
      getList(){
        this.$ajax({
          method: 'GET',
          url: getGroupGoodsList() + "?doctor_id=1&page="+page,
        }).then((res) => {
          this.tableData = res.data.reservations;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
    },
    created() {
      this.getList(1);
    },
    data() {
      return {
        sClass: '',
        sname: '',
        stime: '',
        p_class: 1,
        pstatus: 1,
        dialogVisible: false,
        name: '',
        xjg: '',
        yjg: '',
        sort: '',
        tableData: [
          {
            name: '洗衣液',
            xjg: 229,
            yjg: 320,
            sort: 1,
            status: 1,
          },
          {
            name: '洗衣液',
            xjg: 229,
            yjg: 320,
            sort: 1,
            status: 0,
          },
        ],
      }
    }
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .item{
    line-height: 40px;
  }
  .item input {
    height: 20px;
  }
</style>
