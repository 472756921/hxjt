<template>
  <div>
    <img src="http://iph.href.lu/300x140" style="width: 100%">
    <p>这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明</p>
    <br/>
    <div class="demonstration">选择病情关联人</div>
    <el-radio-group v-model="patient" size="small">
      <el-radio-button :label="child.id" key="i" v-for="(child, i) in data">{{child.real_name}}</el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <div class="demonstration">选择地点</div>
    <el-radio-group v-model="position" size="small" @change="getHospitals">
      <el-radio-button v-for="(it, i) in positionList" :label='it.id' :key='i'>{{it.city_name}}</el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <div class="demonstration">选择医院</div>
    <el-radio-group v-model="hospital" size="small">
      <el-radio-button :label="hospital.id"  v-for="(hospital, i) in hospitalList" key="i">{{hospital.hospital_name}}</el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <el-checkbox v-model="checked" size="large">我已于阅读并同意</el-checkbox>
    <a href="#/public/fuxie" style="color: #1D8CE0;">《小儿肺炎注射知情同意书》</a>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" >预约</el-button>
    <br/>
    <div class="center">
      <a href="#/user/pneumoniaStatus" class="link">历史记录</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { selectGuardianDetail, getCity, getHospitals, savePediatricPneumonia } from '../interface';

  export default {
    name: 'pneumonia',
    data() {
      return {
        patient: '',
        hospital: '',
        position: '',
        positionList: '',
        hospitalList: '',
        data: '',
        checked: false,
      };
    },
    created() {
      this.getList();
      this.getCity();
    },
    methods: {
      yy() {
        if (this.patient === '' || this.hospital === '' || this.position === '') {
          this.$message.warning('请选择预约地点医院和患者');
          return;
        }
        const json = {
          customer_id: 6,
          child_id: this.patient,
          hospital_id: this.hospital,
          city_id:　this.position,
        };
        this.$ajax({
          method: 'POST',
          url: savePediatricPneumonia(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
          data: json,
        }).then((res) => {
          if (res.data === 1) {
            this.$message.success('预约成功');
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      getList() {
        this.$ajax({
          method: 'GET',
          url: selectGuardianDetail(),
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      getCity() {
        this.$ajax({
          method: 'GET',
          url: getCity(),
        }).then((res) => {
          this.positionList = res.data.citys;
          this.getHospitals(this.positionList[0].id);
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      getHospitals(cityID) {
        this.$ajax({
          method: 'GET',
          url: getHospitals() +　'/?city_id=' + cityID,
        }).then((res) => {
          this.hospitalList = res.data.hospitals;
          this.hospital = '';
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    }
  };
</script>

<style scoped>

  .demonstration{
    color: #1D8CE0;
    margin-bottom: .3rem;
  }
  .link{
    color: #1D8CE0;
    text-decoration: none;
  }
</style>
