<template>
  <div>
    <h3>商品购买历史记录</h3>
    <el-row :gutter="10" class="bo">
      <el-col :xs="8">
        <img src="http://iph.href.lu/120x120?text=%E5%95%86%E5%93%81%E5%9B%BE%E7%89%87" width="100%"/>
      </el-col>
      <el-col :span="16" style="color: #409EFF;font-weight: 600" >血压计血压计血压计血压计血压计血压计</el-col>
      <el-col :span="16" style="font-size: 1.2rem; color: #FA5555;margin-top: .5rem">¥300.00</el-col>
      <el-col :span="16" style="color: #aaa;margin-top: .5rem">2017-05-09</el-col>
    </el-row>
    <el-row :gutter="10" class="bo">
      <el-col :xs="8">
        <img src="http://iph.href.lu/120x120?text=%E5%95%86%E5%93%81%E5%9B%BE%E7%89%87" width="100%"/>
      </el-col>
      <el-col :span="16" style="color: #409EFF;font-weight: 600">血压计血压计血压计血压计血压计血压计</el-col>
      <el-col :span="16" style="font-size: 1.2rem; color: #FA5555;margin-top: .5rem">¥300.00</el-col>
      <el-col :span="16" style="color: #aaa;margin-top: .5rem">2017-05-09</el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { customerGetMedicalOrder } from '../interface';

  export default {
    name: 'buyHistor',
    data() {
      return {
      };
    },
    created() {
      this.getList(1);
    },
    methods: {
      getList(page) {
        this.$ajax({
          method: 'get',
          url: customerGetMedicalOrder() +"?page="+page+"&customer_id=" + localStorage.getItem('customer_id'),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.date = res.data;
        })
      },
    },
  };
</script>

<style scoped>
  .title {
    font-size: 1rem;
    font-weight: 600;
    padding-bottom: 1rem;
    overflow: auto;
    color: #409EFF;
  }
  .bo{
    padding: 1rem;
    box-shadow: 0 0 .8rem .1rem #eee;
    margin-top: .8rem;
  }
</style>
