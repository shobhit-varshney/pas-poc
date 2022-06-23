import React from 'react';
import ReactEcharts from 'echarts-for-react';
import "./Graph.css"
 
const Graph=()=>
{
  var series = [{
    name: 'M1',
    data: [100, 115, 165, 107, 67]
}, {
    name: 'M2',
    data: [85, 106, 129, 161, 123]
}, {
    name: 'M3',
    data: [67, 87, 86, 167, 157]
}]

var genFormatter = (series) => {
    return (param) => {
        let sum = 0;
        series.forEach(item => {
            sum += item.data[param.dataIndex];
        });
        return sum
    }
};
  const heatMap = {
    
  };

  const table = {
    
  };

  const point = {
    
  };

  const bar = {
    color: ['#3398DB', '#5528DB', '#ff00DB', '#3300DB', '#de3423'],
 
    xAxis : [
        {
            type : 'category',
            axisLabel: {
              inside: false,
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
        }
    ],
    legend: {
      data: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
      orient: "vertical",
      right: "0%",
      top:"25%"
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'M1',
            type:'bar',
            stack: 'stack',
            data:[3000, , , , ,,,]
        }, {
            name:'M2',
            type:'bar',
            stack: 'stack',
            data:[, 2500, , , ,,,]
        }, {
            name:'M3',
            type:'bar',
            stack: 'stack',
            data:[, , 2000, , ,,,]
        }, {
            name:'M4',
            type:'bar',
            stack: 'stack',
            data:[, , , 1500, ,,,]
        }, {
            name:'M5',
            type:'bar',
            stack: 'stack',
            data:[, , , , 1000,,,]
        },  {
            name:'M6',
            type:'bar',
            stack: 'stack',
            data:[, , , , ,500,,]
        }
    ]
};
//for references : https://stackoverflow.com/questions/52771079/echarts-display-corresponding-legend-for-each-bar

  const stackedBar ={
    legend: {
      orient: 'vertical',
      right: "0%",
      top: 'center',
      formatter: "40",        
    },
  title: {
    text: 'Day output'
  },
  xAxis: {
      data: ['D1', 'D2', 'D3', 'D4']
    },
    yAxis: {type: 'value'},
    series: series.map((item, index) => Object.assign(item, {
      type: 'bar',
      stack: true,
      label: {
          show: index = false,
          formatter: genFormatter(series),
          fontSize: 20,
          color: 'black',
          position: 'top'
      },
  }))
  }

  const line = {
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      
      axisLine: {
        lineStyle: {
          type: "solid",
          width: 5,
          color:'green'
        },
        onZero:true
      },
      axisLabel:{
        color:"black"
      },
      onZero: true
  }],
    yAxis: {
      min:0,
      type:'value'
    },
    series: [
     
      {
        type: 'line',
        showSymbol: false,
        smooth: true,
        color:"yellow",
        width:5,
        markLine: {
          symbol: ['none', 'none'],
          label: {show: false},
          data: [
            {xAxis: 0},
              {xAxis: 5000},
              {xAxis: 7500},
              {xAxis: 1000},
            
          ],
          lineStyle:{
            type:'solid',
            color:'black'
          }
      },
      data: [0, 5000,7500, 1000],

      }
    ]
  
  };

  const singleStat = {
    
  };

  const gauge = {
    
  };

  const pie = {
    
  };

  const discrete= {

  };

  const lcd = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['', '', '', '', '', ''],
    },
    series: [
      {
        name: '2021',
        type: 'bar',
        label: {
          show: true,
          position: 'right',
        },
        data: [18203, 23489, 29034, 34970, 31744, 30230],
        showBackground: true,
      },
    ],
  };
  return (
    <div>
      <h3>Graphs</h3>
      <div className="flex-container">
      <div>
        <p>Heat Map</p>
        <ReactEcharts option={heatMap} />
      </div>
      <div>
      <p>Table</p>
      <ReactEcharts option={table} />
      </div>
      <div>
      <p>Point Chart</p>
        <ReactEcharts option={point} />
      </div>
      <div>
      <p>Bar Chart</p>
      <ReactEcharts option={bar} />
      </div>
      <div>
      <p>Stacked Bar Chart</p>
        <ReactEcharts option={stackedBar} />
      </div>
      <div>
      <p>Line Chart</p>
      <ReactEcharts option={line} />
      </div>
      <div>
      <p>Single Stat</p>
        <ReactEcharts option={singleStat} />
      </div>
      <div>
      <p>Gauge</p>
      <ReactEcharts option={gauge} />
      </div>
      <div>
      <p>Pie Chart</p>
        <ReactEcharts option={pie} />
      </div>
      <div>
      <p>Discrete Panel</p>
      <ReactEcharts option={discrete} />
      </div>
      <div>
      <p>LCD Gauge</p>
        <ReactEcharts option={lcd} />
      </div>
      </div>
    </div>
  );
  
}
 
export default Graph;