<template>
  <div class="content">
    <h3>肺炎接种记录</h3>
    <div class="card" v-for="(item, i) in data">
      <div class="name">{{item.child_name}}</div>
      <div><span>{{item.child_month}} 月龄</span> - <span>共 {{item.count}} 针</span></div>
      <div>预约地点：{{item.hospital_name}}</div>
      <div>注射记录：</div>
      <div>
        <div class="indate" v-for="(di, dindex) in item.details">第{{dindex+1}}针  {{di.create_date==null?'未安排时间':di.create_date}} <span v-if="di.status == 2">已注射</span><span v-if="di.status == 1" class="danger">未注射</span></div>
      </div>
      <div class="create">创建时间：{{item.create_date}}</div>
      <i class="iconfont icon-jinhangzhong2 icons" v-if="item.status == 1" style="font-size: 4rem;color:#4679ed"></i>
      <i class="iconfont icon-wancheng icons" v-if="item.status == 2" style="font-size: 5.5rem;color:green"></i>
      <i class="iconfont icon-yituikuan icons" v-if="item.status == 3" style="font-size: 4rem;color:red"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getPediatricPneumoniaList } from '../interface';

  export default {
    name: 'pneumoniaStatus',
    data() {
      return {
        data: '',
      };
    },
    created() {
      this.getlist();
    },
    methods: {
      getlist() {
        this.$ajax({
          method: 'GET',
          url: getPediatricPneumoniaList()+'?customer_id=6',
        }).then((res) => {
          this.data = res.data.PediatricPneumonias;
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
  .name{
    font-size: 1.1rem;
    color: #1D8CE0;
  }
  .card{
    font-size: .8rem;
    background-color: #EFF2F7;
    padding: .8rem;
    position: relative;
    margin: .2rem;
  }
  .create{
    color: #aaa;
    font-size: .6rem;
    text-align: right;
  }
  .indate{
    margin: 0 .4rem;
    line-height: 1.5rem;
    color: #1D8CE0;
  }
  .icons{
    font-size: 5rem;
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
</style>
