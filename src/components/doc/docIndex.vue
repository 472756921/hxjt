<template>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="last_update_date" label="日期" width="180"></el-table-column>
        <el-table-column  prop="real_name" label="用户姓名" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button @click.native.prevent="back(scope.$index, tableData)" type="text" size="small">回复</el-button>
            <el-button @click.native.prevent="colse(scope.$index, tableData)" type="text" size="small" style="color: red;">关闭问题</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getConsultingListByDoctor, closeTheConsulting } from '../interface';

    export default {
      name: 'docIndex',
      created() {
        const userdata = JSON.parse(sessionStorage.getItem('user'));
        this.docID = userdata.doctor.id;
        this.getList(1);
      },
      methods: {
        back(index, rows) {
          const id = rows[index].id;
          this.$router.push({ name: 'chart', params: { id: id } });
        },
        colse(index, rows) {
          const r = confirm("确认完成并关闭会话？关闭后用户将无法继续向您提问")
          const id = rows[index].id;
          const data = {id: id};
          if (r === true) {
            this.$ajax({
              method: 'POST',
              data: data,
              dataType: 'JSON',
              contentType: 'application/json;charset=UTF-8',
              url: closeTheConsulting(),
            }).then((res) => {
              rows.splice(index, 1);
            }).catch((error) => {
              this.$message.error(error.message);
            });
          }
        },
        getList(page) {
          this.$ajax({
            method: 'GET',
            url: getConsultingListByDoctor() + "?doctor_id=" + this.docID + "&&page=" + page,
          }).then((res) => {
            this.tableData = res.data.consultings;
          }).catch((error) => {
          });
        }
      },
      data() {
        return {
          tableData: [],
          docID: '',
        };
      },
    };
</script>

<style scoped>
</style>
