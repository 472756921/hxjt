<template>
  <div style="overflow:auto;padding: 1rem">
    <div class="block" style="margin: 1rem; float: left">
      <span class="demonstration">坐诊时间：</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        format="yyyy-MM-dd HH:mm"
        @change="getSTime"
        placeholder="选择日期"
        value-format="yyyy-MM-dd HH:mm"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <el-button type="primary" style="margin: 1rem; float: left" size="medium" @click="addDate">添加时间</el-button>
    <el-table :data="tableData">
      <el-table-column prop="visit_time" label="日期" :formatter="formatter"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getVisitTimeList, saveVisitTime} from '../../interface';

    export default {
      name: 'treatmentSet',
      data() {
        return {
          pickerOptions0: {
            disabledDate(time) {
              return time.getTime() < Date.now();
            }
          },
          value1: '',
          tableData: [],
        };
      },
      created(){
        this.getList();
      },
      methods:{
        getSTime(date){
          this.value1 = date;
        },
        addDate(){
          if (this.tableData.length >=3 ){
            this.$message.error('已设置最近三次坐诊，不能再次设置');
            return false;
          }
          if (this.value1 == '') {
            this.$message.error('选择坐诊时间');
            return false;
          }
          this.$ajax({
            method: 'post',
            url: saveVisitTime(),
            data: {visit_time: this.value1},
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$message.success('添加成功');
            window.location.reload();
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        },
        formatter(row, c, cell){
          return row.visit_time.split(':')[0] + '点'
        },
        getList(){
          this.$ajax({
            method: 'GET',
            url: getVisitTimeList(),
          }).then((res) => {
            this.tableData = res.data;
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        },
      },
    };
</script>

<style scoped>

</style>
