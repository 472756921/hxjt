<template>
  <div style="padding: 10px;overflow:auto;">
    <h3>添加团队</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row>
          <el-col :span="6" class="titla">团队名称：</el-col>
          <el-col :span="12"><input type="text" v-model="data.group.group_name"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">团队简介：</el-col>
          <el-col :span="12"><textarea style="resize: none" rows="5" cols="30" v-model="data.group.group_describe"></textarea></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">医生姓名：</el-col>
          <el-col :span="12"><input type="text" v-model="data.doctor.doctor_name"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">管理员账号：</el-col>
          <el-col :span="12"><input type="text" v-model="data.doctor.doctor_account"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6" class="titla">管理员密码：</el-col>
          <el-col :span="12"><input type="password" v-model="data.doctor.doctor_password"/></el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <span>团队头像:</span>
        <br/>
        <br/>
        <el-upload
          class="avatar-uploader"
          action="http://www.schrtinfo.com/hrt/userManager/uploadImg/"
          :show-file-list="false"
          :data=dData
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="doctor_icon" :src="doctor_icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
      <el-col :span="6">
        <span>二维码图片:</span>
        <br/>
        <br/>
        <el-upload
          class="avatar-uploader"
          action="http://www.schrtinfo.com/hrt/userManager/uploadImg/"
          :show-file-list="false"
          :data=cData
          :on-success="handleAvatarSuccess2"
          :before-upload="beforeAvatarUpload">
          <img v-if="group_code" :src="group_code" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
        </el-upload>
      </el-col>
    </el-row>
    <br/>
    <br/>
    <el-button type="primary" @click="save">新增团队</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {createGroup} from '../../interface';

  export default {
    name: 'gl_teamAdd',
    data() {
      return {
        dData: {pathType: 'dHead'},
        cData: {pathType: 'cHead'},
        doctor_icon: '',
        group_code: '',
        data:{
          group:{
            group_name: '',
            group_describe: '',
            group_code: '',
          },
          doctor: {
            doctor_name: '',
            doctor_icon: '',
            doctor_account: '',
            doctor_password: '',
            doctor_position: 'none',
            doctor_describe: 'none',
          },
        },
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.data.doctor.doctor_icon = res;
        this.doctor_icon = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess2(res, file) {
        this.data.group.group_code = res;
        this.group_code = URL.createObjectURL(file.raw);
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
      save(){
        let of = true;
        Object.entries(this.data).map((i) => {
          Object.entries(i[1]).map((j) => {
            console.log(j)
            if(j[1] == '') {
              this.$message.error('请填写用户信息并上传团队图片');
              of = false;
            }
          })
        })
        if(!of){
          return
        }
        this.$ajax({
          method: 'POST',
          data: this.data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
          url: createGroup(),
        }).then((res) => {
          this.$message.success('添加成功！');
        }).catch((error) => {
          this.$message.error('网络异常请稍候');
        });
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
