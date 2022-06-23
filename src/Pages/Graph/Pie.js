import React from "react";
import ReactEcharts from "echarts-for-react"; 

var dataList = [
    { value: 1048, name: 'CardSetUp1' },
    { value: 735, name: 'CardSetUp2' },
    { value: 580, name: 'CardSetUp3' },
    { value: 484, name: 'CardSetUp4' },
    { value: 300, name: 'CardSetUp5' },
    { value: 10, name: 'CardSetUp6' }

  ];
function Pie() { 
const option = {
    title: {
      text: 'Cards by Card Setup',
      subtext: '',
      left: 'center',
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 'right'
        ,formatter: name => {
        var value = dataList.filter(row => row.name === name)[0].value
        return name + '    ' + value;
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: dataList,
          itemStyle: {
            normal : {
                label : {
                          show : false
                         },
                labelLine : {
                              show : false
                             }
                }
          }
        }
    ]
  };  
return <ReactEcharts option={option} />;
} 
export default Pie;

