<template>
  <div>
    <el-button type="primary" class="addBtn" size="small" @click="add">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="real_name" label="姓名" width="220"></el-table-column>
      <el-table-column prop="hospital_name" label="医院" width="220"></el-table-column>
      <el-table-column prop="position" label="职位" width="220"></el-table-column>
      <el-table-column prop="beans" label="咨询费用" width="220"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="del(scope.$index, tableData)" type="text" size="small">删除</el-button>
          <el-button @click.native.prevent="changeDoc(scope.$index, tableData)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加医生"
      :visible.sync="dialogVisible"
      size="tiny">
      <el-input placeholder="请输入内容" v-model="name" maxlength="7" :disabled="type=='edit'?true:false">
        <template slot="prepend">姓名</template>
      </el-input>
      <br/>
      <br/>
      <el-input placeholder="请输入内容" v-model="zw" maxlength="7">
        <template slot="prepend">职务</template>
      </el-input>
      <br/>
      <br/>
      <el-input placeholder="请输入内容" v-model="yy" maxlength="5" :disabled="type=='edit'?true:false">
        <template slot="prepend">医院</template>
      </el-input>
      <br/>
      <br/>
      <el-input placeholder="请输入内容" v-model="sf" maxlength="5">
        <template slot="prepend">收费标准</template>
        <template slot="append">.00</template>
      </el-input>
      <br v-if="type=='add'"/>
      <br v-if="type=='add'"/>
      <el-input placeholder="请输入内容" v-model="account" maxlength="5" v-if="type=='add'">
        <template slot="prepend">账号</template>
      </el-input>
      <br v-if="type=='add'"/>
      <br v-if="type=='add'"/>
      <el-input placeholder="请输入内容" v-model="pass_word" maxlength="5" v-if="type=='add'">
        <template slot="prepend">密码</template>
      </el-input>
      <br/>
      <br/>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="医生简介"
        resize="none"
        maxlength = 500
        v-model="jianjie">
      </el-input>
      <br/>
      <br/>
      <span>照片</span>
      <div style="border: 1px solid #eee;width: 178px;">
        <el-upload
          v-model="headImg"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import { AdminGetDoctors, createDoctor, updateDoctor } from '../../interface';

  export default {
    name: 'docClass',
    data() {
      return {
        tableData: [],
        dialogVisible: false,
        imageUrl: '',
        jianjie: '',
        name: '',
        zw: '',
        yy: '',
        headImg: '',
        account: '',
        pass_word: '',
        sf: '',
        cid: '',
        type: 'add',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      add() {
        this.dialogVisible = true;
        this.type = 'add';
      },
      changeDoc(i, data){
        this.type = 'edit';
        this.dialogVisible = true;
        this.zw = data[i].position;
        this.name = data[i].real_name;
        this.jianjie = data[i].detail;
        this.sf = data[i].beans;
        this.yy = data[i].hospital_name;
        this.account = data[i].account;
        this.cid = data[i].id;
      },
      save() {
        let data = {
          real_name: this.name,
          doctor_icon: this.headImg,
          position: this.zw,
          detail: this.jianjie,
          beans: this.sf,
          detail_the_front: this.jianjie,
          hospital_name: this.yy,
          account: this.account,
          pass_word: this. pass_word,
        };
        let url = createDoctor();
        if (this.type === 'edit') {

          data = {
            doctor_icon: this.headImg,
            position: this.zw,
            detail: this.jianjie,
            beans: this.sf,
            detail_the_front: this.jianjie,
            id: this.cid,
          };
          url = updateDoctor();
        }
        this.$ajax({
          method: 'post',
          url: url,
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.dialogVisible = false
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });
      },
      getList() {
        this.$ajax({
          method: 'GET',
          url: AdminGetDoctors(),
        }).then((res) => {
          this.tableData = res.data;
        }).catch((error) => {
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    }
  };
</script>

<style scoped>
  .addBtn{
    margin: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed red;
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
