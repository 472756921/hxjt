<template>
  <div>
    <div>提问时间：{{create_date}}</div>
    <div style="margin: .6rem 0">问题描述</div>
    <div class="plan">{{questiones}}</div>
    <div style="overflow:hidden;height:13rem;margin-top: .6rem">
      <el-row :gutter="10">
        <el-col :span="12" v-for="(it, i) in img" key="i">
          <img :src=it width="100%" style="max-height: 12rem"/>
        </el-col>
      </el-row>
    </div>
    <div style="margin: 1rem 0">医生回复</div>
    <div class="plan">{{an}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getHealthConsultationDetail} from '../interface';

  export default {
    name: 'questionDatile',
    data() {
      return {
        dialogVisible: true,
        img: ['http://iph.href.lu/148x148','http://iph.href.lu/148x148'],
        questiones: "我头疼大半年了，怎么治疗都不管用啊，我改怎么办啊？",
        an: '',
        create_date: '',
      }
    },
    created(){
      this.getinfo();
    },
    methods: {
      getinfo(){
        this.$ajax({
          method: 'get',
          url: getHealthConsultationDetail()+"?id="+this.$route.params.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.questiones = res.data.detail.describe;
          this.an = res.data.detail.reply;
          if(this.an == null) {
            this.an = '暂无回复';
          };
          this.create_date = res.data.detail.create_date;
          this.img = res.data.detail.imgs;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>
  .fileInput{
    width: 70px;
    opacity: 0;
    position: absolute;
  }
  .chooes{
    left: 7px;
    width: 70px;
    margin-top: 1px;
    background: #1D8CE0;
    color: #fff;
    border: 1px solid #1D8CE0;
    padding: .3rem;
    border-radius: 4px;
  }
  .pointer{
    color: #1D8CE0;
    font-size: .8rem;
  }
  .plan{
    background: #eee;
    padding: .8rem;
  }
</style>
