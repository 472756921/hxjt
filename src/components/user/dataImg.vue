<template>
  <div id="imgContent">
    <div id="main"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'dataImg',
      created(){
        this.data = this.$route.params.data;
        this.data.map((it, i) => {
          if(i>=20){
            return false
          }
          this.userData.date.push(it.create_date.split(':')[0]+':'+it.create_date.split(':')[1]);
          if(it.blood_pressure!='' &&it.blood_pressure!=null){
            this.userData.blood_pressure_g.push(it.blood_pressure.split('/')[0]);
            this.userData.blood_pressure_d.push(it.blood_pressure.split('/')[1]);
          }
          if(it.blood_sugar!='' &&it.blood_sugar!=null){
            this.userData.blood_sugar.push(it.blood_sugar);
          }
          if(it.heart_rate!='' &&it.heart_rate!=null){
            this.userData.heart_rate.push(it.heart_rate);
          }
        })
      },
      data() {
        return {
          data: '',
          userData: {
            date: [],
            blood_pressure_g: [],
            blood_pressure_d: [],
            heart_rate: [],
            blood_sugar: [],
          },
          w: '',
          h: '',
        }
      },
      mounted(){
        window.onresize = this.detectOrient;
        this.detectOrient();
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '4%',
            right: '7%',
            bottom: '3%',
            top: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data:this.userData.date,
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'血压（高）',
              type:'line',
              stack: '总量1',
              data: this.userData.blood_pressure_g
            },
            {
              name:'血压（低）',
              type:'line',
              stack: '总量2',
              data:this.userData.blood_pressure_d,
            },
            {
              name:'心率',
              type:'line',
              stack: '总量3',
              data:this.userData.heart_rate,
            },
            {
              name:'血糖',
              type:'line',
              stack: '总量4',
              data:this.userData.blood_sugar,
            },
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      methods: {
        detectOrient() {
          var width = document.documentElement.clientWidth,
            height =  document.documentElement.clientHeight,
            $wrapper =  document.getElementById("imgContent"),
            style = "";
          if( width >= height ){ // 横屏
            style += "width:" + width + "px;";  // 注意旋转后的宽高切换
            style += "height:" + height + "px;";
            style += "-webkit-transform: rotate(0); transform: rotate(0);";
            style += "-webkit-transform-origin: 0 0;";
            style += "transform-origin: 0 0;";
          }
          else{ // 竖屏
            style += "width:" + height + "px;";
            style += "height:" + width + "px;";
            style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
            // 注意旋转中点的处理
            style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
            style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
          }
          $wrapper.style.cssText = style;
        }
      },
    };
</script>

<style scoped>
  #main{
    height: 99%;
  }
</style>
