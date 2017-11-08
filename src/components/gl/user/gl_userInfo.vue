<template>
  <div>
    <div class="loding"></div>
    <div>
      <div class="userInfoHead">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div>健康豆</div>
              <div>12个</div>
              <div><el-button type="danger" size="mini" @click="cz">充值</el-button></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="">
              <div class="round" >
                <img src="" width="100%">
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div>刘德华</div>
              <div><i class="iconfont icon-nan sex" v-if="1 == 1"></i><i class="iconfont icon-nv sex" v-if="1 == 0"></i></div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="line"></div>

      <br/>
      <div class="text">
        <span>身份证号码</span>
        <span class="itemText" >{{'5103021993832727588'.substr(0,6)}}********{{'5103021993832727588'.substr(14,4)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="show('phone')">
        <span>联系电话</span>
        <span class="itemText" >{{'12231121231'.substr(0,3)}}****{{'12231121231'.substr(7)}}</span>
      </div>
      <div class="line2"></div>
      <div class="text"  @click="show('address')">
        <span>联系地址</span>
        <span class="itemText" >上海</span>
      </div>
      <div class="line2"></div>
      <div class="text" >
        <span>团队</span>
        <span class="itemText" >第一团队</span>
      </div>
      <div class="line2"></div>
      <div class="text" @click="buyHist">
        <span>购买记录</span>
        <span class="itemText">》</span>
      </div>
      <div class="line2"></div>
      <el-dialog title="提示" :visible.sync="dialogVisible" size="large">
        <el-input  v-model="val" size="small">
          <template slot="prepend">{{text}}</template>
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="change">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'gl_userInfo',
    data() {
      return {
        dialogVisible: false,
        text: 'ces',
        val: '',
      };
    },
    created() {
    },
    methods: {
      buyHist(){},
      show(data){},
      change(){},
      cz(){
        this.$router.push({path:'gl_recharge'});
      },
      show(val) {
        if (val === 'phone') {
          this.text = '电话号码';
          this.val = '';
        } else {
          this.text = '联系地址';
          this.val = '';
        }
        this.dialogVisible = true;
      },
    },
  };
</script>

<style scoped>
  .userInfoHead{
    text-align: center;
    padding: 4rem 1rem;
    color: #fff;
    background: url("../../../assets/userInfo.jpg");
  }
  .round{
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
  }
  .grid-content{
    padding-top: 1.3rem;
  }
  .sex{
    font-size: .6rem;
  }
  .czBtn{
    background: #FF4949;
    border: none;
    color: #fff;
    border-radius: .2rem;
    padding: .2rem .4rem;
  }
  .text{
    padding: 0 .6rem;
    line-height: 1.6rem;
    color: #324057;
  }
  .itemText{
    float: right;
    color: #999;
    font-size: .8rem;
  }
</style>
