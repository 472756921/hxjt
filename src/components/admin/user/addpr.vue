<template>
  <div>
    <el-button type="primary" size="small" @click="inpure">录入生理指标</el-button>

    <el-dialog title="录入生理指标" :visible.sync="dialogVisible" size="samll">
      <el-date-picker value-format="yyyy-MM-dd HH:mm" v-model="datetime" size="small" format="yyyy-MM-dd HH:mm" style="width: 100%" type="datetime" placeholder="选择测量时间"  @change="shureDate"></el-date-picker>
      <br/>
      <br/>
      <el-input  v-model="blood_sugar" size="small" :maxlength=4><template slot="prepend">血糖</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="heart_rate" size="small" :maxlength=4><template slot="prepend">心率</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="blood_pressure" size="small" :maxlength=3><template slot="prepend">血压(低)</template></el-input>
      <br/>
      <br/>
      <el-input  v-model="blood_pressure2" size="small" :maxlength=3><template slot="prepend">血压(高)</template></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="push">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {uploadHealthData} from '../../interface';

  export default {
    name: 'addpr',
    data(){
      return{
        dialogVisible: false,
        datetime: '',
        blood_pressure: '',
        blood_pressure2: '',
        blood_sugar: '',
        heart_rate: '',
        blood_sugar: '',
      };
    },
    props: {
      userID: Number,
      userID2: Number,
    },
    methods: {
      shureDate(d){
        this.datetime = d;
      },
      inpure(){
        this.dialogVisible = true;
      },
      push(){
        let id;
        if(this.userID == undefined){
          id = this.userID2;
        }
        if(this.userID2 == undefined){
          id = this.userID;
        }
        const data = {customer_id: id, heart_rate: this.heart_rate, blood_pressure: this.blood_pressure+'/'+this.blood_pressure2, blood_sugar: this.blood_sugar, create_date: this.datetime};
        this.$ajax({
          method: 'POST',
          data: data,
          url: uploadHealthData(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data==1) {
            this.$message.success('添加成功');
            this.dialogVisible = false;
          }
        }).catch((error) => {
          console.log(error)
          this.$message.error(error.message);
        });
      },
    },
  };
</script>

<style scoped>

</style>
