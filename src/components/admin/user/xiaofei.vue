<template>
  <div  style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="1">充值记录</el-radio>
    <el-radio v-model="radio" label="2">服务包消费记录</el-radio>
    <el-radio v-model="radio" label="3">商品消费记录</el-radio>
    <el-radio v-model="radio" label="4">在线问诊记录</el-radio>
    <el-radio v-model="radio" label="5">预约面对面记录</el-radio>
    <czList v-if="radio==1" :userID='userID'/>
    <fubList v-if="radio==2" :userID='userID'/>
    <spList v-if="radio==3" :userID='userID'/>
    <wzList v-if="radio==4" :userID='userID'/>
    <yu v-if="radio==5" :userID='userID'/>
  </div>
</template>

<script type="text/ecmascript-6">
  import czList from './userdata/czList.vue';
  import fubList from './userdata/fubList.vue';
  import spList from './userdata/spList.vue';
  import wzList from './userdata/wzList.vue';
  import yu from './userdata/yu.vue';

  export default {
    name: 'xiaofei',
    components: {czList, fubList, spList, wzList, yu},
    created(){
      this.userID = this.$route.params.userID;
      if(this.userID == undefined) {
        this.$router.push({path: 'list'});
      }
    },
    data(){
      return {
        userID:'',
        radio: '1',
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
      }
    },
    methods:{
    },
  };
</script>

<style scoped>

</style>
