<template>
  <div>
    <h3>商品购买历史记录</h3>
    <el-radio v-model="radio" label="1">服务包</el-radio>
    <el-radio v-model="radio" label="2">商品</el-radio>
    <el-row :gutter="10" class="bo" v-for="(it, i) in data">
      <el-col :xs="8">
        <img src="http://iph.href.lu/120x120?text=%E5%95%86%E5%93%81%E5%9B%BE%E7%89%87" width="100%"/>
      </el-col>
      <el-col :span="16" style="color: #409EFF;font-weight: 600" >{{it.goods_name}}</el-col>
      <el-col :span="16" style="font-size: 1.2rem; color: #FA5555;margin-top: .5rem">{{it.price}}健康豆</el-col>
      <el-col :span="16" style="color: #aaa;margin-top: .5rem">{{it.pay_time.split(' ')[0]}}</el-col>
      <el-col :span="16" style="color: #aaa;margin-top: .5rem">{{it.status=='DONE'?'已发货':'未发货'}}</el-col>
      <el-col :span="16" style="color: #ccc;font-size: .8rem" >{{it.order_on}}</el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCustomerHealthServiceOrder, getCusotmerMedicalOrder } from '../interface';

  export default {
    name: 'buyHistor',
    data() {
      return {
        radio: '1',
        data: [],
      };
    },
    created() {
      this.getList();
    },
    watch: {
      radio (newData, oldData) {
        this.getList();
      },
    },
    methods: {
      getList() {
        let URL = getCustomerHealthServiceOrder();
        if(this.radio == '2') {
          URL = getCusotmerMedicalOrder();
        }
        this.$ajax({
          method: 'get',
          url:URL+"?customer_id="+localStorage.getItem('customer_id'),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.orders;
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
