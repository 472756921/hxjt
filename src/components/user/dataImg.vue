<template>
  <div>
    <div id="main" style="width:100%;height:200px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'dataImg',
      mounted(){
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
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','7','7','7','7','7','7','7','7']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'血压（高）',
              type:'line',
              stack: '总量1',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'血压（低）',
              type:'line',
              stack: '总量2',
              data:[220, 182, 191, 234, 290, 350, 310]
            },
            {
              name:'心率',
              type:'line',
              stack: '总量3',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'血糖',
              type:'line',
              stack: '总量4',
              data:[320, 332, 301, 334, 390, 230, 320]
            },
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
    };
</script>

<style scoped>

</style>
