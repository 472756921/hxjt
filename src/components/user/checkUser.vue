<template>
  <div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {jumpPage} from '../interface';

  export default {
    name: 'checkUser',
    created(){
      localStorage.removeItem('customer_id')
      const customer_id = localStorage.getItem('customer_id');
      if(customer_id == null){
        this.$router.push({name:'userInfo'});
      } else {
        this.$ajax({
          method: 'GET',
          url: jumpPage(),
        }).then((res) => {
        }).catch((error) => {
          this.$message.error(error.message);
        });
      }
    },
  };
</script>

<style scoped>

</style>
