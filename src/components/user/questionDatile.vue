<template>
  <div>
    <div style="margin: .6rem 0">输入问题描述</div>
    <div class="plan">{{questiones}}</div>
    <div style="height:160px;margin-top: .6rem">
      <el-row :gutter="10">
        <el-col :span="12" v-for="(it, i) in img" key="i">
          <img :src=it width="100%"/>
        </el-col>
      </el-row>
    </div>
    <div style="margin: .6rem 0">医生回复</div>
    <div class="plan">{{questiones}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'questionDatile',
    data() {
      return {
        textarea: '',
        dialogVisible: true,
        img: ['http://iph.href.lu/148x148','http://iph.href.lu/148x148'],
        fileNow: '',
        questiones: "我头疼大半年了，怎么治疗都不管用啊，我改怎么办啊？",
      }
    },
    methods: {
      hisqu() {
        this.$router.push({name: 'question_List'});
      },
      clickUp() {
        let file = this.$refs.fileNow.files[0];
        if (!/image\/\w+/.test(file.type)) {
          this.$message.error('只能上传图片');
          return false;
        }
        if(this.img.length > 1) {
          this.$message.error('上传图片不能超过两张');
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          this.img = [...this.img, e.target.result];
        }.bind(this);
      }
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
