<template>
    <div style="padding:.6rem .2rem">
      <el-row :gutter="10" style="margin: 0">
        <el-col :span="6">
          <img src="http://iph.href.lu/120x160" width="100%"/>
        </el-col>
        <el-col :span="18">
          <div @click="show">
            <div class="teamTitle">团队名称</div>
            <div class="teamDatile">团队介绍团队介绍团队介绍团队绍团队介绍团队介绍团队介绍团队介绍</div>
            <div class="teamCount">当前人数：309人</div>
            <div class="teamCreateDate">创建时间：2017-06-18</div>
          </div>
        </el-col>
      </el-row>

      <el-dialog
        title="加入团队"
        :visible.sync="dialogVisible"
        size="large">
        <span>长按识别下方二维码</span>
        <img width="100%" src="https://qr.api.cli.im/qr?data=http%253A%252F%252Fwww.baidu.com&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=1d654768e833ea12c3e7d7c2873ec606"/>
      </el-dialog>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'gl_team',
      data(){
        return {
          dialogVisible: false,
        };
      },
      methods: {
        show(){
          this.dialogVisible = true
        },
      },
    };
</script>

<style scoped>
  .teamTitle{
    font-size: 1.2rem;
    color: #409EFF;
  }
  .teamDatile{
    max-height: 40px;
  }
  .teamCount{
    color: #409EFF;
  }
  .teamCreateDate{
    color: #409EFF;
  }
</style>
