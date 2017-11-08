<template>
  <div>
    <div style="margin: 80% auto;text-align: center;font-size: 1.2rem;color: #409EFF;"><i class="el-icon-loading" style="font-size: 1.8rem"></i><br/><br/>拼命加载中</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {jumpPage} from '../interface';

  export default {
    name: 'checkUser',
    created(){
      const customer_id = localStorage.getItem('customer_id');
      console.log(customer_id)
      if(customer_id == null){
        this.$router.push({name:'userInfo'});
      } else {
        window.location.href=jumpPage();
      }
    },
  };
</script>

<style scoped>

</style>
