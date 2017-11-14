<template>
  <div>
    <div style="padding: .5rem">
      <el-input
        placeholder="输入名字搜索商品"
        icon="search"
        v-model="search"
        @change="handleIconClick"></el-input>
    </div>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" v-for="(doc, i) in docList" :key="i" style="padding: 12px">
        <el-card :body-style="{ padding: '0px' }">
          <img :src='doc.img' class="image" height="120px">
          <div style="padding: 6px;">
            <div class="center" style="font-size: 1.2rem">{{doc.service_name}}</div>
            <div>{{doc.describe}}</div>
            <div class="price">{{doc.price}} 健康豆</div>
            <div class="bottom clearfix">
              <el-button type="primary" class="center_block" @click="yy(doc)" size="small">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination layout="prev, pager, next" class="center" :page-size="20" :current-page="pageNow" :page-count="pageTotle" @current-change="changPage" ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import { customerGetMedicalGoods, customerPayMedicalGoods } from '../../interface';

  export default {
    name: 'gl_buy',
    data() {
      return {
        docList: '',
        docListCop: '',
        pageNow: 1,
        pageTotle: 1,
        search: '',
        currentDate: new Date()
      };
    },
    created() {
      this.getDocList(1);
    },
    methods: {
      changPage(pageNew){
        this.getDocList(pageNew);
      },
      handleIconClick() {
        if (this.search == '' || this.search == null) {
          this.docList = this.docListCop;
        } else {
          this.docList = [];
          this.docListCop.map((k,i) => {
            if (k.service_name.indexOf(this.search) != -1) {
              this.docList.push(k);
            }
          })
        }
      },
      getDocList(page) {
        this.$ajax({
          method: 'GET',
          url: customerGetMedicalGoods()+"?page="+page,
        }).then((res) => {
          this.docList = res.data.goods;
          this.docListCop = res.data.goods;
          this.pageNow = res.data.page;
          this.pageTotle = res.data.totalPage;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      yy(doc) {
        const r = confirm("该商品需要花费"+ doc.price +"点健康豆，是否确认购买？")
        if (r) {
          this.$ajax({
            method: 'POST',
            data:  {medical_goods_id: doc.id,price: doc.price,},
            url: customerPayMedicalGoods(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
              this.$message.success('购买成功');
          }).catch((error) => {
              this.$message.error('对不起您的余额不足以支付');
          });
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
