<template>
  <div>
    <img src="../assets/timg.jpg" width="100%">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'noPage',
    created(){
      this.$message.warning('请关闭浏览器重新进入');
    },
  };
</script>

<style scoped>

</style>
