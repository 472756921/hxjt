<template>
  <div>
    <div style="margin: 80% auto;text-align: center;font-size: 1.2rem;color: #409EFF;"><i class="el-icon-loading" style="font-size: 1.8rem"></i><br/><br/>拼命加载中</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  created(){
    this.$ajax({
      method: 'POST',
      url: 'http://www.schrtinfo.com/hrt/userManager/one',
    }).then((res) => {
    })

    setTimeout(()=>{
      this.$ajax({
        method: 'POST',
        url: 'http://www.schrtinfo.com/hrt/userManager/saveOpenId',
      }).then((res) => {
        this.$router.push({name: res.data});
      }).catch((error) => {
      });
    }, 500);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
