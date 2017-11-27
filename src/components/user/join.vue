<template>
  <div>
    <img src="../../assets/20091210172726656.jpg" width="100%"/>
    <el-checkbox v-model="checked" class="items">我已阅读并同意<a href="#/xieyi" class="xieyi">《服务协议》</a></el-checkbox>
    <div class="content" v-for="(it, i) in list" key="i">
      <div class="title">{{it.service_name}}</div>
      <div class="titleB">专属服务：</div>
      <div>{{it.describe}}</div>
      <div class="price">尊享价格：<span class="priceNumber">{{it.price}}健康豆</span><span class="joinbtn"><el-button type="danger" size="small" @click="yy(it)">立即加入</el-button></span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getGroupBindPackageByPage, CustomerPayHealthServicePackage} from '../interface';

  export default {
    name: 'join',
    data(){
      return{
        list: [],
        checked: false,
      }
    },
    created(){
      let user = localStorage.getItem('customer_id');
      if (user == '' || user == null) {
        this.$router.push({path:'userInfo'});
      } else {
        this.getList(1);
      }
    },
    methods:{
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getGroupBindPackageByPage()+"?page="+page+'&status=1&grade=1',
        }).then((res) => {
          this.list = res.data.packages;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      yy(doc) {
        if(!this.checked) {
          this.$message.error('阅读并同意《协议》后才能加入俱乐部');
          return;
        }
        const r = confirm("该商品需要花费"+ doc.price +"点健康豆，是否加入该俱乐部？")
        if (r) {
          this.$ajax({
            method: 'POST',
            data: {customer_id: localStorage.getItem('customer_id'),group_package_id: doc.id,},
            url: CustomerPayHealthServicePackage(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$message.success('购买成功，稍后将会由客服直接联系');
          }).catch((error) => {
            this.$message.error('您的健康豆不足，请前往哈瑞特健康充值');
          });
        }
      }
    },
  };
</script>

<style scoped>
  .content{
    padding: .6rem;
    border: 1px solid #D0DFE6;
    line-height: 2rem;
    margin: .4rem 0;
    border-radius: 5px;
  }
  .title{
    font-size: 1.4rem;
    font-weight: 600;
  }
  .xieyi{
    text-decoration: none;
    color: #409EFF;
  }
  .titleB{
    font-weight: 400;
    color: #409EFF;
  }
  .price{
    color: #FA5555;
    margin: 1rem 0;
  }
  .priceNumber{
    font-size: 1.4rem;
  }
  .joinbtn{
    float: right;
  }
</style>
