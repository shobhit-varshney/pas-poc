import React from "react";
import ReactEcharts from "echarts-for-react"; 

var dataList = [
    { value: 1248, name: 'CardSetUp1' },
    { value: 735, name: 'CardSetUp2' },
    { value: 580, name: 'CardSetUp3' },
    { value: 484, name: 'CardSetUp4' },
    { value: 300, name: 'CardSetUp5' },
    { value: 10, name: 'CardSetUp6' },
    { value: 104, name: 'CardSetUp7' },
    { value: 75, name: 'CardSetUp8' },
    { value: 80, name: 'CardSetUp9' },
    { value: 84, name: 'CardSetUp10' },
    { value: 300, name: 'CardSetUp11' },
    { value: 102, name: 'CardSetUp12' },
    { value: 148, name: 'CardSetUp13' },
    { value: 750, name: 'CardSetUp14' },
    { value: 500, name: 'CardSetUp15' },
    { value: 44, name: 'CardSetUp16' },
    { value: 390, name: 'CardSetUp17' },
    { value: 190, name: 'CardSetUp18' },
    { value: 108, name: 'CardSetUp19' },
    { value: 35, name: 'CardSetUp20' },
    { value: 50, name: 'CardSetUp21' },
    { value: 44, name: 'CardSetUp22' },
    { value: 90, name: 'CardSetUp23' },
    { value: 1000, name: 'CardSetUp24' }

  ];

  var dataList2 = [
    { value: 248, name: 'JobSetUp1' },
    { value: 535, name: 'JobSetUp2' },
    { value: 680, name: 'JobSetUp3' },
    { value: 384, name: 'JobSetUp4' },
    { value: 500, name: 'JobSetUp5' },
    { value: 20, name: 'JobSetUp6' },
    { value: 304, name: 'JobSetUp7' },
    { value: 65, name: 'JobSetUp8' },
    { value: 20, name: 'JobSetUp9' },
    { value: 184, name: 'JobSetUp10' },
    { value: 100, name: 'JobSetUp11' },
    { value: 102, name: 'JobSetUp12' },
    { value: 748, name: 'JobSetUp13' },
    { value: 450, name: 'JobSetUp14' },
    { value: 100, name: 'JobSetUp15' },
    { value: 144, name: 'JobSetUp16' },
    { value: 190, name: 'JobSetUp17' },
    { value: 490, name: 'JobSetUp18' },
    { value: 408, name: 'JobSetUp19' },
    { value: 25, name: 'JobSetUp20' },
    { value: 180, name: 'JobSetUp21' },
    { value: 144, name: 'JobSetUp22' },
    { value: 10, name: 'JobSetUp23' },
    { value: 600, name: 'JobSetUp24' }

  ];
function Pie(props) { 
const option = {
    title: {
      text: props.title,
      subtext: '',
      left: '20%',
      textStyle: {
        fontSize: 14,
        color: 'white',
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      textStyle: {
        fontSize: 13,
        color: 'white',
      },
      type: 'scroll',
      formatter: name => {
        let ele = props.type=="dataList"?dataList:dataList2
        var value =  ele.filter(row => row.name === name)[0].value
        return name + '    ' + value;
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '60%',
        center: ['35%', '50%'],
        data: props.type=="dataList"?dataList:dataList2,
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

