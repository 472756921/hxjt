<template>
  <div>
    <div class="head center">
      <div class="titleB">吴刚</div>
      <div>主治医生</div>
    </div>
    <div class="talk">
      <span  v-for="(o, index) in egData">
        <UserSay v-if="o.role === 1" :content="o.content"></UserSay>
        <DocSay v-if="o.role === 0" :content="o.content"></DocSay>
      </span>
      <span id="nn"></span>
    </div>
    <div class="ask">
      <textarea rows="4" maxlength="200" v-model="sendMessage"></textarea>
      <button class="send"  @click="send">发送</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserSay from './userSay';
  import DocSay from './docSay';
  import { saveConsultingDetail, getConsultingDetails } from '../interface';

  export default {
    name: 'question',
    components: { UserSay, DocSay},
    data() {
      return {
        tid: '',
        sendMessage: '',
        egData: '',
      };
    },
    created() {
      const par = this.$route.params;
      if ('id' in par) {
        this.tid = par.id;
        this.getList();
      }
    },
    methods: {
      getList() {
        this.$ajax({
          method: 'GET',
          dataType: 'JSON',
          url: getConsultingDetails() + "?consulting_id=" + this.tid + '&&isDoctor=0' ,
        }).then((res) => {
          this.egData = res.data.consultingDetails;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      send() {
        if (this.sendMessage === '') {
          return;
        } else {
          const data = {
            role: 1,
            content: this.sendMessage,
            consulting_id: this.tid,
          };
          this.$ajax({
            method: 'POST',
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            url: saveConsultingDetail(),
          }).then((res) => {

          }).catch((error) => {
            this.$message.error(error.message);
          });

          const message = { content: this.sendMessage, role: 1, };
          this.egData = [...this.egData, message];
          this.sendMessage = '';
          let anchor = document.getElementById('nn').offsetTop;
          anchor += 200;
          document.body.scrollTop = anchor;
        }
      },
    },
  };
</script>

<style scoped>
  .head{
    background-color: #1D8CE0;
    color: #fff;
    padding: .6rem 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    height: 2.6rem;
    z-index: 1;
  }
  .talk{
    margin-top: 4rem;
    width: 100%;
    overflow: auto;
    margin-bottom: 4.5rem;
    padding-bottom: 2.5rem;
    background: #F9FAFC;
  }
  .talkinfo{
    width: 65%;
    margin: 0 1rem;
    word-break: break-all;
    background-color: #D3DCE6;
    padding: .6rem;
    border-radius: .4rem;
    font-size: .8rem;
  }
  .doctalkinfo{
    float: left;
  }
  .doctalkinfo:before{
    position: absolute;
    margin-left: -1.2rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent #D3DCE6 transparent transparent;
  }
  .docSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
  .usertalkinfo{
    float: right;
    background: #8492A6;
    color: #fff;
  }
  .usertalkinfo:before{
    float: right;
    margin-right: -1.1rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 0 10px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #8492A6;
  }
  .userSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
  .ask{
    position: fixed;
    width: 100%;
    left: 0;
    padding: 0;
    margin: 0;
    height: 4.1rem;
    border-top: 1px solid #D3DCE6;
    bottom: 0;
    background: #fff;
  }
  textarea{
    width: 68%;
    resize: none;
    border: none;
  }
  .send{
    font-family: Microsoft YaHei;
    width: 30%;
    float: right;
    height: 4.1rem;
    background: #1D8CE0;
    color: #fff;
    font-size: 1rem;
    border: none;
  }
  .send:active{
    background: #F7BA2A;
  }
</style>
