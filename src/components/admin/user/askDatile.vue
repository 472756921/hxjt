<template>
  <div style="padding: 10px;overflow:auto;">
    <UD :userIDt="user.id"/>
    <br/>
    <el-row>
      <el-col :span="24"  class="userAsk">
        <h4 style="margin:0;">用户提问</h4>
        <br/>
        <div>那时我的家住在高士的老街上，老街是散发清新泥土气息的土路面，路的两旁林立着参差不齐却古朴典雅的青砖瓦房。与青砖瓦房形成鲜明对比的是，我家斜对面矗立着高大而气派的高士合作社，合作社虽也是青砖瓦房结构，但它是那种带有木质阁楼的楼房，比民宅要高许多，兀立在那里有种鹤立鸡群的感觉。而在那</div>
        <br/>
        <div>
          <img src="http://iph.href.lu/100x100" width="100px" @click="showImg" title="点击查看大图"/>
          <img src="http://iph.href.lu/100x100" width="100px" @click="showImg" title="点击查看大图"/>
          <img src="http://iph.href.lu/100x100" width="100px" @click="showImg" title="点击查看大图"/>
        </div>
        <div class="docWri">
          <h4 style="margin:12px 0;">医生回复</h4>
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea" :autosize="{ minRows: 4, maxRows: 4}"></el-input>
        </div>
        <br/>
        <el-button type="primary">提交</el-button>
      </el-col>
    </el-row>

    <el-dialog title="查看详细" :visible.sync="dialogVisible" size="tiny">
      <img src="http://iph.href.lu/500x500"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import UD from './userDatile';

  export default {
    name: 'askDatile',
    components: { UD },
    created() {
      this.user = this.$route.params.user;
    },
    data() {
      return {
        user: '',
        dialogVisible: false,
        textarea: '',
      };
    },
    methods: {
      showImg(){
        this.dialogVisible = true;
      },
    },
  };
</script>

<style scoped>
.userAsk{
  background: #E5E9F2;
  padding: 10px 10px 30px 10px;
}
  .docWri{

  }
</style>
