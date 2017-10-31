<template>
  <div>
    <el-button type="primary" size="small" @click="inpure">录入生理指标</el-button>

    <el-dialog title="录入生理指标" :visible.sync="dialogVisible" :before-close="handleClose" size="samll">
      <el-date-picker v-model="datetime" size="small" style="width: 100%" type="datetime" placeholder="选择测量时间"></el-date-picker>
      <br/>
      <br/>
      <el-input  v-model="blood_sugar" size="small" :maxlength=4><template slot="prepend">血糖</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="heart_rate" size="small" :maxlength=4><template slot="prepend">心率</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="blood_pressure" size="small" :maxlength=2><template slot="prepend">血压(低)</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="blood_pressure2" size="small" :maxlength=2><template slot="prepend">血压(高)</template></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'addpr',
    data(){
      return{
        dialogVisible: false,
        datetime: '',
        blood_sugar: '',
        blood_sugar2: '',
        heart_rate: '',
        blood_sugar: '',
      };
    },
    methods: {
      inpure(){
        this.dialogVisible = true;
      },
    },
  };
</script>

<style scoped>

</style>
