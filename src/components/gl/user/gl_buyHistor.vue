<template>
  <div>
    <h3 style="padding: .4rem">商品购买历史记录</h3>
    <el-row :gutter="10" class="bo" v-for="(it, i) in data" key="i">
      <el-col :xs="8">
        <img src="http://iph.href.lu/120x120?text=%E5%95%86%E5%93%81%E5%9B%BE%E7%89%87" width="100%"/>
      </el-col>
      <el-col :span="16" style="color: #409EFF;font-weight: 600" >{{it.goods_name}}</el-col>
      <el-col :span="16" style="font-size: 1.2rem; color: #FA5555;margin-top: .5rem">{{it.price}}<span style="font-size: .8rem;color: #999;"> 健康豆</span></el-col>
      <el-col :span="8" style="color: #aaa;margin-top: .5rem">{{it.pay_time}}</el-col>
      <el-col :span="8" style="color: #aaa;margin-top: .5rem;text-align: right">{{it.payStatus}}</el-col>
    </el-row>
    <el-pagination v-if="pageTotle!=1" layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {customerGetEnterpriseMedicalOrder} from '../../interface';

  export default {
    name: 'gl_buyHistor',
    data() {
      return {
        data:{
          goods_name: '',
          pay_time: '',
          price: '',
          img: '',
          pageNow: 1,
          pageTotle: 1,
        },
      };
    },
    created() {
      this.getDocList(1);
    },
    methods: {
      changPage(newPage){
        this.getDocList(newPage);
      },
      getDocList(page) {
        this.$ajax({
          method: 'GET',
          url: customerGetEnterpriseMedicalOrder()+"?page=" + page,
        }).then((res) => {
          this.data = res.data.orderList;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
            this.$message.error('服务器开小差了，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>
  .bo{
    padding: .4rem;
    box-shadow: 0 0 .8rem .1rem #eee;
    margin: 0!important;
    margin-top: .6rem!important;
  }
</style>
