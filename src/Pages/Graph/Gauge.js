import React from "react";

import ReactEcharts from "echarts-for-react";
function Gauge(props) {
  const option = {
    title: {
      text: 'Availability',
      left: 'center',
      
      textStyle:{
        color: 'white',
        fontSize: 14,
      }
      
    },
    series: [
      {
        type: 'gauge',
        center: ['50%', '45%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "50%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#FF6E76'],
              [0.7, '#FDDD60'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: 'white',
          fontSize: 15,
          distance: -60,
          formatter: function (value) {
            if (value === 0) {
              return '0';
            } else if (value === 30) {
              return '30';
            } else if (value === 70) {
              return '70';
            } else if (value === 100) {
              return '100';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 30
        },
        detail: {
          fontSize: 20,
          color:"white",
          offsetCenter: [0, '-10%'],
          valueAnimation: true,
          formatter: function (value) {
            return Math.round(value * 100) + '%';
          }
        },
        data: [
          {
            value: parseInt(props.value) / 100,
            name: ''
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '45%'],
        radius: "40%",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        itemStyle: {
        color: props.risk,
        },
        progress: {
          show: true,
          width: 18
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: parseInt(props.value, 10)
          }
        ]
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
export default Gauge;