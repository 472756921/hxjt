<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" @row-click="push">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="status" label="状态" :formatter = 'formatter'></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'question_List',
    data() {
      return {
        textarea: '',
        dialogVisible: true,
        img: [],
        fileNow: '',
        tableData: [{
          id:1,
          date: '2016-05-02',
          status: 1,
        }, {
          id:2,
          date: '2016-05-04',
          status: 1,
        }, {
          id:3,
          date: '2016-05-01',
          status: 0,
        }, {
          id:4,
          date: '2016-05-03',
          status: 1,
        }],
      }
    },
    methods: {
      formatter(r, i){
        if(r.status == 1) {
          return '已回复';
        } else {
          return '未回复';
        }
      },
      tableRowClassName(row, index) {
        if (row.status == 1) {
          return 'gos';
        }
        return '';
      },
      push(row, e, c){
        this.$router.push({path:'questionDatile/'+row.id})
      }
    },
  };
</script>

<style>
  .gos {
    color: green;
  }
</style>
