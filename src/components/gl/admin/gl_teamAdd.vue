<template>
  <div style="padding: 10px;overflow:auto;">
    <h3>添加团队</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row>
          <el-col :span="6" class="titla">团队名称：</el-col>
          <el-col :span="12"><input type="text"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">团队简介：</el-col>
          <el-col :span="12"><textarea style="resize: none" rows="5" cols="30"></textarea></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">管理员账号：</el-col>
          <el-col :span="12"><input type="text"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">管理员密码：</el-col>
          <el-col :span="12"><input type="password"/></el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <span>团队头像:</span>
        <br/>
        <br/>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="teamHeadImg" :src="teamHeadImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
      <el-col :span="6">
        <span>二维码图片:</span>
        <br/>
        <br/>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="teamCodeImg" :src="teamHeadImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
    </el-row>
    <br/>
    <br/>
    <el-button type="primary">新增团队</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'gl_teamAdd',
    data() {
      return {
        teamHeadImg: '',
        teamCodeImg: '',
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.teamHeadImg = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    }
  };
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
  input, textarea{
    border: 1px solid #ddd;
    width: 200px;
  }
  input{
    height: 24px;
  }
  .titla{
    line-height: 26px;
  }
</style>
