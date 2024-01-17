import * as echarts from 'echarts';
// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('lineChart-dev'));

var option = {
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150],
        type: 'line'
      }
    ]
  };

myChart.setOption(option);  