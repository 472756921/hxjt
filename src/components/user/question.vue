<template>
  <div>
    <h3 style="margin: .4rem 0;">网上问答<small style="float: right;">剩余次数：3</small></h3>
    <div style="margin: .6rem 0">输入问题描述</div>
    <el-input
      type="textarea"
      :rows="3"
      :maxlength="300"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div style="margin: .6rem 0">
      <div style="margin: .4rem 0;font-size: .6rem;color: #FF4949">上传相关描述图片（支持jpg，png类型的文件上传，大小在2M以内）</div>
      <input type=file value="添加图片" class="fileInput" @change="clickUp" ref="fileNow"/>
      <button class="chooes">选择图片</button>
    </div>
    <div style="height:260px">
      <el-row>
        <el-col :span="12" v-for="(it, i) in img" key="i">
          <img :src=it width="100%"/>
        </el-col>
      </el-row>
    </div>
    <el-button type="danger" style="margin: 10px auto;display: block;">提交问题</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'question',
    data() {
      return {
        textarea: '',
        dialogVisible: true,
        img: [],
        fileNow: '',
      }
    },
    methods: {
      submitUpload() {

      },
      question() {

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
</style>
