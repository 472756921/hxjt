<template>
  <div class="center">
    <h3>上传个人头像</h3>
    <div style="text-align: left" class="Blue">图片大小不得超过2M，上传头像图片只能是 JPG 格式</div>
    <br/>
    <div class="bor">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="over" v-if="loading">
      <i class="el-icon-loading iconL"></i>
      <div class="loText">正在上传</div>
    </div>
    <el-button type="primary" @click="save">确认</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {updateCustomerIcon} from '../interface';

    export default {
      name: 'userHeadUplode',
      data() {
        return {
          imageUrl: '',
          loading: false,
        };
      },
      created() {
        const par = this.$route.params.params;
      },
      methods: {
        save(){
          this.$ajax({
            method: 'POST',
            data: {"icon_url": this.imageUrl},
            url: updateCustomerIcon(),
          }).then((res) => {
            if(res.data == 1) {
              this.$message.success('上传成功');
            }
          }).catch((error) => {
            this.$message.error(error.message);
          });
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
          this.loading = false;
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            return false;
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            return false;
          }
          this.loading = true;
          return isJPG && isLt2M;
        }
      }
    };
</script>

<style scoped>
  .iconL{
    font-size: 3rem;
    margin-top: 50%;
  }
  .loText{
    margin-top: .8rem;
    font-size: 1rem;
  }
  .over{
    color: #1D8CE0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eee;
    opacity: .8;
    top: 0;
    left: 0;
  }
  .bor{
    border: 1px solid #eee;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
