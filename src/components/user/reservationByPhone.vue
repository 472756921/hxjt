<template>
  <div class="content">
    <img src="../../assets/doctor.jpg" width="100%"/>
    <h3>预约电话咨询</h3>
    <div class="text">
      这里是一些预约服务的介绍，这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍这里是一些预约服务的介绍
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy">我要预约</el-button>
    <br/>
    <div style="text-align:center;color: #ff8746;font-size: 12px;">（预约成功后，将会有专家亲自致电与您沟通）</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'reservationByPhone',
    data() {
      return {
      };
    },
    created(){
    },
    methods: {
    }
  };
</script>
<style scoped>
  .demonstration{
    color: #333;
    margin-bottom: .3rem;
    font-size: 15px;
  }
  .textCenter{
    text-align: center;
    color: #409EFF;
  }
  .text{
    line-height: 1.6rem;
  }
  .content{
    background-color: #F9FAFC;
  }
  .center_block{
    display: block;
    margin: 0 auto;
  }
</style>
