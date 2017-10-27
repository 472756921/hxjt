<template>
  <div>
    <div style="padding: .5rem">
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
            <div class="center">{{doc.goods_name}}</div>
            <div>{{doc.goods_describe}}</div>
            <div class="price">111 健康豆</div>
            <div class="bottom clearfix">
              <el-button type="primary" class="center_block" @click="yy(doc)" size="small">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getGoodsList } from '../interface';

  export default {
    name: 'buyService',
    data() {
      return {
        docList: '',
        docListCop: '',
        search: '',
        currentDate: new Date()
      };
    },
    created() {
      this.getDocList(1);
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
      getDocList(page) {
        this.$ajax({
          method: 'GET',
          url: getGoodsList()+"?page="+page,
        }).then((res) => {
          this.docList = res.data.consultingList;
          this.docListCop = res.data.consultingList;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      yy(doc) {
        const r = confirm("确认购买该服务包？")
        if (r) {
        } else {
        }
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
  .price{
    color: darkred;
    font-size:  .6rem;
    margin-top: .4rem;
  }
  .clearfix:after {
    clear: both
  }
</style>
