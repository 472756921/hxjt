<template>
  <div>
    <div>
      <el-input placeholder="请输入用户姓名/电话/身份证" v-model="search">
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="account" label="姓名" ></el-table-column>
      <el-table-column prop="phone" label="电话" ></el-table-column>
      <el-table-column prop="sex" label="性别" :formatter = 'formatter' ></el-table-column>
      <el-table-column prop="age" label="年龄"  ></el-table-column>
      <el-table-column prop="idNumber" label="身份证号码" width="200"></el-table-column>
      <el-table-column prop="ye" label="账户余额" ></el-table-column>
      <el-table-column prop="lastLoginDate" label="最后登录时间"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <span class="Blue cursor" @click="chang(scope.$index)">生理监控</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'list',
    methods: {
      del(index) {
        const r = confirm("确认删除？")
        if (r === true) {
          this.tableData.splice(index, 1);
        }
      },
      chang(index) {
        this.$router.push({ name: 'userDatile', params: { userID: this.tableData[index].userID } })
      },
      formatter(row, column) {
        if (row.sex === 1) {
          return '男';
        } else if (row.sex === 0){
          return '女';
        } else {
          return '未知';
        }
      },
    },
    data() {
      return {
        search: '',
        tableData: [{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          phone: '123123123',
          ye: 320,
          userID: 12,
          id: 1,
          idNumber: 49382839993829383922,
          age:33,
          sex: 1
        },{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          phone: 18830293,
          userID: 12,
          ye: 320,
          id: 1,
          age:33,
          idNumber: 49382839993829383922,
          sex: 0
        }, {
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          phone: 18830293,
          ye: 320,
          idNumber: 49382839993829383922,
          id: 1,
          age:33,
          sex: 2,
          userID: 12,
        },  ]
      }
    }
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .danger{
    cursor: pointer;
  }
</style>
