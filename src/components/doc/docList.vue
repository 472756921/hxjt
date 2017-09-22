<template>
  <div>
    <div style="width: 10rem;padding: .5rem">
      <el-input
        placeholder="输入名字点击搜索"
        icon="search"
        v-model="search"
        @change="handleIconClick"
        >
      </el-input>
    </div>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" v-for="(doc, i) in docList" :key="i" style="padding: 12px">
        <el-card :body-style="{ padding: '0px' }">
          <img :src='doc.doctor_icon' class="image">
          <div style="padding: 6px;">
            <div class="center">{{doc.real_name}}</div>
            <div>{{doc.detail_the_front}}</div>
            <div class="bottom clearfix">
              <el-button type="primary" class="center_block" @click="yy(doc)">咨询</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getDocList } from '../interface';

  export default {
    name: 'docList',
    data() {
      return {
        docList: '',
        docListCop: '',
        search: '',
        currentDate: new Date()
      };
    },
    created() {
      this.getDocList();
    },
    methods: {
      handleIconClick() {
        if (this.search == '' || this.search == null) {
          this.docList = this.docListCop;
        } else {
          this.docList = [];
          this.docListCop.map((k,i) => {
            if (k.real_name.indexOf(this.search) != -1) {
              this.docList.push(k);
            }
          })
        }
      },
      getDocList() {
        this.$ajax({
          method: 'GET',
          url: getDocList(),
        }).then((res) => {
          this.docList = res.data.doctors;
          this.docListCop = res.data.doctors;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      yy(doc) {
        this.$router.push({ name: 'docInfo', params: {doc: doc} })
      }
    },
  };
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
