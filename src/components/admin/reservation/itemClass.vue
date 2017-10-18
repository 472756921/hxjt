<template>
  <div>
    <el-button type="primary" class="addBtn" size="small" @click="dialogVisible = true">添加</el-button>
    <el-button type="primary" class="addBtn" size="small" @click="getCity">返回</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="city_name" v-if="cg==1" label="地点"></el-table-column>
      <el-table-column prop="hospital_name" v-if="cg==2" label="医院"></el-table-column>
      <el-table-column prop="principal_name" v-if="cg==2" label="接口人姓名"></el-table-column>
      <el-table-column prop="principal_phone" v-if="cg==2" label="接口人电话号码"></el-table-column>
      <el-table-column prop="principal_id_number" v-if="cg==2" label="接口人身份证"></el-table-column>
      <el-table-column prop="department.department_name" v-if="cg==3" label="科室"></el-table-column>
      <el-table-column prop="price" v-if="cg==3" label="费用标准"></el-table-column>
      <el-table-column prop="status" label="状态(1启用，0禁用)" ></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="changeC(scope.$index, tableData)" v-if="cg!=3" type="text" size="small">详情</el-button>
          <el-button @click.native.prevent="changeJiekou(scope.$index, tableData)" v-if="cg==2" type="text" size="small">修改接口人</el-button>
          <el-button @click.native.prevent="del(scope.$index, tableData)" type="text" size="small">禁用/启用</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <div>请选择添加内容</div>
      <br/>
      <el-radio class="radio" v-model="addClass" label="1">地点</el-radio>
      <el-radio class="radio" v-model="addClass" label="2">医院</el-radio>
      <el-radio class="radio" v-model="addClass" label="3">科室</el-radio>
      <el-radio class="radio" v-model="addClass" label="4">科室名称</el-radio>
      <div>
        <br/>
        <el-input v-if="addClass==1" v-model="addsp" placeholder="请输入地点"></el-input>
        <el-select v-model="addsp" placeholder="请选择" v-if = 'addClass==2'>
          <el-option
            v-for="(item, i) in sp"
            :key="i"
            :label="item.city_name"
            :value="item.id">
          </el-option>
        </el-select>
        <br v-if="addClass == 2"/>
        <br v-if="addClass == 2"/>
        <el-input v-if="addClass==2" v-model="addhs" placeholder="请输入医院"></el-input>
        <br v-if="addClass == 2"/>
        <br v-if="addClass == 2"/>
        <el-input v-if="addClass==2" v-model="addjkName" placeholder="接口人姓名"></el-input>
        <br v-if="addClass == 2"/>
        <br v-if="addClass == 2"/>
        <el-input v-if="addClass==2" v-model="addjkPhone" placeholder="接口人电话"></el-input>
        <br v-if="addClass == 2"/>
        <br v-if="addClass == 2"/>
        <el-input v-if="addClass==2" v-model="addjkIDN" placeholder="接口人身份"></el-input>

        <el-select v-model="addsp" placeholder="请选择地点" v-if = 'addClass==3' @change="getHospitals">
          <el-option
            v-for="(item, i) in sp"
            :key="i"
            :label="item.city_name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="addhs" placeholder="请选择医院" v-if = 'addClass==3'>
          <el-option
            v-for="(item, i) in hs"
            :key="i"
            :label="item.hospital_name"
            :value="item.id">
          </el-option>
        </el-select>
        <br v-if="addClass == 3"/>
        <br v-if="addClass == 3"/>
        <el-select v-model="addks" placeholder="请选择科室" v-if = 'addClass==3'>
          <el-option
            v-for="(item, i) in ksList"
            :key="i"
            :label="item.department_name"
            :value="item.id">
          </el-option>
        </el-select>
        <br v-if="addClass == 3"/>
        <br v-if="addClass == 3"/>
        <el-input v-if="addClass==3" v-model="jg" placeholder="请输入预约价格"></el-input>

        <el-input v-if="addClass==4" v-model="addks" placeholder="请输入科室名称"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getCity, getHospitals, getHospitalDetails, getdepartments, createCity, createHospital, createHospitalDetail, createDepartment, updateCityStatus, updateHospitalStatus, updateHospitalDetailStatus } from '../../interface';

  export default {
    name: 'itemClass',
    data() {
      return {
        sp: '',
        hs: '',
        ksList: '',
        tableData: [],
        addClass: '1',
        dialogVisible: false,
        addsp: '',
        addhs: '',
        addks: '',
        jg: '',
        cg: 1,
        addjkName: '',
        addjkPhone: '',
        addjkIDN: '',
      };
    },
    watch: {
      addClass (newData, oldData) {
        this.addsp = '';
        this.addhs = '';
        this.addks = '';
      },
    },
    created(){
      this.getCity();
      this.getDepartment();
    },
    methods: {
      del(i ,datas) {
        let data = '';
        if(this.cg == 1) {
          data = {
            city_id: datas[i].id,
            status: datas[i].status==0?1:0,
          };
          this.$ajax({
            method: 'POST',
            url: updateCityStatus(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.tableData[i].status = datas[i].status==0?1:0;
          }).catch((error) => {
          });
        }
        if(this.cg == 2) {
          data = {
            hospital_id: datas[i].id,
            status: datas[i].status==0?1:0,
          };
          this.$ajax({
            method: 'POST',
            url: updateHospitalStatus(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.tableData[i].status = datas[i].status==0?1:0;
          }).catch((error) => {
          });
        }
        if(this.cg == 3) {
          data = {
            id: datas[i].id,
            status: datas[i].status==0?1:0,
          };
          this.$ajax({
            method: 'POST',
            url: updateHospitalDetailStatus(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.tableData[i].status = datas[i].status==0?1:0;
          }).catch((error) => {
          });
        }
      },
      changeJiekou(i, data) {

      },
      changeC(i, tableData) {
        const data = tableData[i];
        if (this.cg === 1) {
          this.$ajax({
            method: 'GET',
            url: getHospitals() +　'/?city_id=' + data.id,
          }).then((res) => {
            this.tableData = res.data.hospitals;
          }).catch((error) => {
          });
        }
        if (this.cg === 2) {
          this.$ajax({
            method: 'GET',
            url: getHospitalDetails() +　'/?hospital_id=' + data.id,
          }).then((res) => {
            this.tableData = res.data.details;
          }).catch((error) => {
          });
        }
        this.cg += 1;

      },
      getCity() {
        this.cg = 1;
        this.$ajax({
          method: 'GET',
          url: getCity(),
        }).then((res) => {
          this.sp = res.data.citys;
          this.tableData = res.data.citys;
        }).catch((error) => {
        });
      },
      getHospitals() {
        this.$ajax({
          method: 'GET',
          url: getHospitals() +　'/?city_id=' + this.addsp,
        }).then((res) => {
          this.addhs = '';
          this.hs = res.data.hospitals;
        }).catch((error) => {
        });
      },
      getDepartment() {
        this.$ajax({
          method: 'GET',
          url: getdepartments(),
        }).then((res) => {
          this.ksList = res.data.departments;
        }).catch((error) => {
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      add() {
        let data = '';
        if (this.addClass == 1) {
          if (this.addsp == '') {
            return false;
          }
          data = {city_name: this.addsp};
          this.$ajax({
            method: 'post',
            url: createCity(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.dialogVisible = false;
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
        if (this.addClass == 2) {
          if (this.addsp == '' ||  this.addjkName == '' || this.addhs == '' || this.addjkPhone == '' || this.addjkIDN == '') {
            return false;
          }
          data = {
            hospital_name: this.addhs,
            describe: '',
            principal_name: this.addjkName,
            principal_phone: this.addjkPhone,
            principal_id_number: this.addjkIDN,
            city_id:  this.addsp,
          };
          this.$ajax({
            method: 'post',
            url: createHospital(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.dialogVisible = false;
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
        if (this.addClass == 3) {
          if (this.addsp == '' || this.addhs == '' || this.addks == '' || this.jg == '') {
            return false;
          }
          data = {
            hospital_id: this.addhs,
            department_id: this.addks,
            price: parseInt(this.jg),
          };
          this.$ajax({
            method: 'post',
            url: createHospitalDetail(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.dialogVisible = false;
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
        if (this.addClass == 4) {
          if (this.addks == '') {
            return false;
          }
          data = {
            describe: this.addhs,
            department_name: this.addks,
          };
          this.$ajax({
            method: 'post',
            url: createDepartment(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.dialogVisible = false;
            this.getDepartment();
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
    },
  };
</script>

<style scoped>
  .addBtn{
    margin: 10px;
  }
</style>
