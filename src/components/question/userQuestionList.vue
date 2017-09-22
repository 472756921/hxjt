<template>
  <div>
    <p class="Warning">如果医生长时间没有回复您，可以申请退款拨打客服电话投诉</p>
    <div class="listContent" v-for="(item, i) in data" @click="go(item.status, item.id)">
      <div class="redpointer"></div>
      <img :src=item.icon style="float:left;">
      <div class="textContent">
        <div>与 {{item.real_name}} 的会话<small>（关联人:{{item.contact}}）</small></div>
        <div class="Blue" v-if="item.status == 1">正在进行
          <br/>
          <span class="op" @click="tksq(item.contactID, i)"> 申请退款 </span>
        </div>
        <div class="Success" v-if="item.status == 2">已完成</div>
        <div class="Warning" v-if="item.status == 3">退款中</div>
        <div class="danger" v-if="item.status == 4">已退款</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getConsultingListByCustomer } from '../interface';

  export default {
    name: 'userQuestionList',
    data() {
      return {
        data: '',
      };
    },
    methods: {
      go(status, id) {
        if(status === 1) {
          this.$router.push({ name: 'question', params: {id: id} })
        }
      },
      tksq(id, index) {
        window.event.stopPropagation();
        const r = confirm("申请退款后，将关闭会话，是否确认？")
        if (r === true) {
          this.$message.error('对不起，该会话不满足退款条件');
          return;
        }
        this.data[index].status = 3;
      },
      getList(){
        this.$ajax({
          method: 'GET',
          url: getConsultingListByCustomer() + '?customer_id=6&&page=1',
        }).then((res) => {
          this.data = res.data.consultings;
          console.log(res.data.consultings);
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
    created() {
      this.getList();
    },
  };
</script>

<style scoped>
  .listContent{
    padding: .8rem;
    background: #EFF2F7;
    margin-bottom: .2rem;
  }
  .textContent{
    margin: 0 0 0 4rem;
    line-height: 1.6rem;
    overflow: auto;
  }
  .op{
    color: #aaaaaa;
    font-size: 12px;
  }
  .redpointer{
    float: right;
    border-radius: 5px;
    width: 10px;
    height: 10px;
    background: #FF4949;
  }
</style>
