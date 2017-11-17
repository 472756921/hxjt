<template>
  <div style="padding: 10px;overflow:auto;">
    <h3>添加商品/服务包</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="添加商品" name="first">
        <el-row>
          <el-col :span="1" class="titla">名称：</el-col>
          <el-col :span="12"><input type="text" v-model="goods.goods_name"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="1" class="titla">价格：</el-col>
          <el-col :span="12"><input type="text" v-model="goods.price"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="1" class="titla">描述：</el-col>
          <el-col :span="12">
            <textarea style="resize: none" rows="5" cols="30" v-model="goods.describe"></textarea>
          </el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="6">
            <span>商品图片:</span>
            <br/>
            <br/>
            <el-upload
              class="avatar-uploader"
              action="http://www.schrtinfo.com/hrt/userManager/uploadImg/"
              :show-file-list="false"
              :data=data
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="showimage" :src="showimage" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #ccc"></i>
            </el-upload>
          </el-col>
        </el-row>
        <br/>
        <el-button type="primary" @click="newGoods">新增商品</el-button>
      </el-tab-pane>
      <el-tab-pane label="添加服务包" name="second">
        <el-row>
          <el-col :span="1" class="titla">名称：</el-col>
          <el-col :span="12"><input type="text" v-model="service.package_name"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="1" class="titla">价格：</el-col>
          <el-col :span="12"><input type="text" v-model="service.price"/></el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :span="1" class="titla">描述：</el-col>
          <el-col :span="12">
            <textarea style="resize: none" rows="5" cols="30" v-model="service.package_describe"></textarea>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="titla">等级：</el-col>
          <el-col :span="12">
            <el-select v-model="service.grade" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="titla">项目：</el-col>
          <el-col :span="23" :offset="1" class="titla" v-for="(it, i) in service.healthPackageDetailJsons" key="i">
            {{it.service_name}} - {{it.count}} 次
          </el-col>
          <el-col :span="23" :offset="1" class="titla"><el-button type="primary" size="mini" @click="show">添加服务项目</el-button></el-col>
        </el-row>
        <br/>
        <br/>
        <br/>
        <el-button type="primary" @click="addService">新增服务包</el-button>
      </el-tab-pane>
    </el-tabs>


    <el-dialog title="选择条目" :visible.sync="dialogVisible" size="small">
      <div>条目名称</div>
      <select style="width: 130px;height: 30px" v-model="item">
        <option v-for="(it, i) in serviceList" :value="i">{{it.service_name}}</option>
      </select>
      <br/>
      次数：
      <br/><input type="text" v-model="count"/>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getServiceGoods, createHealthPackage, createMedicalGoods} from '../../interface';

  export default {
    name: 'gl_addGoods',
    data() {
      return {
        activeName: 'first',
        dialogVisible: false,
        showimage: '',
        data: {pathType: 'pHead'},
        options: [
          {label: '普通服务包', value: '0'},
          {label: '普通会员', value: '1'},
          {label: '黄金会员', value: '2'},
          {label: '至尊会员', value: '3'},
        ],
        goods: {
          goods_name: '',
          describe: '',
          price: '',
          title_image: '',
          detail_image: [],
        },
        service: {
          grade: '',
          package_name: '',
          package_describe: '',
          price: '',
          healthPackageDetailJsons: [],
        },
        serviceList:[{service_name: '',id: ''}],
        item: '1',
        count: '',
      };
    },
    created(){
    },
    methods: {
      handleClick(tab, event) {
      },
      handleAvatarSuccess(res, file) {
        this.showimage = URL.createObjectURL(file.raw);
        this.goods.title_image = res;
      },
      add(){
        if(this.count == '') {
          this.$message.error('请输入次数');
          return
        }
        this.dialogVisible = false
        this.service.healthPackageDetailJsons = [...this.service.healthPackageDetailJsons,{health_service_id: this.serviceList[this.item].id,count: this.count,service_name:this.serviceList[this.item].service_name }];
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
      show(){
        this.dialogVisible = true;
        this.$ajax({
          method: 'GET',
          url:getServiceGoods(),
        }).then((res) => {
          this.serviceList = res.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      addService(){//添加服务包
        this.$ajax({
          method: 'POST',
          data: this.service,
          url: createHealthPackage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('添加成功');
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      newGoods(){//添加服务包
        this.$ajax({
          method: 'POST',
          data: this.goods,
          url: createMedicalGoods(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$message.success('添加成功');
        }).catch((error) => {
          this.$message.error(error.message);
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
