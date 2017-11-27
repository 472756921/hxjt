<template>
  <div  style="padding: 10px 2px; overflow:auto;">
    <el-radio v-model="radio" label="2">服务包消费记录</el-radio>
    <el-radio v-model="radio" label="3">商品消费记录</el-radio>
    <el-radio v-model="radio" label="4">在线问诊记录</el-radio>
    <el-radio v-model="radio" label="5">预约面对面记录</el-radio>
    <el-radio v-model="radio" label="6">预约电话服务记录</el-radio>
    <!--<el-radio v-model="radio" label="6">剩余服务项目</el-radio>-->
    <fubList v-if="radio==2" :userID='userID'/>
    <spList v-if="radio==3" :userID='userID'/>
    <wzList v-if="radio==4" :userID='userID'/>
    <yu v-if="radio==5" :userID='userID'/>
    <yuPhone v-if="radio==6" :userID='userID'/>
    <!--<div v-for="(it, i) in serviceTime" v-if="radio==6">-->
      <!--{{it.service_name}} - {{it.service_count}} 次-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import fubList from './userdata/fubList.vue';
  import spList from './userdata/spList.vue';
  import wzList from './userdata/wzList.vue';
  import yu from './userdata/yu.vue';
  import yuPhone from './userdata/yuPhone.vue';
  import {getGroupCustomerMessage} from '../../interface';

  export default {
    name: 'xiaofei',
    components: { fubList, spList, wzList, yu, yuPhone },
    created(){
      this.userID = this.$route.params.userID;
      if(this.userID == undefined) {
        this.$router.push({path: 'list'});
      }
    },
    data(){
      return {
        userID:'',
        radio: '2',
        tableData: [],
        pageNow: 1,
        pageTotle: 1,
        serviceTime: [],
      }
    },
    methods:{
      get(){
        this.$ajax({
          method: 'GET',
          url: getGroupCustomerMessage()+"?customer_id="+this.userID,
        }).then((res) => {
          this.serviceTime = res.data.service_detail;
        })
      }
    },
  };
</script>

<style scoped>

</style>
